import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, DoubleSide, MathUtils, Vector3 } from "three";

const MODEL_URL = `${process.env.PUBLIC_URL}/models/earth.glb`;
const DESIRED_RADIUS = 2;
const IDLE_SPEED = 0.08; // radians per second of gentle auto-spin
const EARTH_TILT = 0.41; // ~23.4° axial tilt

/**
 * The earth model.
 *
 * `rotationTarget` is a plain mutable object ({ y }) owned by the parent.
 * Scroll animations write to it at any time, even before the model has
 * loaded; every frame the globe eases toward it. This avoids the old
 * problem where GSAP tried to animate a ref that was still null because
 * the model loads asynchronously.
 */
export default function Globe({ rotationTarget }) {
  const spinRef = useRef(null);
  const idle = useRef(0);
  const { scene } = useGLTF(MODEL_URL);

  // useGLTF caches one shared scene object. Clone it so re-mounts (resize
  // across the breakpoint, StrictMode, route changes) never re-centre an
  // object that was already moved, which used to push the globe off-centre.
  const { model, scale } = useMemo(() => {
    const clone = scene.clone(true);
    clone.updateMatrixWorld(true);

    const box = new Box3().setFromObject(clone);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const radius = Math.max(size.x, size.y, size.z) / 2 || 1;

    clone.position.sub(center);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false;
        child.material.side = DoubleSide;
      }
    });

    return { model: clone, scale: DESIRED_RADIUS / radius };
  }, [scene]);

  useFrame((_, delta) => {
    const spin = spinRef.current;
    if (!spin) return;
    const dt = Math.min(delta, 0.1);
    idle.current += dt * IDLE_SPEED;
    const target = (rotationTarget?.y ?? 0) + idle.current;
    spin.rotation.y = MathUtils.damp(spin.rotation.y, target, 4, dt);
  });

  return (
    <group rotation={[0, 0, EARTH_TILT]}>
      <group ref={spinRef}>
        <group scale={scale}>
          <primitive object={model} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_URL);

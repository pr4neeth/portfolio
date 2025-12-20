import React, {
  forwardRef,
  useRef,
  useLayoutEffect,
  useMemo,
  useImperativeHandle,
} from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

const DESIRED_RADIUS = 2;

const Globe = forwardRef(function Globe(_, ref) {
  const pivotRef = useRef(null);   // rotates
  const contentRef = useRef(null); // scales
  const { scene } = useGLTF("/models/earth.glb");

  useImperativeHandle(ref, () => pivotRef.current);

  const modelInfo = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    const radius = maxAxis / 2;
    return { center, radius };
  }, [scene]);

  useLayoutEffect(() => {
    if (!pivotRef.current || !contentRef.current) return;

    scene.traverse((child) => {
      if (child && child.isMesh) {
        child.material.side = 2; // DoubleSide
        child.material.needsUpdate = true;
        child.frustumCulled = false;
      }
    });

    // center
    scene.position.set(-modelInfo.center.x, -modelInfo.center.y, -modelInfo.center.z);

    // scale content
    const scale = DESIRED_RADIUS / modelInfo.radius;
    contentRef.current.scale.setScalar(scale);

    // reset pivot rotation on mount (prevents “cut/jump” after route nav)
    pivotRef.current.rotation.set(0, 0, 0);
  }, [scene, modelInfo.center, modelInfo.radius]);

  return (
    <group ref={pivotRef} position={[0, 0, 0]}>
      <group ref={contentRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
});

export default Globe;

useGLTF.preload("/models/earth.glb");

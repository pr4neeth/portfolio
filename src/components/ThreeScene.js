import React, { Component, Suspense, useLayoutEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import Globe from "./Globe";

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useLayoutEffect(() => {
    if (!(camera instanceof PerspectiveCamera)) return;

    const isMobile = size.width < 900;
    camera.position.set(0, 0, isMobile ? 10.5 : 8.5);
    camera.fov = isMobile ? 38 : 35;
    camera.near = 0.1;
    camera.far = 200;
    camera.updateProjectionMatrix();
  }, [camera, size.width]);

  return null;
}

// If WebGL or the model fails, hide the globe instead of taking the whole
// page down with it.
class GlobeErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.warn("Globe failed to render:", error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function ThreeScene({ rotationTarget }) {
  return (
    <GlobeErrorBoundary>
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <ResponsiveCamera />

        <ambientLight intensity={1.2} />
        <directionalLight position={[6, 6, 6]} intensity={2.2} />
        <directionalLight position={[-6, -4, -6]} intensity={1.2} />

        <Suspense fallback={null}>
          <Globe rotationTarget={rotationTarget} />
        </Suspense>

        {/*
          Studio-style reflections built locally. The old
          <Environment preset="studio" /> downloaded an HDR file from
          raw.githack.com at runtime; when that request was slow or blocked
          the globe never appeared, and when it failed the whole page went
          blank.
        */}
        <Environment resolution={256}>
          <Lightformer intensity={2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={1.5} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 2, 1]} />
          <Lightformer intensity={1.5} position={[5, 1, -1]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
          <Lightformer intensity={1} position={[0, -5, 5]} rotation-x={-Math.PI / 2} scale={[10, 10, 1]} />
        </Environment>
      </Canvas>
    </GlobeErrorBoundary>
  );
}

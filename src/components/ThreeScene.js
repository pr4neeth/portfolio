import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useLayoutEffect } from "react";
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

export default function ThreeScene({ globeRef }) {
  return (
    <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
      <ResponsiveCamera />

      <ambientLight intensity={1.2} />
      <directionalLight position={[6, 6, 6]} intensity={2.2} />
      <directionalLight position={[-6, -4, -6]} intensity={1.2} />

      <Globe ref={globeRef} />
      <Environment preset="studio" />
    </Canvas>
  );
}

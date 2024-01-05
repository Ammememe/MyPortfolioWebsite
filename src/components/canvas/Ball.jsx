import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Earth = () => {
  const { scene } = useGLTF('public/assets/clouds.glb'); // Update the path to your .glb file
  return <primitive object={scene} />;
};

const EarthCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

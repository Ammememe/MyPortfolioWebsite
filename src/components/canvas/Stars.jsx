import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Preload } from "@react-three/drei";

const Clouds = () => {
  const { scene } = useGLTF('/assets/clouds.glb'); // Update the path to your .glb file
  const ref = useRef();

  // Adjust material properties
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        // Modifying the existing material
        child.material.color.set('blue'); // Adjust the color
        child.material.transparent = true;
        child.material.opacity = 8; // Adjust opacity to make it appear darker
      }
    });
  }, [scene]);

  // Add random rotation
  useFrame(() => {
    ref.current.rotation.x += 0.000001; // Adjust these values for different speed and direction
    ref.current.rotation.y += 0.00015; // Adjust these values for different speed and direction
  });

  return <primitive ref={ref} object={scene} />;
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [1, 0, 5], fov: 40 }}>
        <Suspense fallback={null}>
          <Clouds />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

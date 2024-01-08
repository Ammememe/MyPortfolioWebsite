import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import { AnimationMixer } from 'three';
import CanvasLoader from "../Loader";

const AnimatedModel = ({ url, position }) => {
  const { scene, animations } = useGLTF(url);
  const groupRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length > 0 && groupRef.current) {
      mixerRef.current = new AnimationMixer(groupRef.current);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <primitive ref={groupRef} object={scene} position={position} />;
};

const EarthCanvas = () => {
  const modelUrl = "dist/assets/robot.glb"; // Replace with your model's URL

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 35,
        near: 0.1,
        far: 1000,
        position: [4, 4, 12], // Adjust camera position as needed
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Rotating>
          <AnimatedModel url={modelUrl} position={[0, 0, 0]} />
        </Rotating>
        <OrbitControls
          autoRotate={false}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};


const Rotating = ({ children }) => {
  const ref = useRef();

  useFrame(() => {
    // Rotate the model each frame
    ref.current.rotation.y += 0.01; // Adjust this value to change the rotation speed
  });

  return <group ref={ref}>{children}</group>;
};



export default EarthCanvas;

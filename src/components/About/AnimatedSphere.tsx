"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Canvas className="w-full h-3/4">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Sphere visible args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default AnimatedSphere;

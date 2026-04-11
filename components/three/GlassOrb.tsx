"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function OrbMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !innerRef.current) return;
    const t = state.clock.getElapsedTime();
    // Slow rotation
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
    meshRef.current.rotation.y = t * 0.12;
    innerRef.current.rotation.x = -t * 0.08;
    innerRef.current.rotation.y = t * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <group>
        {/* Outer glass shell */}
        <mesh ref={meshRef} castShadow>
          <sphereGeometry args={[1.4, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            thickness={0.3}
            roughness={0.02}
            metalness={0.0}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.06}
            distortion={0.3}
            distortionScale={0.3}
            temporalDistortion={0.05}
            color="#c4e8ff"
            attenuationColor="#7afcff"
            attenuationDistance={0.5}
          />
        </mesh>

        {/* Inner glow core */}
        <mesh ref={innerRef} scale={0.55}>
          <icosahedronGeometry args={[1, 4]} />
          <meshStandardMaterial
            color="#7c5cff"
            emissive="#7c5cff"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Teal accent orb */}
        <mesh position={[0.6, 0.5, -0.4]} scale={0.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#0d4f5c"
            emissive="#0ff4ff"
            emissiveIntensity={2}
            roughness={0}
            metalness={1}
          />
        </mesh>

        {/* Point light inside */}
        <pointLight color="#7afcff" intensity={3} distance={4} />
        <pointLight color="#c4a7ff" intensity={2} position={[1, 1, 1]} distance={3} />
      </group>
    </Float>
  );
}

export default function GlassOrb() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e8f0ee" />
        <directionalLight position={[-3, -2, -3]} intensity={0.4} color="#7c5cff" />
        <Environment preset="city" />
        <OrbMesh />
      </Canvas>
    </div>
  );
}

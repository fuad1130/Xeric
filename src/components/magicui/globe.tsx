
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const GLOBE_CONFIG = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: {
    lat: 22.3193,
    lng: 114.1694,
  },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const GlobeVisualization = () => {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (globeRef.current && GLOBE_CONFIG.autoRotate) {
      globeRef.current.rotation.y += GLOBE_CONFIG.autoRotateSpeed * 0.01;
    }
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[1, 50, 50]} scale={2}>
        <meshPhongMaterial
          color={GLOBE_CONFIG.globeColor}
          emissive={GLOBE_CONFIG.emissive}
          emissiveIntensity={GLOBE_CONFIG.emissiveIntensity}
          shininess={GLOBE_CONFIG.shininess}
          transparent
          opacity={0.9}
        />
      </Sphere>
      
      {GLOBE_CONFIG.showAtmosphere && (
        <Sphere args={[1, 50, 50]} scale={2.1}>
          <meshPhongMaterial
            color={GLOBE_CONFIG.atmosphereColor}
            transparent
            opacity={0.1}
            side={THREE.BackSide}
          />
        </Sphere>
      )}
      
      <ambientLight color={GLOBE_CONFIG.ambientLight} intensity={0.6} />
      <directionalLight
        color={GLOBE_CONFIG.directionalLeftLight}
        intensity={0.7}
        position={[-2, 0.5, 1.5]}
      />
      <directionalLight
        color={GLOBE_CONFIG.directionalTopLight}
        intensity={0.4}
        position={[0, 2, 1]}
      />
      <pointLight
        color={GLOBE_CONFIG.pointLight}
        intensity={0.8}
        position={[5, 3, 5]}
      />
    </group>
  );
};

interface GlobeProps {
  className?: string;
}

export const Globe = ({ className }: GlobeProps) => {
  return (
    <div className={`w-full h-full ${className || ""}`}>
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 5] }}
        style={{ background: "transparent" }}
      >
        <GlobeVisualization />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

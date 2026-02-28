"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { HairStrand } from "./HairStrand";

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        {/* Iluminación optimizada para material metálico dorado */}
        <ambientLight intensity={0.35} color="#F5EBD8" />

        {/* Luz clave principal – crea el destello dorado */}
        <directionalLight
          position={[4, 6, 4]}
          intensity={2.4}
          color="#FFF8E8"
          castShadow
        />

        {/* Luz de relleno suave desde la izquierda */}
        <directionalLight
          position={[-3, 2, -1]}
          intensity={0.9}
          color="#E8D5B0"
        />

        {/* Rim light trasero para separar del fondo */}
        <directionalLight
          position={[0, -2, -4]}
          intensity={0.6}
          color="#D4B896"
        />

        {/* Point light frontal bajo para calidez */}
        <pointLight position={[1, -2, 3]} intensity={1.2} color="#FFE4A0" />

        {/* Environment HDRI cálido */}
        <Environment preset="sunset" />

        {/* Float muy suave – solo oscilación vertical */}
        <Float
          speed={1.2}
          rotationIntensity={0}
          floatIntensity={0.3}
          floatingRange={[-0.08, 0.08]}
        >
          <HairStrand />
        </Float>
      </Suspense>
    </Canvas>
  );
}

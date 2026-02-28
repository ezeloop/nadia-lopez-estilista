"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ScissorsModel } from "./ScissorsModel";

interface ScissorsCanvasProps {
  /** "loading" = dark bg scissors (used in LoadingScreen), "modal" = light/transparent */
  variant?: "loading" | "modal";
}

export function ScissorsCanvas({ variant = "loading" }: ScissorsCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 5.2], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        {/* Ambient: soft fill */}
        <ambientLight
          intensity={variant === "loading" ? 0.5 : 0.4}
          color="#E8E8FF"
        />

        {/* Key light: strong, creates chrome reflections */}
        <directionalLight
          position={[4, 7, 5]}
          intensity={variant === "loading" ? 4.0 : 3.5}
          color="#FFFFFF"
          castShadow
        />

        {/* Fill light: cool-toned from left */}
        <directionalLight
          position={[-3, 2, -2]}
          intensity={1.4}
          color="#C0C8F0"
        />

        {/* Rim light: warm accent from below */}
        <pointLight
          position={[1, -3, 3]}
          intensity={variant === "loading" ? 2.5 : 2.0}
          color="#F0E8D0"
        />

        {/* Back rim for depth */}
        <directionalLight
          position={[0, -2, -4]}
          intensity={0.5}
          color="#8888AA"
        />

        <Environment preset="studio" />

        <ScissorsModel />
      </Suspense>
    </Canvas>
  );
}

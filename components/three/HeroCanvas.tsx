"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { HairStrand } from "./HairStrand";

/**
 * HeroCanvas – Canvas de Three.js montado en el Hero.
 * Float provee el movimiento flotante orgánico.
 * OrbitControls con autoRotate suave (sin interacción manual para mobile).
 */
export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        {/* Iluminación ambiental suave */}
        <ambientLight intensity={0.6} color="#F5EBD8" />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.2}
          color="#FFF5E4"
          castShadow
        />
        <directionalLight
          position={[-4, -2, -3]}
          intensity={0.4}
          color="#D4C4A8"
        />
        <pointLight position={[0, -3, 2]} intensity={0.3} color="#B8A080" />

        {/* Environment HDRI: suave, studio cálido */}
        <Environment preset="sunset" />

        {/* Float wrapper para movimiento orgánico continuo */}
        <Float
          speed={1.4}
          rotationIntensity={0.18}
          floatIntensity={0.4}
          floatingRange={[-0.1, 0.1]}
        >
          <HairStrand />
        </Float>

        {/* Auto-rotate muy suave, sin control manual para no competir con scroll */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Suspense>
    </Canvas>
  );
}

"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * HairStrand – forma orgánica 3D inspirada en el movimiento del cabello.
 * Construida con TubeGeometry + CatmullRomCurve3 (mechón curvo).
 * Iluminación suave con MeshTransmissionMaterial (vidrio orgánico).
 */
export function HairStrand() {
  const meshRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  // ── Curva paramétrica del mechón ──────────────────────────────
  const { geometry } = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 80;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = Math.sin(t * Math.PI * 2.2) * 0.35;
      const y = t * 3.5 - 1.75; // recorre -1.75 → 1.75
      const z = Math.cos(t * Math.PI * 1.4) * 0.18;
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);

    // Radio variable: más grueso en el centro, fino en las puntas
    const radii = Array.from({ length: segments + 1 }, (_, i) => {
      const t = i / segments;
      return 0.045 * Math.sin(t * Math.PI) + 0.008;
    });

    const tubeGeo = new THREE.TubeGeometry(curve, 200, 0.038, 12, false);

    return { geometry: tubeGeo, radii };
  }, []);

  // ── Mechones secundarios (más finos, offset) ─────────────────
  const secondaryGeometries = useMemo(() => {
    const geos: THREE.TubeGeometry[] = [];

    const offsets = [
      { xMul: 0.25, zMul: 0.22, freq: 1.8, phase: 0.8, radius: 0.018 },
      { xMul: -0.3, zMul: 0.15, freq: 2.5, phase: 1.4, radius: 0.014 },
      { xMul: 0.18, zMul: -0.2, freq: 1.6, phase: 0.3, radius: 0.016 },
    ];

    offsets.forEach(({ xMul, zMul, freq, phase, radius }) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 60; i++) {
        const t = i / 60;
        pts.push(
          new THREE.Vector3(
            Math.sin(t * Math.PI * freq + phase) * xMul,
            t * 2.8 - 1.4,
            Math.cos(t * Math.PI * 1.2 + phase) * zMul
          )
        );
      }
      geos.push(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(pts),
          120,
          radius,
          8,
          false
        )
      );
    });

    return geos;
  }, []);

  // ── Animación frame-by-frame ──────────────────────────────────
  useFrame((_, delta) => {
    time.current += delta;
    if (!meshRef.current) return;

    // Balanceo suave tipo péndulo natural
    meshRef.current.rotation.y = Math.sin(time.current * 0.4) * 0.12;
    meshRef.current.rotation.z = Math.sin(time.current * 0.25) * 0.06;
    meshRef.current.position.y = Math.sin(time.current * 0.35) * 0.08;
  });

  const strandMaterial = (
    <MeshTransmissionMaterial
      backside
      samples={4}
      thickness={0.3}
      roughness={0.05}
      transmission={0.92}
      ior={1.45}
      chromaticAberration={0.04}
      color="#C8B89A"
      attenuationColor="#9A8070"
      attenuationDistance={0.4}
    />
  );

  return (
    <group ref={meshRef} scale={1}>
      {/* Mechón principal */}
      <mesh geometry={geometry} castShadow>
        {strandMaterial}
      </mesh>

      {/* Mechones secundarios */}
      {secondaryGeometries.map((geo, i) => (
        <mesh key={i} geometry={geo} castShadow>
          <MeshTransmissionMaterial
            backside
            samples={2}
            thickness={0.15}
            roughness={0.08}
            transmission={0.85}
            ior={1.4}
            color="#B8A888"
            attenuationColor="#8A7060"
            attenuationDistance={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

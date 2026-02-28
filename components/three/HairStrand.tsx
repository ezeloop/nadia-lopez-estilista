"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STRAND_COUNT = 38;

export function HairStrand() {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  const { geometries, material } = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C8A96E"),
      metalness: 0.52,
      roughness: 0.32,
    });

    const geos = Array.from({ length: STRAND_COUNT }, (_, i) => {
      // Distribute strands radially around a central axis
      const angle = (i / STRAND_COUNT) * Math.PI * 2;
      const r = 0.04 + (i % 7) * 0.034; // inner to outer layers
      const offsetX = Math.cos(angle) * r;
      const offsetZ = Math.sin(angle) * r;

      // Unique wave parameters per strand → natural look
      const freq = 1.2 + (i % 9) * 0.1;
      const phase = i * 0.44;
      const amp = 0.035 + (i % 6) * 0.016;
      const tubeRadius = 0.007 + (i % 5) * 0.0025;
      const height = 2.8 + (i % 5) * 0.14;

      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 50; j++) {
        const t = j / 50;
        // Slight convergence at tip (taper inward toward top)
        const taper = 1 - t * 0.35;
        points.push(
          new THREE.Vector3(
            (offsetX + Math.sin(t * Math.PI * freq + phase) * amp) * taper,
            t * height - height / 2,
            (offsetZ + Math.cos(t * Math.PI * freq * 0.8 + phase) * amp * 0.65) * taper
          )
        );
      }

      return new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        60,
        tubeRadius,
        6,
        false
      );
    });

    return { geometries: geos, material: mat };
  }, []);

  useFrame((_, delta) => {
    time.current += delta;
    if (!groupRef.current) return;
    // Continuous slow rotation + gentle sway
    groupRef.current.rotation.y += delta * 0.22;
    groupRef.current.rotation.z = Math.sin(time.current * 0.28) * 0.06;
    groupRef.current.position.y = Math.sin(time.current * 0.36) * 0.06;
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => (
        <mesh key={i} geometry={geo} material={material} castShadow />
      ))}
    </group>
  );
}

"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ScissorsModel() {
  const groupRef = useRef<THREE.Group>(null);
  const topRef = useRef<THREE.Group>(null);
  const botRef = useRef<THREE.Group>(null);

  // Chrome material – shared across all parts
  const chromeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#CDCDE0"),
        metalness: 0.96,
        roughness: 0.05,
        envMapIntensity: 2.2,
      }),
    []
  );

  // ── Blade geometry: tapered shape via ExtrudeGeometry ──────────
  const bladeGeo = useMemo(() => {
    const bladeLen = 1.72;
    const bw = 0.055; // base width
    const shape = new THREE.Shape();
    shape.moveTo(-bw / 2, 0);
    shape.lineTo(bw / 2, 0);
    shape.quadraticCurveTo(bw / 2 + 0.012, bladeLen * 0.55, 0.004, bladeLen);
    shape.lineTo(-0.004, bladeLen);
    shape.quadraticCurveTo(-bw / 2 - 0.012, bladeLen * 0.55, -bw / 2, 0);

    const geo = new THREE.ExtrudeGeometry(shape, {
      steps: 1,
      depth: 0.018,
      bevelEnabled: true,
      bevelThickness: 0.005,
      bevelSize: 0.004,
      bevelSegments: 3,
    });
    // Center depth so the blade sits at z=0
    geo.translate(0, 0, -0.009);
    return geo;
  }, []);

  // ── Shank geometry: simple box connecting pivot to ring ─────────
  const shankLen = 0.9;
  const shankGeo = useMemo(
    () => new THREE.BoxGeometry(0.054, shankLen, 0.016),
    [shankLen]
  );

  // ── Ring handle: torus ──────────────────────────────────────────
  const ringRadius = 0.24;
  const ringGeo = useMemo(
    () => new THREE.TorusGeometry(ringRadius, 0.037, 16, 44),
    [ringRadius]
  );

  // ── Pivot screw: small disc ─────────────────────────────────────
  const pivotGeo = useMemo(
    () => new THREE.CylinderGeometry(0.05, 0.05, 0.055, 24),
    []
  );

  // ── Animation ───────────────────────────────────────────────────
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (!groupRef.current || !topRef.current || !botRef.current) return;

    // Whole scissors: slow Y rotation + gentle sway + float
    groupRef.current.rotation.y += delta * 0.28;
    groupRef.current.rotation.z = Math.sin(t * 0.44) * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.36) * 0.06;

    // Cutting motion: blades open and close rhythmically
    const cutAngle = Math.abs(Math.sin(t * 1.65)) * 0.28;
    topRef.current.rotation.z = cutAngle;
    botRef.current.rotation.z = -cutAngle;
  });

  // Ring position: just below end of shank
  const ringY = -(shankLen + ringRadius * 0.15);

  return (
    <group ref={groupRef} position={[0, 0.2, 0]}>
      {/* Top blade assembly – slightly in front on Z */}
      <group ref={topRef} position={[0, 0, 0.012]}>
        <mesh geometry={bladeGeo} material={chromeMat} castShadow />
        <mesh
          geometry={shankGeo}
          material={chromeMat}
          position={[0, -shankLen / 2, 0]}
          castShadow
        />
        <mesh
          geometry={ringGeo}
          material={chromeMat}
          position={[0, ringY, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        />
      </group>

      {/* Bottom blade assembly – slightly behind on Z */}
      <group ref={botRef} position={[0, 0, -0.012]}>
        <mesh geometry={bladeGeo} material={chromeMat} castShadow />
        <mesh
          geometry={shankGeo}
          material={chromeMat}
          position={[0, -shankLen / 2, 0]}
          castShadow
        />
        <mesh
          geometry={ringGeo}
          material={chromeMat}
          position={[0, ringY, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        />
      </group>

      {/* Pivot screw – at the crossing point */}
      <mesh
        geometry={pivotGeo}
        material={chromeMat}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      />
    </group>
  );
}

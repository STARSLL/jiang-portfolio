"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import {
  createSphere,
  createTree,
  createChair,
  createDrone
} from "./ShapeGenerator";

type ShapeMode = "sphere" | "tree" | "chair" | "drone";

export default function MorphingParticles() {
  const ref = useRef<THREE.Points>(null);

  const count = 30000;

  const sphere = useMemo(() => createSphere(count), []);
  const tree = useMemo(() => createTree(count), []);
  const chair = useMemo(() => createChair(count), []);
  const drone = useMemo(() => createDrone(count), []);

  const initialPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    sphere.forEach((p, i) => {
      arr[i * 3] = p[0];
      arr[i * 3 + 1] = p[1];
      arr[i * 3 + 2] = p[2];
    });

    return arr;
  }, [sphere, count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = 0.92;
      arr[i * 3 + 1] = 0.95;
      arr[i * 3 + 2] = 0.98;
    }

    return arr;
  }, [count]);

  const velocity = useMemo(() => new Float32Array(count * 3), [count]);

  const randomPhase = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * Math.PI * 2;
    }
    return arr;
  }, [count]);

  const target = useRef(sphere);
  const mode = useRef<ShapeMode>("sphere");
  const lastPhase = useRef(-1);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    const phase = Math.floor(time / 6) % 4;

    if (phase !== lastPhase.current) {
      lastPhase.current = phase;

      if (phase === 0) {
        target.current = sphere;
        mode.current = "sphere";
      } else if (phase === 1) {
        target.current = tree;
        mode.current = "tree";
      } else if (phase === 2) {
        target.current = chair;
        mode.current = "chair";
      } else {
        target.current = drone;
        mode.current = "drone";
      }

      for (let i = 0; i < count; i++) {
        const index = i * 3;

        velocity[index] += (Math.random() - 0.5) * 0.08;
        velocity[index + 1] += (Math.random() - 0.5) * 0.08;
        velocity[index + 2] += (Math.random() - 0.5) * 0.08;
      }
    }

    const geometry = ref.current.geometry;
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const colorAttr = geometry.attributes.color as THREE.BufferAttribute;

    const positions = positionAttr.array as Float32Array;
    const colorArray = colorAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const index = i * 3;

      let tx = target.current[i][0];
      let ty = target.current[i][1];
      let tz = target.current[i][2];

      if (mode.current === "sphere") {
        const len = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;
        const nx = tx / len;
        const ny = ty / len;
        const nz = tz / len;

        const waveA =
          Math.sin(time * 2.1 + i * 0.031 + randomPhase[i]) * 0.08;
        const waveB =
          Math.sin(time * 1.2 + (nx + ny + nz) * 8 + i * 0.007) * 0.05;
        const waveC =
          Math.cos(time * 1.6 + ny * 10 + randomPhase[i] * 0.7) * 0.04;

        const ripple = 1 + waveA + waveB + waveC;

        tx *= ripple;
        ty *= ripple;
        tz *= ripple;
      }

      const dx = tx - positions[index];
      const dy = ty - positions[index + 1];
      const dz = tz - positions[index + 2];

      velocity[index] += dx * 0.0021;
      velocity[index + 1] += dy * 0.0021;
      velocity[index + 2] += dz * 0.0021;

      velocity[index] *= 0.92;
      velocity[index + 1] *= 0.92;
      velocity[index + 2] *= 0.92;

      positions[index] += velocity[index];
      positions[index + 1] += velocity[index + 1];
      positions[index + 2] += velocity[index + 2];

      const px = positions[index];
      const py = positions[index + 1];
      const pz = positions[index + 2];

      const radius = Math.sqrt(px * px + py * py + pz * pz) || 1;
      const normalizedY = py / radius;

      const silver = { r: 0.93, g: 0.95, b: 0.98 };
      const deepGreen = { r: 0.18, g: 0.42, b: 0.34 };
      const glowGreen = { r: 0.65, g: 0.95, b: 0.78 };

      const shimmer =
        0.5 + 0.5 * Math.sin(time * 2.2 + i * 0.018 + randomPhase[i]);

      const verticalBand =
        0.5 + 0.5 * Math.sin(normalizedY * 8 + time * 1.4);

      const deepMix =
        mode.current === "sphere"
          ? 0.12 + 0.16 * verticalBand
          : 0.08 + 0.08 * verticalBand;

      const glowMix =
        mode.current === "sphere"
          ? 0.18 + 0.26 * shimmer
          : 0.12 + 0.12 * shimmer;

      let r =
        silver.r + (deepGreen.r - silver.r) * deepMix;
      let g =
        silver.g + (deepGreen.g - silver.g) * deepMix;
      let b =
        silver.b + (deepGreen.b - silver.b) * deepMix;

      r = r + (glowGreen.r - r) * glowMix;
      g = g + (glowGreen.g - g) * glowMix;
      b = b + (glowGreen.b - b) * glowMix;

      colorArray[index] = r;
      colorArray[index + 1] = g;
      colorArray[index + 2] = b;
    }

    positionAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;

    if (mode.current === "sphere") {
      ref.current.rotation.y += 0.0016;
      ref.current.rotation.x += 0.0003;
    } else if (mode.current === "drone") {
      ref.current.rotation.y += 0.0025;
    } else {
      ref.current.rotation.y += 0.0011;
    }
  });

  return (
    <points
      ref={ref}
      scale={1.3}
      position={[1.5, 0, 0]}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={initialPositions}
          count={initialPositions.length / 3}
          itemSize={3}
          args={[
            new THREE.BufferAttribute(
              initialPositions,
              3
            )
          ]}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
          args={[
            new THREE.BufferAttribute(
              colors,
              8
            )
          ]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.023}
        vertexColors
        transparent
        opacity={0.98}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingHeartMesh({ position, scale, speed, color }) {
  const meshRef = useRef();

  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x + 0.25, y + 0.25);
    shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
    shape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
    shape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 0.95);
    shape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
    shape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
    shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);
    return shape;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * 0.4;
    meshRef.current.rotation.z = Math.PI;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={[0, 0, Math.PI]}>
        <extrudeGeometry args={[heartShape, { depth: 0.12, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.04, bevelThickness: 0.04 }]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
}

export default function RomanticCanvas3D({ boost = false }) {
  const hearts = useMemo(() => [
    { position: [-2.8, 1.5, -3], scale: 0.45, speed: 1.2, color: "#E75480" },
    { position: [2.6, -1.2, -2.5], scale: 0.35, speed: 1.5, color: "#F8C8DC" },
    { position: [-1.8, -2.2, -4], scale: 0.5, speed: 0.9, color: "#D4AF37" },
    { position: [2.2, 2.0, -3.5], scale: 0.4, speed: 1.3, color: "#E75480" },
    { position: [0, 2.6, -4.5], scale: 0.3, speed: 1.1, color: "#F8C8DC" },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#F8C8DC" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#D4AF37" />
        
        <Stars radius={50} depth={40} count={boost ? 1800 : 900} factor={3} saturation={0.5} fade speed={boost ? 2.5 : 1} />
        <Sparkles count={boost ? 120 : 55} scale={8} size={2.2} speed={0.4} opacity={0.7} color="#D4AF37" />
        <Sparkles count={45} scale={10} size={1.8} speed={0.3} opacity={0.5} color="#F8C8DC" />

        {hearts.map((h, i) => (
          <FloatingHeartMesh key={i} {...h} />
        ))}
      </Canvas>
    </div>
  );
}

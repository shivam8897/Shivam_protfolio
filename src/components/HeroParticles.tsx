'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const count = 120

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
      const t = Math.random()
      // cyan (#22d3ee) → indigo (#818cf8)
      colors[i * 3]     = 0.13 + t * 0.38
      colors[i * 3 + 1] = 0.83 - t * 0.29
      colors[i * 3 + 2] = 0.93 + t * 0.03
    }
    return { positions, colors }
  }, [])

  const linePositions = useMemo(() => {
    const maxDist = 5
    const verts: number[] = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3]     - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < maxDist) {
          verts.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          )
        }
      }
    }
    return new Float32Array(verts)
  }, [positions])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.04
      pointsRef.current.rotation.x = t * 0.015
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.04
      linesRef.current.rotation.x = t * 0.015
    }
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.14} vertexColors sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.08} />
      </lineSegments>
    </>
  )
}

export default function HeroParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 70 }}
      style={{ position: 'absolute', inset: 0, background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ParticleField />
    </Canvas>
  )
}

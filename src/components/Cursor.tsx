'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // Dot follows instantly
  const dotX = useSpring(mx, { stiffness: 3000, damping: 100, mass: 0.05 })
  const dotY = useSpring(my, { stiffness: 3000, damping: 100, mass: 0.05 })

  // Ring lags behind
  const ringX = useSpring(mx, { stiffness: 180, damping: 24, mass: 0.4 })
  const ringY = useSpring(my, { stiffness: 180, damping: 24, mass: 0.4 })

  const ringScale = useMotionValue(1)
  const ringScaleSpring = useSpring(ringScale, { stiffness: 350, damping: 28 })

  const dotScale = useMotionValue(1)
  const dotScaleSpring = useSpring(dotScale, { stiffness: 500, damping: 30 })

  const opacity = useMotionValue(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      opacity.set(1)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea')) {
        ringScale.set(2.4)
        dotScale.set(0.4)
      }
    }

    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea')) {
        ringScale.set(1)
        dotScale.set(1)
      }
    }

    const hide = () => opacity.set(0)
    const show = () => opacity.set(1)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [mx, my, opacity, ringScale, dotScale])

  return (
    <motion.div style={{ opacity }} className="pointer-events-none">
      {/* Outer ring — lags, expands on hover */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 38,
          height: 38,
          borderRadius: '50%',
          border: '1.5px solid rgba(34,211,238,0.75)',
          scale: ringScaleSpring,
          boxShadow: '0 0 12px rgba(34,211,238,0.18)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />

      {/* Inner dot — nearly instant, shrinks on hover */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: '#22d3ee',
          scale: dotScaleSpring,
          boxShadow: '0 0 8px #22d3ee, 0 0 18px rgba(34,211,238,0.55)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </motion.div>
  )
}

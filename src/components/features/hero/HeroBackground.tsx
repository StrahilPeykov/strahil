'use client'

import { motion } from 'framer-motion'
import { useMousePosition } from '../../../hooks/useMousePosition'

const BACKGROUND_ELEMENTS = [
  { text: 'WORK', size: '20vw', position: { top: '10%', left: '-5%' }, opacity: 0.2 },
  { text: 'IDEAS', size: '18vw', position: { top: '30%', right: '-8%' }, opacity: 0.15 },
  { text: 'PLAY', size: '15vw', position: { bottom: '20%', left: '10%' }, opacity: 0.1 },
  { text: 'LIBRARY', size: '22vw', position: { bottom: '35%', right: '5%' }, opacity: 0.2 },
  { text: 'MEDIA', size: '16vw', position: { top: '50%', left: '40%' }, opacity: 0.1 },
  { text: 'CV', size: '12vw', position: { top: '70%', left: '-10%' }, opacity: 0.15 }
]

interface FloatingParticleProps {
  index: number
}

function FloatingParticle({ index }: FloatingParticleProps) {
  const randomColor = Math.random() > 0.5 ? '96, 165, 250' : '192, 132, 252'
  const size = Math.random() * 4 + 1
  const blur = Math.random() * 10 + 5

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `rgba(${randomColor}, ${Math.random() * 0.6 + 0.2})`,
        filter: 'blur(0.5px)',
        boxShadow: `0 0 ${blur}px rgba(${randomColor}, 0.3)`
      }}
      initial={{
        x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
        y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
      }}
      animate={{
        x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
        y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
      }}
      transition={{
        duration: Math.random() * 30 + 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
    />
  )
}

export function HeroBackground() {
  const mousePosition = useMousePosition()

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large background text elements */}
      <div className="absolute inset-0">
        {BACKGROUND_ELEMENTS.map((element, index) => (
          <motion.h2
            key={element.text}
            className="absolute font-display font-bold text-slate-800/20 select-none"
            style={{
              fontSize: element.size,
              ...element.position,
              opacity: element.opacity
            }}
            animate={{
              x: [0, index % 2 === 0 ? -20 : 20, 0],
              y: index > 2 ? [0, -15, 0] : undefined,
              opacity: [element.opacity, element.opacity * 0.7, element.opacity]
            }}
            transition={{
              duration: 20 + index * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {element.text}
          </motion.h2>
        ))}
      </div>

      {/* Cosmic gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(244, 114, 182, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at center, rgba(15, 23, 42, 0.9) 0%, transparent 100%)
          `
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      {/* Mouse follow gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.05), transparent 40%)`
        }}
      />
    </div>
  )
}
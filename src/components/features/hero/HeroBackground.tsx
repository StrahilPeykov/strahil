'use client'

import { motion } from 'framer-motion'
import { useMousePosition } from '../../../hooks/useMousePosition'

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

      {/* Animated orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      {/* Mouse follow gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.06), transparent 40%)`
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  )
}
'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Film, Gamepad2, Sparkles, Zap, Palette, Music, Binary, Shapes, MousePointer, ArrowRight, RefreshCw, Brain } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

const experiments = [
  {
    id: 'frameguessr',
    title: 'FrameGuessr',
    description: 'Daily movie & TV guessing game with progressive blur hints and soundtracks',
    icon: Film,
    gradient: 'from-yellow-500 to-orange-500',
    tags: ['Game', 'Next.js', 'Entertainment'],
    difficulty: 'Advanced',
    status: 'live',
    external: true,
    url: 'https://frameguessr.com'
  },
  {
    id: 'particle-physics',
    title: 'Particle Physics',
    description: 'Interactive gravity simulation with thousands of particles',
    icon: Sparkles,
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Canvas', 'Physics', 'Interactive'],
    difficulty: 'Advanced',
    status: 'live'
  },
  {
    id: 'color-generator',
    title: 'Cosmic Color Generator',
    description: 'AI-powered color palette generator with export features',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
    tags: ['Colors', 'AI', 'Design'],
    difficulty: 'Intermediate',
    status: 'live'
  },
  {
    id: 'sound-visualizer',
    title: 'Audio Visualizer',
    description: 'Real-time audio visualization using Web Audio API',
    icon: Music,
    gradient: 'from-green-500 to-teal-500',
    tags: ['Audio', 'Canvas', 'Real-time'],
    difficulty: 'Advanced',
    status: 'beta'
  },
  {
    id: 'binary-rain',
    title: 'Binary Rain',
    description: 'Matrix-style animation with customizable parameters',
    icon: Binary,
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Animation', 'Canvas', 'Classic'],
    difficulty: 'Beginner',
    status: 'live'
  },
  {
    id: '3d-shapes',
    title: '3D Shape Morpher',
    description: 'WebGL shape morphing with gesture controls',
    icon: Shapes,
    gradient: 'from-orange-500 to-red-500',
    tags: ['3D', 'WebGL', 'Animation'],
    difficulty: 'Expert',
    status: 'development'
  },
  {
    id: 'cursor-effects',
    title: 'Cursor Magic',
    description: 'Collection of creative cursor effects and trails',
    icon: MousePointer,
    gradient: 'from-indigo-500 to-purple-500',
    tags: ['CSS', 'JavaScript', 'Effects'],
    difficulty: 'Intermediate',
    status: 'live'
  }
]

// Mini particle system for the hero
function ParticleField() {
  const [particles, setParticles] = useState<Array<{x: number, y: number, vx: number, vy: number}>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + window.innerWidth) % window.innerWidth,
        y: (p.y + p.vy + window.innerHeight) % window.innerHeight
      })))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{ left: particle.x, top: particle.y }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.02
          }}
        />
      ))}
    </div>
  )
}

// Interactive color wheel demo
function ColorWheel() {
  const [rotation, setRotation] = useState(0)
  const [selectedColor, setSelectedColor] = useState('#60a5fa')

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const colors = [
    '#60a5fa', '#c084fc', '#f472b6', '#fbbf24', '#34d399', '#f87171'
  ]

  return (
    <div className="relative w-48 h-48 mx-auto">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: rotation }}
      >
        {colors.map((color, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full cursor-pointer"
            style={{
              backgroundColor: color,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
              transformOrigin: '50% 150%',
              rotate: i * 60
            }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </motion.div>
      <div 
        className="absolute inset-0 m-auto w-24 h-24 rounded-full border-4 border-white shadow-2xl"
        style={{ backgroundColor: selectedColor }}
      />
    </div>
  )
}

// Binary rain effect
function BinaryRain() {
  const [drops, setDrops] = useState<Array<{x: number, y: number, speed: number, chars: string[]}>>([])

  useEffect(() => {
    const newDrops = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100 - 100,
      speed: Math.random() * 2 + 1,
      chars: Array.from({ length: Math.floor(Math.random() * 10 + 5) }, () => 
        Math.random() > 0.5 ? '1' : '0'
      )
    }))
    setDrops(newDrops)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        y: drop.y > 100 ? -20 : drop.y + drop.speed
      })))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute font-mono text-green-400 text-xs"
          style={{ left: `${drop.x}%`, top: `${drop.y}%` }}
        >
          {drop.chars.map((char, j) => (
            <div key={j} style={{ opacity: 1 - j * 0.1 }}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function PlayPage() {
  const [hoveredExperiment, setHoveredExperiment] = useState<string | null>(null)
  const [activeDemo, setActiveDemo] = useState<'particles' | 'colors' | 'binary'>('particles')

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])

  return (
    <PageWrapper>
      <div onMouseMove={handleMouseMove}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
          {/* Interactive background based on active demo */}
          <div className="absolute inset-0">
            {activeDemo === 'particles' && <ParticleField />}
            {activeDemo === 'binary' && <BinaryRain />}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
          </div>
          
          {/* Mouse follower */}
          <motion.div
            className="pointer-events-none fixed w-64 h-64 rounded-full"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: '-50%',
              translateY: '-50%',
              background: 'radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: 1
            }}
          />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Gamepad2 className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Experimental
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Playground
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            >
              Interactive experiments, creative coding, and fun projects. 
              Where ideas come to play and boundaries are meant to be pushed.
            </motion.p>
            
            {/* Interactive Demo Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8"
            >
              <div className="mb-6">
                <div className="flex justify-center gap-2 mb-6">
                  {(['particles', 'colors', 'binary'] as const).map((demo) => (
                    <button
                      key={demo}
                      onClick={() => setActiveDemo(demo)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeDemo === demo
                          ? 'bg-purple-500 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {demo.charAt(0).toUpperCase() + demo.slice(1)}
                    </button>
                  ))}
                </div>
                
                {/* Demo content */}
                <div className="h-48 flex items-center justify-center">
                  {activeDemo === 'colors' && <ColorWheel />}
                  {activeDemo === 'particles' && (
                    <div className="text-center">
                      <Sparkles className="w-24 h-24 text-purple-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-gray-400">Move your mouse around!</p>
                    </div>
                  )}
                  {activeDemo === 'binary' && (
                    <div className="text-center">
                      <Binary className="w-24 h-24 text-green-400 mx-auto mb-4" />
                      <p className="text-gray-400">Matrix-style animation</p>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                This is just a preview. Click on any experiment below to see the full version!
              </p>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">13</div>
                <div className="text-sm text-gray-500">Experiments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-purple-400 mb-1">5k+</div>
                <div className="text-sm text-gray-500">Interactions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-pink-400 mb-1">∞</div>
                <div className="text-sm text-gray-500">Possibilities</div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Experiments Grid */}
        <section className="px-6 py-24 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-gray-400">
                Click on any experiment to dive in and start playing
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiments.map((experiment, index) => {
                const Icon = experiment.icon
                const href = experiment.external ? experiment.url : `/play/${experiment.id}`
                const target = experiment.external ? '_blank' : undefined
                const rel = experiment.external ? 'noopener noreferrer' : undefined
                
                return (
                  <motion.div
                    key={experiment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredExperiment(experiment.id)}
                    onMouseLeave={() => setHoveredExperiment(null)}
                    className="group relative"
                  >
                    <Link href={`/play/${experiment.id}`}>
                      <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${experiment.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        {/* Animated background pattern */}
                        {hoveredExperiment === experiment.id && (
                          <motion.div
                            className="absolute inset-0 opacity-5"
                            initial={{ backgroundPosition: '0% 0%' }}
                            animate={{ backgroundPosition: '100% 100%' }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            style={{
                              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                              backgroundSize: '200% 200%'
                            }}
                          />
                        )}
                        
                        {/* Status badge */}
                        <div className="absolute top-6 right-6">
                          <Badge 
                            variant={
                              experiment.status === 'live' ? 'success' : 
                              experiment.status === 'beta' ? 'blue' : 
                              'warning'
                            } 
                            size="sm"
                          >
                            {experiment.status}
                          </Badge>
                        </div>
                        
                        {/* Icon */}
                        <div className="mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experiment.gradient} p-2.5 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                          {experiment.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          {experiment.description}
                        </p>
                        
                        {/* Tags and difficulty */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {experiment.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-xs text-gray-500">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">
                            {experiment.difficulty}
                          </span>
                        </div>
                        
                        {/* Hover indicator */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all">
                          <ArrowRight className="w-5 h-5 text-purple-400" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
        
        {/* Featured Experiment */}
        <section className="px-6 py-24 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Featured Experiment
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl" />
              
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge variant="warning" className="mb-4">Featured This Week</Badge>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                      Neural Network Visualizer
                    </h3>
                    <p className="text-gray-400 mb-6">
                      An interactive visualization of how neural networks learn and make decisions. 
                      Watch in real-time as the network trains on your custom datasets and see 
                      the magic of machine learning unfold before your eyes.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <Badge variant="purple">TensorFlow.js</Badge>
                      <Badge variant="blue">D3.js</Badge>
                      <Badge variant="pink">WebGL</Badge>
                    </div>
                    
                    <div className="flex gap-4">
                      <Link
                        href="/play/neural-network"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                      >
                        Try it now
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-500/30 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all">
                        View source
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative h-80 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center">
                    {/* Placeholder for visualization */}
                    <div className="text-center">
                      <Brain className="w-32 h-32 text-yellow-400/30 mx-auto mb-4" />
                      <p className="text-gray-500">Interactive preview here</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                Got an idea for an experiment?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm always looking for new creative coding challenges. 
                If you have an idea or want to collaborate on something fun, let's talk!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Share your idea
                <Sparkles className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
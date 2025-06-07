'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X, Mail, Github, Linkedin, Instagram, Twitter, Code2, Sparkles } from 'lucide-react'

// Custom icons
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const LetterboxdIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M18 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0" />
  </svg>
)

// Refined Constellation component
const ConstellationHero = () => {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  
  const nodes = [
    { id: 'work', label: 'Work', x: 25, y: 35 },
    { id: 'ideas', label: 'Ideas', x: 65, y: 25 },
    { id: 'library', label: 'Library', x: 80, y: 55 },
    { id: 'media', label: 'Media', x: 55, y: 70 },
    { id: 'play', label: 'Play', x: 20, y: 60 },
    { id: 'fitness', label: 'Fitness', x: 45, y: 45 },
  ]

  const connections = [
    ['work', 'ideas'],
    ['ideas', 'library'],
    ['library', 'media'],
    ['media', 'play'],
    ['play', 'work'],
    ['fitness', 'ideas'],
    ['fitness', 'media'],
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Cosmic gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: `rgba(${Math.random() > 0.5 ? '147, 197, 253' : '196, 181, 253'}, ${Math.random() * 0.5 + 0.2})`,
            }}
            initial={{
              x: typeof window === 'undefined'
                ? 0
                : Math.random() * window.innerWidth,
              y: typeof window === 'undefined'
                ? 0
                : Math.random() * window.innerHeight,
            }}
            animate={{
              x: typeof window === 'undefined'
                ? 0
                : Math.random() * window.innerWidth,
              y: typeof window === 'undefined'
                ? 0
                : Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* SVG Constellation */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="cosmicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Connection lines */}
        <g className="opacity-30">
          {connections.map(([from, to], i) => {
            const fromNode = nodes.find(n => n.id === from)
            const toNode = nodes.find(n => n.id === to)
            if (!fromNode || !toNode) return null
            
            const isActive = hoveredNode === from || hoveredNode === to
            
            return (
              <motion.line
                key={i}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke={isActive ? "#60a5fa" : "url(#cosmicGradient)"}
                strokeWidth={isActive ? 1.5 : 0.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: isActive ? 0.8 : 0.3,
                }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 2,
                  delay: shouldReduceMotion ? 0 : i * 0.1 
                }}
                filter={isActive ? "url(#glow)" : ""}
              />
            )
          })}
        </g>
        
        {/* Nodes */}
        {nodes.map((node, i) => {
          const isHovered = hoveredNode === node.id
          
          return (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.5 + i * 0.08,
              }}
              onHoverStart={() => setHoveredNode(node.id)}
              onHoverEnd={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              <Link href={`/${node.id}`}>
                {/* Subtle glow for hovered node */}
                {isHovered && (
                  <motion.circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="8"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="0.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Small node dot */}
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={isHovered ? "4" : "3"}
                  fill="#1e293b"
                  stroke={isHovered ? "#60a5fa" : "#94a3b8"}
                  strokeWidth="1"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  filter="url(#glow)"
                />
                
                {/* Inner dot */}
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="1.5"
                  fill={isHovered ? "#60a5fa" : "#c084fc"}
                  animate={{
                    scale: shouldReduceMotion ? 1 : [1, 1.3, 1],
                    opacity: [0.8, 0.4, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
                
                {/* Label */}
                <text
                  x={`${node.x}%`}
                  y={`${node.y + 2.5}%`}
                  textAnchor="middle"
                  className={`fill-current text-[0.5rem] font-medium select-none transition-all ${
                    isHovered ? 'text-blue-400 opacity-100' : 'text-gray-500 opacity-60'
                  }`}
                  style={{ fontSize: '0.5rem', letterSpacing: '0.05em' }}
                >
                  {node.label.toUpperCase()}
                </text>
              </Link>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}

// Enhanced Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { href: '/work', label: 'Work' },
    { href: '/ideas', label: 'Ideas' },
    { href: '/library', label: 'Library' },
    { href: '/media', label: 'Media' },
    { href: '/play', label: 'Play' },
    { href: '/cv', label: 'CV' },
  ]
  
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className={`rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'backdrop-blur-md bg-slate-900/70 border border-purple-500/20 px-4 py-2' 
              : 'px-2'
          }`}>
            <div className="flex items-center justify-between">
              <Link href="/" className="group flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all" />
                  <span className="relative text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SP</span>
                </div>
              </Link>
              
              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-2 text-gray-400 hover:text-white transition-all group"
                  >
                    <span className="relative z-10 text-sm font-medium">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-full transition-all" />
                  </Link>
                ))}
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%' 
        }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div 
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-64 bg-slate-900/90 backdrop-blur-md border-l border-purple-500/20 p-6">
          <div className="flex flex-col gap-2 mt-20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

// Main component with enhanced design
export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const scrollToExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
  
  return (
    <main className="min-h-screen bg-slate-950 text-gray-300 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Cosmic background gradient */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at center, rgba(30, 41, 59, 0.5) 0%, transparent 100%)
              `
            }}
          />
        </div>
        
        {/* Mouse follow gradient */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.04), transparent 40%)`
          }}
        />
        
        <ConstellationHero />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-white mb-2">
              Strahil
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Peykov</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Full-Stack Developer crafting digital experiences at the intersection of 
            <span className="text-blue-400"> code</span> and 
            <span className="text-purple-400"> creativity</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToExplore}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore the Constellation 
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </button>
            
            <Link
              href="/cv"
              className="px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full transition-all hover:bg-purple-500/10 hover:border-purple-500/50 hover:scale-105"
            >
              View Resume
            </Link>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="relative">
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 w-6 h-10 border-2 border-purple-400/30 rounded-full"
            />
          </div>
        </motion.div>
      </section>
   
      
      {/* Featured Work Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-mono text-sm">Featured Projects</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Selected Work
            </h2>
            
            <p className="text-gray-400 text-lg mb-16 max-w-2xl">
              Building scalable solutions that push the boundaries of what's possible on the web
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'AI-Powered Analytics Platform', 
                  desc: 'Real-time data visualization with ML insights for enterprise clients',
                  tech: ['React', 'Python', 'TensorFlow', 'AWS'],
                  gradient: 'from-blue-500/10 to-purple-500/10'
                },
                { 
                  title: 'Decentralized Finance Dashboard', 
                  desc: 'Web3 portfolio tracker with cross-chain compatibility',
                  tech: ['Next.js', 'Ethers.js', 'Solidity', 'GraphQL'],
                  gradient: 'from-purple-500/10 to-pink-500/10'
                },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-all`} />
                  
                  <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-2xl" />
                    
                    <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {project.desc}
                    </p>
                    
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/work/${i + 1}`}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-blue-400 transition-colors font-medium"
                    >
                      View case study
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Link 
                href="/work"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                View all projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Recent Ideas Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-mono text-sm">Recent Thoughts</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Ideas & Writing
            </h2>
            
            <p className="text-gray-400 text-lg mb-16 max-w-2xl">
              Exploring the intersection of technology, design, and complex systems
            </p>
            
            <div className="grid gap-1">
              {[
                { 
                  title: 'The Future of AI-Driven Development', 
                  date: 'Jan 2024', 
                  readTime: '8 min',
                  excerpt: 'How machine learning is reshaping the developer experience'
                },
                { 
                  title: 'Building for Scale: Lessons from Production', 
                  date: 'Dec 2023', 
                  readTime: '12 min',
                  excerpt: 'Real-world insights from scaling applications to millions'
                },
                { 
                  title: 'The Art of Digital Minimalism', 
                  date: 'Nov 2023', 
                  readTime: '6 min',
                  excerpt: 'Finding beauty in simplicity and intentional design'
                },
              ].map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <Link href={`/ideas/${i + 1}`}>
                    <div className="relative p-6 rounded-lg hover:bg-slate-900/30 transition-all cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm mb-2">
                            {post.excerpt}
                          </p>
                          <p className="text-sm text-gray-600">
                            {post.date} · {post.readTime} read
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 mt-1 flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            
            <div className="relative backdrop-blur-md bg-slate-900/70 border border-purple-500/20 rounded-3xl p-12 lg:p-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Let's build something
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> amazing</span> together
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="mailto:strahil.peykov@gmail.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  Get in touch
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                
                <Link 
                  href="/cv"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full transition-all hover:bg-purple-500/10 hover:border-purple-500/50"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Footer */}
      <footer className="border-t border-slate-800/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="font-display font-semibold text-white text-lg mb-4">About</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bulgarian creative technologist based in Eindhoven, NL. 
                MSc in Complex Systems & Policy. Building at the intersection 
                of technology and human experience.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-white text-lg mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Work', 'Ideas', 'Library', 'Media', 'Play', 'CV'].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Connect */}
            <div>
              <h3 className="font-display font-semibold text-white text-lg mb-4">Connect</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { href: "mailto:strahil.peykov@gmail.com", icon: Mail, label: "Email" },
                  { href: "https://github.com/StrahilPeykov", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/strahil-peykov", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://instagram.com/strahil.peykov", icon: Instagram, label: "Instagram" },
                  { href: "https://tiktok.com/@strahil.peykov", icon: TikTokIcon, label: "TikTok" },
                  { href: "https://x.com/WerbenHS", icon: Twitter, label: "X" },
                  { href: "https://letterboxd.com/strahil_peykov", icon: LetterboxdIcon, label: "Letterboxd" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2.5 bg-slate-900/50 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>© 2024 Strahil Peykov. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span>Built with</span>
                <span className="text-blue-400">Next.js</span>
                <span>·</span>
                <span className="text-purple-400">Tailwind CSS</span>
                <span>·</span>
                <span className="text-pink-400">MDX</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
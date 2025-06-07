'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X, Mail, Github, Linkedin, Instagram, Twitter, Sun, Moon } from 'lucide-react'

// Custom icons for platforms not in Lucide
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const LetterboxdIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.29 16.752V7.2H6.546V16.8c0 .414.336.748.748.748h4.19v-1.344l-3.194-.047v-.004h-.002ZM2.16 7.2v9.552c0 .414.334.748.748.748h3.24V7.2H2.16Zm11.04 0v9.552c0 .414.336.748.748.748h3.24V7.2h-3.988ZM21.84 7.2h-3.238v10.348h3.238c.414 0 .748-.334.748-.748V7.2h.002Z"/>
  </svg>
)

// Constellation component
const ConstellationHero = () => {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  
  const nodes = [
    { id: 'work', label: 'Work', x: 25, y: 35 },
    { id: 'ideas', label: 'Ideas', x: 75, y: 25 },
    { id: 'library', label: 'Library', x: 85, y: 65 },
    { id: 'media', label: 'Media', x: 50, y: 80 },
    { id: 'play', label: 'Play', x: 15, y: 70 },
    { id: 'fitness', label: 'Fitness', x: 50, y: 50 },
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
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #38bdf8 0%, transparent 70%)'
        }}
      />
      
      {/* SVG Constellation */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connection lines */}
        <g className="opacity-20">
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
                stroke="#38bdf8"
                strokeWidth={isActive ? 2 : 1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: isActive ? 0.8 : 0.3,
                  strokeWidth: isActive ? 2 : 1
                }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 1.5,
                  delay: shouldReduceMotion ? 0 : i * 0.1 
                }}
              />
            )
          })}
        </g>
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.5 + i * 0.08 
            }}
            onHoverStart={() => setHoveredNode(node.id)}
            onHoverEnd={() => setHoveredNode(null)}
            className="cursor-pointer"
          >
            <Link href={`/${node.id}`}>
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="8"
                fill="#0c111b"
                stroke="#38bdf8"
                strokeWidth="2"
                animate={{
                  scale: hoveredNode === node.id ? 1.2 : 1,
                  fill: hoveredNode === node.id ? '#1a202c' : '#0c111b'
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="3"
                fill="#38bdf8"
                animate={{
                  scale: shouldReduceMotion ? 1 : [1, 1.5, 1],
                  opacity: [0.8, 0.3, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
              <text
                x={`${node.x}%`}
                y={`${node.y + 4}%`}
                textAnchor="middle"
                className="fill-gray-300 text-xs font-medium pointer-events-none select-none"
              >
                {node.label}
              </text>
            </Link>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

// Navigation component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { href: '/', label: 'Home' },
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
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className={`max-w-7xl mx-auto rounded-full ${isScrolled ? 'bg-midnight/80 backdrop-blur-sm border border-electric/10' : ''}`}>
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" className="text-xl font-display font-semibold text-white">
              SP
            </Link>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-electric transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-electric"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 w-64 h-full bg-midnight-light z-40 p-6 md:hidden"
      >
        <div className="flex flex-col gap-4 mt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-electric transition-colors text-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  )
}

// Main component
export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }
  const scrollToExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
  
  return (
    <main className="min-h-screen bg-midnight text-gray-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <ConstellationHero />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="text-5xl lg:text-6xl font-display font-semibold text-white mb-6"
          >
            Strahil Peykov
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            I&apos;m Full-Stack Developer crafting digital experiences
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToExplore}
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric text-midnight font-semibold rounded-full hover:bg-electric-hover transition-colors"
          >
            Explore the Constellation <ArrowUpRight size={20} />
          </motion.button>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-electric/50 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-electric rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Featured Work Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-white mb-4">
              Selected Work
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Building digital experiences at the intersection of design and technology
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work preview cards */}
              {[
                { title: 'Project Alpha', desc: 'Full-stack application with real-time features', tech: ['React', 'Node.js', 'WebSockets'] },
                { title: 'Design System', desc: 'Component library for enterprise applications', tech: ['TypeScript', 'Storybook', 'CSS'] },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-midnight-light rounded-lg p-8 border border-electric/10 hover:border-electric/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-electric transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-midnight rounded-full text-gray-400 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-gray-600 group-hover:text-electric transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Recent Ideas */}
      <section className="py-20 px-6 bg-midnight-light/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-white mb-4">
              Recent Ideas
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Thoughts on technology, design, and complex systems
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'The Architecture of Digital Gardens', date: 'Jan 2024', readTime: '5 min' },
                { title: 'Building for the Next Billion Users', date: 'Dec 2023', readTime: '8 min' },
                { title: 'Complexity Theory in UI Design', date: 'Nov 2023', readTime: '6 min' },
              ].map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-6 rounded-lg hover:bg-midnight-light/50 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-electric transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {post.date} · {post.readTime} read
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-electric transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <div>
              <h3 className="font-display font-semibold text-white mb-3">About</h3>
              <p className="text-gray-400 text-sm">
                Bulgarian in Eindhoven, NL. MSc Complex Systems & Policy. 
                Building at the intersection of technology and human experience.
              </p>
            </div>
            
            {/* Social links */}
            <div>
              <h3 className="font-display font-semibold text-white mb-3">Connect</h3>
              <div className="flex gap-4 flex-wrap">
                <a href="mailto:strahil.peykov@gmail.com" className="text-gray-400 hover:text-electric transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/StrahilPeykov" className="text-gray-400 hover:text-electric transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/strahil-peykov" className="text-gray-400 hover:text-electric transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/strahil.peykov" className="text-gray-400 hover:text-electric transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://tiktok.com/@strahil.peykov" className="text-gray-400 hover:text-electric transition-colors" aria-label="TikTok">
                  <TikTokIcon />
                </a>
                <a href="https://x.com/WerbenHS" className="text-gray-400 hover:text-electric transition-colors" aria-label="X (Twitter)">
                  <Twitter size={20} />
                </a>
                <a href="https://letterboxd.com/strahil_peykov" className="text-gray-400 hover:text-electric transition-colors" aria-label="Letterboxd">
                  <LetterboxdIcon />
                </a>
              </div>
            </div>
          </div>
          
          {/* Build stack */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span>Built with Next.js 14 • Tailwind CSS • MDX</span>
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 text-gray-400 hover:text-electric transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
          </div>
        </div>
      </footer>
    </main>
  )
}
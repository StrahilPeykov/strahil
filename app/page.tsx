'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X, Mail, Github, Linkedin, Instagram, Twitter, Code2, Sparkles, Briefcase, Lightbulb, BookOpen, Camera, Gamepad2, FileText } from 'lucide-react'

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
              ? 'backdrop-blur-xl bg-slate-900/80 border border-purple-500/20 px-4 py-2 shadow-lg shadow-purple-500/5' 
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
  const [activeSection, setActiveSection] = useState<string | null>(null)
  
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

  const sections = [
    { 
      id: 'work', 
      label: 'Work', 
      icon: Briefcase,
      color: '#60a5fa', 
      description: 'Portfolio & Case Studies',
      gradient: 'from-blue-500/10 to-blue-600/10'
    },
    { 
      id: 'ideas', 
      label: 'Ideas', 
      icon: Lightbulb,
      color: '#c084fc', 
      description: 'Thoughts & Writing',
      gradient: 'from-purple-500/10 to-purple-600/10'
    },
    { 
      id: 'library', 
      label: 'Library', 
      icon: BookOpen,
      color: '#f472b6', 
      description: 'Knowledge Base',
      gradient: 'from-pink-500/10 to-pink-600/10'
    },
    { 
      id: 'media', 
      label: 'Media', 
      icon: Camera,
      color: '#60a5fa', 
      description: 'Visual Content',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    { 
      id: 'play', 
      label: 'Play', 
      icon: Gamepad2,
      color: '#c084fc', 
      description: 'Experiments & Fun',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    { 
      id: 'cv', 
      label: 'CV', 
      icon: FileText,
      color: '#60a5fa', 
      description: 'Resume & Experience',
      gradient: 'from-blue-500/10 to-purple-500/10'
    },
  ]
  
  return (
    <main className="min-h-screen bg-slate-950 text-gray-300 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
        {/* Dynamic background with large typography */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large background text elements */}
          <div className="absolute inset-0">
            <motion.h2 
              className="absolute top-[10%] left-[-5%] text-[20vw] font-display font-bold text-slate-800/20 select-none"
              animate={{ 
                x: [0, -20, 0],
                opacity: [0.2, 0.15, 0.2]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              WORK
            </motion.h2>
            <motion.h2 
              className="absolute top-[30%] right-[-8%] text-[18vw] font-display font-bold text-slate-800/15 select-none"
              animate={{ 
                x: [0, 20, 0],
                opacity: [0.15, 0.1, 0.15]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              IDEAS
            </motion.h2>
            <motion.h2 
              className="absolute bottom-[20%] left-[10%] text-[15vw] font-display font-bold text-slate-800/10 select-none"
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.1, 0.05, 0.1]
              }}
              transition={{ 
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              PLAY
            </motion.h2>
            <motion.h2 
              className="absolute bottom-[35%] right-[5%] text-[22vw] font-display font-bold text-slate-800/20 select-none"
              animate={{ 
                x: [0, -15, 0],
                y: [0, 10, 0],
                opacity: [0.2, 0.15, 0.2]
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              LIBRARY
            </motion.h2>
            <motion.h2 
              className="absolute top-[50%] left-[40%] text-[16vw] font-display font-bold text-slate-800/10 select-none"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.05, 0.1]
              }}
              transition={{ 
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              MEDIA
            </motion.h2>
            <motion.h2 
              className="absolute top-[70%] left-[-10%] text-[12vw] font-display font-bold text-slate-800/15 select-none"
              animate={{ 
                x: [0, 30, 0],
                opacity: [0.15, 0.1, 0.15]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              CV
            </motion.h2>
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
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                background: `rgba(${Math.random() > 0.5 ? '96, 165, 250' : '192, 132, 252'}, ${Math.random() * 0.6 + 0.2})`,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(${Math.random() > 0.5 ? '96, 165, 250' : '192, 132, 252'}, 0.3)`
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
          ))}
        </div>
        
        {/* Mouse follow gradient - subtle */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-40"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.05), transparent 40%)`
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Subtle connection lines */}
          <svg className="absolute inset-x-0 top-0 w-full h-32 pointer-events-none opacity-10" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
            <motion.path
              d="M 50,150 Q 400,50 750,150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="text-center mb-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="mb-6"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-white mb-2 relative">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Strahil
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {' '}Peykov
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
              className="text-lg lg:text-2xl text-gray-400 mb-1 max-w-3xl mx-auto leading-relaxed"
            >
              Full-Stack Developer crafting digital experiences at the intersection of 
              <motion.span 
                className="text-blue-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              > code</motion.span> and 
              <motion.span 
                className="text-purple-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              > creativity</motion.span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.3 }}
              className="text-gray-500 text-sm"
            >
              Navigate my digital universe below
            </motion.p>
          </div>

          {/* Minimal Navigation Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-6"
          >
            {sections.map((section, i) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.5 + i * 0.05 }}
                >
                  <Link
                    href={`/${section.id}`}
                    onMouseEnter={() => setActiveSection(section.id)}
                    onMouseLeave={() => setActiveSection(null)}
                    className="group relative block h-full"
                  >
                    {/* Background glow on hover */}
                    <div 
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Card */}
                    <div className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-xl p-2 md:p-3 h-full transition-all duration-300 group-hover:border-slate-700/70 group-hover:bg-slate-900/60 group-hover:shadow-2xl">
                      {/* Subtle inner glow */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${section.color}15 0%, transparent 50%)`
                        }}
                      />
                      
                      {/* Number indicator */}
                      <div className="absolute bottom-2 right-2 text-3xl font-display font-bold text-slate-800/5 select-none group-hover:text-slate-800/10 transition-all">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      
                      {/* Icon */}
                      <div className="relative mb-2">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ 
                            backgroundColor: `${section.color}15`,
                            borderColor: `${section.color}30`,
                            borderWidth: '1px',
                            borderStyle: 'solid'
                          }}
                        >
                          <Icon 
                            size={16} 
                            style={{ color: section.color }}
                            className="transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="relative text-sm md:text-base font-semibold text-white mb-1 transition-colors duration-300">
                        {section.label}
                      </h3>
                      <p className="relative text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        {section.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="absolute top-2 right-2 text-gray-700 group-hover:text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="mailto:strahil.peykov@gmail.com"
              className="group relative overflow-hidden px-6 py-3 text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-white/10 blur-xl" />
              </div>
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in touch
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
            
            <button
              onClick={scrollToExplore}
              className="group relative overflow-hidden px-6 py-3 font-semibold rounded-full transition-all hover:scale-105"
            >
              <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full transition-all group-hover:border-purple-500/50" />
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-full transition-all" />
              <span className="relative text-purple-400 group-hover:text-purple-300 transition-colors">
                Learn more
              </span>
            </button>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToExplore}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-6 h-10 border-2 border-purple-400/30 rounded-full p-1 group-hover:border-purple-400/50 transition-colors">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-purple-400 transition-colors">Scroll</p>
          </button>
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

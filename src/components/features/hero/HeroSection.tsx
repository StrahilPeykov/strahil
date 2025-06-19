'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { HeroBackground } from './HeroBackground'
import { NavigationGrid } from './NavigationGrid'
import { ScrollIndicator } from './ScrollIndicator'
import { useScrollToSection } from '../../../hooks/useScrollToSection'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollToExplore } = useScrollToSection()

  return (
    <section className="relative h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      <HeroBackground />

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

        <NavigationGrid />

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

      <ScrollIndicator onScroll={scrollToExplore} />
    </section>
  )
}
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { HeroBackground } from './HeroBackground'
import { ScrollIndicator } from './ScrollIndicator'
import { useScrollToSection } from '../../../hooks/useScrollToSection'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollToExplore } = useScrollToSection()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-8"
        >

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-white mb-6 relative">
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

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4 }}
            className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light"
          >
            Full-Stack Developer & Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.5 }}
            className="text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Building scalable solutions and software at ASML.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/projects"
              className="group relative overflow-hidden px-8 py-4 text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/about"
              className="group relative overflow-hidden px-8 py-4 font-semibold rounded-full transition-all hover:scale-105"
            >
              <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full transition-all group-hover:border-purple-500/50" />
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-full transition-all" />
              <span className="relative text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                About Me
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm"
          >
            <Link href="/notes" className="text-gray-500 hover:text-purple-400 transition-colors">
              Recent Articles
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/tools" className="text-gray-500 hover:text-purple-400 transition-colors">
              Developer Tools
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/contact" className="text-gray-500 hover:text-purple-400 transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator onScroll={scrollToExplore} />
    </section>
  )
}

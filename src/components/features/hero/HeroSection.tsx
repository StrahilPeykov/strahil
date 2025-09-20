'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ScrollIndicator } from './ScrollIndicator'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import { StarfieldCanvas } from '../../effects/StarfieldCanvas'
import { PlanetSVG } from '../../effects/PlanetSVG'
import { GlowButton } from '../../ui/GlowButton'
import { OutlineButton } from '../../ui/OutlineButton'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollToExplore } = useScrollToSection()

  return (
    <section className="relative min-h-screen flex items-center px-6 py-16 overflow-hidden">
      {/* Subtle starfield background */}
      <StarfieldCanvas density={140} />

      {/* Decorative planet */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] w-[520px] h-[520px] opacity-60 animate-drift-slow">
        <PlanetSVG className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-8"
        >
          {/* Copy */}
          <div className="max-w-[68ch]">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-bold tracking-tight text-ink mb-4"
            >
              Strahil Peykov
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-ink/80 mb-5 leading-snug"
            >
              Full‑Stack Developer & Software Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-ink/75 leading-relaxed"
            >
              Building readable, resilient tools with a calm dark base and soft electric blue accents.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          >
            <GlowButton as="a" href="/contact">Join chat</GlowButton>
            <OutlineButton as="a" href="/rss.xml">Subscribe</OutlineButton>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-ink/70"
          >
            <Link href="/notes" className="hover:text-ink">
              Recent Articles
            </Link>
            <span className="text-ink/30">•</span>
            <Link href="/tools" className="hover:text-ink">
              Developer Tools
            </Link>
            <span className="text-ink/30">•</span>
            <Link href="/contact" className="hover:text-ink">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator onScroll={scrollToExplore} />
    </section>
  )
}

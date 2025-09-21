'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'

export function ContactCTA() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-bg-soft/80 backdrop-blur-md border border-outline rounded-3xl p-12 lg:p-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Let's build something nice together
            </h2>
            
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:strahil.peykov@gmail.com"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-glow text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-[0_6px_18px_rgba(60,159,255,0.25)]"
              >
                <Mail className="w-5 h-5" />
                Get in touch
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              
              <Link 
                href="/cv"
                className="inline-flex items-center gap-2 px-8 py-4 border border-outline text-white font-semibold rounded-xl transition-all hover:bg-white/5"
              >
                Download CV
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

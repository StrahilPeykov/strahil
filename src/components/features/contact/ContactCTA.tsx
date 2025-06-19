'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'

export function ContactCTA() {
  return (
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
  )
}
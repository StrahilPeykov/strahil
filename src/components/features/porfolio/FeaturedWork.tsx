'use client'

import { motion } from 'framer-motion'
import { Code2, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ProjectCard } from './ProjectCard'
import { featuredProjects } from '../../../data/projects'

export function FeaturedWork() {
  return (
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
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
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
  )
}

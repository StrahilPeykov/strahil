'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { Project } from '../../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
    >
      <div className={`absolute inset-0 rounded-2xl opacity-[0.06]`} style={{ boxShadow: 'inset 0 0 160px rgba(60,159,255,0.15)' }} />
      
      <div className="relative bg-bg-soft/80 backdrop-blur-sm rounded-2xl p-8 border border-outline hover:shadow-glow hover:border-glow/35 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-2xl opacity-[0.04]" />
        
        <h3 className="text-2xl font-display font-semibold text-white mb-3 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-6">
          {project.description}
        </p>
        
        <div className="flex gap-2 flex-wrap mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Link 
          href={project.url || `/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-white hover:text-white transition-colors font-medium"
        >
          View case study
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  )
}

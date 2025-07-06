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
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-all`} />
      
      <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-2xl" />
        
        <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
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
          className="inline-flex items-center gap-2 text-purple-400 hover:text-blue-400 transition-colors font-medium"
        >
          View case study
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  )
}
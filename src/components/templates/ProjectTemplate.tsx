'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../layout/PageWrapper'
import { Badge } from '../ui/Badge'
import type { LucideIcon } from 'lucide-react'

export interface ProjectData {
  title: string
  tagline: string
  description: string
  icon: string
  badges: Array<{
    variant: 'blue' | 'purple' | 'pink' | 'success' | 'warning' | 'error'
    label: string
  }>
  links?: {
    demo?: string
    github?: string
    live?: string
  }
  details: {
    role: string
    context: string
    timeline: string
    client?: string
    status?: string
  }
  techStack: {
    categories: Array<{
      name: string
      technologies: string[]
    }>
  }
  metrics?: Array<{
    icon: string
    value: string
    label: string
  }>
  content: {
    overview: React.ReactNode
    challenge?: React.ReactNode
    solution?: React.ReactNode
    features?: React.ReactNode
    implementation?: React.ReactNode
    results?: React.ReactNode
  }
}

interface ProjectTemplateProps {
  project: ProjectData
}

export function ProjectTemplate({ project }: ProjectTemplateProps) {
  const Icon = (Icons as any)[project.icon] as LucideIcon

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-blue-500/5 to-transparent" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 flex-wrap">
              <Icon className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge, i) => (
                  <Badge key={i} variant={badge.variant}>{badge.label}</Badge>
                ))}
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 break-words">
              {project.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
            
            {project.links && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform text-center"
                  >
                    <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    <span>View Demo</span>
                  </Link>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 hover:border-blue-500/50 transition-all text-center"
                  >
                    <Github className="w-5 h-5 flex-shrink-0" />
                    <span>View Source</span>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-8">
              {project.content.overview && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">Overview</h2>
                  <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed">
                    {project.content.overview}
                  </div>
                </div>
              )}
              
              {project.content.challenge && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">The Challenge</h2>
                  <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed">
                    {project.content.challenge}
                  </div>
                </div>
              )}
              
              {project.content.solution && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">Solution</h2>
                  <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed">
                    {project.content.solution}
                  </div>
                </div>
              )}
              
              {project.content.features && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">Key Features</h2>
                  <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed">
                    {project.content.features}
                  </div>
                </div>
              )}
              
              {project.content.implementation && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">Technical Implementation</h2>
                  <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed overflow-hidden">
                    {project.content.implementation}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
              {/* Project Details */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-gray-500">Role</dt>
                    <dd className="text-white font-medium break-words">{project.details.role}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Context</dt>
                    <dd className="text-white font-medium break-words">{project.details.context}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Timeline</dt>
                    <dd className="text-white font-medium break-words">{project.details.timeline}</dd>
                  </div>
                  {project.details.client && (
                    <div>
                      <dt className="text-sm text-gray-500">Client</dt>
                      <dd className="text-white font-medium break-words">{project.details.client}</dd>
                    </div>
                  )}
                  {project.details.status && (
                    <div>
                      <dt className="text-sm text-gray-500">Status</dt>
                      <dd className="text-white font-medium break-words">{project.details.status}</dd>
                    </div>
                  )}
                </dl>
              </div>
              
              {/* Tech Stack */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="space-y-3">
                  {project.techStack.categories.map((category, i) => (
                    <div key={i}>
                      <h4 className="text-sm text-gray-500 mb-2">{category.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map(tech => (
                          <Badge key={tech} variant="blue" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Metrics */}
              {project.metrics && (
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Impact</h3>
                  <div className="space-y-4">
                    {project.metrics.map((metric, i) => {
                      const MetricIcon = (Icons as any)[metric.icon] as LucideIcon
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <MetricIcon className="w-6 h-6 text-green-400" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xl sm:text-2xl font-bold text-white break-words">{metric.value}</div>
                            <div className="text-sm text-gray-500 break-words">{metric.label}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      {project.content.results && (
        <section className="px-4 sm:px-6 py-12 sm:py-16 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 sm:mb-8 text-center">Key Achievements</h2>
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed">
              {project.content.results}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  )
}
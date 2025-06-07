'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from 'lucide-react'

export default function WorkPage() {
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      client: 'TechCorp Industries',
      description: 'Complete overhaul of a multi-million dollar e-commerce platform, focusing on performance and user experience.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      duration: '6 months',
      year: '2023',
      featured: true,
    },
    {
      title: 'Real-time Analytics Dashboard',
      client: 'DataFlow Systems',
      description: 'Built a real-time analytics dashboard processing millions of events per day with sub-second latency.',
      tags: ['TypeScript', 'WebSockets', 'D3.js', 'Kubernetes'],
      duration: '4 months',
      year: '2023',
    },
    {
      title: 'Mobile Banking Application',
      client: 'FinTech Startup',
      description: 'Developed a secure mobile banking application with biometric authentication and real-time transactions.',
      tags: ['React Native', 'GraphQL', 'AWS', 'Security'],
      duration: '8 months',
      year: '2022',
    },
    {
      title: 'AI Content Generation Tool',
      client: 'Creative Agency',
      description: 'Integrated AI capabilities into a content management system for automated content generation and optimization.',
      tags: ['Next.js', 'OpenAI API', 'Python', 'Machine Learning'],
      duration: '3 months',
      year: '2022',
    },
  ]

  return (
    <main className="min-h-screen bg-midnight text-gray-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-midnight/80 backdrop-blur-sm border-b border-electric/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-electric transition-colors">
            <ArrowLeft size={20} />
            <span>Back home</span>
          </Link>
          <Link href="/cv" className="text-gray-400 hover:text-electric transition-colors">
            View CV
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Selected Work
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              A collection of projects that showcase my approach to building scalable, 
              user-centered digital products. Each project represents a unique challenge 
              and an opportunity to push boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-midnight-light rounded-lg p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-electric/10 ${
                  project.featured 
                    ? 'border-electric/30 hover:border-electric' 
                    : 'border-electric/10 hover:border-electric/30'
                }`}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-electric transition-colors">
                      {project.title}
                    </h2>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {project.duration}
                      </span>
                      {project.client && (
                        <span>• {project.client}</span>
                      )}
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-midnight rounded-full text-xs text-gray-400 border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/work/${index + 1}`}
                    className="flex items-center gap-2 text-electric hover:text-amber transition-colors mt-4 lg:mt-0"
                  >
                    <span>View case study</span>
                    <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-semibold text-white mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <Link 
              href="mailto:hello@strahilpeykov.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-electric text-midnight font-semibold rounded-full hover:bg-electric-hover transition-colors"
            >
              Get in touch <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
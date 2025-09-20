'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Code2, Sparkles, ArrowRight, ExternalLink, Github, Filter, Grid3x3, List, Award, Users, Clock, TrendingUp, Zap, Search } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { getProjectListItems, type ProjectListItem } from '../../lib/projects'

const categories = ['All', 'Web Apps', 'Security', 'Open Source', 'Business']
const statuses = ['All', 'Production', 'Active', 'Completed']
const viewModes = [
  { id: 'grid', icon: Grid3x3, label: 'Grid View' },
  { id: 'list', icon: List, label: 'List View' }
]

function ProjectCard({ project, index }: { project: ProjectListItem, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Subtle local glow */}
      <div className={`absolute inset-0 opacity-[0.06]`} style={{ boxShadow: 'inset 0 0 160px rgba(60,159,255,0.15)' }} />
      
      <div className="relative bg-bg-soft/80 backdrop-blur-sm border border-outline rounded-2xl overflow-hidden hover:shadow-glow hover:border-glow/35 transition-all duration-300">
        {/* Image placeholder with gradient */}
        <div className={`h-64 relative overflow-hidden bg-bg-soft`}>
          <div className="absolute inset-0 opacity-[0.06]" style={{ boxShadow: 'inset 0 0 120px rgba(60,159,255,0.12)' }} />
          
          {/* Animated pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
              animation: 'slide 20s linear infinite',
            }} />
          </div>
          
          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              {project.client && (
                <>
                  <span>{project.client}</span>
                  <span>•</span>
                </>
              )}
              <span>{project.featured ? 'Featured Project' : 'Project'}</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-ink/75 mb-4">
            {project.description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {project.tags.length < 4 && (
              <Badge variant="default" size="sm">
                ...more
              </Badge>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-white hover:text-white transition-colors font-medium"
            >
              View case study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label="View live site"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectListItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      const items = await getProjectListItems()
      setProjects(items)
      setLoading(false)
    }
    loadProjects()
  }, [])

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Code2 className="w-16 h-16 text-white mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Crafting Digital
            <span className="block">Experiences</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            From concept to deployment, I build scalable solutions that push boundaries 
            and deliver exceptional user experiences.
          </motion.p>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-outline rounded-full p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Filter Section */}
      <section className="px-6 py-8 border-y border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-mono text-sm">Featured Projects</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading projects...</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12">
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-6 py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 mb-8">
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <Link href="/contact" className="inline-flex">
            <span className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-glow text-white shadow-glow transition-transform hover:scale-[1.02]">
              Start a conversation
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}

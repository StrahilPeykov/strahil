// src/app/work/page.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Sparkles, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useRef } from 'react'

// Enhanced project data with more details
const projects = [
  {
    id: 'ai-analytics-platform',
    title: 'AI Analytics Platform',
    client: 'Fortune 500 Enterprise',
    year: '2024',
    description: 'Built a real-time data visualization platform with ML-powered insights, processing 10M+ daily events',
    longDescription: 'Architected and developed a comprehensive analytics solution that revolutionized how the client understood their user behavior. The platform processes millions of events daily, providing real-time insights through beautiful, interactive dashboards.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'D3.js', 'PostgreSQL', 'Redis'],
    achievements: [
      'Reduced data processing time by 85%',
      'Increased user engagement by 120%',
      'Saved $2M annually in operational costs'
    ],
    image: '/images/projects/analytics.png',
    gradient: 'from-blue-500 to-cyan-500',
    link: '/work/ai-analytics-platform',
    github: null,
    live: 'https://analytics.example.com'
  },
  {
    id: 'defi-dashboard',
    title: 'DeFi Portfolio Tracker',
    client: 'Web3 Startup',
    year: '2023',
    description: 'Cross-chain DeFi dashboard tracking $100M+ in assets across 8 blockchain networks',
    longDescription: 'Created a sophisticated decentralized finance dashboard that aggregates portfolio data across multiple blockchain networks. Features real-time price tracking, yield farming analytics, and automated rebalancing suggestions.',
    technologies: ['Next.js', 'Ethers.js', 'TheGraph', 'Solidity', 'TailwindCSS', 'Web3.js'],
    achievements: [
      'Supports 8 major blockchain networks',
      '10,000+ active daily users',
      'Zero security incidents since launch'
    ],
    image: '/images/projects/defi.png',
    gradient: 'from-purple-500 to-pink-500',
    link: '/work/defi-dashboard',
    github: 'https://github.com/example/defi',
    live: 'https://defi.example.com'
  },
  {
    id: 'content-creation-suite',
    title: 'AI Content Creation Suite',
    client: 'Creative Agency',
    year: '2023',
    description: 'Multi-modal AI platform for generating marketing content, used by 500+ creators',
    longDescription: 'Developed an AI-powered content creation platform that helps marketers and creators generate high-quality content across multiple formats. Integrates with GPT-4, DALL-E, and custom ML models.',
    technologies: ['Vue.js', 'FastAPI', 'OpenAI', 'Stripe', 'Docker', 'Kubernetes'],
    achievements: [
      'Generated 1M+ pieces of content',
      '95% customer satisfaction rate',
      '$500K+ in revenue first year'
    ],
    image: '/images/projects/content.png',
    gradient: 'from-pink-500 to-orange-500',
    link: '/work/content-creation-suite',
    github: null,
    live: null
  }
]

const categories = ['All', 'Web Apps', 'AI/ML', 'Blockchain', 'Open Source']

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
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
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300">
        {/* Image placeholder with gradient */}
        <div className={`h-64 bg-gradient-to-br ${project.gradient} opacity-20 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-slate-900/50" />
          
          {/* Animated pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
              animation: 'slide 20s linear infinite',
            }} />
          </div>
          
          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-400 mb-4">
            {project.description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="default" size="sm">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href={project.link}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
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

export default function WorkPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
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
            <Code2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Crafting Digital
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            From concept to deployment, I build scalable solutions that push boundaries 
            and deliver exceptional user experiences.
          </motion.p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30M+', label: 'Users Impacted' },
              { number: '99.9%', label: 'Uptime Average' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-purple-400/30 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Filter Section */}
      <section className="px-6 py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-mono text-sm">Featured Work</span>
            </div>
            
            {/* Category filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          
          {/* Load more */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="group inline-flex items-center gap-2 px-6 py-3 border border-purple-500/30 text-purple-400 rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all">
              Load more projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Start a conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
// we gotta add this to global CSS for the sliding animation
const slideAnimation = `
@keyframes slide {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(50px) translateY(-50px);
  }
}
`
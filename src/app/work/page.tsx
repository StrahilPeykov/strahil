'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Code2, Sparkles, ArrowRight, ExternalLink, Github, Filter, Grid3x3, List, Award, Users, Clock, TrendingUp, Zap, Search } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useRef, useState, useMemo } from 'react'
import { projects as projectsData } from '../../data/projects'

// Map our actual projects to the format expected by this page
const projects = [
  {
    id: 'carboninsight',
    title: 'CarbonInsight',
    client: 'EU AI REDGIO 5.0',
    year: '2025',
    description: 'Product Carbon Footprint & Digital Product Passport platform for manufacturing SMEs',
    longDescription: 'Comprehensive web application enabling manufacturing SMEs to calculate Product Carbon Footprint (PCF) and generate standards-compliant Digital Product Passports (DPPs). Part of the EU-funded AI REDGIO 5.0 initiative.',
    technologies: ['Django 5.2', 'Next.js 15', 'PostgreSQL', 'TypeScript', 'JWT Auth', 'GitLab CI/CD'],
    achievements: [
      'Successfully delivered complete PCF calculation platform',
      'Implemented recursive emission calculations across supply chains',
      'Achieved AAS and SCSN standards compliance'
    ],
    metrics: {
      compliance: '100%',
      performance: 'Sub-second',
      scope: 'EU-wide'
    },
    image: '/images/projects/carboninsight.png',
    gradient: 'from-green-500 to-blue-500',
    category: 'Web Apps',
    featured: true,
    status: 'production',
    link: '/work/carboninsight',
    github: null,
    live: 'https://carboninsight.strahil.dev'
  },
  {
    id: 'stayhub',
    title: 'StayHub',
    client: 'Personal Project',
    year: '2025',
    description: 'Modern hospitality management platform with microservices architecture and A/B testing',
    longDescription: 'Comprehensive hospitality platform built with microservices architecture, demonstrating modern full-stack development practices and scalable system design.',
    technologies: ['Java 21', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Kubernetes', 'Redis'],
    achievements: [
      'Built horizontally scalable system supporting 1000+ concurrent users',
      'Sub-200ms response times under load',
      'Comprehensive A/B testing framework with conversion tracking'
    ],
    metrics: {
      users: '1000+',
      performance: '<200ms',
      microservices: '5'
    },
    image: '/images/projects/stayhub.png',
    gradient: 'from-blue-500 to-indigo-500',
    category: 'Web Apps',
    featured: true,
    status: 'active',
    link: '/work/stayhub',
    github: 'https://github.com/StrahilPeykov/stayhub',
    live: 'https://stayhub.strahil.dev'
  },
  {
    id: 'rotorem',
    title: 'RotoRem Website',
    client: 'Home Appliance Repair Business',
    year: '2024',
    description: 'High-performance bilingual marketing website for local home appliance repair business',
    longDescription: 'Designed and developed a blazing-fast, SEO-optimized website for a Bulgarian repair business, featuring bilingual content and lead generation.',
    technologies: ['Astro 4', 'Tailwind CSS', 'Netlify', 'i18n', 'GitHub Actions'],
    achievements: [
      'Achieved 95+ Lighthouse scores across all metrics',
      'First-page Google ranking for key local search terms',
      'Sub-1-second page load times on 4G connections'
    ],
    metrics: {
      performance: '95+',
      loadTime: '<1s',
      seo: 'Page 1'
    },
    image: '/images/projects/rotorem.png',
    gradient: 'from-orange-500 to-red-500',
    category: 'Web Apps',
    featured: true,
    status: 'production',
    link: '/work/rotorem',
    github: null,
    live: 'https://www.rotorem.bg/'
  },
  {
    id: 'safe-exam-browser',
    title: 'Safe Exam Browser Security Research',
    client: 'TU/e Course Project',
    year: '2023',
    description: 'Penetration testing of lockdown browsers with responsible vulnerability disclosure',
    longDescription: 'Comprehensive security research identifying and responsibly disclosing multiple critical vulnerabilities in exam lockdown software.',
    technologies: ['C++', 'C#', '.NET', 'DLL Injection', 'Reverse Engineering'],
    achievements: [
      'Discovered 5 major vulnerability classes',
      'Acknowledged in official SEB v3.6.0 release notes',
      'Created comprehensive technical documentation'
    ],
    metrics: {
      vulnerabilities: '5',
      impact: 'Critical',
      recognition: 'Official'
    },
    image: '/images/projects/security.png',
    gradient: 'from-red-500 to-purple-500',
    category: 'Security',
    featured: false,
    status: 'completed',
    link: '/work/safe-exam-browser',
    github: null,
    live: null
  },
  {
    id: 'dbt-score',
    title: 'dbt-score Open Source Contribution',
    client: 'Picnic Supermarket',
    year: '2024',
    description: 'Added seed resource support to dbt metadata quality linter',
    longDescription: 'Extended dbt-score functionality to support seed resources, enabling complete data quality assessment across all dbt resource types.',
    technologies: ['Python', 'dbt', 'Test-Driven Development', 'Open Source'],
    achievements: [
      'Successfully merged PR #110',
      'Added 4 new seed-specific linting rules',
      'Full test coverage for new functionality'
    ],
    metrics: {
      contribution: 'PR #110',
      impact: 'Feature',
      tests: '100%'
    },
    image: '/images/projects/opensource.png',
    gradient: 'from-green-500 to-teal-500',
    category: 'Open Source',
    featured: false,
    status: 'completed',
    link: 'https://github.com/PicnicSupermarket/dbt-score/pull/110',
    github: 'https://github.com/PicnicSupermarket/dbt-score',
    live: null
  },
  {
    id: 'hydrogen-safety',
    title: 'Hydrogen Safety System Business',
    client: 'TU/e Entrepreneurship',
    year: '2024-2025',
    description: 'Business development for innovative hydrogen leakage detection technology',
    longDescription: 'Developed comprehensive business model for hydrogen safety technology through systematic market research and customer validation.',
    technologies: ['Market Research', 'Business Model Canvas', 'Financial Modeling', 'Customer Discovery'],
    achievements: [
      'Conducted interviews with Tata Steel, Shell, Air Liquide',
      'Developed business model with €594,600 first-year revenue projections',
      'Achieved product-market fit validation through 6 iterations'
    ],
    metrics: {
      market: '€120B',
      revenue: '€594K',
      interviews: '15+'
    },
    image: '/images/projects/business.png',
    gradient: 'from-blue-500 to-green-500',
    category: 'Business',
    featured: false,
    status: 'completed',
    link: '/work/hydrogen-safety',
    github: null,
    live: null
  }
]

const categories = ['All', 'Web Apps', 'Security', 'Open Source', 'Business']
const statuses = ['All', 'Production', 'Active', 'Completed']
const viewModes = [
  { id: 'grid', icon: Grid3x3, label: 'Grid View' },
  { id: 'list', icon: List, label: 'List View' }
]

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
              { number: '10+', label: 'Projects Completed' },
              { number: '5+', label: 'Open Source Contributions' },
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

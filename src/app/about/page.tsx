'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Globe, Rocket, Code2, Dumbbell, Palette, BookOpenCheck, Music, Sparkles, ArrowRight, Quote } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useRef } from 'react'

const timeline = [
  {
    year: '2025',
    title: 'BSc Computer Science & Engineering',
    description: 'Graduated from Eindhoven University of Technology',
    icon: Brain,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2023-2025',
    title: 'Integration Engineer Intern',
    description: 'Building enterprise solutions at ASML, world leader in semiconductor manufacturing',
    icon: Rocket,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    year: '2021',
    title: 'Started University',
    description: 'Began Computer Science & Engineering at TU/e',
    icon: Globe,
    color: 'text-green-400',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    year: '2015-2021',
    title: 'High School',
    description: 'Mathematics and Natural Sciences in Burgas, Bulgaria',
    icon: Code2,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-orange-500'
  }
]

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Python', 'Java', 'Node.js', 'Django', 'Spring Boot'] },
  { category: 'Tools & Platforms', items: ['Azure DevOps', 'Docker', 'Git', 'Microsoft Graph'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQL'] }
]

const interests = [
  { icon: Dumbbell, label: 'Fitness', description: 'Powerlifting & Calisthenics' },
  { icon: Palette, label: 'Art', description: 'Film & Website Projects' },
  { icon: BookOpenCheck, label: 'Ideas', description: 'Philosophy and Politics' },
  { icon: Music, label: 'Music', description: 'Piano & Drums' }
]

const values = [
  {
    title: 'Continuous Learning',
    description: 'Every day is an opportunity to grow and evolve',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Impact-Driven',
    description: 'Building technology that makes a real difference',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Collaborative Spirit',
    description: 'Great things happen when minds come together',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Creative Problem Solving',
    description: 'Finding elegant solutions to complex challenges',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3])

  return (
    <PageWrapper>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
          {/* Animated background */}
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
            
            {/* Neural network visualization */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
              {[...Array(20)].map((_, i) => {
                const x1 = Math.random() * 800
                const y1 = Math.random() * 600
                const x2 = Math.random() * 800
                const y2 = Math.random() * 600
                return (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2 + i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                  />
                )
              })}
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {/* Profile image placeholder */}
              <div className="relative mx-auto w-48 h-48 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      SP
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Hey, I'm
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Strahil
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            >
              A techie based in Amsterdam, Netherlands. 
              I have interest it
              <span className="text-blue-400"> technology</span>,
              <span className="text-purple-400"> engineering</span>, and
              <span className="text-pink-400"> innovation</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Badge variant="blue">🇧🇬 Bulgarian</Badge>
              <Badge variant="purple">Amsterdam, NL</Badge>
              <Badge variant="pink">BSc Computer Science</Badge>
              <Badge variant="default">Picnic</Badge>
            </motion.div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="px-6 py-24 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-mono text-sm">My Story</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                    About
                    <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> Me</span>
                  </h2>
                  
                  <div className="space-y-4 text-gray-400">
                    <p>
                      Born and raised in Bulgaria, I've always been fascinated by how things work. 
                      This curiosity led me to explore the world of technology, where I discovered 
                      my passion for building all sorts of tools.
                    </p>
                    
                    <p>
                      My journey took me to the Netherlands, where I pursued my Bachelor's in 
                      Computer Science & Engineering at TU/e.
                    </p>
                    
                    <p>
                      Currently, I work as an Software Engineer at Picnic.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                    <Quote className="w-12 h-12 text-purple-400/20 mb-4" />
                    <blockquote className="text-lg text-gray-300 italic mb-4">
                      "The best way to predict the future is to invent it."
                    </blockquote>
                    <cite className="text-sm text-gray-500">— Alan Kay</cite>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="px-6 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
          
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 text-center">
                My Journey
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {timeline.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex gap-6"
                      >
                        {/* Icon */}
                        <div className={`relative z-10 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-950`}>
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 absolute`} />
                          <Icon className={`w-6 h-6 ${item.color} relative z-10`} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <span className="text-sm text-gray-500 font-mono">{item.year}</span>
                          <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 text-center">
                Technical Experience
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-purple-400" />
                        {skill.category}
                      </h3>
                      
                      <div className="space-y-2">
                        {skill.items.map((item) => (
                          <div key={item} className="text-sm text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        
        {/* Interests Section */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 text-center">
                Beyond the Code
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {interests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all">
                          <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                          <h3 className="font-semibold text-white mb-1">{interest.label}</h3>
                          <p className="text-xs text-gray-500">{interest.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                  Let's Create Something
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Together</span>
                </h2>
                
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  I'm always excited to work on new projects and collaborate with passionate people. 
                  Whether you have an idea or just want to chat, I'd love to hear from you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                  >
                    Get in touch
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
                  >
                    View my projects
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

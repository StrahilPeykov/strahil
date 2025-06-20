// src/app/tools/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Wrench, Search, Users, Zap, ArrowRight, ExternalLink, Github, Star, TrendingUp, Code } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'

const tools = [
  {
    id: 'youtube-transcript-search',
    title: 'YouTube Transcript Search',
    tagline: 'Search any YouTube channel like a database',
    description: 'Powerful search engine for YouTube transcripts. Find specific topics, quotes, or discussions across entire channels instantly.',
    longDescription: 'Built with developers and researchers in mind, this tool indexes and searches through thousands of hours of YouTube content in seconds.',
    gradient: 'from-red-500 to-pink-500',
    icon: Search,
    status: 'live',
    users: 5678,
    searches: '100K+',
    features: [
      'Full-text search across channels',
      'Timestamp navigation',
      'Export search results',
      'API access available'
    ],
    techStack: ['Next.js', 'Python', 'Elasticsearch', 'YouTube API'],
    link: 'https://yt-search.strahilpeykov.com',
    github: 'https://github.com/StrahilPeykov/yt-transcript-search',
    category: 'Productivity'
  },
  {
    id: 'code-snippet-manager',
    title: 'Smart Snippet Manager',
    tagline: 'Your code, organized and searchable',
    description: 'AI-powered code snippet organizer with syntax highlighting, smart search, and team collaboration features.',
    longDescription: 'Stop losing your valuable code snippets. This tool uses AI to categorize, tag, and make your code instantly searchable.',
    gradient: 'from-green-500 to-teal-500',
    icon: Code,
    status: 'beta',
    users: 890,
    snippets: '50K+',
    features: [
      'AI-powered categorization',
      'Syntax highlighting for 50+ languages',
      'Team sharing & collaboration',
      'VS Code extension'
    ],
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'OpenAI'],
    link: 'https://snippets.strahilpeykov.com',
    github: null,
    category: 'Development'
  },
  {
    id: 'performance-analyzer',
    title: 'Web Performance Analyzer',
    tagline: 'Make your sites blazing fast',
    description: 'Comprehensive performance analysis tool that provides actionable insights to optimize your web applications.',
    longDescription: 'Get detailed performance metrics, optimization suggestions, and track improvements over time.',
    gradient: 'from-blue-500 to-purple-500',
    icon: TrendingUp,
    status: 'development',
    expectedLaunch: 'Q2 2024',
    waitlist: 234,
    features: [
      'Core Web Vitals tracking',
      'Bundle size analysis',
      'Performance budgets',
      'Historical tracking'
    ],
    techStack: ['Lighthouse', 'Puppeteer', 'D3.js', 'Node.js'],
    link: '/tools/performance-analyzer',
    github: null,
    category: 'Performance'
  }
]

function ToolCard({ tool, index }: { tool: typeof tools[0], index: number }) {
  const Icon = tool.icon
  const isLive = tool.status === 'live'
  const isBeta = tool.status === 'beta'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Header */}
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} p-2.5`}>
              <Icon className="w-full h-full text-white" />
            </div>
            
            <Badge 
              variant={isLive ? 'success' : isBeta ? 'blue' : 'warning'} 
              size="sm"
            >
              {tool.status}
            </Badge>
          </div>
          
          <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
            {tool.title}
          </h3>
          <p className="text-purple-400 mb-3">{tool.tagline}</p>
          <p className="text-gray-400 text-sm mb-6">
            {tool.description}
          </p>
        </div>
        
        {/* Features */}
        <div className="px-6 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
          <ul className="space-y-2">
            {tool.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Stats */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            {tool.users && (
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {tool.users.toLocaleString()} users
              </span>
            )}
            {tool.searches && (
              <span className="flex items-center gap-1">
                <Search className="w-4 h-4" />
                {tool.searches} searches
              </span>
            )}
            {tool.snippets && (
              <span className="flex items-center gap-1">
                <Code className="w-4 h-4" />
                {tool.snippets} saved
              </span>
            )}
            {tool.waitlist && (
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {tool.waitlist} on waitlist
              </span>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            {isLive || isBeta ? (
              <>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full hover:scale-105 transition-transform"
                >
                  Try it now
                  <ExternalLink className="w-4 h-4" />
                </a>
                {tool.github && (
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-400" />
                  </a>
                )}
              </>
            ) : (
              <Link
                href={tool.link}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-purple-500/30 text-purple-400 font-medium rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
              >
                Join waitlist
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ToolsPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
          
          {/* Animated gears */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <motion.div
              className="absolute top-20 left-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Wrench className="w-32 h-32 text-purple-300" />
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Wrench className="w-48 h-48 text-blue-300" />
            </motion.div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Wrench className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Developer
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tools
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Powerful tools built to solve real problems. Making developers' 
            lives easier, one tool at a time.
          </motion.p>
        </div>
      </section>
      
      {/* Featured Tool */}
      <section className="px-6 py-16 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-mono text-sm">Most Popular</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                {tools[0].title}
              </h2>
              <p className="text-xl text-purple-400 mb-4">{tools[0].tagline}</p>
              <p className="text-gray-400 mb-6">{tools[0].longDescription}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Built with</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools[0].techStack.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Stats</h3>
                  <div className="space-y-1 text-sm text-gray-400">
                    <div>{tools[0].users.toLocaleString()} active users</div>
                    <div>{tools[0].searches} searches performed</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href={tools[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Try it now
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={tools[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-gray-300 font-medium rounded-full hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View source
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 blur-3xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                <ul className="space-y-3">
                  {tools[0].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Tools */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8">All Tools</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Source CTA */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Github className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Open Source First
          </h2>
          <p className="text-gray-400 mb-8">
            Most of my tools are open source. Feel free to contribute, 
            fork, or use them in your own projects.
          </p>
          <a
            href="https://github.com/StrahilPeykov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
          >
            View on GitHub
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}

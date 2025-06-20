// src/app/library/page.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Search, Filter, ArrowUpRight, GraduationCap, Wrench, FileText, Video, Code, Sparkles, ExternalLink, Users, Clock, TrendingUp } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useMemo } from 'react'

// Different types of resources
const resources = [
  // Courses
  {
    id: 'algorithms-exam-prep',
    type: 'course',
    title: 'Algorithms Exam Mastery',
    description: 'Complete guide to passing your algorithms exam with confidence. Covers all major topics with practical examples.',
    category: 'Education',
    tags: ['Algorithms', 'Data Structures', 'Exam Prep'],
    status: 'published',
    enrollment: 1234,
    duration: '8 weeks',
    level: 'Intermediate',
    link: '/courses/algorithms-exam-prep',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'web-security-fundamentals',
    type: 'course',
    title: 'Web Security Fundamentals',
    description: 'Learn to build secure web applications and protect against common vulnerabilities.',
    category: 'Education',
    tags: ['Security', 'Web Development', 'Best Practices'],
    status: 'coming-soon',
    enrollment: 0,
    duration: '6 weeks',
    level: 'Beginner',
    link: '/courses/web-security',
    icon: GraduationCap,
    gradient: 'from-red-500 to-orange-500'
  },
  
  // Tools
  {
    id: 'youtube-transcript-search',
    type: 'tool',
    title: 'YouTube Transcript Search',
    description: 'Search across any YouTube channel\'s entire transcript library. Find specific topics, quotes, or discussions instantly.',
    category: 'Productivity',
    tags: ['YouTube', 'Search', 'Transcripts', 'API'],
    status: 'live',
    users: 5678,
    link: '/tools/youtube-transcript-search',
    icon: Wrench,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'code-snippet-manager',
    type: 'tool',
    title: 'Smart Code Snippet Manager',
    description: 'AI-powered code snippet organizer with syntax highlighting, search, and team sharing features.',
    category: 'Development',
    tags: ['Productivity', 'Code', 'Organization'],
    status: 'beta',
    users: 890,
    link: '/tools/snippet-manager',
    icon: Wrench,
    gradient: 'from-green-500 to-teal-500'
  },
  
  // Resources/Guides
  {
    id: 'system-design-handbook',
    type: 'guide',
    title: 'System Design Handbook',
    description: 'Comprehensive guide to designing scalable systems. From basics to advanced patterns.',
    category: 'Engineering',
    tags: ['System Design', 'Architecture', 'Scale'],
    status: 'published',
    views: 23456,
    lastUpdated: '2024-01-15',
    link: '/guides/system-design',
    icon: FileText,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'react-patterns',
    type: 'guide',
    title: 'Modern React Patterns',
    description: 'Collection of battle-tested React patterns and best practices from production applications.',
    category: 'Development',
    tags: ['React', 'Patterns', 'JavaScript'],
    status: 'published',
    views: 18234,
    lastUpdated: '2024-01-10',
    link: '/guides/react-patterns',
    icon: FileText,
    gradient: 'from-blue-500 to-indigo-500'
  },
  
  // Video Series
  {
    id: 'building-saas',
    type: 'video-series',
    title: 'Building a SaaS from Scratch',
    description: 'Follow along as I build a complete SaaS application from idea to deployment.',
    category: 'Tutorial',
    tags: ['SaaS', 'Full-Stack', 'Business'],
    status: 'in-progress',
    episodes: 12,
    totalViews: 45678,
    link: '/series/building-saas',
    icon: Video,
    gradient: 'from-pink-500 to-purple-500'
  }
]

const categories = ['All', 'Education', 'Development', 'Engineering', 'Productivity', 'Tutorial']
const types = [
  { id: 'all', label: 'All', icon: BookOpen },
  { id: 'course', label: 'Courses', icon: GraduationCap },
  { id: 'tool', label: 'Tools', icon: Wrench },
  { id: 'guide', label: 'Guides', icon: FileText },
  { id: 'video-series', label: 'Videos', icon: Video }
]

function ResourceCard({ resource, index }: { resource: typeof resources[0], index: number }) {
  const Icon = resource.icon

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={resource.link}>
        <div className="relative h-full bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
          {/* Type indicator */}
          <div className="absolute top-4 right-4 z-10">
            <Badge 
              variant={
                resource.status === 'live' || resource.status === 'published' ? 'success' : 
                resource.status === 'beta' || resource.status === 'in-progress' ? 'blue' : 
                'warning'
              } 
              size="sm"
            >
              {resource.status.replace('-', ' ')}
            </Badge>
          </div>
          
          {/* Header with gradient */}
          <div className={`h-32 bg-gradient-to-br ${resource.gradient} opacity-20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-slate-900/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-16 h-16 text-white/30" />
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Category and type */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="purple" size="sm">{resource.category}</Badge>
              <span className="text-xs text-gray-500 capitalize">{resource.type.replace('-', ' ')}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
              {resource.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
              {resource.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {resource.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-gray-500">
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
            
            {/* Footer with metrics */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3 text-gray-500">
                {resource.type === 'course' && (
                  <>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {resource.enrollment?.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {resource.duration}
                    </span>
                  </>
                )}
                {resource.type === 'tool' && resource.users && (
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {resource.users.toLocaleString()} users
                  </span>
                )}
                {(resource.type === 'guide' || resource.type === 'video-series') && (
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {(resource as any).views?.toLocaleString() || (resource as any).totalViews?.toLocaleString()} views
                  </span>
                )}
              </div>
              
              <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Filter resources
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
      const matchesType = selectedType === 'all' || resource.type === selectedType
      
      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchQuery, selectedCategory, selectedType])

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Resources &
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tools
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Courses, tools, and guides I've created to help developers level up their skills and productivity.
          </motion.p>
        </div>
      </section>
      
      {/* Type selector */}
      <section className="px-6 py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            {types.map((type) => {
              const Icon = type.icon
              const isActive = selectedType === type.id
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-purple-500/10 border border-purple-500/50' 
                      : 'hover:bg-slate-900/50'
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isActive ? 'text-purple-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                  <span className={`text-sm font-medium ${isActive ? 'text-purple-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {type.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="px-6 py-8 sticky top-20 z-30 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            {/* Category filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-500">
              {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} available
            </p>
          </div>
          
          {/* Resources grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty state */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <BookOpen className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Have an idea for a course or tool?
          </h2>
          <p className="text-gray-400 mb-8">
            I'm always working on new resources. Let me know what would help you most!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Suggest a resource
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}

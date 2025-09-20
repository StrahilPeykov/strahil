'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, BookOpen, Video, FileText, Search, Filter, ArrowRight, Clock, Users, Star, Sparkles, Download, ExternalLink } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useMemo } from 'react'

// Combined resources: courses, guides, tools, etc.
const resources = [
  // Courses
  {
    id: 'algorithms-exam-prep',
    type: 'course',
    title: 'Algorithms Exam Preparation',
    description: 'Master all 8 exercise types for your algorithms exam with real past exam questions and detailed solutions.',
    image: '/images/courses/algorithms.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    duration: '4 weeks',
    lessons: 8,
    students: 0,
    level: 'University',
    price: 'Free',
    status: 'published',
    featured: true,
    tags: ['Algorithms', 'Data Structures', 'Exam Prep'],
    link: '/courses/algorithms-exam-prep'
  },
  {
    id: 'web-security-fundamentals',
    type: 'course',
    title: 'Web Security Fundamentals',
    description: 'Learn to identify and prevent common web vulnerabilities. Build applications that are secure by design.',
    gradient: 'from-red-500 to-orange-500',
    duration: '6 weeks',
    lessons: 36,
    students: 892,
    level: 'Beginner',
    price: '$49',
    status: 'published',
    tags: ['Security', 'Web Development', 'OWASP'],
    link: '/courses/web-security-fundamentals'
  },
  
  // Guides/Resources
  {
    id: 'system-design-handbook',
    type: 'guide',
    title: 'System Design Handbook',
    description: 'Comprehensive guide to designing scalable systems. From basics to advanced patterns.',
    gradient: 'from-indigo-500 to-purple-500',
    pages: 120,
    views: 23456,
    lastUpdated: '2024-01-15',
    status: 'published',
    featured: true,
    tags: ['System Design', 'Architecture', 'Scale'],
    link: '/guides/system-design'
  },
  {
    id: 'react-patterns',
    type: 'guide',
    title: 'Modern React Patterns',
    description: 'Collection of battle-tested React patterns and best practices from production applications.',
    gradient: 'from-blue-500 to-indigo-500',
    pages: 85,
    views: 18234,
    lastUpdated: '2024-01-10',
    status: 'published',
    tags: ['React', 'Patterns', 'JavaScript'],
    link: '/guides/react-patterns'
  },
  
  // Video content
  {
    id: 'building-saas',
    type: 'video-series',
    title: 'Building a SaaS from Scratch',
    description: 'Follow along as I build a complete SaaS application from idea to deployment.',
    gradient: 'from-pink-500 to-purple-500',
    episodes: 12,
    totalViews: 45678,
    duration: '8+ hours',
    status: 'in-progress',
    tags: ['SaaS', 'Full-Stack', 'Business'],
    link: '/series/building-saas'
  },
  
  // Downloads
  {
    id: 'dev-toolkit',
    type: 'download',
    title: 'Developer Productivity Toolkit',
    description: 'My personal collection of scripts, configs, and tools for maximum productivity.',
    gradient: 'from-green-500 to-teal-500',
    downloads: 1234,
    size: '2.3MB',
    format: 'ZIP',
    status: 'published',
    tags: ['Productivity', 'Tools', 'Config'],
    link: '/downloads/dev-toolkit'
  }
]

const types = [
  { id: 'all', label: 'All Resources', icon: BookOpen },
  { id: 'course', label: 'Courses', icon: GraduationCap },
  { id: 'guide', label: 'Guides', icon: FileText },
  { id: 'video-series', label: 'Videos', icon: Video },
  { id: 'download', label: 'Downloads', icon: Download }
]

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'University']

function ResourceCard({ resource, index }: { resource: typeof resources[0], index: number }) {
  const typeConfig = {
    course: { icon: GraduationCap, label: 'Course', color: 'text-white' },
    guide: { icon: FileText, label: 'Guide', color: 'text-white' },
    'video-series': { icon: Video, label: 'Video Series', color: 'text-white' },
    download: { icon: Download, label: 'Download', color: 'text-white' }
  }

  const config = typeConfig[resource.type as keyof typeof typeConfig]
  const Icon = config.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={resource.link}>
        <div className="relative h-full bg-bg-soft/80 backdrop-blur-sm border border-outline rounded-2xl overflow-hidden hover:shadow-glow hover:border-glow/35 transition-all duration-300">
          {/* Header with gradient */}
          <div className={`h-48 relative overflow-hidden bg-bg-soft`}>
            <div className="absolute inset-0 opacity-[0.06]" style={{ boxShadow: 'inset 0 0 120px rgba(60,159,255,0.12)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-20 h-20 text-white/20" />
            </div>
            
            {/* Status badge */}
            <div className="absolute top-4 right-4">
              <Badge 
                variant={resource.status === 'published' ? 'success' : resource.status === 'in-progress' ? 'blue' : 'warning'} 
                size="sm"
              >
                {resource.status === 'published' ? resource.price || 'Free' : resource.status}
              </Badge>
            </div>
            
            {/* Type badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="default" size="sm">
                {config.label}
              </Badge>
            </div>
            
            {resource.featured && (
              <div className="absolute bottom-4 left-4">
                <Badge variant="warning" size="sm" className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </Badge>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
              {resource.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {resource.description}
            </p>
            
            {/* Metadata */}
            <div className="space-y-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {resource.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-gray-500">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                {resource.type === 'course' && (
                  <>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {resource.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {resource.students}
                    </span>
                  </>
                )}
                {resource.type === 'guide' && (
                  <>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {resource.pages} pages
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {resource.views?.toLocaleString()}
                    </span>
                  </>
                )}
                {resource.type === 'video-series' && (
                  <>
                    <span className="flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      {resource.episodes} episodes
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {resource.duration}
                    </span>
                  </>
                )}
                {resource.type === 'download' && (
                  <>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {resource.downloads} downloads
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {resource.size}
                    </span>
                  </>
                )}
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-4 flex items-center justify-between">
              <span className={`text-sm font-medium text-white`}>
                {resource.type === 'course' ? 'Start learning' : 
                 resource.type === 'guide' ? 'Read guide' :
                 resource.type === 'video-series' ? 'Watch now' :
                 'Download'}
              </span>
              <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white transition-all group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function LearnPage() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesType = selectedType === 'all' || resource.type === selectedType
      const matchesLevel = selectedLevel === 'All' || (resource as any).level === selectedLevel
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      return matchesType && matchesLevel && matchesSearch
    })
  }, [selectedType, selectedLevel, searchQuery])

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Learn &
            <span className="block">Grow</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Courses, guides, and resources to help you level up your skills. 
            From algorithms to system design, learn at your own pace.
          </motion.p>
        </div>
      </section>
      
      {/* Type selector */}
      <section className="px-6 py-8 border-y border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {types.map((type) => {
              const Icon = type.icon
              const isActive = selectedType === type.id
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${
                    isActive 
                      ? 'bg-glow/15 border border-glow/30 text-white' 
                      : 'border border-outline text-white/70 hover:text-white hover:border-white/30'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`} />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="px-6 py-8 sticky top-20 z-30 bg-bg/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-bg-soft/70 border border-outline rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-glow/50 transition-colors"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${
                showFilters 
                  ? 'bg-glow/10 border-glow/30 text-white' 
                  : 'bg-bg-soft/70 border-outline text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Expanded filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6">
                  <h3 className="text-sm font-medium text-white/70 mb-3">Difficulty Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedLevel === level
                            ? 'bg-glow/15 text-white border border-glow/30'
                            : 'bg-bg-soft/70 text-white/70 border border-outline hover:text-white'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
          
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
      <section className="px-6 py-16 border-t border-outline">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-white/80 mb-8">
            I'm always creating new learning resources. Let me know what topics you'd like to see covered!
          </p>
          <Link href="/contact" className="inline-flex">
            <span className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-glow text-white shadow-glow transition-transform hover:scale-[1.02]">
              Suggest a topic
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}

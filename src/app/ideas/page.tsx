// src/app/ideas/page.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Search, Clock, Calendar, TrendingUp, BookOpen, Hash, ArrowUpRight, Filter, Eye, Heart, Bookmark, Share2, Coffee, Sparkles } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useMemo } from 'react'

// Enhanced ideas/blog data
const allIdeas = [
  {
    id: 'future-of-ai-development',
    title: 'The Future of AI-Driven Development',
    excerpt: 'How machine learning is reshaping the developer experience and what it means for the future of software engineering.',
    content: 'Exploring the intersection of AI and software development, from GitHub Copilot to autonomous coding agents...',
    date: '2024-01-15',
    readTime: '8 min',
    views: 12543,
    likes: 234,
    comments: 45,
    tags: ['AI', 'Development', 'Future Tech'],
    category: 'Technology',
    featured: true,
    gradient: 'from-blue-500 to-purple-500',
    image: '/images/ideas/ai-dev.jpg'
  },
  {
    id: 'building-for-scale',
    title: 'Building for Scale: Lessons from Production',
    excerpt: 'Real-world insights from scaling applications to millions of users. What works, what breaks, and what surprises.',
    content: 'When you\'re building an app for thousands of users, everything changes. Here\'s what I learned...',
    date: '2023-12-20',
    readTime: '12 min',
    views: 8342,
    likes: 189,
    comments: 23,
    tags: ['Architecture', 'Performance', 'DevOps'],
    category: 'Engineering',
    featured: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'digital-minimalism-dev',
    title: 'The Art of Digital Minimalism in Development',
    excerpt: 'Finding beauty in simplicity and intentional design. How less code can mean more impact.',
    content: 'In a world of endless frameworks and tools, sometimes the best solution is the simplest one...',
    date: '2023-11-10',
    readTime: '6 min',
    views: 5678,
    likes: 167,
    comments: 19,
    tags: ['Design', 'Philosophy', 'Best Practices'],
    category: 'Thoughts',
    featured: false,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'complex-systems-thinking',
    title: 'Complex Systems Thinking for Developers',
    excerpt: 'Applying principles from complex systems theory to software architecture and team dynamics.',
    content: 'Software systems are complex adaptive systems. Understanding this changes how we build...',
    date: '2023-10-05',
    readTime: '15 min',
    views: 3245,
    likes: 98,
    comments: 12,
    tags: ['Complex Systems', 'Architecture', 'Theory'],
    category: 'Engineering',
    featured: false,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'web3-reality-check',
    title: 'Web3: A Reality Check from the Trenches',
    excerpt: 'After building multiple DeFi projects, here\'s my honest take on the current state of Web3.',
    content: 'The promise of Web3 is compelling, but the reality is more nuanced. Let\'s talk about what actually works...',
    date: '2023-09-15',
    readTime: '10 min',
    views: 15834,
    likes: 412,
    comments: 87,
    tags: ['Web3', 'Blockchain', 'Opinion'],
    category: 'Technology',
    featured: true,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'developer-wellness',
    title: 'Code, Coffee, and Calisthenics',
    excerpt: 'Balancing physical and mental health as a developer. My journey from burnout to balance.',
    content: 'They say sitting is the new smoking. Here\'s how I transformed my lifestyle while staying productive...',
    date: '2023-08-28',
    readTime: '7 min',
    views: 6789,
    likes: 245,
    comments: 34,
    tags: ['Wellness', 'Productivity', 'Lifestyle'],
    category: 'Personal',
    featured: false,
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    id: 'open-source-journey',
    title: 'My Open Source Journey: 0 to 5K Stars',
    excerpt: 'Lessons learned from building and maintaining popular open source projects.',
    content: 'Starting an open source project is easy. Making it successful is a different story...',
    date: '2023-08-10',
    readTime: '9 min',
    views: 9234,
    likes: 356,
    comments: 45,
    tags: ['Open Source', 'Community', 'GitHub'],
    category: 'Development',
    featured: false,
    gradient: 'from-green-500 to-blue-500'
  },
  {
    id: 'eindhoven-tech-scene',
    title: 'Eindhoven\'s Hidden Tech Scene',
    excerpt: 'Why this Dutch city is becoming a hotspot for innovation and tech startups.',
    content: 'From Philips to ASML, Eindhoven has always been about innovation. Here\'s what\'s happening now...',
    date: '2023-07-22',
    readTime: '5 min',
    views: 4567,
    likes: 123,
    comments: 28,
    tags: ['Eindhoven', 'Tech Scene', 'Netherlands'],
    category: 'Personal',
    featured: false,
    gradient: 'from-orange-500 to-yellow-500'
  }
]

const categories = ['All', 'Technology', 'Engineering', 'Development', 'Thoughts', 'Personal']
const tags = ['AI', 'Development', 'Architecture', 'Design', 'Web3', 'Performance', 'Open Source', 'Complex Systems']
const sortOptions = ['Latest', 'Popular', 'Most Liked', 'Most Discussed']

function IdeaCard({ idea, index, viewMode }: { idea: typeof allIdeas[0], index: number, viewMode: 'grid' | 'list' }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  if (viewMode === 'list') {
    return (
      <motion.article
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ delay: index * 0.05 }}
        className="group"
      >
        <Link href={`/ideas/${idea.id}`}>
          <div className="relative bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex gap-6">
              {/* Thumbnail */}
              <div className={`w-32 h-32 rounded-lg bg-gradient-to-br ${idea.gradient} opacity-20 flex-shrink-0 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-900/50" />
                <BookOpen className="absolute inset-0 m-auto w-12 h-12 text-white/30" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={idea.featured ? 'purple' : 'default'} size="sm">
                        {idea.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{idea.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {idea.title}
                    </h3>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setIsLiked(!isLiked)
                      }}
                      className={`p-2 rounded-lg transition-all ${
                        isLiked ? 'text-red-400 bg-red-400/10' : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setIsBookmarked(!isBookmarked)
                      }}
                      className={`p-2 rounded-lg transition-all ${
                        isBookmarked ? 'text-yellow-400 bg-yellow-400/10' : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-3 line-clamp-2">{idea.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {idea.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {idea.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {idea.likes}
                    </span>
                  </div>
                  
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/ideas/${idea.id}`}>
        <div className="relative h-full bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${idea.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          {/* Featured badge */}
          {idea.featured && (
            <div className="absolute top-4 right-4 z-10">
              <Badge variant="purple" size="sm" className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Featured
              </Badge>
            </div>
          )}
          
          {/* Thumbnail */}
          <div className={`h-48 bg-gradient-to-br ${idea.gradient} opacity-20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-slate-900/50" />
            
            {/* Animated pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
                animation: 'slide 20s linear infinite',
              }} />
            </div>
            
            {/* Read time overlay */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-gray-300 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {idea.readTime}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default" size="sm">{idea.category}</Badge>
              <span className="text-xs text-gray-500">
                {new Date(idea.date).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all line-clamp-2">
              {idea.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {idea.excerpt}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {idea.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-500">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {idea.views.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {idea.likes}
                </span>
                <span className="flex items-center gap-1">
                  <Coffee className="w-3 h-3" />
                  {idea.comments}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-purple-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsLiked(!isLiked)
              }}
              className={`p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg transition-all ${
                isLiked ? 'text-red-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsBookmarked(!isBookmarked)
              }}
              className={`p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg transition-all ${
                isBookmarked ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                // Share functionality
              }}
              className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function IdeasPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('Latest')

  // Filter and sort ideas
  const filteredIdeas = useMemo(() => {
    let filtered = allIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || idea.category === selectedCategory
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => idea.tags.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })

    // Sort
    switch (sortBy) {
      case 'Popular':
        filtered.sort((a, b) => b.views - a.views)
        break
      case 'Most Liked':
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case 'Most Discussed':
        filtered.sort((a, b) => b.comments - a.comments)
        break
      default: // Latest
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return filtered
  }, [searchQuery, selectedCategory, selectedTags, sortBy])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Animated neurons background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
          {/* Floating orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(96, 165, 250, 0.1)' : 'rgba(192, 132, 252, 0.1)'} 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Ideas & 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Thoughts on technology, design, and the future of digital experiences. 
            A collection of ideas from the intersection of code and creativity.
          </motion.p>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="px-6 py-8 border-y border-slate-800 sticky top-20 z-30 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search ideas, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <div className="flex gap-2">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              
              {/* View mode */}
              <div className="flex gap-1 p-1 bg-slate-900/50 rounded-xl border border-slate-800">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* Filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${
                  showFilters 
                    ? 'bg-purple-500/10 border-purple-500/50 text-purple-400' 
                    : 'bg-slate-900/50 border-slate-800 text-gray-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                {(selectedCategory !== 'All' || selectedTags.length > 0) && (
                  <Badge variant="purple" size="sm">
                    {(selectedCategory !== 'All' ? 1 : 0) + selectedTags.length}
                  </Badge>
                )}
              </button>
            </div>
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
                <div className="pt-6 space-y-4">
                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedCategory === category
                              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                              : 'bg-slate-900/50 text-gray-400 border border-slate-800 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedTags.includes(tag)
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                              : 'bg-slate-900/50 text-gray-400 border border-slate-800 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <Hash className="w-3 h-3" />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Ideas Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-500">
              {filteredIdeas.length} {filteredIdeas.length === 1 ? 'article' : 'articles'} found
            </p>
            
            {/* Quick actions */}
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Subscribe to RSS
              </button>
              <button className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Email newsletter
              </button>
            </div>
          </div>
          
          {/* Ideas grid/list */}
          <motion.div 
            layout
            className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
          >
            <AnimatePresence mode="popLayout">
              {filteredIdeas.map((idea, index) => (
                <IdeaCard key={idea.id} idea={idea} index={index} viewMode={viewMode} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty state */}
          {filteredIdeas.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <Lightbulb className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No ideas found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 blur-3xl" />
            
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 lg:p-12 text-center">
              <Coffee className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Get ideas delivered to your inbox
              </h2>
              
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join 1,000+ developers getting weekly insights on technology, productivity, 
                and the art of building great software.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-600 mt-4">
                No spam, unsubscribe anytime. Check out past issues.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

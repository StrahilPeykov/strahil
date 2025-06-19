// src/app/ideas/page.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Search, Clock, Calendar, TrendingUp, BookOpen, Hash, ArrowUpRight, Filter } from 'lucide-react'
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
    views: '12.5k',
    tags: ['AI', 'Development', 'Future Tech'],
    category: 'Technology',
    featured: true,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 'building-for-scale',
    title: 'Building for Scale: Lessons from Production',
    excerpt: 'Real-world insights from scaling applications to millions of users. What works, what breaks, and what surprises.',
    content: 'When you\'re building an app for thousands of users, everything changes. Here\'s what I learned...',
    date: '2023-12-20',
    readTime: '12 min',
    views: '8.3k',
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
    views: '5.7k',
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
    views: '3.2k',
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
    views: '15.8k',
    tags: ['Web3', 'Blockchain', 'Opinion'],
    category: 'Technology',
    featured: true,
    gradient: 'from-indigo-500 to-purple-500'
  }
]

const categories = ['All', 'Technology', 'Engineering', 'Thoughts', 'Tutorials']
const tags = ['AI', 'Development', 'Architecture', 'Design', 'Web3', 'Performance']

function IdeaCard({ idea, index }: { idea: typeof allIdeas[0], index: number }) {
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
        <div className="relative h-full bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${idea.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          {/* Featured badge */}
          {idea.featured && (
            <div className="absolute top-6 right-6">
              <Badge variant="purple" size="sm">Featured</Badge>
            </div>
          )}
          
          {/* Category */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${idea.gradient} opacity-20 flex items-center justify-center`}>
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-500">{idea.category}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
            {idea.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
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
          
          {/* Meta info */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(idea.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {idea.readTime}
              </span>
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {idea.views}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
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

  // Filter ideas based on search and filters
  const filteredIdeas = useMemo(() => {
    return allIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || idea.category === selectedCategory
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => idea.tags.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })
  }, [searchQuery, selectedCategory, selectedTags])

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
          <div className="mb-8">
            <p className="text-gray-500">
              {filteredIdeas.length} {filteredIdeas.length === 1 ? 'idea' : 'ideas'} found
            </p>
          </div>
          
          {/* Ideas grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredIdeas.map((idea, index) => (
                <IdeaCard key={idea.id} idea={idea} index={index} />
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
    </PageWrapper>
  )
}
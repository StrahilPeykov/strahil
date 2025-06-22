'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { PenTool, Search, Clock, Calendar, TrendingUp, BookOpen, Hash, ArrowUpRight, Filter, Eye, Heart, Bookmark, Share2, Coffee, Sparkles } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useMemo } from 'react'

// Same content as ideas page, just renamed
const allArticles = [
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
    gradient: 'from-blue-500 to-cyan-500',
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
  // ... rest of the articles
]

const categories = ['All', 'Technology', 'Engineering', 'Development', 'Thoughts', 'Personal']
const sortOptions = ['Latest', 'Popular', 'Most Liked', 'Most Discussed']

function ArticleCard({ article, index, viewMode }: { article: typeof allArticles[0], index: number, viewMode: 'grid' | 'list' }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  // Same card implementation as before
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/writing/${article.id}`}>
        <div className="relative h-full bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
          <div className={`h-48 bg-gradient-to-br ${article.gradient} opacity-20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-slate-900/50" />
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-gray-300 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default" size="sm">{article.category}</Badge>
              <span className="text-xs text-gray-500">
                {new Date(article.date).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            
            <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all line-clamp-2">
              {article.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {article.views.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {article.likes}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-purple-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function WritingPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('Latest')

  const filteredArticles = useMemo(() => {
    let filtered = allArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      
      return matchesSearch && matchesCategory
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
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-purple-500/5 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <PenTool className="w-16 h-16 text-pink-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Writing &
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Thoughts
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Articles on technology, design, and the art of building digital experiences. 
            Thoughts from the intersection of code and creativity.
          </motion.p>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="px-6 py-8 border-y border-slate-800 sticky top-20 z-30 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-500">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>
          
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} viewMode={viewMode} />
              ))}
            </AnimatePresence>
          </motion.div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />
            
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 lg:p-12 text-center">
              <Coffee className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Get new articles in your inbox
              </h2>
              
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join other developers getting my thoughts on technology, productivity, 
                and building better software.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-600 mt-4">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { PenTool, Search, Clock, Calendar, TrendingUp, Eye, Heart, ArrowRight, Filter } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useMemo, useEffect } from 'react'
import { getBlogListItems, type ContentListItem } from '../../lib/content'

function ArticleCard({ article, index }: { article: ContentListItem; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/blog/${article.slug}`}>
        <div className="relative h-full bg-bg-soft/80 backdrop-blur-sm border border-outline rounded-xl overflow-hidden hover:shadow-glow hover:border-glow/35 transition-all duration-300">
          <div className="h-48 relative overflow-hidden bg-bg-soft">
            <div className="absolute inset-0 opacity-[0.06]" style={{ boxShadow: 'inset 0 0 120px rgba(60,159,255,0.15)' }} />
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-gray-300 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default" size="sm">{article.category}</Badge>
              <span className="text-xs text-gray-500">{article.date}</span>
            </div>
            
            <h3 className="text-xl font-display font-semibold text-white mb-3 transition-colors line-clamp-2">
              {article.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                ))}
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-white/60 transition-all group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [articles, setArticles] = useState<ContentListItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      const items = await getBlogListItems()
      setArticles(items)
      setLoading(false)
    }
    loadArticles()
  }, [])

  const categories = useMemo(() => {
    const cats = new Set(['All'])
    articles.forEach(article => cats.add(article.category))
    return Array.from(cats)
  }, [articles])

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory, articles])

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
            <PenTool className="w-16 h-16 text-white mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Writing &
            <span className="block">Thoughts</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Articles on technology, design, and the art of building digital experiences. 
            Thoughts from the intersection of code and creativity.
          </motion.p>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="px-6 py-8 border-y border-outline sticky top-20 z-30 bg-bg/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-bg-soft/70 border border-outline rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-glow/50 transition-colors"
              />
            </div>
            
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-glow/15 text-white border border-glow/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
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
          
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading articles...</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((article, index) => (
                  <ArticleCard key={article.slug} article={article} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}

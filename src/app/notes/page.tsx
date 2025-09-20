'use client'

import { motion } from 'framer-motion'
import { Brain, Heart, Code2, Lightbulb, BookOpen, Wrench, Coffee, Filter, Grid3x3, List, Search } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useMemo, useEffect } from 'react'
import { getNoteListItems, type ContentListItem } from '../../lib/content' // Updated import

const categories = [
  { id: 'all', label: 'All Notes', icon: Grid3x3 },
  { id: 'theory-of-mind', label: 'Theory of Mind', icon: Brain },
  { id: 'philosophy', label: 'Philosophy & Beliefs', icon: Heart },
  { id: 'projects', label: 'Project Ideas', icon: Lightbulb },
  { id: 'recommendations', label: 'Recommendations', icon: Wrench },
  { id: 'research', label: 'Research Notes', icon: BookOpen },
  { id: 'personal', label: 'Personal', icon: Coffee },
]

function IdeaCard({ idea }: { idea: ContentListItem }) {
  const categoryInfo = categories.find(c => c.label.includes(idea.category)) || categories[0]
  const Icon = categoryInfo?.icon || Brain
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <Link href={`/notes/${idea.slug}`}>
        <div className="h-full bg-bg-soft/80 backdrop-blur-sm border border-outline rounded-xl p-6 hover:shadow-glow hover:border-glow/35 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 rounded-lg bg-bg-soft/70 border border-outline flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            {idea.featured && (
              <Badge variant="purple" size="sm">Featured</Badge>
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
            {idea.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {idea.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {idea.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs text-gray-500">#{tag}</span>
              ))}
            </div>
            <time className="text-xs text-gray-600">
              {idea.date}
            </time>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function NotesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [notes, setNotes] = useState<ContentListItem[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function loadNotes() {
      const items = await getNoteListItems()
      setNotes(items)
      setLoading(false)
    }
    loadNotes()
  }, [])
  
  const filteredNotes = useMemo(() => {
    return notes.filter(idea => {
      const matchesCategory = selectedCategory === 'all' || 
                            categories.find(c => c.id === selectedCategory)?.label.includes(idea.category)
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery, notes])
  
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 py-24 overflow-hidden">
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
            <Brain className="w-16 h-16 text-white mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Ideas &
            <span className="block">Observations</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            A collection of thoughts on theory of mind, philosophy, project ideas, and 
            observations from years of arguing with people on the internet.
          </motion.p>
        </div>
      </section>
      
      {/* Search and Categories */}
      <section className="px-6 py-8 border-y border-outline sticky top-20 z-30 bg-bg/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-bg-soft/70 border border-outline rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-glow/50 transition-colors"
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-glow/15 text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-glow/15 text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto mt-4 no-scrollbar">
            {categories.map(category => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-glow/15 text-white border border-glow/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Notes Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading notes...</p>
            </div>
          ) : filteredNotes.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No notes found matching your criteria.</p>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4 max-w-4xl mx-auto'
            }>
              {filteredNotes.map(idea => (
                <IdeaCard key={idea.slug} idea={idea} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="px-6 py-16 border-t border-outline">
        <div className="max-w-4xl mx-auto text-center">
          <Coffee className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Get my latest thoughts
          </h2>
          <p className="text-white/80 mb-8">
            Occasional updates on new ideas, research notes, and philosophical musings.
          </p>
          <Link href="/contact" className="inline-flex">
            <span className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-glow text-white shadow-glow transition-transform hover:scale-[1.02]">
              Subscribe to updates
            </span>
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}

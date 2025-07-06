'use client'

import { motion } from 'framer-motion'
import { Brain, Heart, Code2, Lightbulb, BookOpen, Wrench, Coffee, Filter, Grid3x3, List, Search } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState, useMemo } from 'react'

const categories = [
  { id: 'all', label: 'All Notes', icon: Grid3x3 },
  { id: 'theory-of-mind', label: 'Theory of Mind', icon: Brain },
  { id: 'philosophy', label: 'Philosophy & Beliefs', icon: Heart },
  { id: 'projects', label: 'Project Ideas', icon: Lightbulb },
  { id: 'recommendations', label: 'Recommendations', icon: Wrench },
  { id: 'research', label: 'Research Notes', icon: BookOpen },
  { id: 'personal', label: 'Personal', icon: Coffee },
]

const notes = [
  // Theory of Mind
  {
    id: 'humans-not-truth-seeking',
    title: 'Humans are not Truth-Seeking Machines',
    excerpt: 'Why our brains are optimized for survival and social cohesion, not objective truth. Understanding the evolutionary basis of our cognitive biases.',
    category: 'theory-of-mind',
    tags: ['psychology', 'cognitive-science', 'philosophy'],
    date: '2025-01-12',
    featured: true,
  },
  {
    id: 'constellation-of-beliefs',
    title: 'The Constellation of Beliefs',
    excerpt: 'How beliefs cluster together in predictable patterns and why changing one often requires reorganizing entire worldviews.',
    category: 'theory-of-mind',
    tags: ['psychology', 'belief-systems', 'epistemology'],
    date: '2025-01-10',
  },
  {
    id: 'aesthetic-vs-function',
    title: 'Aesthetic vs Function in Decision Making',
    excerpt: 'People often choose what feels right over what works. Exploring the tension between emotional and rational decision-making.',
    category: 'theory-of-mind',
    tags: ['psychology', 'decision-making', 'design'],
    date: '2025-01-08',
  },
  {
    id: 'social-incentives-beliefs',
    title: 'Social Incentives Dictate Beliefs',
    excerpt: 'The uncomfortable truth about how our social environment shapes what we believe far more than logic or evidence.',
    category: 'theory-of-mind',
    tags: ['sociology', 'psychology', 'incentives'],
    date: '2025-01-05',
  },
  
  // Philosophy & Beliefs
  {
    id: 'moral-positions',
    title: 'My Moral Framework',
    excerpt: 'Core principles that guide my ethical decisions: consequentialism tempered by individual rights, the importance of consent, and why intentions matter less than outcomes.',
    category: 'philosophy',
    tags: ['ethics', 'philosophy', 'personal'],
    date: '2025-01-15',
    featured: true,
  },
  {
    id: 'college-degrees-worth',
    title: 'Are College Degrees Still Worth It?',
    excerpt: 'A data-driven analysis of the ROI on higher education in 2025. Spoiler: it depends entirely on what you study and where.',
    category: 'philosophy',
    tags: ['education', 'economics', 'career'],
    date: '2025-01-03',
  },
  
  // Project Ideas
  {
    id: 'projects-programmers-should-build',
    title: 'Projects Every Programmer Should Build',
    excerpt: 'Beyond todo apps: challenging projects that actually teach you system design, algorithms, and real-world problem solving.',
    category: 'projects',
    tags: ['programming', 'learning', 'projects'],
    date: '2025-01-14',
    featured: true,
  },
  {
    id: 'ai-assisted-learning-platform',
    title: 'Idea: AI-Assisted Learning Platform',
    excerpt: 'Concept for a learning platform that adapts to individual learning styles using ML, but maintains focus on understanding over memorization.',
    category: 'projects',
    tags: ['ai', 'education', 'startup-ideas'],
    date: '2025-01-11',
  },
  
  // Recommendations
  {
    id: 'dev-tools-2025',
    title: 'My Development Setup 2025',
    excerpt: 'Complete breakdown of my development environment: hardware, software, and the workflows that keep me productive.',
    category: 'recommendations',
    tags: ['tools', 'productivity', 'setup'],
    date: '2025-01-13',
    featured: true,
  },
  {
    id: 'news-sources',
    title: 'Information Diet: Where I Get My News',
    excerpt: 'Curated list of high-signal, low-noise information sources across tech, science, and global affairs.',
    category: 'recommendations',
    tags: ['media', 'news', 'resources'],
    date: '2025-01-09',
  },
  {
    id: 'hardware-setup',
    title: 'Hardware That Matters',
    excerpt: 'My complete hardware setup: from the M3 MacBook Pro to the mechanical keyboard that sparked a thousand commits.',
    category: 'recommendations',
    tags: ['hardware', 'setup', 'productivity'],
    date: '2025-01-07',
  },
  
  // Research Notes
  {
    id: 'stranger-camus-notes',
    title: 'Notes on The Stranger by Camus',
    excerpt: 'Exploring absurdism through Meursault: when indifference becomes a philosophical statement.',
    category: 'research',
    tags: ['literature', 'philosophy', 'camus'],
    date: '2025-01-06',
  },
  {
    id: 'third-reich-lessons',
    title: 'Lessons from Studying the Third Reich',
    excerpt: 'What the rise of Nazi Germany teaches us about propaganda, mass psychology, and the fragility of democratic institutions.',
    category: 'research',
    tags: ['history', 'politics', 'psychology'],
    date: '2025-01-04',
  },
  {
    id: 'international-law-primer',
    title: 'International Law: A Practical Primer',
    excerpt: 'Key concepts in international law that actually matter in the real world, from sovereignty to war crimes.',
    category: 'research',
    tags: ['law', 'international-relations', 'politics'],
    date: '2025-01-02',
  },
  
  // Personal
  {
    id: 'arguing-effectively',
    title: 'What Years of Arguing Taught Me',
    excerpt: "I've spent a great portion of my life arguing with people across all environments. Here's what I learned about changing minds.",
    category: 'personal',
    tags: ['communication', 'psychology', 'personal-growth'],
    date: '2025-01-01',
  },
]

function IdeaCard({ idea }: { idea: typeof notes[0] }) {
  const categoryInfo = categories.find(c => c.id === idea.category)
  const Icon = categoryInfo?.icon || Brain
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <Link href={`/notes/${idea.id}`}>
        <div className="h-full bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
              idea.category === 'theory-of-mind' ? 'from-blue-500/20 to-purple-500/20' :
              idea.category === 'philosophy' ? 'from-purple-500/20 to-pink-500/20' :
              idea.category === 'projects' ? 'from-green-500/20 to-teal-500/20' :
              idea.category === 'recommendations' ? 'from-orange-500/20 to-red-500/20' :
              idea.category === 'research' ? 'from-indigo-500/20 to-blue-500/20' :
              'from-gray-500/20 to-gray-600/20'
            } flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-gray-300" />
            </div>
            {idea.featured && (
              <Badge variant="purple" size="sm">Featured</Badge>
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
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
              {new Date(idea.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
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
  
  const filteredNotes = useMemo(() => {
    return notes.filter(idea => {
      const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])
  
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Brain className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Ideas &
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Observations
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A collection of thoughts on theory of mind, philosophy, project ideas, and 
            observations from years of arguing with people on the internet.
          </motion.p>
        </div>
      </section>
      
      {/* Search and Categories */}
      <section className="px-6 py-8 border-y border-slate-800 sticky top-20 z-30 bg-slate-950/90 backdrop-blur-xl">
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
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-purple-500/20 text-purple-400' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-purple-500/20 text-purple-400' 
                    : 'text-gray-500 hover:text-gray-300'
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
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800'
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
          {filteredNotes.length === 0 ? (
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
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Coffee className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Get my latest thoughts
          </h2>
          <p className="text-gray-400 mb-8">
            Occasional updates on new ideas, research notes, and philosophical musings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Subscribe to updates
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
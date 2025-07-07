'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, MessageSquare, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../layout/PageWrapper'
import { Badge } from '../ui/Badge'

export interface ArticleData {
  title: string
  subtitle?: string
  excerpt: string
  date: string
  readTime: string
  author?: string
  tags: string[]
  category: string
  content: React.ReactNode
  backLink: string
  backLabel: string
  badges?: Array<{
    variant: 'blue' | 'purple' | 'pink' | 'success' | 'warning' | 'error'
    label: string
  }>
}

interface ArticleTemplateProps {
  article: ArticleData
}

export function ArticleTemplate({ article }: ArticleTemplateProps) {
  return (
    <PageWrapper>
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <Link
              href={article.backLink}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {article.backLabel}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {article.badges && (
                <div className="flex items-center gap-3 mb-6">
                  {article.badges.map((badge, i) => (
                    <Badge key={i} variant={badge.variant}>{badge.label}</Badge>
                  ))}
                </div>
              )}
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
                {article.title}
                {article.subtitle && (
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    {' '}{article.subtitle}
                  </span>
                )}
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{article.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {article.content}
            </motion.div>
            
            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-slate-800">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">Discuss</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span className="text-sm">Save</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-full transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="text-sm text-gray-500">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageWrapper>
  )
}
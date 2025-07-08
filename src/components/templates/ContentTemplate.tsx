'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, MessageSquare, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../layout/PageWrapper'
import { Badge } from '../ui/Badge'

// Base content data interface
export interface BaseContentData {
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

// Content type specific configurations
interface ContentTypeConfig {
  showActions?: boolean
  showMetadata?: boolean
  customActions?: React.ReactNode
  titleClassName?: string
  metadataItems?: Array<'date' | 'readTime' | 'author' | 'category'>
}

const DEFAULT_CONFIG: ContentTypeConfig = {
  showActions: true,
  showMetadata: true,
  metadataItems: ['date', 'readTime', 'author'],
  titleClassName: 'text-4xl lg:text-6xl font-display font-bold text-white mb-6'
}

interface ContentTemplateProps {
  content: BaseContentData
  config?: ContentTypeConfig
}

// Reusable components
function ContentHeader({ content, config }: { content: BaseContentData; config: ContentTypeConfig }) {
  const { showMetadata, metadataItems = [], titleClassName } = config
  
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href={content.backLink}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.backLabel}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.badges && (
            <div className="flex items-center gap-3 mb-6">
              {content.badges.map((badge, i) => (
                <Badge key={i} variant={badge.variant}>{badge.label}</Badge>
              ))}
            </div>
          )}
          
          <h1 className={titleClassName}>
            {content.title}
            {content.subtitle && (
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                {' '}{content.subtitle}
              </span>
            )}
          </h1>
          
          <p className="text-xl text-gray-400 mb-8">
            {content.excerpt}
          </p>
          
          {showMetadata && (
            <div className="flex items-center gap-6 text-sm text-gray-500">
              {metadataItems.includes('date') && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{content.date}</time>
                </div>
              )}
              {metadataItems.includes('readTime') && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{content.readTime}</span>
                </div>
              )}
              {metadataItems.includes('author') && content.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{content.author}</span>
                </div>
              )}
              {metadataItems.includes('category') && (
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">{content.category}</span>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function ContentBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

function ContentFooter({ 
  content, 
  showActions, 
  customActions 
}: { 
  content: BaseContentData
  showActions?: boolean
  customActions?: React.ReactNode 
}) {
  if (!showActions && !customActions) return null
  
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mt-16 pt-8 border-t border-slate-800">
        {customActions ? (
          customActions
        ) : (
          <>
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
              {content.tags.map(tag => (
                <span key={tag} className="text-sm text-gray-500">#{tag}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Main unified template
export function ContentTemplate({ content, config = {} }: ContentTemplateProps) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config }
  
  return (
    <PageWrapper>
      <article className="min-h-screen">
        <ContentHeader content={content} config={finalConfig} />
        <ContentBody>{content.content}</ContentBody>
        <ContentFooter 
          content={content} 
          showActions={finalConfig.showActions}
          customActions={finalConfig.customActions}
        />
      </article>
    </PageWrapper>
  )
}

// Specific template variants (backwards compatibility)
export function ArticleTemplate({ article }: { article: BaseContentData }) {
  return <ContentTemplate content={article} />
}

export function NoteTemplate({ note }: { note: BaseContentData }) {
  return (
    <ContentTemplate 
      content={note}
      config={{
        showActions: false,
        metadataItems: ['date', 'readTime', 'category'],
        titleClassName: 'text-3xl lg:text-5xl font-display font-bold text-white mb-6'
      }}
    />
  )
}

// For backwards compatibility
export type ArticleData = BaseContentData
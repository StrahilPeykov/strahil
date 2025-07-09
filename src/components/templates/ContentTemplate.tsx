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
  titleClassName: 'text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6'
}

interface ContentTemplateProps {
  content: BaseContentData
  config?: ContentTypeConfig
}

// Reusable components
function ContentHeader({ content, config }: { content: BaseContentData; config: ContentTypeConfig }) {
  const { showMetadata, metadataItems = [], titleClassName } = config
  
  return (
    <section className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href={content.backLink}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 flex-shrink-0" />
          <span className="break-words">{content.backLabel}</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.badges && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {content.badges.map((badge, i) => (
                <Badge key={i} variant={badge.variant}>{badge.label}</Badge>
              ))}
            </div>
          )}
          
          <h1 className={titleClassName}>
            <span className="break-words">{content.title}</span>
            {content.subtitle && (
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text break-words">
                {' '}{content.subtitle}
              </span>
            )}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed break-words">
            {content.excerpt}
          </p>
          
          {showMetadata && (
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
              {metadataItems.includes('date') && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <time className="break-words">{content.date}</time>
                </div>
              )}
              {metadataItems.includes('readTime') && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="break-words">{content.readTime}</span>
                </div>
              )}
              {metadataItems.includes('author') && content.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 flex-shrink-0" />
                  <span className="break-words">{content.author}</span>
                </div>
              )}
              {metadataItems.includes('category') && (
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 break-words">{content.category}</span>
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
    <section className="px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none overflow-hidden"
          style={{
            /* Ensure prose content is mobile-friendly */
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto'
          }}
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800">
        {customActions ? (
          customActions
        ) : (
          <>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-sm">
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>Discuss</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-sm">
                  <Bookmark className="w-4 h-4 flex-shrink-0" />
                  <span>Save</span>
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-full transition-colors text-sm">
                <Share2 className="w-4 h-4 flex-shrink-0" />
                <span>Share</span>
              </button>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {content.tags.map(tag => (
                <span key={tag} className="text-sm text-gray-500 break-words">#{tag}</span>
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
      <article className="min-h-screen w-full overflow-hidden">
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
        titleClassName: 'text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6'
      }}
    />
  )
}

// For backwards compatibility
export type ArticleData = BaseContentData
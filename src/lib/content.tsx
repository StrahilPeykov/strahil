import { ReactNode } from 'react'
import type { ArticleData } from '../components/templates/ArticleTemplate'

// Content registry - this could be replaced with MDX files or a CMS
interface ContentEntry {
  slug: string
  type: 'blog' | 'note'
  metadata: Omit<ArticleData, 'content' | 'backLink' | 'backLabel'>
  content: () => ReactNode
}

// Add slug to ArticleData when fetching
export interface ArticleWithSlug extends ArticleData {
  slug: string
}

// Import all your article content components
const contentRegistry: ContentEntry[] = [
  // Blog posts
  {
    slug: 'ai-illiterate-programmers',
    type: 'blog',
    metadata: {
      title: 'Is AI Creating a Generation of',
      subtitle: 'Illiterate Programmers?',
      excerpt: 'The double-edged sword of AI coding assistants: How tools meant to enhance productivity might be undermining fundamental programming skills.',
      date: 'January 15, 2025',
      readTime: '12 min read',
      author: 'Strahil Peykov',
      tags: ['AI', 'Programming', 'Education', 'Technology'],
      category: 'Technology',
      badges: [
        { variant: 'warning' as const, label: 'Opinion' },
        { variant: 'purple' as const, label: 'Technology' }
      ]
    },
    content: () => {
      const Component = require('../content/blog/ai-illiterate-programmers').default
      return <Component />
    }
  },
  {
    slug: 'stop-killing-games',
    type: 'blog',
    metadata: {
      title: 'The Stop Killing Games Movement:',
      subtitle: 'A Developer\'s Perspective',
      excerpt: 'When publishers shut down game servers, they\'re not just ending a service—they\'re destroying digital culture. Here\'s why the movement matters.',
      date: 'January 18, 2025',
      readTime: '10 min read',
      author: 'Strahil Peykov',
      tags: ['Gaming', 'Digital Rights', 'Preservation', 'Technology'],
      category: 'Gaming',
      badges: [
        { variant: 'purple' as const, label: 'Gaming' },
        { variant: 'blue' as const, label: 'Digital Rights' },
        { variant: 'error' as const, label: 'Current Events' }
      ]
    },
    content: () => {
      const Component = require('../content/blog/stop-killing-games').default
      return <Component />
    }
  },
  
  // Notes
  {
    slug: 'humans-not-truth-seeking',
    type: 'note',
    metadata: {
      title: 'Humans are not',
      subtitle: 'Truth-Seeking Machines',
      excerpt: 'Why our brains are optimized for survival and social cohesion, not objective truth. Understanding the evolutionary basis of our cognitive biases.',
      date: 'January 12, 2025',
      readTime: '15 min read',
      tags: ['psychology', 'cognitive-science', 'philosophy'],
      category: 'Theory of Mind',
      badges: [
        { variant: 'blue' as const, label: 'Theory of Mind' },
        { variant: 'purple' as const, label: 'Psychology' },
        { variant: 'pink' as const, label: 'Philosophy' }
      ]
    },
    content: () => {
      const Component = require('../content/notes/humans-not-truth-seeking').default
      return <Component />
    }
  }
]

// Helper functions
export async function getAllBlogPosts(): Promise<ArticleWithSlug[]> {
  return contentRegistry
    .filter(entry => entry.type === 'blog')
    .map(entry => ({
      ...entry.metadata,
      slug: entry.slug,
      content: entry.content(),
      backLink: '/blog',
      backLabel: 'Back to articles'
    }))
}

export async function getBlogPost(slug: string): Promise<ArticleData | null> {
  const entry = contentRegistry.find(
    entry => entry.type === 'blog' && entry.slug === slug
  )
  
  if (!entry) return null
  
  return {
    ...entry.metadata,
    content: entry.content(),
    backLink: '/blog',
    backLabel: 'Back to articles'
  }
}

export async function getAllNotes(): Promise<ArticleWithSlug[]> {
  return contentRegistry
    .filter(entry => entry.type === 'note')
    .map(entry => ({
      ...entry.metadata,
      slug: entry.slug,
      content: entry.content(),
      backLink: '/notes',
      backLabel: 'Back to notes'
    }))
}

export async function getNote(slug: string): Promise<ArticleData | null> {
  const entry = contentRegistry.find(
    entry => entry.type === 'note' && entry.slug === slug
  )
  
  if (!entry) return null
  
  return {
    ...entry.metadata,
    content: entry.content(),
    backLink: '/notes',
    backLabel: 'Back to notes'
  }
}

// For listing pages
export interface ContentListItem {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  category: string
  featured?: boolean
  gradient?: string
}

// Add slug to ArticleData when fetching
export interface ArticleWithSlug extends ArticleData {
  slug: string
}

export async function getBlogListItems(): Promise<ContentListItem[]> {
  return contentRegistry
    .filter(entry => entry.type === 'blog')
    .map(entry => ({
      slug: entry.slug,
      title: entry.metadata.title + (entry.metadata.subtitle ? ' ' + entry.metadata.subtitle : ''),
      excerpt: entry.metadata.excerpt,
      date: entry.metadata.date,
      readTime: entry.metadata.readTime,
      tags: entry.metadata.tags,
      category: entry.metadata.category,
      featured: true, // You can add this to metadata
      gradient: 'from-blue-500 to-purple-500' // You can customize per post
    }))
}

export async function getNoteListItems(): Promise<ContentListItem[]> {
  return contentRegistry
    .filter(entry => entry.type === 'note')
    .map(entry => ({
      slug: entry.slug,
      title: entry.metadata.title + (entry.metadata.subtitle ? ' ' + entry.metadata.subtitle : ''),
      excerpt: entry.metadata.excerpt,
      date: entry.metadata.date,
      readTime: entry.metadata.readTime,
      tags: entry.metadata.tags,
      category: entry.metadata.category,
      featured: false,
      gradient: 'from-purple-500 to-pink-500'
    }))
}
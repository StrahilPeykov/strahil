import { ReactNode } from 'react'
import type { BaseContentData } from '../components/templates/ContentTemplate'
// Content registry types
type ContentType = 'blog' | 'note'

interface ContentEntry {
  slug: string
  type: ContentType
  metadata: Omit<BaseContentData, 'content' | 'backLink' | 'backLabel'>
  content: () => ReactNode
}

export interface ArticleWithSlug extends BaseContentData {
  slug: string
}

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

// Content type configurations
const CONTENT_CONFIG = {
  blog: {
    backLink: '/blog',
    backLabel: 'Back to articles',
    defaultFeatured: true,
    defaultGradient: 'from-blue-500 to-purple-500'
  },
  note: {
    backLink: '/notes',
    backLabel: 'Back to notes',
    defaultFeatured: false,
    defaultGradient: 'from-purple-500 to-pink-500'
  }
} as const

// Content registry
const contentRegistry: ContentEntry[] = [
  {
    slug: 'blame-game',
    type: 'blog',
    metadata: {
      title: 'The Blame Game:',
      subtitle: 'Big Bad Men and Our Quest for Simplicity',
      excerpt: 'Why conspiracy theories are so appealing and what they reveal about human nature. An exploration of our tendency to find simple explanations for complex problems.',
      date: 'September 12, 2023',
      readTime: '15 min read',
      author: 'Strahil Peykov',
      tags: ['Psychology', 'Society', 'Conspiracy Theories', 'Human Nature', 'Philosophy'],
      category: 'Philosophy',
      badges: [
        { variant: 'purple', label: 'Philosophy' },
        { variant: 'blue', label: 'Psychology' },
        { variant: 'warning', label: 'Analysis' }
      ]
    },
    content: () => {
      const Component = require('../content/blog/blame-game').default
      return <Component />
    }
  },
  {
    slug: 'ai-illiterate-programmers',
    type: 'blog',
    metadata: {
      title: 'Is AI Creating a Generation of',
      subtitle: 'Illiterate Programmers?',
      excerpt: 'The double-edged sword of AI coding assistants: How tools meant to enhance productivity might be undermining fundamental programming skills.',
      date: 'June 16, 2025',
      readTime: '12 min read',
      author: 'Strahil Peykov',
      tags: ['AI', 'Programming', 'Education', 'Technology'],
      category: 'Technology',
      badges: [
        { variant: 'warning', label: 'Opinion' },
        { variant: 'purple', label: 'Technology' }
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
      title: 'Stop Killing Games:',
      subtitle: 'Why Digital Ownership Rights Matter',
      excerpt: 'The European initiative fighting game publishers who destroy purchased products. From The Crew\'s demise to the Pirate Software controversy, here\'s what\'s really at stake.',
      date: 'June 27, 2025',
      readTime: '12 min read',
      author: 'Strahil Peykov',
      tags: ['Gaming', 'Digital Rights', 'Consumer Protection', 'EU Policy', 'Game Preservation'],
      category: 'Digital Rights',
      badges: [
        { variant: 'blue', label: 'Digital Rights' },
        { variant: 'purple', label: 'EU Policy' },
        { variant: 'warning', label: 'Analysis' }
      ]
    },
    content: () => {
      const Component = require('../content/blog/stop-killing-games').default
      return <Component />
    }
  },
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
        { variant: 'blue', label: 'Theory of Mind' },
        { variant: 'purple', label: 'Psychology' },
        { variant: 'pink', label: 'Philosophy' }
      ]
    },
    content: () => {
      const Component = require('../content/notes/humans-not-truth-seeking').default
      return <Component />
    }
  }
]

// Utility functions
function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return items.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

function getContentByType(type: ContentType): ContentEntry[] {
  return contentRegistry.filter(entry => entry.type === type)
}

function mapToArticleData(entry: ContentEntry): BaseContentData {
  const config = CONTENT_CONFIG[entry.type]
  return {
    ...entry.metadata,
    content: entry.content(),
    backLink: config.backLink,
    backLabel: config.backLabel
  }
}

function mapToListItem(entry: ContentEntry): ContentListItem {
  const config = CONTENT_CONFIG[entry.type]
  return {
    slug: entry.slug,
    title: entry.metadata.title + (entry.metadata.subtitle ? ' ' + entry.metadata.subtitle : ''),
    excerpt: entry.metadata.excerpt,
    date: entry.metadata.date,
    readTime: entry.metadata.readTime,
    tags: entry.metadata.tags,
    category: entry.metadata.category,
    featured: config.defaultFeatured,
    gradient: config.defaultGradient
  }
}

// Generic content retrieval functions
async function getAllContentByType(type: ContentType): Promise<ArticleWithSlug[]> {
  const entries = getContentByType(type)
  const articles = entries.map(entry => ({
    ...mapToArticleData(entry),
    slug: entry.slug
  }))
  return sortByDateDesc(articles)
}

async function getContentBySlug(type: ContentType, slug: string): Promise<BaseContentData | null> {
  const entry = contentRegistry.find(
    entry => entry.type === type && entry.slug === slug
  )
  
  if (!entry) return null
  return mapToArticleData(entry)
}

async function getContentListByType(type: ContentType): Promise<ContentListItem[]> {
  const entries = getContentByType(type)
  const listItems = entries.map(mapToListItem)
  return sortByDateDesc(listItems)
}

// Public API - specific functions for each content type
export const getAllBlogPosts = () => getAllContentByType('blog')
export const getBlogPost = (slug: string) => getContentBySlug('blog', slug)
export const getBlogListItems = () => getContentListByType('blog')

export const getAllNotes = () => getAllContentByType('note')
export const getNote = (slug: string) => getContentBySlug('note', slug)
export const getNoteListItems = () => getContentListByType('note')

// Backwards compatibility types
export type ArticleData = BaseContentData
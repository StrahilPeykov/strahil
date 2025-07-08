// Content creation utilities and factory functions

import { ReactNode } from 'react'
import { BaseContentData } from '../components/templates/ContentTemplate'

// Content builder for easier content creation
export class ContentBuilder {
  private data: Partial<BaseContentData> = {}

  static create() {
    return new ContentBuilder()
  }

  title(title: string, subtitle?: string) {
    this.data.title = title
    if (subtitle) this.data.subtitle = subtitle
    return this
  }

  excerpt(excerpt: string) {
    this.data.excerpt = excerpt
    return this
  }

  date(date: string) {
    this.data.date = date
    return this
  }

  readTime(readTime: string) {
    this.data.readTime = readTime
    return this
  }

  author(author: string) {
    this.data.author = author
    return this
  }

  category(category: string) {
    this.data.category = category
    return this
  }

  tags(...tags: string[]) {
    this.data.tags = tags
    return this
  }

  badges(...badges: Array<{ variant: 'blue' | 'purple' | 'pink' | 'success' | 'warning' | 'error', label: string }>) {
    this.data.badges = badges
    return this
  }

  content(content: ReactNode) {
    this.data.content = content
    return this
  }

  navigation(backLink: string, backLabel: string) {
    this.data.backLink = backLink
    this.data.backLabel = backLabel
    return this
  }

  build(): BaseContentData {
    if (!this.data.title || !this.data.excerpt || !this.data.date || 
        !this.data.readTime || !this.data.tags || !this.data.category ||
        !this.data.content || !this.data.backLink || !this.data.backLabel) {
      throw new Error('Missing required content fields')
    }
    return this.data as BaseContentData
  }
}

// Helper functions for common operations
export function createBlogPost(
  slug: string,
  title: string,
  excerpt: string,
  date: string,
  contentComponent: () => ReactNode,
  options: {
    subtitle?: string
    author?: string
    readTime?: string
    tags?: string[]
    category?: string
    badges?: Array<{ variant: 'blue' | 'purple' | 'pink' | 'success' | 'warning' | 'error', label: string }>
  } = {}
): BaseContentData {
  return ContentBuilder
    .create()
    .title(title, options.subtitle)
    .excerpt(excerpt)
    .date(date)
    .readTime(options.readTime || '5 min read')
    .author(options.author || 'Strahil Peykov')
    .category(options.category || 'General')
    .tags(...(options.tags || []))
    .badges(...(options.badges || []))
    .content(contentComponent())
    .navigation('/blog', 'Back to articles')
    .build()
}

export function createNote(
  slug: string,
  title: string,
  excerpt: string,
  date: string,
  contentComponent: () => ReactNode,
  options: {
    subtitle?: string
    readTime?: string
    tags?: string[]
    category?: string
    badges?: Array<{ variant: 'blue' | 'purple' | 'pink' | 'success' | 'warning' | 'error', label: string }>
  } = {}
): BaseContentData {
  return ContentBuilder
    .create()
    .title(title, options.subtitle)
    .excerpt(excerpt)
    .date(date)
    .readTime(options.readTime || '3 min read')
    .category(options.category || 'Thoughts')
    .tags(...(options.tags || []))
    .badges(...(options.badges || []))
    .content(contentComponent())
    .navigation('/notes', 'Back to notes')
    .build()
}

// Content validation utilities
export function validateContent(content: Partial<BaseContentData>): string[] {
  const errors: string[] = []
  const required = ['title', 'excerpt', 'date', 'readTime', 'tags', 'category', 'content', 'backLink', 'backLabel']
  
  required.forEach(field => {
    if (!content[field as keyof BaseContentData]) {
      errors.push(`Missing required field: ${field}`)
    }
  })

  if (content.tags && content.tags.length === 0) {
    errors.push('At least one tag is required')
  }

  if (content.date) {
    const date = new Date(content.date)
    if (isNaN(date.getTime())) {
      errors.push('Invalid date format')
    }
  }

  return errors
}
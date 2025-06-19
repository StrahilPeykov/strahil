export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}

export interface PageProps {
  params: { [key: string]: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

// For contentlayer integration
export interface ContentMeta {
  readingTime: {
    text: string
    minutes: number
    words: number
  }
  wordCount: number
  slug: string
  url: string
}
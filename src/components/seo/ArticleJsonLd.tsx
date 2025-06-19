import { generateArticleSchema } from '../../lib/seo-utils'

interface ArticleJsonLdProps {
  title: string
  description: string
  publishedDate: string
  modifiedDate?: string
  slug: string
  tags?: string[]
  readingTime?: { text: string }
}

export function ArticleJsonLd(props: ArticleJsonLdProps) {
  const schema = generateArticleSchema(props)

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
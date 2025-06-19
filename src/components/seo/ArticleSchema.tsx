interface ArticleSchemaProps {
  title: string
  description: string
  publishedDate: string
  modifiedDate?: string
  slug: string
}

export function ArticleSchema({ title, description, publishedDate, modifiedDate, slug }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Strahil Peykov",
      "url": "https://strahilpeykov.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Strahil Peykov",
      "url": "https://strahilpeykov.com"
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "url": `https://strahilpeykov.com/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://strahilpeykov.com/${slug}`
    }
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
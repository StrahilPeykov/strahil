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
      "url": "https://strahil.dev"
    },
    "publisher": {
      "@type": "Person",
      "name": "Strahil Peykov",
      "url": "https://strahil.dev"
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "url": `https://strahil.dev/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://strahil.dev/${slug}`
    }
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
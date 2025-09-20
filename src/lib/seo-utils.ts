export function generateArticleSchema(article: {
  title: string
  description: string
  publishedDate: string
  modifiedDate?: string
  slug: string
  tags?: string[]
  readingTime?: { text: string }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": "Strahil Peykov",
      "url": "https://strahil.dev",
      "jobTitle": "Full-Stack Developer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amsterdam",
        "addressCountry": "Netherlands"
      }
    },
    "publisher": {
      "@type": "Person",
      "name": "Strahil Peykov",
      "url": "https://strahil.dev"
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "url": `https://strahil.dev/${article.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://strahil.dev/${article.slug}`
    },
    "keywords": article.tags?.join(', '),
    "timeRequired": article.readingTime?.text,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "creativeWorkStatus": "Published"
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}
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
      "url": "https://strahilpeykov.com",
      "jobTitle": "Full-Stack Developer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Eindhoven",
        "addressCountry": "Netherlands"
      }
    },
    "publisher": {
      "@type": "Person",
      "name": "Strahil Peykov",
      "url": "https://strahilpeykov.com"
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "url": `https://strahilpeykov.com/${article.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://strahilpeykov.com/${article.slug}`
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
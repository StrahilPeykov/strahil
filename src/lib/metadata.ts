import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface GenerateMetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  canonicalUrl?: string
}

export function generateMetadata({
  title,
  description = SITE_CONFIG.description,
  keywords = [],
  ogImage = '/og-image.png',
  noIndex = false,
  canonicalUrl
}: GenerateMetadataProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: SITE_CONFIG.author.name }],
    creator: SITE_CONFIG.author.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl || SITE_CONFIG.url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl || SITE_CONFIG.url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: SITE_CONFIG.author.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/_next/', '/api/private/'],
        crawlDelay: 0, // No delay for faster indexing
      },
      {
        userAgent: 'Googlebot',
        allow: '/', // Allow everything for Google
        disallow: ['/admin/', '/api/private/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/', // Allow Google to index all images
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'], // Block AI crawlers to protect content
      },
    ],
    sitemap: [
      'https://strahil.dev/sitemap.xml',
      'https://strahil.dev/sitemap-strahil.xml', // Special sitemap for Strahil-focused pages
    ],
    host: 'https://strahil.dev',
  }
}
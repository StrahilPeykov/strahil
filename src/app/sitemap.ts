import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://strahil.dev'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/notes',
    '/tools',
    '/play',
    '/contact',
    '/cv',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))
}

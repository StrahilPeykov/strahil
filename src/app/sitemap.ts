import { MetadataRoute } from 'next'
import { getAllBlogPosts, getAllNotes } from '../lib/content'
import { getAllProjects } from '../lib/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://strahil.dev'
  const lastModified = new Date()

  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/notes',
    '/tools',
    '/tools/obsidian-downloader',
    '/tools/youtube-transcript-search',
    '/play',
    '/contact',
    '/cv',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  const [blogPosts, notes, projects] = await Promise.all([
    getAllBlogPosts(),
    getAllNotes(),
    getAllProjects(),
  ])

  const dynamicRoutes = [
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...notes.map((note) => `/notes/${note.slug}`),
    ...projects.map((project) => `/projects/${project.slug}`),
  ]

  const routes = [...new Set([...staticRoutes, ...dynamicRoutes])]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))
}

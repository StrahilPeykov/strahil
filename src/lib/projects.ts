import { ReactNode } from 'react'
import type { ProjectData } from '../components/templates/ProjectTemplate'
import type { LucideIcon } from 'lucide-react'

// Project registry
interface ProjectEntry {
  slug: string
  data: ProjectData
}

// Add slug to ProjectData when fetching
export interface ProjectWithSlug extends ProjectData {
  slug: string
}

// Import project content components
const projectRegistry: ProjectEntry[] = [
  {
    slug: 'carboninsight',
    data: require('../content/projects/carboninsight').default
  },
  {
    slug: 'stayhub',
    data: require('../content/projects/stayhub').default
  }
]

// Helper functions
export async function getAllProjects(): Promise<ProjectWithSlug[]> {
  return projectRegistry.map(entry => ({
    ...entry.data,
    slug: entry.slug
  }))
}

export async function getProject(slug: string): Promise<ProjectData | null> {
  const entry = projectRegistry.find(entry => entry.slug === slug)
  
  if (!entry) return null
  
  return entry.data
}

// For listing pages
export interface ProjectListItem {
  slug: string
  title: string
  description: string
  tags: string[]
  gradient: string
  featured: boolean
  client?: string
  live?: string
  github?: string
}

export async function getProjectListItems(): Promise<ProjectListItem[]> {
  return projectRegistry.map(entry => ({
    slug: entry.slug,
    title: entry.data.title,
    description: entry.data.description,
    tags: entry.data.techStack.categories.flatMap(cat => cat.technologies).slice(0, 4),
    gradient: 'from-blue-500 to-purple-500', // You can customize per project
    featured: true, // You can add this to the data
    client: entry.data.details.client,
    live: entry.data.links?.live,
    github: entry.data.links?.github
  }))
}
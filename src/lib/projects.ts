import { ReactNode } from 'react'
import type { ProjectData } from '../components/templates/ProjectTemplate'

// Project registry
interface ProjectEntry {
  slug: string
  metadata: Partial<ProjectData>
  content: () => ProjectData
}

// Add slug to ProjectData when fetching
export interface ProjectWithSlug extends ProjectData {
  slug: string
}

// Import all project content components
const projectRegistry: ProjectEntry[] = [
  {
    slug: 'carboninsight',
    metadata: {
      title: 'CarbonInsight',
      description: 'Product Carbon Footprint & Digital Product Passport platform for manufacturing SMEs',
    },
    content: () => {
      const Component = require('../content/projects/carboninsight').default
      return Component
    }
  },
  {
    slug: 'stayhub',
    metadata: {
      title: 'StayHub',
      description: 'Modern hospitality management platform with microservices architecture and A/B testing',
    },
    content: () => {
      const Component = require('../content/projects/stayhub').default
      return Component
    }
  },
  {
    slug: 'rotorem',
    metadata: {
      title: 'RotoRem',
      description: 'High-performance bilingual marketing website for home appliance repair business',
    },
    content: () => {
      const Component = require('../content/projects/rotorem').default
      return Component
    }
  },
  {
    slug: 'safe-exam-browser',
    metadata: {
      title: 'Safe Exam Browser Security Research',
      description: 'Penetration testing of lockdown browsers with responsible vulnerability disclosure',
    },
    content: () => {
      const Component = require('../content/projects/safe-exam-browser').default
      return Component
    }
  },
  {
    slug: 'dbt-score',
    metadata: {
      title: 'dbt-score Open Source Contribution',
      description: 'Added seed resource support to dbt metadata quality linter',
    },
    content: () => {
      const Component = require('../content/projects/dbt-score').default
      return Component
    }
  },
  {
    slug: 'hydrogen-safety',
    metadata: {
      title: 'Hydrogen Safety System Business',
      description: 'Business development for innovative hydrogen leakage detection technology',
    },
    content: () => {
      const Component = require('../content/projects/hydrogen-safety').default
      return Component
    }
  }
]

// Helper functions
export async function getAllProjects(): Promise<ProjectWithSlug[]> {
  return projectRegistry.map(entry => ({
    ...entry.content(),
    slug: entry.slug
  }))
}

export async function getProject(slug: string): Promise<ProjectData | null> {
  const entry = projectRegistry.find(entry => entry.slug === slug)
  
  if (!entry) return null
  
  return entry.content()
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
  return projectRegistry.map(entry => {
    const fullData = entry.content()
    return {
      slug: entry.slug,
      title: fullData.title,
      description: fullData.description,
      tags: fullData.techStack.categories.flatMap(cat => cat.technologies).slice(0, 4),
      gradient: getProjectGradient(entry.slug),
      featured: isProjectFeatured(entry.slug),
      client: fullData.details.client,
      live: fullData.links?.live,
      github: fullData.links?.github
    }
  })
}

// Helper functions for project metadata
function getProjectGradient(slug: string): string {
  const gradients = {
    carboninsight: 'from-green-500 to-blue-500',
    stayhub: 'from-blue-500 to-indigo-500',
    rotorem: 'from-orange-500 to-red-500',
    'safe-exam-browser': 'from-red-500 to-purple-500',
    'dbt-score': 'from-green-500 to-teal-500',
    'hydrogen-safety': 'from-blue-500 to-green-500'
  }
  return gradients[slug as keyof typeof gradients] || 'from-blue-500 to-purple-500'
}

function isProjectFeatured(slug: string): boolean {
  const featured = ['carboninsight', 'stayhub', 'rotorem']
  return featured.includes(slug)
}
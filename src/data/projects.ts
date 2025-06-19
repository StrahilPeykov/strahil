export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  gradient: string
  featured: boolean
  client?: string
  role?: string
  duration?: string
  image?: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics Platform',
    description: 'Real-time data visualization with ML insights for enterprise clients',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
    gradient: 'from-blue-500/10 to-purple-500/10',
    featured: true,
    url: '/work/ai-analytics'
  },
  {
    id: 'defi-dashboard',
    title: 'Decentralized Finance Dashboard',
    description: 'Web3 portfolio tracker with cross-chain compatibility',
    technologies: ['Next.js', 'Ethers.js', 'Solidity', 'GraphQL'],
    gradient: 'from-purple-500/10 to-pink-500/10',
    featured: true,
    url: '/work/defi-dashboard'
  }
]

export const featuredProjects = projects.filter(project => project.featured)
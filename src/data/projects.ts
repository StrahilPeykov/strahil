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
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    id: 'carboninsight',
    title: 'CarbonInsight',
    description: 'Product Carbon Footprint & Digital Product Passport platform for manufacturing SMEs',
    technologies: ['Django', 'Next.js', 'PostgreSQL', 'TypeScript'],
    gradient: 'from-green-500/10 to-blue-500/10',
    featured: true,
    role: 'Full-Stack Developer & Project Lead',
    duration: 'Apr 2025 - Jul 2025',
    client: 'EU AI REDGIO 5.0',
    url: '/projects/carboninsight',
    live: 'https://carboninsight.strahil.dev'
  },
  {
    id: 'stayhub',
    title: 'StayHub',
    description: 'Modern hospitality management platform with microservices architecture and A/B testing',
    technologies: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Kubernetes'],
    gradient: 'from-blue-500/10 to-indigo-500/10',
    featured: true,
    role: 'Full-Stack Developer & Architect',
    duration: 'Jun 2025 - Present',
    url: '/projects/stayhub',
    github: 'https://github.com/StrahilPeykov/stayhub',
    live: 'https://stayhub.strahil.dev'
  },
  {
    id: 'rotorem',
    title: 'RotoRem',
    description: 'High-performance bilingual marketing website for home appliance repair business',
    technologies: ['Astro', 'Tailwind CSS', 'Netlify', 'i18n'],
    gradient: 'from-orange-500/10 to-red-500/10',
    featured: false,
    role: 'Full-Stack Developer & Designer',
    duration: '2024',
    client: 'Freelance Project',
    url: '/projects/rotorem',
    live: 'https://www.rotorem.bg/'
  },
  {
    id: 'safe-exam-browser',
    title: 'Safe Exam Browser Security Research',
    description: 'Penetration testing of lockdown browsers with responsible vulnerability disclosure',
    technologies: ['C++', 'C#', '.NET', 'Reverse Engineering'],
    gradient: 'from-red-500/10 to-purple-500/10',
    featured: false,
    role: 'Security Researcher',
    duration: 'Apr 2023 - Jun 2023',
    url: '/projects/safe-exam-browser'
  },
  {
    id: 'dbt-score-contribution',
    title: 'dbt-score Open Source',
    description: 'Added seed resource support to Picnic\'s dbt metadata linter',
    technologies: ['Python', 'dbt', 'Open Source'],
    gradient: 'from-green-500/10 to-teal-500/10',
    featured: false,
    role: 'Open Source Contributor',
    duration: '2024',
    github: 'https://github.com/PicnicSupermarket/dbt-score/pull/110'
  },
  {
    id: 'hydrogen-safety-system',
    title: 'Hydrogen Safety System',
    description: 'Business development for innovative hydrogen leakage detection technology',
    technologies: ['Market Research', 'Business Model Canvas', 'Financial Modeling'],
    gradient: 'from-blue-500/10 to-green-500/10',
    featured: false,
    role: 'Business Developer',
    duration: 'Nov 2024 - Apr 2025',
    client: 'TU/e Entrepreneurship Course'
  }
]

export const featuredProjects = projects.filter(project => project.featured)
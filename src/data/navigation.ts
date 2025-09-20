import { Briefcase, PenTool, User, Mail, Wrench, GraduationCap, Heart, Gamepad2, Brain } from 'lucide-react'
import type { NavigationItem } from '../types/navigation'

export const allNavigationItems: NavigationItem[] = [
  // Core pages - these go in main nav
  {
    id: 'about',
    href: '/about',
    label: 'About',
    icon: User,
    description: 'Who I am',
    color: '#60a5fa',
    gradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    id: 'projects',
    href: '/projects',
    label: 'Projects',
    icon: Briefcase,
    description: 'Portfolio & projects',
    color: '#c084fc',
    gradient: 'from-purple-500/10 to-purple-600/10'
  },
  {
    id: 'blog',
    href: '/blog',
    label: 'Blog',
    icon: PenTool,
    description: 'Articles & thoughts',
    color: '#f472b6',
    gradient: 'from-pink-500/10 to-pink-600/10'
  },
  {
    id: 'tools',
    href: '/tools',
    label: 'Tools',
    icon: Wrench,
    description: 'Things I built',
    color: '#22c55e',
    gradient: 'from-green-500/10 to-teal-500/10'
  },
  {
    id: 'contact',
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    description: 'Get in touch',
    color: '#f59e0b',
    gradient: 'from-yellow-500/10 to-orange-500/10'
  },
  
  // Secondary pages - these go in "More" dropdown
  {
    id: 'notes',
    href: '/notes',
    label: 'Notes',
    icon: Brain,
    description: 'Ideas & observations',
    color: '#8b5cf6',
    gradient: 'from-violet-500/10 to-purple-500/10'
  },
  {
    id: 'courses',
    href: '/courses',
    label: 'Learn',
    icon: GraduationCap,
    description: 'Courses & resources',
    color: '#8b5cf6',
    gradient: 'from-violet-500/10 to-purple-500/10',
    hidden: true
  },
  {
    id: 'play',
    href: '/play',
    label: 'Play',
    icon: Gamepad2,
    description: 'Experiments & fun',
    color: '#ec4899',
    gradient: 'from-pink-500/10 to-rose-500/10'
  },
  {
    id: 'health',
    href: '/health',
    label: 'Health',
    icon: Heart,
    description: 'Fitness & wellness',
    color: '#ef4444',
    gradient: 'from-red-500/10 to-pink-500/10',
    hidden: true // Temporarily hidden
  }
]

// Primary navigation for header - the most important items
export const primaryNavigation = ['about', 'projects', 'blog', 'tools', 'contact']

// For backwards compatibility
export const headerNavItems = primaryNavigation
export const navigationSections = allNavigationItems
export const additionalPages = []

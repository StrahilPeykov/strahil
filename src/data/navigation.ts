import { Briefcase, Lightbulb, BookOpen, Camera, Gamepad2, FileText, User, Mail, Wrench, GraduationCap, Dumbbell } from 'lucide-react'
import type { NavigationItem } from '../types/navigation'

export const navigationSections: NavigationItem[] = [
  {
    id: 'about',
    href: '/about',
    label: 'About',
    icon: User,
    description: 'Get to know me',
    color: '#22c55e',
    gradient: 'from-green-500/10 to-teal-500/10'
  },
  {
    id: 'work',
    href: '/work',
    label: 'Work',
    icon: Briefcase,
    description: 'Portfolio & Case Studies',
    color: '#60a5fa',
    gradient: 'from-blue-500/10 to-blue-600/10'
  },
  {
    id: 'ideas',
    href: '/ideas',
    label: 'Ideas',
    icon: Lightbulb,
    description: 'Thoughts & Writing',
    color: '#c084fc',
    gradient: 'from-purple-500/10 to-purple-600/10'
  },
  {
    id: 'library',
    href: '/library',
    label: 'Library',
    icon: BookOpen,
    description: 'Resources & Guides',
    color: '#f472b6',
    gradient: 'from-pink-500/10 to-pink-600/10'
  },
  {
    id: 'tools',
    href: '/tools',
    label: 'Tools',
    icon: Wrench,
    description: 'Developer Tools',
    color: '#60a5fa',
    gradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    id: 'media',
    href: '/media',
    label: 'Media',
    icon: Camera,
    description: 'Visual Content',
    color: '#c084fc',
    gradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    id: 'cv',
    href: '/cv',
    label: 'CV',
    icon: FileText,
    description: 'Resume & Experience',
    color: '#f472b6',
    gradient: 'from-pink-500/10 to-orange-500/10'
  },
  {
    id: 'contact',
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    description: 'Get in touch',
    color: '#f59e0b',
    gradient: 'from-yellow-500/10 to-orange-500/10'
  }
]

// Additional pages not in main grid
export const additionalPages: NavigationItem[] = [
  {
    id: 'courses',
    href: '/courses',
    label: 'Courses',
    icon: GraduationCap,
    description: 'Learn & Grow',
    color: '#8b5cf6',
    gradient: 'from-violet-500/10 to-purple-500/10'
  },
  {
    id: 'play',
    href: '/play',
    label: 'Play',
    icon: Gamepad2,
    description: 'Experiments & Fun',
    color: '#ec4899',
    gradient: 'from-pink-500/10 to-rose-500/10'
  },
  {
    id: 'fitness',
    href: '/fitness',
    label: 'Fitness',
    icon: Dumbbell,
    description: 'Training journey',
    color: '#ef4444',
    gradient: 'from-red-500/10 to-pink-500/10'
  }
]

// All navigation items
export const allNavigationItems = [...navigationSections, ...additionalPages]

// Simplified nav items for header (fewer items for cleaner look)
export const headerNavItems = ['about', 'work', 'ideas', 'contact']
import { Briefcase, Lightbulb, BookOpen, Camera, Gamepad2, FileText } from 'lucide-react'
import type { NavigationItem } from '../types/navigation'

export const navigationSections: NavigationItem[] = [
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
    description: 'Knowledge Base',
    color: '#f472b6',
    gradient: 'from-pink-500/10 to-pink-600/10'
  },
  {
    id: 'media',
    href: '/media',
    label: 'Media',
    icon: Camera,
    description: 'Visual Content',
    color: '#60a5fa',
    gradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    id: 'play',
    href: '/play',
    label: 'Play',
    icon: Gamepad2,
    description: 'Experiments & Fun',
    color: '#c084fc',
    gradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    id: 'cv',
    href: '/cv',
    label: 'CV',
    icon: FileText,
    description: 'Resume & Experience',
    color: '#60a5fa',
    gradient: 'from-blue-500/10 to-purple-500/10'
  }
]
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  id: string
  href: string
  label: string
  icon: LucideIcon
  description: string
  color: string
  gradient: string
  hidden?: boolean // Optional property to hide items temporarily
}
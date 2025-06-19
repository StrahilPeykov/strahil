import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  id: string
  href: string
  label: string
  icon: LucideIcon // More specific typing for Lucide icons
  description: string
  color: string
  gradient: string
}
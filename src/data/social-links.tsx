import React from 'react'
import { Mail, Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
  href: string
  label: string
  icon: LucideIcon | React.ComponentType<{ className?: string; size?: number }>
  external?: boolean
}

// Custom icon components with proper React typing
export const TikTokIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className, 
  size = 20 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export const LetterboxdIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className, 
  size = 20 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M6 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M18 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0" />
  </svg>
)

export const socialLinks: SocialLink[] = [
  { href: "mailto:strahil.peykov@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/StrahilPeykov", icon: Github, label: "GitHub", external: true },
  { href: "https://linkedin.com/in/strahil-peykov", icon: Linkedin, label: "LinkedIn", external: true },
  { href: "https://instagram.com/strahil.peykov", icon: Instagram, label: "Instagram", external: true },
  { href: "https://tiktok.com/@strahil.peykov", icon: TikTokIcon, label: "TikTok", external: true },
  { href: "https://x.com/WerbenHS", icon: Twitter, label: "X", external: true },
  { href: "https://letterboxd.com/strahil_peykov", icon: LetterboxdIcon, label: "Letterboxd", external: true },
]
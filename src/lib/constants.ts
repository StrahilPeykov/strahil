export const SITE_CONFIG = {
  name: 'Strahil Peykov',
  title: 'Full-Stack Developer & Digital Creator',
  description: 'Personal portfolio and digital garden of Strahil Peykov. Exploring code, design, and everything in between.',
  url: 'https://strahil.dev',
  author: {
    name: 'Strahil Peykov',
    email: 'strahil.peykov@gmail.com',
    twitter: '@strahilpeykov',
    github: 'StrahilPeykov',
  },
  location: {
    city: 'Amsterdam',
    country: 'Netherlands',
    timezone: 'Europe/Amsterdam'
  }
} as const

export const COLORS = {
  cosmic: {
    blue: '#60a5fa',
    purple: '#c084fc',
    pink: '#f472b6',
  },
  gradients: {
    blueToMidnight: 'from-blue-500/10 to-midnight',
    purpleToPink: 'from-purple-500/10 to-pink-500/10',
    cosmicFlow: 'from-blue-400 via-purple-400 to-pink-400',
    cardGlow: 'from-blue-500/10 via-purple-500/10 to-pink-500/10',
  },
  semantic: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  }
} as const

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  extraSlow: 1.2,
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const SPACING = {
  section: 'py-32',
  container: 'max-w-7xl mx-auto px-6',
  card: 'p-6',
} as const
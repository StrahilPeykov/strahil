'use client'

import * as React from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(
  undefined
)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'midnight-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark'
    try {
      const stored = window.localStorage.getItem(storageKey) as Theme | null
      const pref = stored ?? defaultTheme
      if (pref === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      return pref
    } catch {
      return 'dark'
    }
  })

  // Initialize theme from storage or system on mount
  React.useEffect(() => {
    const root = window.document.documentElement
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const stored = window.localStorage.getItem(storageKey) as Theme | null
    const initial = (stored ?? defaultTheme) as Theme

    const apply = (nextTheme: Theme) => {
      root.classList.remove('light', 'dark')
      if (nextTheme === 'system') {
        const sys = mql.matches ? 'dark' : 'light'
        root.classList.add(sys)
        setResolvedTheme(sys)
      } else {
        root.classList.add(nextTheme)
        setResolvedTheme(nextTheme)
      }
    }

    setThemeState(initial)
    apply(initial)

    // Update on system change if using system theme
    const onChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const sys = e.matches ? 'dark' : 'light'
        root.classList.remove('light', 'dark')
        root.classList.add(sys)
        setResolvedTheme(sys)
      }
    }
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Apply classes and persist when theme changes
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')
    if (theme === 'system') {
      const sys = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(sys)
      setResolvedTheme(sys)
      try {
        window.localStorage.removeItem(storageKey)
      } catch {}
    } else {
      root.classList.add(theme)
      setResolvedTheme(theme)
      try {
        window.localStorage.setItem(storageKey, theme)
      } catch {}
    }
  }, [theme, storageKey])

  const value: ThemeProviderState = {
    theme,
    setTheme: (t: Theme) => setThemeState(t),
    resolvedTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')
  return context
}

// Theme toggle component
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isLight = resolvedTheme === 'light'

  const onToggle = () => {
    setTheme(isLight ? 'dark' : 'light')
  }

  return (
    <button
      onClick={onToggle}
      className="relative w-12 h-6 bg-midnight-light rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Toggle theme"
      title={isLight ? 'Switch to Dark' : 'Switch to Light'}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-electric rounded-full transition-transform duration-300 ${
          isLight ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <span className="sr-only">{isLight ? 'Light' : 'Dark'} mode</span>
      </span>
    </button>
  )
}

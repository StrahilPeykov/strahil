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
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(
  undefined
)

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'midnight-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
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
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-12 h-6 bg-midnight-light rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-electric rounded-full transition-transform duration-300 ${
          theme === 'light' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <span className="sr-only">{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
      </span>
    </button>
  )
}
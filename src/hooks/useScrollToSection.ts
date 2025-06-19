import { useCallback } from 'react'

export function useScrollToSection() {
  const scrollToExplore = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }, [])

  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return { scrollToExplore, scrollToSection }
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import type { NavigationItem } from '../../../types/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: NavigationItem[]
  currentPath: string
}

export function MobileMenu({ isOpen, onClose, items, currentPath }: MobileMenuProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Check if a nav item is active
  const isActiveItem = (href: string) => {
    if (href === '/' && currentPath === '/') return true
    if (href !== '/' && currentPath.startsWith(href)) return true
    return false
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : '100%'
      }}
      transition={{ type: 'tween', duration: 0.3 }}
      className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
      />
      
      {/* Menu panel - Fixed positioning with proper scroll container */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-bg/95 backdrop-blur-md border-l border-outline flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 mt-16 flex-shrink-0 border-b border-outline">
          <h2 className="text-lg font-display font-semibold text-white">Navigation</h2>
          <div className="text-sm text-white/50">{items.length} pages</div>
        </div>

        {/* Scrollable Navigation Container */}
        <nav 
          className="flex-1 overflow-y-auto overflow-x-hidden p-6 pb-20" 
          role="navigation"
          style={{
            /* Ensure smooth scrolling on iOS */
            WebkitOverflowScrolling: 'touch',
            /* Hide scrollbar but keep functionality */
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(147, 51, 234, 0.3) transparent'
          }}
        >
          <div className="space-y-2">
            {items.map((item, index) => {
              const Icon = item.icon
              const isActive = isActiveItem(item.href)
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`group flex items-center gap-4 px-4 py-4 rounded-xl transition-all relative overflow-hidden border ${
                      isActive
                        ? 'text-white bg-glow/5 border-glow/40 shadow-glow'
                        : 'text-white/70 hover:text-white hover:bg-bg-soft/60 border-outline'
                    }`}
                    aria-label={`Navigate to ${item.label} - ${item.description}`}
                  >
                    {/* Subtle hover layer */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isActive ? '' : 'bg-bg-soft/40'
                    }`} />
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                      isActive
                        ? 'bg-glow/10 border border-glow/40'
                        : 'bg-bg-soft/70 border border-outline group-hover:border-glow/30'
                    }`}>
                      <Icon 
                        size={18} 
                        className={`transition-colors ${
                          isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                        }`} 
                      />
                    </div>
                    
                    {/* Content - with proper text wrapping */}
                    <div className="flex-1 relative z-10 min-w-0">
                      <div className={`font-medium transition-colors truncate ${
                        isActive ? 'text-white' : 'group-hover:text-white'
                      }`}>
                        {item.label}
                      </div>
                      <div className={`text-xs transition-colors break-words ${
                        isActive ? 'text-white/70' : 'text-white/50 group-hover:text-white/70'
                      }`}>
                        {item.description}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveTab"
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-glow rounded-l-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </nav>

        {/* Footer - Fixed at bottom */}
        <div className="p-6 border-t border-outline flex-shrink-0">
          <div className="text-center">
            <div className="text-xs text-white/60">
              Currently on: <span className="text-white font-medium">
                {items.find(item => isActiveItem(item.href))?.label || 'Home'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

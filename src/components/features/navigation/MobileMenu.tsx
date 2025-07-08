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
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
      />
      
      {/* Menu panel */}
      <div className="absolute right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-purple-500/20 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-16">
          <h2 className="text-lg font-display font-semibold text-white">Navigation</h2>
          <div className="text-sm text-gray-500">{items.length} pages</div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2" role="navigation">
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
                  className={`group flex items-center gap-4 px-4 py-4 rounded-xl transition-all relative overflow-hidden ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30'
                      : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/10'
                  }`}
                  aria-label={`Navigate to ${item.label} - ${item.description}`}
                >
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isActive ? '' : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                  }`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-purple-500/20 border border-purple-500/30'
                      : 'bg-slate-800/50 border border-slate-700/50 group-hover:border-purple-500/30'
                  }`}>
                    <Icon 
                      size={18} 
                      className={`transition-colors ${
                        isActive ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400'
                      }`} 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <div className={`font-medium transition-colors ${
                      isActive ? 'text-white' : 'group-hover:text-white'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-xs transition-colors ${
                      isActive ? 'text-purple-300' : 'text-gray-500 group-hover:text-gray-400'
                    }`}>
                      {item.description}
                    </div>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-l-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-center">
            <div className="text-xs text-gray-600">
              Currently on: <span className="text-purple-400 font-medium">
                {items.find(item => isActiveItem(item.href))?.label || 'Home'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
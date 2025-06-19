'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import type { NavigationItem } from '../../../types/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: NavigationItem[]
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
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
      <div className="absolute right-0 top-0 h-full w-64 bg-slate-900/90 backdrop-blur-md border-l border-purple-500/20 p-6">
        <nav className="flex flex-col gap-2 mt-20" role="navigation">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
                aria-label={`Navigate to ${item.label} - ${item.description}`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400">
                    {item.description}
                  </span>
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.div>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import type { NavigationItem } from '../../../types/navigation'

interface DesktopMegaMenuProps {
  items: NavigationItem[]
  primaryIds: string[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export function DesktopMegaMenu({ items, primaryIds, isOpen, onToggle, onClose }: DesktopMegaMenuProps) {
  // Separate primary and secondary items
  const secondaryItems = items.filter(item => !primaryIds.includes(item.id))

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="relative px-3 py-2 text-foreground/70 hover:text-foreground transition-all group flex items-center gap-1"
        aria-expanded={isOpen}
        aria-label="More navigation options"
      >
        <span className="relative z-10 text-sm font-medium">More</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
        <div className="absolute inset-0 rounded-full transition-all" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={onClose}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-80 z-50"
            >
              <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-border">
                  <p className="text-sm text-foreground/60">Explore more sections</p>
                </div>

                {/* Navigation items */}
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2">
                    {secondaryItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110 bg-muted/70 border border-border">
                            <Icon size={18} className="text-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-foreground">
                              {item.label}
                            </h3>
                            <p className="text-xs text-foreground/60 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

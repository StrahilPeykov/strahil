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
        className="relative px-3 py-2 text-gray-400 hover:text-white transition-all group flex items-center gap-1"
        aria-expanded={isOpen}
        aria-label="More navigation options"
      >
        <span className="relative z-10 text-sm font-medium">More</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-full transition-all" />
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
              <div className="bg-slate-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-slate-800/50">
                  <p className="text-sm text-gray-400">Explore more sections</p>
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
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-all"
                        >
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                            style={{
                              backgroundColor: `${item.color}15`,
                              borderColor: `${item.color}30`,
                              borderWidth: '1px',
                              borderStyle: 'solid'
                            }}
                          >
                            <div style={{ color: item.color }}>
                              <Icon size={18} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text">
                              {item.label}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
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
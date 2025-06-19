'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { NavigationItem } from '../../../types/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: NavigationItem[]
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : '100%'
      }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-64 bg-slate-900/90 backdrop-blur-md border-l border-purple-500/20 p-6">
        <div className="flex flex-col gap-2 mt-20">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="px-4 py-3 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
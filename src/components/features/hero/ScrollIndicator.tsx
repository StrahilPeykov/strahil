'use client'

import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  onScroll: () => void
}

export function ScrollIndicator({ onScroll }: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 hidden sm:flex"
    >
      <button
        onClick={onScroll}
        className="flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll to content"
      >
        <div className="relative">
          <div className="w-6 h-10 border-2 border-outline rounded-full p-1 group-hover:border-glow/40 transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full mx-auto"
            />
          </div>
        </div>
        <p className="text-xs text-ink/60 uppercase tracking-wider group-hover:text-ink transition-colors">
          Scroll
        </p>
      </button>
    </motion.div>
  )
}

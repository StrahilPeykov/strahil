'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { navigationSections } from '../../../data/navigation'
import type { NavigationItem } from '../../../types/navigation'

interface NavigationCardProps {
  section: NavigationItem
  index: number
  isActive: boolean
  onHover: (sectionId: string | null) => void
}

function NavigationCard({ section, index, isActive, onHover }: NavigationCardProps) {
  const Icon = section.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.05 }}
    >
      <Link
        href={section.href}
        onMouseEnter={() => onHover(section.id)}
        onMouseLeave={() => onHover(null)}
        className="group relative block h-full"
      >
        {/* Background glow on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Card */}
        <div className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-xl p-2 md:p-3 h-full transition-all duration-300 group-hover:border-slate-700/70 group-hover:bg-slate-900/60 group-hover:shadow-2xl">
          {/* Subtle inner glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${section.color}15 0%, transparent 50%)`
            }}
          />

          {/* Number indicator */}
          <div className="absolute bottom-2 right-2 text-3xl font-display font-bold text-slate-800/5 select-none group-hover:text-slate-800/10 transition-all">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Icon */}
          <div className="relative mb-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                backgroundColor: `${section.color}15`,
                borderColor: `${section.color}30`,
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              {/* Fixed: Use CSS custom property for icon color */}
              <div 
                style={{ color: section.color }}
                className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              >
                <Icon size={16} />
              </div>
            </div>
          </div>

          {/* Content */}
          <h3 className="relative text-sm md:text-base font-semibold text-white mb-1 transition-colors duration-300">
            {section.label}
          </h3>
          <p className="relative text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
            {section.description}
          </p>

          {/* Arrow indicator */}
          <div className="absolute top-2 right-2 text-gray-700 group-hover:text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function NavigationGrid() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6"
    >
      {navigationSections.map((section, i) => (
        <NavigationCard
          key={section.id}
          section={section}
          index={i}
          isActive={activeSection === section.id}
          onHover={setActiveSection}
        />
      ))}
    </motion.div>
  )
}

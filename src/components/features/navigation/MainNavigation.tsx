'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useScrollPosition } from '../../../hooks/useScrollPosition'
import { navigationSections } from '../../../data/navigation'
import { MobileMenu } from './MobileMenu'
import { FaviconLogo } from '../../ui/LogoIcon'

export function MainNavigation() {
  const isScrolled = useScrollPosition()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className={`rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'backdrop-blur-xl bg-slate-900/80 border border-purple-500/20 px-4 py-2 shadow-lg shadow-purple-500/5' 
              : 'px-2'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="group flex items-center" aria-label="Strahil Peykov - Home">
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg scale-150" />
                  
                  {/* Logo */}
                  <FaviconLogo 
                    size={isScrolled ? 28 : 32} 
                    className="relative transition-all duration-300 group-hover:scale-110 filter group-hover:drop-shadow-lg"
                    alt="Strahil Peykov Logo"
                  />
                </div>
              </Link>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-1">
                {navigationSections.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-2 text-gray-400 hover:text-white transition-all group"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <span className="relative z-10 text-sm font-medium">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-full transition-all" />
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu}
        items={navigationSections}
      />
    </>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollPosition } from '../../../hooks/useScrollPosition'
import { allNavigationItems, primaryNavigation } from '../../../data/navigation'
import { MobileMenu } from './MobileMenu'
import { FaviconLogo } from '../../ui/LogoIcon'
import { NavItem } from '../../ui/NavItem'

export function MainNavigation() {
  const pathname = usePathname()
  const isScrolled = useScrollPosition()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const closeMoreMenu = () => setIsMoreMenuOpen(false)

  // Get primary nav items (5 items: About, Projects, Blog, Tools, Contact)
  const primaryNavItems = allNavigationItems.filter(item => 
    primaryNavigation.includes(item.id) && !item.hidden
  )
  
  // Secondary items for "More" (Learn, Play, Health) - filter out hidden items
  const moreItems = allNavigationItems.filter(item => 
    !primaryNavigation.includes(item.id) && !item.hidden
  )

  // Check if a nav item is active
  const isActiveItem = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3"
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className={
            `rounded-xl border ${isScrolled ? 'border-outline backdrop-blur-xl' : 'border-transparent backdrop-blur-lg'} 
             bg-bg/65 px-4 py-3 transition-all duration-300`
          }>
            <div className="flex items-center justify-between">
              {/* Enhanced Logo with Text */}
              <Link href="/" className="group flex items-center gap-3" aria-label="Strahil Peykov - Home">
                <FaviconLogo 
                  size={isScrolled ? 26 : 30}
                  className="transition-transform duration-300 group-hover:scale-105"
                  alt="SP"
                />
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  Strahil
                </span>
              </Link>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-1">
                {primaryNavItems.map((item) => (
                  <NavItem key={item.href} href={item.href} label={item.label} active={isActiveItem(item.href)} />
                ))}
                
                {/* More dropdown for secondary items */}
                {moreItems.length > 0 && (
                  <div className="relative ml-1">
                    <button
                      onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setTimeout(closeMoreMenu, 200)
                        }
                      }}
                      className="relative px-3 py-2 text-white/70 hover:text-white transition-all flex items-center gap-1 text-sm"
                    >
                      <span>More</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMoreMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full right-0 mt-3 w-48 origin-top-right z-50 bg-bg/80 backdrop-blur-xl border border-outline rounded-xl shadow-xl overflow-hidden"
                        >
                          <div className="py-2">
                            {moreItems.map((item) => {
                              const Icon = item.icon
                              const isActive = isActiveItem(item.href)
                              
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMoreMenu}
                                  className={`group flex items-center gap-3 px-4 py-2 text-sm transition-all ${
                                    isActive
                                      ? 'text-white bg-glow/10 border-r-2 border-glow'
                                      : 'text-white/70 hover:text-white hover:bg-bg-soft/50'
                                  }`}
                                >
                                  <Icon size={16} className={isActive ? 'text-white' : 'text-white/60 group-hover:text-white'} />
                                  <div>
                                    <div className="font-medium">{item.label}</div>
                                    <div className="text-xs text-white/40">{item.description}</div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Toggle menu"
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
        items={allNavigationItems.filter(item => !item.hidden)}
        currentPath={pathname}
      />
    </>
  )
}

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
              {/* Enhanced Logo with Text */}
              <Link href="/" className="group flex items-center gap-3" aria-label="Strahil Peykov - Home">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg scale-150" />
                  <FaviconLogo 
                    size={isScrolled ? 28 : 32} 
                    className="relative transition-all duration-300 group-hover:scale-110"
                    alt="SP"
                  />
                </div>
                
                {/* Stylized "Strahil" text */}
                <div className="relative overflow-hidden">
                  <span className="font-display font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:to-purple-300">
                    Strahil
                  </span>
                  
                  {/* Subtle underline animation */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 w-0 group-hover:w-full" />
                </div>
              </Link>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-1">
                {/* Primary nav - 5 items with active states */}
                {primaryNavItems.map((item) => {
                  const isActive = isActiveItem(item.href)
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative px-4 py-2 transition-all group"
                    >
                      <span className={`relative z-10 text-sm font-medium transition-colors ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-400 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                      
                      {/* Active indicator */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30'
                          : 'bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10'
                      }`} />
                      

                    </Link>
                  )
                })}
                
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
                      className="relative px-3 py-2 text-gray-500 hover:text-gray-300 transition-all flex items-center gap-1 text-sm"
                    >
                      <span>More</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMoreMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-xl overflow-hidden"
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
                                  className={`flex items-center gap-3 px-4 py-2 text-sm transition-all ${
                                    isActive
                                      ? 'text-white bg-purple-500/10 border-r-2 border-purple-400'
                                      : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                                  }`}
                                >
                                  <Icon size={16} className={isActive ? 'text-purple-400' : 'text-gray-500'} />
                                  <div>
                                    <div className="font-medium">{item.label}</div>
                                    <div className="text-xs text-gray-600">{item.description}</div>
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
                className="md:hidden p-2 text-gray-400 hover:text-purple-400 transition-colors"
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
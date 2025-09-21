'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search, Mail, Code2, PenTool, User, Compass, Zap, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../components/layout/PageWrapper'
import { Badge } from '../components/ui/Badge'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const quickLinks = [
  {
    href: '/',
    icon: Home,
    label: 'Home',
    description: 'Back to the beginning'
  },
  {
    href: '/projects',
    icon: Code2,
    label: 'Projects',
    description: 'See what I\'ve built'
  },
  {
    href: '/blog',
    icon: PenTool,
    label: 'Blog',
    description: 'Read my articles'
  },
  {
    href: '/about',
    icon: User,
    label: 'About',
    description: 'Learn more about me'
  },
  {
    href: '/contact',
    icon: Mail,
    label: 'Contact',
    description: 'Get in touch'
  }
]

const floatingElements = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5
}))

export default function NotFoundPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real implementation, you'd implement search functionality
      // For now, redirect to home with search intent
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <PageWrapper>
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" />
          
          {/* Floating elements */}
          <div className="absolute inset-0">
            {floatingElements.map((element) => (
              <motion.div
                key={element.id}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: element.duration,
                  delay: element.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Large glowing orbs */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-[12rem] lg:text-[16rem] font-display font-bold leading-none">
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Compass className="w-6 h-6 text-red-400" />
              <Badge variant="error">Lost in Space</Badge>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Houston, we have a problem
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
              The page you're looking for seems to have drifted into the digital void. 
              Don't worry though, even the best explorers sometimes take a wrong turn.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Zap className="w-4 h-4" />
              <span>Error Code: PAGE_NOT_FOUND</span>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for something..."
                  className="w-full pl-12 pr-4 py-3 bg-bg-soft/70 border border-outline rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-glow/50 transition-colors"
                />
              </div>
            </form>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={handleGoBack}
              className="group inline-flex items-center gap-2 px-6 py-3 border border-outline text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
            
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-glow text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-[0_6px_18px_rgba(60,159,255,0.25)]"
            >
              <Home className="w-5 h-5" />
              Take Me Home
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Or explore these popular destinations
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group block p-4 bg-bg-soft/70 backdrop-blur-sm border border-outline rounded-xl hover:shadow-glow hover:border-glow/35 transition-all"
                    >
                      <Icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors mx-auto mb-2" />
                      <h4 className="font-semibold text-white group-hover:text-white transition-colors mb-1">
                        {link.label}
                      </h4>
                      <p className="text-xs text-white/60 group-hover:text-white/70 transition-colors">
                        {link.description}
                      </p>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <div className="relative">
              <div className="absolute inset-0 opacity-[0.03]" />
              <div className="relative bg-bg-soft/80 backdrop-blur-sm border border-outline rounded-2xl p-6">
                <p className="text-sm text-gray-400 mb-2">
                  Still can't find what you're looking for?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  Let me know what you were trying to find
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Shield, Settings, X } from 'lucide-react'
import { useCookieConsent } from '../../providers/CookieConsentProvider'
import { CookieSettingsModal } from './CookieSettingsModal'

export function CookieBar() {
  const { consentType, updateConsent, checkConsentNeeded } = useCookieConsent()
  const [showBar, setShowBar] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    if (checkConsentNeeded() && consentType === null) {
      setTimeout(() => setShowBar(true), 1000)
    }
  }, [consentType, checkConsentNeeded])

  const handleAccept = () => {
    updateConsent('accepted')
    setShowBar(false)
  }

  const handleReject = () => {
    updateConsent('rejected')
    setShowBar(false)
  }

  const handleOpenSettings = () => {
    setShowSettings(true)
  }

  const handleClose = () => {
    setShowBar(false)
  }

  if (typeof window === 'undefined' || !showBar) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {showBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-50"
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-800/50 rounded-2xl shadow-2xl shadow-black/25 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5" />
                
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1.5 text-gray-500 hover:text-gray-300 hover:bg-slate-800/50 rounded-lg transition-all"
                  aria-label="Dismiss cookie banner"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Icon and content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-blue-400" />
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            We value your privacy
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            This website uses cookies to enhance your experience and provide analytics. 
                            Essential cookies are always active, but you can choose whether to accept optional cookies.{' '}
                            <Link 
                              href="/privacy" 
                              target="_blank" 
                              className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
                            >
                              Learn more
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                      <button
                        onClick={handleOpenSettings}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all"
                      >
                        <Settings className="w-4 h-4" />
                        Customize
                      </button>
                      
                      <button
                        onClick={handleReject}
                        className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all"
                      >
                        Decline
                      </button>
                      
                      <button
                        onClick={handleAccept}
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-xl transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                      >
                        Accept All
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <CookieSettingsModal 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
    </>
  )
}
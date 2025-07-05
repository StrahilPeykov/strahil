'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useCookieConsent } from '../../providers/CookieConsentProvider'

export function CookieBar() {
  const { consentType, updateConsent, checkConsentNeeded } = useCookieConsent()
  const [showBar, setShowBar] = useState(false)

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

  if (typeof window === 'undefined' || !showBar) {
    return null
  }

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-400">
                We use cookies to improve your experience.{' '}
                <Link href="/privacy" target="_blank" className="text-purple-400 hover:text-purple-300 underline">
                  Learn more
                </Link>
              </p>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleReject}
                  className="px-4 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-1.5 text-xs font-medium text-white bg-purple-600/80 hover:bg-purple-600 rounded transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
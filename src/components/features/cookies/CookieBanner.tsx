'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Settings } from 'lucide-react'
import Link from 'next/link'
import { useCookieConsent } from '../../providers/CookieConsentProvider'

export function CookieBanner() {
  const { consentType, updateConsent, checkConsentNeeded } = useCookieConsent()
  const [showBanner, setShowBanner] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    // Show banner if consent is needed
    if (checkConsentNeeded() && consentType === null) {
      setShowBanner(true)
    }
  }, [consentType, checkConsentNeeded])

  const handleAccept = async () => {
    setIsProcessing(true)
    updateConsent('accepted')
    setTimeout(() => {
      setShowBanner(false)
    }, 300)
  }

  const handleReject = async () => {
    setIsProcessing(true)
    updateConsent('rejected')
    setTimeout(() => {
      setShowBanner(false)
    }, 300)
  }

  // Don't render anything during SSR or if consent is already given
  if (typeof window === 'undefined' || !showBanner) {
    return null
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop overlay - prevents interaction with site until choice is made */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
            aria-hidden="true"
          />
          
          {/* Cookie banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-description"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-500/10 p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <Cookie className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h2 id="cookie-banner-title" className="text-lg font-semibold text-white mb-2">
                      Your Privacy Matters
                    </h2>
                    <p id="cookie-banner-description" className="text-sm text-gray-400 mb-3">
                      We use cookies to enhance your browsing experience and analyze site traffic. 
                      Essential cookies are required for the site to function properly and are always enabled. 
                      You can choose to accept or reject optional analytics cookies.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <Link 
                        href="/privacy" 
                        className="text-purple-400 hover:text-purple-300 underline"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        href="/cookies" 
                        className="text-purple-400 hover:text-purple-300 underline"
                        target="_blank"
                      >
                        Cookie Policy
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Cookie categories info */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="space-y-3 text-sm">
                    <div>
                      <h3 className="font-medium text-white mb-1">🔒 Essential Cookies (Always Active)</h3>
                      <p className="text-gray-500 text-xs">Required for core functionality, security, and preferences</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">📊 Analytics Cookies (Optional)</h3>
                      <p className="text-gray-500 text-xs">Help us understand how visitors use the website</p>
                    </div>
                  </div>
                </div>

                {/* Actions - Equal weight buttons as required by Dutch law */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleReject}
                    disabled={isProcessing}
                    className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Reject optional cookies"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAccept}
                    disabled={isProcessing}
                    className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Accept all cookies"
                  >
                    Accept All
                  </button>
                </div>

                {/* Cookie settings link */}
                <div className="mt-4 text-center">
                  <button
                    onClick={() => {/* TODO: Implement granular settings */}}
                    className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    <Settings className="w-3 h-3" />
                    Manage Cookie Settings
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
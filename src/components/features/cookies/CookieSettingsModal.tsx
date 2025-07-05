'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useCookieConsent } from '../../providers/CookieConsentProvider'

interface CookieSettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const { consentType, updateConsent } = useCookieConsent()
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consentType === 'accepted')
  
  const handleSave = () => {
    const newConsent = analyticsEnabled ? 'accepted' : 'rejected'
    updateConsent(newConsent)
    onClose()
    
    // If changing from accepted to rejected, reload to clear analytics
    if (consentType === 'accepted' && newConsent === 'rejected') {
      setTimeout(() => window.location.reload(), 100)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-[50%] -translate-y-1/2 max-w-md mx-auto z-50 md:inset-x-auto md:left-1/2 md:-translate-x-1/2"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Cookie Settings</h2>
                <button
                  onClick={onClose}
                  className="p-1 text-gray-500 hover:text-gray-400 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Cookie categories */}
              <div className="space-y-4 mb-6">
                {/* Essential cookies */}
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white">Essential Cookies</h3>
                    <span className="text-xs text-gray-500">Always active</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
                
                {/* Analytics cookies */}
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white">Analytics Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-400">
                    Help us understand how visitors interact with the website.
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all"
                >
                  Save preferences
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
'use client'

import { useState } from 'react'
import { Download, Shield, AlertCircle, CheckCircle, Archive, Clock, Users, Loader2, ExternalLink, Lock, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { PageWrapper } from '../../../components/layout/PageWrapper'
import { Badge } from '../../../components/ui/Badge'
import Link from 'next/link'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

function LegalModal({ isOpen, onClose, onAccept }: LegalModalProps) {
  const [isOwner, setIsOwner] = useState(false)
  const [hasRights, setHasRights] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const canProceed = (isOwner || hasRights) && acceptTerms

  const handleAccept = () => {
    if (canProceed) {
      onAccept()
      // Reset state
      setIsOwner(false)
      setHasRights(false)
      setAcceptTerms(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative z-10 w-full max-w-lg mx-4"
      >
        <div className="bg-bg-soft/80 rounded-2xl shadow-2xl border border-outline p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-bold text-white">Legal Compliance Check</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-bg-soft/70 border border-outline rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <div className="text-sm text-white/80">
                <p className="font-semibold mb-1">Important Notice</p>
                <p>
                  This tool is intended for downloading your own content or 
                  openly-licensed materials only. Unauthorized downloading of 
                  copyrighted content is prohibited.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-white font-medium">
                Please confirm your relationship to this content:
              </p>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isOwner}
                  onChange={(e) => {
                    setIsOwner(e.target.checked)
                    if (e.target.checked) setHasRights(false)
                  }}
                  className="w-5 h-5 rounded border-2 border-outline bg-bg-soft/70 text-white focus:ring-glow"
                />
                <span className="text-ink/80 text-sm">
                  I am the owner/author of this Obsidian Publish vault
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={hasRights}
                  onChange={(e) => {
                    setHasRights(e.target.checked)
                    if (e.target.checked) setIsOwner(false)
                  }}
                  className="w-5 h-5 rounded border-2 border-outline bg-bg-soft/70 text-white focus:ring-glow"
                />
                <span className="text-ink/80 text-sm">
                  This vault is published under an open license (CC-BY, CC-BY-SA, CC0, etc.) 
                  that permits downloading and redistribution
                </span>
              </label>
            </div>

            <div className="border-t border-outline pt-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-outline bg-bg-soft/70 text-white focus:ring-glow"
                />
                <span className="text-ink/80 text-sm">
                  I accept the{' '}
                  <Link href="/terms" className="text-white hover:text-white">
                    Terms of Service
                  </Link>
                  {' '}and understand that false claims may result in legal action
                </span>
              </label>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-outline text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                disabled={!canProceed}
                className="flex-1 py-3 bg-glow text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                I Confirm & Proceed
              </button>
            </div>

            <p className="text-xs text-ink/70 text-center">
              Your consent and IP address will be logged for legal compliance. 
              Content owners can request removal via our{' '}
              <Link href="/api/report" className="text-white hover:text-white">
                takedown form
              </Link>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full">
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-glow"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{progress}%</span>
        <span>{progress === 100 ? 'Complete' : 'Processing...'}</span>
      </div>
    </div>
  )
}

export default function ObsidianDownloaderPage() {
  const [url, setUrl] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showLegalModal, setShowLegalModal] = useState(false)

  const validateObsidianUrl = (url: string): boolean => {
    try {
      const parsed = new URL(url)
      return parsed.hostname === 'publish.obsidian.md'
    } catch {
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateObsidianUrl(url)) {
      toast.error('Please enter a valid Obsidian Publish URL (publish.obsidian.md)')
      return
    }

    setShowLegalModal(true)
  }

  const handleLegalAccept = async () => {
    setShowLegalModal(false)
    setIsDownloading(true)
    setProgress(0)

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          url,
          consent: true,
          timestamp: new Date().toISOString()
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Download failed')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error('No response body')

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter(Boolean)

        for (const line of lines) {
          try {
            const data = JSON.parse(line)
            
            if (data.type === 'progress') {
              setProgress(data.value)
            } else if (data.type === 'complete') {
              toast.success('Vault archived successfully!')
              window.location.href = `/api/download/${data.downloadId}`
            } else if (data.type === 'error') {
              throw new Error(data.message)
            }
          } catch (e) {
            // Skip invalid JSON lines
          }
        }
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to download vault')
    } finally {
      setIsDownloading(false)
      setProgress(0)
    }
  }

  return (
    <PageWrapper>
      <Toaster position="top-right" />
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-bg-soft/70 border border-outline rounded-2xl">
            <Archive className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Obsidian Publish Downloader
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create offline archives of Obsidian Publish vaults. Perfect for backing up your own content or accessing openly-licensed knowledge bases offline.
          </p>
        </motion.div>

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-bg-soft/80 backdrop-blur-md rounded-2xl p-8 mb-12 border border-outline"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-white/80 mb-2">
                Obsidian Publish URL
              </label>
              <input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://publish.obsidian.md/example"
                className="w-full px-4 py-3 bg-bg-soft/70 border border-outline rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent"
                required
                disabled={isDownloading}
              />
            </div>

            <button
              type="submit"
              disabled={isDownloading}
            className="w-full py-4 bg-glow text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download Vault
                </>
              )}
            </button>
          </form>

          {/* Progress Bar */}
          <AnimatePresence>
            {isDownloading && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                <ProgressBar progress={progress} />
                <p className="text-sm text-gray-300 mt-2 text-center">
                  {progress < 30 && 'Fetching vault structure...'}
                  {progress >= 30 && progress < 70 && 'Downloading content...'}
                  {progress >= 70 && progress < 100 && 'Creating archive...'}
                  {progress === 100 && 'Complete! Starting download...'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-bg-soft/80 backdrop-blur rounded-xl p-6 border border-outline">
            <Shield className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Privacy First</h3>
            <p className="text-ink/80 text-sm">
              We never store your data. Archives are generated on-demand and immediately deleted after download.
            </p>
          </div>

          <div className="bg-bg-soft/80 backdrop-blur rounded-xl p-6 border border-outline">
            <CheckCircle className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Legal Compliance</h3>
            <p className="text-ink/80 text-sm">
              EU/Dutch compliant with ownership verification and opt-out support for content creators.
            </p>
          </div>

          <div className="bg-bg-soft/80 backdrop-blur rounded-xl p-6 border border-outline">
            <Clock className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Respectful Crawling</h3>
            <p className="text-ink/80 text-sm">
              We respect robots.txt and implement rate limiting to avoid overloading servers.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-gray-400 text-sm">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-gray-400 text-sm">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{'<'} 5min</div>
            <div className="text-gray-400 text-sm">Average Time</div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm">
          <p className="mb-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            {' • '}
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            {' • '}
            <Link href="/api/report" className="hover:text-white">Report Content</Link>
          </p>
          <p>
            Built by{' '}
            <Link href="https://strahil.dev" className="text-purple-400 hover:text-purple-300">
              Strahil Peykov
            </Link>
          </p>
        </footer>
      </div>

      <LegalModal
        isOpen={showLegalModal}
        onClose={() => setShowLegalModal(false)}
        onAccept={handleLegalAccept}
      />
    </PageWrapper>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'

// Declare grecaptcha types
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
      reset: () => void
    }
  }
}

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
  budget: string
}

// Add your reCAPTCHA site key here
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!agreedToTerms) {
      alert('Please agree to the privacy policy and terms of service')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // If reCAPTCHA is enabled, get token
      let recaptchaToken = ''
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
        } catch (error) {
          console.error('reCAPTCHA error:', error)
        }
      }
      
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In production, send data to your API:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, recaptchaToken })
      // })
      
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          budget: ''
        })
        setAgreedToTerms(false)
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
              placeholder="Your name"
            />
            <AnimatePresence>
              {focusedField === 'name' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-2 left-3 px-2 bg-slate-950 text-xs text-purple-400"
                >
                  Full Name
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
              placeholder="your@email.com"
            />
            <AnimatePresence>
              {focusedField === 'email' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-2 left-3 px-2 bg-slate-950 text-xs text-purple-400"
                >
                  Email Address
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Company & Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
            placeholder="Company (optional)"
          />
          
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
          >
            <option value="">Budget range</option>
            <option value="<10k">&lt; €10k</option>
            <option value="10k-25k">€10k - €25k</option>
            <option value="25k-50k">€25k - €50k</option>
            <option value="50k+">€50k+</option>
          </select>
        </div>
        
        {/* Subject */}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
          placeholder="What's this about?"
        />
        
        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            rows={6}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
            placeholder="Tell me about your project..."
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-600">
            {formData.message.length}/500
          </div>
        </div>
        
        {/* Privacy & Terms Consent */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            required
            className="mt-1 w-4 h-4 bg-slate-900/50 border border-slate-700 rounded text-purple-500 focus:ring-purple-500 focus:ring-offset-0 focus:ring-2 cursor-pointer"
          />
          <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer">
            I agree to the{' '}
            <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">
              privacy policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="text-purple-400 hover:text-purple-300 underline">
              terms of service
            </Link>
            . I understand my data will be processed as described and I can request deletion at any time.
          </label>
        </div>
        
        {/* reCAPTCHA Badge Notice */}
        {RECAPTCHA_SITE_KEY && (
          <p className="text-xs text-gray-500 text-center">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        )}
        
        {/* Submit Button */}
        <AnimatePresence mode="wait">
          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-green-400 justify-center"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Message sent successfully!</span>
            </motion.div>
          ) : submitStatus === 'error' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-red-400 justify-center"
            >
              <AlertCircle className="w-5 h-5" />
              <span>Something went wrong. Please try again.</span>
            </motion.div>
          ) : (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    </>
  )
}
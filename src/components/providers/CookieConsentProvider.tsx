'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CookieConsentContextType {
  hasConsent: boolean | null
  consentType: 'accepted' | 'rejected' | null
  isLoading: boolean
  updateConsent: (type: 'accepted' | 'rejected') => void
  checkConsentNeeded: () => boolean
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider')
  }
  return context
}

interface CookieConsentProviderProps {
  children: ReactNode
}

const CONSENT_COOKIE_NAME = 'cookie_consent'
const CONSENT_DATE_COOKIE_NAME = 'cookie_consent_date'
const CONSENT_EXPIRY_MONTHS = 12 // 12 months for accepted, 6 months for rejected
const REJECTED_EXPIRY_MONTHS = 6

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)
  const [consentType, setConsentType] = useState<'accepted' | 'rejected' | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if consent is needed based on Dutch/EU requirements
  const checkConsentNeeded = (): boolean => {
    try {
      const consent = localStorage.getItem(CONSENT_COOKIE_NAME)
      const consentDate = localStorage.getItem(CONSENT_DATE_COOKIE_NAME)
      
      if (!consent || !consentDate) {
        return true // No consent recorded
      }

      // Check if consent has expired
      const consentTimestamp = new Date(consentDate).getTime()
      const now = new Date().getTime()
      const monthsElapsed = (now - consentTimestamp) / (1000 * 60 * 60 * 24 * 30)
      
      // Different expiry for accepted vs rejected
      const expiryMonths = consent === 'rejected' ? REJECTED_EXPIRY_MONTHS : CONSENT_EXPIRY_MONTHS
      
      if (monthsElapsed > expiryMonths) {
        // Consent expired, clear old data
        localStorage.removeItem(CONSENT_COOKIE_NAME)
        localStorage.removeItem(CONSENT_DATE_COOKIE_NAME)
        return true
      }

      // TODO: Add check for policy version changes
      // const policyVersion = localStorage.getItem('accepted_policy_version')
      // if (policyVersion !== CURRENT_POLICY_VERSION) return true

      return false
    } catch {
      // If localStorage is not available, assume consent is needed
      return true
    }
  }

  // Initialize consent state
  useEffect(() => {
    try {
      const needsConsent = checkConsentNeeded()
      
      if (!needsConsent) {
        const consent = localStorage.getItem(CONSENT_COOKIE_NAME)
        setConsentType(consent as 'accepted' | 'rejected')
        setHasConsent(consent === 'accepted')
      } else {
        setHasConsent(null)
        setConsentType(null)
      }
    } catch (error) {
      console.error('Error checking consent:', error)
      setHasConsent(null)
      setConsentType(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Update consent
  const updateConsent = (type: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(CONSENT_COOKIE_NAME, type)
      localStorage.setItem(CONSENT_DATE_COOKIE_NAME, new Date().toISOString())
      // TODO: Add policy version tracking
      // localStorage.setItem('accepted_policy_version', CURRENT_POLICY_VERSION)
      
      setConsentType(type)
      setHasConsent(type === 'accepted')
      
      // Dispatch custom event for analytics
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
          detail: { consent: type === 'accepted' } 
        }))
      }
    } catch (error) {
      console.error('Error updating consent:', error)
    }
  }

  // Block all third-party scripts until consent is given
  useEffect(() => {
    if (isLoading) return

    // If no consent or rejected, ensure analytics/tracking scripts are blocked
    if (!hasConsent) {
      // Remove any existing tracking scripts
      const trackingScripts = document.querySelectorAll('script[data-consent-required="true"]')
      trackingScripts.forEach(script => script.remove())
      
      // Clear any tracking cookies if consent was rejected
      if (consentType === 'rejected') {
        // List of common analytics cookies to clear
        const trackingCookies = ['_ga', '_gid', '_gat', 'fbp', '_fbp']
        trackingCookies.forEach(cookieName => {
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
        })
      }
    }
  }, [hasConsent, consentType, isLoading])

  return (
    <CookieConsentContext.Provider value={{ 
      hasConsent, 
      consentType, 
      isLoading, 
      updateConsent, 
      checkConsentNeeded 
    }}>
      {children}
    </CookieConsentContext.Provider>
  )
}
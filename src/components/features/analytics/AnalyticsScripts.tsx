'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { useCookieConsent } from '../../providers/CookieConsentProvider'

// Add your Google Analytics ID here
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function AnalyticsScripts() {
  const { hasConsent, isLoading } = useCookieConsent()

  // Listen for consent updates
  useEffect(() => {
    const handleConsentUpdate = (event: CustomEvent) => {
      if (event.detail.consent && GA_MEASUREMENT_ID) {
        // Check if scripts already loaded
        const existingScript = document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)
        if (!existingScript) {
          // Load analytics scripts dynamically
          const script1 = document.createElement('script')
          script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
          script1.async = true
          script1.setAttribute('data-consent-required', 'true')
          document.head.appendChild(script1)

          script1.onload = () => {
            const script2 = document.createElement('script')
            script2.setAttribute('data-consent-required', 'true')
            script2.innerHTML = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('consent', 'default', {
                'analytics_storage': 'granted',
                'functionality_storage': 'granted',
                'personalization_storage': 'denied',
                'ad_storage': 'denied'
              });
              
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `
            document.head.appendChild(script2)
          }
        }
      }
    }

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate as EventListener)
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate as EventListener)
    }
  }, [])

  // Clear any existing analytics cookies if consent is not given
  useEffect(() => {
    if (!isLoading && !hasConsent) {
      // List of Google Analytics cookies
      const gaCookies = ['_ga', '_gid', '_gat', '_gac_', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv']
      
      gaCookies.forEach(cookieName => {
        // Clear for current domain
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
        // Clear for parent domain
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`
        // Clear for www subdomain
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=www.${window.location.hostname}`
      })

      // Also disable Google Analytics if it was already loaded
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'denied'
        })
      }
    }
  }, [hasConsent, isLoading])

  // Don't load any analytics if there's no consent or still loading
  if (isLoading || !hasConsent || !GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      {/* Google Analytics - only loads after consent */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        data-consent-required="true"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        data-consent-required="true"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configure with consent mode
          gtag('consent', 'default', {
            'analytics_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'denied',
            'ad_storage': 'denied'
          });
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true, // Required for GDPR
            allow_google_signals: false, // Disable advertising features
            allow_ad_personalization_signals: false
          });
        `}
      </Script>

      {/* Add other analytics tools here with the same pattern */}
      {/* Example: Plausible, Fathom, etc. */}
    </>
  )
}

// Optional: Hook to track custom events (only works after consent)
export function useAnalytics() {
  const { hasConsent } = useCookieConsent()

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!hasConsent || typeof window === 'undefined' || !(window as any).gtag) {
      return
    }

    (window as any).gtag('event', eventName, parameters)
  }

  return { trackEvent, hasConsent }
}
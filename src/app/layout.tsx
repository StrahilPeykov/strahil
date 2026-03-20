import type { Metadata, Viewport } from 'next'
import './globals.css'
import { cn } from '../lib/utils'
import { ThemeProvider } from '../components/ThemeProvider'
import { CookieConsentProvider } from '../components/providers/CookieConsentProvider'
import { CookieBar } from '../components/features/cookies/CookieBar'
import { AnalyticsScripts } from '../components/features/analytics/AnalyticsScripts'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Strahil Peykov',
  url: 'https://strahil.dev',
  image: 'https://strahil.dev/icons/android-chrome-512x512.png',
  jobTitle: 'Full-Stack Developer & Software Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amsterdam',
    addressCountry: 'Netherlands',
  },
  sameAs: [
    'https://github.com/StrahilPeykov',
    'https://linkedin.com/in/strahil-peykov',
    'https://x.com/StrahilGG',
    'https://instagram.com/strahil.peykov',
    'https://letterboxd.com/strahil_peykov',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Strahil Peykov',
  url: 'https://strahil.dev',
  description:
    'Personal website of Strahil Peykov, a full-stack developer based in Amsterdam.',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://strahil.dev'),
  title: {
    default: 'Strahil Peykov - Full-Stack Developer',
    template: '%s | Strahil Peykov',
  },
  description:
    'Personal website of Strahil Peykov, full-stack developer in Amsterdam. Projects, writing, and contact.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://strahil.dev',
    title: 'Strahil Peykov - Full-Stack Developer',
    description:
      'Personal website of Strahil Peykov, full-stack developer in Amsterdam.',
    siteName: 'Strahil Peykov',
    images: [
      {
        url: '/icons/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Strahil Peykov',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Strahil Peykov - Full-Stack Developer',
    description:
      'Personal website of Strahil Peykov, full-stack developer in Amsterdam.',
    creator: '@StrahilGG',
    images: ['/icons/android-chrome-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png' }],
    shortcut: '/icons/favicon-32x32.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c111b' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var k='midnight-theme';var s=localStorage.getItem(k);var m=window.matchMedia('(prefers-color-scheme: dark)');var t=(s==='light'||s==='dark')?s:(m.matches?'dark':'light');var e=document.documentElement;e.classList.remove('light','dark');e.classList.add(t);}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={cn('min-h-screen bg-background font-sans text-foreground antialiased')}
      >
        <CookieConsentProvider>
          <ThemeProvider defaultTheme="system">
            <a
              href="#main-content"
              className="sr-only z-50 rounded-md bg-glow px-4 py-2 text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-glow"
            >
              Skip to main content
            </a>

            <main id="main-content">{children}</main>
            <CookieBar />
            <AnalyticsScripts />
          </ThemeProvider>
        </CookieConsentProvider>
      </body>
    </html>
  )
}

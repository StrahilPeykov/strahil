import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Strahil Peykov - Full-Stack Developer & Digital Creator',
  description: 'Personal portfolio and digital garden of Strahil Peykov. Exploring code, design, and everything in between.',
  keywords: ['Strahil Peykov', 'Full-Stack Developer', 'Portfolio', 'Digital Garden', 'MDX', 'Complex Systems'],
  authors: [{ name: 'Strahil Peykov' }],
  creator: 'Strahil Peykov',
  metadataBase: new URL('https://strahilpeykov.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://strahilpeykov.com',
    title: 'Strahil Peykov - Full-Stack Developer & Digital Creator',
    description: 'Personal portfolio and digital garden of Strahil Peykov',
    siteName: 'Strahil Peykov',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Strahil Peykov - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strahil Peykov',
    description: 'Personal portfolio and digital garden of Strahil Peykov',
    images: ['/og-image.png'],
    creator: '@strahilpeykov',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfdfd' },
    { media: '(prefers-color-scheme: dark)', color: '#0c111b' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        'font-sans antialiased min-h-screen'
      )}>
        <ThemeProvider defaultTheme="dark">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-electric text-midnight px-4 py-2 rounded-md z-50">
            Skip to main content
          </a>
          <div id="main-content">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Strahil Peykov - Full-Stack Developer & Digital Creator',
  description: 'Personal portfolio and digital garden of Strahil Peykov. Exploring code, design, and everything in between.',
  keywords: ['Strahil Peykov', 'Full-Stack Developer', 'Portfolio', 'Digital Garden', 'MDX'],
  authors: [{ name: 'Strahil Peykov' }],
  creator: 'Strahil Peykov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://strahilpeykov.com',
    title: 'Strahil Peykov',
    description: 'Personal portfolio and digital garden of Strahil Peykov',
    siteName: 'Strahil Peykov',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strahil Peykov',
    description: 'Personal portfolio and digital garden of Strahil Peykov',
    creator: '@strahilpeykov', // Update with your Twitter handle
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        'font-sans antialiased'
      )}>
        {children}
      </body>
    </html>
  )
}
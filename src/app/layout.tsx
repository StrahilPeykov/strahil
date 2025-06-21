import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '../lib/utils'
import { ThemeProvider } from '../components/ThemeProvider'

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

// Enhanced structured data for Strahil Peykov
const personalSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Strahil Peykov",
  "alternateName": ["Strahil"],
  "jobTitle": "Full-Stack Developer",
  "description": "Bulgarian Full-Stack Developer based in Eindhoven, Netherlands. BSc Computer Science & Engineering from TU/e. Software Engineer at ASML. Expert in scalable web applications and enterprise software development.",
  "url": "https://strahilpeykov.com",
  "image": "https://strahilpeykov.com/og-image.png",
  "birthPlace": {
    "@type": "Country",
    "name": "Bulgaria"
  },
  "nationality": "Bulgarian",
  "worksFor": {
    "@type": "Organization",
    "name": "ASML Netherlands B.V.",
    "description": "Software Engineer"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Eindhoven University of Technology",
    "description": "BSc Computer Science & Engineering (2021-2025)"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Eindhoven",
    "addressRegion": "North Brabant",
    "addressCountry": "Netherlands"
  },
  "sameAs": [
    "https://github.com/StrahilPeykov",
    "https://linkedin.com/in/strahil-peykov",
    "https://instagram.com/strahil.peykov",
    "https://x.com/WerbenHS",
    "https://tiktok.com/@strahil.peykov",
    "https://letterboxd.com/strahil_peykov"
  ],
  "knowsAbout": [
    "Full-Stack Development",
    "Complex Systems",
    "Artificial Intelligence",
    "React",
    "Next.js",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Machine Learning",
    "Web Development",
    "Software Engineering",
    "Scalable Systems"
    "Django",
    "Spring Boot",
    "ETL Processes",
    "Enterprise Integration",
    "Microsoft Graph API",
    "Azure DevOps",
    "Software Engineering"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full-Stack Developer",
    "occupationLocation": {
      "@type": "City",
      "name": "Eindhoven",
      "addressCountry": "Netherlands"
    },
    "skills": "React, Next.js, Python, TypeScript, Machine Learning, Complex Systems"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Eindhoven Tech Community"
  }
}

// Website/Organization schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Strahil Peykov - Portfolio & Digital Garden",
  "alternateName": "Strahil Peykov",
  "url": "https://strahilpeykov.com",
  "description": "Personal portfolio and digital garden of Strahil Peykov, Full-Stack Developer specializing in complex systems and AI-driven solutions",
  "author": {
    "@type": "Person",
    "name": "Strahil Peykov"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://strahilpeykov.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "sameAs": [
    "https://github.com/StrahilPeykov",
    "https://linkedin.com/in/strahil-peykov"
  ]
}

export const metadata: Metadata = {
  title: {
    default: 'Strahil Peykov - Software Engineer & Full-Stack Developer | TU/e Student',
    template: '%s | Strahil Peykov'
  },
  description: 'Strahil Peykov is a Bulgarian Full-Stack Developer in Eindhoven, Netherlands. BSc Computer Science & Engineering from TU/e (2021-2025). Software Engineer at ASML. Building scalable web applications and digital experiences. Expert in React, Next.js, Python and Django.',  keywords: [
    // Primary branded keywords
    'Strahil Peykov',
    'Strahil',
    'Strahil Peykov developer',
    'Strahil Peykov portfolio',
    
    // Professional keywords
    'Full-Stack Developer',
    'Complex Systems Developer',
    'AI Developer',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'TypeScript Developer',
    
    // Location-based keywords
    'Eindhoven Developer',
    'Netherlands Developer',
    'Bulgarian Developer',
    'Developer Eindhoven',
    'Web Developer Netherlands',
    'Tech Eindhoven',
    
    // Specialization keywords
    'Machine Learning Developer',
    'AI-Driven Solutions',
    'Enterprise Integration',
    'System Integration',
    'Enterprise Applications',
    'Scalable Web Applications',
    'Digital Solutions',
    
    // Technology keywords
    'React',
    'Next.js',
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'Django',
    'Spring Boot',
    'Enterprise Integration',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    
    // Academic/Professional
    'BSc Computer Science',
    'TU/e Student',
    'Eindhoven University of Technology',
    'ASML Intern',
    'Bulgarian Tech Professional',
    'European Developer',
    'Tech Consultant'
  ],
  authors: [{ name: 'Strahil Peykov', url: 'https://strahilpeykov.com' }],
  creator: 'Strahil Peykov',
  publisher: 'Strahil Peykov',
  metadataBase: new URL('https://strahilpeykov.com'),
  alternates: {
    canonical: 'https://strahilpeykov.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://strahilpeykov.com',
    title: 'Strahil Peykov - Full-Stack Developer & Software Engineer',
    description: 'Bulgarian Full-Stack Developer based in Eindhoven, Netherlands. BSc Computer Science & Engineering at TU/e. Software Engineer at ASML.',
    siteName: 'Strahil Peykov Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Strahil Peykov - Full-Stack Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strahil Peykov - Full-Stack Developer',
    description: 'Bulgarian Full-Stack Developer in Eindhoven, Netherlands. BSc Computer Science & Engineering at TU/e. Software Engineer at ASML.',
    images: ['/og-image.png'],
    creator: '@WerbenHS',
    site: '@WerbenHS',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
    ],
    shortcut: '/favicon.ico',
  },
  // Removed: manifest: '/icons/site.webmanifest',
  category: 'Technology',
  classification: 'Software Development Portfolio',
  // Note: Google verification handled via DNS TXT record, not meta tag
  // Add other search engine verifications here if needed
  other: {},
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - JSON-LD */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personalSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Strahil Peykov" />
        <meta name="copyright" content="Strahil Peykov" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Eindhoven" />
        <meta name="geo.position" content="51.4416;5.4697" />
        <meta name="ICBM" content="51.4416, 5.4697" />
        
        {/* Open Graph additional tags */}
        <meta property="og:email" content="strahil.peykov@gmail.com" />
        <meta property="og:phone_number" content="+31644729684" />
        <meta property="og:street-address" content="Eindhoven" />
        <meta property="og:locality" content="Eindhoven" />
        <meta property="og:region" content="North Brabant" />
        <meta property="og:postal-code" content="56XX XX" />
        <meta property="og:country-name" content="Netherlands" />
        
        {/* Additional Twitter Cards */}
        <meta name="twitter:domain" content="strahilpeykov.com" />
        <meta name="twitter:url" content="https://strahilpeykov.com" />
        
        {/* Link tags for SEO */}
        <link rel="canonical" href="https://strahilpeykov.com" />
        <link rel="alternate" type="application/rss+xml" title="Strahil Peykov RSS Feed" href="https://strahilpeykov.com/rss.xml" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        
        {/* Humans.txt reference */}
        <link type="text/plain" rel="author" href="https://strahilpeykov.com/humans.txt" />
      </head>
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        'font-sans antialiased min-h-screen'
      )}>
        <ThemeProvider defaultTheme="dark">
          {/* Skip link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-electric text-midnight px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-electric"
          >
            Skip to main content
          </a>
          
          {/* Main content wrapper with semantic markup */}
          <div id="main-content" role="main">
            {children}
          </div>
          
          {/* Hidden schema markup for additional context */}
          <div style={{ display: 'none' }}>
            <span itemScope itemType="https://schema.org/Person">
              <span itemProp="name">Strahil Peykov</span>
              <span itemProp="jobTitle">Full-Stack Developer</span>
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Eindhoven</span>
                <span itemProp="addressCountry">Netherlands</span>
              </span>
              <span itemProp="alumniOf">BSc Computer Science & Engineering, TU/e</span>
              <span itemProp="nationality">Bulgarian</span>
              <span itemProp="knowsAbout">React</span>
              <span itemProp="knowsAbout">Next.js</span>
              <span itemProp="knowsAbout">Python</span>
              <span itemProp="knowsAbout">AI Development</span>
              <span itemProp="knowsAbout">Enterprise Integration</span>
            </span>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

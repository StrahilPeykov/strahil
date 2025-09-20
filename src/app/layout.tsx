import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '../lib/utils'
import { ThemeProvider } from '../components/ThemeProvider'
import { CookieConsentProvider } from '../components/providers/CookieConsentProvider'
import { CookieBar } from '../components/features/cookies/CookieBar'
import { AnalyticsScripts } from '../components/features/analytics/AnalyticsScripts'

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
  "@id": "https://strahil.dev/#strahil",
  "name": "Strahil Peykov",
  "givenName": "Strahil",
  "familyName": "Peykov",
  "alternateName": ["Strahil", "Strahil P", "S. Peykov"],
  "disambiguatingDescription": "Strahil - Bulgarian Full-Stack Developer and Software Engineer in Amsterdam",
  "description": "Strahil is a Bulgarian Full-Stack Developer based in Amsterdam, Netherlands. Strahil Peykov specializes in building scalable web applications, enterprise software, and innovative digital solutions.",
  "jobTitle": "Full-Stack Developer & Software Engineer",
  "url": "https://strahil.dev",
  "image": [
    "https://strahil.dev/images/strahil-profile.jpg",
    "https://strahil.dev/og-strahil.png"
  ],
  "birthPlace": {
    "@type": "Country",
    "name": "Bulgaria"
  },
  "nationality": "Bulgarian",
  "gender": "Male",
  "worksFor": {
    "@type": "Organization",
    "name": "Picnic",
    "description": "Software Engineer at Picnic"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Eindhoven University of Technology",
    "alternateName": "TU/e",
    "description": "BSc Computer Science & Engineering (2021-2025)"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amsterdam",
    "addressRegion": "North Holland",
    "addressCountry": "Netherlands"
  },
  "email": "strahil.peykov@gmail.com",
  "telephone": "+31644729684",
  "sameAs": [
    "https://github.com/StrahilPeykov",
    "https://linkedin.com/in/strahil-peykov",
    "https://instagram.com/strahil.peykov",
    "https://x.com/StrahilGG",
    "https://tiktok.com/@strahil.peykov",
    "https://letterboxd.com/strahil_peykov",
    "https://strahil.dev/about"
  ],
  "knowsAbout": [
    "Strahil expertise in Full-Stack Development",
    "React and Next.js Development by Strahil",
    "Python Programming",
    "Enterprise Software Engineering",
    "Scalable Web Applications",
    "TypeScript Development",
    "Complex Systems",
    "AI and Machine Learning",
    "Bulgarian Developer Community"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full-Stack Developer",
    "occupationLocation": {
      "@type": "City",
      "name": "Amsterdam",
      "addressCountry": "Netherlands"
    },
    "skills": "React, Next.js, Python, TypeScript, Java, Enterprise Integration, Cloud Computing"
  },
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Eindhoven Tech Community"
    },
    {
      "@type": "Organization", 
      "name": "Bulgarian Developers Network"
    }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Bachelor of Science in Computer Science & Engineering",
    "credentialCategory": "degree",
    "educationalLevel": "Bachelor's Degree",
    "dateCreated": "2025-07"
  }
}

// Website/Organization schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://strahil.dev/#website",
  "name": "Strahil - Full-Stack Developer Portfolio",
  "alternateName": ["Strahil Peykov Portfolio", "Strahil.dev", "Strahil Developer"],
  "url": "https://strahil.dev",
  "description": "Strahil's personal portfolio and digital garden. Discover projects, articles, and insights from Strahil Peykov, a Bulgarian Full-Stack Developer in Amsterdam.",
  "publisher": {
    "@id": "https://strahil.dev/#strahil"
  },
  "author": {
    "@id": "https://strahil.dev/#strahil"
  },
  "inLanguage": "en-US",
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://strahil.dev/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "ReadAction",
      "target": "https://strahil.dev/about"
    }
  ],
  "mainEntity": {
    "@id": "https://strahil.dev/#strahil"
  }
}

// FAQ Schema for common searches about Strahil
const strahilFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Strahil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strahil is a Bulgarian Full-Stack Developer and Software Engineer based in Amsterdam, Netherlands. Strahil Peykov specializes in building scalable web applications and enterprise software solutions."
      }
    },
    {
      "@type": "Question", 
      "name": "What does Strahil do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strahil works as a Software Engineer at Picnic and develops full-stack applications using React, Next.js, Python, and Java. Strahil creates innovative digital solutions and shares knowledge through his blog."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Strahil from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strahil is originally from Bulgaria and currently lives in Amsterdam, Netherlands. Strahil Peykov moved to the Netherlands to study Computer Science at TU/e."
      }
    },
    {
      "@type": "Question",
      "name": "How to contact Strahil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Strahil via email at strahil.peykov@gmail.com or connect on LinkedIn at linkedin.com/in/strahil-peykov. Visit strahil.dev/contact for more ways to reach Strahil."
      }
    }
  ]
}

// BreadcrumbList for better navigation understanding
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strahil",
      "item": "https://strahil.dev"
    }
  ]
}

export const metadata: Metadata = {
  title: {
    default: 'Strahil - Full-Stack Developer & Software Engineer | Strahil Peykov',
    template: '%s | Strahil - Developer Portfolio'
  },
  description: 'Strahil is a Bulgarian Full-Stack Developer in Amsterdam. Discover projects, insights, and expertise from Strahil Peykov - Software Engineer at Picnic, BSc Computer Science from TU/e.',  
  keywords: [
    // Primary branded keywords
    'Strahil',
    'Strahil developer',
    'Strahil programmer',
    'Strahil software engineer',
    'Strahil portfolio',
    'Strahil Amsterdam',
    'Strahil Netherlands',
    'Strahil Bulgarian',
    'Strahil TU/e',
    'Strahil ASML',
    
    // Full name variations
    'Strahil Peykov',
    'Strahil P',
    'S Peykov',
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
    'Amsterdam Developer',
    'Netherlands Developer',
    'Bulgarian Developer',
    'Developer Amsterdam',
    'Web Developer Netherlands',
    'Tech Amsterdam',
    
    // Specialization keywords
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
  authors: [{ name: 'Strahil Peykov', url: 'https://strahil.dev' }],
  creator: 'Strahil Peykov',
  publisher: 'Strahil Peykov',
  metadataBase: new URL('https://strahil.dev'),
  alternates: {
    canonical: 'https://strahil.dev',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://strahil.dev',
    title: 'Strahil - Full-Stack Developer & Software Engineer',
    description: 'Strahil is a Bulgarian Full-Stack Developer creating innovative digital solutions. Explore projects and insights from Strahil Peykov.',
    siteName: 'Strahil Developer Portfolio',
    firstName: 'Strahil',
    lastName: 'Peykov',
    username: 'strahil',
    gender: 'male',
    images: [
      {
        url: '/og-strahil.png',
        width: 1200,
        height: 630,
        alt: 'Strahil - Full-Stack Developer',
        type: 'image/png',
      },
      {
        url: '/images/strahil-profile.jpg',
        width: 800,
        height: 800,
        alt: 'Strahil Peykov',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strahil - Full-Stack Developer',
    description: 'Discover projects and insights from Strahil, a Bulgarian developer building innovative solutions.',
    images: ['/og-strahil.png'],
    creator: '@StrahilGG',
    site: '@StrahilGG',
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
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
    ],
    shortcut: '/icons/favicon-32x32.png',
  },
  category: 'Technology',
  classification: 'Software Development Portfolio',
  other: {
    'google-site-verification': 'your-verification-code-here',
  },
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
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(strahilFAQSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        {/* Additional SEO meta tags optimized for Strahil */}
        <meta name="author" content="Strahil Peykov" />
        <meta name="copyright" content="Strahil Peykov" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Amsterdam" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />

        {/* Open Graph additional tags */}
        <meta property="og:first_name" content="Strahil" />
        <meta property="og:last_name" content="Peykov" />
        <meta property="og:email" content="strahil.peykov@gmail.com" />
        <meta property="og:phone_number" content="+31644729684" />
        <meta property="og:street-address" content="Amsterdam" />
        <meta property="og:locality" content="Amsterdam" />
        <meta property="og:region" content="North Holland" />
        <meta property="og:postal-code" content="56XX XX" />
        <meta property="og:country-name" content="Netherlands" />
        <meta property="profile:first_name" content="Strahil" />
        <meta property="profile:last_name" content="Peykov" />
        <meta property="profile:username" content="strahil" />
        <meta property="profile:gender" content="male" />
        
        {/* Additional Twitter Cards */}
        <meta name="twitter:domain" content="strahil.dev" />
        <meta name="twitter:url" content="https://strahil.dev" />
        <meta name="twitter:image:alt" content="Strahil - Full-Stack Developer" />
        
        {/* Link tags for SEO */}
        <link rel="canonical" href="https://strahil.dev" />
        <link rel="alternate" type="application/rss+xml" title="Strahil Developer Blog RSS Feed" href="https://strahil.dev/rss.xml" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        
        {/* Humans.txt reference */}
        <link type="text/plain" rel="author" href="https://strahil.dev/humans.txt" />
      </head>
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        'font-sans antialiased min-h-screen bg-bg text-ink'
      )}>
        <CookieConsentProvider>
          <ThemeProvider defaultTheme="dark">
            {/* Skip link for accessibility */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-glow text-bg px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-glow"
            >
              Skip to main content
            </a>
            
            {/* Main content wrapper with semantic markup */}
            <div id="main-content" role="main">
              {children}
            </div>
            
            {/* Cookie consent bar */}
            <CookieBar />
            
            {/* Analytics scripts - only load after consent */}
            <AnalyticsScripts />
            
            {/* Hidden schema markup for additional context */}
            <div style={{ display: 'none' }}>
              <h1>Strahil</h1>
              <h2>Strahil Peykov</h2>
              <span itemScope itemType="https://schema.org/Person">
                <span itemProp="givenName">Strahil</span>
                <span itemProp="familyName">Peykov</span>
                <span itemProp="name">Strahil Peykov</span>
                <span itemProp="alternateName">Strahil</span>
                <span itemProp="jobTitle">Full-Stack Developer</span>
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Amsterdam</span>
                  <span itemProp="addressCountry">Netherlands</span>
                </span>
                <span itemProp="email">strahil.peykov@gmail.com</span>
                <span itemProp="alumniOf">Eindhoven University of Technology</span>
                <span itemProp="nationality">Bulgarian</span>
                <span itemProp="worksFor">Picnic</span>
                <span itemProp="knowsAbout">React</span>
                <span itemProp="knowsAbout">Next.js</span>
                <span itemProp="knowsAbout">Python</span>
                <span itemProp="knowsAbout">Full-Stack Development</span>
                <span itemProp="knowsAbout">Software Engineering</span>
                <meta itemProp="url" content="https://strahil.dev" />
                <meta itemProp="image" content="https://strahil.dev/images/strahil-profile.jpg" />
              </span>
              <p>Strahil is a talented developer from Bulgaria living in Amsterdam.</p>
              <p>Contact Strahil for web development projects.</p>
              <p>Strahil Peykov - Full-Stack Developer and Software Engineer</p>
            </div>
          </ThemeProvider>
        </CookieConsentProvider>
      </body>
    </html>
  )
}

import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

// Optimized metadata specifically for "Strahil" searches
export const metadata: Metadata = {
  title: 'Strahil - Full-Stack Developer & Software Engineer',
  description: 'Strahil is a Bulgarian Full-Stack Developer in Amsterdam. Learn about Strahil, view projects by Strahil, and contact Strahil for your next project.',
  keywords: [
    'Strahil',
    'Strahil developer',
    'Strahil programmer',
    'Strahil portfolio',
    'Strahil software engineer',
    'Who is Strahil',
    'Strahil Peykov',
    'Contact Strahil',
    'Hire Strahil',
    'Strahil projects'
  ],
  alternates: {
    canonical: 'https://strahil.dev'
  },
  openGraph: {
    title: 'Strahil - Full-Stack Developer',
    description: 'Discover Strahil, a talented developer from Bulgaria creating innovative digital solutions.',
    url: 'https://strahil.dev/strahil',
    type: 'profile',
    images: [
      {
        url: '/og-strahil-main.png',
        width: 1200,
        height: 630,
        alt: 'Strahil - Full-Stack Developer',
      }
    ],
  }
}

export default function StrahilPage() {
  // This page exists purely for SEO purposes
  // It immediately redirects to the homepage
  redirect('/')
  
  // This won't render due to redirect, but helps with SEO
  return (
    <div>
      <h1>Strahil - Full-Stack Developer</h1>
      <p>Strahil is a talented developer from Bulgaria. This page redirects to Strahil's main portfolio.</p>
      <p>Learn more about Strahil Peykov and his work in software development.</p>
    </div>
  )
}
import type { Metadata } from 'next'
import { generateMetadata } from '../../lib/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Learn',
  description: 'Courses and learning resources by Strahil Peykov.',
  canonicalUrl: 'https://strahil.dev/courses',
  noIndex: true,
})

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children
}


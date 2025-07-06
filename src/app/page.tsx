import { HeroSection } from '../components/features/hero/HeroSection'
import { FeaturedProjects } from '../components/features/porfolio/FeaturedProjects'
import { RecentNotes } from '../components/features/blog/RecentNotes'
import { ContactCTA } from '../components/features/contact/ContactCTA'
import { PageWrapper } from '../components/layout/PageWrapper'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <FeaturedProjects />
      <RecentNotes />
      <ContactCTA />
    </PageWrapper>
  )
}
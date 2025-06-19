import { HeroSection } from '../components/features/hero/HeroSection'
import { FeaturedWork } from '../components/features/porfolio/FeaturedWork'
import { RecentIdeas } from '../components/features/ideas/RecentIdeas'
import { ContactCTA } from '../components/features/contact/ContactCTA'
import { PageWrapper } from '../components/layout/PageWrapper'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <FeaturedWork />
      <RecentIdeas />
      <ContactCTA />
    </PageWrapper>
  )
}
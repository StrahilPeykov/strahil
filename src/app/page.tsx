import { HeroSection } from '../components/features/hero/HeroSection'
import { FeaturedProjects } from '../components/features/porfolio/FeaturedProjects'
import { RecentArticles } from '../components/features/blog/RecentArticles'
import { ContactCTA } from '../components/features/contact/ContactCTA'
import { PageWrapper } from '../components/layout/PageWrapper'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <FeaturedProjects />
      <RecentArticles />
      <ContactCTA />
    </PageWrapper>
  )
}
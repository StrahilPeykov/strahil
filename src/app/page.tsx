import { HeroSection } from '../components/features/hero/HeroSection'
import { FeaturedProjects } from '../components/features/porfolio/FeaturedProjects'
import { RecentArticles } from '../components/features/blog/RecentArticles'
import { ContactCTA } from '../components/features/contact/ContactCTA'
import { PageWrapper } from '../components/layout/PageWrapper'
import { getBlogListItems } from '../lib/content'

export default async function HomePage() {
  const recentArticles = (await getBlogListItems()).slice(0, 3)

  return (
    <PageWrapper>
      <HeroSection />
      <FeaturedProjects />
      <RecentArticles articles={recentArticles} />
      <ContactCTA />
    </PageWrapper>
  )
}

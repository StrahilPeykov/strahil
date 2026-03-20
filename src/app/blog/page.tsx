import { BlogPageClient } from '../../components/features/blog/BlogPageClient'
import { getBlogListItems } from '../../lib/content'

export default async function BlogPage() {
  const articles = await getBlogListItems()
  return <BlogPageClient initialArticles={articles} />
}

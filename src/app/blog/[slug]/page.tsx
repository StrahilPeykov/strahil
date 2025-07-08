import { notFound } from 'next/navigation'
import { ContentTemplate } from '../../../components/templates/ContentTemplate'
import { getBlogPost } from '../../../lib/content'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Strahil Peykov'],
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  const { getAllBlogPosts } = await import('../../../lib/content')
  const posts = await getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  // Use the new unified ContentTemplate
  return <ContentTemplate content={post} />
}
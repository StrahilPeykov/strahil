'use client'

import { motion } from 'framer-motion'
import { PenTool, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { ContentListItem } from '../../../lib/content'

interface ArticleCardProps {
  article: ContentListItem
  index: number
}

function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${article.slug}`}>
        <div className="relative p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer overflow-hidden border border-outline bg-bg-soft/60">
          
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                {article.excerpt}
              </p>
              <p className="text-sm text-gray-600">
                {article.date} · {article.readTime}
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1 mt-1 flex-shrink-0" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

interface RecentArticlesProps {
  articles: ContentListItem[]
}

export function RecentArticles({ articles }: RecentArticlesProps) {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <PenTool className="w-6 h-6 text-pink-400" />
            <span className="text-pink-400 font-mono text-sm">Recent Writing</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            Articles & Thoughts
          </h2>
          
          <p className="text-gray-400 text-lg mb-16 max-w-2xl">
            Exploring the intersection of technology, design, and complex systems
          </p>
          
          {articles.length > 0 ? (
            <div className="grid gap-1">
              {articles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found.</p>
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              View all articles
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { IdeaPost } from '../../../data/notes'

interface IdeaCardProps {
  idea: IdeaPost
  index: number
}

export function IdeaCard({ idea, index }: IdeaCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={idea.url}>
        <div className="relative p-6 rounded-lg hover:bg-slate-900/30 transition-all cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                {idea.excerpt}
              </p>
              <p className="text-sm text-gray-600">
                {idea.date} · {idea.readTime} read
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 mt-1 flex-shrink-0" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
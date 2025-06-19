'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { IdeaCard } from './IdeaCard'
import { featuredIdeas } from '../../../data/ideas'

export function RecentIdeas() {
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
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-mono text-sm">Recent Thoughts</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            Ideas & Writing
          </h2>
          
          <p className="text-gray-400 text-lg mb-16 max-w-2xl">
            Exploring the intersection of technology, design, and complex systems
          </p>
          
          <div className="grid gap-1">
            {featuredIdeas.map((idea, i) => (
              <IdeaCard key={idea.id} idea={idea} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
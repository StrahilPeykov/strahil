'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Search, Youtube, Sparkles, Clock, Users, Code2, Zap, CheckCircle, Construction } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../components/layout/PageWrapper'
import { Badge } from '../../../components/ui/Badge'
import { useState } from 'react'

export default function YouTubeTranscriptSearchPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  
  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 3000)
  }
  
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-pink-500/5 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to tools
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="w-10 h-10 text-red-400" />
              <Badge variant="warning">In Development</Badge>
              <Badge variant="blue">Coming Soon</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              YouTube Transcript
              <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Search Engine
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Search through any YouTube channel's entire content library like a database. 
              Find specific topics, quotes, or discussions across thousands of hours of video instantly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <Sparkles className="w-5 h-5" />
                Join the Waitlist
              </button>
              
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-500/30 text-red-400 font-semibold rounded-full hover:bg-red-500/10 hover:border-red-500/50 transition-all"
              >
                View Other Tools
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
              Why This Tool Matters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                <h3 className="text-xl font-semibold text-white mb-4">The Problem</h3>
                <p className="text-gray-400 mb-4">
                  YouTube creators produce thousands of hours of valuable content, but finding 
                  specific information is nearly impossible. YouTube's search only shows video 
                  titles, not what's actually said inside them.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">×</span>
                    Can't search within videos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">×</span>
                    No way to find specific quotes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">×</span>
                    Hours wasted scrubbing through videos
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl p-8 border border-red-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
                <p className="text-gray-300 mb-4">
                  A powerful search engine that indexes every word spoken in a channel's videos. 
                  Find exactly what you're looking for in seconds, with direct timestamps to 
                  jump to the relevant part.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Full-text search across all videos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Direct timestamp navigation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Export search results for research
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Planned Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
              Planned Features
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-red-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Smart Search</h4>
                <p className="text-gray-400 text-sm">
                  Advanced search with filters for date ranges, video length, and semantic similarity
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">API Access</h4>
                <p className="text-gray-400 text-sm">
                  Developer API for building custom applications and integrations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Team Features</h4>
                <p className="text-gray-400 text-sm">
                  Collaborate with your team, share searches, and build knowledge bases
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Development Status */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Construction className="w-8 h-8 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Development Status</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    This tool is currently under active development. Here's what's been completed 
                    and what's still in progress:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>YouTube API integration for fetching video metadata</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Transcript extraction and processing pipeline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>Building Elasticsearch index for fast searching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>Frontend search interface with timestamp navigation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>User authentication and channel management</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mt-4">
                    Expected launch: Q2 2025 • Follow progress on{' '}
                    <a href="https://github.com/StrahilPeykov" target="_blank" rel="noopener noreferrer" 
                       className="text-red-400 hover:text-red-300 underline">
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Code2 className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h3 className="text-2xl font-display font-bold text-white mb-8">
            Built with Modern Tech
          </h3>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="purple" size="md">Next.js</Badge>
            <Badge variant="blue" size="md">Python</Badge>
            <Badge variant="green" size="md">Elasticsearch</Badge>
            <Badge variant="cyan" size="md">YouTube API</Badge>
            <Badge variant="pink" size="md">FastAPI</Badge>
            <Badge variant="warning" size="md">PostgreSQL</Badge>
          </div>
        </div>
      </section>
      
      {/* Waitlist Form */}
      <section id="waitlist-form" className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-red-500/20 text-center"
          >
            <Sparkles className="w-12 h-12 text-red-400 mx-auto mb-6" />
            
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Join the Early Access List
            </h2>
            
            <p className="text-gray-400 mb-8">
              Be among the first to use the YouTube Transcript Search engine. 
              Early users will get lifetime discounts and exclusive features.
            </p>
            
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
              />
              
              <button
                type="submit"
                disabled={subscribed}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
              >
                {subscribed ? 'Added!' : 'Join Waitlist'}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              No spam, just updates about the tool launch. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
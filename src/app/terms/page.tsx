'use client'

import { motion } from 'framer-motion'
import { ScrollText, AlertCircle, Code, BookOpen, Mail, Ban, Scale, Globe } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <PageWrapper>
      <section className="relative min-h-screen px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-12 text-center">
              <ScrollText className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Terms of Use
              </h1>
              <p className="text-gray-400">Last updated: January 2025</p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
                <p className="text-blue-300 text-sm mb-0">
                  By accessing and using strahil.dev, you agree to these Terms of Use. 
                  This is a personal portfolio website showcasing my work and projects.
                </p>
              </div>

              <div className="space-y-8">
                {/* Website usage */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    Website Usage
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>This website is provided for informational purposes. You may:</p>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      <li>View and read the content</li>
                      <li>Use the tools and experiments for personal use</li>
                      <li>Contact me through the provided forms</li>
                      <li>Share links to the content</li>
                    </ul>
                  </div>
                </section>

                {/* Tools and experiments */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    Tools & Experiments
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-3">
                      <p className="text-yellow-300 text-sm flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>
                          All tools, experiments, and code examples are provided "AS IS" without any warranties. 
                          Use at your own risk.
                        </span>
                      </p>
                    </div>
                    
                    <p>When using tools like the YouTube Transcript Search:</p>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      <li>Respect third-party content rights</li>
                      <li>Follow the terms of service of integrated platforms</li>
                      <li>Do not use for commercial purposes without permission</li>
                      <li>No guarantee of availability or accuracy</li>
                    </ul>
                  </div>
                </section>

                {/* Intellectual property */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    Intellectual Property
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      Unless otherwise stated:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      <li>Original content, code, and designs are © 2025 Strahil Peykov</li>
                      <li>Open source projects are licensed under their respective licenses</li>
                      <li>Third-party libraries and resources retain their original licenses</li>
                    </ul>
                    <p className="mt-3">
                      You may share and reference my content with proper attribution. For commercial use, 
                      please contact me first.
                    </p>
                  </div>
                </section>

                {/* Disclaimers */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    Disclaimers
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">No Professional Advice</h3>
                      <p className="text-sm">
                        Content on this website is for informational purposes only. It does not constitute 
                        professional advice (legal, financial, technical, or otherwise).
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">External Links</h3>
                      <p className="text-sm">
                        This website may contain links to external sites. I am not responsible for the 
                        content or practices of these external websites.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">Opinions</h3>
                      <p className="text-sm">
                        Blog posts and articles reflect my personal opinions and do not represent the 
                        views of my employer or clients.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Prohibited uses */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Ban className="w-5 h-5 text-red-400" />
                    Prohibited Uses
                  </h2>
                  <div className="text-gray-300">
                    <p className="mb-3">You may not:</p>
                    <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                      <li>Use the website for illegal purposes</li>
                      <li>Attempt to hack, damage, or disrupt the website</li>
                      <li>Scrape content without permission</li>
                      <li>Impersonate me or misrepresent affiliation</li>
                      <li>Use automated systems to spam the contact forms</li>
                      <li>Remove copyright notices or attributions</li>
                    </ul>
                  </div>
                </section>

                {/* Limitation of liability */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-pink-400" />
                    Limitation of Liability
                  </h2>
                  <div className="text-gray-300 text-sm">
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, I SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                      INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR 
                      REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, 
                      GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE WEBSITE.
                    </p>
                  </div>
                </section>

                {/* Privacy */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    Privacy
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      Your use of this website is also governed by our{' '}
                      <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                        Privacy Policy
                      </Link>, which explains how we collect and use your information.
                    </p>
                  </div>
                </section>

                {/* Changes */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Changes to Terms
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      I may update these terms from time to time. Continued use of the website after 
                      changes constitutes acceptance of the new terms.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Contact
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      For questions about these terms, contact:{' '}
                      <a href="mailto:strahil.peykov@gmail.com" className="text-blue-400 hover:text-blue-300">
                        strahil.peykov@gmail.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Governing law */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Governing Law
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      These terms are governed by the laws of the Netherlands. Any disputes shall be 
                      resolved in the courts of the Netherlands.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Back to home */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
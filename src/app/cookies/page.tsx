'use client'

import { motion } from 'framer-motion'
import { Cookie, Info, Settings, Shield, BarChart, MessageSquare, Clock, ExternalLink } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import Link from 'next/link'

export default function CookiesPage() {
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
              <Cookie className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Cookie Policy
              </h1>
              <p className="text-gray-400">Last updated: January 2025</p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 mb-8">
                <p className="text-orange-300 text-sm mb-0 flex items-start gap-2">
                  <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    This website uses cookies to enhance your experience. By continuing to browse, 
                    you consent to the use of essential cookies. For non-essential cookies, we'll ask for your consent.
                  </span>
                </p>
              </div>

              <div className="space-y-8">
                {/* What are cookies */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-400" />
                    What Are Cookies?
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      Cookies are small text files stored on your device when you visit a website. 
                      They help the website remember your preferences and improve your experience.
                    </p>
                    <p>
                      Cookies can be:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                      <li><strong>Persistent cookies:</strong> Remain on your device for a set period</li>
                      <li><strong>First-party cookies:</strong> Set by this website</li>
                      <li><strong>Third-party cookies:</strong> Set by external services</li>
                    </ul>
                  </div>
                </section>

                {/* Essential cookies */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    Essential Cookies (Always Active)
                  </h2>
                  <div className="text-gray-300">
                    <p className="mb-4">
                      These cookies are necessary for the website to function properly. They cannot be disabled.
                    </p>
                    
                    <div className="bg-slate-800/50 rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-700">
                            <th className="text-left p-3 text-gray-400">Cookie Name</th>
                            <th className="text-left p-3 text-gray-400">Purpose</th>
                            <th className="text-left p-3 text-gray-400">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-700/50">
                            <td className="p-3 font-mono text-xs">theme_preference</td>
                            <td className="p-3">Remembers your theme choice</td>
                            <td className="p-3">1 year</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-mono text-xs">cookie_consent</td>
                            <td className="p-3">Stores your cookie preferences</td>
                            <td className="p-3">1 year</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Analytics cookies */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-purple-400" />
                    Analytics Cookies (Optional)
                  </h2>
                  <div className="text-gray-300">
                    <p className="mb-4">
                      These cookies help us understand how visitors use the website. All data is anonymized.
                    </p>
                    
                    <div className="bg-slate-800/50 rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-700">
                            <th className="text-left p-3 text-gray-400">Service</th>
                            <th className="text-left p-3 text-gray-400">Purpose</th>
                            <th className="text-left p-3 text-gray-400">Data Collected</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3">
                              <span className="flex items-center gap-1">
                                Analytics Provider
                                <ExternalLink className="w-3 h-3 text-gray-500" />
                              </span>
                            </td>
                            <td className="p-3">Website usage statistics</td>
                            <td className="p-3">Page views, visit duration, device info</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                      <p className="text-sm text-purple-300">
                        ⚡ Currently, this website does not use analytics cookies. If we add them in the future, 
                        we'll ask for your consent first.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Third-party cookies */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-pink-400" />
                    Third-Party Services
                  </h2>
                  <div className="text-gray-300">
                    <p className="mb-3">
                      Some features may use third-party services that set their own cookies:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                      <li>Embedded content (YouTube videos, social media posts)</li>
                      <li>External tools and integrations</li>
                      <li>CDN services for faster loading</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-400">
                      These services have their own privacy policies and cookie practices.
                    </p>
                  </div>
                </section>

                {/* Managing cookies */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-yellow-400" />
                    Managing Your Cookie Preferences
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>You can control cookies through:</p>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <h3 className="font-medium text-white mb-1">Cookie Banner</h3>
                        <p className="text-sm">
                          When you first visit, you can accept or reject non-essential cookies. 
                          You can change your preferences anytime by clicking "Cookie Settings" in the footer.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <h3 className="font-medium text-white mb-1">Browser Settings</h3>
                        <p className="text-sm mb-2">
                          Most browsers allow you to block or delete cookies. Here's how:
                        </p>
                        <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Chrome</a></li>
                          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Firefox</a></li>
                          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Safari</a></li>
                          <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Edge</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <p className="text-sm text-yellow-300">
                        ⚠️ Note: Blocking all cookies may affect website functionality.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Updates */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    Updates to This Policy
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      We may update this cookie policy to reflect changes in our practices or for legal reasons. 
                      Check this page periodically for updates.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Questions?
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      For questions about our use of cookies, contact:{' '}
                      <a href="mailto:strahil.peykov@gmail.com" className="text-blue-400 hover:text-blue-300">
                        strahil.peykov@gmail.com
                      </a>
                    </p>
                    <p className="mt-3">
                      For more about how we handle your data, see our{' '}
                      <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                        Privacy Policy
                      </Link>.
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
'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, Cookie, Database, Lock, Users, Calendar, Globe } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import Link from 'next/link'

export default function PrivacyPage() {
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
              <Shield className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-400">Last updated: July 2025</p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="bg-bg-soft/80 backdrop-blur-sm border border-outline rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-white" />
                  Data Controller
                </h2>
                <p className="text-gray-300">
                  Strahil Peykov<br />
                  Amsterdam, Netherlands<br />
                  Email: <a href="mailto:strahil.peykov@gmail.com" className="text-white hover:text-white">strahil.peykov@gmail.com</a>
                </p>
              </div>

              <div className="space-y-8">
                {/* What data we collect */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-white" />
                    What Data We Collect
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <div>
                      <h3 className="font-medium text-white mb-1">Contact Form</h3>
                      <p>When you use our contact form, we collect:</p>
                      <ul className="list-disc list-inside ml-4 mt-2 text-sm">
                        <li>Your name</li>
                        <li>Email address</li>
                        <li>Company name (optional)</li>
                        <li>Message content</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-white mb-1">Newsletter</h3>
                      <p>If you subscribe to our newsletter, we collect:</p>
                      <ul className="list-disc list-inside ml-4 mt-2 text-sm">
                        <li>Email address</li>
                        <li>Subscription preferences</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-white mb-1">Analytics (Optional)</h3>
                      <p>If analytics cookies are accepted, we may collect:</p>
                      <ul className="list-disc list-inside ml-4 mt-2 text-sm">
                        <li>Anonymous usage statistics</li>
                        <li>Page views and navigation patterns</li>
                        <li>Device and browser information</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal basis */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-white" />
                    Legal Basis for Processing
                  </h2>
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Contact inquiries:</strong> Legitimate interest (responding to your questions)</p>
                    <p><strong>Newsletter:</strong> Explicit consent (you opt-in)</p>
                    <p><strong>Analytics:</strong> Consent through cookie banner</p>
                  </div>
                </section>

                {/* Data retention */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-white" />
                    How Long We Keep Your Data
                  </h2>
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Contact form messages:</strong> 1 year</p>
                    <p><strong>Newsletter subscriptions:</strong> Until you unsubscribe</p>
                    <p><strong>Analytics data:</strong> 26 months</p>
                  </div>
                </section>

                {/* Your rights */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-pink-400" />
                    Your Rights Under GDPR
                  </h2>
                  <div className="text-gray-300">
                    <p className="mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li><strong>Access:</strong> Request a copy of your personal data</li>
                      <li><strong>Rectification:</strong> Correct inaccurate data</li>
                      <li><strong>Erasure:</strong> Request deletion of your data</li>
                      <li><strong>Portability:</strong> Receive your data in a portable format</li>
                      <li><strong>Object:</strong> Object to certain processing</li>
                      <li><strong>Withdraw consent:</strong> Withdraw consent at any time</li>
                    </ul>
                    <p className="mt-3">
                      To exercise these rights, email: <a href="mailto:strahil.peykov@gmail.com" className="text-blue-400 hover:text-blue-300">strahil.peykov@gmail.com</a>
                    </p>
                  </div>
                </section>

                {/* Data sharing */}
                <section className="bg-slate-900/30 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-yellow-400" />
                    Data Sharing & Third Parties
                  </h2>
                  <div className="text-gray-300 space-y-2">
                    <p>We may share data with:</p>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      <li><strong>Hosting providers:</strong> Vercel/Netlify (website hosting)</li>
                      <li><strong>Email services:</strong> For newsletter delivery</li>
                      <li><strong>Analytics:</strong> If you consent to analytics cookies</li>
                    </ul>
                    <p className="mt-3">We never sell your personal data.</p>
                  </div>
                </section>

                {/* Newsletter Details */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-white" />
                    Newsletter Subscription
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>If you subscribe to our newsletter:</p>
                    <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                      <li><strong>Frequency:</strong> Weekly updates (maximum)</li>
                      <li><strong>Content:</strong> Tech insights, new articles, and project updates</li>
                      <li><strong>Unsubscribe:</strong> One-click unsubscribe link in every email</li>
                      <li><strong>No sharing:</strong> Your email is never shared with third parties</li>
                    </ul>
                    <p className="text-sm mt-3">
                      To unsubscribe, click the link at the bottom of any newsletter or email{' '}
                      <a href="mailto:strahil.peykov@gmail.com" className="text-white hover:text-white">
                        strahil.peykov@gmail.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Security */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-white" />
                    Security Measures
                  </h2>
                  <div className="text-gray-300">
                    <p>We protect your data through:</p>
                    <ul className="list-disc list-inside ml-4 text-sm mt-2">
                      <li>HTTPS encryption for all data transmission</li>
                      <li>Secure hosting infrastructure</li>
                      <li>Regular security updates</li>
                      <li>Limited access to personal data</li>
                    </ul>
                  </div>
                </section>

                {/* Cookies */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Cookie className="w-5 h-5 text-white" />
                    Cookies
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      For detailed information about cookies, please see our{' '}
                      <Link href="/cookies" className="text-white hover:text-white">
                        Cookie Policy
                      </Link>.
                    </p>
                  </div>
                </section>

                {/* Contact & complaints */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Questions & Complaints
                  </h2>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      For privacy questions or to exercise your rights, contact:{' '}
                      <a href="mailto:strahil.peykov@gmail.com" className="text-white hover:text-white">
                        strahil.peykov@gmail.com
                      </a>
                    </p>
                    <p>
                      If you're not satisfied with our response, you can lodge a complaint with the Dutch Data Protection Authority 
                      (Autoriteit Persoonsgegevens) at{' '}
                      <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                        autoriteitpersoonsgegevens.nl
                      </a>.
                    </p>
                  </div>
                </section>

                {/* Updates */}
                <section className="bg-bg-soft/60 rounded-xl p-6 border border-outline">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Policy Updates
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      We may update this privacy policy from time to time. Any changes will be posted on this page 
                      with an updated revision date.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Back to home */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white hover:text-white transition-colors"
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

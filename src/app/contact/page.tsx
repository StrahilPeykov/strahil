// src/app/contact/page.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare, Calendar, Linkedin, Github, Twitter, Instagram, ExternalLink } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { ContactForm } from '../../components/features/contact/ContactForm'
import { useState } from 'react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'strahil.peykov@gmail.com',
    href: 'mailto:strahil.peykov@gmail.com',
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.1
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+31 6 4472 9684',
    href: 'tel:+31644729684',
    color: 'text-green-400',
    gradient: 'from-green-500 to-teal-500',
    delay: 0.2
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Amsterdam, Netherlands',
    href: 'https://maps.google.com/?q=Amsterdam,Netherlands',
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.3
  },
  {
    icon: Clock,
    label: 'Time Zone',
    value: 'CET (UTC+1)',
    href: null,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-orange-500',
    delay: 0.4
  },
  {
    icon: Globe,
    label: 'Languages',
    value: 'English, Bulgarian, Dutch',
    href: null,
    color: 'text-yellow-400',
    gradient: 'from-yellow-500 to-orange-500',
    delay: 0.5
  }
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/strahil-peykov', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/StrahilPeykov', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/StrahilGG', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/strahil.peykov', label: 'Instagram' }
]

const faqs = [
  {
    question: "What's your availability for new projects?",
    answer: "I'm currently accepting new projects starting from next month. Let's discuss your timeline!"
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients globally and am comfortable with remote collaboration across time zones."
  },
  {
    question: "What's your typical response time?",
    answer: "I usually respond within 24 hours on business days. For urgent matters, please mention it in your message."
  },
  {
    question: "Do you offer consultations?",
    answer: "Yes, I offer free 30-minute consultations to discuss your project needs and how I can help."
  }
]

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
          
          {/* Animated connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 800}
                cy={Math.random() * 600}
                r="2"
                fill="url(#gradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <MessageSquare className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold leading-none text-white mb-6"
          >
            Let's Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can work together 
            to bring your ideas to life.
          </motion.p>
        </div>
      </section>
      
      {/* Contact Methods */}
      <section className="px-6 py-16 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon
              const Component = method.href ? Link : 'div'
              
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: method.delay }}
                  className="h-full"
                >
                  <Component
                    href={method.href || '#'}
                    className="group block h-full"
                    target={method.href?.startsWith('http') ? '_blank' : undefined}
                    rel={method.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="relative p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                      
                      <Icon className={`w-8 h-8 ${method.color} mb-3 flex-shrink-0`} />
                      <h3 className="text-sm text-gray-500 mb-1 flex-shrink-0">{method.label}</h3>
                      <p className="text-white font-medium text-sm leading-relaxed break-normal">{method.value}</p>
                    </div>
                  </Component>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">
                Send me a message
              </h2>
              
              <ContactForm />
            </motion.div>
            
            {/* FAQ & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Quick Connect */}
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  Quick Connect
                </h3>
                
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        aria-label={social.label}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                        <div className="relative w-12 h-12 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center hover:border-purple-500/50 transition-all">
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
              
              {/* Schedule Meeting */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                  <Calendar className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Prefer a quick call?
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Book a free 30-minute consultation to discuss your project.
                  </p>
                  <Link
                    href="mailto:strahil.peykov@gmail.com?subject=Consultation Request"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Schedule a meeting
                    <Calendar className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  Frequently Asked
                </h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="border-b border-slate-800 pb-4 last:border-0"
                    >
                      <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
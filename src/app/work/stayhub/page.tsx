'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Hotel, Search, Calendar, DollarSign, BarChart3, Users, Zap, Database } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../components/layout/PageWrapper'
import { Badge } from '../../../components/ui/Badge'

export default function StayHubPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Hotel className="w-8 h-8 text-blue-400" />
              <Badge variant="blue">Personal Project</Badge>
              <Badge variant="success">Live Demo</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              StayHub
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Modern Hospitality Management Platform with microservices architecture, 
              real-time availability, and A/B testing capabilities
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://stayhub.strahil.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href="https://github.com/StrahilPeykov/stayhub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
              >
                <Github className="w-5 h-5" />
                View Source
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400">
                StayHub is a comprehensive hospitality management platform built with microservices 
                architecture, demonstrating modern full-stack development practices and scalable system 
                design. It features end-to-end booking management, advanced search capabilities, and 
                data-driven optimization through A/B testing - designed as a realistic demonstration 
                platform for the travel industry.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Search className="w-5 h-5 text-blue-400" />
                    Advanced Search
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Elasticsearch-powered search with faceted filtering, autocomplete, and 
                    relevance scoring for optimal property discovery.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    Real-time Availability
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Dynamic availability management with instant updates, preventing double 
                    bookings and optimizing occupancy rates.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    A/B Testing Framework
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Built-in experimentation platform for conversion optimization with 
                    statistical significance testing.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                    Dynamic Pricing
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Intelligent pricing engine that adjusts rates based on demand, seasonality, 
                    and competitor analysis.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Architecture</h2>
              <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
                <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
┌─────────────────┐     ┌─────────────────┐
│   Next.js UI    │     │  GraphQL Layer  │
└────────┬────────┘     └────────┬────────┘
         │                       │
    ┌────┴───────────────────────┴────┐
    │      Spring Cloud Gateway       │
    └────┬───────┬────────┬──────┬────┘
         │       │        │      │
    ┌────┴───┐ ┌─┴────┐ ┌┴───┐ ┌┴────────┐
    │Property│ │Book  │ │User│ │Analytics │
    │Service │ │Service│ │Svc │ │ Engine   │
    └────┬───┘ └──┬───┘ └─┬──┘ └────┬────┘
         │        │       │          │
    ┌────┴────────┴───────┴─────────┴────┐
    │         PostgreSQL + Redis         │
    └────────────────────────────────────┘
                </pre>
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">Microservices Breakdown</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">Property Service:</strong> Manages property listings, 
                      amenities, and media assets with CDN integration
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">Booking Service:</strong> Handles reservations, 
                      availability checking, and payment processing
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">User Service:</strong> Authentication, authorization, 
                      and user profile management with JWT tokens
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">Search Service:</strong> Elasticsearch integration 
                      for advanced property search and filtering
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong className="text-white">Analytics Engine (Perl):</strong> High-performance 
                      data processing for A/B testing and conversion tracking
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Technical Highlights</h2>
              <div className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Performance Optimization</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Sub-200ms response times under load</li>
                    <li>• Horizontal scaling supporting 1000+ concurrent users</li>
                    <li>• Redis caching layer with intelligent invalidation</li>
                    <li>• CDN integration for static assets</li>
                    <li>• Database query optimization with proper indexing</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Testing Strategy</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Comprehensive unit tests with JUnit 5</li>
                    <li>• Integration testing with Testcontainers</li>
                    <li>• Load testing with performance benchmarks</li>
                    <li>• E2E testing for critical user flows</li>
                    <li>• Automated CI/CD pipeline with quality gates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-gray-500">Role</dt>
                  <dd className="text-white font-medium">Full-Stack Developer & Architect</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Context</dt>
                  <dd className="text-white font-medium">Portfolio Demonstration</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Timeline</dt>
                  <dd className="text-white font-medium">Jun 2025 - Present</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Status</dt>
                  <dd className="text-white font-medium">Active Development</dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="blue">Java 21</Badge>
                    <Badge variant="blue">Spring Boot 3</Badge>
                    <Badge variant="blue">PostgreSQL</Badge>
                    <Badge variant="blue">Redis</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="purple">Next.js 15</Badge>
                    <Badge variant="purple">TypeScript</Badge>
                    <Badge variant="purple">Tailwind CSS</Badge>
                    <Badge variant="purple">GraphQL</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="green">Docker</Badge>
                    <Badge variant="green">Kubernetes</Badge>
                    <Badge variant="green">Prometheus</Badge>
                    <Badge variant="green">Grafana</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">&lt;200ms</div>
                    <div className="text-sm text-gray-500">Response Time</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-sm text-gray-500">Concurrent Users</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">5</div>
                    <div className="text-sm text-gray-500">Microservices</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Live Demo</h3>
              <p className="text-sm text-gray-300 mb-4">
                Experience the full platform with sample data. Create bookings, search properties, 
                and explore the admin dashboard.
              </p>
              <a
                href="https://stayhub.strahil.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Try the demo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
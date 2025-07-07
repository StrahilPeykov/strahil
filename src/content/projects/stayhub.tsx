import { Hotel, Search, Calendar, DollarSign, BarChart3, Users, Zap, Database } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import type { ProjectData } from '../../components/templates/ProjectTemplate'

const projectData: ProjectData = {
  title: 'StayHub',
  tagline: 'Modern Hospitality Management Platform with microservices architecture, real-time availability, and A/B testing capabilities',
  description: 'Comprehensive hospitality management platform built with microservices architecture, demonstrating modern full-stack development practices and scalable system design.',
  icon: Hotel,
  badges: [
    { variant: 'blue' as const, label: 'Personal Project' },
    { variant: 'success' as const, label: 'Live Demo' }
  ],
  links: {
    demo: 'https://stayhub.strahil.dev',
    github: 'https://github.com/StrahilPeykov/stayhub',
    live: 'https://stayhub.strahil.dev'
  },
  details: {
    role: 'Full-Stack Developer & Architect',
    context: 'Portfolio Demonstration',
    timeline: 'Jun 2025 - Present',
    status: 'Active Development'
  },
  techStack: {
    categories: [
      {
        name: 'Backend',
        technologies: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Redis', 'Elasticsearch']
      },
      {
        name: 'Frontend',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'GraphQL']
      },
      {
        name: 'Infrastructure',
        technologies: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana']
      }
    ]
  },
  metrics: [
    {
      icon: Zap,
      value: '<200ms',
      label: 'Response Time'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Concurrent Users'
    },
    {
      icon: Database,
      value: '5',
      label: 'Microservices'
    }
  ],
  content: {
    overview: (
      <p className="text-gray-400">
        StayHub is a comprehensive hospitality management platform built with microservices 
        architecture, demonstrating modern full-stack development practices and scalable system 
        design. It features end-to-end booking management, advanced search capabilities, and 
        data-driven optimization through A/B testing - designed as a realistic demonstration 
        platform for the travel industry.
      </p>
    ),
    features: (
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
    ),
    implementation: (
      <div className="space-y-6">
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
{`┌─────────────────┐     ┌─────────────────┐
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
    └────────────────────────────────────┘`}</pre>
        </div>
        
        <div>
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
    )
  }
}

export default projectData
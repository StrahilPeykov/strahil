'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Globe, Search, Smartphone, Zap, TrendingUp, MapPin } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../components/layout/PageWrapper'
import { Badge } from '../../../components/ui/Badge'

export default function RotoRemPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-red-500/5 to-transparent" />
        
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
              <Globe className="w-8 h-8 text-orange-400" />
              <Badge variant="warning">Freelance Project</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              RotoRem
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              High-performance, bilingual marketing website for home appliance repair business in Varna, Bulgaria
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.rotorem.bg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Site
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
                Designed, developed, and deployed a high-performance, bilingual marketing website for a local 
                home appliance repair business in Varna, Bulgaria. The project included creating custom SVG 
                logo assets and implementing a complete web presence optimized for local SEO and lead generation.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Client Profile</h2>
              <p className="text-gray-400">
                Small business owner in the home repair industry with no technical background. The client needed 
                a professional digital presence that would rank well in local searches and effectively convert 
                visitors into service bookings.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-orange-400" />
                    Bilingual Content
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Complete language switching between Bulgarian (default) and English with path-based 
                    routing for optimal SEO.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                    Mobile-First Design
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Responsive layouts optimized for all device sizes with mobile-optimized booking flow 
                    to maximize conversions.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Search className="w-5 h-5 text-green-400" />
                    Local SEO
                  </h3>
                  <p className="text-gray-400 text-sm">
                    LocalBusiness schema implementation, on-page optimization, and structured data for 
                    enhanced search visibility.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    Performance
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Sub-1-second load times on 4G connections with 95+ Lighthouse scores across all metrics.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Technical Challenges Solved</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Cross-browser SVG Compatibility</h3>
                    <p className="text-gray-400 text-sm">
                      Created path-based SVG elements instead of text elements to ensure consistent 
                      rendering across browsers without font dependencies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Responsive Image Strategy</h3>
                    <p className="text-gray-400 text-sm">
                      Implemented responsive images with proper art direction for different viewport sizes 
                      using modern image optimization techniques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Internationalization System</h3>
                    <p className="text-gray-400 text-sm">
                      Developed a clean, maintainable translation system using filesystem-based i18n 
                      that scales well for future language additions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-400 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Performance Optimization</h3>
                    <p className="text-gray-400 text-sm">
                      Achieved 95+ Lighthouse scores across all metrics through careful optimization 
                      including WebP images, CSS optimization, and lazy loading.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Implementation Details</h2>
              <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
                <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
Project Structure:
├── Astro 4 (Static Site Generation)
├── Tailwind CSS v3 + DaisyUI
├── @astrojs/i18n Router Plugin
├── Netlify Forms (Lead Capture)
├── GitHub Actions CI/CD
└── Lighthouse CI Integration

Performance Metrics:
├── First Contentful Paint: 1s
├── Largest Contentful Paint: 1.5s
├── Total Blocking Time: 0ms
└── Cumulative Layout Shift: 0
                </pre>
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
                  <dd className="text-white font-medium">Full-Stack Developer & Designer</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Context</dt>
                  <dd className="text-white font-medium">Freelance Client Project</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Timeline</dt>
                  <dd className="text-white font-medium">2024</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Location</dt>
                  <dd className="text-white font-medium flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Varna, Bulgaria
                  </dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="purple">Astro 4</Badge>
                <Badge variant="blue">Tailwind CSS</Badge>
                <Badge variant="blue">DaisyUI</Badge>
                <Badge variant="green">Netlify</Badge>
                <Badge variant="green">GitHub Actions</Badge>
                <Badge variant="cyan">Biome</Badge>
              </div>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Results & Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Page 1</div>
                    <div className="text-sm text-gray-500">Google Rankings</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white"> 1s</div>
                    <div className="text-sm text-gray-500">Load Time (4G)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">95+</div>
                    <div className="text-sm text-gray-500">Lighthouse Score</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Business Impact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Professional web presence optimized for local search</li>
                <li>• Lead generation system via booking forms</li>
                <li>• Minimal maintenance required</li>
                <li>• Complete rebranding with custom logo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
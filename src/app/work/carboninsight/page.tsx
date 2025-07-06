'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Award, Users, Zap, Database, Shield, TreePine } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../components/layout/PageWrapper'
import { Badge } from '../../../components/ui/Badge'

export default function CarbonInsightPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-blue-500/5 to-transparent" />
        
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
              <TreePine className="w-8 h-8 text-green-400" />
              <Badge variant="success">Bachelor's End Project</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              CarbonInsight
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Product Carbon Footprint & Digital Product Passport Platform for Manufacturing SMEs
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://carboninsight.strahil.dev"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-5 h-5" />
                View Demo
              </Link>
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
                CarbonInsight is a comprehensive web application that enables manufacturing SMEs to calculate 
                Product Carbon Footprint (PCF) and generate standards-compliant Digital Product Passports (DPPs). 
                Part of the EU-funded AI REDGIO 5.0 initiative, this platform helps manufacturers track carbon 
                emissions across supply chains while complying with environmental regulations.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The Challenge</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Small and medium-sized manufacturing enterprises face increasing pressure to disclose 
                  environmental impact data, but lack the resources and expertise for complex carbon accounting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Need to comply with emerging EU regulations on product environmental impact disclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Complex carbon accounting across multi-tier supply chains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Make carbon footprint calculation accessible to non-technical users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Generate market-ready Digital Product Passports for compliance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Solution</h2>
              <p className="text-gray-400 mb-6">
                I developed a wizard-driven self-assessment platform that guides users through the carbon 
                footprint calculation process, making complex environmental accounting accessible through 
                an intuitive interface.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3">PCF Calculation Engine</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Recursive emission calculations across complex supply chain hierarchies with multi-tier 
                    component tracking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="green" size="sm">ISO 14067</Badge>
                    <Badge variant="green" size="sm">GHG Protocol</Badge>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Digital Product Passport</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Standards-compliant DPP generation with AAS (Asset Administration Shell) and SCSN formats.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="blue" size="sm">AAS Format</Badge>
                    <Badge variant="blue" size="sm">QR Codes</Badge>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3">AI Recommendations</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    AI-powered suggestions for carbon footprint reduction based on industry best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="purple" size="sm">Machine Learning</Badge>
                    <Badge variant="purple" size="sm">Insights</Badge>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Enterprise Security</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Fine-grained access control, JWT authentication, and comprehensive audit logging.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="cyan" size="sm">Django Axes</Badge>
                    <Badge variant="cyan" size="sm">HTTPS</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Technical Implementation</h2>
              <div className="space-y-4">
                <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Architecture</h3>
                  <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
Frontend (Next.js 15)     Backend (Django 5.2)
    │                          │
    ├─ TypeScript             ├─ REST APIs
    ├─ React Context          ├─ JWT Auth
    ├─ Tailwind CSS 4         ├─ PostgreSQL 16
    └─ Wizard UI              └─ Celery Tasks
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features Implemented</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Recursive carbon emission calculations with supply chain hierarchy traversal</li>
                    <li>• Multi-format DPP export (PDF, JSON, AAS) with QR code generation</li>
                    <li>• Real-time validation and progress tracking throughout assessment</li>
                    <li>• Automated CI/CD pipeline with security scanning and testing</li>
                    <li>• Comprehensive API documentation with OpenAPI/Swagger</li>
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
                  <dd className="text-white font-medium">Full-Stack Developer & Project Lead</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Context</dt>
                  <dd className="text-white font-medium">Bachelor's End Project</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Timeline</dt>
                  <dd className="text-white font-medium">Apr 2025 - Jul 2025</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Client</dt>
                  <dd className="text-white font-medium">EU AI REDGIO 5.0 / Brainport Industries</dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue">Django 5.2</Badge>
                <Badge variant="blue">Next.js 15</Badge>
                <Badge variant="purple">TypeScript</Badge>
                <Badge variant="purple">PostgreSQL</Badge>
                <Badge variant="green">Tailwind CSS</Badge>
                <Badge variant="green">Docker</Badge>
                <Badge variant="cyan">JWT Auth</Badge>
                <Badge variant="cyan">GitLab CI/CD</Badge>
              </div>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-500">Standards Compliance</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">SME-Ready</div>
                    <div className="text-sm text-gray-500">Non-technical UI</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">EU Initiative</div>
                    <div className="text-sm text-gray-500">AI REDGIO 5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Key Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">Complete</div>
              <div className="text-gray-400">PCF calculation & DPP platform delivered</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">Recursive</div>
              <div className="text-gray-400">Supply chain emission calculations</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">Compliant</div>
              <div className="text-gray-400">AAS & SCSN standard formats</div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
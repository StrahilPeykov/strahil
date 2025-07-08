import { Shield, Database, Users, Award, Zap } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import type { ProjectData } from '../../components/templates/ProjectTemplate'

const projectData: ProjectData = {
  title: 'CarbonInsight',
  tagline: 'Product Carbon Footprint & Digital Product Passport Platform for Manufacturing SMEs',
  description: 'Comprehensive web application enabling manufacturing SMEs to calculate Product Carbon Footprint (PCF) and generate standards-compliant Digital Product Passports (DPPs). Part of the EU-funded AI REDGIO 5.0 initiative.',
  icon: 'TreePine',
  badges: [
    { variant: 'success' as const, label: "Bachelor's End Project" }
  ],
  links: {
    demo: 'https://carboninsight.strahil.dev'
  },
  details: {
    role: 'Full-Stack Developer & Project Lead',
    context: "Bachelor's End Project",
    timeline: 'Apr 2025 - Jul 2025',
    client: 'EU AI REDGIO 5.0 / Brainport Industries'
  },
  techStack: {
    categories: [
      {
        name: 'Backend',
        technologies: ['Django 5.2', 'PostgreSQL 16', 'Celery', 'JWT Auth']
      },
      {
        name: 'Frontend',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS 4', 'React Context']
      },
      {
        name: 'Infrastructure',
        technologies: ['Docker', 'GitLab CI/CD', 'HTTPS', 'Django Axes']
      }
    ]
  },
  metrics: [
    {
      icon: 'Zap',
      value: '100%',
      label: 'Standards Compliance'
    },
    {
      icon: 'Users',
      value: 'SME-Ready',
      label: 'Non-technical UI'
    },
    {
      icon: 'Award',
      value: 'EU Initiative',
      label: 'AI REDGIO 5.0'
    }
  ],
  content: {
    overview: (
      <p className="text-gray-400">
        CarbonInsight is a comprehensive web application that enables manufacturing SMEs to calculate 
        Product Carbon Footprint (PCF) and generate standards-compliant Digital Product Passports (DPPs). 
        Part of the EU-funded AI REDGIO 5.0 initiative, this platform helps manufacturers track carbon 
        emissions across supply chains while complying with environmental regulations.
      </p>
    ),
    challenge: (
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
    ),
    solution: (
      <div className="space-y-6">
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
    ),
    implementation: (
      <div className="space-y-4">
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3">Architecture</h3>
          <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
{`Frontend (Next.js 15)     Backend (Django 5.2)
    │                          │
    ├─ TypeScript             ├─ REST APIs
    ├─ React Context          ├─ JWT Auth
    ├─ Tailwind CSS 4         ├─ PostgreSQL 16
    └─ Wizard UI              └─ Celery Tasks`}</pre>
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
    ),
    results: (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">Complete</div>
          <div className="text-gray-400">PCF calculation & DPP platform delivered</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">Recursive</div>
          <div className="text-gray-400">Supply chain emission calculations</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">Compliant</div>
          <div className="text-gray-400">AAS & SCSN standard formats</div>
        </div>
      </div>
    )
  }
}

export default projectData
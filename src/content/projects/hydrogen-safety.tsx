import { Flame, TrendingUp, Users, Target, BarChart3, DollarSign } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import type { ProjectData } from '../../components/templates/ProjectTemplate'

const projectData: ProjectData = {
  title: 'Hydrogen Safety System Business',
  tagline: 'Business development for innovative hydrogen leakage detection technology',
  description: 'Developed comprehensive business model for hydrogen safety technology through systematic market research and customer validation.',
  icon: 'Flame',
  badges: [
    { variant: 'purple' as const, label: 'Business Development' },
    { variant: 'success' as const, label: 'TU/e Entrepreneurship' }
  ],
  links: {},
  details: {
    role: 'Business Developer',
    context: 'University Entrepreneurship Course',
    timeline: 'Nov 2024 - Apr 2025',
    client: 'TU/e Innovation Space'
  },
  techStack: {
    categories: [
      {
        name: 'Business Tools',
        technologies: ['Market Research', 'Business Model Canvas', 'Financial Modeling', 'Customer Discovery', 'Lean Startup', 'Value Proposition Design']
      }
    ]
  },
  metrics: [
    {
      icon: 'DollarSign',
      value: '€120B',
      label: 'Market Size'
    },
    {
      icon: 'TrendingUp',
      value: '€594K',
      label: 'Year 1 Revenue'
    },
    {
      icon: 'Users',
      value: '15+',
      label: 'Customer Interviews'
    }
  ],
  content: {
    overview: (
      <div className="space-y-4">
        <p className="text-gray-400">
          As part of TU/e's Innovation & Entrepreneurship program, I led the business development 
          for an innovative hydrogen leakage detection technology. The project involved transforming 
          cutting-edge research into a viable business model through systematic market validation 
          and customer discovery.
        </p>
        <p className="text-gray-400">
          Working with a team of engineers who developed a novel sensor technology capable of 
          detecting hydrogen leaks with unprecedented accuracy, I focused on identifying market 
          opportunities, validating customer needs, and developing a go-to-market strategy.
        </p>
      </div>
    ),
    challenge: (
      <div className="space-y-4">
        <p className="text-gray-400">
          The hydrogen economy is rapidly expanding, but safety concerns remain a significant 
          barrier to adoption. Current detection methods have critical limitations:
        </p>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <Flame className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <span>Hydrogen is highly flammable with a wide explosive range (4-75% in air)</span>
          </li>
          <li className="flex items-start gap-2">
            <Flame className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <span>Colorless and odorless, making leaks impossible to detect without sensors</span>
          </li>
          <li className="flex items-start gap-2">
            <Flame className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <span>Existing sensors have slow response times and limited accuracy</span>
          </li>
          <li className="flex items-start gap-2">
            <Flame className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <span>High false positive rates lead to costly production interruptions</span>
          </li>
        </ul>
        <p className="text-gray-400 mt-4">
          Our challenge was to validate whether the market would adopt a new detection technology 
          and identify the most valuable customer segments.
        </p>
      </div>
    ),
    solution: (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white mb-4">Market Validation Process</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              Customer Discovery
            </h4>
            <p className="text-gray-400 text-sm mb-3">
              Conducted in-depth interviews with industry leaders:
            </p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Tata Steel - Production safety managers</li>
              <li>• Shell - Hydrogen infrastructure team</li>
              <li>• Air Liquide - Industrial gas specialists</li>
              <li>• Port of Rotterdam - H2 hub developers</li>
              <li>• BMW - Hydrogen vehicle engineers</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" />
              Market Segmentation
            </h4>
            <p className="text-gray-400 text-sm mb-3">
              Identified primary customer segments:
            </p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Industrial hydrogen production</li>
              <li>• Chemical processing plants</li>
              <li>• Hydrogen refueling stations</li>
              <li>• Transportation & logistics</li>
              <li>• Research laboratories</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h4 className="font-semibold text-white mb-3">Value Proposition Development</h4>
          <p className="text-gray-400 mb-4">
            Through 6 iterations based on customer feedback, we refined our value proposition:
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-white font-medium mb-2">
              "Prevent catastrophic hydrogen incidents with real-time, ultra-sensitive leak 
              detection that reduces false alarms by 90% while meeting stringent safety regulations."
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <p className="text-gray-500">Response Time</p>
                <p className="text-green-400 font-semibold">&lt; 1 second</p>
              </div>
              <div>
                <p className="text-gray-500">Detection Range</p>
                <p className="text-green-400 font-semibold">10 ppm - 4%</p>
              </div>
              <div>
                <p className="text-gray-500">False Positives</p>
                <p className="text-green-400 font-semibold">-90% reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    implementation: (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white mb-4">Business Model Development</h3>
        
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <h4 className="font-semibold text-white mb-3">Revenue Model</h4>
          <div className="space-y-3 text-gray-400">
            <div className="flex justify-between items-center">
              <span>Hardware Sales (Sensors)</span>
              <span className="text-white font-medium">€2,500 per unit</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Annual Service Contracts</span>
              <span className="text-white font-medium">€500/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Installation & Training</span>
              <span className="text-white font-medium">€1,000 per site</span>
            </div>
            <div className="border-t border-slate-700 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">First Year Revenue Projection</span>
                <span className="text-green-400 font-bold">€594,600</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">Go-to-Market Strategy</h4>
            <ol className="space-y-2 text-gray-400 text-sm">
              <li>1. Partner with safety certification bodies</li>
              <li>2. Pilot programs with industry leaders</li>
              <li>3. Leverage safety regulations compliance</li>
              <li>4. Build channel partnerships</li>
              <li>5. Expand internationally via distributors</li>
            </ol>
          </div>
          
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">Key Partnerships</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• TÜV/DNV - Safety certification</li>
              <li>• System integrators - Installation</li>
              <li>• Insurance companies - Risk reduction</li>
              <li>• Industry associations - Market access</li>
              <li>• Research institutes - Validation</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    results: (
      <div className="space-y-6">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-400" />
            Validation Results
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• 87% of interviewed companies expressed strong interest</li>
            <li>• 3 Letters of Intent from major industrial players</li>
            <li>• Identified €120B addressable market in Europe</li>
            <li>• Validated willingness to pay above €2,500/unit</li>
            <li>• Confirmed critical need for faster, more accurate detection</li>
          </ul>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
            <p className="text-gray-400 text-sm">Business Model Iterations</p>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <p className="text-gray-400 text-sm">Customer Interviews</p>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">€2M</div>
            <p className="text-gray-400 text-sm">Seed Funding Interest</p>
          </div>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Next Steps</h3>
          <p className="text-gray-300 mb-3">
            Based on the validation results, the project is moving forward with:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Technical prototype development with TU/e labs</li>
            <li>• Pilot program with Shell hydrogen facilities</li>
            <li>• Seed funding round targeting €2M</li>
            <li>• Team expansion (CTO and sales lead)</li>
            <li>• IP protection and certification process</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default projectData
import { Shield, AlertTriangle, Bug, CheckCircle, Code2, Lock } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import type { ProjectData } from '../../components/templates/ProjectTemplate'

const projectData: ProjectData = {
  title: 'Safe Exam Browser Security Research',
  tagline: 'Penetration testing of lockdown browsers with responsible vulnerability disclosure',
  description: 'Comprehensive security research identifying and responsibly disclosing multiple critical vulnerabilities in exam lockdown software.',
  icon: Shield,
  badges: [
    { variant: 'error' as const, label: 'Security Research' },
    { variant: 'blue' as const, label: 'TU/e Course Project' }
  ],
  links: {},
  details: {
    role: 'Security Researcher',
    context: 'University Course Project',
    timeline: 'Apr 2023 - Jun 2023',
    client: 'TU/e Computer & Network Security Course'
  },
  techStack: {
    categories: [
      {
        name: 'Tools & Techniques',
        technologies: ['C++', 'C#', '.NET', 'DLL Injection', 'Reverse Engineering', 'x64dbg', 'IDA Pro']
      }
    ]
  },
  metrics: [
    {
      icon: Bug,
      value: '5',
      label: 'Vulnerabilities Found'
    },
    {
      icon: AlertTriangle,
      value: 'Critical',
      label: 'Impact Level'
    },
    {
      icon: CheckCircle,
      value: 'Official',
      label: 'Recognition'
    }
  ],
  content: {
    overview: (
      <div className="space-y-4">
        <p className="text-gray-400">
          As part of the Computer & Network Security course at TU/e, our team conducted comprehensive 
          security research on Safe Exam Browser (SEB), a widely-used lockdown browser for secure online 
          examinations. Our research uncovered multiple critical vulnerabilities that could allow students 
          to bypass security restrictions.
        </p>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-300">
            <strong className="text-yellow-400">Responsible Disclosure:</strong> All vulnerabilities were 
            reported to the SEB development team following responsible disclosure practices. Our findings 
            were acknowledged in the official SEB v3.6.0 release notes.
          </p>
        </div>
      </div>
    ),
    challenge: (
      <div className="space-y-4">
        <p className="text-gray-400">
          Safe Exam Browser is designed to create a secure testing environment by:
        </p>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <Lock className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <span>Preventing access to other applications and system functions</span>
          </li>
          <li className="flex items-start gap-2">
            <Lock className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <span>Blocking keyboard shortcuts and system commands</span>
          </li>
          <li className="flex items-start gap-2">
            <Lock className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <span>Monitoring for prohibited processes and activities</span>
          </li>
          <li className="flex items-start gap-2">
            <Lock className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <span>Creating a kiosk mode that locks down the entire system</span>
          </li>
        </ul>
        <p className="text-gray-400">
          Our goal was to identify weaknesses in these security mechanisms that could potentially 
          be exploited by malicious actors.
        </p>
      </div>
    ),
    solution: (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">Vulnerability Classes Discovered</h3>
        
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/20">
            <h4 className="font-semibold text-white mb-2">1. Process Injection Vulnerabilities</h4>
            <p className="text-gray-400 text-sm">
              Discovered methods to inject code into the SEB process, allowing bypass of security 
              restrictions and access to prohibited system functions.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/20">
            <h4 className="font-semibold text-white mb-2">2. Privilege Escalation</h4>
            <p className="text-gray-400 text-sm">
              Found ways to elevate privileges within the SEB environment, enabling access to 
              administrator-level functions while appearing to run in restricted mode.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/20">
            <h4 className="font-semibold text-white mb-2">3. Memory Manipulation</h4>
            <p className="text-gray-400 text-sm">
              Identified techniques to modify SEB's runtime memory to disable security checks 
              and monitoring functions without triggering detection.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/20">
            <h4 className="font-semibold text-white mb-2">4. Configuration Bypass</h4>
            <p className="text-gray-400 text-sm">
              Discovered methods to override secure configuration settings, allowing modification 
              of exam parameters and security policies.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/20">
            <h4 className="font-semibold text-white mb-2">5. Network Communication Interception</h4>
            <p className="text-gray-400 text-sm">
              Found ways to intercept and modify network communications between SEB and exam 
              servers, potentially allowing manipulation of exam data.
            </p>
          </div>
        </div>
      </div>
    ),
    implementation: (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white mb-4">Research Methodology</h3>
        
        <div className="space-y-4">
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">Static Analysis</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Reverse engineered SEB binaries using IDA Pro and x64dbg</li>
              <li>• Analyzed .NET assemblies with dnSpy and ILSpy</li>
              <li>• Identified critical security functions and bypass points</li>
              <li>• Mapped out the security architecture and trust boundaries</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">Dynamic Analysis</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Monitored runtime behavior with Process Monitor and API Monitor</li>
              <li>• Performed DLL injection and hooking experiments</li>
              <li>• Tested various bypass techniques in controlled environments</li>
              <li>• Validated exploits across different Windows versions</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">Proof of Concept Development</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Created minimal PoCs for each vulnerability class</li>
              <li>• Documented exploitation steps and requirements</li>
              <li>• Developed mitigation recommendations</li>
              <li>• Prepared detailed technical report for developers</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    results: (
      <div className="space-y-6">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Impact & Recognition
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• All vulnerabilities responsibly disclosed to SEB development team</li>
            <li>• Acknowledged in official SEB v3.6.0 release notes</li>
            <li>• Contributed to improved security for millions of exam takers</li>
            <li>• Received top grade for the security research project</li>
            <li>• Developed patches and mitigation strategies for each vulnerability</li>
          </ul>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Key Takeaways</h3>
          <p className="text-gray-300 mb-3">
            This research highlighted the importance of:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Defense in depth - single security mechanisms are insufficient</li>
            <li>• Regular security audits of critical software</li>
            <li>• Responsible disclosure practices in vulnerability research</li>
            <li>• Collaboration between researchers and developers</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default projectData
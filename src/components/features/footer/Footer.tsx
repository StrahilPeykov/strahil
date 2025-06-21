import Link from 'next/link'
import { SocialLinks } from './SocialLinks'
import { navigationSections } from '../../../data/navigation'

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bulgarian Computer Science student and Software Engineer based in Eindhoven, NL. 
              BSc Computer Science & Engineering at TU/e. Building enterprise solutions 
              at the intersection of technology and innovation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navigationSections.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Connect</h3>
            <SocialLinks />
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Strahil Peykov. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-blue-400">Next.js</span>
              <span>·</span>
              <span className="text-purple-400">Tailwind CSS</span>
              <span>·</span>
              <span className="text-pink-400">MDX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

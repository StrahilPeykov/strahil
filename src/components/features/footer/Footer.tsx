import Link from 'next/link'
import { SocialLinks } from './SocialLinks'
import { navigationSections, additionalPages } from '../../../data/navigation'

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="font-display font-semibold text-white text-lg mb-4">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Bulgarian Computer Science student and Software Engineer based in Eindhoven, NL. 
              BSc Computer Science & Engineering at TU/e.
            </p>
            <Link 
              href="/about"
              className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
            >
              Learn more →
            </Link>
          </div>
          
          {/* Main Pages */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Pages</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
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
          
          {/* More */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">More</h3>
            <div className="space-y-2">
              {additionalPages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Let's build something amazing together.
            </p>
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

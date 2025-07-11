'use client'

import Link from 'next/link'
import { SocialLinks } from './SocialLinks'
import { allNavigationItems } from '../../../data/navigation'
import { Mail, MapPin, Download, Settings } from 'lucide-react'
import { useState } from 'react'
import { CookieSettingsModal } from '../cookies/CookieSettingsModal'

export function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false)

  return (
    <>
      <footer className="border-t border-slate-800/50 bg-slate-950">
        <div className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Main footer content */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* About/Contact */}
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  Strahil Peykov
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Full-Stack Developer & Software Engineer
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={14} />
                    <span>Eindhoven, Netherlands</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={14} />
                    <a href="mailto:strahil.peykov@gmail.com" className="hover:text-purple-400 transition-colors">
                      strahil.peykov@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Download size={14} />
                    <a href="/cv.pdf" download className="hover:text-purple-400 transition-colors">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
                  {allNavigationItems.filter(item => !item.hidden).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                {/* Social links */}
                <div className="mt-8 pt-8 border-t border-slate-800/50">
                  <SocialLinks />
                </div>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>© 2025 Strahil Peykov, All Rights Reserved</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms
                </Link>
                <Link href="/cookies" className="hover:text-purple-400 transition-colors">
                  Cookies
                </Link>
                <button 
                  onClick={() => setShowCookieSettings(true)}
                  className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Settings className="w-3 h-3" />
                  Cookie Settings
                </button>
                <span className="text-gray-700">•</span>
                <span>Built with Next.js & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <CookieSettingsModal 
        isOpen={showCookieSettings} 
        onClose={() => setShowCookieSettings(false)} 
      />
    </>
  )
}
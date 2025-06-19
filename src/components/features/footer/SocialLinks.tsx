'use client'

import { socialLinks } from '../../../data/social-links'

export function SocialLinks() {
  return (
    <div className="flex gap-3 flex-wrap">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            className="p-2.5 bg-slate-900/50 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
            aria-label={social.label}
            target={social.external ? "_blank" : undefined}
            rel={social.external ? "noopener noreferrer" : undefined}
          >
            <Icon className="w-5 h-5" />
          </a>
        )
      })}
    </div>
  )
}
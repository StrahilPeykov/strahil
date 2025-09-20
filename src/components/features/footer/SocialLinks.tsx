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
            className="p-2.5 bg-bg-soft/70 border border-outline rounded-lg text-white/70 hover:text-white hover:shadow-glow hover:border-glow/35 transition-all"
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

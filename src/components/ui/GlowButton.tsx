"use client"

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

type GlowButtonProps = HTMLMotionProps<'button'> & {
  as?: 'button' | 'a'
  href?: string
}

export function GlowButton({ className, children, as = 'button', href, ...props }: GlowButtonProps) {
  const Comp: any = motion[as]
  return (
    <Comp
      href={href}
      className={cn(
        'relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold',
        'bg-glow text-white ring-1 ring-white/15 shadow-[0_6px_18px_rgba(60,159,255,0.25)]',
        'transition-transform duration-200 will-change-transform',
        'focus:outline-none focus:ring-2 focus:ring-glow/60',
        className
      )}
      whileHover={{ scale: 1.02, translateY: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Comp>
  )
}

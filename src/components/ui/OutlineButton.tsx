"use client"

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

type OutlineButtonProps = HTMLMotionProps<'button'> & {
  as?: 'button' | 'a'
  href?: string
}

export function OutlineButton({ className, children, as = 'button', href, ...props }: OutlineButtonProps) {
  const Comp: any = motion[as]
  return (
    <Comp
      href={href}
      className={cn(
        'relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold',
        'bg-bg-soft/60 border border-outline text-white',
        'transition-transform duration-200 will-change-transform',
        'focus:outline-none focus:ring-2 focus:ring-glow/40',
        'hover:border-glow/40 hover:bg-glow/5',
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

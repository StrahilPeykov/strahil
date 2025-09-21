import Link from 'next/link'
import { cn } from '../../lib/utils'

export function NavItem({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative px-4 py-2 text-sm rounded-full transition-all',
        active
          ? 'text-foreground bg-glow/20 border border-glow/35 shadow-[0_4px_14px_rgba(60,159,255,0.18)]'
          : 'text-foreground/70 hover:text-foreground bg-transparent border border-transparent'
      )}
    >
      <span>{label}</span>
    </Link>
  )
}

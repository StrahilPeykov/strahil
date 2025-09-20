import { cn } from '../../lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'active' | 'warm'
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const variants = {
    default: "bg-bg-soft text-ink/70 border-outline",
    active: "bg-glow/10 text-glow border-glow/40",
    warm: "bg-warmth/10 text-warmth border-warmth/40"
  }
  
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
      variants[variant]
    )}>
      {children}
    </span>
  )
}

import { cn } from '../../lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'electric' | 'amber'
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const variants = {
    default: "bg-midnight text-gray-400 border-gray-700",
    electric: "bg-electric/10 text-electric border-electric/30",
    amber: "bg-amber/10 text-amber border-amber/30"
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
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'purple' | 'pink' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
}

const variants = {
  default: 'bg-slate-800/50 text-gray-300 border-slate-700/50',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  success: 'bg-green-500/10 text-green-400 border-green-500/30',
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  error: 'bg-red-500/10 text-red-400 border-red-500/30',
}

const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm'
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full font-medium border',
      variants[variant],
      sizes[size]
    )}>
      {children}
    </span>
  )
}
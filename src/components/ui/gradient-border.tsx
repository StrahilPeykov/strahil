import { cn } from '../../lib/utils'

interface GradientBorderProps {
  children: React.ReactNode
  className?: string
}

export function GradientBorder({ children, className }: GradientBorderProps) {
  return (
    <div className={cn("relative p-[1px] rounded-lg", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-electric to-amber rounded-lg" />
      <div className="relative bg-midnight rounded-lg">
        {children}
      </div>
    </div>
  )
}
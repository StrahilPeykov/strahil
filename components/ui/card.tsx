import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'featured'
  hoverable?: boolean
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  hoverable = true,
  ...props 
}: CardProps) {
  const baseClasses = "bg-midnight-light rounded-lg p-6 transition-all duration-300"
  const variantClasses = {
    default: "border border-electric/10",
    featured: "border border-electric/30"
  }
  const hoverClasses = hoverable ? "hover:border-electric/30 hover:shadow-2xl hover:shadow-electric/10" : ""
  
  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], hoverClasses, className)} 
      {...props}
    >
      {children}
    </div>
  )
}
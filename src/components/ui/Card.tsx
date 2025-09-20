import { cn } from '../../lib/utils'

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
  const baseClasses = "bg-bg-soft rounded-xl p-6 transition-all duration-200 border border-outline"
  const variantClasses = {
    default: "",
    featured: "shadow-glow"
  }
  const hoverClasses = hoverable ? "hover:shadow-glow hover:border-glow/40" : ""
  
  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], hoverClasses, className)} 
      {...props}
    >
      {children}
    </div>
  )
}

import { cn } from '../../lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const containerSizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl', 
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-none'
}

export function Container({ children, className, size = 'lg' }: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto px-6',
      containerSizes[size],
      className
    )}>
      {children}
    </div>
  )
}
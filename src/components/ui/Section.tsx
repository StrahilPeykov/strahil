import { cn } from '../../lib/utils'
import { Container } from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'transparent' | 'gradient' | 'midnight'
}

const spacingSizes = {
  sm: 'py-16',
  md: 'py-24',
  lg: 'py-32',
  xl: 'py-40'
}

const backgrounds = {
  transparent: '',
  gradient: 'bg-gradient-to-b from-transparent via-slate-900/50 to-transparent',
  midnight: 'bg-midnight-light/30'
}

export function Section({ 
  children, 
  className, 
  containerSize = 'lg',
  spacing = 'lg',
  background = 'transparent'
}: SectionProps) {
  return (
    <section className={cn(
      'relative',
      spacingSizes[spacing],
      backgrounds[background],
      className
    )}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}
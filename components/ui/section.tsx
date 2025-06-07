import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  alternate?: boolean
}

export function Section({ children, className, alternate = false }: SectionProps) {
  return (
    <section className={cn(
      "py-20 px-6",
      alternate && "bg-midnight-light/30",
      className
    )}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
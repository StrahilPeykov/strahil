import { cn } from '../../lib/utils'

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn(
      "animate-pulse bg-midnight-light rounded-md",
      className
    )} />
  )
}
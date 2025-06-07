import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card } from './card'

interface LinkCardProps {
  href: string
  title: string
  description?: string
  external?: boolean
  icon?: React.ReactNode
}

export function LinkCard({ href, title, description, external = false, icon }: LinkCardProps) {
  const Component = external ? 'a' : Link
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  
  return (
    <Component 
      href={href} 
      {...linkProps}
      className="group block"
    >
      <Card hoverable className="relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-electric transition-colors flex items-center gap-2">
              {icon}
              {title}
            </h3>
            {description && (
              <p className="text-gray-400 text-sm mt-1">{description}</p>
            )}
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-electric transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Card>
    </Component>
  )
}
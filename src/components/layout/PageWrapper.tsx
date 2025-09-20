import { Header } from './Header'
import { Footer } from '../../components/features/footer/Footer'
import { NoiseOverlay } from '../effects/NoiseOverlay'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  showHeader?: boolean
  showFooter?: boolean
}

export function PageWrapper({ 
  children, 
  className,
  showHeader = true,
  showFooter = true 
}: PageWrapperProps) {
  return (
    <div className={`relative min-h-screen bg-bg text-ink overflow-x-hidden ${className}`}>
      <NoiseOverlay />
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}

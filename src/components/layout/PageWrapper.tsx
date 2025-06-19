import { Header } from './Header'
import { Footer } from '../../components/features/footer/Footer'

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
    <div className={`min-h-screen bg-slate-950 text-gray-300 overflow-x-hidden ${className}`}>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}
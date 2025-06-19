import { cn } from '../../lib/utils'

interface LogoIconProps {
  className?: string
  size?: number
  variant?: 'icon' | 'text' | 'full'
  showBackground?: boolean
}

export function LogoIcon({ 
  className, 
  size = 32, 
  variant = 'icon',
  showBackground = true 
}: LogoIconProps) {
  
  // Text-only variant
  if (variant === 'text') {
    return (
      <span className={cn(
        "font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
        className
      )}>
        SP
      </span>
    )
  }

  // SVG icon variant (matches your favicon.svg exactly)
  if (variant === 'icon') {
    const uniqueId = `logo-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        className={cn("flex-shrink-0", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`bgGlow-${uniqueId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          
          <linearGradient id={`textGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa"/>
            <stop offset="100%" stopColor="#c084fc"/>
          </linearGradient>
        </defs>
        
        {/* Background */}
        {showBackground && (
          <rect width="32" height="32" rx="6" fill="#0f172a"/>
        )}
        
        {/* Glow effect */}
        <circle cx="16" cy="16" r="12" fill={`url(#bgGlow-${uniqueId})`}/>
        
        {/* SP Text */}
        <text 
          x="16" 
          y="22" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="14" 
          fontWeight="bold" 
          textAnchor="middle" 
          fill={`url(#textGrad-${uniqueId})`}
        >
          SP
        </text>
      </svg>
    )
  }

  // Full variant (icon + text)
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon variant="icon" size={size} showBackground={showBackground} />
      <LogoIcon variant="text" className="text-xl" />
    </div>
  )
}

// Favicon reference component (uses the actual favicon file)
export function FaviconLogo({ 
  className, 
  size = 32,
  alt = "SP Logo" 
}: { 
  className?: string; 
  size?: number;
  alt?: string;
}) {
  return (
    <img 
      src="/icons/favicon.svg" 
      alt={alt}
      width={size} 
      height={size}
      className={cn("flex-shrink-0", className)}
      loading="eager" // Load immediately since it's likely above the fold
      decoding="async"
    />
  )
}

// Alternative component that prefers the actual favicon but falls back to inline SVG
export function SmartLogo({ 
  className, 
  size = 32,
  preferFavicon = true 
}: { 
  className?: string; 
  size?: number;
  preferFavicon?: boolean;
}) {
  if (preferFavicon) {
    return (
      <FaviconLogo 
        className={className} 
        size={size}
        alt="Strahil Peykov Logo"
      />
    )
  }
  
  return (
    <LogoIcon 
      variant="icon" 
      size={size} 
      className={className}
      showBackground={true}
    />
  )
}
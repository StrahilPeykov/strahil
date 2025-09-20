import { cn } from '../../lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "onDrag" | "onDragStart" | "onDragEnd" | "children"> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  asChild?: boolean
  href?: string
}

const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white border-transparent',
  secondary: 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700',
  ghost: 'bg-transparent hover:bg-slate-800/50 text-gray-400 hover:text-white border-transparent',
  gradient: 'bg-glow text-white border-transparent'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  )
}

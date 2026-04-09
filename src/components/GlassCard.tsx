import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  gradient?: string
  glow?: string
  delay?: number
  onClick?: () => void
  hoverable?: boolean
}

export default function GlassCard({
  children,
  className = '',
  gradient,
  glow,
  delay = 0,
  onClick,
  hoverable = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={hoverable ? { scale: 1.02, y: -4 } : undefined}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl border border-white/10
        ${gradient ? `bg-gradient-to-br ${gradient}` : 'bg-white/5 backdrop-blur-xl'}
        ${hoverable ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={glow ? { '--glow-color': glow } as React.CSSProperties : undefined}
    >
      {children}
    </motion.div>
  )
}

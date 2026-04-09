import { motion } from 'framer-motion'
import { ScriptureRef } from '../types'

interface ScriptureCardProps {
  scripture: ScriptureRef
  accent?: string
  delay?: number
}

export default function ScriptureCard({ scripture, accent, delay = 0 }: ScriptureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="relative pl-4 border-l-2 py-2"
      style={{ borderColor: accent || 'rgba(255,255,255,0.2)' }}
    >
      <p className="text-sm italic text-white/80 leading-relaxed">"{scripture.text}"</p>
      <p className="text-xs mt-1.5 font-semibold" style={{ color: accent || '#a5b4fc' }}>
        — {scripture.reference}
      </p>
    </motion.div>
  )
}

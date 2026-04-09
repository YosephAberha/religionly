import { motion } from 'framer-motion'

interface TopicPillProps {
  label: string
  icon: string
  active: boolean
  onClick: () => void
}

export default function TopicPill({ label, icon, active, onClick }: TopicPillProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
        transition-all duration-300 border
        ${
          active
            ? 'bg-white/20 border-white/30 text-white shadow-lg shadow-white/5'
            : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white/80'
        }
      `}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </motion.button>
  )
}

import { motion } from 'framer-motion'
import { ChevronRight, Users, MapPin, Clock } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { religions } from '../data/religions'
import { PageId } from '../types'

interface BrowsePageProps {
  onNavigate: (page: PageId, religionId?: string) => void
}

export default function BrowsePage({ onNavigate }: BrowsePageProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Explore Religions</h1>
        <p className="text-white/40">
          Dive deep into each tradition — sacred texts, core beliefs, practices, denominations, and historical timelines.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {religions.map((religion, i) => (
          <GlassCard
            key={religion.id}
            gradient={religion.gradient}
            glow={religion.glow}
            delay={i * 0.1}
            hoverable
            onClick={() => onNavigate('religion', religion.id)}
            className="p-6 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{religion.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold">{religion.name}</h2>
                  <p className="text-sm text-white/60 italic">{religion.tagline}</p>
                </div>
              </div>
              <ChevronRight
                size={20}
                className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all mt-2"
              />
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-5 line-clamp-3">
              {religion.overview}
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Users size={14} />
                <span>{religion.followersGlobal}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Clock size={14} />
                <span>{religion.founded}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <MapPin size={14} />
                <span className="truncate">{religion.origin}</span>
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10">
                {religion.sacredTexts.length} Sacred Text{religion.sacredTexts.length > 1 ? 's' : ''}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10">
                {religion.denominations.length} Denominations
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10">
                {religion.practices.length} Key Practices
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10">
                {religion.history.length} Timeline Events
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

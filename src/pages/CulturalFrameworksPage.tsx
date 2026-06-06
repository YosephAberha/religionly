import { motion } from 'framer-motion'
import { useState } from 'react'
import { BarChart3, ChevronDown, ChevronUp, Users, Building2, MessageSquare, Clock } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { culturalFrameworks } from '../data/culturalFrameworks'
import { CulturalFrameworkData, FrameworkDimension } from '../types'

const frameworkMeta: Record<string, { color: string; glow: string; gradient: string; icon: typeof BarChart3 }> = {
  hofstede: { color: '#6366f1', glow: 'rgba(99,102,241,0.3)', gradient: 'from-indigo-600 to-purple-800', icon: BarChart3 },
  globe: { color: '#a855f7', glow: 'rgba(168,85,247,0.3)', gradient: 'from-purple-600 to-fuchsia-800', icon: Building2 },
  trompenaars: { color: '#ec4899', glow: 'rgba(236,72,153,0.3)', gradient: 'from-pink-600 to-rose-800', icon: Users },
  hall: { color: '#0ea5e9', glow: 'rgba(14,165,233,0.3)', gradient: 'from-sky-600 to-blue-800', icon: MessageSquare },
}

const levelColors = { low: 'text-emerald-400 bg-emerald-500/15', medium: 'text-amber-400 bg-amber-500/15', high: 'text-rose-400 bg-rose-500/15' }

export default function CulturalFrameworksPage() {
  const [activeFramework, setActiveFramework] = useState<string>('hofstede')
  const framework = culturalFrameworks.find((f) => f.id === activeFramework)!

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <BarChart3 size={24} className="text-purple-400" />
          <h1 className="text-3xl font-bold">Cultural Frameworks</h1>
        </div>
        <p className="text-white/50 max-w-2xl">
          The four major academic frameworks used in international HR training. Based on Hofstede (1980), the GLOBE Study (2004), Trompenaars & Hampden-Turner (1993), and Hall & Hall (1990).
        </p>
      </div>

      {/* Framework selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {culturalFrameworks.map((fw) => {
          const meta = frameworkMeta[fw.id]
          const Icon = meta.icon
          const isActive = activeFramework === fw.id
          return (
            <button
              key={fw.id}
              onClick={() => setActiveFramework(fw.id)}
              className={`p-4 rounded-2xl text-left transition-all border ${isActive ? 'bg-white/10 border-white/20' : 'bg-white/5 border-transparent hover:bg-white/8'}`}
            >
              <Icon size={20} className="mb-2" style={{ color: meta.color }} />
              <p className="font-bold text-sm text-white">{fw.name}</p>
              <p className="text-xs text-white/40 mt-0.5">{fw.author.split(' ')[0]} · {fw.year.slice(0, 4)}</p>
              <p className="text-xs text-white/30 mt-1">{fw.dimensions.length} dimensions</p>
            </button>
          )
        })}
      </div>

      {/* Active framework */}
      <FrameworkDetail framework={framework} meta={frameworkMeta[framework.id]} />
    </div>
  )
}

function FrameworkDetail({ framework, meta }: { framework: CulturalFrameworkData; meta: typeof frameworkMeta['hofstede'] }) {
  const [openDimension, setOpenDimension] = useState<string>(framework.dimensions[0]?.id ?? '')

  return (
    <motion.div key={framework.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-6">
      {/* Overview */}
      <GlassCard gradient={meta.gradient} glow={meta.glow} className="p-6">
        <h2 className="text-2xl font-extrabold mb-1">{framework.fullName}</h2>
        <p className="text-sm text-white/50 mb-4">{framework.author} · {framework.year}</p>
        <p className="text-sm text-white/75 leading-relaxed">{framework.overview}</p>
      </GlassCard>

      {/* Dimensions */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-white">The {framework.dimensions.length} Dimensions</h3>
        {framework.dimensions.map((dim) => (
          <DimensionCard
            key={dim.id}
            dimension={dim}
            color={meta.color}
            isOpen={openDimension === dim.id}
            onToggle={() => setOpenDimension(openDimension === dim.id ? '' : dim.id)}
          />
        ))}
      </div>
    </motion.div>
  )
}

function DimensionCard({ dimension, color, isOpen, onToggle }: { dimension: FrameworkDimension; color: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <GlassCard className="overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 text-left">
        <div>
          <h4 className="font-bold text-white">{dimension.name}</h4>
          <p className="text-sm text-white/50 mt-0.5 line-clamp-1">{dimension.description}</p>
        </div>
        {isOpen ? <ChevronUp size={18} className="text-white/40 shrink-0 ml-4" /> : <ChevronDown size={18} className="text-white/40 shrink-0 ml-4" />}
      </button>

      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="border-t border-white/5">
          <div className="p-5 space-y-5">
            <p className="text-sm text-white/70 leading-relaxed">{dimension.description}</p>

            {/* Poles */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-500/8 border border-emerald-500/15">
                <p className="text-xs font-semibold text-emerald-400 mb-2">{dimension.lowPole.label}</p>
                <p className="text-xs text-white/65 mb-3 leading-relaxed">{dimension.lowPole.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {dimension.lowPole.examples.map((ex, i) => <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">{ex}</span>)}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-rose-500/8 border border-rose-500/15">
                <p className="text-xs font-semibold text-rose-400 mb-2">{dimension.highPole.label}</p>
                <p className="text-xs text-white/65 mb-3 leading-relaxed">{dimension.highPole.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {dimension.highPole.examples.map((ex, i) => <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">{ex}</span>)}
                </div>
              </div>
            </div>

            {/* HR Implication */}
            <div className="p-4 rounded-xl border" style={{ background: color + '12', borderColor: color + '30' }}>
              <p className="text-xs font-semibold mb-2" style={{ color }}>HR Implication</p>
              <p className="text-sm text-white/70 leading-relaxed">{dimension.hrImplication}</p>
            </div>

            {/* Example */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1.5">Workplace Example</p>
              <p className="text-sm text-white/70 leading-relaxed italic">"{dimension.workplaceExample}"</p>
            </div>

            {/* Country examples */}
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Country Examples</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {dimension.countryExamples.map((ex, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{ex.country}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${levelColors[ex.level]}`}>{ex.level}</span>
                    </div>
                    <p className="text-xs text-white/45 leading-snug">{ex.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </GlassCard>
  )
}

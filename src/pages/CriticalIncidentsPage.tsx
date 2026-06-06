import { motion } from 'framer-motion'
import { useState } from 'react'
import { AlertTriangle, ChevronDown, ChevronUp, Check, XCircle, Lightbulb, BookOpen, Filter } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { criticalIncidents, incidentCategories } from '../data/criticalIncidents'
import { CriticalIncident } from '../types'

const difficultyColors = {
  beginner: 'bg-emerald-500/20 text-emerald-300',
  intermediate: 'bg-amber-500/20 text-amber-300',
  advanced: 'bg-red-500/20 text-red-300',
}

const frameworkColors: Record<string, string> = {
  hofstede: 'bg-indigo-500/20 text-indigo-300',
  globe: 'bg-purple-500/20 text-purple-300',
  trompenaars: 'bg-pink-500/20 text-pink-300',
  hall: 'bg-sky-500/20 text-sky-300',
}

const frameworkLabels: Record<string, string> = {
  hofstede: 'Hofstede',
  globe: 'GLOBE',
  trompenaars: 'Trompenaars',
  hall: 'Hall & Hall',
}

export default function CriticalIncidentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedFramework, setSelectedFramework] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [openIncident, setOpenIncident] = useState<string | null>(null)

  const filtered = criticalIncidents.filter((i) => {
    if (selectedCategory !== 'all' && i.category !== selectedCategory) return false
    if (selectedFramework !== 'all' && i.framework !== selectedFramework) return false
    if (selectedDifficulty !== 'all' && i.difficulty !== selectedDifficulty) return false
    return true
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle size={24} className="text-amber-400" />
          <h1 className="text-3xl font-bold">Critical Incidents</h1>
        </div>
        <p className="text-white/50 max-w-2xl">
          Real workplace scenarios grounded in cross-cultural frameworks. Each incident shows what happened, why it happened, and how HR should respond. Based on the Culture Assimilator method used in international HR training.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider">
          <Filter size={12} />
          Filter by category
        </div>
        <div className="flex flex-wrap gap-2">
          {incidentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${selectedCategory === cat.id ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-white/30 self-center mr-1">Framework:</span>
          {['all', 'hofstede', 'globe', 'trompenaars', 'hall'].map((fw) => (
            <button
              key={fw}
              onClick={() => setSelectedFramework(fw)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${selectedFramework === fw ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
            >
              {fw === 'all' ? 'All Frameworks' : frameworkLabels[fw]}
            </button>
          ))}
          <span className="text-xs text-white/30 self-center ml-4 mr-1">Level:</span>
          {['all', 'beginner', 'intermediate', 'advanced'].map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty(d)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all capitalize ${selectedDifficulty === d ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
            >
              {d === 'all' ? 'All Levels' : d}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-white/30">{filtered.length} scenario{filtered.length !== 1 ? 's' : ''}</div>

      {/* Incident cards */}
      <div className="space-y-4">
        {filtered.map((incident, i) => (
          <IncidentCard
            key={incident.id}
            incident={incident}
            delay={i * 0.06}
            isOpen={openIncident === incident.id}
            onToggle={() => setOpenIncident(openIncident === incident.id ? null : incident.id)}
          />
        ))}
      </div>
    </div>
  )
}

function IncidentCard({
  incident,
  delay,
  isOpen,
  onToggle,
}: {
  incident: CriticalIncident
  delay: number
  isOpen: boolean
  onToggle: () => void
}) {
  const [activeTab, setActiveTab] = useState<'explanation' | 'guidance' | 'reflect'>('explanation')

  const cat = incidentCategories.find((c) => c.id === incident.category)

  return (
    <GlassCard delay={delay} className="overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-start justify-between p-5 text-left gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-sm">{cat?.icon}</span>
            <span className="text-xs text-white/40">{cat?.label}</span>
            <span className={`text-xs px-2.5 py-0.5 rounded-full ${difficultyColors[incident.difficulty]} capitalize`}>{incident.difficulty}</span>
            <span className={`text-xs px-2.5 py-0.5 rounded-full ${frameworkColors[incident.framework]}`}>{frameworkLabels[incident.framework]}</span>
          </div>
          <h3 className="font-bold text-white text-base">{incident.title}</h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {incident.cultures.map((c, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/8 text-white/50">{c}</span>
            ))}
          </div>
        </div>
        {isOpen ? <ChevronUp size={18} className="text-white/40 shrink-0 mt-1" /> : <ChevronDown size={18} className="text-white/40 shrink-0 mt-1" />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="border-t border-white/5"
        >
          {/* Situation */}
          <div className="p-5 pb-0">
            <div className="p-4 rounded-xl bg-white/5 mb-4">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">The Situation</p>
              <p className="text-sm text-white/80 leading-relaxed">{incident.situation}</p>
            </div>
            <div className="p-4 rounded-xl bg-red-500/8 border border-red-500/15 mb-4">
              <p className="text-xs text-red-400/70 uppercase tracking-wider mb-2">What Happened</p>
              <p className="text-sm text-white/75 leading-relaxed">{incident.whatHappened}</p>
            </div>
          </div>

          {/* Inner tabs */}
          <div className="flex gap-1 px-5 pb-3">
            {[
              { id: 'explanation' as const, label: 'Cultural Explanation', icon: <BookOpen size={13} /> },
              { id: 'guidance' as const, label: 'HR Guidance', icon: <Check size={13} /> },
              { id: 'reflect' as const, label: 'Reflection', icon: <Lightbulb size={13} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === tab.id ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
              >
                {tab.icon}{tab.label}
              </button>
            ))}
          </div>

          <div className="px-5 pb-5">
            {activeTab === 'explanation' && (
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full ${frameworkColors[incident.framework]}`}>
                  {frameworkLabels[incident.framework]}: {incident.frameworkDimension}
                </div>
                <p className="text-sm text-white/75 leading-relaxed">{incident.culturalExplanation}</p>
              </div>
            )}

            {activeTab === 'guidance' && (
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-emerald-400/70 uppercase tracking-wider mb-2">Do</p>
                  <div className="space-y-2">
                    {incident.hrGuidance.dos.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-white/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-red-400/70 uppercase tracking-wider mb-2">Don't</p>
                  <div className="space-y-2">
                    {incident.hrGuidance.donts.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <XCircle size={13} className="text-red-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-white/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <p className="text-xs text-indigo-400/70 uppercase tracking-wider mb-1.5">Best Practice</p>
                  <p className="text-sm text-white/75 leading-relaxed">{incident.hrGuidance.bestPractice}</p>
                </div>
              </div>
            )}

            {activeTab === 'reflect' && (
              <div className="space-y-3">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Reflection Questions</p>
                {incident.reflectionQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-6 h-6 rounded-full bg-white/10 text-white/60 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                    <p className="text-sm text-white/70 leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </GlassCard>
  )
}

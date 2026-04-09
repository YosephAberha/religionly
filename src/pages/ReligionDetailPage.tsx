import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, Heart, Compass, GitBranch, History, Users, ChevronDown, ChevronUp, ShieldAlert, Globe, Check, XCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import { useState } from 'react'
import GlassCard from '../components/GlassCard'
import ScriptureCard from '../components/ScriptureCard'
import { getReligionById, topicLabels, topicIcons } from '../data/religions'
import { PageId, Religion } from '../types'

interface ReligionDetailPageProps {
  religionId: string
  onNavigate: (page: PageId, religionId?: string) => void
}

type Tab = 'beliefs' | 'texts' | 'practices' | 'denominations' | 'history' | 'sin' | 'etiquette'

const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
  { id: 'beliefs', label: 'Beliefs', icon: Heart },
  { id: 'texts', label: 'Sacred Texts', icon: BookOpen },
  { id: 'practices', label: 'Practices', icon: Compass },
  { id: 'denominations', label: 'Denominations', icon: GitBranch },
  { id: 'history', label: 'History', icon: History },
  { id: 'sin', label: 'Sin & Redemption', icon: ShieldAlert },
  { id: 'etiquette', label: 'Cultural Etiquette', icon: Globe },
]

export default function ReligionDetailPage({ religionId, onNavigate }: ReligionDetailPageProps) {
  const religion = getReligionById(religionId)
  const [activeTab, setActiveTab] = useState<Tab>('beliefs')
  const [expandedBelief, setExpandedBelief] = useState<string | null>('god')

  if (!religion) {
    return (
      <div className="text-center py-20">
        <p className="text-white/50">Religion not found.</p>
        <button onClick={() => onNavigate('browse')} className="text-indigo-400 mt-4 underline">
          Back to Browse
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <button
          onClick={() => onNavigate('browse')}
          className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          Back to Religions
        </button>

        <GlassCard gradient={religion.gradient} glow={religion.glow} className="p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="text-6xl">{religion.emoji}</span>
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold mb-1">{religion.name}</h1>
              <p className="text-white/60 italic mb-3">{religion.tagline}</p>
              <p className="text-sm text-white/70 leading-relaxed max-w-3xl">{religion.overview}</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Users size={14} />
                {religion.followersGlobal}
              </div>
              <div className="flex items-center gap-2">
                <History size={14} />
                Founded {religion.founded}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                ${
                  activeTab === tab.id
                    ? 'bg-white/15 text-white border border-white/20'
                    : 'bg-white/5 text-white/50 border border-transparent hover:bg-white/10 hover:text-white/70'
                }
              `}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'beliefs' && (
            <BeliefsTab
              religion={religion}
              expandedBelief={expandedBelief}
              setExpandedBelief={setExpandedBelief}
            />
          )}
          {activeTab === 'texts' && <TextsTab religion={religion} />}
          {activeTab === 'practices' && <PracticesTab religion={religion} />}
          {activeTab === 'denominations' && <DenominationsTab religion={religion} />}
          {activeTab === 'history' && <HistoryTab religion={religion} />}
          {activeTab === 'sin' && <SinRedemptionTab religion={religion} />}
          {activeTab === 'etiquette' && <EtiquetteTab religion={religion} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function BeliefsTab({
  religion,
  expandedBelief,
  setExpandedBelief,
}: {
  religion: Religion
  expandedBelief: string | null
  setExpandedBelief: (key: string | null) => void
}) {
  const beliefKeys = Object.keys(religion.beliefs) as (keyof typeof religion.beliefs)[]

  return (
    <div className="space-y-3">
      {beliefKeys.map((key) => {
        const belief = religion.beliefs[key]
        const isOpen = expandedBelief === key
        return (
          <GlassCard key={key} className="overflow-hidden">
            <button
              onClick={() => setExpandedBelief(isOpen ? null : key)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{topicIcons[key]}</span>
                <div>
                  <h3 className="font-bold text-white">{topicLabels[key]}</h3>
                  <p className="text-sm text-white/50 mt-0.5">{belief.summary}</p>
                </div>
              </div>
              {isOpen ? (
                <ChevronUp size={18} className="text-white/40 shrink-0 ml-4" />
              ) : (
                <ChevronDown size={18} className="text-white/40 shrink-0 ml-4" />
              )}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 border-t border-white/5 pt-4">
                    <p className="text-sm text-white/70 leading-relaxed mb-5">
                      {belief.details}
                    </p>
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                      Scripture References
                    </h4>
                    <div className="space-y-3">
                      {belief.scriptures.map((s, i) => (
                        <ScriptureCard
                          key={i}
                          scripture={s}
                          accent={religion.accent}
                          delay={i * 0.1}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        )
      })}
    </div>
  )
}

function TextsTab({ religion }: { religion: Religion }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {religion.sacredTexts.map((text, i) => (
        <GlassCard key={i} delay={i * 0.1} className="p-6">
          <h3 className="text-xl font-bold mb-1">{text.name}</h3>
          <p className="text-xs text-white/40 mb-3">Language: {text.language}</p>
          <p className="text-sm text-white/70 leading-relaxed mb-4">{text.description}</p>
          {text.sections && (
            <div>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                Sections
              </h4>
              <div className="flex flex-wrap gap-2">
                {text.sections.map((section, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/60"
                  >
                    {section}
                  </span>
                ))}
              </div>
            </div>
          )}
        </GlassCard>
      ))}
    </div>
  )
}

function PracticesTab({ religion }: { religion: Religion }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      {religion.practices.map((practice, i) => (
        <GlassCard key={i} delay={i * 0.08} className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{practice.icon}</span>
            <div>
              <h3 className="font-bold">{practice.name}</h3>
              <p className="text-xs text-white/40">{practice.frequency}</p>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{practice.description}</p>
        </GlassCard>
      ))}
    </div>
  )
}

function DenominationsTab({ religion }: { religion: Religion }) {
  return (
    <div className="space-y-4">
      {religion.denominations.map((denom, i) => (
        <GlassCard key={i} delay={i * 0.1} className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold">{denom.name}</h3>
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/50">
              {denom.followers}
            </span>
          </div>
          <p className="text-sm text-white/60 mb-4">{denom.description}</p>
          <div className="flex flex-wrap gap-2">
            {denom.distinctives.map((d, j) => (
              <span
                key={j}
                className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/50"
              >
                {d}
              </span>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  )
}

function HistoryTab({ religion }: { religion: Religion }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-white/10" />

      <div className="space-y-0">
        {religion.history.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="relative flex items-start gap-5 py-4"
          >
            {/* Dot */}
            <div
              className="w-[38px] h-[38px] shrink-0 rounded-full flex items-center justify-center z-10 text-xs font-bold"
              style={{ background: religion.accent }}
            >
              {i + 1}
            </div>
            <div>
              <p className="text-xs font-mono text-white/40 mb-1">{event.year}</p>
              <p className="text-sm text-white/80">{event.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SinRedemptionTab({ religion }: { religion: Religion }) {
  const sin = religion.sinAndRedemption
  const [expandedSection, setExpandedSection] = useState<string | null>('view')

  const sections = [
    { id: 'view', title: 'View of Sin', icon: '🔍', content: sin.viewOfSin },
    { id: 'consequences', title: 'Consequences of Sin', icon: '⚡', content: sin.consequences },
    { id: 'forgiveness', title: 'Earning Forgiveness', icon: '🕊️', content: sin.forgiveness },
    { id: 'dealing', title: 'Dealing with Sin', icon: '🛡️', content: sin.dealingWithSin },
  ]

  return (
    <div className="space-y-6">
      {/* Overview sections */}
      {sections.map((section) => {
        const isOpen = expandedSection === section.id
        return (
          <GlassCard key={section.id} className="overflow-hidden">
            <button
              onClick={() => setExpandedSection(isOpen ? null : section.id)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{section.icon}</span>
                <h3 className="font-bold text-white">{section.title}</h3>
              </div>
              {isOpen ? <ChevronUp size={18} className="text-white/40" /> : <ChevronDown size={18} className="text-white/40" />}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 border-t border-white/5 pt-4">
                    <p className="text-sm text-white/70 leading-relaxed">{section.content}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        )
      })}

      {/* Sins Considered */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <AlertTriangle size={18} className="text-amber-400" />
          What is Considered Sinful
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {sin.sinsConsidered.map((s, i) => (
            <GlassCard key={i} delay={i * 0.05} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-white text-sm">{s.sin}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                  s.severity.includes('Grave') || s.severity.includes('Cardinal') || s.severity.includes('Unforgivable') || s.severity.includes('Most Grave')
                    ? 'bg-red-500/20 text-red-400'
                    : s.severity.includes('Major') || s.severity.includes('Fundamental') || s.severity.includes('Root')
                    ? 'bg-orange-500/20 text-orange-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {s.severity}
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Path to Redemption */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Lightbulb size={18} className="text-emerald-400" />
          Path to Redemption
        </h3>
        <GlassCard className="p-5">
          <div className="space-y-3">
            {sin.redemptionPath.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5"
                  style={{ background: religion.accent + '33', color: religion.accent }}
                >
                  {i + 1}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Advice for Strugglers */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Heart size={18} className="text-pink-400" />
          Advice for Those Struggling
        </h3>
        <div className="space-y-3">
          {sin.adviceForStrugglers.map((advice, i) => (
            <GlassCard key={i} delay={i * 0.08} className="p-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5 shrink-0"><Check size={16} /></span>
                <p className="text-sm text-white/70 leading-relaxed">{advice}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Scripture References */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <BookOpen size={18} className="text-indigo-400" />
          Key Scriptures on Sin & Forgiveness
        </h3>
        <div className="space-y-3">
          {sin.scriptures.map((s, i) => (
            <ScriptureCard key={i} scripture={s} accent={religion.accent} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </div>
  )
}

function EtiquetteTab({ religion }: { religion: Religion }) {
  const etiquette = religion.culturalEtiquette

  return (
    <div className="space-y-6">
      {/* Overview */}
      <GlassCard className="p-5">
        <p className="text-sm text-white/70 leading-relaxed">{etiquette.overview}</p>
      </GlassCard>

      {/* Do's and Don'ts side by side */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Do's */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Check size={18} className="text-emerald-400" />
            Do's
          </h3>
          <div className="space-y-3">
            {etiquette.doList.map((item, i) => (
              <GlassCard key={i} delay={i * 0.06} className="p-4">
                <div className="flex items-start gap-2 mb-1.5">
                  <span className="text-emerald-400 mt-0.5 shrink-0"><Check size={14} /></span>
                  <h4 className="text-sm font-semibold text-emerald-300">{item.rule}</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed ml-5">{item.explanation}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Don'ts */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <XCircle size={18} className="text-red-400" />
            Don'ts
          </h3>
          <div className="space-y-3">
            {etiquette.dontList.map((item, i) => (
              <GlassCard key={i} delay={i * 0.06} className="p-4">
                <div className="flex items-start gap-2 mb-1.5">
                  <span className="text-red-400 mt-0.5 shrink-0"><XCircle size={14} /></span>
                  <h4 className="text-sm font-semibold text-red-300">{item.rule}</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed ml-5">{item.explanation}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Practical Info Grid */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Practical Guide</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Greetings', icon: '👋', content: etiquette.greetings },
            { title: 'Dress Code', icon: '👔', content: etiquette.dressCode },
            { title: 'Dietary Rules', icon: '🍽️', content: etiquette.dietaryRules },
            { title: 'Sacred Spaces', icon: '🏛️', content: etiquette.sacredSpaces },
            { title: 'Religious Events', icon: '📅', content: etiquette.religiousEvents },
          ].map((item, i) => (
            <GlassCard key={i} delay={i * 0.08} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{item.icon}</span>
                <h4 className="font-semibold text-white text-sm">{item.title}</h4>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{item.content}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Common Misconceptions */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <AlertTriangle size={18} className="text-amber-400" />
          Common Misconceptions
        </h3>
        <div className="space-y-3">
          {etiquette.commonMisconceptions.map((item, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-4">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-red-300/80 font-medium">{item.misconception}</p>
              </div>
              <div className="flex items-start gap-2 ml-0">
                <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm text-emerald-300/70">{item.reality}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}

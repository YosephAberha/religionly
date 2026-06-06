import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageSquare, ArrowLeftRight, Check, AlertTriangle } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { communicationProfiles, contextLevelLabels, directnessLabels } from '../data/communicationStyles'
import { CommunicationProfile } from '../types'

const contextColors: Record<string, string> = {
  'very-low': 'text-emerald-400 bg-emerald-500/15',
  low: 'text-teal-400 bg-teal-500/15',
  medium: 'text-amber-400 bg-amber-500/15',
  high: 'text-orange-400 bg-orange-500/15',
  'very-high': 'text-rose-400 bg-rose-500/15',
}

const directnessColors: Record<string, string> = {
  'very-direct': 'text-blue-300 bg-blue-500/15',
  direct: 'text-sky-300 bg-sky-500/15',
  moderate: 'text-yellow-300 bg-yellow-500/15',
  indirect: 'text-orange-300 bg-orange-500/15',
  'very-indirect': 'text-red-300 bg-red-500/15',
}

const hierarchyColors: Record<string, string> = {
  flat: 'text-emerald-300 bg-emerald-500/15',
  moderate: 'text-amber-300 bg-amber-500/15',
  strict: 'text-rose-300 bg-rose-500/15',
}

const timeColors: Record<string, string> = {
  monochronic: 'text-indigo-300 bg-indigo-500/15',
  mixed: 'text-purple-300 bg-purple-500/15',
  polychronic: 'text-pink-300 bg-pink-500/15',
}

export default function CommunicationStylesPage() {
  const [compareMode, setCompareMode] = useState(false)
  const [selectedA, setSelectedA] = useState<string>('germanic')
  const [selectedB, setSelectedB] = useState<string>('east-asian')
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null)

  const profileA = communicationProfiles.find((p) => p.id === selectedA)!
  const profileB = communicationProfiles.find((p) => p.id === selectedB)!

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare size={24} className="text-sky-400" />
            <h1 className="text-3xl font-bold">Communication Styles</h1>
          </div>
          <p className="text-white/50 max-w-xl">
            How different cultures communicate at work — context level, directness, time orientation, meeting styles and hierarchy. Based on Hall & Hall and Trompenaars frameworks.
          </p>
        </div>
        <button
          onClick={() => setCompareMode(!compareMode)}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border shrink-0 ${compareMode ? 'bg-sky-500/20 border-sky-500/40 text-sky-300' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}`}
        >
          <ArrowLeftRight size={16} />
          {compareMode ? 'Exit Compare' : 'Compare Two Regions'}
        </button>
      </div>

      {/* Compare mode */}
      {compareMode && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <ProfileSelector label="Region A" value={selectedA} onChange={setSelectedA} exclude={selectedB} />
            <ProfileSelector label="Region B" value={selectedB} onChange={setSelectedB} exclude={selectedA} />
          </div>
          <CompareView profileA={profileA} profileB={profileB} />
        </motion.div>
      )}

      {/* Browse mode */}
      {!compareMode && (
        <div className="grid md:grid-cols-2 gap-5">
          {communicationProfiles.map((profile, i) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              delay={i * 0.08}
              isOpen={expandedProfile === profile.id}
              onToggle={() => setExpandedProfile(expandedProfile === profile.id ? null : profile.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ProfileSelector({ label, value, onChange, exclude }: { label: string; value: string; onChange: (v: string) => void; exclude: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
      <div className="flex flex-wrap gap-2">
        {communicationProfiles
          .filter((p) => p.id !== exclude)
          .map((p) => (
            <button
              key={p.id}
              onClick={() => onChange(p.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${value === p.id ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
            >
              {p.emoji} {p.region}
            </button>
          ))}
      </div>
    </div>
  )
}

function CompareView({ profileA, profileB }: { profileA: CommunicationProfile; profileB: CommunicationProfile }) {
  const rows = [
    { label: 'Context Level', a: contextLevelLabels[profileA.contextLevel], b: contextLevelLabels[profileB.contextLevel] },
    { label: 'Directness', a: directnessLabels[profileA.directness], b: directnessLabels[profileB.directness] },
    { label: 'Formality', a: profileA.formality.replace('-', ' '), b: profileB.formality.replace('-', ' ') },
    { label: 'Time Orientation', a: profileA.timeOrientation, b: profileB.timeOrientation },
    { label: 'Meeting Hierarchy', a: profileA.hierarchyInMeetings, b: profileB.hierarchyInMeetings },
    { label: 'Conflict Style', a: profileA.conflictStyle, b: profileB.conflictStyle },
    { label: 'Silence Meaning', a: profileA.silenceMeaning, b: profileB.silenceMeaning },
    { label: 'Meeting Style', a: profileA.meetingStyle, b: profileB.meetingStyle },
  ]

  return (
    <GlassCard className="overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 border-b border-white/10">
        <div className="p-4 text-xs text-white/30 uppercase tracking-wider">Dimension</div>
        <div className="p-4 border-l border-white/10">
          <span className="text-lg mr-2">{profileA.emoji}</span>
          <span className="font-bold text-white">{profileA.region}</span>
        </div>
        <div className="p-4 border-l border-white/10">
          <span className="text-lg mr-2">{profileB.emoji}</span>
          <span className="font-bold text-white">{profileB.region}</span>
        </div>
      </div>
      {rows.map((row, i) => (
        <div key={i} className={`grid grid-cols-3 border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
          <div className="p-4 text-xs font-medium text-white/50">{row.label}</div>
          <div className="p-4 border-l border-white/5 text-sm text-white/75 capitalize leading-relaxed">{row.a}</div>
          <div className="p-4 border-l border-white/5 text-sm text-white/75 capitalize leading-relaxed">{row.b}</div>
        </div>
      ))}

      {/* HR Tips comparison */}
      <div className="grid grid-cols-2 border-t border-white/10">
        <div className="p-5 border-r border-white/10">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-3">HR Tips — {profileA.region}</p>
          <div className="space-y-2">
            {profileA.hrTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-xs text-white/65 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-3">HR Tips — {profileB.region}</p>
          <div className="space-y-2">
            {profileB.hrTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-xs text-white/65 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}

function ProfileCard({ profile, delay, isOpen, onToggle }: { profile: CommunicationProfile; delay: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <GlassCard delay={delay} hoverable className="overflow-hidden" onClick={onToggle}>
      <div className="p-5">
        {/* Top */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{profile.emoji}</span>
            <div>
              <h3 className="font-bold text-white text-lg">{profile.region}</h3>
              <p className="text-xs text-white/40">{profile.countries.join(' · ')}</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${contextColors[profile.contextLevel]}`}>{contextLevelLabels[profile.contextLevel]}</span>
          <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${directnessColors[profile.directness]}`}>{directnessLabels[profile.directness]}</span>
          <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${timeColors[profile.timeOrientation]}`}>{profile.timeOrientation}</span>
          <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${hierarchyColors[profile.hierarchyInMeetings]}`}>Hierarchy: {profile.hierarchyInMeetings}</span>
        </div>

        {!isOpen && <p className="text-sm text-white/55 line-clamp-2">{profile.conflictStyle}</p>}
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-white/5 px-5 pb-5 space-y-4">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1.5">Conflict Style</p>
            <p className="text-sm text-white/70 leading-relaxed">{profile.conflictStyle}</p>
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1.5">Silence Meaning</p>
            <p className="text-sm text-white/70 leading-relaxed">{profile.silenceMeaning}</p>
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1.5">Meeting Style</p>
            <p className="text-sm text-white/70 leading-relaxed">{profile.meetingStyle}</p>
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider mb-2">HR Tips</p>
            <div className="space-y-2">
              {profile.hrTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">{tip}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Watch Out For</p>
            <div className="space-y-2">
              {profile.watchOutFor.map((w, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AlertTriangle size={13} className="text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </GlassCard>
  )
}

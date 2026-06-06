import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Clock, Utensils, Shirt, CalendarDays, ClipboardList, Scale, Search, ChevronDown, ChevronUp, Check, XCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { workplaceAccommodations } from '../data/workplaceAccommodation'
import { religions } from '../data/religions'
import { WorkplaceAccommodation } from '../types'

export default function WorkplaceGuidePage() {
  const [selectedReligion, setSelectedReligion] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openCard, setOpenCard] = useState<string | null>(null)

  const filtered = workplaceAccommodations.filter((a) => {
    if (selectedReligion !== 'all' && a.religionId !== selectedReligion) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return (
        a.dietaryRestrictions.summary.toLowerCase().includes(q) ||
        a.prayerRequirements.notes.toLowerCase().includes(q) ||
        a.holidays.some((h) => h.name.toLowerCase().includes(q)) ||
        a.germanLegalNote.toLowerCase().includes(q)
      )
    }
    return true
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Briefcase size={24} className="text-indigo-400" />
          <h1 className="text-3xl font-bold">Workplace Accommodation Guide</h1>
        </div>
        <p className="text-white/50 max-w-2xl">
          A practical HR reference for accommodating religious diversity in the workplace. Covers prayer, diet, religious dress, holidays, and German legal obligations — per religion.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Search by topic, holiday, keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedReligion('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedReligion === 'all' ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
          >
            All Religions
          </button>
          {religions.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedReligion(r.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedReligion === r.id ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
            >
              {r.emoji} {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {filtered.map((accommodation, idx) => {
          const religion = religions.find((r) => r.id === accommodation.religionId)
          if (!religion) return null
          return (
            <AccommodationCard
              key={accommodation.religionId}
              accommodation={accommodation}
              religion={religion}
              delay={idx * 0.1}
              isOpen={openCard === accommodation.religionId}
              onToggle={() => setOpenCard(openCard === accommodation.religionId ? null : accommodation.religionId)}
            />
          )
        })}
      </div>
    </div>
  )
}

function AccommodationCard({
  accommodation,
  religion,
  delay,
  isOpen,
  onToggle,
}: {
  accommodation: WorkplaceAccommodation
  religion: { name: string; emoji: string; gradient: string; glow: string; accent: string }
  delay: number
  isOpen: boolean
  onToggle: () => void
}) {
  const [activeSection, setActiveSection] = useState<string>('prayer')

  const sections = [
    { id: 'prayer', label: 'Prayer', icon: <Clock size={14} /> },
    { id: 'diet', label: 'Diet', icon: <Utensils size={14} /> },
    { id: 'dress', label: 'Dress', icon: <Shirt size={14} /> },
    { id: 'holidays', label: 'Holidays', icon: <CalendarDays size={14} /> },
    { id: 'checklist', label: 'Checklist', icon: <ClipboardList size={14} /> },
    { id: 'legal', label: 'Legal', icon: <Scale size={14} /> },
  ]

  return (
    <GlassCard gradient={religion.gradient} glow={religion.glow} delay={delay} className="overflow-hidden">
      {/* Header */}
      <button onClick={onToggle} className="w-full flex items-center justify-between p-6 text-left">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{religion.emoji}</span>
          <div>
            <h2 className="text-xl font-bold">{religion.name}</h2>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {accommodation.prayerRequirements.hasMandatory && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300">Prayer during work hours</span>
              )}
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60">{accommodation.holidays.length} key holidays</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60">{accommodation.hrChecklist.length} checklist items</span>
            </div>
          </div>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-white/40 shrink-0" /> : <ChevronDown size={20} className="text-white/40 shrink-0" />}
      </button>

      {/* Expanded content */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-white/10"
        >
          {/* Section tabs */}
          <div className="flex overflow-x-auto gap-1 px-6 pt-4 pb-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeSection === s.id ? 'bg-white/15 text-white border border-white/20' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
              >
                {s.icon}{s.label}
              </button>
            ))}
          </div>

          <div className="p-6 pt-4">
            {activeSection === 'prayer' && (
              <div className="space-y-3">
                <p className="text-sm text-white/70">{accommodation.prayerRequirements.frequency} · {accommodation.prayerRequirements.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {accommodation.prayerRequirements.times.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/70">{t}</span>
                  ))}
                </div>
                <p className="text-sm text-white/60">{accommodation.prayerRequirements.spaceRequirements}</p>
                {accommodation.prayerRequirements.washingRequired && (
                  <p className="text-xs text-amber-300/80 bg-amber-500/10 px-3 py-2 rounded-lg">Ritual washing required before prayer — sink access needed.</p>
                )}
                <p className="text-sm text-white/50 leading-relaxed border-t border-white/5 pt-3">{accommodation.prayerRequirements.notes}</p>
              </div>
            )}

            {activeSection === 'diet' && (
              <div className="space-y-4">
                <p className="text-sm text-white/70">{accommodation.dietaryRestrictions.summary}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Prohibited</p>
                    <div className="space-y-1.5">
                      {accommodation.dietaryRestrictions.prohibited.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <XCircle size={13} className="text-red-400 mt-0.5 shrink-0" />
                          <span className="text-xs text-white/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Tips for Team Events</p>
                    <div className="space-y-1.5">
                      {accommodation.dietaryRestrictions.eventTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Lightbulb size={13} className="text-amber-400 mt-0.5 shrink-0" />
                          <span className="text-xs text-white/70">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'dress' && (
              <div className="space-y-4">
                <p className="text-sm text-white/70">{accommodation.dresscode.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {accommodation.dresscode.specificItems.map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-white/70">{item}</span>
                  ))}
                </div>
                <div className="space-y-2 border-t border-white/5 pt-3">
                  {accommodation.dresscode.visitTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <AlertTriangle size={13} className="text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-white/70">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'holidays' && (
              <div className="grid md:grid-cols-2 gap-4">
                {accommodation.holidays.map((holiday, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4 className="font-semibold text-white text-sm">{holiday.name}</h4>
                      {holiday.fastingInvolved && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 shrink-0">Fasting</span>}
                    </div>
                    <p className="text-xs text-white/40 mb-1.5">{holiday.approxDates}</p>
                    <p className="text-xs text-white/60 mb-2">{holiday.significance}</p>
                    <p className="text-xs text-emerald-300/80 bg-emerald-500/10 px-2 py-1.5 rounded-lg">💡 {holiday.accommodationTip}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'checklist' && (
              <div className="space-y-2">
                {accommodation.hrChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 bg-white/10 text-white/60">{i + 1}</div>
                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'legal' && (
              <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Scale size={16} className="text-sky-400" />
                  <span className="text-sm font-semibold text-sky-300">German Legal Framework</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{accommodation.germanLegalNote}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </GlassCard>
  )
}

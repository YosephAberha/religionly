import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Globe, Sparkles } from 'lucide-react'
import { useState } from 'react'
import GlassCard from '../components/GlassCard'
import TopicPill from '../components/TopicPill'
import ScriptureCard from '../components/ScriptureCard'
import { religions, topicLabels, topicIcons } from '../data/religions'
import { PageId } from '../types'

interface HomePageProps {
  onNavigate: (page: PageId, religionId?: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>('god')
  const beliefKey = selectedTopic as keyof typeof religions[0]['beliefs']

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative text-center py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Explore World Religions
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-8">
            Compare beliefs, sacred texts, practices, and traditions across Christianity, Islam, Judaism, Hinduism, Buddhism, and Sikhism — with real scripture references.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('browse')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow"
            >
              <BookOpen size={16} />
              Browse Religions
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-colors"
            >
              <Globe size={16} />
              Explore World Map
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Quick Compare Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={20} className="text-purple-400" />
          <h2 className="text-2xl font-bold">Quick Compare</h2>
        </div>
        <p className="text-white/40 text-sm mb-6">
          Select a topic to see how each religion approaches it, with direct scripture references.
        </p>

        {/* Topic pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(topicLabels).map(([key, label]) => (
            <TopicPill
              key={key}
              label={label}
              icon={topicIcons[key]}
              active={selectedTopic === key}
              onClick={() => setSelectedTopic(key)}
            />
          ))}
        </div>

        {/* Religion comparison cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {religions.map((religion, i) => {
            const belief = religion.beliefs[beliefKey]
            return (
              <GlassCard
                key={religion.id}
                gradient={religion.gradient}
                glow={religion.glow}
                delay={i * 0.08}
                hoverable
                onClick={() => onNavigate('religion', religion.id)}
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{religion.emoji}</span>
                  <div>
                    <h3 className="font-bold text-lg">{religion.name}</h3>
                    <p className="text-xs text-white/50">{religion.followersGlobal}</p>
                  </div>
                </div>

                <p className="text-sm font-medium text-white/90 mb-3">
                  {belief.summary}
                </p>

                <div className="space-y-3 mt-4">
                  {belief.scriptures.slice(0, 2).map((s, j) => (
                    <ScriptureCard
                      key={j}
                      scripture={s}
                      accent={religion.accent}
                      delay={i * 0.08 + j * 0.1}
                    />
                  ))}
                </div>
              </GlassCard>
            )
          })}
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-5">
        <GlassCard delay={0.1} className="p-6">
          <BookOpen size={24} className="text-indigo-400 mb-3" />
          <h3 className="font-bold mb-1">Sacred Texts</h3>
          <p className="text-sm text-white/50">
            Access information about the Bible, Quran, Torah, Vedas, Tripitaka, Guru Granth Sahib, and more.
          </p>
        </GlassCard>
        <GlassCard delay={0.2} className="p-6">
          <Sparkles size={24} className="text-purple-400 mb-3" />
          <h3 className="font-bold mb-1">Denominations & History</h3>
          <p className="text-sm text-white/50">
            Explore the branches, movements, and historical timelines of each faith tradition.
          </p>
        </GlassCard>
        <GlassCard delay={0.3} className="p-6">
          <Globe size={24} className="text-pink-400 mb-3" />
          <h3 className="font-bold mb-1">Interactive World Map</h3>
          <p className="text-sm text-white/50">
            See religion demographics by country, trace origins and expansion, and explore global power rankings.
          </p>
        </GlassCard>
      </section>
    </div>
  )
}

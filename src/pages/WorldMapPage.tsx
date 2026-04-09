import { useState, useMemo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, MapPin, TrendingUp, Users, X, ChevronRight, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import {
  countryReligionData,
  globalStats,
  religionColors,
  religionOrigins,
  getDominantColor,
  getCountryByName,
} from '../data/countryReligions'
import type { CountryReligionData } from '../types'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

type TabId = 'overview' | 'origins' | 'power'

export default function WorldMapPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryReligionData | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string>('')
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [expandedOrigin, setExpandedOrigin] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [filterReligion, setFilterReligion] = useState<string>('all')

  const countryNameMap: Record<string, string> = useMemo(() => ({
    'United States of America': 'United States',
    'Dominican Rep.': 'Dominican Republic',
    'Dem. Rep. Congo': 'Dem. Rep. Congo',
    'Central African Rep.': 'Central African Republic',
    'S. Sudan': 'South Sudan',
    'Eq. Guinea': 'Equatorial Guinea',
    'eSwatini': 'Eswatini',
    'Solomon Is.': 'Solomon Islands',
    'Bosnia and Herz.': 'Bosnia and Herz.',
    'Czech Rep.': 'Czech Republic',
    'N. Korea': 'North Korea',
    'S. Korea': 'South Korea',
    'Côte d\'Ivoire': "Côte d'Ivoire",
  }), [])

  const resolveCountryName = (geoName: string) => {
    return countryNameMap[geoName] || geoName
  }

  const getCountryFillColor = (geoName: string) => {
    const name = resolveCountryName(geoName)
    const country = getCountryByName(name)
    if (!country) return '#1e293b'

    if (filterReligion !== 'all') {
      const pct = (country.religions as Record<string, number | undefined>)[filterReligion] || 0
      if (pct === 0) return '#1e293b'
      const opacity = Math.max(0.2, pct / 100)
      const color = religionColors[filterReligion] || '#64748b'
      return adjustOpacity(color, opacity)
    }

    return getDominantColor(country.dominantReligion)
  }

  const adjustOpacity = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const mix = (c: number) => Math.round(c * opacity + 30 * (1 - opacity))
    return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`
  }

  const handleCountryClick = (geoName: string) => {
    const name = resolveCountryName(geoName)
    const country = getCountryByName(name)
    if (country) {
      setSelectedCountry(country)
    }
  }

  const sortedReligions = (country: CountryReligionData) => {
    return Object.entries(country.religions)
      .filter(([, v]) => v && v > 0)
      .sort(([, a], [, b]) => (b || 0) - (a || 0)) as [string, number][]
  }

  const religionLabel = (key: string) => {
    const labels: Record<string, string> = {
      christianity: 'Christianity', islam: 'Islam', judaism: 'Judaism',
      hinduism: 'Hinduism', buddhism: 'Buddhism', sikhism: 'Sikhism',
      folk: 'Folk Religions', unaffiliated: 'Unaffiliated', other: 'Other',
    }
    return labels[key] || key
  }

  const religionEmoji = (key: string) => {
    const emojis: Record<string, string> = {
      christianity: '✝️', islam: '☪️', judaism: '✡️',
      hinduism: '🕉️', buddhism: '🧘', sikhism: '🪯',
      folk: '🌿', unaffiliated: '🔘', other: '🔷',
    }
    return emojis[key] || '🔷'
  }

  const tabs: { id: TabId; label: string; icon: typeof Globe }[] = [
    { id: 'overview', label: 'Global Overview', icon: Globe },
    { id: 'origins', label: 'Origins & Expansion', icon: MapPin },
    { id: 'power', label: 'Religion Power Index', icon: TrendingUp },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          <span className="text-gradient bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
            World Religion Map
          </span>
        </h1>
        <p className="text-white/50 text-sm">
          Explore how faiths shape nations — click any country to see its religious landscape
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map(tab => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Religion Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterReligion('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterReligion === 'all' ? 'bg-white/15 text-white border border-white/20' : 'text-white/40 hover:text-white/70 bg-white/5'
              }`}
            >
              All (Dominant)
            </button>
            {Object.entries(religionColors).filter(([k]) => k !== 'other' && k !== 'unaffiliated').map(([key, color]) => (
              <button
                key={key}
                onClick={() => setFilterReligion(key === filterReligion ? 'all' : key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filterReligion === key ? 'text-white border border-white/20' : 'text-white/40 hover:text-white/70'
                }`}
                style={{
                  backgroundColor: filterReligion === key ? color + '33' : 'rgba(255,255,255,0.05)',
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                {religionLabel(key)}
              </button>
            ))}
          </div>

          {/* Interactive Map */}
          <GlassCard gradient="from-slate-800/50 to-slate-900/50">
            <div className="relative" style={{ minHeight: 400 }}>
              <ComposableMap
                projectionConfig={{ scale: 147, center: [10, 5] }}
                style={{ width: '100%', height: 'auto' }}
              >
                <ZoomableGroup>
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                      geographies.map(geo => {
                        const geoName = geo.properties.name
                        const isHovered = hoveredCountry === geoName
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={getCountryFillColor(geoName)}
                            stroke="#0f172a"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: 'none', transition: 'fill 0.3s' },
                              hover: {
                                outline: 'none',
                                fill: isHovered ? '#fff' : getCountryFillColor(geoName),
                                filter: 'brightness(1.4)',
                                cursor: 'pointer',
                              },
                              pressed: { outline: 'none' },
                            }}
                            onMouseEnter={(e) => {
                              setHoveredCountry(geoName)
                              setTooltipPos({ x: e.clientX, y: e.clientY })
                            }}
                            onMouseLeave={() => setHoveredCountry('')}
                            onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
                            onClick={() => handleCountryClick(geoName)}
                          />
                        )
                      })
                    }
                  </Geographies>

                  {/* Origin markers when no filter */}
                  {filterReligion === 'all' && religionOrigins.map(origin => (
                    <Marker key={origin.religion} coordinates={origin.originCoords}>
                      <circle r={3} fill="#fff" opacity={0.8} />
                      <circle r={6} fill="#fff" opacity={0.2} />
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>

              {/* Hover Tooltip */}
              {hoveredCountry && (
                <div
                  className="fixed z-50 pointer-events-none"
                  style={{ left: tooltipPos.x + 12, top: tooltipPos.y - 10 }}
                >
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2 shadow-xl">
                    <p className="text-white text-sm font-medium">{hoveredCountry}</p>
                    {(() => {
                      const c = getCountryByName(resolveCountryName(hoveredCountry))
                      if (!c) return <p className="text-white/40 text-xs">No data available</p>
                      const top = sortedReligions(c).slice(0, 2)
                      return (
                        <div className="space-y-0.5 mt-1">
                          {top.map(([k, v]) => (
                            <div key={k} className="flex items-center gap-1.5 text-xs">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: religionColors[k] }} />
                              <span className="text-white/60">{religionLabel(k)}</span>
                              <span className="text-white/80 font-medium ml-auto">{v}%</span>
                            </div>
                          ))}
                        </div>
                      )
                    })()}
                  </div>
                </div>
              )}
            </div>

            {/* Map Legend */}
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5">
              {filterReligion === 'all' ? (
                Object.entries(religionColors).map(([key, color]) => (
                  <div key={key} className="flex items-center gap-1.5 text-xs text-white/50">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color }} />
                    {religionLabel(key)}
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/40">Intensity shows % of</span>
                  <span className="text-xs font-medium" style={{ color: religionColors[filterReligion] }}>
                    {religionEmoji(filterReligion)} {religionLabel(filterReligion)}
                  </span>
                  <span className="text-xs text-white/40">population</span>
                </div>
              )}
            </div>
          </GlassCard>

          {/* Global Stats Grid */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Users size={18} className="text-white/40" />
              Global Religion Statistics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {globalStats.map((stat, i) => (
                <GlassCard key={stat.name} delay={i * 0.05} hoverable>
                  <div className="text-center space-y-1">
                    <span className="text-2xl">{stat.emoji}</span>
                    <p className="text-sm font-medium text-white">{stat.name}</p>
                    <p className="text-lg font-bold" style={{ color: stat.color }}>{stat.percentage}%</p>
                    <p className="text-xs text-white/40">{stat.followers}</p>
                    {/* Mini bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: stat.color }}
                      />
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'origins' && (
        <div className="space-y-4">
          <p className="text-white/50 text-sm">
            Trace how each religion began and spread across the world through trade, conquest, migration, and missionary work.
          </p>

          {/* Origins Map with markers */}
          <GlassCard gradient="from-slate-800/50 to-slate-900/50">
            <ComposableMap
              projectionConfig={{ scale: 147, center: [10, 5] }}
              style={{ width: '100%', height: 'auto' }}
            >
              <ZoomableGroup>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map(geo => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#1e293b"
                        stroke="#0f172a"
                        strokeWidth={0.5}
                        style={{ default: { outline: 'none' }, hover: { outline: 'none', fill: '#334155' }, pressed: { outline: 'none' } }}
                      />
                    ))
                  }
                </Geographies>

                {/* Origin points */}
                {religionOrigins.map(origin => {
                  const color = religionColors[origin.religion.toLowerCase()] || '#fff'
                  const isExpanded = expandedOrigin === origin.religion
                  return (
                    <g key={origin.religion}>
                      {/* Expansion lines & points when expanded */}
                      {isExpanded && origin.expansionPhases.map((phase, i) => {
                        if (!phase.coords) return null
                        return (
                          <g key={i}>
                            <line
                              x1={0} y1={0} x2={0} y2={0}
                              stroke={color}
                              strokeWidth={1}
                              opacity={0.3}
                            />
                            <Marker coordinates={phase.coords}>
                              <circle r={4} fill={color} opacity={0.5} />
                              <circle r={2} fill={color} />
                            </Marker>
                          </g>
                        )
                      })}

                      {/* Origin marker */}
                      <Marker coordinates={origin.originCoords}>
                        <circle
                          r={isExpanded ? 8 : 5}
                          fill={color}
                          opacity={0.3}
                          className="animate-pulse"
                        />
                        <circle
                          r={isExpanded ? 5 : 3}
                          fill={color}
                          cursor="pointer"
                          onClick={() => setExpandedOrigin(isExpanded ? null : origin.religion)}
                        />
                        <text
                          textAnchor="middle"
                          y={-12}
                          fill="#fff"
                          fontSize={8}
                          fontWeight="bold"
                          style={{ pointerEvents: 'none' }}
                        >
                          {origin.religion}
                        </text>
                      </Marker>
                    </g>
                  )
                })}
              </ZoomableGroup>
            </ComposableMap>
          </GlassCard>

          {/* Origin Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {religionOrigins.map((origin, i) => {
              const color = religionColors[origin.religion.toLowerCase()] || '#64748b'
              const isExpanded = expandedOrigin === origin.religion
              return (
                <GlassCard key={origin.religion} delay={i * 0.1}>
                  <button
                    onClick={() => setExpandedOrigin(isExpanded ? null : origin.religion)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: color + '22' }}>
                          {religionEmoji(origin.religion.toLowerCase())}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{origin.religion}</h3>
                          <p className="text-white/40 text-xs">{origin.originPlace} &middot; {origin.originYear}</p>
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp size={16} className="text-white/30" /> : <ChevronDown size={16} className="text-white/30" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3">
                          {origin.expansionPhases.map((phase, pi) => (
                            <div key={pi} className="flex gap-3">
                              <div className="flex flex-col items-center">
                                <div className="w-2.5 h-2.5 rounded-full mt-1" style={{ backgroundColor: color }} />
                                {pi < origin.expansionPhases.length - 1 && (
                                  <div className="w-0.5 flex-1 mt-1" style={{ backgroundColor: color + '33' }} />
                                )}
                              </div>
                              <div className="pb-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: color + '22', color }}>{phase.period}</span>
                                  <span className="text-xs text-white/50">{phase.region}</span>
                                </div>
                                <p className="text-xs text-white/60 mt-1 leading-relaxed">{phase.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              )
            })}
          </div>
        </div>
      )}

      {activeTab === 'power' && (
        <div className="space-y-6">
          <p className="text-white/50 text-sm">
            Religion influence measured by population, number of majority countries, geographic spread, and growth trends.
          </p>

          {/* Power Rankings */}
          {(() => {
            const powerData = globalStats
              .filter(s => !['Other', 'Unaffiliated', 'Folk Religions'].includes(s.name))
              .map(stat => {
                const key = stat.name.toLowerCase()
                const majorityCountries = countryReligionData.filter(c => c.dominantReligion === key).length
                const presenceCountries = countryReligionData.filter(c => {
                  const val = (c.religions as Record<string, number | undefined>)[key]
                  return val && val > 1
                }).length
                const totalFollowers = stat.percentage
                const spreadScore = Math.min(100, (presenceCountries / countryReligionData.length) * 100 * 1.5)
                const dominanceScore = Math.min(100, (majorityCountries / 30) * 100)
                const overallScore = Math.round(totalFollowers * 0.4 + spreadScore * 0.3 + dominanceScore * 0.3)

                return {
                  ...stat,
                  majorityCountries,
                  presenceCountries,
                  spreadScore: Math.round(spreadScore),
                  dominanceScore: Math.round(dominanceScore),
                  overallScore,
                }
              })
              .sort((a, b) => b.overallScore - a.overallScore)

            return (
              <div className="space-y-4">
                {powerData.map((religion, i) => (
                  <GlassCard key={religion.name} delay={i * 0.1}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg" style={{ backgroundColor: religion.color + '22', color: religion.color }}>
                            {i + 1}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold flex items-center gap-2">
                              <span className="text-xl">{religion.emoji}</span>
                              {religion.name}
                            </h3>
                            <p className="text-white/40 text-xs">{religion.followers} followers worldwide</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold" style={{ color: religion.color }}>{religion.overallScore}</p>
                          <p className="text-xs text-white/40">Power Score</p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-white">{religion.percentage}%</p>
                          <p className="text-xs text-white/40">World Population</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-white">{religion.majorityCountries}</p>
                          <p className="text-xs text-white/40">Majority Countries</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-white">{religion.presenceCountries}</p>
                          <p className="text-xs text-white/40">Countries Present</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-white">{religion.spreadScore}%</p>
                          <p className="text-xs text-white/40">Geographic Spread</p>
                        </div>
                      </div>

                      {/* Overall bar */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white/40">Overall Influence</span>
                          <span style={{ color: religion.color }}>{religion.overallScore}/100</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${religion.overallScore}%` }}
                            transition={{ duration: 1.2, delay: i * 0.15 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: religion.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))}

                {/* Methodology note */}
                <div className="text-xs text-white/30 text-center mt-4 px-4">
                  Power Score = Population % (40%) + Geographic Spread (30%) + Majority Countries (30%).
                  Based on demographic data from Pew Research Center and World Religion Database estimates.
                </div>
              </div>
            )
          })()}
        </div>
      )}

      {/* Country Detail Drawer */}
      <AnimatePresence>
        {selectedCountry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCountry(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:w-96 z-50 bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedCountry.name}</h2>
                    <p className="text-white/40 text-sm mt-0.5">
                      Population: {(selectedCountry.population / 1_000_000).toFixed(1)}M
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Dominant religion badge */}
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ backgroundColor: getDominantColor(selectedCountry.dominantReligion) + '22' }}
                >
                  <span className="text-lg">{religionEmoji(selectedCountry.dominantReligion)}</span>
                  <div>
                    <p className="text-xs text-white/40">Dominant Religion</p>
                    <p className="text-sm font-semibold" style={{ color: getDominantColor(selectedCountry.dominantReligion) }}>
                      {religionLabel(selectedCountry.dominantReligion)}
                    </p>
                  </div>
                </div>

                {/* Religion Breakdown */}
                <div>
                  <h3 className="text-sm font-semibold text-white/70 mb-3">Religion Breakdown</h3>
                  <div className="space-y-3">
                    {sortedReligions(selectedCountry).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{religionEmoji(key)}</span>
                            <span className="text-sm text-white/80">{religionLabel(key)}</span>
                          </div>
                          <span className="text-sm font-bold" style={{ color: religionColors[key] }}>
                            {value}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: religionColors[key] }}
                          />
                        </div>
                        {/* Estimated followers in this country */}
                        <p className="text-xs text-white/30 mt-0.5">
                          ~{((value / 100) * selectedCountry.population / 1_000_000).toFixed(1)}M people
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pie-chart-like visual */}
                <div>
                  <h3 className="text-sm font-semibold text-white/70 mb-3">Composition</h3>
                  <div className="flex h-4 rounded-full overflow-hidden">
                    {sortedReligions(selectedCountry).map(([key, value]) => (
                      <motion.div
                        key={key}
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 0.8 }}
                        className="h-full first:rounded-l-full last:rounded-r-full"
                        style={{ backgroundColor: religionColors[key] }}
                        title={`${religionLabel(key)}: ${value}%`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                    {sortedReligions(selectedCountry).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1 text-xs text-white/40">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: religionColors[key] }} />
                        {value}%
                      </div>
                    ))}
                  </div>
                </div>

                {selectedCountry.notes && (
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-white/50 italic">{selectedCountry.notes}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { Home, BookOpen, Globe, Menu, X, Briefcase, AlertTriangle, BarChart3, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { PageId } from '../types'

interface NavSidebarProps {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

const navSections = [
  {
    label: 'Religion',
    items: [
      { id: 'home' as PageId, label: 'Home', icon: Home },
      { id: 'browse' as PageId, label: 'Explore Religions', icon: BookOpen },
      { id: 'map' as PageId, label: 'World Map', icon: Globe },
    ],
  },
  {
    label: 'HR Training',
    items: [
      { id: 'workplace' as PageId, label: 'Workplace Guide', icon: Briefcase },
      { id: 'incidents' as PageId, label: 'Critical Incidents', icon: AlertTriangle },
      { id: 'frameworks' as PageId, label: 'Cultural Frameworks', icon: BarChart3 },
      { id: 'communication' as PageId, label: 'Communication Styles', icon: MessageSquare },
    ],
  },
]

export default function NavSidebar({ activePage, onNavigate }: NavSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (page: PageId) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  const isActive = (id: PageId) =>
    activePage === id || (activePage === 'religion' && id === 'browse')

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-white"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        className={`
          fixed top-0 left-0 h-full z-40 w-64
          bg-slate-950/90 backdrop-blur-2xl border-r border-white/5
          flex flex-col
          transition-transform duration-300
          lg:translate-x-0
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="p-6 pb-4">
          <h1
            className="text-xl font-bold tracking-tight cursor-pointer"
            onClick={() => handleNav('home')}
          >
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Religionly
            </span>
          </h1>
          <p className="text-xs text-white/40 mt-1">Intercultural HR Training Platform</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-2 space-y-5 overflow-y-auto">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="text-xs font-semibold text-white/25 uppercase tracking-wider px-4 mb-1.5">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.id)
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium
                        transition-all duration-200
                        ${active
                          ? 'bg-white/10 text-white border border-white/10'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                        }
                      `}
                    >
                      <Icon size={17} />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <p className="text-xs text-white/25 text-center">
            6 Religions · 4 Frameworks · 15 Scenarios
          </p>
        </div>
      </motion.aside>
    </>
  )
}

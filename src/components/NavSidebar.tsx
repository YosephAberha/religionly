import { motion, AnimatePresence } from 'framer-motion'
import { Home, BookOpen, Globe, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { PageId } from '../types'

interface NavSidebarProps {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

const navItems: { id: PageId; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'browse', label: 'Explore Religions', icon: BookOpen },
  { id: 'map', label: 'World Map', icon: Globe },
]

export default function NavSidebar({ activePage, onNavigate }: NavSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (page: PageId) => {
    onNavigate(page)
    setMobileOpen(false)
  }

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
        <div className="p-6 pb-2">
          <h1
            className="text-xl font-bold tracking-tight cursor-pointer"
            onClick={() => handleNav('home')}
          >
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Faith Explorer
            </span>
          </h1>
          <p className="text-xs text-white/40 mt-1">Comparative Religion Engine</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.id || (activePage === 'religion' && item.id === 'browse')
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/10'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <p className="text-xs text-white/30 text-center">
            6 Religions &middot; Real Scriptures &middot; World Map
          </p>
        </div>
      </motion.aside>
    </>
  )
}

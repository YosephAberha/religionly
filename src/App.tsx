import { useState } from 'react'
import NavSidebar from './components/NavSidebar'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import ReligionDetailPage from './pages/ReligionDetailPage'
import WorldMapPage from './pages/WorldMapPage'
import { PageId } from './types'

export default function App() {
  const [page, setPage] = useState<PageId>('home')
  const [selectedReligionId, setSelectedReligionId] = useState<string>('')

  const navigate = (newPage: PageId, religionId?: string) => {
    setPage(newPage)
    if (religionId) setSelectedReligionId(religionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <NavSidebar activePage={page} onNavigate={navigate} />

      {/* Main content area */}
      <main className="lg:ml-64 min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16 lg:pt-8 flex-1">
          {page === 'home' && <HomePage onNavigate={navigate} />}
          {page === 'browse' && <BrowsePage onNavigate={navigate} />}
          {page === 'religion' && (
            <ReligionDetailPage religionId={selectedReligionId} onNavigate={navigate} />
          )}
          {page === 'map' && <WorldMapPage />}
        </div>

        {/* Disclaimer */}
        <footer className="border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-xs text-slate-500 leading-relaxed text-center">
              <span className="font-semibold text-slate-400">Disclaimer:</span>{' '}
              This website is intended for educational and informational purposes only. The content
              presented here is a simplified overview and does not represent the full depth, diversity,
              or complexity of any religion or belief system. We strive for accuracy but make no
              guarantees. This site is not affiliated with any religious organization and does not
              promote or endorse any particular faith. Readers are encouraged to consult primary
              sources and qualified scholars for a deeper understanding.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

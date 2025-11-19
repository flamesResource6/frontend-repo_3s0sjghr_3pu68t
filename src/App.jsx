import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCases from './components/UseCases'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.06),transparent_40%)] pointer-events-none" />

      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <FAQ />
      <CTA />

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/70 text-sm">© {new Date().getFullYear()} Pulses.ai — Safer schools with responsible AI</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-blue-100/70 hover:text-white">Privacy</a>
            <a href="#" className="text-blue-100/70 hover:text-white">Terms</a>
            <a href="#demo" className="text-white font-medium">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

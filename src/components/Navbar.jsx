import { Menu, ShieldCheck, School, Camera, Waves, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 grid place-items-center ring-1 ring-white/20 shadow-lg shadow-blue-500/20">
            <Waves className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Pulses.ai</p>
            <p className="text-xs text-blue-200/80">Vision for safer schools</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-100/80 hover:text-white transition-colors">Features</a>
          <a href="#use-cases" className="text-blue-100/80 hover:text-white transition-colors">Use cases</a>
          <a href="#pricing" className="text-blue-100/80 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-blue-100/80 hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="text-blue-100/80 hover:text-white">Book demo</a>
          <a href="#pricing" className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 shadow hover:from-blue-600 hover:to-cyan-600 transition-colors">
            Get started <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="max-w-7xl mx-auto px-6 py-4 grid gap-3">
            <a onClick={() => setOpen(false)} href="#features" className="text-blue-100/90">Features</a>
            <a onClick={() => setOpen(false)} href="#use-cases" className="text-blue-100/90">Use cases</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="text-blue-100/90">Pricing</a>
            <a onClick={() => setOpen(false)} href="#faq" className="text-blue-100/90">FAQ</a>
            <a onClick={() => setOpen(false)} href="#demo" className="text-white font-medium">Book demo</a>
          </div>
        </div>
      )}
    </header>
  )
}

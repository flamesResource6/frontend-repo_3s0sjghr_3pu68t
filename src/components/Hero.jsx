import { Shield, School, Camera, LineChart, CheckCircle2 } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-slate-800/60 ring-1 ring-white/10 text-blue-200/80 mb-4">
              <Shield className="w-3.5 h-3.5" /> Trusted by schools worldwide
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
              Smart cameras for safer, calmer, more focused schools
            </h1>
            <p className="mt-4 text-lg text-blue-100/80">
              Pulses.ai uses on-device vision to detect risks, streamline campus operations, and surface real-time insights that keep students safe and learning.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 shadow hover:from-blue-600 hover:to-cyan-600 transition-colors">
                Book a live demo
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center gap-2 rounded-lg bg-slate-800/80 text-white/90 px-6 py-3 ring-1 ring-white/10 hover:bg-slate-700/70">
                See pricing
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-blue-100/80 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FERPA ready</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> On-device processing</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Secure by default</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Works with existing CCTV</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-emerald-300/10 blur-3xl" />
            <div className="relative rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-4 shadow-2xl">
              <div className="aspect-video rounded-xl bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="grid grid-cols-3 gap-3 mt-3">
                {[
                  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2069&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2069&auto=format&fit=crop",
                ].map((src, i) => (
                  <div key={i} className="aspect-video rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

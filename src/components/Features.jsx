import { ShieldCheck, BellRing, Users, Clock, Activity, Video, School, Scan, CloudOff } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Safety alerts",
    desc: "Real-time detection for fights, falls, intrusions, perimeter breaches, and loitering.",
  },
  {
    icon: BellRing,
    title: "Smart notifications",
    desc: "Send alerts to the right staff instantly via SMS, email, or dashboards.",
  },
  {
    icon: Users,
    title: "Flow analytics",
    desc: "Understand foot traffic by zone and time for better staffing and supervision.",
  },
  {
    icon: Clock,
    title: "Bell schedule sync",
    desc: "Tie detections to class transitions to reduce hallway incidents.",
  },
  {
    icon: Activity,
    title: "Wellbeing signals",
    desc: "Detect crowding, dwell time, and hotspots that impact climate and safety.",
  },
  {
    icon: CloudOff,
    title: "Privacy-first",
    desc: "On-device processing with no video leaving campus; metadata only.",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.18),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Built for K-12 safety and operations</h2>
          <p className="mt-3 text-blue-100/80">Deploy in days. Works with your existing cameras or Pulses.ai smart units.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-blue-400/40 transition-all">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white grid place-items-center shadow-lg shadow-blue-500/20">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-blue-100/80 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

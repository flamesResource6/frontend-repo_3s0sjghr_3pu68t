import { GraduationCap, DoorOpen, Siren, UsersRound, BusFront, ClipboardList } from "lucide-react"

const useCases = [
  {
    icon: GraduationCap,
    title: "Hallway crowding",
    desc: "Detect and de-escalate congestion between classes with live heatmaps and dwell alerts.",
  },
  {
    icon: DoorOpen,
    title: "Unauthorized entry",
    desc: "Spot perimeter breaches and propped doors instantly to keep campuses secure.",
  },
  {
    icon: Siren,
    title: "Fights & falls",
    desc: "Real-time detection with verified clips for quick response and incident reporting.",
  },
  {
    icon: UsersRound,
    title: "Cafe & pickup",
    desc: "Optimize cafeteria lines and parent pickup with queue length and throughput analytics.",
  },
  {
    icon: BusFront,
    title: "Bus loop visibility",
    desc: "Track arrivals, dwell times, and loading bottlenecks across loops and lots.",
  },
  {
    icon: ClipboardList,
    title: "Duty planning",
    desc: "Staff where it matters using historical patterns of hotspots and incidents.",
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.18),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">School-proven use cases</h2>
            <p className="mt-3 text-blue-100/80">From morning arrival to afternoon dismissal, Pulses.ai augments your team with always-on visibility.</p>

            <div className="mt-8 space-y-4">
              {useCases.map((u, i) => (
                <div key={i} className="relative rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white grid place-items-center flex-shrink-0">
                      <u.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{u.title}</h3>
                      <p className="text-blue-100/80 text-sm mt-1">{u.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

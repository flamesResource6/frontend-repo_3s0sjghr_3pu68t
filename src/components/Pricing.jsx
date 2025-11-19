import { Check, Shield, Headphones, Activity } from "lucide-react"
import { motion } from "framer-motion"

const tiers = [
  {
    name: "Starter",
    price: "$199",
    period: "/camera/mo",
    highlight: false,
    features: [
      "Core safety detections",
      "Email notifications",
      "Standard analytics",
      "FERPA-ready controls",
    ],
  },
  {
    name: "Pro",
    price: "$349",
    period: "/camera/mo",
    highlight: true,
    features: [
      "All Starter features",
      "SMS & voice alerts",
      "Advanced heatmaps",
      "API access & SSO",
      "Priority support",
    ],
  },
  {
    name: "District",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      "Fleet management",
      "Dedicated CSM",
      "On-prem or hybrid",
      "Compliance packages",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.18),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-100/80">Choose a plan that fits your campus today and scale district-wide tomorrow.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 ring-1 ring-white/10 bg-slate-900/60 ${
                t.highlight ? "border border-blue-400/40 shadow-2xl shadow-blue-500/20" : ""
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  Most popular
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                <span className="text-blue-100/80">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-blue-100/80 text-sm">
                    <Check className="w-4 h-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#demo" className={`mt-6 inline-flex w-full justify-center rounded-lg px-4 py-2 ${
                t.highlight
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
                  : "bg-slate-800/80 text-white/90 ring-1 ring-white/10 hover:bg-slate-700/70"
              } transition-colors`}>
                {t.price === "Custom" ? "Contact sales" : "Start trial"}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-blue-100/80">
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> FERPA, COPPA, and state compliance</div>
          <div className="flex items-center gap-2"><Headphones className="w-4 h-4" /> 24/7 monitoring options</div>
          <div className="flex items-center gap-2"><Activity className="w-4 h-4" /> Rolling upgrades included</div>
        </div>
      </div>
    </section>
  )
}

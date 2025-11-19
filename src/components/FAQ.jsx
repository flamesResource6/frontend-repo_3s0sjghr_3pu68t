import { motion } from "framer-motion"

const faqs = [
  {
    q: "How does Pulses.ai handle student privacy?",
    a: "All processing happens on-device. Only anonymized event metadata leaves the camera. We support strict data retention controls and audit logs.",
  },
  {
    q: "Do we need new cameras?",
    a: "No. We can connect to most ONVIF-compatible IP cameras, or provide plug-and-play smart units for critical zones.",
  },
  {
    q: "How fast are alerts?",
    a: "Typical end-to-end alert latency is under 2 seconds on-campus. Off-site notifications are usually under 5 seconds.",
  },
  {
    q: "Can we deploy across a district?",
    a: "Yes. Centralized management supports multi-school rollouts with role-based access and SSO.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.15),transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-blue-100/80">Everything you need to know about deploying AI vision safely in schools.</p>
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 overflow-hidden">
          {faqs.map((f, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group open:bg-white/0 p-6"
            >
              <summary className="cursor-pointer list-none text-white font-medium">
                {f.q}
              </summary>
              <p className="mt-2 text-blue-100/80 text-sm">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

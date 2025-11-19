import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="demo" className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="relative bg-slate-900/70 ring-1 ring-white/10 p-10 lg:p-14">
            <div className="max-w-3xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">See Pulses.ai in action</h3>
              <p className="mt-2 text-blue-100/80">Get a tailored walkthrough for your campus layout, bell schedule, and top priorities.</p>
              <form className="mt-6 grid sm:grid-cols-2 gap-3">
                <input required placeholder="Work email" className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input required placeholder="District / School" className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="sm:col-span-2 mt-2 inline-flex justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 shadow hover:from-blue-600 hover:to-cyan-600 transition-colors">
                  Request demo
                </button>
              </form>
              <p className="mt-3 text-xs text-blue-100/60">By submitting, you agree to our Terms and Privacy Policy.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

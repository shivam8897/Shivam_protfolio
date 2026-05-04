'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Project Manager',
    company: 'TSB Banco Sabadell',
    sector: 'Banking Sector',
    content: "Shivam's expertise in optimising complex financial queries resulted in a 25% performance improvement across our capital reporting stack. Exceptional problem-solver with deep Oracle knowledge.",
    rating: 5,
    initials: 'PM',
    from: '#22d3ee', to: '#0891b2',
  },
  {
    name: 'Tech Lead',
    company: 'Accenture',
    sector: 'Data Engineering Team',
    content: "Outstanding data engineer with deep knowledge of AWS and scalable ETL architectures. Reduced query execution time by 50% on multiple projects while mentoring the junior team effectively.",
    rating: 5,
    initials: 'TL',
    from: '#818cf8', to: '#6366f1',
  },
  {
    name: 'Client',
    company: 'National Broadband Network',
    sector: 'Cloud Infrastructure',
    content: "Delivered an enterprise-scale AWS data platform that replaced our legacy system. Professional, reliable, and delivered on time. The 60% infrastructure cost reduction exceeded our expectations.",
    rating: 5,
    initials: 'CN',
    from: '#34d399', to: '#10b981',
  },
]

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-[#050a12] relative overflow-hidden">
    <div className="glow-orb w-96 h-96 bg-indigo-500/8 bottom-0 right-0 pointer-events-none" />

    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">06 / Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What People <span className="gradient-text">Say</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Recognition from clients and colleagues across banking and tech
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card-hover rounded-2xl p-7 flex flex-col"
          >
            {/* Quote icon */}
            <Quote size={24} className="text-cyan-400/30 mb-4 flex-shrink-0" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array(t.rating).fill(null).map((_, si) => (
                <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6 italic">
              "{t.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-slate-500 font-mono">{t.company} · {t.sector}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials

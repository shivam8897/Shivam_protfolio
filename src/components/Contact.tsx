'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Contact = () => {
  const contacts = [
    { icon: Mail,   title: 'Email',    value: 'shivamdubey012@gmail.com', href: 'mailto:shivamdubey012@gmail.com', color: '#22d3ee' },
    { icon: Phone,  title: 'Phone',    value: '+91-8897636093',            href: 'tel:+918897636093',              color: '#818cf8' },
    { icon: MapPin, title: 'Location', value: 'Hyderabad, India',          href: '#',                              color: '#34d399' },
  ]

  const socials = [
    { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-dubey012/', color: '#0077b5' },
    { icon: Github,   name: 'GitHub',   href: 'https://github.com/shivam8897',                color: '#e5e7eb' },
    { icon: Mail,     name: 'Email',    href: 'mailto:shivamdubey012@gmail.com',              color: '#22d3ee' },
  ]

  return (
    <section id="contact" className="section-padding bg-[#050a12] relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-500/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">07 / Contact</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto">
            Open to Senior Data Engineer roles, consulting, or collaborations. Let's build something remarkable.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact cards */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-3 gap-5 mb-10"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={c.href}
                className="glass-card-hover rounded-2xl p-6 flex flex-col items-center text-center group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${c.color}18`, border: `1px solid ${c.color}30` }}
                >
                  <c.icon size={24} style={{ color: c.color }} />
                </div>
                <div className="text-xs text-slate-500 font-mono mb-1">{c.title}</div>
                <div className="text-slate-200 font-medium text-sm">{c.value}</div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <p className="text-slate-500 font-mono text-sm mb-6">// find_me_on</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/8 bg-white/3 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300 text-slate-300 hover:text-white"
                >
                  <s.icon size={20} />
                  <span className="font-medium">{s.name}</span>
                  <ArrowUpRight size={14} className="text-slate-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

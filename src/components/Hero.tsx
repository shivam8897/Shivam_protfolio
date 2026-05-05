'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Github, Linkedin, Download, ArrowRight } from 'lucide-react'

const HeroParticles = dynamic(() => import('./HeroParticles'), { ssr: false })

const TITLES = [
  'Senior Data Engineer',
  'ETL Pipeline Architect',
  'AWS Cloud Data Specialist',
  'PySpark & SQL Expert',
]

const Hero = () => {
  const [titleIdx, setTitleIdx]     = useState(0)
  const [displayed, setDisplayed]   = useState('')
  const [deleting, setDeleting]     = useState(false)

  useEffect(() => {
    const target = TITLES[titleIdx]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  const stats = [
    { value: '50%',  label: 'Query Latency Reduced' },
    { value: '5+',   label: 'Years Experience' },
    { value: '5',    label: 'Projects Delivered' },
    { value: '60%',  label: 'Cloud Cost Savings' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030711]">

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-500/10 top-1/4 -left-32 pointer-events-none" />
      <div className="glow-orb w-[400px] h-[400px] bg-indigo-500/10 bottom-1/4 -right-32 pointer-events-none" />
      <div className="glow-orb w-[300px] h-[300px] bg-violet-500/8 top-1/2 left-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Three.js particles */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <HeroParticles />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Senior Data Engineering roles
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.2)] float-animation">
                <img
                  src="/shiv.jpg"
                  alt="Shivam Dubey"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                    const fb = t.nextElementSibling as HTMLElement
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-indigo-600 items-center justify-center text-4xl font-bold text-white hidden absolute inset-0">
                  SD
                </div>
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#030711]" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          >
            Shivam{' '}
            <span className="gradient-text">Dubey</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="h-12 flex items-center justify-center mb-6"
          >
            <h2 className="text-xl md:text-3xl font-mono text-cyan-400">
              {displayed}
              <span className="animate-pulse ml-0.5 text-cyan-300">|</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Building production-grade data pipelines and cloud-native platforms across banking, telecom,
            and enterprise domains — 5+ years turning raw data into reliable, scalable insights.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
          >
            {stats.map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-center animate-glow-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1 font-mono">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2 relative z-10"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold"
            >
              <Mail size={18} />
              Get In Touch
            </a>
            <a
              href="/Shivam_Dubey_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-indigo-400/50 hover:text-indigo-400 transition-all duration-300 font-semibold"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex justify-center gap-5"
          >
            {[
              { href: 'mailto:shivamdubey012@gmail.com', icon: Mail,    label: 'Email' },
              { href: 'https://www.linkedin.com/in/shivam-dubey012/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://github.com/shivam8897', icon: Github,   label: 'GitHub' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}

export default Hero

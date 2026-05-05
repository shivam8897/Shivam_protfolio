'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, GraduationCap, Briefcase } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const About = () => {
  const infoItems = [
    { icon: MapPin,       label: 'Location',  value: 'Hyderabad, India' },
    { icon: Mail,         label: 'Email',     value: 'shivamdubey012@gmail.com' },
    { icon: GraduationCap,label: 'Education', value: 'B.Tech — Aeronautical Engineering' },
    { icon: Briefcase,    label: 'Company',   value: 'Accenture (July 2021 – Present)' },
  ]

  const metrics = [
    { value: '50%',  label: 'Query Latency Reduced' },
    { value: '60%',  label: 'Cloud Cost Savings' },
    { value: '5',    label: 'Projects Delivered' },
    { value: '6+',   label: 'AWS Services Mastered' },
  ]

  return (
    <section id="about" className="section-padding bg-[#030711] relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-indigo-500/8 top-0 right-0 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">01 / About</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who I <span className="gradient-text">Am</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto">
            The story behind the pipelines
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — text + metrics */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed">
              Senior Data Engineer with{' '}
              <span className="text-cyan-400 font-semibold">5+ years of production experience</span>{' '}
              architecting and operating large-scale data pipelines across banking, telecom, and cloud platforms.
              Deep expertise in PL/SQL, Python, PySpark, and AWS — owning the full data lifecycle from raw ingestion
              through to analytical reporting layers.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">
              Currently a{' '}
              <span className="text-indigo-400 font-semibold">Senior Application Development Analyst at Accenture</span>,
              leading enterprise data platform delivery for global clients including TSB Banco Sabadell and
              National Broadband Network. Proven track record of cutting query latency by 50%, reducing ETL
              runtimes from hours to minutes, and replacing fragile legacy systems with resilient, cost-optimised
              cloud architectures.
            </motion.p>

            {/* Metrics grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 pt-4">
              {metrics.map((m, i) => (
                <div key={i} className="glass-card-hover rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">{m.value}</div>
                  <div className="text-xs text-slate-500 font-mono">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — info cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-4"
          >
            {infoItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card-hover rounded-2xl p-5 flex items-center gap-5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-0.5">{item.label}</div>
                  <div className="text-slate-200 font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Tech stack pills */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-5">
              <p className="text-xs text-slate-500 font-mono mb-3">// tech_stack</p>
              <div className="flex flex-wrap gap-2">
                {['PL/SQL', 'Python', 'PySpark', 'Apache Airflow', 'AWS', 'Redshift', 'Oracle', 'dbt', 'Kafka', 'Power BI'].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

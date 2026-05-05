'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, CheckCircle2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Experience = () => {
  const achievements = [
    "Engineered PL/SQL packages, stored procedures, and triggers for TSB Banco Sabadell's capital & impairment platform — reduced data retrieval latency by 50% and improved system efficiency by 30% on a 100M+ row Oracle database",
    "Architected medallion-layer ETL pipelines (Bronze→Silver→Gold) for securitization analytics, eliminating 3× redundant compute across 3 business units and achieving 15% improvement in data accuracy",
    "Built cloud-native data platform on AWS (S3, Glue, Athena, RDS, EC2, CloudWatch) for National Broadband Network's ELMS — replaced legacy on-premise system, cut ETL runtime from 8 hours to 45 minutes, reduced infrastructure cost by 60%",
    "Replaced 20+ fragile cron-based ETL jobs with Apache Airflow DAGs featuring dependency tracking, automatic retries, and Slack alerting — reduced mean time to recovery from 4 hours to under 20 minutes",
    "Designed automated SIT and regression testing framework using Python and SoapUI — cut manual QA cycle from 5 days to 6 hours, achieving 94% automated bug detection rate across 3 major release cycles",
    "Mentored 3 junior engineers on PL/SQL optimisation, ETL design patterns, and AWS fundamentals; led internal knowledge-sharing sessions that reduced onboarding time by 40%",
  ]

  const metrics = [
    { value: '50%', label: 'Faster Retrieval', color: 'from-cyan-500 to-cyan-400' },
    { value: '60%', label: 'Cost Reduced',     color: 'from-indigo-500 to-indigo-400' },
    { value: '5+',  label: 'Years in Data',    color: 'from-violet-500 to-violet-400' },
  ]

  return (
    <section id="experience" className="section-padding bg-[#050a12] relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-cyan-500/6 bottom-0 left-0 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">02 / Experience</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">History</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-400/10 hover:border-cyan-400/20 transition-all duration-500"
          >
            {/* Job header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 flex items-center justify-center">
                    <Briefcase size={18} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Senior Application Development Analyst
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold ml-13 ml-0">
                  <MapPin size={15} />
                  <span>Accenture, Hyderabad</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-sm whitespace-nowrap">
                <Calendar size={14} />
                July 2021 — Present
              </div>
            </div>

            {/* Metric pills */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {metrics.map((m, i) => (
                <div key={i} className="rounded-xl p-4 bg-white/[0.03] border border-white/5 text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-5">
                <TrendingUp size={14} className="text-cyan-400" />
                Key Achievements
              </div>
              <div className="space-y-5">
                {achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <CheckCircle2 size={17} className="text-cyan-500 mt-0.5 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                    <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                      {a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, Cloud, Settings, Zap, BarChart2, Code } from 'lucide-react'

type Skill     = { name: string; level: number }
type Category  = { title: string; icon: React.ElementType; skills: Skill[]; from: string; to: string }

const categories: Category[] = [
  {
    title: 'Core Data Eng.',
    icon: Database,
    from: '#22d3ee', to: '#06b6d4',
    skills: [
      { name: 'SQL / PL/SQL',  level: 95 },
      { name: 'ETL Design',    level: 90 },
      { name: 'Data Modeling', level: 85 },
      { name: 'Python',        level: 85 },
      { name: 'PySpark',       level: 80 },
    ],
  },
  {
    title: 'Cloud & Databases',
    icon: Cloud,
    from: '#818cf8', to: '#6366f1',
    skills: [
      { name: 'Oracle DB',        level: 95 },
      { name: 'AWS (S3/RDS/EC2)', level: 85 },
      { name: 'Amazon Redshift',  level: 80 },
      { name: 'AWS Athena/Glue',  level: 78 },
      { name: 'PostgreSQL',       level: 75 },
    ],
  },
  {
    title: 'ETL & Orchestration',
    icon: Settings,
    from: '#34d399', to: '#10b981',
    skills: [
      { name: 'IBM DataStage',       level: 82 },
      { name: 'Apache Airflow',      level: 80 },
      { name: 'AWS Glue ETL',        level: 78 },
      { name: 'dbt',                 level: 65 },
      { name: 'Great Expectations',  level: 70 },
    ],
  },
  {
    title: 'Streaming & Big Data',
    icon: Zap,
    from: '#f59e0b', to: '#ef4444',
    skills: [
      { name: 'Apache Spark',        level: 80 },
      { name: 'Apache Kafka',        level: 65 },
      { name: 'Delta Lake / Iceberg',level: 65 },
      { name: 'Hadoop HDFS',         level: 60 },
      { name: 'Apache Flink',        level: 55 },
    ],
  },
  {
    title: 'Analytics & Viz',
    icon: BarChart2,
    from: '#f472b6', to: '#ec4899',
    skills: [
      { name: 'SQL Analytics',   level: 92 },
      { name: 'Power BI',        level: 82 },
      { name: 'AWS CloudWatch',  level: 80 },
      { name: 'Grafana',         level: 65 },
      { name: 'Apache Superset', level: 55 },
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: Code,
    from: '#67e8f9', to: '#0891b2',
    skills: [
      { name: 'JIRA / Agile',       level: 90 },
      { name: 'Git / GitHub',        level: 88 },
      { name: 'SoapUI / API Testing',level: 80 },
      { name: 'CI/CD (Jenkins)',     level: 72 },
      { name: 'Docker',              level: 68 },
    ],
  },
]

const getLevelLabel = (l: number) =>
  l >= 90 ? 'Expert' : l >= 75 ? 'Advanced' : l >= 60 ? 'Intermediate' : 'Learning'

const getLevelColor = (l: number) =>
  l >= 90 ? 'text-green-400' : l >= 75 ? 'text-cyan-400' : l >= 60 ? 'text-amber-400' : 'text-slate-500'

function SkillBar({ skill, from, to, delay }: { skill: Skill; from: string; to: string; delay: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
        <span className={`text-xs font-mono font-semibold ${getLevelColor(skill.level)}`}>
          {getLevelLabel(skill.level)}
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

const Skills = () => (
  <section id="skills" className="section-padding bg-[#030711] relative overflow-hidden">
    <div className="glow-orb w-96 h-96 bg-violet-500/8 top-0 right-1/4 pointer-events-none" />

    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">04 / Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technical <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-6">
          Production-grade expertise across the modern data engineering ecosystem
        </p>
        {/* Legend */}
        <div className="flex justify-center gap-6 flex-wrap text-xs font-mono text-slate-500">
          {[['bg-green-400','Expert 90%+'],['bg-cyan-400','Advanced 75–89%'],['bg-amber-400','Intermediate 60–74%'],['bg-slate-600','Learning']].map(([cls, lbl]) => (
            <div key={lbl} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${cls}`} />
              {lbl}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className="glass-card-hover rounded-2xl p-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${cat.from}22, ${cat.to}33)`, border: `1px solid ${cat.from}33` }}
              >
                <cat.icon size={20} style={{ color: cat.from }} />
              </div>
              <h3 className="text-base font-bold text-white">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <SkillBar key={si} skill={skill} from={cat.from} to={cat.to} delay={si * 0.1} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills

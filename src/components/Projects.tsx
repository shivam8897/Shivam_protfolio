'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, TrendingUp, X, ArrowRight, Lightbulb, BarChart3, Layers } from 'lucide-react'

type Metric    = { label: string; value: string }
type ArchStage = { name: string; tools: string }
type Decision  = { choice: string; reason: string }
type Project   = {
  title: string; subtitle: string; description: string; problem: string
  architecture: ArchStage[]; decisions: Decision[]
  tags: string[]; metrics: Metric[]; from: string; to: string
  github: string; domain: string
}

const projects: Project[] = [
  {
    title: 'Real-Time Financial Risk Analytics',
    subtitle: 'TSB Banco Sabadell — Capital & Impairment',
    description: 'Architected a risk analytics platform processing capital and impairment calculations, reducing reporting latency from 24 hours to under 5 minutes.',
    problem: 'Risk managers had no real-time visibility into capital adequacy. Batch reports ran overnight — intraday risk exposure changes went undetected, creating critical compliance exposure.',
    architecture: [
      { name: 'Oracle Source', tools: 'Oracle 19c · CDC' },
      { name: 'ETL Layer', tools: 'PL/SQL · DataStage' },
      { name: 'Transform', tools: 'PySpark · Python' },
      { name: 'Warehouse', tools: 'Redshift · Star Schema' },
      { name: 'Reporting', tools: 'Power BI · SQL Views' },
    ],
    decisions: [
      { choice: 'CDC over full-load ETL', reason: 'Reduced source DB load by 70% and enabled near-real-time change propagation without full table scans' },
      { choice: 'Star schema over 3NF', reason: 'Optimised for read-heavy analytical queries; reduced join complexity for Power BI reports significantly' },
      { choice: 'PL/SQL packages over ad-hoc SQL', reason: 'Encapsulated business logic, enabled versioning, and reduced query parse overhead by 40%' },
    ],
    tags: ['PL/SQL', 'ETL', 'PySpark', 'Redshift', 'Power BI', 'Oracle', 'CDC', 'Star Schema'],
    metrics: [{ label: 'Query Performance', value: '+25%' }, { label: 'Resource Usage', value: '-20%' }, { label: 'Report Latency', value: '24h → 5min' }, { label: 'Data Accuracy', value: '99.8%' }],
    from: '#22d3ee', to: '#0891b2', github: 'https://github.com/shivam8897', domain: 'Banking · Risk Analytics',
  },
  {
    title: 'Medallion Architecture Lakehouse',
    subtitle: 'TSB Banco Sabadell — Securitization Analytics',
    description: 'Designed a Bronze→Silver→Gold data lakehouse for capital adequacy evaluation, eliminating 3× redundant compute across business units.',
    problem: 'Three business units each maintained independent ETL pipelines computing identical metrics — causing 15% data inconsistency and 3× infrastructure cost.',
    architecture: [
      { name: 'Source Systems', tools: 'Oracle DB · Files' },
      { name: 'Bronze Layer', tools: 'Raw Ingestion · DataStage' },
      { name: 'Silver Layer', tools: 'PL/SQL · Cleansing' },
      { name: 'Gold Layer', tools: 'Aggregations · SCD Type 2' },
      { name: 'Serving', tools: 'SQL Views · Power BI' },
    ],
    decisions: [
      { choice: 'SCD Type 2 for dimensions', reason: 'Required for regulatory audit trails — full history of customer changes needed for 7-year lookback' },
      { choice: 'Centralised Gold layer', reason: 'Single source of truth eliminated the 15% data discrepancy between team reports' },
      { choice: 'Stored procedures for business logic', reason: 'Allowed business rules to change without touching application code' },
    ],
    tags: ['PL/SQL', 'ETL', 'SQL', 'SCD Type 2', 'Medallion Architecture', 'DataStage'],
    metrics: [{ label: 'Performance Gain', value: '+15%' }, { label: 'Data Accuracy', value: '+15%' }, { label: 'Redundant Compute', value: '-3×' }, { label: 'Teams Served', value: '3 BUs' }],
    from: '#818cf8', to: '#6366f1', github: 'https://github.com/shivam8897', domain: 'Banking · Compliance',
  },
  {
    title: 'Cloud-Native Enterprise Data Platform',
    subtitle: 'National Broadband Network — ELMS (AWS)',
    description: 'Built an AWS-native Enterprise Location Management System replacing on-premise legacy with a fully serverless, auto-scaling architecture.',
    problem: "NBN's legacy on-premise database could not scale during peak activations. Manual ETL took 8+ hours and failed silently, blocking field operations.",
    architecture: [
      { name: 'Ingestion', tools: 'S3 · AWS Glue' },
      { name: 'Processing', tools: 'Python · PySpark · EC2' },
      { name: 'Storage', tools: 'RDS · S3 Data Lake' },
      { name: 'Query Layer', tools: 'AWS Athena · SQL' },
      { name: 'Monitoring', tools: 'CloudWatch · Alarms' },
    ],
    decisions: [
      { choice: 'Athena over Redshift', reason: 'Pay-per-query model cut costs by 60% for the low-frequency analytical workload pattern' },
      { choice: 'AWS Glue for ETL', reason: 'Managed ETL reduced ops burden; auto schema detection handled frequent source schema changes' },
      { choice: 'CloudWatch alarms', reason: 'Proactive failure detection — previously failures only discovered when downstream apps broke' },
    ],
    tags: ['AWS S3', 'AWS Glue', 'Athena', 'RDS', 'EC2', 'Python', 'CloudWatch', 'PySpark'],
    metrics: [{ label: 'AWS Services', value: '6+' }, { label: 'ETL Runtime', value: '8h → 45min' }, { label: 'Cost Savings', value: '-60%' }, { label: 'Uptime', value: '99.9%' }],
    from: '#34d399', to: '#10b981', github: 'https://github.com/shivam8897', domain: 'Telecom · Cloud',
  },
  {
    title: 'ETL Orchestration & Observability',
    subtitle: 'Apache Airflow — Pipeline Automation at Scale',
    description: 'Replaced 20+ fragile cron jobs with Airflow DAGs featuring dependency tracking, full observability, and automated alerting.',
    problem: "20+ ETL jobs ran as isolated cron jobs with no dependency tracking or alerting. A single upstream failure cascaded silently for hours.",
    architecture: [
      { name: 'Scheduling', tools: 'Apache Airflow · DAGs' },
      { name: 'Processing', tools: 'Python · PySpark · SQL' },
      { name: 'Quality', tools: 'Great Expectations · dbt' },
      { name: 'Alerting', tools: 'Airflow · Slack · Email' },
      { name: 'Monitoring', tools: 'Airflow UI · Grafana' },
    ],
    decisions: [
      { choice: 'Airflow over Prefect/Dagster', reason: "Team familiarity and rich operator ecosystem covered all existing data source connectors" },
      { choice: 'Great Expectations for DQ', reason: 'Declarative expectation suites let non-engineers define quality rules without writing code' },
      { choice: 'Idempotent DAGs by design', reason: 'All DAGs safely re-runnable — critical for backfills and incident recovery without duplication' },
    ],
    tags: ['Apache Airflow', 'Python', 'PySpark', 'Great Expectations', 'dbt', 'Grafana'],
    metrics: [{ label: 'Manual Interventions', value: '-80%' }, { label: 'MTTR', value: '4h → 20min' }, { label: 'Data Quality', value: '99.5%' }, { label: 'Visibility', value: '100%' }],
    from: '#f59e0b', to: '#ef4444', github: 'https://github.com/shivam8897', domain: 'Data Eng · DevOps',
  },
  {
    title: 'Automated SIT & Regression Framework',
    subtitle: 'Enterprise Data Quality & Test Automation',
    description: 'Built a comprehensive automated testing framework for Oracle migrations, cutting regression test cycles from 5 days to 6 hours.',
    problem: "Every database release required 5 days of manual SIT and regression testing — blocking critical features by weeks and consuming 70% of QA capacity.",
    architecture: [
      { name: 'Test Specs', tools: 'Python · YAML Configs' },
      { name: 'Execution', tools: 'SoapUI · REST APIs' },
      { name: 'Validation', tools: 'SQL Assertions · Python' },
      { name: 'Reporting', tools: 'HTML Reports · Alerts' },
      { name: 'CI Pipeline', tools: 'Jenkins · JIRA · Git' },
    ],
    decisions: [
      { choice: 'Data-driven test configs', reason: 'YAML-based specs meant QA team could add test cases without touching code' },
      { choice: 'Automated diff comparison', reason: 'Row-by-row source vs destination comparison caught 94% of transformation bugs automatically' },
      { choice: 'Parallel test execution', reason: 'Running independent suites concurrently reduced total runtime from 5 days to 6 hours' },
    ],
    tags: ['Python', 'SoapUI', 'RESTful API', 'SQL', 'Oracle', 'Jenkins', 'JIRA'],
    metrics: [{ label: 'Test Cycle Time', value: '5d → 6h' }, { label: 'Bug Detection', value: '94%' }, { label: 'Manual Effort', value: '-70%' }, { label: 'Release Freq', value: '+3×' }],
    from: '#f472b6', to: '#ec4899', github: 'https://github.com/shivam8897', domain: 'QA · Data Eng',
  },
]

function TiltCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -10
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ perspective: 1000 }}
      className="flex"
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="glass-card rounded-2xl overflow-hidden flex flex-col w-full border border-white/5 hover:border-cyan-400/15 transition-colors duration-300"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${project.from}, ${project.to})` }} />

        <div className="p-7 flex flex-col flex-1">
          <span className="section-label text-xs mb-2" style={{ color: project.from }}>{project.domain}</span>
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <p className="text-xs font-mono text-slate-500 mb-4">{project.subtitle}</p>
          <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

          {/* Top 2 metrics */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {project.metrics.slice(0, 2).map((m, i) => (
              <div key={i} className="rounded-xl p-3 text-center bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-center gap-1 mb-0.5" style={{ color: project.from }}>
                  <TrendingUp size={12} />
                  <span className="text-sm font-bold">{m.value}</span>
                </div>
                <div className="text-xs text-slate-600 font-mono">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((t, i) => (
              <span key={i} className="tag-pill text-xs" style={{ color: project.from, borderColor: `${project.from}25`, background: `${project.from}08` }}>{t}</span>
            ))}
            {project.tags.length > 4 && (
              <span className="tag-pill text-xs text-slate-500 border-slate-700 bg-transparent">+{project.tags.length - 4}</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={onClick}
              className="flex-1 py-2 px-4 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: `linear-gradient(135deg, ${project.from}88, ${project.to}88)`, border: `1px solid ${project.from}30` }}
            >
              <ExternalLink size={14} />
              Case Study
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-9 glass-card rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <section id="projects" className="section-padding bg-[#050a12] relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-cyan-500/6 top-0 right-0 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">03 / Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Production-grade data engineering across banking, telecom, and cloud
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <TiltCard key={i} project={p} index={i} onClick={() => setSelected(i)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="max-w-3xl w-full bg-[#0d1117] border border-cyan-400/10 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${projects[selected].from}, ${projects[selected].to})` }} />
              <div className="p-8">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>

                <span className="section-label text-xs" style={{ color: projects[selected].from }}>{projects[selected].domain}</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-1">{projects[selected].title}</h3>
                <p className="text-sm font-mono text-slate-500 mb-6">{projects[selected].subtitle}</p>

                {/* Problem */}
                <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-2">
                    <Lightbulb size={15} /> Problem Statement
                  </div>
                  <p className="text-amber-200/70 text-sm leading-relaxed">{projects[selected].problem}</p>
                </div>

                {/* Architecture */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold mb-4">
                    <Layers size={15} className="text-cyan-400" /> Pipeline Architecture
                  </div>
                  <div className="flex flex-wrap items-start gap-2">
                    {projects[selected].architecture.map((stage, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="bg-white/3 border border-white/8 rounded-lg p-3 text-center min-w-[90px]">
                          <div className="text-xs font-bold text-white">{stage.name}</div>
                          <div className="text-xs text-slate-500 mt-1 font-mono">{stage.tools}</div>
                        </div>
                        {i < projects[selected].architecture.length - 1 && (
                          <ArrowRight size={13} className="text-slate-600 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold mb-3">
                    <BarChart3 size={15} className="text-cyan-400" /> Impact Metrics
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {projects[selected].metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/3 border border-white/5 text-center">
                        <div className="text-lg font-bold" style={{ color: projects[selected].from }}>{m.value}</div>
                        <div className="text-xs text-slate-500 font-mono mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decisions */}
                <div className="mb-6">
                  <p className="text-slate-400 text-sm font-semibold mb-3">Key Engineering Decisions</p>
                  <div className="space-y-3">
                    {projects[selected].decisions.map((d, i) => (
                      <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                        <p className="text-sm font-semibold mb-1" style={{ color: projects[selected].from }}>{d.choice}</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{d.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selected].tags.map((t, i) => (
                    <span key={i} className="tag-pill" style={{ color: projects[selected].from, borderColor: `${projects[selected].from}25`, background: `${projects[selected].from}08` }}>{t}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <a href={projects[selected].github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                    <Github size={15} /> GitHub
                  </a>
                  <button onClick={() => setSelected(null)}
                    className="px-4 py-2 text-slate-500 rounded-lg text-sm hover:text-white transition-colors">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

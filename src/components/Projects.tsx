'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Github, TrendingUp, X, ArrowRight, Lightbulb, BarChart3, Layers } from 'lucide-react'

type Metric = { label: string; value: string }
type ArchStage = { name: string; tools: string }
type Decision = { choice: string; reason: string }

type Project = {
  title: string
  subtitle: string
  description: string
  problem: string
  architecture: ArchStage[]
  decisions: Decision[]
  tags: string[]
  metrics: Metric[]
  gradient: string
  github: string
  domain: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Real-Time Financial Risk Analytics",
      subtitle: "TSB Banco Sabadell — Capital & Impairment Platform",
      description: "Architected a risk analytics platform processing capital and impairment calculations on TSB's asset portfolio, reducing reporting latency from 24 hours to under 5 minutes.",
      problem: "Risk managers had no real-time visibility into capital adequacy. Batch reports ran overnight — intraday risk exposure changes went undetected, creating critical compliance and regulatory exposure.",
      architecture: [
        { name: "Oracle Source", tools: "Oracle 19c · CDC" },
        { name: "ETL Layer", tools: "PL/SQL · DataStage" },
        { name: "Transform", tools: "PySpark · Python" },
        { name: "Warehouse", tools: "Redshift · Star Schema" },
        { name: "Reporting", tools: "Power BI · SQL Views" },
      ],
      decisions: [
        { choice: "CDC over full-load ETL", reason: "Reduced source database load by 70% and enabled near-real-time change propagation without full table scans" },
        { choice: "Star schema over 3NF", reason: "Optimised for read-heavy analytical queries; reduced join complexity for Power BI reports significantly" },
        { choice: "PL/SQL packages over ad-hoc SQL", reason: "Encapsulated business logic, enabled versioning, and reduced query parse overhead by 40%" },
      ],
      tags: ["PL/SQL", "ETL", "PySpark", "Redshift", "Power BI", "Oracle", "CDC", "Star Schema"],
      metrics: [
        { label: "Query Performance", value: "+25%" },
        { label: "Resource Usage", value: "-20%" },
        { label: "Report Latency", value: "24h → 5min" },
        { label: "Data Accuracy", value: "99.8%" },
      ],
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/shivam8897",
      domain: "Banking · Risk Analytics"
    },
    {
      title: "Medallion Architecture Data Lakehouse",
      subtitle: "TSB Banco Sabadell — Securitization Analytics",
      description: "Designed a medallion (Bronze→Silver→Gold) data lakehouse for capital adequacy and impairment evaluation, eliminating 3× redundant compute across business units.",
      problem: "Three business units (Credit Risk, Treasury, Compliance) each maintained independent ETL pipelines computing identical capital adequacy metrics — causing data inconsistency and 3× infrastructure cost.",
      architecture: [
        { name: "Source Systems", tools: "Oracle DB · Flat Files" },
        { name: "Bronze Layer", tools: "Raw Ingestion · DataStage" },
        { name: "Silver Layer", tools: "PL/SQL · Cleansing" },
        { name: "Gold Layer", tools: "Aggregations · SCD Type 2" },
        { name: "Serving", tools: "SQL Views · Power BI" },
      ],
      decisions: [
        { choice: "SCD Type 2 for slowly changing dimensions", reason: "Required for regulatory audit trails — full history of customer account changes needed for 7-year lookback periods" },
        { choice: "Centralised Gold layer over per-team pipelines", reason: "Single source of truth eliminated the 15% data discrepancy that previously existed between team reports" },
        { choice: "Stored procedures for business logic", reason: "Allowed business rules to change without touching application code, reducing deployment risk significantly" },
      ],
      tags: ["PL/SQL", "ETL", "SQL", "SCD Type 2", "Medallion Architecture", "Data Modeling", "DataStage"],
      metrics: [
        { label: "Performance Gain", value: "+15%" },
        { label: "Data Accuracy", value: "+15%" },
        { label: "Redundant Compute", value: "-3×" },
        { label: "Teams Served", value: "3 BUs" },
      ],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/shivam8897",
      domain: "Banking · Compliance"
    },
    {
      title: "Cloud-Native Enterprise Data Platform",
      subtitle: "National Broadband Network — ELMS (AWS)",
      description: "Built an AWS-native Enterprise Location Management System replacing a fragile on-premise legacy system with a fully serverless, auto-scaling cloud architecture.",
      problem: "NBN's legacy on-premise location database could not scale during peak activations (50K+ daily connections). Manual ETL took 8+ hours and frequently failed silently, blocking field operations.",
      architecture: [
        { name: "Ingestion", tools: "S3 · AWS Glue" },
        { name: "Processing", tools: "Python · PySpark · EC2" },
        { name: "Storage", tools: "RDS (PostgreSQL) · S3" },
        { name: "Query Layer", tools: "AWS Athena · SQL" },
        { name: "Monitoring", tools: "CloudWatch · Alarms" },
      ],
      decisions: [
        { choice: "Athena over Redshift for ad-hoc queries", reason: "Pay-per-query model cut costs by 60% — the workload was low-frequency analytical, not continuous BI" },
        { choice: "AWS Glue for ETL over custom scripts", reason: "Managed ETL reduced ops burden; automatic schema detection handled frequent source schema changes gracefully" },
        { choice: "CloudWatch alarms for pipeline health", reason: "Enabled proactive failure detection — previously failures were only discovered when downstream applications broke" },
      ],
      tags: ["AWS S3", "AWS Glue", "Athena", "RDS", "EC2", "Python", "CloudWatch", "PySpark"],
      metrics: [
        { label: "AWS Services Used", value: "6+" },
        { label: "ETL Runtime", value: "8h → 45min" },
        { label: "Cost vs On-Premise", value: "-60%" },
        { label: "Pipeline Uptime", value: "99.9%" },
      ],
      gradient: "from-green-500 to-emerald-500",
      github: "https://github.com/shivam8897",
      domain: "Telecom · Cloud"
    },
    {
      title: "ETL Orchestration & Observability",
      subtitle: "Apache Airflow — Pipeline Automation at Scale",
      description: "Deployed an Apache Airflow orchestration framework replacing 20+ fragile cron jobs with dependency-aware DAGs, full observability, and automated alerting.",
      problem: "20+ ETL jobs ran as isolated cron jobs with no dependency tracking, retry logic, or alerting. A single upstream failure cascaded silently for hours, corrupting downstream reports before anyone noticed.",
      architecture: [
        { name: "Scheduling", tools: "Apache Airflow · DAGs" },
        { name: "Processing", tools: "Python · PySpark · SQL" },
        { name: "Quality Checks", tools: "Great Expectations · dbt" },
        { name: "Alerting", tools: "Airflow · Email · Slack" },
        { name: "Monitoring", tools: "Airflow UI · Grafana" },
      ],
      decisions: [
        { choice: "Airflow over Prefect/Dagster", reason: "Team familiarity and rich operator ecosystem covered all existing data source connectors without custom development" },
        { choice: "Great Expectations for data quality", reason: "Declarative expectation suites let non-engineers define data quality rules without writing code" },
        { choice: "Idempotent DAGs as a design principle", reason: "All DAGs designed to be safely re-runnable — critical for backfills and incident recovery without data duplication" },
      ],
      tags: ["Apache Airflow", "Python", "PySpark", "Great Expectations", "dbt", "Grafana", "SQL"],
      metrics: [
        { label: "Manual Interventions", value: "-80%" },
        { label: "MTTR (pipeline)", value: "4h → 20min" },
        { label: "Data Quality Score", value: "99.5%" },
        { label: "Pipeline Visibility", value: "100%" },
      ],
      gradient: "from-orange-500 to-amber-500",
      github: "https://github.com/shivam8897",
      domain: "Data Engineering · DevOps"
    },
    {
      title: "Automated SIT & Regression Framework",
      subtitle: "Enterprise Data Quality & Validation System",
      description: "Built a comprehensive automated testing framework for Oracle database migrations and ETL deployments, cutting regression testing cycles from 5 days to 6 hours.",
      problem: "Every database release required 5 days of manual SIT and regression testing — a bottleneck that delayed critical business features by weeks and consumed 70% of the QA team's capacity.",
      architecture: [
        { name: "Test Specs", tools: "Python · YAML Configs" },
        { name: "Execution", tools: "SoapUI · REST APIs" },
        { name: "Validation", tools: "SQL Assertions · Python" },
        { name: "Reporting", tools: "HTML Reports · Alerts" },
        { name: "CI Integration", tools: "Jenkins · JIRA · Git" },
      ],
      decisions: [
        { choice: "Data-driven tests over hard-coded assertions", reason: "YAML-based test configs meant QA team could add and modify test cases without touching code" },
        { choice: "Automated diff comparison for ETL outputs", reason: "Row-by-row source vs destination comparison caught 94% of data transformation bugs automatically" },
        { choice: "Parallel test execution", reason: "Running independent test suites concurrently reduced total runtime from 5 days to 6 hours" },
      ],
      tags: ["Python", "SoapUI", "RESTful API", "SQL", "Oracle", "Jenkins", "JIRA", "Test Automation"],
      metrics: [
        { label: "Test Cycle Time", value: "5d → 6h" },
        { label: "Bug Detection Rate", value: "94%" },
        { label: "Manual QA Effort", value: "-70%" },
        { label: "Release Frequency", value: "+3×" },
      ],
      gradient: "from-rose-500 to-red-500",
      github: "https://github.com/shivam8897",
      domain: "QA · Data Engineering"
    },
  ]

  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Production-grade data engineering across banking, telecom, and cloud platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect dark:bg-gray-800/50 dark:backdrop-blur-xl dark:border-gray-700 rounded-3xl overflow-hidden card-hover animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {project.domain}
                </span>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-primary-600 dark:text-accent-400 font-medium mb-4">
                  {project.subtitle}
                </p>
                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

                {/* Top 2 metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="bg-gradient-to-r from-slate-50 dark:from-gray-700 to-blue-50 dark:to-gray-600 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center gap-1 text-primary-600 dark:text-accent-400 mb-0.5">
                        <TrendingUp size={13} />
                        <span className="text-sm font-bold">{metric.value}</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-gray-300">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-gray-200 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-xs">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => setSelected(index)}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm"
                  >
                    <ExternalLink size={14} />
                    View Case Study
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-9 glass-effect dark:bg-gray-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Case Study Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 bg-gradient-to-r ${projects[selected].gradient}`}></div>

            <div className="p-8">
              <button
                className="absolute top-6 right-6 p-2 rounded-lg text-slate-600 hover:text-slate-800 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{projects[selected].domain}</span>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1 mb-1">{projects[selected].title}</h3>
              <p className="text-sm text-primary-600 dark:text-accent-400 font-medium mb-6">{projects[selected].subtitle}</p>

              {/* Problem */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold mb-2 text-sm">
                  <Lightbulb size={15} />
                  Problem Statement
                </div>
                <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">{projects[selected].problem}</p>
              </div>

              {/* Architecture */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-slate-700 dark:text-white font-semibold mb-4 text-sm">
                  <Layers size={15} />
                  Pipeline Architecture
                </div>
                <div className="flex flex-wrap items-start gap-2">
                  {projects[selected].architecture.map((stage, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center min-w-[95px]">
                        <div className="text-xs font-bold text-slate-700 dark:text-white">{stage.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stage.tools}</div>
                      </div>
                      {i < projects[selected].architecture.length - 1 && (
                        <ArrowRight size={14} className="text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-slate-700 dark:text-white font-semibold mb-3 text-sm">
                  <BarChart3 size={15} />
                  Impact Metrics
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {projects[selected].metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-center">
                      <div className="text-lg font-bold text-primary-600 dark:text-accent-400">{m.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Decisions */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 dark:text-white mb-3">Key Engineering Decisions</div>
                <div className="space-y-3">
                  {projects[selected].decisions.map((d, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                      <div className="text-sm font-semibold text-primary-600 dark:text-accent-400 mb-1">{d.choice}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{d.reason}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selected].tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-gray-200 rounded-full text-xs font-medium">{t}</span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                <a
                  href={projects[selected].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github size={15} />
                  View on GitHub
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

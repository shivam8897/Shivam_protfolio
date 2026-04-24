'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Github, TrendingUp, X } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "TSB Banco Sabadell - Capital and Impairment",
      description: "Developed an application to calculate capital and impairment based on the bank's asset portfolio. Achieved 25% improvement in query execution times and 20% reduction in system resource usage.",
      tags: ["Banking Domain", "ETL", "SQL", "PL/SQL", "Power BI"],
      metrics: [
        { label: "Query Performance", value: "25%" },
        { label: "Resource Usage", value: "-20%" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "TSB Banco Sabadell - Securitization",
      description: "Designed and implemented views and procedures to evaluate capital adequacy and impairment metrics. Improved performance and accuracy by 15% overall.",
      tags: ["Banking Domain", "ETL", "SQL", "PL/SQL"],
      metrics: [
        { label: "Overall Performance", value: "15%" },
        { label: "Accuracy", value: "15%" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "National Broadband Network (ELMS)",
      description: "Enterprise Location Management System utilizing AWS services including CloudWatch, Athena, S3, Glue, RDS, and EC2 for efficient data processing and storage solutions.",
      tags: ["ETL", "AWS", "Python", "SQL", "PL/SQL"],
      metrics: [
        { label: "Scalability", value: "Cloud-Scale" },
        { label: "Services", value: "6+ AWS" }
      ],
      gradient: "from-green-500 to-emerald-500"
    }
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
            Delivering impactful solutions across banking and telecommunications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect dark:bg-gray-800/50 dark:backdrop-blur-xl dark:border-gray-700 rounded-3xl overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="bg-gradient-to-r from-slate-50 dark:from-gray-700 to-blue-50 dark:to-gray-600 rounded-xl p-3 text-center"
                    >
                      <div className="flex items-center justify-center gap-1 text-primary-600 dark:text-accent-400 mb-1">
                        <TrendingUp size={16} />
                        <span className="text-lg font-bold">{metric.value}</span>
                      </div>
                      <div className="text-xs text-slate-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelected(index)}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="w-12 h-10 glass-effect rounded-xl flex items-center justify-center text-slate-600 hover:text-primary-600 transition-colors duration-300">
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl p-6 relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-md text-slate-600 hover:text-slate-800 dark:text-gray-300"
              onClick={() => setSelected(null)}
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{projects[selected].title}</h3>
            <p className="text-slate-600 dark:text-gray-300 mb-4">{projects[selected].description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {projects[selected].metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-md bg-gray-50 dark:bg-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-200">{m.label}</div>
                  <div className="font-semibold text-lg">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {projects[selected].tags.map((t, ti) => (
                <span key={ti} className="px-3 py-1 bg-primary-100 dark:bg-gray-700 rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Projects
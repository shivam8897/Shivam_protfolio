'use client'

import { ExternalLink, Github, TrendingUp } from 'lucide-react'

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

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering impactful solutions across banking and telecommunications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-3xl overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-3 text-center"
                    >
                      <div className="flex items-center justify-center gap-1 text-primary-600 mb-1">
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
                  <button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
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
    </section>
  )
}

export default Projects
'use client'

import { Calendar, MapPin, TrendingUp } from 'lucide-react'

const Experience = () => {
  const achievements = [
    "Architected and optimized PL/SQL packages, stored procedures, triggers, views, and external tables, reducing data retrieval time by 50% and improving overall system efficiency by 30%",
    "Streamlined SQL query performance for Oracle databases, achieving significant efficiency gains",
    "Developed, tested, and deployed high-performing database solutions for large-scale enterprise applications",
    "Conducted comprehensive system integration testing (SIT) and regression testing",
    "Managed end-to-end JIRA processes and contributed to ETL processes",
    "Mentored junior team members on PL/SQL best practices and database optimization techniques"
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building scalable data solutions at enterprise level
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect dark:bg-gray-800/50 dark:backdrop-blur-xl dark:border-gray-700 rounded-3xl p-8 md:p-12 card-hover">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
                  Application Development Analyst
                </h3>
                <div className="flex items-center gap-2 text-primary-600 dark:text-accent-400 font-semibold mb-4 md:mb-0">
                  <MapPin size={18} />
                  Accenture, Hyderabad
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400 font-medium">
                <Calendar size={18} />
                July 2021 – Present
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-50 dark:from-green-900/30 to-emerald-50 dark:to-emerald-900/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400 mb-2">
                  <TrendingUp size={20} />
                  <span className="font-semibold">Performance</span>
                </div>
                <div className="text-2xl font-bold text-green-800">50%</div>
                <div className="text-sm text-green-600">Faster Data Retrieval</div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 dark:from-blue-900/30 to-cyan-50 dark:to-cyan-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 mb-2">
                  <TrendingUp size={20} />
                  <span className="font-semibold">Efficiency</span>
                </div>
                <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">30%</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">System Improvement</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 dark:from-purple-900/30 to-violet-50 dark:to-violet-900/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 mb-2">
                  <TrendingUp size={20} />
                  <span className="font-semibold">Experience</span>
                </div>
                <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">4+</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Years in Data</div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">Key Achievements</h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary-500 dark:bg-accent-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
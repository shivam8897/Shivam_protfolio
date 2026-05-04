'use client'

import { useState, useEffect } from 'react'
import { Database, Cloud, Code, Settings, Zap, BarChart2 } from 'lucide-react'

type Skill = { name: string; level: number }
type Category = {
  title: string
  icon: React.ElementType
  skills: Skill[]
  color: string
}

const Skills = () => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 75) return 'Advanced'
    if (level >= 60) return 'Intermediate'
    return 'Learning'
  }

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'text-green-600 dark:text-green-400'
    if (level >= 75) return 'text-blue-600 dark:text-blue-400'
    if (level >= 60) return 'text-amber-600 dark:text-amber-400'
    return 'text-gray-500 dark:text-gray-400'
  }

  const skillCategories: Category[] = [
    {
      title: "Core Data Engineering",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "SQL / PL/SQL", level: 95 },
        { name: "Python", level: 85 },
        { name: "PySpark", level: 80 },
        { name: "ETL Design", level: 90 },
        { name: "Data Modeling", level: 85 },
      ]
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "AWS (S3, RDS, EC2, Glue)", level: 85 },
        { name: "Amazon Redshift", level: 80 },
        { name: "AWS Athena", level: 78 },
        { name: "Oracle Database", level: 95 },
        { name: "PostgreSQL", level: 75 },
      ]
    },
    {
      title: "ETL & Orchestration",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Apache Airflow", level: 80 },
        { name: "IBM DataStage", level: 82 },
        { name: "dbt (Data Build Tool)", level: 65 },
        { name: "AWS Glue ETL", level: 78 },
        { name: "Great Expectations", level: 70 },
      ]
    },
    {
      title: "Streaming & Big Data",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Apache Kafka", level: 65 },
        { name: "Apache Spark", level: 80 },
        { name: "Delta Lake / Iceberg", level: 65 },
        { name: "Hadoop HDFS", level: 60 },
        { name: "Apache Flink", level: 55 },
      ]
    },
    {
      title: "Analytics & Visualisation",
      icon: BarChart2,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Power BI", level: 82 },
        { name: "AWS CloudWatch", level: 80 },
        { name: "Grafana", level: 65 },
        { name: "SQL Analytics", level: 92 },
        { name: "Apache Superset", level: 55 },
      ]
    },
    {
      title: "DevOps & Tooling",
      icon: Code,
      color: "from-teal-500 to-cyan-600",
      skills: [
        { name: "Git / GitHub", level: 88 },
        { name: "CI/CD (Jenkins)", level: 72 },
        { name: "Docker", level: 68 },
        { name: "JIRA / Agile", level: 90 },
        { name: "SoapUI / API Testing", level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Production-grade expertise across the modern data engineering stack
          </p>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-6 flex-wrap text-sm text-gray-600 dark:text-gray-400">
            {[
              { label: 'Expert (90%+)', dot: 'bg-green-500' },
              { label: 'Advanced (75–89%)', dot: 'bg-blue-500' },
              { label: 'Intermediate (60–74%)', dot: 'bg-amber-500' },
              { label: 'Learning (<60%)', dot: 'bg-gray-400' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${item.dot}`}></div>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect dark:bg-gray-800/50 dark:backdrop-blur-xl dark:border-gray-700 rounded-3xl p-8 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <category.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills with proficiency bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-700 dark:text-gray-200">{skill.name}</span>
                      <span className={`text-xs font-semibold ${getLevelColor(skill.level)}`}>
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: animated ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

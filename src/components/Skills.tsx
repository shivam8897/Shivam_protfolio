'use client'

import { Database, Cloud, Code, Settings, TestTube } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Big Data",
      icon: Database,
      skills: ["SQL", "PL/SQL", "PySpark"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Database & Cloud",
      icon: Cloud,
      skills: ["Oracle SQL", "Amazon Redshift", "Database Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Settings,
      skills: ["AWS (EC2, RDS, S3, Athena)", "Git", "CI/CD"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "ETL & Tools",
      icon: Code,
      skills: ["Apache Airflow", "DataStage", "Power BI", "JIRA"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Programming & Testing",
      icon: TestTube,
      skills: ["Python", "SoapUI", "RESTful API", "Unit Testing"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the modern data engineering stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect rounded-3xl p-8 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 text-center font-medium text-slate-700 transition-all duration-300 hover:bg-white/80 hover:scale-105 hover:shadow-md"
                  >
                    {skill}
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
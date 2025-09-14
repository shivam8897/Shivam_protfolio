'use client'

import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react'

const About = () => {
  const infoItems = [
    { icon: MapPin, label: 'Location', value: 'Hyderabad, 502319' },
    { icon: Phone, label: 'Phone', value: '+91-8897636093' },
    { icon: Mail, label: 'Email', value: 'shivamdubey012@gmail.com' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech Aeronautical Engineering' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Passionate about turning complex data into meaningful insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-600">
              <p className="text-lg leading-relaxed text-gray-700">
                Data Engineer with <span className="font-semibold text-accent-600">4 years of experience</span> in PL/SQL development, ETL processes, and database optimization. Skilled in SQL, Python, PySpark, and AWS (S3, RDS, Redshift) with hands-on expertise in building and managing scalable data pipelines using Apache Airflow.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Strong problem-solving and teamwork skills with a focus on delivering efficient, data-driven solutions. Currently working as an <span className="font-semibold text-accent-600">Application Development Analyst at Accenture</span>, where I've architected and optimized database solutions that reduced data retrieval time by 50%.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center card-hover shadow-md">
                <div className="text-2xl font-bold text-accent-600">50%</div>
                <div className="text-sm text-gray-600">Query Performance</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center card-hover shadow-md">
                <div className="text-2xl font-bold text-accent-600">30%</div>
                <div className="text-sm text-gray-600">System Efficiency</div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 card-hover animate-slide-in-right shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center text-white">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{item.label}</div>
                    <div className="text-gray-600">{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
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
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-primary-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about turning complex data into meaningful insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Senior Data Engineer with <span className="font-semibold text-accent-600 dark:text-accent-400">5+ years of production experience</span> architecting and operating large-scale data pipelines across banking, telecom, and cloud platforms. Deep expertise in PL/SQL, Python, PySpark, and AWS — owning the full data lifecycle from raw ingestion through to analytical reporting layers.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Currently a <span className="font-semibold text-accent-600 dark:text-accent-400">Senior Application Development Analyst at Accenture</span>, leading enterprise data platform delivery for global clients including TSB Banco Sabadell and National Broadband Network. Proven track record of cutting query latency by 50%, reducing ETL runtimes from hours to minutes, and replacing fragile legacy systems with resilient, cost-optimised cloud architectures.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center card-hover shadow-md dark:shadow-gray-900">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">50%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Query Latency Reduced</div>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center card-hover shadow-md dark:shadow-gray-900">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">60%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cloud Cost Savings</div>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center card-hover shadow-md dark:shadow-gray-900">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center card-hover shadow-md dark:shadow-gray-900">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AWS Services Mastered</div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 card-hover animate-slide-in-right shadow-md dark:shadow-gray-900"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-700 dark:bg-primary-600 rounded-full flex items-center justify-center text-white">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">{item.label}</div>
                    <div className="text-gray-600 dark:text-gray-400">{item.value}</div>
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
'use client'

import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Project Manager - TSB Banco Sabadell",
      role: "Banking Sector",
      content: "Shivam's expertise in optimizing complex financial queries resulted in a 25% performance improvement. Exceptional problem-solver.",
      rating: 5,
      initials: "PM"
    },
    {
      name: "Tech Lead - Accenture",
      role: "Data Engineering Team",
      content: "Outstanding data engineer with deep knowledge of AWS and scalable architectures. Reduced query execution time by 50% on multiple projects.",
      rating: 5,
      initials: "TL"
    },
    {
      name: "Client - National Broadband Network",
      role: "Cloud Infrastructure",
      content: "Delivered enterprise-scale solutions using AWS services. Professional, reliable, and delivered on time.",
      rating: 5,
      initials: "CN"
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition from colleagues and clients across banking and tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect dark:bg-gray-800/50 dark:backdrop-blur-xl dark:border-gray-700 rounded-3xl p-8 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(null).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

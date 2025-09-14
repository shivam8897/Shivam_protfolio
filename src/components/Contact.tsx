'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shivamdubey012@gmail.com",
      href: "mailto:shivamdubey012@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-8897636093",
      href: "tel:+918897636093",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, 502319",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shivam-dubey012/",
      color: "hover:bg-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/shivam8897",
      color: "hover:bg-gray-800"
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:shivamdubey012@gmail.com",
      color: "hover:bg-red-600"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to collaborate on your next data engineering project? Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information - Centered */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex flex-col items-center gap-4 p-6 bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl card-hover group shadow-xl text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2 text-lg">{info.title}</div>
                    <div className="text-slate-300">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links - Centered */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Connect With Me</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-lg border border-white/30 rounded-xl transition-all duration-300 hover:scale-105 ${social.color} group shadow-xl`}
                >
                  <social.icon size={24} className="text-white" />
                  <span className="font-medium text-white text-lg">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
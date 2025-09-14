'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Mail, Github, Linkedin, Download, Code, Send } from 'lucide-react'
import shivImage from '../../public/shiv.jpg'
const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Transforming raw data into actionable insights with 4+ years of expertise in PL/SQL development, ETL processes, and cloud-scale database optimization"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-success-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.3'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 20h100M0 40h100M0 60h100M0 80h100M20 0v100M40 0v100M60 0v100M80 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
          //  backgroundImage: `url('/shiv.jpg')`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/20 h-px"
                style={{
                  width: '200%',
                  top: `${i * 12.5}%`,
                  left: '-50%',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-12 flex justify-center mt-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white to-gray-100 border-4 border-white shadow-2xl p-1 float-animation overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden shadow-inner relative bg-gray-100">
                  <img 
                    // src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xAA0EAACAQMCBAQEBAYDAAAAAAABAgMABBEFIQYSMUETIlFhBzJxgRQjkaEVQrHB0fAzUuH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAhEQACAgICAgMBAAAAAAAAAAAAAQIRAyESMUFRBBMiYf/aAAwDAQACEQMRAD8A9vvELxCsOHbVri8kzJIcRwRjLyH0A/vYVzTiPxc4k1qVo7W8+jWzHAjt2Kgj3b8x/wDKuaeJXGN9xVqzXN5IVhQlYYAflQf5PU1Vp5WkYsxJJOST1NdEcaiqOaWaUnaOh8Q/ELiDVGaOO8+jWzHAjt2Kgj3b8x/8qhsOPOKNKkWS2v5SynKrOBKpHsWyKzqkqKKRRRRQAUUUUAFFFFABRRRQB//Z"
                    src="/shiv.jpg"
                    alt="Shivam Dubey - Senior Data Engineer"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-inner absolute inset-0 hidden">
                    SD
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-success-400 rounded-full border-4 border-white animate-pulse shadow-xl">
                <div className="w-full h-full rounded-full bg-success-500"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>
              Shivam Dubey
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 drop-shadow-xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Senior Data Engineer
            </h2>

            <p className="text-lg md:text-xl text-white mb-12 max-w-4xl mx-auto leading-relaxed min-h-[3rem] drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
              {displayText}
              <span className="animate-pulse">|</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-xl p-6 card-hover shadow-xl">
                <div className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>50%</div>
                <div className="text-white font-medium drop-shadow-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Faster Queries</div>
              </div>
              <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-xl p-6 card-hover shadow-xl">
                <div className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>30%</div>
                <div className="text-white font-medium drop-shadow-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>System Efficiency</div>
              </div>
              <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-xl p-6 card-hover shadow-xl">
                <div className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>4+</div>
                <div className="text-white font-medium drop-shadow-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Years Experience</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contact" className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
                <Send size={20} />
                Get In Touch
              </a>
              <a href="#projects" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 inline-flex items-center gap-2">
                <Code size={20} />
                View Projects
              </a>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 inline-flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="mailto:shivamdubey012@gmail.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent-300 transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-dubey012/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent-300 transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/shivam8897"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent-300 transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero
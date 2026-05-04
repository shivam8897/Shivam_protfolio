'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => (
  <footer className="bg-[#030711] border-t border-white/5 py-10">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Logo */}
        <a href="#home" className="font-mono text-sm font-semibold">
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Shivam</span>
          <span className="text-indigo-400">Dubey</span>
          <span className="text-cyan-400">/&gt;</span>
        </a>

        {/* Copyright */}
        <p className="text-slate-600 text-sm flex items-center gap-1.5">
          © 2026 Shivam Dubey · Built with <Heart size={13} className="text-pink-500 fill-pink-500" /> using Next.js & Three.js
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            { href: 'https://www.linkedin.com/in/shivam-dubey012/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://github.com/shivam8897',                icon: Github,   label: 'GitHub' },
            { href: 'mailto:shivamdubey012@gmail.com',              icon: Mail,     label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </footer>
)

export default Footer

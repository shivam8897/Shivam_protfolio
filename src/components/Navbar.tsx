'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#home',        label: 'Home' },
  { href: '#about',       label: 'About' },
  { href: '#experience',  label: 'Experience' },
  { href: '#projects',    label: 'Projects' },
  { href: '#skills',      label: 'Skills' },
  { href: '#testimonials',label: 'Testimonials' },
  { href: '#contact',     label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('#home')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navItems.map(n => document.querySelector(n.href))
      sections.forEach((sec, i) => {
        if (!sec) return
        const rect = sec.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) setActive(navItems[i].href)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className={`container-custom`}>
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1117]/90 backdrop-blur-xl border border-cyan-400/10 shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}>

          {/* Logo */}
          <motion.a
            href="#home"
            className="font-mono text-lg font-semibold"
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Shivam</span>
            <span className="text-indigo-400">Dubey</span>
            <span className="text-cyan-400">/&gt;</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === item.href
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-200"
            >
              Hire Me
            </a>
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 mx-0 bg-[#0d1117]/95 backdrop-blur-xl border border-cyan-400/10 rounded-2xl p-4 shadow-xl"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    active === item.href
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

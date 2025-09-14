'use client'

import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2">
            © 2024 Shivam Dubey. Made with 
            <Heart size={16} className="text-red-500 animate-pulse" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
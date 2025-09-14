import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shivam Dubey - Senior Data Engineer',
  description: 'Transforming raw data into actionable insights with 4+ years of expertise in PL/SQL development, ETL processes, and cloud-scale database optimization',
  keywords: 'Data Engineer, PL/SQL, ETL, AWS, Python, Database Optimization',
  authors: [{ name: 'Shivam Dubey' }],
  openGraph: {
    title: 'Shivam Dubey - Senior Data Engineer',
    description: 'Transforming raw data into actionable insights with 4+ years of expertise',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
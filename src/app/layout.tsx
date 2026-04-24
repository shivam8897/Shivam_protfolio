import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shivam Dubey - Senior Data Engineer | Portfolio',
  description: 'Transforming raw data into actionable insights with 4+ years of expertise in PL/SQL development, ETL processes, and cloud-scale database optimization.',
  keywords: 'Data Engineer, PL/SQL, ETL, AWS, Python, Database Optimization, Accenture, Airflow',
  authors: [{ name: 'Shivam Dubey', url: 'https://shivamdubey.dev' }],
  creator: 'Shivam Dubey',
  openGraph: {
    title: 'Shivam Dubey - Senior Data Engineer',
    description: 'Transforming raw data into actionable insights with 4+ years of expertise',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Dubey - Senior Data Engineer',
    description: 'Data Engineer | PL/SQL | ETL | AWS | Python',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
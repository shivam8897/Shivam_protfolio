import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shivam Dubey — Senior Data Engineer',
  description: 'Senior Data Engineer with 5+ years building production-grade pipelines across banking, telecom, and cloud platforms. Expert in PL/SQL, Python, PySpark, and AWS.',
  keywords: 'Data Engineer, PL/SQL, ETL, AWS, Python, PySpark, Apache Airflow, Accenture',
  authors: [{ name: 'Shivam Dubey' }],
  creator: 'Shivam Dubey',
  openGraph: {
    title: 'Shivam Dubey — Senior Data Engineer',
    description: 'Building production-grade data pipelines and cloud-native platforms.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Dubey — Senior Data Engineer',
    description: 'Data Engineer | PL/SQL | ETL | AWS | Python',
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#030711] text-slate-200">
        {children}
      </body>
    </html>
  )
}

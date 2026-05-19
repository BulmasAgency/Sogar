import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'SOGAR | Société Gabonaise de Restauration',
  description: 'SOGAR - Excellence culinaire gabonaise. Services de restauration haut de gamme pour événements, entreprises et réceptions. Cuisine africaine raffinée.',
  keywords: ['catering', 'restauration', 'Gabon', 'traiteur', 'événements', 'cuisine africaine', 'SOGAR'],
  authors: [{ name: 'SOGAR' }],
  openGraph: {
    title: 'SOGAR | Société Gabonaise de Restauration',
    description: 'Excellence culinaire gabonaise. Services de restauration haut de gamme.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

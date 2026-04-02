import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Metreon - Trusted Partner in Electronics Wholesale',
  description: 'We connect global tech brands with B2B buyers — fast, flexible, and reliable. 20 years of experience, direct import from Asia, and EU warehouses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

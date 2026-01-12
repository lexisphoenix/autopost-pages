import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoPost - Términos y Privacidad',
  description: 'Términos de servicio y política de privacidad de AutoPost',
  verification: {
    google: 'HrQF8-DzCRkdFzP6EnLexs6dh8RE2TCVWmxrNPDXQuU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

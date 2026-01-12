import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoPost - Términos y Privacidad',
  description: 'Términos de servicio y política de privacidad de AutoPost',
  // Para verificación de Google Search Console, agrega el meta tag aquí:
  // verification: {
  //   google: 'tu-codigo-de-verificacion-aqui',
  // },
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

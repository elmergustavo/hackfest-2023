import './css/globals.css'
import './css/tags.css'
import './css/buttons.css'
import './css/components.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Colitas',
  description: 'Adopta tu mascota, con nosotros en colitas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import { ReactNode } from 'react'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Plataforma de Carros',
  description: 'Uma plataforma de carros feita em Next.js, TypeScript e TailwindCSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import localFont from 'next/font/local'
const inter = localFont({
  src: 'fonts/Virgil.woff2'
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-slate-100'>
        <div className='relative h-screen'>
        <div className='absolute h-16 w-full top-0 left-0'>
          <Navbar/>
        </div>
        <div className='container mx-auto p-2 h-full pt-20 overflow-hidden'>
          {children}
        </div>
        </div>
        </div>
        </body>
    </html>
  )
}

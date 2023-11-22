import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import './globals.css'
import AppProvider from './providers'

const merriweather = Merriweather({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weaver',
  description: 'Dive into a vibrant web of fan works on Weaver, where creativity knows no bounds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}

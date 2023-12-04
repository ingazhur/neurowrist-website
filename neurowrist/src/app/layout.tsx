import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get Neurowrist',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://getlaunchlist.com/js/widget-diy.js" defer></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

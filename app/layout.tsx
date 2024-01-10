import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })
const dmsans = DM_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Yeo Eng Heng',
  description: 'Product Manager from Singapore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmsans.className} bg-gradient-to-b from-zinc-900 to-black shadow`}>
        <Header logo="yeoengheng"></Header>
        {children}
      </body>
    </html>
  )
}

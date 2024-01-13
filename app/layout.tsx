import type { Metadata } from 'next'
import Script from 'next/script'

import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

import Header from './components/Header'

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
      <Script id='googletagmanager' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MZH546FG');
        `}
      </Script>
      <body className={`${inter.className} ${dmsans.className} bg-gradient-to-b from-zinc-900 to-black shadow`}>
        <Header logo="yeoengheng"/>
        {children}
        <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZH546FG"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }} 
    />
      </body>
    </html>
  )
}

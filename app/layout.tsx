import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/nav/Navigation'
import Footer from '@/components/Footer'
import Head from 'next/head'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'baradriel.com/  ',
  description: 'Adriel&apos;s portfolio website.',
  icons: {
    icon: '/images/icons/favicon.ico',
    shortcut: '/images/icons/favicon-16x16.png',
    apple: '/images/icons/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='icon'
          href='/images/icons/favicon-16x16.png?v=2'
          sizes='16x16'
          type='image/png'
        />
        <link
          rel='icon'
          href='/images/icons/favicon-32x32.png?v=2'
          sizes='32x32'
          type='image/png'
        />
        <link
          rel='apple-touch-icon'
          href='/images/icons/apple-touch-icon.png?=v2'
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center px-4`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import './globals.css' // Your global styles if you have
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Derek Owusu Bekoe | Cloud Resume Challenge',
  description: 'Created by Derek Owusu Bekoe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type { Metadata, Viewport } from 'next'
import { LOGO_URL } from '@/lib/config'
import './globals.css'

export const metadata: Metadata = {
  title: 'على الله حكايتنا — فكرتك تستاهل تتسمع',
  description: 'على الله حكايتنا — فكرتك تستاهل تتسمع. ابعت حكايتك أو مشروعك على واتساب.',
  icons: { icon: LOGO_URL, apple: LOGO_URL },
  openGraph: {
    title: 'على الله حكايتنا — فكرتك تستاهل تتسمع',
    description: 'على الله حكايتنا — فكرتك تستاهل تتسمع.',
    type: 'website',
    locale: 'ar_AR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0D0B08',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

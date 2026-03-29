import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_NAME } from '@/lib/site-brand'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | shihou-cbt.com`,
    template: `%s | ${SITE_NAME}`,
  },
  description: '司法試験を、デジタルの力で効率化。論文式・短答式の過去問演習からAI分析まで、合格に必要なすべてを一つのプラットフォームで。',
  keywords: ['司法試験', 'CBT', '法律学習', '論文式', '短答式', '過去問', 'AI添削', '司法試験対策'],
  authors: [{ name: 'shihou-cbt.com' }],
  creator: 'shihou-cbt.com',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://shihou-cbt.com',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: '司法試験を、デジタルの力で効率化。論文式・短答式の過去問演習からAI分析まで。',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: '司法試験を、デジタルの力で効率化。',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${geist.variable} ${geistMono.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

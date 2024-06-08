import { Providers } from './providers';
import { ToastContainer } from 'react-toastify';
import NextTopLoader from 'nextjs-toploader';
import BackToTop from '@/components/BackToTop';
import { Noto_Sans_TC } from 'next/font/google';
import '@/styles/root.css';
import '@/styles/global.css';

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://finance-tracker.iistw.com'),
  title: {
    template: '%s｜記帳 App｜Infinity 資訊',
    default: '記帳 App｜Infinity 資訊',
  },
  description: '這是我自用的記帳 App',
  manifest: "https://finance-tracker.iistw.com/manifest.json",
  keywords: [
    '記帳 App｜Infinity 資訊',
    '記帳 App',
  ],
  authors: [{ name: '張永昌' }],
  creator: '張永昌',
  publisher: '張永昌',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: '記帳 App｜Infinity 資訊',
    url: 'https://blog.iistw.com/',
    siteName: '記帳 App｜Infinity 資訊',
    description: '這是我自用的記帳 App',
    type: 'website',
    locale: 'zh_TW',
  },
  twitter: {
    card: 'summary_large_image',
    title: '記帳 App｜Infinity 資訊',
    description: '這是我自用的記帳 App',
    creator: "@iistw22788",
    siteId: '@iistw22788',
  },
  appleWebApp: {
    title: '記帳 App｜Infinity 資訊',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/favicon.png',
      },
      {
        url: '/icon-192x192.png',
        size: '192x192',
      },
      {
        url: '/icon-256x256.png',
        size: '256x256',
      },
      {
        url: '/icon-364x364.png',
        size: '364x364',
      },
      {
        url: '/icon-512x512.png',
        size: '512x512',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className={notoSansTC.className}>
        <Providers>
          <ToastContainer />
          <NextTopLoader />
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}

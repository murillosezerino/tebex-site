import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://www.tebexlog.com.br' // ← trocar pelo domínio real

export const viewport: Viewport = {
  themeColor: '#FFD400',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Tebex Log — Transportadora Nacional com Gestão de Risco',
    template: '%s | Tebex Log',
  },
  description:
    'Transportadora nacional especializada em transporte terrestre de cargas. Frota rastreada 24h, gestão de risco completa, monitoramento via satélite e cobertura em todo o Brasil.',

  keywords: [
    'transportadora',
    'transporte de carga',
    'frete nacional',
    'gestão de risco logístico',
    'rastreamento de carga',
    'transportadora São Paulo',
    'escolta armada',
    'monitoramento de frota',
    'seguro de carga',
    'logística terrestre',
    'Tebex Log',
  ],

  authors: [{ name: 'Tebex Log', url: SITE_URL }],
  creator: 'Tebex Log',
  publisher: 'Tebex Log',

  // Canonical + alternates
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/' },
  },

  // Open Graph — WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Tebex Log',
    title: 'Tebex Log — Transportadora Nacional com Gestão de Risco',
    description:
      'Segurança não é um diferencial — é prioridade. Frota rastreada 24h, gestão de risco e cobertura em todo o Brasil.',
    images: [
      {
        url: '/og-image.jpg',     // ← criar imagem 1200x630px
        width: 1200,
        height: 630,
        alt: 'Tebex Log — Transportadora Nacional',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Tebex Log — Transportadora Nacional com Gestão de Risco',
    description: 'Frota rastreada 24h, gestão de risco e cobertura em todo o Brasil.',
    images: ['/og-image.jpg'],
  },

  // Ícones
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },

  // Manifest PWA
  manifest: '/manifest.json',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verificação Google Search Console
  verification: {
    google: 'COLE_SEU_CODIGO_GOOGLE_SEARCH_CONSOLE_AQUI',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD — Organização */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Tebex Log',
              url: SITE_URL,
              logo: `${SITE_URL}/logo-white.png`,
              description: 'Transportadora nacional especializada em transporte terrestre de cargas com gestão de risco completa.',
              telephone: '+5512997364365',
              email: 'juliana.soares@tebexlog.com.br',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BR',
              },
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+5512997364365',
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  opens: '00:00',
                  closes: '23:59',
                },
              },
            }),
          }}
        />

        {/* JSON-LD — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${SITE_URL}/#business`,
              name: 'Tebex Log',
              image: `${SITE_URL}/og-image.jpg`,
              url: SITE_URL,
              telephone: '+5512997364365',
              priceRange: '$$',
              address: { '@type': 'PostalAddress', addressCountry: 'BR' },
              geo: { '@type': 'GeoCoordinates', latitude: -23.5505, longitude: -46.6333 },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              hasMap: 'https://maps.google.com',
              areaServed: { '@type': 'Country', name: 'Brazil' },
            }),
          }}
        />
      </head>
      <body style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
        {children}
      </body>
    </html>
  )
}

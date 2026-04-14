import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import ScrollToTop from '@/components/ScrollToTop'
import SecurityAlert from '@/components/SecurityAlert'

const SITE_URL = 'https://www.tebexlog.com.br'

export const viewport: Viewport = {
  themeColor: '#FFD400',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Tebex Log — Transportadora Nacional com Gestão de Risco', template: '%s | Tebex Log' },
  description: 'Transportadora nacional especializada em transporte terrestre de cargas. Frota rastreada 24h, gestão de risco completa, monitoramento via satélite e cobertura em todo o Brasil.',
  keywords: ['transportadora','transporte de carga','frete nacional','gestão de risco logístico','rastreamento de carga','transportadora São Paulo','escolta armada','monitoramento de frota','seguro de carga','logística terrestre','Tebex Log'],
  authors: [{ name: 'Tebex Log', url: SITE_URL }],
  creator: 'Tebex Log',
  alternates: { canonical: '/', languages: { 'pt-BR': '/' } },
  openGraph: {
    type: 'website', locale: 'pt_BR', url: SITE_URL, siteName: 'Tebex Log',
    title: 'Tebex Log — Transportadora Nacional com Gestão de Risco',
    description: 'Segurança não é um diferencial — é prioridade. Frota rastreada 24h e cobertura em todo o Brasil.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Tebex Log' }],
  },
  twitter: { card: 'summary_large_image', title: 'Tebex Log', description: 'Transportadora nacional com gestão de risco.', images: ['/og-image.jpg'] },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/manifest.json',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'COLE_SEU_CODIGO_GOOGLE_SEARCH_CONSOLE_AQUI' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
        <SecurityAlert />
        {children}
        <ScrollToTop />
        <WhatsAppWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Tebex Log',
            url: SITE_URL,
            description: 'Transportadora nacional especializada em transporte terrestre de cargas com gestão de risco completa.',
            telephone: '+5512997364365',
            email: 'juliana.soares@tebexlog.com.br',
            address: { '@type': 'PostalAddress', addressCountry: 'BR' },
            areaServed: { '@type': 'Country', name: 'Brazil' },
            contactPoint: { '@type': 'ContactPoint', telephone: '+5512997364365', contactType: 'customer service', availableLanguage: 'Portuguese' },
          }) }}
        />
      </body>
    </html>
  )
}

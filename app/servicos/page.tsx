import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicosContent from './ServicosContent'

const SITE_URL = 'https://www.tebexlog.com.br'

export const metadata: Metadata = {
  title: 'Serviços — Transporte Terrestre e Gestão de Risco',
  description: 'Conheça os serviços da Tebex Log: transporte de carga fracionada e fechada, gestão de risco completa com escolta e rastreamento, e monitoramento 24/7 para todo o Brasil.',
  alternates: { canonical: '/servicos' },
  openGraph: {
    title: 'Serviços | Tebex Log',
    description: 'Transporte de carga, gestão de risco e monitoramento 24/7 para todo o Brasil.',
    url: `${SITE_URL}/servicos`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ServicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Transporte Terrestre de Cargas',
          provider: { '@type': 'Organization', name: 'Tebex Log', url: SITE_URL, telephone: '+5512997364365' },
          areaServed: { '@type': 'Country', name: 'Brazil' },
        }) }}
      />
      <main style={{ backgroundColor: 'var(--black)', minHeight: '100vh' }}>
        <Navbar />
        <ServicosContent />
        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

const WA = 'https://wa.me/5512997364365?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Tebex%20Log'

const services = [
  {
    id: 'transporte',
    icon: '🚛',
    tag: 'Operação',
    title: 'Transporte de Carga',
    headline: 'Frota própria e agregados para qualquer volume.',
    description: 'Atendemos cargas fracionadas e fechadas em todo o território nacional. Nossa frota é rastreada 24h, com motoristas treinados e processos padronizados para garantir pontualidade e segurança em cada operação.',
    features: [
      { icon: '📦', label: 'Carga fracionada (LTL)', desc: 'Ideal para volumes menores — você paga só pelo espaço que ocupa.' },
      { icon: '🚛', label: 'Carga fechada (FTL)', desc: 'Veículo dedicado para sua carga, com rota direta e máxima agilidade.' },
      { icon: '📅', label: 'Coleta agendada', desc: 'Agendamos a coleta no endereço e horário que você precisar.' },
      { icon: '📋', label: 'Comprovante digital', desc: 'Confirmação de entrega com foto e assinatura digital em tempo real.' },
    ],
    cta: 'Cotar transporte',
    waMsg: 'Olá%2C%20gostaria%20de%20cotar%20um%20transporte%20de%20carga',
    bgColor: '#0F0F0F',
    accentColor: '#FFD400',
  },
  {
    id: 'risco',
    icon: '🛡️',
    tag: 'Segurança',
    title: 'Gestão de Risco',
    headline: 'Segurança não é diferencial — é prioridade.',
    description: 'Operamos em parceria com as principais gerenciadoras de risco do mercado. Cada viagem é planejada com análise de rotas, perfil de motoristas e protocolos ativos de prevenção para garantir a integridade da sua carga.',
    features: [
      { icon: '🛰️', label: 'Rastreamento via satélite', desc: 'Bloqueio remoto e visibilidade total da posição do veículo a qualquer momento.' },
      { icon: '🔒', label: 'Escolta armada', desc: 'Disponível para cargas de alto valor ou regiões de risco elevado.' },
      { icon: '📊', label: 'Análise de perfil', desc: 'Motoristas avaliados por histórico, aptidão e conformidade operacional.' },
      { icon: '🤝', label: 'Gerenciadoras certificadas', desc: 'Parceria com as principais GRs do mercado nacional.' },
    ],
    cta: 'Falar sobre segurança',
    waMsg: 'Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20gestão%20de%20risco',
    bgColor: '#111',
    accentColor: '#FFD400',
  },
  {
    id: 'monitoramento',
    icon: '📡',
    tag: 'Tecnologia',
    title: 'Monitoramento 24/7',
    headline: 'Central ativa a qualquer hora, todos os dias.',
    description: 'Nossa central de monitoramento opera ininterruptamente, acompanhando cada veículo em tempo real. Controle de paradas não autorizadas, desvios de rota, fadiga do motorista e comunicação direta com a base.',
    features: [
      { icon: '⚡', label: 'Alertas em tempo real', desc: 'Notificações imediatas para qualquer desvio, parada ou ocorrência.' },
      { icon: '📹', label: 'Câmeras embarcadas', desc: 'Monitoramento visual contínuo com IA para detecção de fadiga e distração.' },
      { icon: '📍', label: 'Controle de rota', desc: 'Comparação em tempo real entre rota planejada e rota executada.' },
      { icon: '📞', label: 'Comunicação direta', desc: 'Canal dedicado entre motorista, base e cliente a qualquer momento.' },
    ],
    cta: 'Conhecer monitoramento',
    waMsg: 'Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20monitoramento',
    bgColor: '#0D0D0D',
    accentColor: '#FFD400',
  },
]

export default function ServicosPage() {
  return (
    
      {/* JSON-LD — Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Transporte Terrestre de Cargas',
          provider: {
            '@type': 'Organization',
            name: 'Tebex Log',
            url: SITE_URL,
            telephone: '+5512997364365',
          },
          areaServed: { '@type': 'Country', name: 'Brazil' },
          description: 'Serviços de transporte terrestre de cargas com gestão de risco, rastreamento via satélite e monitoramento 24/7 em todo o Brasil.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Serviços de Transporte',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte de Carga Fracionada (LTL)' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte de Carga Fechada (FTL)' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestão de Risco Logístico' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monitoramento de Frota 24/7' } },
            ],
          },
        }) }}
      />

      <main style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero da página */}
      <section style={{ backgroundColor: '#0A0A0A', paddingTop: '68px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(4rem,8vw,6rem) 1.5rem clamp(3rem,6vw,5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>Início</a>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>›</span>
            <span style={{ color: '#FFD400', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Serviços</span>
          </div>

          <h1 className="font-brand" style={{ color: '#FFFFFF', fontSize: 'clamp(2.5rem,7vw,5.5rem)', lineHeight: '0.96', marginBottom: '1.5rem' }}>
            NOSSOS<br />
            <span style={{ color: '#FFD400' }}>SERVIÇOS.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem,2vw,1.1rem)', lineHeight: 1.8, maxWidth: '42rem' }}>
            Soluções completas em transporte terrestre, gestão de risco e monitoramento.
            Cada serviço foi desenhado para garantir <strong style={{ color: 'rgba(255,255,255,0.85)' }}>segurança, agilidade e visibilidade total</strong> para sua operação.
          </p>

          {/* Quick nav dos serviços */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 100, textDecoration: 'none' }}>
                <span>{s.icon}</span> {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }} />

      {/* Seções de serviço */}
      {services.map((s, idx) => (
        <section key={s.id} id={s.id} style={{ backgroundColor: s.bgColor, padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 'clamp(3rem,6vw,5rem)', alignItems: 'center' }}>

              {/* Texto — alterna lado no desktop */}
              <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,212,0,0.1)', border: '1px solid rgba(255,212,0,0.25)', borderRadius: 100, padding: '0.3rem 0.875rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>{s.icon}</span>
                  <span style={{ color: '#FFD400', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{s.tag}</span>
                </div>

                <h2 className="font-brand" style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem,4vw,3rem)', lineHeight: 1.05, marginBottom: '0.875rem' }}>
                  {s.title.toUpperCase()}
                </h2>
                <p style={{ color: '#FFD400', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.5 }}>
                  {s.headline}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                  {s.description}
                </p>

                <a href={`https://wa.me/5512997364365?text=${s.waMsg}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.75rem', backgroundColor: '#FFD400', color: '#0A0A0A', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 4, textDecoration: 'none' }}>
                  💬 {s.cta}
                </a>
              </div>

              {/* Features grid */}
              <div style={{ order: idx % 2 === 0 ? 1 : 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {s.features.map((f, i) => (
                  <div key={i}
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', cursor: 'default' }}>
                    <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>{f.icon}</div>
                    <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.3 }}>{f.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', lineHeight: 1.65 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {idx < services.length - 1 && (
            <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', marginTop: 'clamp(4rem,8vw,7rem)' }} />
          )}
        </section>
      ))}

      {/* CTA final */}
      <section style={{ backgroundColor: '#FFD400', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="font-brand" style={{ color: '#0A0A0A', fontSize: 'clamp(2rem,6vw,4.5rem)', lineHeight: 1, marginBottom: '1.25rem' }}>
            PRONTO PARA COMEÇAR?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: 'clamp(0.9rem,2vw,1rem)', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Fale agora com nossa equipe e receba uma cotação personalizada para sua operação.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.25rem', backgroundColor: '#0A0A0A', color: '#FFD400', fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 4, textDecoration: 'none' }}>
              💬 Falar no WhatsApp
            </a>
            <a href="tel:12997364365"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.25rem', border: '2px solid rgba(0,0,0,0.2)', color: '#0A0A0A', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 4, textDecoration: 'none' }}>
              📞 (12) 99736-4365
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
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

const services = [
  {
    id: 'transporte',
    tag: 'Operação',
    title: 'Transporte de Carga',
    headline: 'Frota própria e agregados para qualquer volume.',
    description: 'Atendemos cargas fracionadas e fechadas em todo o território nacional. Nossa frota é rastreada 24h, com motoristas treinados e processos padronizados para garantir pontualidade e segurança em cada operação.',
    features: [
      { label: 'Carga fracionada (LTL)', desc: 'Ideal para volumes menores — você paga só pelo espaço que ocupa.' },
      { label: 'Carga fechada (FTL)', desc: 'Veículo dedicado para sua carga, com rota direta e máxima agilidade.' },
      { label: 'Coleta agendada', desc: 'Agendamos a coleta no endereço e horário que você precisar.' },
      { label: 'Comprovante digital', desc: 'Confirmação de entrega com foto e assinatura digital em tempo real.' },
    ],
    cta: 'Cotar transporte',
    waMsg: 'Olá%2C%20gostaria%20de%20cotar%20um%20transporte%20de%20carga',
    bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80',
  },
  {
    id: 'risco',
    tag: 'Segurança',
    title: 'Gestão de Risco',
    headline: 'Segurança não é diferencial — é prioridade.',
    description: 'Operamos em parceria com as principais gerenciadoras de risco do mercado. Cada viagem é planejada com análise de rotas, perfil de motoristas e protocolos ativos de prevenção para garantir a integridade da sua carga.',
    features: [
      { label: 'Rastreamento via satélite', desc: 'Bloqueio remoto e visibilidade total da posição do veículo a qualquer momento.' },
      { label: 'Escolta armada', desc: 'Disponível para cargas de alto valor ou regiões de risco elevado.' },
      { label: 'Análise de perfil', desc: 'Motoristas avaliados por histórico, aptidão e conformidade operacional.' },
      { label: 'Gerenciadoras certificadas', desc: 'Parceria com as principais GRs do mercado nacional.' },
    ],
    cta: 'Falar sobre segurança',
    waMsg: 'Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20gestão%20de%20risco',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80',
  },
  {
    id: 'monitoramento',
    tag: 'Tecnologia',
    title: 'Monitoramento 24/7',
    headline: 'Central ativa a qualquer hora, todos os dias.',
    description: 'Nossa central de monitoramento opera ininterruptamente, acompanhando cada veículo em tempo real. Controle de paradas não autorizadas, desvios de rota, fadiga do motorista e comunicação direta com a base.',
    features: [
      { label: 'Alertas em tempo real', desc: 'Notificações imediatas para qualquer desvio, parada ou ocorrência.' },
      { label: 'Câmeras embarcadas', desc: 'Monitoramento visual contínuo com IA para detecção de fadiga e distração.' },
      { label: 'Controle de rota', desc: 'Comparação em tempo real entre rota planejada e rota executada.' },
      { label: 'Comunicação direta', desc: 'Canal dedicado entre motorista, base e cliente a qualquer momento.' },
    ],
    cta: 'Conhecer monitoramento',
    waMsg: 'Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20monitoramento',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
  },
]

export default function ServicosPage() {
  return (
    <>
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

      <main style={{ backgroundColor: 'var(--black)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--black)',
        padding: 'clamp(6rem,10vw,10rem) 0 clamp(3rem,6vw,5rem)',
        position: 'relative',
      }}>
        {/* Imagem de fundo hero serviços */}
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.95) 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Início</Link>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>›</span>
            <span style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Serviços</span>
          </div>

          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2.5rem,7vw,5rem)', fontWeight: 200, lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Nossos serviços.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.95rem,2vw,1.15rem)', lineHeight: 1.85, maxWidth: '42rem' }}>
            Soluções completas em transporte terrestre, gestão de risco e monitoramento.
            Cada serviço foi desenhado para garantir segurança, agilidade e visibilidade total para sua operação.
          </p>

          {/* Quick nav */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.7rem 1.4rem',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  borderRadius: 0,
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'all 0.3s',
                }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }} />

      {/* Seções de serviço */}
      {services.map((s, idx) => (
        <section key={s.id} id={s.id} style={{
          backgroundColor: 'var(--black)',
          padding: 'clamp(5rem,10vw,8rem) 0',
          position: 'relative',
        }}>
          {/* Background image per service */}
          <img
            src={s.bgImage}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.07,
              pointerEvents: 'none',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: idx % 2 === 0
              ? 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 100%)'
              : 'linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.95) 100%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
              gap: 'clamp(3rem,6vw,5rem)',
              alignItems: 'start',
            }}>

              {/* Texto */}
              <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                <span style={{
                  color: 'var(--accent)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'inline-block',
                  background: 'rgba(255,212,0,0.1)',
                  padding: '0.3rem 0.8rem',
                }}>
                  {s.tag}
                </span>

                <h2 style={{ color: 'var(--white)', fontSize: 'clamp(1.75rem,4vw,3rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '1rem' }}>
                  {s.title}
                </h2>
                <p style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.6 }}>
                  {s.headline}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '2rem' }}>
                  {s.description}
                </p>

                <a
                  href={`https://wa.me/5512997364365?text=${s.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  style={{ display: 'inline-flex' }}
                >
                  {s.cta}
                </a>
              </div>

              {/* Features grid */}
              <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                }}>
                  {s.features.map((f, i) => (
                    <div key={i}
                      style={{
                        backgroundColor: 'rgba(10,10,10,0.9)',
                        padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.6rem',
                        backdropFilter: 'blur(4px)',
                      }}>
                      <div style={{
                        color: 'var(--white)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        lineHeight: 1.3,
                      }}>
                        {f.label}
                      </div>
                      <div style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.82rem',
                        lineHeight: 1.7,
                      }}>
                        {f.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {idx < services.length - 1 && (
            <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', marginTop: 'clamp(5rem,10vw,8rem)' }} />
          )}
        </section>
      ))}

      {/* CTA final */}
      <section style={{
        position: 'relative',
        padding: 'clamp(5rem,10vw,7rem) 0',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, var(--black) 0%, rgba(10,10,10,0.85) 50%, var(--black) 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span style={{
            color: 'var(--accent)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem',
          }}>
            Comece agora
          </span>
          <h2 style={{ color: 'var(--white)', fontSize: 'clamp(2rem,6vw,4rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Pronto para começar?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.95rem,2vw,1.05rem)', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Fale agora com nossa equipe e receba uma cotação personalizada para sua operação.
          </p>
          <Link href="/#cotacao" className="btn btn-accent">
            Solicitar cotação
          </Link>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}

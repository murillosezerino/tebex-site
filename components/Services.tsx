'use client'

import Link from 'next/link'
import { ParallaxBg, Reveal } from './ParallaxProvider'

const services = [
  {
    title: 'Transporte de Carga',
    desc: 'Frota própria e agregados para cargas fechadas e de alto valor, com rastreamento em tempo real e cobertura nacional.',
    href: '/servicos#transporte',
    highlights: ['Carga fechada (FTL)', 'Coleta agendada', 'Carga de alto valor'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
  },
  {
    title: 'Gestão de Risco',
    desc: 'Parceria com as principais gerenciadoras do mercado. Escolta armada, seguros personalizados e monitoramento contínuo.',
    href: '/servicos#risco',
    highlights: ['Escolta armada', 'Rastreamento via satélite', 'Gerenciadoras certificadas'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    ),
  },
  {
    title: 'Monitoramento 24/7',
    desc: 'Central operando ininterruptamente com controle de paradas, desvios e comunicação direta com motoristas.',
    href: '/servicos#monitoramento',
    highlights: ['Alertas em tempo real', 'Câmeras embarcadas', 'Controle de rota'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        backgroundColor: 'var(--black)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ParallaxBg
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
        speed={0.2}
        opacity={0.18}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.95) 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1120px', width: '100%', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <span style={{
              color: 'var(--accent)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}>
              O que fazemos
            </span>
            <h2 style={{
              color: '#FFFFFF',
              fontWeight: 200,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              Nossos serviços
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 300,
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              margin: '1rem auto 0',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}>
              Soluções integradas de transporte, segurança e monitoramento para a sua operação.
            </p>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((s, i) => (
            <Reveal key={i} delay={0.15 + i * 0.2} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
              <div
                className="tbx-card tbx-card--interactive service-card"
                onMouseMove={e => {
                  const r = e.currentTarget.getBoundingClientRect()
                  e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
                  e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
                }}
                style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  height: '100%',
                }}
              >
                <span className="tbx-card-accent" />

                {/* Number + Icon header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    color: 'rgba(255,255,255,0.07)',
                    fontFamily: 'var(--font)',
                    fontSize: '3.25rem',
                    fontWeight: 200,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}>
                    0{i + 1}
                  </span>
                  <div className="service-card-icon" style={{
                    color: 'var(--accent)',
                    width: '52px', height: '52px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, rgba(255,212,0,0.12), rgba(255,212,0,0.02))',
                    border: '1px solid rgba(255,212,0,0.18)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                    transition: 'transform 0.5s var(--ease-out)',
                  }}>
                    {s.icon}
                  </div>
                </div>

                <h3 style={{
                  color: '#FFFFFF',
                  fontWeight: 500,
                  fontSize: 'clamp(1.15rem, 2vw, 1.3rem)',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>

                <p style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontWeight: 300,
                  fontSize: '0.88rem',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {s.desc}
                </p>

                {/* Divider */}
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(255,212,0,0.2), rgba(255,255,255,0.06), transparent)',
                }} />

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {s.highlights.map((h, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.82rem',
                    }}>
                      <span style={{
                        flexShrink: 0,
                        width: '18px', height: '18px',
                        borderRadius: '50%',
                        background: 'rgba(255,212,0,0.1)',
                        border: '1px solid rgba(255,212,0,0.2)',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {h}
                    </div>
                  ))}
                </div>

                <Link
                  href={s.href}
                  className="card-link"
                  style={{
                    color: 'var(--accent)',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    paddingTop: '0.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'gap 0.3s, color 0.3s',
                  }}
                >
                  Saiba mais <span style={{ transition: 'transform 0.3s' }}>&rarr;</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.8}>
          <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 5vw, 4rem)' }}>
            <Link href="/servicos" className="btn btn-outline">
              Ver todos os serviços &rarr;
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        .service-card:hover .service-card-icon {
          transform: rotate(-4deg) scale(1.05);
        }
        .service-card:hover .card-link {
          gap: 0.85rem !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  )
}

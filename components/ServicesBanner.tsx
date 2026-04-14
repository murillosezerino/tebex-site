'use client'

import Link from 'next/link'
import { Reveal } from './ParallaxProvider'

const banners = [
  {
    title: 'Carga Fracionada',
    tag: 'LTL',
    desc: 'Consolidação de volumes menores com coleta agendada e rastreamento.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85',
    href: '/servicos#transporte',
  },
  {
    title: 'Carga Fechada',
    tag: 'FTL',
    desc: 'Veículo dedicado com agilidade e segurança para grandes volumes.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=85',
    href: '/servicos#transporte',
  },
  {
    title: 'Carga de Alto Valor',
    tag: 'Escolta',
    desc: 'Escolta armada e seguros personalizados para cargas sensíveis.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=85',
    href: '/servicos#risco',
  },
]

export default function ServicesBanner() {
  return (
    <section style={{
      background: 'var(--black)',
      padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span style={{
              color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem',
            }}>
              Soluções
            </span>
            <h2 style={{
              color: '#fff', fontWeight: 200,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.15, margin: 0,
            }}>
              Tipo de carga ideal para <span style={{ color: 'var(--accent)' }}>sua operação</span>
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '1rem',
        }}>
          {banners.map((b, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <Link href={b.href} className="svc-banner" style={{
                display: 'block',
                position: 'relative',
                height: 'clamp(280px, 40vw, 380px)',
                overflow: 'hidden',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                {/* Background image */}
                <div className="svc-banner-img" style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${b.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                }} />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.95) 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Tag */}
                <div style={{
                  position: 'absolute', top: '1.25rem', left: '1.25rem',
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(255,212,0,0.12)',
                  border: '1px solid rgba(255,212,0,0.2)',
                  borderRadius: '4px',
                  color: 'var(--accent)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  {b.tag}
                </div>

                {/* Content */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1.5rem 1.25rem',
                }}>
                  <h3 style={{
                    color: '#fff', fontSize: '1.25rem', fontWeight: 500,
                    margin: '0 0 0.5rem 0', lineHeight: 1.2,
                  }}>
                    {b.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem',
                    fontWeight: 300, lineHeight: 1.6, margin: 0,
                  }}>
                    {b.desc}
                  </p>

                  <div className="svc-banner-arrow" style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    marginTop: '1rem', color: 'var(--accent)',
                    fontSize: '0.8rem', fontWeight: 500,
                    transition: 'gap 0.3s',
                  }}>
                    Saiba mais <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .svc-banner:hover .svc-banner-img {
          transform: scale(1.08) !important;
        }
        .svc-banner:hover .svc-banner-arrow {
          gap: 0.75rem !important;
        }
      `}</style>
    </section>
  )
}

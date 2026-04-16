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
                height: 'clamp(300px, 42vw, 420px)',
                overflow: 'hidden',
                textDecoration: 'none',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--hairline)',
                boxShadow: 'var(--shadow-md)',
                isolation: 'isolate',
                transition: 'transform 0.5s var(--ease-out), border-color 0.4s, box-shadow 0.4s',
              }}>
                {/* Background image */}
                <div className="svc-banner-img" style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${b.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.8s var(--ease-out), filter 0.6s',
                }} />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.96) 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Inner gradient sheen on hover */}
                <div className="svc-banner-sheen" style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(circle at 20% 0%, rgba(255,212,0,0.18), transparent 55%)',
                  opacity: 0,
                  transition: 'opacity 0.5s var(--ease-out)',
                  pointerEvents: 'none',
                }} />

                {/* Tag */}
                <div style={{
                  position: 'absolute', top: '1.25rem', left: '1.25rem',
                  padding: '0.4rem 0.85rem',
                  background: 'rgba(10,10,10,0.55)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,212,0,0.3)',
                  borderRadius: 'var(--radius-pill)',
                  color: 'var(--accent)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                }}>
                  <span style={{
                    width: '5px', height: '5px', borderRadius: '50%',
                    background: 'var(--accent)', boxShadow: '0 0 8px rgba(255,212,0,0.7)',
                  }} />
                  {b.tag}
                </div>

                {/* Content */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1.75rem 1.5rem 1.5rem',
                }}>
                  <h3 style={{
                    color: '#fff', fontSize: '1.4rem', fontWeight: 500,
                    margin: '0 0 0.5rem 0', lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}>
                    {b.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem',
                    fontWeight: 300, lineHeight: 1.65, margin: 0,
                  }}>
                    {b.desc}
                  </p>

                  <div className="svc-banner-arrow" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
                    marginTop: '1.1rem',
                    padding: '0.55rem 1rem',
                    color: 'var(--accent)',
                    fontSize: '0.78rem', fontWeight: 600,
                    border: '1px solid rgba(255,212,0,0.2)',
                    background: 'rgba(255,212,0,0.06)',
                    borderRadius: 'var(--radius-pill)',
                    transition: 'gap 0.3s, background 0.3s, border-color 0.3s',
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
        .svc-banner:hover {
          transform: translateY(-6px);
          border-color: rgba(255,212,0,0.3);
          box-shadow: var(--shadow-lg), 0 0 0 1px rgba(255,212,0,0.15);
        }
        .svc-banner:hover .svc-banner-img {
          transform: scale(1.08) !important;
        }
        .svc-banner:hover .svc-banner-sheen { opacity: 1 !important; }
        .svc-banner:hover .svc-banner-arrow {
          gap: 0.85rem !important;
          background: rgba(255,212,0,0.14) !important;
          border-color: rgba(255,212,0,0.4) !important;
        }
      `}</style>
    </section>
  )
}

'use client'

import { Reveal } from './ParallaxProvider'

export default function TrackingBanner() {
  return (
    <section style={{
      position: 'relative',
      padding: 'clamp(2.5rem, 5vw, 4rem) 1.5rem',
      background: 'linear-gradient(135deg, #0D0D0D 0%, #141414 100%)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      overflow: 'hidden',
    }}>
      {/* Subtle accent glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '200px',
        background: 'radial-gradient(ellipse, rgba(255,212,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1120px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '1.5rem',
        alignItems: 'center',
      }}>
        {/* Left — info */}
        <Reveal direction="left">
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem',
            }}>
              <div style={{
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,212,0,0.08)',
                border: '1px solid rgba(255,212,0,0.15)',
                borderRadius: '8px',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <span style={{
                fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--accent)',
              }}>
                Rastreamento
              </span>
            </div>
            <h3 style={{
              color: '#fff', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 300, lineHeight: 1.3, margin: 0,
            }}>
              Acompanhe sua carga <span style={{ color: 'var(--accent)', fontWeight: 500 }}>em tempo real</span>
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem',
              fontWeight: 300, lineHeight: 1.7, marginTop: '0.5rem',
            }}>
              Rastreamento via satélite com atualizações em tempo real para você e seu cliente.
            </p>
          </div>
        </Reveal>

        {/* Center — quick features */}
        <Reveal delay={0.15}>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
          }}>
            {[
              { icon: '◉', text: 'Status da entrega online' },
              { icon: '◉', text: 'Alertas por WhatsApp' },
              { icon: '◉', text: 'Histórico completo de rotas' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.6rem 1rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '6px',
              }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>{item.icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 400 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right — CTA */}
        <Reveal direction="right">
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,212,0,0.06) 0%, rgba(255,212,0,0.02) 100%)',
            border: '1px solid rgba(255,212,0,0.12)',
            borderRadius: '8px',
            padding: '1.75rem',
            textAlign: 'center',
          }}>
            <div style={{
              color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem',
              fontWeight: 300, lineHeight: 1.6, marginBottom: '1rem',
            }}>
              Quer saber onde está sua carga agora?
            </p>
            <a href="https://wa.me/5512997364365?text=Olá! Gostaria de rastrear minha carga." target="_blank" rel="noopener noreferrer"
              className="btn btn-accent" style={{ width: '100%', fontSize: '0.78rem', padding: '0.7rem 1.5rem', minWidth: 'auto' }}>
              Rastrear pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

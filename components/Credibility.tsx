'use client'

import { ParallaxBg, Reveal, FloatingElement } from './ParallaxProvider'

const keyPoints = [
  {
    title: 'Frota Rastreada',
    desc: 'GPS e bloqueio remoto em todos os veículos da operação.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    title: 'Monitoramento 24h',
    desc: 'Central ativa todos os dias, sem parar, com resposta imediata.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
  },
  {
    title: 'Cobertura Nacional',
    desc: 'Atendimento em todo o território brasileiro, sem exceções.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
]

export default function Credibility() {
  return (
    <section id="about" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
      textAlign: 'center',
      backgroundColor: 'var(--black)',
    }}>
      <ParallaxBg
        src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=85"
        speed={0.25}
        opacity={0.2}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.95) 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p style={{
            fontFamily: 'var(--font)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1rem',
            background: 'rgba(255,212,0,0.1)',
            display: 'inline-block',
            padding: '0.4rem 1rem',
          }}>
            Sobre a Tebex Log
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 style={{
            fontFamily: 'var(--font)',
            fontWeight: 200,
            color: 'var(--white)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
          }}>
            Transportadora nacional com foco em segurança e gestão de risco.
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p style={{
            fontFamily: 'var(--font)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: 1.9,
            marginBottom: '3rem',
          }}>
            Frota própria e agregados com rastreamento via satélite, central de monitoramento 24h
            e parceria com as principais gerenciadoras de risco do mercado. Cobertura em todo o território nacional.
          </p>
        </Reveal>

        {/* Key points — redesigned cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
          textAlign: 'left',
        }}>
          {keyPoints.map((item, i) => (
            <Reveal key={item.title} delay={0.4 + i * 0.15} direction="left">
              <FloatingElement speed={0.03}>
                <div
                  className="tbx-card tbx-card--interactive cred-card"
                  onMouseMove={e => {
                    const r = e.currentTarget.getBoundingClientRect()
                    e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
                    e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
                  }}
                  style={{
                    padding: '1.6rem 1.4rem 1.5rem',
                    height: '100%',
                  }}
                >
                  <span className="tbx-card-accent" />
                  {/* Icon chip */}
                  <div className="cred-card-icon" style={{
                    width: '42px', height: '42px',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                    background: 'linear-gradient(135deg, rgba(255,212,0,0.14), rgba(255,212,0,0.02))',
                    border: '1px solid rgba(255,212,0,0.2)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1rem',
                    transition: 'transform 0.5s var(--ease-out)',
                  }}>
                    {item.icon}
                  </div>

                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--white)',
                    marginBottom: '0.4rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.65,
                  }}>
                    {item.desc}
                  </div>
                </div>
              </FloatingElement>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.7}>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#cotacao" className="btn btn-accent">Solicitar cotação</a>
            <a href="/servicos" className="btn btn-outline">Nossos serviços</a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cred-card:hover .cred-card-icon { transform: rotate(-5deg) scale(1.06); }
      `}</style>
    </section>
  )
}

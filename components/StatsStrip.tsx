'use client'

import { ParallaxBg, Reveal } from './ParallaxProvider'

export default function StatsStrip() {
  const stats = [
    {
      value: '24/7', label: 'Central de\nmonitoramento',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      desc: 'Equipe dedicada operando sem interrupção',
    },
    {
      value: '100%', label: 'Frota\nrastreada',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
      desc: 'Todos os veículos com GPS e bloqueio remoto',
    },
    {
      value: '3.200+', label: 'Viagens\nmonitoradas',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
      desc: 'Cargas transportadas com rastreamento em 2025',
    },
    {
      value: '26', label: 'Estados\natendidos',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
      desc: 'Cobertura em todo o território nacional',
    },
  ]

  return (
    <section style={{
      background: 'var(--black)',
      position: 'relative',
      padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
    }}>
      <ParallaxBg
        src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&q=85"
        speed={0.2}
        opacity={0.18}
      />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 50%, rgba(10,10,10,0.95) 100%)',
      }} />

      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}>
            <span style={{
              color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem',
            }}>
              Em números
            </span>
            <h2 style={{
              color: '#fff', fontWeight: 200,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              lineHeight: 1.15, margin: 0,
            }}>
              Resultados que comprovam <span style={{ color: 'var(--accent)' }}>excelência</span>
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1rem',
        }}>
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.1} direction="up">
              <div
                className="tbx-card tbx-card--interactive stat-card"
                onMouseMove={e => {
                  const r = e.currentTarget.getBoundingClientRect()
                  e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
                  e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
                }}
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  height: '100%',
                  display: 'flex', flexDirection: 'column', gap: '0.5rem',
                }}
              >
                <span className="tbx-card-accent" />
                {/* Subtle vertical accent strip */}
                <div style={{
                  position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '2px',
                  background: 'linear-gradient(180deg, transparent, rgba(255,212,0,0.4), transparent)',
                  opacity: 0.5,
                }} />

                <div className="stat-icon" style={{
                  color: 'var(--accent)',
                  width: '44px', height: '44px',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, rgba(255,212,0,0.12), rgba(255,212,0,0.02))',
                  border: '1px solid rgba(255,212,0,0.18)',
                  marginBottom: '1rem',
                  transition: 'transform 0.5s var(--ease-out)',
                }}>
                  {s.icon}
                </div>

                <div style={{
                  fontFamily: 'var(--font)', fontWeight: 200,
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.04em', lineHeight: 1,
                  color: 'var(--white)',
                  background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {s.value}
                </div>

                <div style={{
                  fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
                  whiteSpace: 'pre-line', lineHeight: 1.4, marginTop: '0.4rem',
                }}>
                  {s.label}
                </div>

                <div style={{
                  fontSize: '0.78rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.4)', lineHeight: 1.55,
                }}>
                  {s.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .stat-card:hover .stat-icon { transform: rotate(-5deg) scale(1.05); }
      `}</style>
    </section>
  )
}

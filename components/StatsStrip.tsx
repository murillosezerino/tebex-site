'use client'

import { ParallaxBg, Reveal } from './ParallaxProvider'

export default function StatsStrip() {
  const stats = [
    { value: '24/7', label: 'Central de monitoramento', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )},
    { value: '100%', label: 'Frota rastreada', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
    )},
    { value: 'Nacional', label: 'Cobertura completa', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    )},
    { value: 'Zero', label: 'Tolerância ao risco', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    )},
  ]

  return (
    <section style={{
      background: 'var(--black)',
      position: 'relative',
      padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
    }}>
      <ParallaxBg
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
        speed={0.2}
        opacity={0.12}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.9) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 'clamp(1rem, 2vw, 1.5rem)',
        position: 'relative',
        zIndex: 1,
      }}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12} direction="up">
            <div className="stat-card" style={{
              position: 'relative',
              padding: '2rem 1.5rem',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              textAlign: 'left',
            }}>
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
                opacity: 0.6,
              }} />

              {/* Glow */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(255,212,0,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <div style={{
                color: 'var(--accent)',
                marginBottom: '1.25rem',
                opacity: 0.8,
              }}>
                {s.icon}
              </div>

              {/* Value */}
              <div style={{
                fontFamily: 'var(--font)',
                fontWeight: 200,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'var(--white)',
                marginBottom: '0.5rem',
              }}>
                {s.value}
              </div>

              {/* Label */}
              <div style={{
                fontFamily: 'var(--font)',
                fontWeight: 400,
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
              }}>
                {s.label}
              </div>

              {/* Bottom decorative line */}
              <div style={{
                position: 'absolute',
                bottom: '0.75rem',
                right: '1rem',
                width: '30px',
                height: '1px',
                background: 'rgba(255,212,0,0.2)',
              }} />
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        .stat-card {
          transition: border-color 0.3s, transform 0.3s, background 0.3s;
        }
        .stat-card:hover {
          border-color: rgba(255,212,0,0.25) !important;
          transform: translateY(-2px);
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%) !important;
        }
      `}</style>
    </section>
  )
}

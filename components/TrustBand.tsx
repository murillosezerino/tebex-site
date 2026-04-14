'use client'

import { Reveal } from './ParallaxProvider'

const trusts = [
  { label: 'ANTT Regularizada', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: 'Seguro Total', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
  { label: 'ISO em Processo', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { label: 'Gerenciadoras Parceiras', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: 'Frota Própria', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { label: 'Cobertura Nacional', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
]

export default function TrustBand() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 100%)',
      padding: 'clamp(2rem, 4vw, 3rem) 1.5rem',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      overflow: 'hidden',
    }}>
      <Reveal>
        <div style={{
          maxWidth: '1120px', margin: '0 auto',
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: 'clamp(1rem, 3vw, 2.5rem)',
          alignItems: 'center',
        }}>
          {trusts.map((t, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.75rem', fontWeight: 400,
              letterSpacing: '0.03em',
              transition: 'color 0.3s',
            }}
              onMouseOver={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              onMouseOut={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
            >
              <span style={{ color: 'var(--accent)', opacity: 0.5 }}>{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

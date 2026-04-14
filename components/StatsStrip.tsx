'use client'

import { useRef, useState, useEffect } from 'react'
import { ParallaxBg, Reveal } from './ParallaxProvider'

function AnimatedNumber({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, value])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

export default function StatsStrip() {
  const stats = [
    {
      value: 24, suffix: '/7', label: 'Central de\nmonitoramento',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      desc: 'Equipe dedicada operando sem interrupção',
    },
    {
      value: 100, suffix: '%', label: 'Frota\nrastreada',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
      desc: 'Todos os veículos com GPS e bloqueio',
    },
    {
      value: 3200, suffix: '+', label: 'Viagens\nmonitoradas',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
      desc: 'Viagens com rastreamento em 2025',
    },
    {
      value: 26, suffix: '', prefix: '', label: 'Estados\natendidos',
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
        {/* Section header */}
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

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} direction="up">
              <div className="stat-card" style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                background: 'var(--black)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Hover glow */}
                <div className="stat-glow" style={{
                  position: 'absolute',
                  top: '-50px', right: '-50px',
                  width: '150px', height: '150px',
                  background: 'radial-gradient(circle, rgba(255,212,0,0.06) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  opacity: 0, transition: 'opacity 0.4s',
                }} />

                {/* Icon */}
                <div style={{ color: 'var(--accent)', opacity: 0.7, marginBottom: '1.25rem' }}>
                  {s.icon}
                </div>

                {/* Number */}
                <div style={{
                  fontFamily: 'var(--font)', fontWeight: 200,
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.04em', lineHeight: 1,
                  color: 'var(--white)', marginBottom: '0.5rem',
                }}>
                  {s.prefix ? s.prefix : <AnimatedNumber value={s.value} suffix={s.suffix} />}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
                  whiteSpace: 'pre-line', lineHeight: 1.4, marginBottom: '0.5rem',
                }}>
                  {s.label}
                </div>

                {/* Description */}
                <div style={{
                  fontSize: '0.78rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.3)', lineHeight: 1.5,
                }}>
                  {s.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .stat-card { transition: background 0.3s; }
        .stat-card:hover { background: #0E0E0E !important; }
        .stat-card:hover .stat-glow { opacity: 1 !important; }
      `}</style>
    </section>
  )
}

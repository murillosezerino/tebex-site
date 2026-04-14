'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useScrollY } from './ParallaxProvider'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=85',
    tag: 'Transporte Nacional',
    title: 'Segurança não é\num diferencial.',
    subtitle: 'Rastreamento 24h, gestão de risco e cobertura nacional.',
  },
  {
    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=1920&q=85',
    tag: 'Monitoramento 24/7',
    title: 'Controle total\nda sua carga.',
    subtitle: 'Central ativa 24 horas com comunicação direta.',
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85',
    tag: 'Gestão de Risco',
    title: 'Sua carga\nprotegida.',
    subtitle: 'Escolta armada e seguros personalizados.',
  },
  {
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=85',
    tag: 'Cobertura Nacional',
    title: 'De ponta a ponta\nno Brasil.',
    subtitle: 'Frota própria e agregados em todo o território.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)
  const scrollY = useScrollY()
  const total = slides.length
  const touchStart = useRef(0)
  const touchEnd = useRef(0)

  const goTo = useCallback((idx: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(((idx % total) + total) % total)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning, total])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => goTo(current + 1), 3500)
    return () => clearInterval(timer)
  }, [current, paused, goTo])

  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX }
  const onTouchMove = (e: React.TouchEvent) => { touchEnd.current = e.touches[0].clientX }
  const onTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current
    if (Math.abs(diff) > 50) { if (diff > 0) goTo(current + 1); else goTo(current - 1) }
    touchStart.current = 0; touchEnd.current = 0
  }

  const slide = slides[current]

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        background: 'var(--black)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 1.5rem',
        position: 'relative',
      }}
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === current ? 0.4 : 0,
          transform: `scale(${i === current ? 1.02 : 1.1}) translate3d(0, ${scrollY * -0.1}px, 0)`,
          transition: 'opacity 1s ease, transform 6s ease',
          willChange: 'opacity, transform', pointerEvents: 'none',
        }} />
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.75) 100%)',
      }} />

      {/* Content — clean, minimal */}
      <div style={{
        position: 'relative', zIndex: 2, maxWidth: '800px',
        transform: `translate3d(0, ${scrollY * -0.08}px, 0)`,
        opacity: Math.max(1 - scrollY / 700, 0),
      }}>
        <div key={`tag-${current}`} style={{
          color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem',
          animation: 'heroFadeUp 0.6s ease both',
        }}>{slide.tag}</div>

        <h1 key={`title-${current}`} style={{
          fontFamily: 'var(--font)', fontWeight: 200, color: 'var(--white)',
          fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 0.95,
          letterSpacing: '-0.04em', marginBottom: '1.25rem',
          whiteSpace: 'pre-line', animation: 'heroFadeUp 0.6s ease 0.1s both',
        }}>{slide.title}</h1>

        <p key={`sub-${current}`} style={{
          color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
          fontWeight: 300, lineHeight: 1.7, maxWidth: '480px', margin: '0 auto',
          animation: 'heroFadeUp 0.6s ease 0.2s both',
        }}>{slide.subtitle}</p>

        <div key={`cta-${current}`} style={{
          display: 'flex', gap: '0.75rem', justifyContent: 'center',
          flexWrap: 'wrap', marginTop: '2rem',
          animation: 'heroFadeUp 0.6s ease 0.3s both',
        }}>
          <a href="#cotacao" className="btn btn-accent">Solicitar cotação</a>
          <a href="#servicos" className="btn btn-outline">Ver serviços</a>
        </div>
      </div>

      {/* Arrows — desktop */}
      <button onClick={() => goTo(current - 1)} aria-label="Anterior" className="hero-arrow" style={{
        position: 'absolute', left: 'clamp(1rem, 3vw, 2rem)', top: '50%',
        transform: 'translateY(-50%)', zIndex: 10,
        width: '42px', height: '42px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(8px)', color: '#fff', cursor: 'pointer', fontSize: '1rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s',
      }}>&#8592;</button>
      <button onClick={() => goTo(current + 1)} aria-label="Próximo" className="hero-arrow" style={{
        position: 'absolute', right: 'clamp(1rem, 3vw, 2rem)', top: '50%',
        transform: 'translateY(-50%)', zIndex: 10,
        width: '42px', height: '42px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(8px)', color: '#fff', cursor: 'pointer', fontSize: '1rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s',
      }}>&#8594;</button>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: 'clamp(2rem, 4vh, 3rem)',
        left: '50%', transform: 'translateX(-50%)', zIndex: 10,
        display: 'flex', gap: '0.5rem', alignItems: 'center',
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} style={{
            width: i === current ? '28px' : '8px', height: '8px',
            borderRadius: '100px', border: 'none', padding: 0,
            background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
            cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          }} />
        ))}
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-arrow:hover {
          border-color: var(--accent) !important;
          background: rgba(255,212,0,0.1) !important;
        }
        @media (max-width: 767px) {
          .hero-arrow { display: none !important; }
        }
      `}</style>
    </section>
  )
}

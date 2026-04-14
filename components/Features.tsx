'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ParallaxBg, Reveal } from './ParallaxProvider'

const items = [
  { tag: 'Rastreamento', title: 'Frota Rastreada 24h', description: 'Toda a frota com rastreamento via satélite e bloqueio remoto. Visibilidade total em tempo real.', details: ['Rastreamento via satélite', 'Bloqueio remoto', 'Histórico de rotas', 'Alertas de desvio'],
    image: 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?w=800&q=80',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg> },
  { tag: 'Monitoramento', title: 'Central Ativa 24/7', description: 'Central operando ininterruptamente. Controle de paradas, desvios e comunicação direta com motoristas.', details: ['Equipe 24h', 'Comunicação direta', 'Controle de paradas', 'Resposta imediata'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { tag: 'Segurança', title: 'Gestão de Risco', description: 'Parceria com as principais gerenciadoras. Planejamento de rotas seguras e análise de perfil de motoristas.', details: ['Gerenciadoras certificadas', 'Rotas seguras', 'Perfil de motoristas', 'Protocolos ativos'],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { tag: 'Tecnologia', title: 'Câmeras Embarcadas', description: 'Monitoramento visual com IA para detecção de fadiga e distração. Segurança ativa durante toda a viagem.', details: ['IA para fadiga', 'Monitoramento visual', 'Alertas de risco', 'Gravação segura'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> },
  { tag: 'Proteção', title: 'Escolta e Apoio', description: 'Escolta armada e pontos de apoio estratégicos para cargas de alto valor. Seguros personalizados.', details: ['Escolta armada', 'Pontos de apoio', 'Seguros personalizados', 'Cobertura total'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { tag: 'Processos', title: 'Compliance Operacional', description: 'Equipe treinada em gestão de risco e compliance. Processos padronizados com tecnologia embarcada.', details: ['Equipe certificada', 'Processos ISO', 'Tecnologia embarcada', 'Relatórios'],
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const [dragStart, setDragStart] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = items.length

  const goTo = useCallback((idx: number) => {
    setActive(((idx % total) + total) % total)
  }, [total])

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => setActive(a => (a + 1) % total), 5000)
  }, [total])

  useEffect(() => {
    resetAuto()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [resetAuto])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[active] as HTMLElement | undefined
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - track.clientWidth / 2 + card.offsetWidth / 2, behavior: 'smooth' })
  }, [active])

  const onTouchStart = (e: React.TouchEvent) => setDragStart(e.touches[0].pageX)
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = dragStart - e.changedTouches[0].pageX
    if (diff > 50)  { goTo(active + 1); resetAuto() }
    if (diff < -50) { goTo(active - 1); resetAuto() }
  }

  const cur = items[active]

  return (
    <section id="seguranca" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      padding: 'clamp(3rem, 6vw, 5rem) 0',
      backgroundColor: 'var(--black)',
    }}>
      <ParallaxBg
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=85"
        speed={0.2}
        opacity={0.15}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.95) 100%)',
        pointerEvents: 'none',
      }} />

      <style>{`@keyframes tbx-prog { from { width: 0 } to { width: 100% } }`}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'clamp(2.5rem, 5vw, 4rem)', position: 'relative' }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Diferenciais</span>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 200, lineHeight: 1.15, margin: 0 }}>
                Excelência que garante resultados.
              </h2>
            </div>
            <button onClick={() => { goTo(active + 1); resetAuto() }}
              style={{ position: 'absolute', right: 0, top: 0, width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', color: '#FFFFFF', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'border-color 0.3s' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
              aria-label="Próximo">
              &#8594;
            </button>
          </div>
        </Reveal>

        {/* Main card — redesigned */}
        <Reveal delay={0.15}>
          <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
            style={{
              position: 'relative',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(10,10,10,0.95) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '1.5rem',
              minHeight: 'clamp(280px, 35vw, 400px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
              overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}>
            {/* Background image */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${cur.image})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: 0.12, transition: 'opacity 0.6s',
              pointerEvents: 'none',
            }} />

            {/* Corner glow */}
            <div style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,212,0,0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            {/* Bottom gradient line */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
              opacity: 0.3,
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,212,0,0.2)',
                  borderRadius: '8px',
                  color: 'var(--accent)',
                  background: 'rgba(255,212,0,0.05)',
                }}>
                  {cur.icon}
                </div>
                <span style={{
                  color: 'var(--accent)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {cur.tag}
                </span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 400, lineHeight: 1.15, margin: '0 0 1rem 0' }}>{cur.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', fontWeight: 300, lineHeight: 1.8, maxWidth: '48rem', margin: 0 }}>{cur.description}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', position: 'relative', zIndex: 1 }}>
              {cur.details.map((d, i) => (
                <span key={i} style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 100,
                  padding: '0.5rem 1.2rem',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', opacity: 0.6, flexShrink: 0 }} />
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Thumbnail buttons — redesigned */}
        <div ref={trackRef} style={{ display: 'flex', gap: '0.625rem', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '0.25rem' }}>
          {items.map((item, i) => {
            const isActive = i === active
            return (
              <button key={i} onClick={() => { goTo(i); resetAuto() }}
                className="feat-thumb"
                style={{
                  flexShrink: 0,
                  width: 'clamp(150px, 20vw, 200px)',
                  padding: '1.1rem 1rem 0.85rem',
                  borderRadius: 8,
                  border: isActive ? '1px solid rgba(255,212,0,0.25)' : '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s',
                }}>
                {/* Active glow */}
                {isActive && <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'radial-gradient(circle, rgba(255,212,0,0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />}

                <div style={{
                  color: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
                  marginBottom: '0.15rem',
                  transition: 'color 0.25s',
                }}>
                  {item.icon}
                </div>
                <div style={{
                  color: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                  fontSize: '0.58rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'color 0.25s',
                }}>
                  {item.tag}
                </div>
                <div style={{
                  color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                  fontWeight: 500,
                  fontSize: '0.82rem',
                  lineHeight: 1.3,
                  transition: 'color 0.25s',
                }}>
                  {item.title}
                </div>
                {isActive && (
                  <div style={{ marginTop: '0.6rem', height: 2, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 1, overflow: 'hidden', width: '100%' }}>
                    <div key={active} style={{ height: '100%', backgroundColor: '#FFD400', borderRadius: 1, animation: 'tbx-prog 5s linear forwards' }} />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <style>{`
        .feat-thumb:hover {
          border-color: rgba(255,255,255,0.15) !important;
          background-color: rgba(255,255,255,0.03) !important;
        }
      `}</style>
    </section>
  )
}

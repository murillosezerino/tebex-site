"use client"

import { useState, useRef, useEffect, useCallback } from 'react'

const WA = 'https://wa.me/5512997364365'

const items = [
  { icon: '🛰️', tag: 'Rastreamento', title: 'Frota Rastreada 24h', description: 'Toda a frota com rastreamento via satelite e bloqueio remoto. Visibilidade total em tempo real.', details: ['Rastreamento via satelite', 'Bloqueio remoto', 'Historico de rotas', 'Alertas de desvio'], gradient: 'linear-gradient(135deg, #111 0%, #1a1a00 100%)', accent: '#FFD400' },
  { icon: '📡', tag: 'Monitoramento', title: 'Central Ativa 24/7', description: 'Central operando ininterruptamente. Controle de paradas, desvios e comunicacao direta com motoristas.', details: ['Equipe 24h', 'Comunicacao direta', 'Controle de paradas', 'Resposta imediata'], gradient: 'linear-gradient(135deg, #0f0f0f 0%, #001a00 100%)', accent: '#32B700' },
  { icon: '🛡️', tag: 'Seguranca', title: 'Gestao de Risco', description: 'Parceria com as principais gerenciadoras. Planejamento de rotas seguras e analise de perfil de motoristas.', details: ['Gerenciadoras certificadas', 'Rotas seguras', 'Perfil de motoristas', 'Protocolos ativos'], gradient: 'linear-gradient(135deg, #111 0%, #1a0000 100%)', accent: '#F22800' },
  { icon: '📹', tag: 'Tecnologia', title: 'Cameras Embarcadas', description: 'Monitoramento visual com IA para deteccao de fadiga e distarcao. Seguranca ativa durante toda a viagem.', details: ['IA para fadiga', 'Monitoramento visual', 'Alertas de risco', 'Gravacao segura'], gradient: 'linear-gradient(135deg, #0f0f0f 0%, #001025 100%)', accent: '#0041E2' },
  { icon: '🔒', tag: 'Protecao', title: 'Escolta e Apoio', description: 'Escolta armada e pontos de apoio estrategicos para cargas de alto valor. Seguros personalizados.', details: ['Escolta armada', 'Pontos de apoio', 'Seguros personalizados', 'Cobertura total'], gradient: 'linear-gradient(135deg, #111 0%, #1a1a00 100%)', accent: '#FFD400' },
  { icon: '⚙️', tag: 'Processos', title: 'Compliance Operacional', description: 'Equipe treinada em gestao de risco e compliance. Processos padronizados com tecnologia embarcada.', details: ['Equipe certificada', 'Processos ISO', 'Tecnologia embarcada', 'Relatorios'], gradient: 'linear-gradient(135deg, #0f0f0f 0%, #001510 100%)', accent: '#32B700' },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const [dragStart, setDragStart] = useState(0)
  const trackRef = useRef(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = items.length

  const goTo = useCallback((idx: number) => {
    setActive(Math.max(0, Math.min(total - 1, idx)))
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
    const card = track.children[active]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - track.clientWidth / 2 + card.offsetWidth / 2, behavior: 'smooth' })
  }, [active])

  const onTouchStart = (e) => setDragStart(e.touches[0].pageX)
  const onTouchEnd = (e) => {
    const diff = dragStart - e.changedTouches[0].pageX
    if (diff > 50)  { goTo(active + 1); resetAuto() }
    if (diff < -50) { goTo(active - 1); resetAuto() }
  }

  const cur = items[active]

  return (
    <section id="diferenciais" style={{ backgroundColor: '#F5F5F0', padding: 'clamp(4rem, 8vw, 7rem) 0', overflow: 'hidden' }}>
      <style>{`@keyframes tbx-prog { from { width: 0 } to { width: 100% } }`}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '2rem', height: '2px', backgroundColor: '#0A0A0A' }} />
              <span style={{ color: '#0A0A0A', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Diferenciais</span>
            </div>
            <h2 className="font-brand" style={{ color: '#0A0A0A', fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.05 }}>
              EXCELENCIA QUE<br />GARANTE RESULTADOS.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={() => { goTo(active - 1); resetAuto() }} disabled={active === 0}
              style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid rgba(0,0,0,0.15)', background: 'transparent', cursor: active === 0 ? 'not-allowed' : 'pointer', fontSize: '1rem', color: active === 0 ? 'rgba(0,0,0,0.25)' : '#0A0A0A' }}>←</button>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(0,0,0,0.4)' }}>{active + 1} / {total}</span>
            <button onClick={() => { goTo(active + 1); resetAuto() }} disabled={active === total - 1}
              style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid rgba(0,0,0,0.15)', background: active === total - 1 ? 'transparent' : '#0A0A0A', cursor: active === total - 1 ? 'not-allowed' : 'pointer', fontSize: '1rem', color: active === total - 1 ? 'rgba(0,0,0,0.25)' : '#fff' }}>→</button>
          </div>
        </div>

        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
          style={{ background: cur.gradient, borderRadius: 16, padding: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.25rem', border: '1px solid ' + cur.accent + '30', minHeight: 'clamp(260px, 38vw, 360px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: '45%', height: '130%', background: 'radial-gradient(ellipse, ' + cur.accent + '15 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1 }}>{cur.icon}</span>
              <span style={{ backgroundColor: cur.accent + '18', border: '1px solid ' + cur.accent + '35', borderRadius: 100, padding: '0.3rem 0.875rem', color: cur.accent, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{cur.tag}</span>
            </div>
            <h3 className="font-brand" style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', lineHeight: 1.05, marginBottom: '1rem' }}>{cur.title.toUpperCase()}</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: 1.8, maxWidth: '52rem' }}>{cur.description}</p>
          </div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cur.details.map((d, i) => (
                <span key={i} style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100, padding: '0.35rem 0.875rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', fontWeight: 500 }}>{d}</span>
              ))}
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', backgroundColor: cur.accent, color: cur.accent === '#FFD400' ? '#0A0A0A' : '#FFFFFF', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 4, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Solicitar cotacao
            </a>
          </div>
        </div>

        <div ref={trackRef} style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '0.25rem' }}>
          {items.map((item, i) => (
            <button key={i} onClick={() => { goTo(i); resetAuto() }}
              style={{ flexShrink: 0, width: 'clamp(150px, 22vw, 200px)', padding: '1.125rem', borderRadius: 10, border: '1.5px solid ' + (i === active ? item.accent : 'rgba(0,0,0,0.1)'), backgroundColor: i === active ? '#0A0A0A' : '#FFFFFF', cursor: 'pointer', textAlign: 'left', transition: 'all 0.25s', outline: 'none' }}>
              <div style={{ fontSize: '1.375rem', marginBottom: '0.4rem', lineHeight: 1 }}>{item.icon}</div>
              <div style={{ color: i === active ? item.accent : 'rgba(0,0,0,0.4)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{item.tag}</div>
              <div style={{ color: i === active ? '#FFFFFF' : '#0A0A0A', fontWeight: 700, fontSize: '0.8rem', lineHeight: 1.3 }}>{item.title}</div>
              {i === active && (
                <div style={{ marginTop: '0.75rem', height: 2, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 1, overflow: 'hidden' }}>
                  <div key={active} style={{ height: '100%', backgroundColor: item.accent, borderRadius: 1, animation: 'tbx-prog 5s linear forwards' }} />
                </div>
              )}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
          {items.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetAuto() }}
              style={{ width: i === active ? 24 : 8, height: 8, borderRadius: 4, backgroundColor: i === active ? '#0A0A0A' : 'rgba(0,0,0,0.2)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
      </div>
    </section>
  )
}

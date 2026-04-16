'use client'

import Link from 'next/link'
import { ParallaxBg, Reveal } from '@/components/ParallaxProvider'

const services = [
  {
    id: 'transporte',
    tag: 'Operação',
    title: 'Transporte de Carga',
    headline: 'Frota própria e agregados para qualquer volume.',
    description: 'Atendemos cargas fechadas e de alto valor em todo o território nacional. Nossa frota é rastreada 24h, com motoristas treinados e processos padronizados para garantir pontualidade e segurança.',
    features: [
      { label: 'Carga fechada (FTL)', desc: 'Veículo dedicado para sua carga, com rota direta e máxima agilidade.' },
      { label: 'Coleta agendada', desc: 'Agendamos a coleta no endereço e horário que você precisar.' },
      { label: 'Carga de alto valor', desc: 'Escolta armada e seguros personalizados para cargas sensíveis.' },
    ],
    cta: 'Cotar transporte',
    waMsg: 'Olá%2C%20gostaria%20de%20cotar%20um%20transporte%20de%20carga',
    bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=85',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    id: 'risco',
    tag: 'Segurança',
    title: 'Gestão de Risco',
    headline: 'Segurança não é diferencial — é prioridade.',
    description: 'Operamos em parceria com as principais gerenciadoras de risco do mercado. Cada viagem é planejada com análise de rotas, perfil de motoristas e protocolos ativos de prevenção.',
    features: [
      { label: 'Rastreamento via satélite', desc: 'Bloqueio remoto e visibilidade total da posição do veículo.' },
      { label: 'Escolta armada', desc: 'Disponível para cargas de alto valor ou regiões de risco elevado.' },
      { label: 'Análise de perfil', desc: 'Motoristas avaliados por histórico, aptidão e conformidade.' },
      { label: 'Gerenciadoras certificadas', desc: 'Parceria com as principais GRs do mercado nacional.' },
    ],
    cta: 'Falar sobre segurança',
    waMsg: 'Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20gestão%20de%20risco',
    bgImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=85',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    id: 'monitoramento',
    tag: 'Tecnologia',
    title: 'Monitoramento 24/7',
    headline: 'Central ativa a qualquer hora, todos os dias.',
    description: 'Nossa central opera ininterruptamente, acompanhando cada veículo em tempo real. Controle de paradas, desvios de rota, fadiga do motorista e comunicação direta com a base.',
    features: [
      { label: 'Alertas em tempo real', desc: 'Notificações imediatas para qualquer desvio ou ocorrência.' },
      { label: 'Câmeras embarcadas', desc: 'Monitoramento visual com IA para detecção de fadiga e distração.' },
      { label: 'Controle de rota', desc: 'Comparação entre rota planejada e executada em tempo real.' },
      { label: 'Comunicação direta', desc: 'Canal dedicado entre motorista, base e cliente.' },
    ],
    cta: 'Conhecer monitoramento',
    waMsg: 'Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20monitoramento',
    bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=85',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  },
]

export default function ServicosContent() {
  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--black)',
        padding: 'clamp(6rem,10vw,10rem) 0 clamp(3rem,6vw,5rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <ParallaxBg
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=85"
          speed={0.2} opacity={0.2}
        />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.9) 100%)',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Início</Link>
              <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>›</span>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Serviços</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2.5rem,7vw,5rem)', fontWeight: 200, lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Nossos serviços.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.95rem,2vw,1.1rem)', lineHeight: 1.85, maxWidth: '38rem' }}>
              Soluções completas em transporte terrestre, gestão de risco e monitoramento para sua operação.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              {services.map(s => (
                <a key={s.id} href={`#${s.id}`} className="svc-nav-btn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.7rem 1.4rem',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: 500,
                    textDecoration: 'none', background: 'rgba(255,255,255,0.03)',
                    transition: 'all 0.3s',
                  }}>
                  <span style={{ color: 'var(--accent)', opacity: 0.7 }}>{s.icon}</span>
                  {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service sections */}
      {services.map((s, idx) => (
        <section key={s.id} id={s.id} style={{
          backgroundColor: 'var(--black)',
          padding: 'clamp(5rem,10vw,8rem) 0',
          position: 'relative', overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}>
          <ParallaxBg src={s.bgImage} speed={0.15} opacity={0.15} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: idx % 2 === 0
              ? 'linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.8) 100%)'
              : 'linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.92) 100%)',
          }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
              gap: 'clamp(3rem,6vw,5rem)', alignItems: 'start',
            }}>
              {/* Text */}
              <Reveal direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid rgba(255,212,0,0.2)', borderRadius: '8px',
                      color: 'var(--accent)', background: 'rgba(255,212,0,0.05)',
                    }}>{s.icon}</div>
                    <span style={{
                      color: 'var(--accent)', fontSize: '0.65rem', fontWeight: 600,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                    }}>{s.tag}</span>
                  </div>

                  <h2 style={{ color: 'var(--white)', fontSize: 'clamp(1.75rem,4vw,3rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '1rem' }}>
                    {s.title}
                  </h2>
                  <p style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.6 }}>
                    {s.headline}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.9, marginBottom: '2rem' }}>
                    {s.description}
                  </p>
                  <a href={`https://wa.me/5512997364365?text=${s.waMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-accent" style={{ display: 'inline-flex' }}>
                    {s.cta}
                  </a>
                </div>
              </Reveal>

              {/* Features grid */}
              <Reveal delay={0.2} direction={idx % 2 === 0 ? 'right' : 'left'}>
                <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem',
                  }}>
                    {s.features.map((f, i) => (
                      <div key={i} className="tbx-card tbx-card--interactive svc-feature-card"
                        onMouseMove={e => {
                          const r = e.currentTarget.getBoundingClientRect()
                          e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
                          e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
                        }}
                        style={{
                          padding: 'clamp(1.25rem, 3vw, 1.5rem)',
                          display: 'flex', flexDirection: 'column', gap: '0.5rem',
                          borderRadius: 'var(--radius-md)',
                        }}>
                        <span className="tbx-card-accent" />
                        <div style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: 'var(--accent)',
                          boxShadow: '0 0 10px rgba(255,212,0,0.6)',
                          marginBottom: '0.25rem',
                        }} />
                        <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.88rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                          {f.label}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', lineHeight: 1.65 }}>
                          {f.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA final */}
      <section style={{
        position: 'relative', padding: 'clamp(5rem,10vw,7rem) 0',
        overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <ParallaxBg
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=85"
          speed={0.2} opacity={0.2}
        />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, var(--black) 0%, rgba(10,10,10,0.8) 50%, var(--black) 100%)',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Reveal>
            <span style={{
              color: 'var(--accent)', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem',
            }}>Comece agora</span>
            <h2 style={{ color: 'var(--white)', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Pronto para começar?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
              Fale com nossa equipe e receba uma cotação personalizada.
            </p>
            <Link href="/" className="btn btn-accent">Solicitar cotação</Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .svc-nav-btn:hover { border-color: var(--accent) !important; color: #fff !important; }
      `}</style>
    </>
  )
}

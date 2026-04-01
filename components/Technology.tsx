// Loggi "Tecnologia é nosso DNA" — fundo claro, texto direita + visual esquerda
export default function Technology() {
  return (
    <>
      <style>{`
        .tech-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        @media (min-width: 768px) {
          .tech-grid {
            flex-direction: row;
            align-items: center;
            gap: 5rem;
          }
          .tech-visual { flex: 1; }
          .tech-text { flex: 0 0 46%; }
        }
      `}</style>

      <section id="seguranca" style={{ backgroundColor: '#F5F5F0', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="tech-grid">

            {/* Visual de rota */}
            <div className="tech-visual" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', background: '#111', aspectRatio: '1/1' }}>
              <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
                <defs>
                  <pattern id="tg" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M25 0L0 0 0 25" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="420" height="420" fill="#0F0F0F"/>
                <rect width="420" height="420" fill="url(#tg)"/>

                {/* Rota */}
                <path d="M 70 340 C 110 295 160 255 210 210 C 260 165 310 145 355 105" fill="none" stroke="rgba(255,212,0,0.18)" strokeWidth="2.5" strokeDasharray="6 4"/>
                <path d="M 70 340 C 110 295 160 255 210 210 C 260 165 310 145 355 105" fill="none" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 0" opacity="0.7"/>

                {/* Origem */}
                <circle cx="70" cy="340" r="12" fill="#FFD400"/>
                <circle cx="70" cy="340" r="22" fill="rgba(255,212,0,0.15)"/>
                <text x="92" y="344" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.5)">ORIGEM</text>

                {/* Destino */}
                <circle cx="355" cy="105" r="12" fill="#32B700"/>
                <circle cx="355" cy="105" r="22" fill="rgba(50,183,0,0.15)"/>
                <text x="258" y="100" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.5)">DESTINO</text>

                {/* Pontos intermediários */}
                {[[150,272],[210,210],[280,158]].map(([x,y],i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="6" fill="#FFD400" opacity="0.65"/>
                    <circle cx={x} cy={y} r="14" fill="rgba(255,212,0,0.1)"/>
                  </g>
                ))}

                {/* Caminhão na rota */}
                <g transform="translate(196,196) rotate(-38)">
                  <rect x="-16" y="-9" width="32" height="18" rx="2" fill="#FFD400"/>
                  <rect x="16" y="-7" width="12" height="14" rx="1" fill="#e6bc00"/>
                  <circle cx="-9" cy="9" r="5" fill="#0A0A0A"/>
                  <circle cx="9" cy="9" r="5" fill="#0A0A0A"/>
                  <circle cx="22" cy="7" r="5" fill="#0A0A0A"/>
                </g>

                {/* Info boxes */}
                <rect x="20" y="20" width="170" height="85" rx="8" fill="rgba(255,212,0,0.07)" stroke="rgba(255,212,0,0.22)" strokeWidth="1"/>
                <text x="36" y="46" fontFamily="monospace" fontSize="9" fill="rgba(255,212,0,0.6)" letterSpacing="1">GESTÃO DE RISCO</text>
                <text x="36" y="68" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#FFD400">● Rota segura ativa</text>
                <text x="36" y="90" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.3)">Monitoramento 24/7</text>

                <rect x="230" y="318" width="170" height="85" rx="8" fill="rgba(50,183,0,0.07)" stroke="rgba(50,183,0,0.22)" strokeWidth="1"/>
                <text x="246" y="344" fontFamily="monospace" fontSize="9" fill="rgba(50,183,0,0.6)" letterSpacing="1">STATUS DA ENTREGA</text>
                <text x="246" y="366" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#32B700">● No prazo</text>
                <text x="246" y="388" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.3)">ETA confirmado</text>
              </svg>
            </div>

            {/* Texto */}
            <div className="tech-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#0A0A0A' }} />
                <span style={{ color: '#0A0A0A', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Tecnologia</span>
              </div>
              <h2 className="font-brand" style={{ color: '#0A0A0A', fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
                SEGURANÇA É<br />NOSSO DNA.
              </h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                Investimos em tecnologia e protocolos de prevenção para minimizar riscos
                e garantir a integridade da sua carga. Cada viagem é planejada com
                <strong style={{ color: 'rgba(0,0,0,0.8)' }}> os mais altos padrões de segurança.</strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { t: 'Planejamento de rota', d: 'Rotas traçadas considerando riscos regionais e tipo de carga' },
                  { t: 'Análise de motoristas', d: 'Perfil, histórico e controle de fadiga em tempo real' },
                  { t: 'Parceria certificada', d: 'Gerenciadoras de risco homologadas e seguros personalizados' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.25rem', backgroundColor: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0A0A0A', flexShrink: 0, marginTop: '0.35rem' }} />
                    <div>
                      <div style={{ color: '#0A0A0A', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.2rem' }}>{item.t}</div>
                      <div style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.8rem', lineHeight: 1.6 }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

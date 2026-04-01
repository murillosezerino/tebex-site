'use client'

// Layout inspirado na Loggi: texto esquerda ocupa 55%, visual direita 45%
// No mobile empilha vertical com visual embaixo
export default function Hero() {
  return (
    <>
      <style>{`
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding: 7rem 1.5rem 4rem;
        }
        .hero-visual {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: #111;
          aspect-ratio: 4/3;
        }
        @media (min-width: 768px) {
          .hero-grid {
            flex-direction: row;
            align-items: center;
            padding: 7rem 1.5rem 5rem;
            gap: 4rem;
          }
          .hero-text { flex: 0 0 52%; }
          .hero-visual { flex: 0 0 44%; }
        }
      `}</style>

      <section style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div className="hero-grid">

            {/* TEXTO */}
            <div className="hero-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,212,0,0.1)', border: '1px solid rgba(255,212,0,0.3)', borderRadius: '100px', padding: '0.35rem 1rem', marginBottom: '1.75rem' }}>
                <span style={{ color: '#FFD400', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Excelência em Transporte e Gestão de Risco
                </span>
              </div>

              <h1 className="font-brand" style={{ color: '#FFFFFF', fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', lineHeight: '0.96', marginBottom: '1.25rem' }}>
                SEGURANÇA<br />
                <span style={{ color: '#FFD400' }}>NÃO É UM</span><br />
                DIFERENCIAL.
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                É PRIORIDADE.
              </p>

              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Transportadora nacional especializada em transporte terrestre de cargas.
                Frota própria e agregados, rastreamento 24h e gestão de risco completa.
              </p>

              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <a href="#contato" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.75rem', backgroundColor: '#FFD400', color: '#0A0A0A', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none' }}>
                  Solicitar cotação →
                </a>
                <a href="#servicos" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.9rem 1.75rem', border: '1px solid rgba(255,255,255,0.25)', color: '#FFFFFF', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none' }}>
                  Ver serviços
                </a>
              </div>
            </div>

            {/* VISUAL */}
            <div className="hero-visual">
              <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
                <defs>
                  <pattern id="hg" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1"/>
                  </pattern>
                  <radialGradient id="glow" cx="60%" cy="30%" r="55%">
                    <stop offset="0%" stopColor="#FFD400" stopOpacity="0.12"/>
                    <stop offset="100%" stopColor="#FFD400" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="560" height="420" fill="#0F0F0F"/>
                <rect width="560" height="420" fill="url(#hg)"/>
                <ellipse cx="360" cy="140" rx="240" ry="180" fill="url(#glow)"/>

                {/* Badge rastreamento */}
                <rect x="30" y="28" width="155" height="58" rx="8" fill="rgba(255,212,0,0.08)" stroke="rgba(255,212,0,0.25)" strokeWidth="1"/>
                <text x="48" y="50" fontFamily="monospace" fontSize="9" fill="rgba(255,212,0,0.65)" letterSpacing="1">RASTREAMENTO</text>
                <circle cx="48" cy="68" r="4" fill="#32B700"/>
                <text x="60" y="72" fontFamily="monospace" fontWeight="700" fontSize="11" fill="#FFD400">ATIVO 24/7</text>

                {/* Badge cobertura */}
                <rect x="370" y="330" width="155" height="58" rx="8" fill="rgba(255,212,0,0.08)" stroke="rgba(255,212,0,0.25)" strokeWidth="1"/>
                <text x="388" y="352" fontFamily="monospace" fontSize="9" fill="rgba(255,212,0,0.65)" letterSpacing="1">COBERTURA</text>
                <text x="388" y="376" fontFamily="monospace" fontWeight="900" fontSize="14" fill="#FFD400">NACIONAL</text>

                {/* Badge 100% */}
                <rect x="400" y="28" width="130" height="58" rx="8" fill="#FFD400"/>
                <text x="416" y="52" fontFamily="monospace" fontWeight="900" fontSize="22" fill="#0A0A0A">100%</text>
                <text x="416" y="72" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.6)" letterSpacing="1">FROTA RASTREADA</text>

                {/* Caminhão */}
                {/* Carroceria */}
                <rect x="60" y="195" width="280" height="130" rx="5" fill="#1C1C1C" stroke="#FFD400" strokeWidth="2"/>
                {/* Cabine */}
                <rect x="340" y="230" width="115" height="95" rx="5" fill="#1E1E1E" stroke="#FFD400" strokeWidth="2"/>
                {/* Janela */}
                <rect x="358" y="243" width="80" height="48" rx="3" fill="rgba(255,212,0,0.08)" stroke="rgba(255,212,0,0.4)" strokeWidth="1.5"/>
                {/* Logo na carroceria */}
                <text x="115" y="252" fontFamily="monospace" fontWeight="900" fontSize="24" fill="#FFD400" letterSpacing="6">TEBEX</text>
                <text x="168" y="278" fontFamily="monospace" fontWeight="700" fontSize="13" fill="rgba(255,212,0,0.5)" letterSpacing="4">LOG</text>
                {/* Rodas */}
                {[130, 250, 395].map((cx, i) => (
                  <g key={i}>
                    <circle cx={cx} cy={330} r="26" fill="#111" stroke="#FFD400" strokeWidth="2.5"/>
                    <circle cx={cx} cy={330} r="13" fill="#1a1a1a" stroke="rgba(255,212,0,0.35)" strokeWidth="1.5"/>
                    <circle cx={cx} cy={330} r="4" fill="#FFD400"/>
                  </g>
                ))}
                {/* Linha de chão */}
                <line x1="20" y1="360" x2="540" y2="360" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                {/* Pontos de rota */}
                <circle cx="490" cy="160" r="5" fill="#FFD400"/>
                <circle cx="510" cy="185" r="3" fill="rgba(255,212,0,0.5)"/>
                <circle cx="525" cy="210" r="3" fill="rgba(255,212,0,0.3)"/>
                <line x1="490" y1="160" x2="525" y2="210" stroke="rgba(255,212,0,0.25)" strokeWidth="1.5" strokeDasharray="4 3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

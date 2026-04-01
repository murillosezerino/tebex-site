// Loggi "maior sorting center" — full width com visual grande e headline centralizada
export default function BigFeature() {
  return (
    <section style={{ backgroundColor: '#F5F5F0', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '2rem', height: '2px', backgroundColor: '#0A0A0A' }} />
            <span style={{ color: '#0A0A0A', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Infraestrutura</span>
            <div style={{ width: '2rem', height: '2px', backgroundColor: '#0A0A0A' }} />
          </div>
          <h2 className="font-brand" style={{ color: '#0A0A0A', fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            CENTRAL DE MONITORAMENTO<br />
            ATIVA 24 HORAS POR DIA.
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: 1.85, maxWidth: '44rem', margin: '0 auto' }}>
            Nossa central opera ininterruptamente, acompanhando cada veículo em tempo real.
            <strong style={{ color: 'rgba(0,0,0,0.8)' }}> Cobertura nacional, resposta imediata.</strong>
          </p>
        </div>

        {/* Visual full width */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', background: '#0D0D0D', aspectRatio: '21/8' }}>
          <svg viewBox="0 0 1200 457" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <pattern id="bg3" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
              </pattern>
              <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD400" stopOpacity="0.07"/>
                <stop offset="100%" stopColor="#FFD400" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="1200" height="457" fill="#0D0D0D"/>
            <rect width="1200" height="457" fill="url(#bg3)"/>
            <ellipse cx="600" cy="228" rx="500" ry="300" fill="url(#cg)"/>

            {/* Brasil central */}
            <g transform="translate(340, 30) scale(1.3)">
              <path d="M175 20C215 14 260 24 295 48 C330 72 348 108 342 148 C336 188 315 216 288 236 C261 256 228 260 200 244 C172 228 152 200 142 168 C132 136 138 102 156 76 C174 50 195 27 175 20Z" fill="rgba(255,212,0,0.05)" stroke="rgba(255,212,0,0.22)" strokeWidth="1.5"/>
              {[[175,20],[225,55],[280,100],[295,155],[260,210],[205,245],[155,215],[138,155],[165,95],[220,125],[265,140]].map(([x,y],i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="5" fill="#FFD400" opacity="0.85"/>
                  <circle cx={x} cy={y} r="12" fill="rgba(255,212,0,0.1)"/>
                </g>
              ))}
              {[[175,20,225,55],[225,55,280,100],[280,100,295,155],[295,155,260,210],[260,210,205,245],[175,20,165,95],[165,95,220,125],[220,125,265,140],[265,140,295,155]].map(([x1,y1,x2,y2],i)=>(
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,212,0,0.18)" strokeWidth="1" strokeDasharray="4 3"/>
              ))}
            </g>

            {/* Painéis esquerda */}
            {[{x:24,y:40,l:'VEÍCULOS',v:'47',c:'#FFD400'},{x:24,y:160,l:'EM ROTA',v:'38',c:'#32B700'},{x:24,y:280,l:'ALERTAS',v:'0',c:'#FFD400'}].map((p,i)=>(
              <g key={i}>
                <rect x={p.x} y={p.y} width="155" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke={p.c+'30'} strokeWidth="1"/>
                <text x={p.x+14} y={p.y+22} fontFamily="monospace" fontSize="9" fill={p.c+'80'} letterSpacing="1">{p.l}</text>
                <text x={p.x+14} y={p.y+66} fontFamily="monospace" fontWeight="900" fontSize="32" fill={p.c}>{p.v}</text>
              </g>
            ))}
            {/* Painéis direita */}
            {[{x:1022,y:40,l:'ENTREGAS',v:'124',c:'#FFD400'},{x:1022,y:160,l:'COBERTURA',v:'100%',c:'#32B700'},{x:1022,y:280,l:'UPTIME',v:'99.9%',c:'#FFD400'}].map((p,i)=>(
              <g key={i}>
                <rect x={p.x} y={p.y} width="155" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke={p.c+'30'} strokeWidth="1"/>
                <text x={p.x+14} y={p.y+22} fontFamily="monospace" fontSize="9" fill={p.c+'80'} letterSpacing="1">{p.l}</text>
                <text x={p.x+14} y={p.y+66} fontFamily="monospace" fontWeight="900" fontSize="32" fill={p.c}>{p.v}</text>
              </g>
            ))}

            {/* Status bar */}
            <rect x="0" y="422" width="1200" height="35" fill="rgba(255,212,0,0.05)"/>
            <circle cx="28" cy="439" r="5" fill="#32B700"/>
            <text x="42" y="443" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.35)" letterSpacing="1">SISTEMA OPERACIONAL  ●  ÚLTIMA ATUALIZAÇÃO: AGORA  ●  CENTRAL TEBEX LOG 24/7</text>
          </svg>
        </div>
      </div>
    </section>
  )
}

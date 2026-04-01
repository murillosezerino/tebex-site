// Loggi CTA final — split layout, texto esquerda, visual direita
export default function FinalCTA() {
  return (
    <>
      <style>{`
        .cta-grid {
          display: flex;
          flex-direction: column;
        }
        .cta-text-side {
          padding: clamp(3.5rem, 8vw, 6rem) 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cta-visual-side {
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0A0A0A;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .cta-grid { flex-direction: row; }
          .cta-text-side { flex: 0 0 50%; padding: clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem); }
          .cta-visual-side { flex: 1; min-height: 420px; }
        }
      `}</style>

      <section id="contato" style={{ backgroundColor: '#FFD400', overflow: 'hidden' }}>
        <div className="cta-grid">
          <div className="cta-text-side">
            <h2 className="font-brand" style={{ color: '#0A0A0A', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1, marginBottom: '1.25rem' }}>
              COMECE AGORA<br />COM A TEBEX LOG.
            </h2>
            <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '30rem' }}>
              Envios seguros, rastreamento total e entrega em todo o Brasil.
              Nosso compromisso é a sua segurança.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:12997364365" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: '#0A0A0A', color: '#FFD400', fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none' }}>
                📞 (12) 99736-4365
              </a>
              <a href="mailto:juliana.soares@tebexlog.com.br" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: 'transparent', color: '#0A0A0A', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none', border: '2px solid rgba(0,0,0,0.2)' }}>
                ✉️ juliana.soares@tebexlog.com.br
              </a>
            </div>
          </div>

          <div className="cta-visual-side">
            <svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
              <defs>
                <pattern id="vg" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0L0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="520" height="360" fill="#0A0A0A"/>
              <rect width="520" height="360" fill="url(#vg)"/>

              {/* Caminhão grande centralizado */}
              <rect x="40" y="135" width="295" height="125" rx="5" fill="#1C1C1C" stroke="#FFD400" strokeWidth="2"/>
              <rect x="335" y="168" width="120" height="92" rx="5" fill="#1E1E1E" stroke="#FFD400" strokeWidth="2"/>
              <rect x="350" y="180" width="88" height="50" rx="3" fill="rgba(255,212,0,0.08)" stroke="rgba(255,212,0,0.35)" strokeWidth="1.5"/>
              <text x="95" y="188" fontFamily="monospace" fontWeight="900" fontSize="26" fill="#FFD400" letterSpacing="6">TEBEX</text>
              <text x="148" y="218" fontFamily="monospace" fontWeight="700" fontSize="14" fill="rgba(255,212,0,0.5)" letterSpacing="4">LOG</text>
              {[125,245,395].map((cx,i) => (
                <g key={i}>
                  <circle cx={cx} cy={265} r="27" fill="#111" stroke="#FFD400" strokeWidth="2.5"/>
                  <circle cx={cx} cy={265} r="13" fill="#1a1a1a" stroke="rgba(255,212,0,0.35)" strokeWidth="1.5"/>
                  <circle cx={cx} cy={265} r="4" fill="#FFD400"/>
                </g>
              ))}
              <line x1="0" y1="296" x2="520" y2="296" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
              <ellipse cx="250" cy="298" rx="210" ry="10" fill="rgba(0,0,0,0.35)"/>

              {/* Badge */}
              <rect x="380" y="30" width="118" height="70" rx="8" fill="rgba(255,212,0,0.1)" stroke="rgba(255,212,0,0.3)" strokeWidth="1"/>
              <circle cx="400" cy="55" r="5" fill="#32B700"/>
              <text x="414" y="50" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.45)">RASTREANDO</text>
              <text x="397" y="85" fontFamily="monospace" fontWeight="700" fontSize="11" fill="#FFD400">ATIVO 24/7</text>

              {/* Texto rodapé */}
              <text x="260" y="330" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.2)" letterSpacing="2">NOSSO COMPROMISSO É A SUA SEGURANÇA</text>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

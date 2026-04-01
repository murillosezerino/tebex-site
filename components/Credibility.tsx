// Loggi "Quem já cresce" — imagem esquerda + texto direita (invertido)
const segmentos = ['🏭 Indústria', '🛒 Varejo', '📦 E-commerce', '🏗️ Construção', '🌾 Agronegócio', '🔧 Autopeças']

export default function Credibility() {
  return (
    <>
      <style>{`
        .cred-grid {
          display: flex;
          flex-direction: column-reverse;
          gap: 3rem;
        }
        @media (min-width: 768px) {
          .cred-grid {
            flex-direction: row;
            align-items: center;
            gap: 5rem;
          }
          .cred-text { flex: 0 0 48%; }
          .cred-visual { flex: 1; }
        }
      `}</style>

      <section style={{ backgroundColor: '#0A0A0A', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="cred-grid">

            {/* Texto */}
            <div className="cred-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#FFD400' }} />
                <span style={{ color: '#FFD400', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Credibilidade</span>
              </div>
              <h2 className="font-brand" style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
                QUEM JÁ CONFIA<br />
                <span style={{ color: '#FFD400' }}>NA TEBEX LOG.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                Atendemos empresas de diversos segmentos em todo o território nacional.
                Do agronegócio ao varejo, nossa frota garante flexibilidade e segurança
                para qualquer tipo de carga.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {[{ n: '24/7', l: 'Suporte' }, { n: '100%', l: 'Cobertura' }, { n: 'Zero', l: 'Tolerância ao risco' }, { n: 'Ágil', l: 'Resposta' }].map(s => (
                  <div key={s.l} style={{ padding: '1rem 1.25rem', border: '1px solid rgba(255,212,0,0.15)', borderRadius: '8px', backgroundColor: 'rgba(255,212,0,0.04)' }}>
                    <div style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 900, color: '#FFD400', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <a href="#contato" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.75rem', backgroundColor: '#FFD400', color: '#0A0A0A', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none' }}>
                Solicitar cotação →
              </a>
            </div>

            {/* Visual */}
            <div className="cred-visual" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#111', padding: '2rem' }}>
              <p style={{ color: '#FFD400', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', margin: '0 0 1.5rem' }}>Segmentos atendidos</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                {segmentos.map((s, i) => (
                  <div key={i} style={{ backgroundColor: '#111', padding: '1.5rem 1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{s.split(' ')[0]}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.split(' ').slice(1).join(' ')}</div>
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

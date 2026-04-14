export default function Credibility() {
  return (
    <section id="about" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
      textAlign: 'center',
      backgroundColor: 'var(--black)',
    }}>
      {/* Imagem de fundo */}
      <img
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      />
      {/* Overlay escuro */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.95) 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '700px', position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: 'var(--font)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '1rem',
          background: 'rgba(255,212,0,0.1)',
          display: 'inline-block',
          padding: '0.4rem 1rem',
        }}>
          Sobre a Tebex Log
        </p>

        <h2 style={{
          fontFamily: 'var(--font)',
          fontWeight: 200,
          color: 'var(--white)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '2rem',
        }}>
          Transportadora nacional com foco em seguranca e gestao de risco.
        </h2>

        <p style={{
          fontFamily: 'var(--font)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.6)',
          fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
          lineHeight: 1.9,
          marginBottom: '3rem',
        }}>
          Frota propria e agregados com rastreamento via satelite, central de monitoramento 24h
          e parceria com as principais gerenciadoras de risco do mercado. Cobertura em todo o territorio nacional.
        </p>

        {/* Key points */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
          textAlign: 'left',
        }}>
          {[
            { title: 'Frota Rastreada', desc: 'GPS e bloqueio remoto em todos os veiculos' },
            { title: 'Monitoramento 24h', desc: 'Central ativa todos os dias, sem parar' },
            { title: 'Cobertura Nacional', desc: 'Atendimento em todo territorio brasileiro' },
          ].map(item => (
            <div key={item.title} style={{
              padding: '1.25rem',
              borderLeft: '3px solid var(--accent)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderLeftWidth: '3px',
              borderLeftColor: 'var(--accent)',
            }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '0.3rem',
              }}>
                {item.title}
              </div>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.5,
              }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#cotacao" className="btn btn-accent">Solicitar cotacao</a>
          <a href="/servicos" className="btn btn-outline">Nossos servicos</a>
        </div>
      </div>
    </section>
  )
}

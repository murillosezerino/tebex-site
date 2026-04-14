import Link from 'next/link'

const services = [
  {
    title: 'Transporte de Carga',
    desc: 'Frota própria e agregados para cargas fracionadas e fechadas, com rastreamento em tempo real e cobertura nacional.',
    href: '/servicos#transporte',
    highlights: ['Carga fracionada (LTL)', 'Carga fechada (FTL)', 'Coleta agendada'],
  },
  {
    title: 'Gestão de Risco',
    desc: 'Parceria com as principais gerenciadoras do mercado. Escolta armada, seguros personalizados e monitoramento contínuo.',
    href: '/servicos#risco',
    highlights: ['Escolta armada', 'Rastreamento via satélite', 'Gerenciadoras certificadas'],
  },
  {
    title: 'Monitoramento 24/7',
    desc: 'Central operando ininterruptamente com controle de paradas, desvios e comunicação direta com motoristas.',
    href: '/servicos#monitoramento',
    highlights: ['Alertas em tempo real', 'Câmeras embarcadas', 'Controle de rota'],
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        backgroundColor: 'var(--black)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Imagem de fundo — logística/armazém */}
      <img
        src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
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
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.95) 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1120px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <span style={{
            color: 'var(--accent)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem',
          }}>
            O que fazemos
          </span>
          <h2
            style={{
              color: '#FFFFFF',
              fontWeight: 200,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Nossos serviços
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 300,
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              marginTop: '1rem',
              margin: '1rem auto 0',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            Soluções integradas de transporte, segurança e monitoramento para a sua operação.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 0,
                padding: 'clamp(2rem, 4vw, 2.5rem)',
                backgroundColor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
              }}
            >
              <h3
                style={{
                  color: '#FFFFFF',
                  fontWeight: 500,
                  fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                {s.highlights.map((h, j) => (
                  <div key={j} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.8rem',
                  }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>●</span>
                    {h}
                  </div>
                ))}
              </div>

              <Link
                href={s.href}
                style={{
                  color: 'var(--accent)',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  marginTop: 'auto',
                  transition: 'color 0.3s ease',
                }}
              >
                Saiba mais &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 5vw, 4rem)' }}>
          <Link href="/servicos" className="btn btn-outline">
            Ver todos os serviços &rarr;
          </Link>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          border-color: var(--accent) !important;
          background-color: rgba(255,255,255,0.06) !important;
        }
        .service-card:hover a {
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  )
}

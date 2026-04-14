'use client'

export default function Hero() {
  return (
    <section style={{
      background: 'var(--black)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 1.5rem',
      position: 'relative',
    }}>

      {/* Imagem de fundo — caminhão em rodovia */}
      <img
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />

      {/* Vídeo de fundo (fallback sobre a imagem) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      >
        <source src="https://videos.pexels.com/video-files/2800369/2800369-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Gradiente escuro sobre o vídeo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.85) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Conteúdo centrado */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '960px' }}>
        <p style={{
          color: 'var(--accent)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Transporte &bull; Segurança &bull; Monitoramento
        </p>

        <h1 style={{
          fontFamily: 'var(--font)',
          fontWeight: 200,
          color: 'var(--white)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          marginBottom: '1.5rem',
        }}>
          Segurança não é<br />um diferencial.
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          fontWeight: 300,
          lineHeight: 1.7,
          maxWidth: '520px',
          margin: '0 auto',
        }}>
          Transporte terrestre com rastreamento 24h,
          gestão de risco e cobertura nacional.
        </p>
      </div>

      {/* CTAs fixos no fundo */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(3rem, 6vh, 5rem)',
        left: 0,
        right: 0,
        display: 'flex',
        gap: '0.75rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0 1.5rem',
      }}>
        <a href="#cotacao" className="btn btn-accent">Solicitar cotação</a>
        <a href="#servicos" className="btn btn-outline">Ver serviços</a>
      </div>
    </section>
  )
}

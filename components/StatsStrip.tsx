export default function StatsStrip() {
  const stats = [
    { value: '24/7', label: 'Central de monitoramento', icon: '◉' },
    { value: '100%', label: 'Frota rastreada', icon: '◎' },
    { value: 'Nacional', label: 'Cobertura completa', icon: '◈' },
    { value: 'Zero', label: 'Tolerância ao risco', icon: '◆' },
  ]

  return (
    <section style={{
      background: 'var(--black)',
      position: 'relative',
      padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
    }}>
      {/* Imagem de fundo — armazém logístico */}
      <img
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />
      {/* Overlay gradiente */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.9) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {stats.map(s => (
          <div key={s.label} style={{
            padding: '2rem 1rem',
            border: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              fontFamily: 'var(--font)',
              fontWeight: 200,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: 'var(--font)',
              fontWeight: 400,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

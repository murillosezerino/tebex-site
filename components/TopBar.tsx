// Barra acima da navbar — igual ao modelo RODOPINDA
export default function TopBar() {
  return (
    <div style={{
      backgroundColor: '#FFD400',
      padding: '0.5rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
      zIndex: 60,
      position: 'relative',
    }}>
      {/* Esquerda — contato rápido */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a href="tel:12997364365" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0A0A0A', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600 }}>
          📞 (12) 99736-4365
        </a>
        <a href="mailto:juliana.soares@tebexlog.com.br" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0A0A0A', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600 }}>
          ✉️ juliana.soares@tebexlog.com.br
        </a>
        <span style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.75rem', fontWeight: 500 }}>
          📍 Atuação nacional — Frota própria e agregada
        </span>
      </div>

      {/* Direita — horário e CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ color: 'rgba(0,0,0,0.65)', fontSize: '0.72rem', fontWeight: 500 }}>
          🕐 Central 24h / 7 dias
        </span>
        <a
          href="https://wa.me/5512997364365?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: '#0A0A0A', color: '#FFD400', padding: '0.3rem 0.875rem', borderRadius: 4, fontSize: '0.72rem', fontWeight: 800, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
        >
          💬 Cotar agora
        </a>
      </div>
    </div>
  )
}

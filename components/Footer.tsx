'use client'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060606', borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(3rem, 6vw, 4.5rem) 0 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: 'clamp(2rem, 5vw, 3rem)', paddingBottom: 'clamp(2rem, 5vw, 3rem)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.1rem', marginBottom: '1rem' }}>
              <span className="font-brand" style={{ color: '#FFFFFF', fontSize: '1.4rem', letterSpacing: '0.08em' }}>TEBEX</span>
              <span className="font-brand" style={{ color: '#FFD400', fontSize: '1.1rem', letterSpacing: '0.08em' }}>LOG</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.75, maxWidth: '20rem', marginBottom: '1.25rem' }}>
              Excelência em transporte terrestre e gestão de risco. Segurança não é um diferencial — é prioridade.
            </p>
            {[{ href: 'tel:12997364365', label: '📞 (12) 99736-4365' }, { href: 'mailto:juliana.soares@tebexlog.com.br', label: '✉️ juliana.soares@tebexlog.com.br' }].map(item => (
              <a key={item.href} href={item.href} style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', fontWeight: 400, textDecoration: 'none', marginBottom: '0.4rem' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FFD400')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >{item.label}</a>
            ))}
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', fontWeight: 400, marginTop: '0.4rem' }}>📍 Atuação nacional</span>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase' as const, letterSpacing: '0.18em', marginBottom: '1rem' }}>Serviços</h4>
            {['Transporte de Cargas', 'Frota Própria e Agregada', 'Gestão de Risco', 'Rastreamento Satelital', 'Escolta Armada', 'Seguros de Carga'].map(link => (
              <a key={link} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 400, textDecoration: 'none', marginBottom: '0.5rem' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FFD400')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{link}</a>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase' as const, letterSpacing: '0.18em', marginBottom: '1rem' }}>Empresa</h4>
            {['Sobre a Tebex Log', 'Diferenciais', 'Segurança', 'Contato'].map(link => (
              <a key={link} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 400, textDecoration: 'none', marginBottom: '0.5rem' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FFD400')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{link}</a>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '0.75rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', fontWeight: 400 }}>© {new Date().getFullYear()} Tebex Log. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#FFD400' }} />
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>Central operacional 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

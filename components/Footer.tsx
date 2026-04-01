'use client'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060606', borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(3rem, 6vw, 4.5rem) 0 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 'clamp(2rem, 5vw, 3rem)', paddingBottom: 'clamp(2rem, 5vw, 3rem)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Marca */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: '1rem' }}>
              <span className="font-brand" style={{ color: '#FFFFFF', fontSize: '1.4rem', letterSpacing: '0.08em' }}>TEBEX</span>
              <span className="font-brand" style={{ color: '#FFD400', fontSize: '1.1rem', letterSpacing: '0.08em' }}>LOG</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.75, maxWidth: '20rem', marginBottom: '1.25rem' }}>
              Excelência em transporte terrestre e gestão de risco. Segurança não é um diferencial — é prioridade.
            </p>

            {/* Endereço */}
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Endereço</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                📍 São José dos Campos — SP<br />
                Atuação em todo o Brasil
              </p>
            </div>

            {/* Contatos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { href: 'tel:12997364365', label: '📞 (12) 99736-4365' },
                { href: 'https://wa.me/5512997364365', label: '💬 WhatsApp', target: '_blank' },
                { href: 'mailto:juliana.soares@tebexlog.com.br', label: '✉️ juliana.soares@tebexlog.com.br' },
              ].map(item => (
                <a key={item.href} href={item.href} target={(item as any).target} rel={(item as any).target ? 'noopener noreferrer' : undefined}
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 400, textDecoration: 'none' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#FFD400')}
                  onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >{item.label}</a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>Serviços</h4>
            {['Transporte de Cargas', 'Frota Própria e Agregada', 'Gestão de Risco', 'Rastreamento Satelital', 'Escolta Armada', 'Seguros de Carga'].map(link => (
              <a key={link} href="/servicos" style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '0.5rem' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FFD400')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{link}</a>
            ))}
          </div>

          {/* Empresa */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>Empresa</h4>
            {[
              { label: 'Sobre a Tebex Log', href: '/#about' },
              { label: 'Serviços', href: '/servicos' },
              { label: 'Segurança', href: '/#seguranca' },
              { label: 'Solicitar Cotação', href: '/#cotacao' },
              { label: 'Contato', href: '/#contato' },
            ].map(link => (
              <a key={link.label} href={link.href} style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '0.5rem' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FFD400')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{link.label}</a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>Legal</h4>
            {[
              { label: 'Política de Privacidade', href: '/privacidade' },
              { label: 'Termos de Uso', href: '/termos' },
            ].map(link => (
              <a key={link.label} href={link.href} style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '0.5rem' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FFD400')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{link.label}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ padding: '1.25rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Tebex Log. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="/privacidade" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
            >Privacidade</a>
            <a href="/termos" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
            >Termos</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#FFD400' }} />
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>Central 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

const cards = [
  {
    href: 'tel:12997364365',
    label: 'Telefone',
    value: '(12) 99736-4365',
    desc: 'Central disponível 24h por dia, 7 dias por semana.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.36 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
    ),
  },
  {
    href: 'https://wa.me/5512997364365?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Tebex%20Log',
    external: true,
    label: 'WhatsApp',
    value: '(12) 99736-4365',
    desc: 'Resposta em minutos. Atendimento humanizado.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    ),
  },
  {
    href: 'mailto:juliana.soares@tebexlog.com.br',
    label: 'E-mail',
    value: 'juliana.soares@tebexlog.com.br',
    desc: 'Para cotações, parcerias e informações comerciais.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
]

export default function ContatoCards() {
  return (
    <>
      {cards.map(card => (
        <a
          key={card.label}
          href={card.href}
          {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="tbx-card tbx-card--interactive"
          onMouseMove={e => {
            const r = e.currentTarget.getBoundingClientRect()
            e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
            e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
          }}
          style={{ textDecoration: 'none', padding: '2rem 1.75rem', display: 'block' }}
        >
          <span className="tbx-card-accent" />
          <div style={{
            width: '44px', height: '44px',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--accent)',
            background: 'linear-gradient(135deg, rgba(255,212,0,0.14), rgba(255,212,0,0.02))',
            border: '1px solid rgba(255,212,0,0.2)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '1.25rem',
          }}>
            {card.icon}
          </div>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.65rem' }}>
            {card.label}
          </p>
          <p style={{ color: 'var(--white)', fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', fontWeight: 300, letterSpacing: '-0.01em', wordBreak: 'break-word' }}>
            {card.value}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 300, marginTop: '0.75rem', lineHeight: 1.65 }}>
            {card.desc}
          </p>
        </a>
      ))}
    </>
  )
}

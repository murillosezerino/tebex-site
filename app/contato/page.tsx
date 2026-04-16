import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contato | Tebex Log',
  description: 'Entre em contato com a Tebex Log. Telefone, e-mail, WhatsApp e endereço.',
  alternates: { canonical: '/contato' },
}

export default function ContatoPage() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(6rem, 12vw, 10rem) 1.5rem clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1.5rem' }}>
            Contato
          </p>
          <h1 style={{ fontWeight: 200, color: 'var(--white)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
            Fale conosco.
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', fontWeight: 300, lineHeight: 1.7 }}>
            Estamos prontos para atender sua operação.
            Entre em contato pelo canal de sua preferência.
          </p>
        </div>
      </section>

      {/* Canais de contato */}
      <section style={{ minHeight: 'auto', padding: 'clamp(3rem, 6vw, 6rem) 1.5rem', display: 'block' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

          {[
            { href: 'tel:12997364365', label: 'Telefone', value: '(12) 99736-4365', desc: 'Central disponível 24h por dia, 7 dias por semana.', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.36 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            ) },
            { href: 'https://wa.me/5512997364365?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Tebex%20Log', external: true, label: 'WhatsApp', value: '(12) 99736-4365', desc: 'Resposta em minutos. Atendimento humanizado.', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            ) },
            { href: 'mailto:juliana.soares@tebexlog.com.br', label: 'E-mail', value: 'juliana.soares@tebexlog.com.br', desc: 'Para cotações, parcerias e informações comerciais.', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ) },
          ].map(card => (
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
        </div>
      </section>

      {/* Endereço + Horário */}
      <section style={{ minHeight: 'auto', display: 'block', padding: 'clamp(3rem, 6vw, 6rem) 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>

          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1rem' }}>
              Endereço
            </p>
            <p style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8 }}>
              Pindamonhangaba — SP
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.8 }}>
              Atuação em todo o território nacional.
              Frota própria e agregados.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1rem' }}>
              Horário de atendimento
            </p>
            <p style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8 }}>
              Central 24 horas
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.8 }}>
              Monitoramento e suporte ininterrupto.
              Atendimento comercial em horário administrativo.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1rem' }}>
              Encarregado de dados (DPO)
            </p>
            <p style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8 }}>
              juliana.soares@tebexlog.com.br
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.8 }}>
              Para questões relacionadas à proteção de dados pessoais conforme a LGPD.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ minHeight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(4rem, 8vw, 8rem) 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <h2 style={{ fontWeight: 200, color: 'var(--white)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Pronto para começar?
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem', fontWeight: 300, marginBottom: '2rem' }}>
            Solicite uma cotação personalizada para sua operação.
          </p>
          <Link href="/#cotacao" className="btn btn-accent">
            Solicitar cotação
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

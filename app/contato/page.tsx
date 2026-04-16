import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContatoCards from './ContatoCards'

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

          <ContatoCards />
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

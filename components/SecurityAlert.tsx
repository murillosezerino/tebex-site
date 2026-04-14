'use client'

import { useState, useEffect } from 'react'

export default function SecurityAlert() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('tebex-security-alert')
    if (!seen) {
      setTimeout(() => setVisible(true), 2000)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem('tebex-security-alert', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Overlay */}
      <div
        onClick={dismiss}
        style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 500, cursor: 'pointer',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 501,
        width: 'min(460px, 92vw)',
        backgroundColor: 'var(--black, #0A0A0A)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        {/* Yellow top line */}
        <div style={{ height: '2px', backgroundColor: 'var(--accent, #FFD400)' }} />

        {/* Content */}
        <div style={{ padding: '2rem 2rem 1.5rem' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ color: '#FFFFFF', fontWeight: 400, fontSize: '1rem', margin: 0 }}>
              Aviso de Seguranca
            </h2>
            <button
              onClick={dismiss}
              style={{
                background: 'none', border: 'none',
                color: 'rgba(255,255,255,0.3)', fontSize: '1rem',
                cursor: 'pointer', padding: '0.25rem', lineHeight: 1,
              }}
            >
              &#10005;
            </button>
          </div>

          {/* Body */}
          <p style={{
            color: 'rgba(255,255,255,0.5)', fontWeight: 300, fontSize: '0.85rem',
            lineHeight: 1.7, marginBottom: '1.5rem',
          }}>
            A Tebex Log reforça seu compromisso com a segurança de seus clientes e parceiros.
          </p>

          {/* Bullet points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              { bold: 'Nunca realizamos', text: 'cobrancas extras, impostos ou qualquer tipo de pagamento via PIX, WhatsApp, SMS ou ligacoes nao oficiais.' },
              { bold: 'Nao solicitamos', text: 'documentos, senhas ou dados pessoais por canais nao oficiais.' },
              { bold: 'Nao compartilhe', text: 'dados pessoais ou realize pagamentos sem confirmar a origem da mensagem.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', lineHeight: 1.7, flexShrink: 0 }}>--</span>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  <strong style={{ color: '#FFFFFF', fontWeight: 400 }}>{item.bold}</strong> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Official channels */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 400 }}>
              Canais oficiais
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <a href="https://www.tebexlog.com.br" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 300 }}>
                www.tebexlog.com.br
              </a>
              <a href="tel:12997364365" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 300 }}>
                (12) 99736-4365
              </a>
              <a href="mailto:juliana.soares@tebexlog.com.br" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 300 }}>
                juliana.soares@tebexlog.com.br
              </a>
            </div>
          </div>

          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: '1.25rem' }}>
            Em caso de duvida, entre em contato pelos canais oficiais.
          </p>

          <button
            className="btn btn-accent"
            onClick={dismiss}
            style={{ width: '100%' }}
          >
            Entendi, continuar no site
          </button>
        </div>
      </div>
    </>
  )
}

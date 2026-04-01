'use client'

import { useState, useEffect } from 'react'

export default function SecurityAlert() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Mostra só uma vez por sessão
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
      <style>{`
        @keyframes alert-in {
          from { opacity: 0; transform: translateY(-20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Overlay */}
      <div onClick={dismiss} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)', zIndex: 500, cursor: 'pointer' }} />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 501, width: 'min(520px, 92vw)',
        backgroundColor: '#FFFFFF', borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
        animation: 'alert-in 0.35s ease',
      }}>
        {/* Header vermelho */}
        <div style={{ backgroundColor: '#F22800', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '2.5rem', lineHeight: 1 }}>⚠️</div>
          <div>
            <h2 style={{ color: '#FFFFFF', fontWeight: 900, fontSize: '1.2rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              FIQUE ATENTO!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', margin: 0, marginTop: '0.2rem' }}>
              Mensagem oficial da Tebex Log
            </p>
          </div>
          <button onClick={dismiss} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1, padding: '0.25rem' }}>✕</button>
        </div>

        {/* Conteúdo */}
        <div style={{ padding: '1.5rem' }}>
          <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0A0A', marginBottom: '1rem', lineHeight: 1.6 }}>
            A Tebex Log reforça seu compromisso com a segurança de seus clientes e parceiros.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {[
              { bold: 'Nunca realizamos', text: 'cobranças extras, impostos ou qualquer tipo de pagamento via PIX, WhatsApp, SMS ou ligações não oficiais.' },
              { bold: 'Não solicitamos', text: 'documentos, senhas ou dados pessoais por canais não oficiais.' },
              { bold: 'Não compartilhe', text: 'dados pessoais ou realize pagamentos sem confirmar a origem da mensagem.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#F22800', marginTop: '0.45rem', flexShrink: 0 }} />
                <p style={{ fontSize: '0.875rem', color: '#333', lineHeight: 1.65, margin: 0 }}>
                  <strong style={{ color: '#0A0A0A' }}>{item.bold}</strong> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Canais oficiais */}
          <div style={{ backgroundColor: '#FFF8E1', border: '1px solid rgba(255,212,0,0.4)', borderRadius: 8, padding: '1rem', marginBottom: '1.25rem' }}>
            <p style={{ fontWeight: 700, fontSize: '0.8rem', color: '#0A0A0A', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Nossos canais oficiais:
            </p>
            {[
              { icon: '🌐', label: 'www.tebexlog.com.br' },
              { icon: '📞', label: '(12) 99736-4365' },
              { icon: '✉️', label: 'juliana.soares@tebexlog.com.br' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: i < 2 ? '0.35rem' : 0 }}>
                <span>{c.icon}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0A0A0A' }}>{c.label}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginBottom: '1rem', lineHeight: 1.6 }}>
            Em caso de dúvida, entre em contato pelos canais oficiais acima.
          </p>

          <button
            onClick={dismiss}
            style={{ width: '100%', padding: '0.875rem', backgroundColor: '#FFD400', color: '#0A0A0A', fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.06em', textTransform: 'uppercase', border: 'none', borderRadius: 6, cursor: 'pointer' }}
          >
            Entendi, continuar no site
          </button>
        </div>
      </div>
    </>
  )
}

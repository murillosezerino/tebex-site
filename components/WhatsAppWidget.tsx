'use client'

import { useState } from 'react'

const WA_BASE = 'https://wa.me/5512997364365'

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .wa-btn { animation: wa-pulse 2.5s infinite; }
        .wa-bubble { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
      `}</style>

      {/* Bubble de opções */}
      {open && (
        <div className="wa-bubble" style={{
          position: 'fixed', bottom: 90, right: 24,
          backgroundColor: '#FFFFFF',
          borderRadius: 16, padding: '1rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          zIndex: 999, width: 260,
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
              🚛
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0A0A0A' }}>Tebex Log</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#25D366' }} />
                <span style={{ fontSize: '0.7rem', color: '#666' }}>Online agora</span>
              </div>
            </div>
          </div>

          {/* Mensagem */}
          <div style={{ backgroundColor: '#f0f7f0', borderRadius: 12, borderTopLeftRadius: 2, padding: '0.75rem', marginBottom: '1rem', fontSize: '0.82rem', color: '#333', lineHeight: 1.6 }}>
            Olá! Como posso ajudar? Escolha uma opção abaixo 👇
          </div>

          {/* Opções rápidas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { label: 'Solicitar cotação', msg: 'Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20frete' },
              { label: 'Transporte de carga', msg: 'Ol%C3%A1%2C%20preciso%20de%20informa%C3%A7%C3%B5es%20sobre%20transporte%20de%20carga' },
              { label: 'Rastreamento', msg: 'Ol%C3%A1%2C%20preciso%20rastrear%20minha%20carga' },
              { label: 'Falar com consultor', msg: 'Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor' },
            ].map((opt) => (
              <a
                key={opt.label}
                href={`${WA_BASE}?text=${opt.msg}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', padding: '0.6rem 0.875rem', border: '1.5px solid #25D366', borderRadius: 8, color: '#0A0A0A', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, backgroundColor: '#fff', transition: 'background 0.15s' }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#f0fff4')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = '#fff')}
              >
                {opt.label}
              </a>
            ))}
          </div>

          <p style={{ fontSize: '0.65rem', color: '#999', textAlign: 'center', marginTop: '0.875rem' }}>
            Resposta em minutos • 24h/7 dias
          </p>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        className="wa-btn"
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', bottom: 24, right: 24,
          width: 56, height: 56, borderRadius: '50%',
          backgroundColor: '#25D366',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.75rem', zIndex: 1000,
          boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="Falar no WhatsApp"
      >
        {open ? '✕' : (
          <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </button>
    </>
  )
}

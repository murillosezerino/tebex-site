'use client'

import { useState } from 'react'

const WA_BASE = 'https://wa.me/5512997364365'

const options = [
  { label: 'Solicitar cotação', msg: 'Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20frete' },
  { label: 'Transporte de carga', msg: 'Ol%C3%A1%2C%20preciso%20de%20informa%C3%A7%C3%B5es%20sobre%20transporte%20de%20carga' },
  { label: 'Rastreamento', msg: 'Ol%C3%A1%2C%20preciso%20rastrear%20minha%20carga' },
  { label: 'Falar com consultor', msg: 'Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor' },
]

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <style>{`
        .wa-panel {
          transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .wa-panel-enter {
          opacity: 1; transform: translateY(0);
        }
        .wa-panel-exit {
          opacity: 0; transform: translateY(12px); pointer-events: none;
        }
      `}</style>

      {/* Panel */}
      <div
        className={`wa-panel ${open ? 'wa-panel-enter' : 'wa-panel-exit'}`}
        style={{
          position: 'fixed',
          bottom: 84,
          right: 24,
          width: 300,
          background: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '4px',
          zIndex: 999,
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.25rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: '#FFFFFF', fontSize: '0.875rem', fontWeight: 500 }}>Tebex Log</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#25D366' }} />
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>Online</span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
              fontSize: '1rem', cursor: 'pointer', padding: '0.25rem', lineHeight: 1,
            }}
          >
            &#10005;
          </button>
        </div>

        {/* Separator */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        {/* Message */}
        <div style={{ padding: '1rem 1.25rem 0.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300, fontSize: '0.82rem', margin: 0 }}>
            Como podemos ajudar?
          </p>
        </div>

        {/* Options */}
        <div style={{ padding: '0 1.25rem' }}>
          {options.map((opt, i) => (
            <a
              key={opt.label}
              href={`${WA_BASE}?text=${opt.msg}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '0.75rem 0',
                borderBottom: i < options.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--accent, #FFD400)')}
              onMouseOut={e => (e.currentTarget.style.color = '#FFFFFF')}
            >
              {opt.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '0.75rem 1.25rem 1rem', marginTop: '0.25rem' }}>
          <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            Resposta em minutos · 24h
          </p>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: '8px',
          backgroundColor: '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'opacity 0.2s',
        }}
        aria-label="Falar no WhatsApp"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </button>
    </>
  )
}

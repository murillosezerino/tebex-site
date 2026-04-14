'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        width: 40,
        height: 40,
        borderRadius: '2px',
        backgroundColor: 'transparent',
        border: '1px solid rgba(255,255,255,0.15)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 90,
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.3s, transform 0.3s, border-color 0.2s',
      }}
      onMouseOver={e => (e.currentTarget.style.borderColor = '#fff')}
      onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 13V3M8 3L3 8M8 3l5 5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

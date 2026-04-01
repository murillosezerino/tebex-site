'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Segurança', href: '#seguranca' },
    { label: 'Contato', href: '#contato' },
  ]

  function handleLinkClick(href: string) {
    setMenuOpen(false)
    // Small delay to let menu close before scrolling
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <style>{`
        .tbx-desktop { display: none !important; }
        .tbx-hamburger { display: flex !important; }
        @media (min-width: 768px) {
          .tbx-desktop { display: flex !important; }
          .tbx-hamburger { display: none !important; }
          .tbx-mobile-drawer { display: none !important; }
        }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled || menuOpen ? 'rgba(10,10,10,0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'background-color 0.3s',
      }}>
        {/* Top bar */}
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
          height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '2px', zIndex: 110 }}>
            <span className="font-brand" style={{ color: '#FFFFFF', fontSize: '1.3rem', letterSpacing: '0.08em' }}>TEBEX</span>
            <span className="font-brand" style={{ color: '#FFD400', fontSize: '1.05rem', letterSpacing: '0.08em' }}>LOG</span>
          </a>

          {/* Desktop nav */}
          <nav className="tbx-desktop" style={{ alignItems: 'center', gap: '2.5rem' }}>
            {links.map(l => (
              <a key={l.href} href={l.href}
                style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >{l.label}</a>
            ))}
            <a href="#contato" style={{ padding: '0.6rem 1.4rem', backgroundColor: '#FFD400', color: '#0A0A0A', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none' }}>
              Cotação
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="tbx-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            style={{ flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '10px', alignItems: 'center', justifyContent: 'center', zIndex: 110 }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer — visibility toggle, no overflow:hidden */}
        <div
          className="tbx-mobile-drawer"
          style={{
            display: menuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            backgroundColor: '#0A0A0A',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: '0.5rem 1.5rem 1.5rem',
          }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => {
                e.preventDefault()
                handleLinkClick(l.href)
              }}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={e => {
              e.preventDefault()
              handleLinkClick('#contato')
            }}
            style={{
              display: 'block',
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#FFD400',
              color: '#0A0A0A',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '4px',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            Solicitar cotação
          </a>
        </div>
      </header>
    </>
  )
}

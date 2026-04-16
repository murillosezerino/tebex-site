'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const serviceItems = [
    { label: 'Transporte de Carga', href: '/servicos', anchor: 'transporte' },
    { label: 'Gestão de Risco', href: '/servicos', anchor: 'risco' },
    { label: 'Monitoramento 24/7', href: '/servicos', anchor: 'monitoramento' },
  ]

  const links = [
    { label: 'Sobre', section: 'about' },
    { label: 'Serviços', href: '/servicos', hasDropdown: true },
    { label: 'Segurança', section: 'seguranca' },
  ]

  function scrollTo(section: string) {
    setMenuOpen(false)
    setServicesOpen(false)
    if (isHome) {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/?s=' + section
    }
  }

  function navigateTo(href: string, anchor?: string) {
    setMenuOpen(false)
    setServicesOpen(false)
    window.location.href = anchor ? href + '#' + anchor : href
  }

  // Handle ?s= param on home for cross-page scroll
  useEffect(() => {
    if (!isHome) return
    const params = new URLSearchParams(window.location.search)
    const section = params.get('s')
    if (section) {
      window.history.replaceState({}, '', '/')
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [isHome])

  const showBg = scrolled || menuOpen || !isHome

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
    fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.06em',
    textTransform: 'uppercase', transition: 'color 0.2s', cursor: 'pointer',
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

      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, pointerEvents: 'none' }}>
        {/* Soft top fade so the logo always reads, even on transparent navbar */}
        <div style={{
          position: 'absolute', inset: 0,
          background: showBg
            ? 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.55) 100%)'
            : 'linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.2) 55%, transparent 100%)',
          backdropFilter: showBg ? 'blur(18px) saturate(140%)' : 'blur(6px)',
          WebkitBackdropFilter: showBg ? 'blur(18px) saturate(140%)' : 'blur(6px)',
          transition: 'background 0.5s, backdrop-filter 0.5s',
          maskImage: showBg ? 'none' : 'linear-gradient(180deg, #000 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: showBg ? 'none' : 'linear-gradient(180deg, #000 0%, #000 70%, transparent 100%)',
        }} />

        {/* Hairline accent under nav, only when scrolled */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,212,0,0.4) 50%, transparent)',
          opacity: showBg ? 1 : 0,
          transition: 'opacity 0.5s',
        }} />

        <div style={{ position: 'relative', pointerEvents: 'auto' }}>
          <div style={{
            maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
            height: 'var(--nav-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span
              onClick={() => window.location.href = '/'}
              aria-label="Tebex Log — página inicial"
              style={{
                textDecoration: 'none', zIndex: 110, display: 'flex', alignItems: 'center', cursor: 'pointer',
                filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.55))',
                transition: 'transform 0.4s var(--ease-out)',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Logo height="clamp(40px, 6vw, 58px)" />
            </span>

            <nav className="tbx-desktop" style={{ alignItems: 'center', gap: '2.5rem' }}>
              {links.map(l => (
                l.hasDropdown ? (
                  <div key={l.label} style={{ position: 'relative' }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}>
                    <span onClick={() => navigateTo('/servicos')}
                      style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                      onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                      onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                      {l.label}
                      <span style={{ fontSize: '0.6rem', lineHeight: 1 }}>&#9662;</span>
                    </span>
                    {servicesOpen && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: '0.5rem' }}>
                        <div style={{
                          background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.06)', minWidth: '220px', padding: '0.5rem 0',
                        }}>
                          {serviceItems.map(s => (
                            <span key={s.label}
                              onClick={() => navigateTo(s.href, s.anchor)}
                              style={{
                                display: 'block', padding: '0.6rem 1rem', cursor: 'pointer',
                                color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                                fontSize: '0.75rem', fontWeight: 400, transition: 'color 0.2s',
                              }}
                              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                              {s.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <span key={l.label}
                    onClick={() => scrollTo(l.section!)}
                    style={linkStyle}
                    onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                    {l.label}
                  </span>
                )
              ))}
              <span onClick={() => scrollTo('cotacao')}
                style={{
                  padding: '0.45rem 1.2rem', cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.3)', background: 'none',
                  color: '#FFFFFF', fontWeight: 400, fontSize: '0.7rem',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  borderRadius: '2px', transition: 'border-color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)')}
                onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}>
                Cotação
              </span>
            </nav>

            <button className="tbx-hamburger" onClick={() => setMenuOpen(o => !o)}
              style={{
                flexDirection: 'column', gap: '5px', background: 'none', border: 'none',
                cursor: 'pointer', padding: '10px', alignItems: 'center', justifyContent: 'center', zIndex: 110,
              }}>
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translate(4.5px,4.5px)' : 'none' }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#fff', transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none' }} />
            </button>
          </div>

          <div className="tbx-mobile-drawer" style={{
            display: menuOpen ? 'flex' : 'none', flexDirection: 'column',
            backgroundColor: 'rgba(10,10,10,0.95)', padding: '0.5rem 1.5rem 1.5rem',
          }}>
            {links.map(l => (
              <div key={l.label}>
                <span onClick={() => l.hasDropdown ? navigateTo('/servicos') : scrollTo(l.section!)}
                  style={{
                    display: 'block', color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                    fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '1rem 0', borderBottom: l.hasDropdown ? 'none' : '1px solid rgba(255,255,255,0.06)',
                  }}>{l.label}</span>
                {l.hasDropdown && (
                  <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {serviceItems.map(s => (
                      <span key={s.label}
                        onClick={() => navigateTo(s.href, s.anchor)}
                        style={{
                          display: 'block', color: 'rgba(255,255,255,0.4)', cursor: 'pointer',
                          fontSize: '0.75rem', fontWeight: 400, padding: '0.5rem 0 0.5rem 1rem',
                        }}>{s.label}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <span onClick={() => scrollTo('cotacao')}
              style={{
                display: 'block', marginTop: '1rem', padding: '0.8rem', cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.3)', background: 'none',
                color: '#FFFFFF', fontWeight: 400, fontSize: '0.75rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                borderRadius: '2px', textAlign: 'center',
              }}>Cotação</span>
          </div>
        </div>
      </header>
    </>
  )
}

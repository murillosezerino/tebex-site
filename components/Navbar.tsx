'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

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
    { label: 'Transporte de Carga', href: '/servicos#transporte' },
    { label: 'Gestao de Risco', href: '/servicos#risco' },
    { label: 'Monitoramento 24/7', href: '/servicos#monitoramento' },
  ]

  const links = [
    { label: 'Sobre', href: isHome ? '#about' : '/#about' },
    { label: 'Serviços', href: '/servicos', hasDropdown: true },
    { label: 'Segurança', href: isHome ? '#seguranca' : '/#seguranca' },
  ]

  function navigate(href: string) {
    setMenuOpen(false)
    setServicesOpen(false)

    if (isHome && href.startsWith('#')) {
      history.pushState(null, '', href)
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.location.href = href
    }
  }

  const cotacaoHref = isHome ? '#cotacao' : '/#cotacao'

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '0.7rem',
    fontWeight: 400,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
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

      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{
          backgroundColor: scrolled || menuOpen ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          transition: 'background-color 0.3s, backdrop-filter 0.3s',
        }}>
          <div style={{
            maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
            height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <a href={isHome ? '#' : '/'} style={{ textDecoration: 'none', zIndex: 110, display: 'flex', alignItems: 'center' }}>
              <img src="/Logo.webp" alt="Tebex Log" style={{ height: '48px', width: 'auto', filter: 'invert(1) brightness(2)' }} />
            </a>

            {/* Desktop nav */}
            <nav className="tbx-desktop" style={{ alignItems: 'center', gap: '2.5rem' }}>
              {links.map(l => (
                l.hasDropdown ? (
                  <div
                    key={l.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a
                      href={l.href}
                      onClick={e => { e.preventDefault(); navigate(l.href) }}
                      style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                      onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                      onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                    >
                      {l.label}
                      <span style={{ fontSize: '0.6rem', lineHeight: 1 }}>&#9662;</span>
                    </a>

                    {servicesOpen && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        paddingTop: '0.5rem',
                      }}>
                        <div style={{
                          background: 'rgba(10,10,10,0.95)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          minWidth: '220px',
                          padding: '0.5rem 0',
                        }}>
                          {serviceItems.map(s => (
                            <a
                              key={s.label}
                              href={s.href}
                              onClick={e => { e.preventDefault(); navigate(s.href) }}
                              style={{
                                display: 'block',
                                padding: '0.6rem 1rem',
                                color: 'rgba(255,255,255,0.5)',
                                textDecoration: 'none',
                                fontSize: '0.75rem',
                                fontWeight: 400,
                                transition: 'color 0.2s',
                              }}
                              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                            >
                              {s.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={e => { e.preventDefault(); navigate(l.href) }}
                    style={linkStyle}
                    onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {l.label}
                  </a>
                )
              ))}
              <a
                href={cotacaoHref}
                onClick={e => { e.preventDefault(); navigate(cotacaoHref) }}
                style={{
                  padding: '0.45rem 1.2rem',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'none',
                  color: '#FFFFFF', fontWeight: 400, fontSize: '0.7rem',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  borderRadius: '2px', textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)')}
                onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
              >
                Cotacao
              </a>
            </nav>

            {/* Hamburger */}
            <button
              className="tbx-hamburger"
              onClick={() => setMenuOpen(o => !o)}
              style={{
                flexDirection: 'column', gap: '5px', background: 'none', border: 'none',
                cursor: 'pointer', padding: '10px', alignItems: 'center', justifyContent: 'center', zIndex: 110,
              }}
            >
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translate(4.5px,4.5px)' : 'none' }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#fff', transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none' }} />
            </button>
          </div>

          {/* Mobile drawer */}
          <div
            className="tbx-mobile-drawer"
            style={{
              display: menuOpen ? 'flex' : 'none',
              flexDirection: 'column',
              backgroundColor: 'rgba(10,10,10,0.95)',
              padding: '0.5rem 1.5rem 1.5rem',
            }}
          >
            {links.map(l => (
              <div key={l.label}>
                <a
                  href={l.href}
                  onClick={e => { e.preventDefault(); navigate(l.href) }}
                  style={{
                    display: 'block', color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                    fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '1rem 0', borderBottom: l.hasDropdown ? 'none' : '1px solid rgba(255,255,255,0.06)', cursor: 'pointer',
                  }}
                >
                  {l.label}
                </a>
                {l.hasDropdown && (
                  <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {serviceItems.map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={e => { e.preventDefault(); navigate(s.href) }}
                        style={{
                          display: 'block', color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          fontSize: '0.75rem', fontWeight: 400, padding: '0.5rem 0 0.5rem 1rem',
                        }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={cotacaoHref}
              onClick={e => { e.preventDefault(); navigate(cotacaoHref) }}
              style={{
                display: 'block', marginTop: '1rem', padding: '0.8rem',
                border: '1px solid rgba(255,255,255,0.3)', background: 'none',
                color: '#FFFFFF', fontWeight: 400, fontSize: '0.75rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                borderRadius: '2px', textDecoration: 'none', textAlign: 'center', cursor: 'pointer',
              }}
            >
              Cotacao
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

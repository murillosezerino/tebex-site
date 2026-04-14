'use client'


export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .tbx-footer-inner {
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1280px; margin: 0 auto; padding: 0 1.5rem;
          height: 60px;
        }
        .tbx-footer-links {
          display: flex; align-items: center; gap: 1.5rem;
        }
        .tbx-footer-links a {
          color: rgba(255,255,255,0.3); font-size: 0.7rem; font-weight: 400;
          text-decoration: none; transition: color 0.2s;
        }
        .tbx-footer-links a:hover { color: #fff; }
        @media (max-width: 767px) {
          .tbx-footer-inner {
            flex-direction: column; justify-content: center;
            height: auto; padding: 1.25rem 1.5rem; gap: 0.75rem;
            text-align: center;
          }
          .tbx-footer-links { justify-content: center; flex-wrap: wrap; gap: 1rem; }
        }
      `}</style>

      <footer
        style={{
          backgroundColor: 'var(--black)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="tbx-footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-dark.png" alt="Tebex Log" style={{ height: '24px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', fontWeight: 400 }}>
              &copy; {year}
            </span>
          </div>

          <div className="tbx-footer-links">
            <a href="/servicos">Serviços</a>
            <a href="/contato">Contato</a>
            <a href="/privacidade">Privacidade</a>
            <a href="/termos">Termos</a>
            <a href="/agregados">Agregados</a>
          </div>

          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', fontWeight: 400 }}>
            Pindamonhangaba — SP
          </span>
        </div>
      </footer>
    </>
  )
}

'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .tbx-footer-top {
          max-width: 1280px; margin: 0 auto; padding: 3rem 1.5rem 2rem;
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2.5rem;
        }
        .tbx-footer-col h4 {
          color: rgba(255,255,255,0.5); font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem;
        }
        .tbx-footer-col a, .tbx-footer-col p {
          color: rgba(255,255,255,0.35); font-size: 0.78rem; font-weight: 300;
          text-decoration: none; line-height: 1.8; display: block; transition: color 0.2s;
        }
        .tbx-footer-col a:hover { color: #fff; }
        .tbx-footer-bottom {
          max-width: 1280px; margin: 0 auto; padding: 1.25rem 1.5rem;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        @media (max-width: 767px) {
          .tbx-footer-top { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .tbx-footer-bottom {
            flex-direction: column; text-align: center; gap: 0.5rem;
          }
        }
      `}</style>

      <footer style={{ backgroundColor: 'var(--black)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Top section */}
        <div className="tbx-footer-top">
          {/* Brand */}
          <div className="tbx-footer-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-dark.png" alt="Tebex Log" style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '1rem' }} />
            <p>Transportadora nacional especializada em gestão de risco e monitoramento de cargas.</p>
          </div>

          {/* Links */}
          <div className="tbx-footer-col">
            <h4>Navegação</h4>
            <a href="/servicos">Serviços</a>
            <a href="/contato">Contato</a>
            <a href="/agregados">Agregados</a>
          </div>

          {/* Legal */}
          <div className="tbx-footer-col">
            <h4>Legal</h4>
            <a href="/privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
          </div>

          {/* Contact info */}
          <div className="tbx-footer-col">
            <h4>Contato</h4>
            <a href="tel:12997364365">(12) 99736-4365</a>
            <a href="mailto:juliana.soares@tebexlog.com.br">juliana.soares@tebexlog.com.br</a>
            <p>Pindamonhangaba — SP</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="tbx-footer-bottom">
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', fontWeight: 400 }}>
            &copy; {year} Tebex Log — CNPJ: 56.918.318/0001-16
          </span>
          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.65rem', fontWeight: 300 }}>
            RNTRC ativa · Seguro de carga · Cobertura nacional
          </span>
        </div>
      </footer>
    </>
  )
}

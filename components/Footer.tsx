'use client'

import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .tbx-footer {
          position: relative;
          background: linear-gradient(180deg, #060606 0%, #0A0A0A 60%, #050505 100%);
          border-top: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          isolation: isolate;
        }
        .tbx-footer::before {
          content: '';
          position: absolute;
          top: -1px; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,212,0,0.4), transparent);
        }
        .tbx-footer-glow {
          position: absolute;
          inset: -40% -10% auto -10%;
          height: 380px;
          background: radial-gradient(ellipse at 50% 0%, rgba(255,212,0,0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }
        .tbx-footer-watermark {
          position: absolute;
          left: 50%;
          bottom: -2.5rem;
          transform: translateX(-50%);
          width: 120%;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: screen;
        }
        .tbx-footer-watermark svg { width: 100%; height: auto; display: block; }

        .tbx-footer-top {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; padding: 4rem 1.5rem 2.5rem;
          display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 3rem;
        }
        .tbx-footer-col h4 {
          color: rgba(255,255,255,0.55); font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 1.1rem;
          position: relative; padding-left: 0.85rem;
        }
        .tbx-footer-col h4::before {
          content: ''; position: absolute; left: 0; top: 50%;
          width: 4px; height: 4px; background: var(--accent);
          border-radius: 50%; transform: translateY(-50%);
          box-shadow: 0 0 8px rgba(255,212,0,0.6);
        }
        .tbx-footer-col a, .tbx-footer-col p {
          color: rgba(255,255,255,0.4); font-size: 0.78rem; font-weight: 300;
          text-decoration: none; line-height: 1.85; display: block; transition: color 0.25s, transform 0.25s;
        }
        .tbx-footer-col a {
          position: relative;
          display: inline-flex; align-items: center; gap: 0.4rem;
        }
        .tbx-footer-col a::before {
          content: '→'; opacity: 0; margin-left: -0.85rem;
          transition: opacity 0.25s, margin-left 0.25s;
          color: var(--accent);
        }
        .tbx-footer-col a:hover { color: #fff; }
        .tbx-footer-col a:hover::before { opacity: 1; margin-left: 0; }

        .tbx-footer-brand-card {
          display: flex; flex-direction: column; gap: 1.1rem;
        }
        .tbx-footer-logo-wrap {
          padding: 0.85rem 1rem; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; align-self: flex-start;
          background: linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          backdrop-filter: blur(6px);
        }
        .tbx-footer-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.3rem 0.65rem; border-radius: 100px;
          background: rgba(255,212,0,0.08); border: 1px solid rgba(255,212,0,0.18);
          color: var(--accent); font-size: 0.62rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; align-self: flex-start;
        }
        .tbx-footer-tag-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
          box-shadow: 0 0 0 0 rgba(255,212,0,0.6);
          animation: tbx-pulse 2s infinite;
        }
        @keyframes tbx-pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,212,0,0.6); }
          70% { box-shadow: 0 0 0 6px rgba(255,212,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,212,0,0); }
        }

        .tbx-footer-bottom {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; padding: 1.5rem;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        @media (max-width: 900px) {
          .tbx-footer-top { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
          .tbx-footer-brand-card { grid-column: span 2; }
        }
        @media (max-width: 540px) {
          .tbx-footer-top { grid-template-columns: 1fr; }
          .tbx-footer-brand-card { grid-column: span 1; }
          .tbx-footer-bottom {
            flex-direction: column; text-align: center; gap: 0.5rem;
          }
        }
      `}</style>

      <footer className="tbx-footer">
        <div className="tbx-footer-glow" />

        {/* Giant ghost wordmark */}
        <div className="tbx-footer-watermark" aria-hidden="true">
          <Logo
            tebexColor="#FFFFFF"
            logColor="#FFFFFF"
            starColor="#FFFFFF"
            ariaLabel=""
          />
        </div>

        {/* Top section */}
        <div className="tbx-footer-top">
          {/* Brand */}
          <div className="tbx-footer-col tbx-footer-brand-card">
            <div className="tbx-footer-logo-wrap">
              <Logo height={28} />
            </div>
            <span className="tbx-footer-tag">
              <span className="tbx-footer-tag-dot" />
              Central 24/7 ativa
            </span>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '22rem' }}>
              Transportadora nacional especializada em gestão de risco e monitoramento de cargas.
            </p>
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
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem', fontWeight: 400 }}>
            &copy; {year} Tebex Log — CNPJ: 56.918.318/0001-16
          </span>
          <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: '0.65rem', fontWeight: 300 }}>
            RNTRC ativa · Seguro de carga · Cobertura nacional
          </span>
        </div>
      </footer>
    </>
  )
}

const services = [
  { icon: '🚛', title: 'Transporte de Carga', desc: 'Frota própria e agregados para cargas de todos os tamanhos. Fracionado ou fechado, com rastreamento em tempo real.', items: ['Carga fracionada e fechada', 'Coleta agendada ou sob demanda', 'Comprovante de entrega digital'] },
  { icon: '🛡️', title: 'Gestão de Risco', desc: 'Parceria com as principais gerenciadoras. Escolta armada, seguros personalizados e monitoramento contínuo.', items: ['Rastreamento via satélite 24/7', 'Escolta armada disponível', 'Seguros personalizados por carga'] },
  { icon: '📡', title: 'Monitoramento Total', desc: 'Central ativa 24 horas com controle de paradas, desvios e comunicação direta com motoristas em rota.', items: ['Central operacional 24/7', 'Controle de fadiga do motorista', 'Alertas e comunicação em tempo real'] },
]

export default function Services() {
  return (
    <section id="servicos" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '2rem', height: '2px', backgroundColor: '#FFD400' }} />
            <span style={{ color: '#FFD400', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Serviços</span>
            <div style={{ width: '2rem', height: '2px', backgroundColor: '#FFD400' }} />
          </div>
          <h2 className="font-brand" style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.05 }}>
            SERVIÇOS PARA QUEM<br />
            <span style={{ color: '#FFD400' }}>NÃO PODE PARAR.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
          {services.map((s, i) => (
            <div key={i} style={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: 'clamp(1.5rem, 4vw, 2rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '2.25rem', lineHeight: 1 }}>{s.icon}</div>
              <h3 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.75, flex: 1 }}>{s.desc}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {s.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#FFD400', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.825rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="#contato" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', backgroundColor: '#FFD400', color: '#0A0A0A', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none' }}>
            Solicitar cotação →
          </a>
        </div>
      </div>
    </section>
  )
}

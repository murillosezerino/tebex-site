// Strip de números — fundo amarelo, texto preto (regra manual no amarelo)
const stats = [
  { number: '24/7', label: 'Central de monitoramento' },
  { number: '100%', label: 'Frota rastreada' },
  { number: 'Nacional', label: 'Cobertura total' },
  { number: 'Zero', label: 'Tolerância ao risco' },
  { number: 'Própria', label: 'Frota + agregados' },
]

export default function StatsStrip() {
  const doubled = [...stats, ...stats]
  return (
    <section style={{ backgroundColor: '#FFD400', padding: '2.25rem 0', overflow: 'hidden' }}>
      <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {doubled.map((s, i) => (
          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', padding: '0 2.5rem', borderRight: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }}>
            <div>
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.number}</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(0,0,0,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

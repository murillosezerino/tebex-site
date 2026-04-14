'use client'

import { useState } from 'react'
import type { ChangeEvent, CSSProperties } from 'react'
import { ParallaxBg, Reveal } from './ParallaxProvider'

type FormState = {
  nome: string; tel: string; email: string
  origem: string; destino: string; carga: string; peso: string; obs: string
}

export default function FinalCTA() {
  const [f, setF] = useState<FormState>({
    nome: '', tel: '', email: '',
    origem: '', destino: '', carga: '', peso: '', obs: '',
  })

  const h = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [e.target.name]: e.target.value }))

  const sub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const m = [
      'Cotação Tebex Log', '',
      'Nome: ' + f.nome,
      'Tel: ' + f.tel, 'Email: ' + f.email, '',
      'Origem: ' + f.origem, 'Destino: ' + f.destino,
      'Carga: ' + f.carga, 'Peso: ' + f.peso,
      f.obs ? 'Obs: ' + f.obs : '',
    ].filter(Boolean).join('\n')
    window.open('https://wa.me/5512997364365?text=' + encodeURIComponent(m), '_blank')
  }

  const optStyle: CSSProperties = { background: '#1a1a1a', color: '#fff' }

  const inp: CSSProperties = {
    width: '100%', padding: '0.85rem 0.75rem',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 0,
    color: '#fff', fontSize: '0.9rem', fontWeight: 300, outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  const lbl: CSSProperties = {
    color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', display: 'block', fontWeight: 500,
  }

  return (
    <section id="cotacao" style={{
      backgroundColor: 'var(--black, #0A0A0A)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <ParallaxBg
        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
        speed={0.2}
        opacity={0.15}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.95) 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: 540, position: 'relative', zIndex: 1 }}>

        <Reveal>
          <div style={{
            color: 'var(--accent)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '1rem',
          }}>
            Cotação gratuita
          </div>

          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 200, lineHeight: 1.15, textAlign: 'center', margin: '0 0 0.75rem 0' }}>
            Solicitar cotação
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', fontWeight: 300, textAlign: 'center', margin: '0 0 3rem 0', lineHeight: 1.7 }}>
            Preencha e receba uma proposta personalizada.
          </p>
        </Reveal>

        <Reveal delay={0.2} direction="up">
          <form onSubmit={sub} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <span style={lbl}>Nome *</span>
                <input name="nome" value={f.nome} onChange={h} required placeholder="Seu nome" style={inp} />
              </div>
              <div>
                <span style={lbl}>Telefone *</span>
                <input name="tel" value={f.tel} onChange={h} required placeholder="(00) 00000-0000" style={inp} />
              </div>
              <div>
                <span style={lbl}>Email</span>
                <input name="email" type="email" value={f.email} onChange={h} placeholder="email@email.com" style={inp} />
              </div>
              <div>
                <span style={lbl}>Origem *</span>
                <input name="origem" value={f.origem} onChange={h} required placeholder="Cidade - UF" style={inp} />
              </div>
              <div>
                <span style={lbl}>Destino *</span>
                <input name="destino" value={f.destino} onChange={h} required placeholder="Cidade - UF" style={inp} />
              </div>
              <div>
                <span style={lbl}>Tipo de carga</span>
                <select name="carga" value={f.carga} onChange={h} style={{ ...inp, cursor: 'pointer', appearance: 'none' }}>
                  <option value="" style={optStyle}>Selecione...</option>
                  <option value="Fracionada" style={optStyle}>Fracionada LTL</option>
                  <option value="Fechada" style={optStyle}>Fechada FTL</option>
                  <option value="Alto valor" style={optStyle}>Alto valor</option>
                  <option value="Perigosa" style={optStyle}>Perigosa</option>
                  <option value="Outro" style={optStyle}>Outro</option>
                </select>
              </div>
              <div>
                <span style={lbl}>Peso</span>
                <input name="peso" value={f.peso} onChange={h} placeholder="Ex: 500 kg" style={inp} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <span style={lbl}>Observações</span>
                <textarea name="obs" value={f.obs} onChange={h} placeholder="Informações adicionais..." rows={3} style={{ ...inp, resize: 'vertical' }} />
              </div>
            </div>

            <button className="btn btn-accent" type="submit" style={{ width: '100%', marginTop: '0.5rem' }}>
              Enviar pelo WhatsApp
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  )
}

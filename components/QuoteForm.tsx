'use client'
import { useState } from 'react'
import type { CSSProperties, ChangeEvent } from 'react'

type FormState = {
  nome: string
  empresa: string
  tel: string
  email: string
  origem: string
  destino: string
  carga: string
  peso: string
  obs: string
}

export default function QuoteForm() {
  const [f, setF] = useState<FormState>({
    nome: '', empresa: '', tel: '', email: '',
    origem: '', destino: '', carga: '', peso: '', obs: '',
  })

  const h = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [e.target.name]: e.target.value }))

  const sub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const m = [
      'Cotação Tebex Log', '',
      'Nome: ' + f.nome,
      'Empresa: ' + f.empresa,
      'Tel: ' + f.tel,
      'Email: ' + f.email, '',
      'Origem: ' + f.origem,
      'Destino: ' + f.destino,
      'Carga: ' + f.carga,
      'Peso: ' + f.peso,
      f.obs ? 'Obs: ' + f.obs : '',
    ].filter(Boolean).join('\n')
    window.open('https://wa.me/5512997364365?text=' + encodeURIComponent(m), '_blank')
  }

  const inp: CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '0.875rem',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const row: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
    gap: '1rem',
  }

  const lbl = (t: string) => (
    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
      {t}
    </div>
  )

  return (
    <section id='cotacao' style={{ backgroundColor: '#0D0D0D', padding: 'clamp(4rem,8vw,7rem) 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 className='font-brand' style={{ color: '#fff', fontSize: 'clamp(1.75rem,4vw,3rem)', textAlign: 'center', marginBottom: '2rem' }}>
          RECEBA SUA <span style={{ color: '#FFD400' }}>COTAÇÃO.</span>
        </h2>
        <form onSubmit={sub} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={row}>
            <div>{lbl('Nome *')}<input name='nome' value={f.nome} onChange={h} required placeholder='Seu nome' style={inp} /></div>
            <div>{lbl('Empresa')}<input name='empresa' value={f.empresa} onChange={h} placeholder='Empresa' style={inp} /></div>
          </div>
          <div style={row}>
            <div>{lbl('Telefone *')}<input name='tel' value={f.tel} onChange={h} required placeholder='(00) 00000-0000' style={inp} /></div>
            <div>{lbl('Email')}<input name='email' type='email' value={f.email} onChange={h} placeholder='email@email.com' style={inp} /></div>
          </div>
          <div style={row}>
            <div>{lbl('Origem *')}<input name='origem' value={f.origem} onChange={h} required placeholder='Cidade - UF' style={inp} /></div>
            <div>{lbl('Destino *')}<input name='destino' value={f.destino} onChange={h} required placeholder='Cidade - UF' style={inp} /></div>
          </div>
          <div style={row}>
            <div>
              {lbl('Tipo de carga *')}
              <select name='carga' value={f.carga} onChange={h} required style={{ ...inp, cursor: 'pointer' }}>
                <option value='' style={{ background: '#1a1a1a', color: '#fff' }}>Selecione...</option>
                <option value='Fracionada' style={{ background: '#1a1a1a', color: '#fff' }}>Fracionada LTL</option>
                <option value='Fechada' style={{ background: '#1a1a1a', color: '#fff' }}>Fechada FTL</option>
                <option value='Alto valor' style={{ background: '#1a1a1a', color: '#fff' }}>Alto valor</option>
                <option value='Perigosa' style={{ background: '#1a1a1a', color: '#fff' }}>Perigosa</option>
                <option value='Outro' style={{ background: '#1a1a1a', color: '#fff' }}>Outro</option>
              </select>
            </div>
            <div>{lbl('Peso')}<input name='peso' value={f.peso} onChange={h} placeholder='Ex: 500 kg' style={inp} /></div>
          </div>
          <div>
            {lbl('Observações')}
            <textarea name='obs' value={f.obs} onChange={h} placeholder='Informações adicionais...' rows={3} style={{ ...inp, resize: 'vertical' }} />
          </div>
          <button
            type='submit'
            style={{ padding: '1rem 2rem', backgroundColor: '#FFD400', color: '#0A0A0A', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', borderRadius: '6px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

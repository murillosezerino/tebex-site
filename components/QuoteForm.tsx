"use client"

import { useState } from "react"

export default function QuoteForm() {
  const [form, setForm] = useState({
    nome: "", empresa: "", telefone: "", email: "",
    origem: "", destino: "", tipoCarga: "", peso: "", observacoes: "",
  })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const lines = [
      "*Nova solicitacao de cotacao - Tebex Log*",
      "",
      "*Nome:* " + form.nome,
      "*Empresa:* " + form.empresa,
      "*Telefone:* " + form.telefone,
      "*Email:* " + form.email,
      "",
      "*Origem:* " + form.origem,
      "*Destino:* " + form.destino,
      "*Tipo de carga:* " + form.tipoCarga,
      "*Peso:* " + form.peso,
      form.observacoes ? "*Obs:* " + form.observacoes : "",
    ].filter(Boolean).join("\n")
    window.open("https://wa.me/5512997364365?text=" + encodeURIComponent(lines), "_blank")
  }

  const inp = { width: "100%", padding: "0.75rem 1rem", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "6px", color: "#FFFFFF", fontSize: "0.875rem", fontFamily: "Montserrat, sans-serif", outline: "none", boxSizing: "border-box" }
  const lbl = { display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }
  const row = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "1.25rem" }

  return (
    <section id="cotacao" style={{ backgroundColor: "#0D0D0D", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <h2 className="font-brand" style={{ color: "#FFFFFF", fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.05, marginBottom: "0.875rem" }}>
            RECEBA SUA <span style={{ color: "#FFD400" }}>COTACAO AGORA.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.8 }}>
            Preencha o formulario e receba a cotacao direto no WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={row}>
            <div><label style={lbl}>Nome *</label><input name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome" style={inp} /></div>
            <div><label style={lbl}>Empresa</label><input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da empresa" style={inp} /></div>
          </div>
          <div style={row}>
            <div><label style={lbl}>Telefone *</label><input name="telefone" value={form.telefone} onChange={handleChange} required placeholder="(00) 00000-0000" style={inp} /></div>
            <div><label style={lbl}>E-mail</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" style={inp} /></div>
          </div>
          <div style={row}>
            <div><label style={lbl}>Origem *</label><input name="origem" value={form.origem} onChange={handleChange} required placeholder="Ex: Sao Paulo - SP" style={inp} /></div>
            <div><label style={lbl}>Destino *</label><input name="destino" value={form.destino} onChange={handleChange} required placeholder="Ex: Rio de Janeiro - RJ" style={inp} /></div>
          </div>
          <div style={row}>
            <div>
              <label style={lbl}>Tipo de carga *</label>
              <select name="tipoCarga" value={form.tipoCarga} onChange={handleChange} required style={{ ...inp, cursor: "pointer" }}>
                <option value="" style={{ backgroundColor: "#1a1a1a" }}>Selecione...</option>
                <option value="Carga fracionada (LTL)" style={{ backgroundColor: "#1a1a1a" }}>Carga fracionada (LTL)</option>
                <option value="Carga fechada (FTL)" style={{ backgroundColor: "#1a1a1a" }}>Carga fechada (FTL)</option>
                <option value="Carga de alto valor" style={{ backgroundColor: "#1a1a1a" }}>Carga de alto valor</option>
                <option value="Carga perigosa" style={{ backgroundColor: "#1a1a1a" }}>Carga perigosa</option>
                <option value="Outro" style={{ backgroundColor: "#1a1a1a" }}>Outro</option>
              </select>
            </div>
            <div><label style={lbl}>Peso estimado</label><input name="peso" value={form.peso} onChange={handleChange} placeholder="Ex: 500 kg" style={inp} /></div>
          </div>
          <div>
            <label style={lbl}>Observacoes</label>
            <textarea name="observacoes" value={form.observacoes} onChange={handleChange} placeholder="Informacoes adicionais..." rows={4} style={{ ...inp, resize: "vertical", minHeight: "100px" }} />
          </div>
          <button type="submit" style={{ padding: "1rem 2rem", backgroundColor: "#FFD400", color: "#0A0A0A", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "6px", border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
            Enviar pelo WhatsApp
          </button>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
            * Campos obrigatorios. Voce sera redirecionado para o WhatsApp.
          </p>
        </form>
      </div>
    </section>
  )
}
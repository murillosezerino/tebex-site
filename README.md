<div align="center">
  <h1>TEBEX LOG — Site Institucional</h1>
  <p>Site institucional da Tebex Log, transportadora nacional especializada em transporte terrestre e gestão de risco.</p>

  ![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
  ![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)
</div>

---

## Visão Geral

Site institucional construído com **Next.js 16 App Router**, seguindo 100% o **Manual de Identidade Visual Tebex 2025**.

### Paleta de Cores (Manual)
| Token | Hex | Uso |
|-------|-----|-----|
| Black | `#0A0A0A` | Background principal |
| Yellow | `#FFD400` | Destaque, CTAs, strips |
| White | `#FFFFFF` | Texto sobre fundos escuros |
| Blue | `#0041E2` | Cor complementar |
| Green | `#32B700` | Cor complementar |
| Red | `#F22800` | Cor complementar |

### Tipografia
- **Títulos:** Owners XWide Bold *(pendente — solicitar à agência)*
- **Corpo:** Montserrat (Google Fonts) — pesos 100–900

---

## Stack

- **Framework:** Next.js 16.2 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Inline styles + CSS variables (sem conflito com DaisyUI)
- **Deploy:** Vercel
- **SEO:** Metadata API + JSON-LD + Sitemap automático

---

## Estrutura do Projeto

```
tebex-site/
├── app/
│   ├── layout.tsx          # Layout raiz — metadata, JSON-LD, fontes
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tokens de marca + utilitários
│   ├── sitemap.ts          # Sitemap automático
│   ├── robots.ts           # robots.txt
│   └── servicos/
│       └── page.tsx        # Página de serviços
├── components/
│   ├── Navbar.tsx          # Header fixo com sidebar mobile
│   ├── Hero.tsx            # Hero split layout
│   ├── StatsStrip.tsx      # Strip de números animada
│   ├── Features.tsx        # Carrossel de diferenciais
│   ├── Credibility.tsx     # Segmentos atendidos
│   ├── BigFeature.tsx      # Central de monitoramento
│   ├── Services.tsx        # Cards de serviços
│   ├── Technology.tsx      # Seção de tecnologia
│   ├── FinalCTA.tsx        # CTA final split
│   └── Footer.tsx          # Footer com links e contatos
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── favicon.ico         # ← adicionar
│   ├── og-image.jpg        # ← adicionar (1200x630px)
│   └── fonts/
│       └── OwnersXWide-Bold.woff2  # ← solicitar à agência
├── .env.example            # Variáveis de ambiente necessárias
├── next.config.ts          # Config Next.js (cache, headers, compressão)
├── tailwind.config.ts      # Tokens de marca no Tailwind
└── SEO_E_CONFIGURACAO.md   # Guia completo de SEO e deploy
```

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/tebex-site.git
cd tebex-site

# Instale as dependências (Node.js 20 LTS recomendado)
npm install

# Rode em desenvolvimento
npm run dev -- --webpack

# Acesse
open http://localhost:3000
```

> **Atenção:** Use Node.js v20 LTS. Versões v22+ causam conflitos com o Next.js no Windows.

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` baseado no `.env.example`:

```bash
cp .env.example .env.local
```

Preencha com os valores reais antes do deploy.

---

## Deploy (Vercel)

```bash
# Deploy de produção
npx vercel --prod
```

Ou conecte o repositório GitHub diretamente no [painel da Vercel](https://vercel.com).

### Configurar domínio próprio
1. Acesse **Settings → Domains** no projeto Vercel
2. Adicione `tebexlog.com.br` e `www.tebexlog.com.br`
3. Configure os registros DNS conforme instruído

---

## SEO

| Item | Status |
|------|--------|
| Metadata (title, description, keywords) | ✅ |
| Open Graph (WhatsApp, Facebook, LinkedIn) | ✅ |
| JSON-LD (Organization, LocalBusiness, Service) | ✅ |
| Sitemap automático `/sitemap.xml` | ✅ |
| robots.txt `/robots.txt` | ✅ |
| Canonical URLs | ✅ |
| PWA Manifest | ✅ |
| Google Search Console | ⏳ Configurar após deploy |
| Google Analytics GA4 | ⏳ Configurar após deploy |
| og-image.jpg | ⏳ Aguardando arte |
| Fonte Owners XWide Bold | ⏳ Aguardando agência |

---

## Pendências do Cliente

| Item | Descrição | Prioridade |
|------|-----------|------------|
| `Owners XWide Bold` | Arquivo de fonte da identidade visual | Alta |
| Logo SVG/PNG | Versão branca (fundo escuro) e preta (fundo claro) | Alta |
| `og-image.jpg` | Imagem 1200×630px para compartilhamentos | Alta |
| Favicon | `.ico` + PNGs 16/32/180/192/512px | Média |
| Fotos de frota | Imagens reais para substituir os SVGs ilustrativos | Média |
| Domínio | Apontar DNS para a Vercel após deploy | Alta |

---

## Desenvolvido por

**CZ Lab** — Desenvolvimento Web & AI Products  
Murillo Sezerino · [murillosezerino.com](https://murillosezerino.com)

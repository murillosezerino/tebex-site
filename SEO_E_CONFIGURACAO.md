# SEO, Google e Escalonamento — Tebex Log

## ✅ O que já está implementado

### SEO Técnico
- `metadata` completo em todas as páginas (title, description, keywords)
- Open Graph tags (WhatsApp, Facebook, LinkedIn)
- Twitter/X cards
- JSON-LD: Organization, LocalBusiness, Service
- `sitemap.xml` automático (Next.js gera em `/sitemap.xml`)
- `robots.txt` automático (Next.js gera em `/robots.txt`)
- Canonical URLs em todas as páginas
- `lang="pt-BR"` no HTML
- Headers de segurança (X-Frame-Options, CSP, etc.)
- Cache headers para assets estáticos (1 ano)
- `manifest.json` para PWA / instalação no celular
- `viewport` e `theme-color` corretos

### Performance
- `compress: true` no Next.js
- `poweredByHeader: false` (não expõe tecnologia)
- Otimização de imagens (WebP + AVIF automático)
- `preconnect` para Google Fonts
- Redirects configurados

---

## ⚠️ O que você precisa fazer agora

### 1. Domínio — URGENTE
Substitua `https://www.tebexlog.com.br` pelo domínio real em:
- `app/layout.tsx` → constante `SITE_URL`
- `app/servicos/page.tsx` → constante `SITE_URL`
- `app/sitemap.ts` → constante `SITE_URL`
- `app/robots.ts` → constante `SITE_URL`
- `next.config.ts` → redirects se necessário

### 2. Google Search Console
1. Acessa: https://search.google.com/search-console
2. Clica "Adicionar propriedade" → insere seu domínio
3. Escolhe verificação por "Tag HTML"
4. Copia o código (ex: `abc123xyz`)
5. Cola em `app/layout.tsx` no campo:
   ```
   verification: { google: 'COLE_SEU_CODIGO_AQUI' }
   ```
6. Faz deploy e clica "Verificar" no Search Console
7. Depois vai em "Sitemaps" e adiciona: `https://seudominio.com.br/sitemap.xml`

### 3. Google Analytics (GA4)
1. Acessa: https://analytics.google.com
2. Cria conta → cria propriedade → gera o ID (ex: `G-XXXXXXXXXX`)
3. Instala no projeto:
   ```bash
   npm install @next/third-parties
   ```
4. Adiciona em `app/layout.tsx`:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   // dentro do <body>:
   <GoogleAnalytics gaId="G-XXXXXXXXXX" />
   ```

### 4. Imagens obrigatórias (pasta /public)
Cria e coloca estes arquivos em `/public/`:

| Arquivo | Tamanho | Uso |
|---------|---------|-----|
| `og-image.jpg` | 1200×630px | WhatsApp / redes sociais |
| `favicon.ico` | 32×32 | Aba do navegador |
| `icon-16.png` | 16×16 | Favicon pequeno |
| `icon-32.png` | 32×32 | Favicon médio |
| `apple-touch-icon.png` | 180×180 | iPhone home screen |
| `icon-192.png` | 192×192 | Android PWA |
| `icon-512.png` | 512×512 | Android PWA splash |
| `logo-white.png` | 400×auto | JSON-LD / compartilhamentos |

**Dica:** Usa o Figma ou Canva para exportar a logo da Tebex nos tamanhos certos.

### 5. WhatsApp Business
Para o botão de cotação funcionar corretamente:
1. Cria uma conta no WhatsApp Business
2. Confirma que o número `(12) 99736-4365` está ativo
3. O link atual já está pré-configurado:
   `https://wa.me/5512997364365?text=...`

---

## 🚀 Escalonamento — Próximos passos

### Deploy recomendado: Vercel
```bash
npx vercel --prod
```
- CDN global automático
- HTTPS gratuito
- Preview deployments para cada PR
- Analytics integrado

### Domínio próprio na Vercel
1. Compra o domínio (ex: Registro.br, GoDaddy, Cloudflare)
2. No painel Vercel → Settings → Domains → Add Domain
3. Aponta os DNS conforme instruído

### Futuras páginas para SEO (criar quando tiver conteúdo)
- `/blog` — artigos sobre logística (forte para SEO orgânico)
- `/regioes/sao-paulo` — pages por cidade/estado
- `/sobre` — página institucional completa
- `/faq` — perguntas frequentes com FAQ schema

### Core Web Vitals — monitorar
Acessa: https://pagespeed.web.dev e testa o domínio.
Metas:
- LCP < 2.5s
- FID < 100ms  
- CLS < 0.1

---

## 📊 Palavras-chave prioritárias para ranquear

| Palavra-chave | Volume est. | Dificuldade |
|--------------|-------------|-------------|
| transportadora nacional | Alto | Alta |
| transporte de carga SP | Médio | Média |
| gestão de risco logístico | Médio | Baixa |
| rastreamento de carga | Médio | Média |
| frete carga fracionada | Médio | Baixa |
| transportadora com escolta | Baixo | Muito baixa |

**Estratégia:** Focar primeiro nas de dificuldade baixa/média para ganhar autoridade.

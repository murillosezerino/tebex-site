import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Tebex Log',
  description: 'Saiba como a Tebex Log coleta, usa e protege suas informações pessoais.',
  alternates: { canonical: '/privacidade' },
}

const sections = [
  {
    title: '1. Informações que coletamos',
    content: `Coletamos informações fornecidas diretamente por você ao preencher formulários de cotação, entrar em contato conosco ou utilizar nossos serviços. Isso inclui: nome completo, empresa, e-mail, telefone, endereços de origem e destino de cargas, e informações sobre o tipo de serviço solicitado.

Também podemos coletar automaticamente informações de navegação como endereço IP, tipo de navegador, páginas visitadas e tempo de acesso, por meio de cookies e tecnologias similares.`,
  },
  {
    title: '2. Como usamos suas informações',
    content: `Utilizamos suas informações para: processar e responder solicitações de cotação; fornecer os serviços contratados; enviar comunicações relacionadas aos serviços; melhorar nosso site e atendimento; cumprir obrigações legais e regulatórias.

Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing.`,
  },
  {
    title: '3. Compartilhamento de dados',
    content: `Seus dados podem ser compartilhados com: parceiros operacionais necessários para a prestação do serviço de transporte; autoridades públicas quando exigido por lei; prestadores de serviços de tecnologia que apoiam nossa operação, sempre sob acordos de confidencialidade.`,
  },
  {
    title: '4. Segurança dos dados',
    content: `Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL/TLS para transmissão de dados e controles de acesso internos.`,
  },
  {
    title: '5. Seus direitos (LGPD)',
    content: `Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a: confirmar a existência de tratamento de dados; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação de dados desnecessários; revogar o consentimento a qualquer momento.

Para exercer seus direitos, entre em contato pelo e-mail: juliana.soares@tebexlog.com.br`,
  },
  {
    title: '6. Cookies',
    content: `Utilizamos cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, porém algumas funcionalidades do site podem ser afetadas. Os cookies utilizados são: cookies essenciais para funcionamento do site; cookies analíticos para entender o uso do site (Google Analytics).`,
  },
  {
    title: '7. Retenção de dados',
    content: `Mantemos suas informações pelo tempo necessário para prestar os serviços solicitados e cumprir obrigações legais. Dados de cotações não concretizadas são mantidos por até 90 dias. Dados de contratos são mantidos conforme exigências fiscais e legais aplicáveis.`,
  },
  {
    title: '8. Contato',
    content: `Para dúvidas sobre esta política ou para exercer seus direitos, entre em contato:\n\nTebex Log\nE-mail: juliana.soares@tebexlog.com.br\nTelefone: (12) 99736-4365`,
  },
]

export default function PrivacidadePage() {
  return (
    <main style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ paddingTop: '68px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(4rem, 8vw, 6rem) 1.5rem' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem' }}>Início</a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
            <span style={{ color: '#FFD400', fontSize: '0.8rem' }}>Política de Privacidade</span>
          </div>

          <h1 className="font-brand" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05, marginBottom: '0.875rem' }}>
            POLÍTICA DE<br /><span style={{ color: '#FFD400' }}>PRIVACIDADE.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '3rem' }}>
            Última atualização: abril de 2025
          </p>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '3rem', padding: '1.25rem 1.5rem', backgroundColor: 'rgba(255,212,0,0.06)', border: '1px solid rgba(255,212,0,0.2)', borderRadius: 8 }}>
            A Tebex Log está comprometida com a proteção de seus dados pessoais. Esta política descreve como coletamos, usamos e protegemos suas informações de acordo com a <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h2 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.875rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {s.title}
                </h2>
                {s.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '0.875rem' }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

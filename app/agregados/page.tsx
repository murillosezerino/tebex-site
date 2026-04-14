import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tratamento de Dados — Fornecedores e Agregados | Tebex Log',
  description: 'Saiba como a Tebex Log trata os dados pessoais de motoristas agregados, fornecedores e prestadores de serviço.',
  alternates: { canonical: '/agregados' },
}

const sections = [
  {
    title: '1. Objetivo',
    content: `Esta política descreve como a Tebex Log trata os dados pessoais de motoristas agregados, fornecedores e prestadores de serviço, em conformidade com a Lei Geral de Proteção de Dados — LGPD (Lei 13.709/2018).`,
  },
  {
    title: '2. Dados pessoais coletados',
    content: `A Tebex Log pode coletar as seguintes categorias de dados pessoais:

• Dados de identificação: nome completo, CPF, RG, CNH (categoria e validade), RNTRC, data de nascimento, estado civil, filiação.

• Dados de contato: endereço residencial, telefone, e-mail.

• Dados do veículo: placa, RENAVAM, chassi, ano/modelo, tipo de carroceria, CRLV.

• Dados financeiros: dados bancários para pagamento, dados de faturamento.

• Dados de operação: geolocalização em tempo real (rastreamento via satélite), imagens de câmeras embarcadas, registros de jornada, dados de telemetria.

• Dados de compliance: antecedentes criminais, consultas de crédito, certidões negativas, histórico de sinistralidade.

• Dados biométricos: fotografia facial para verificação de identidade.`,
  },
  {
    title: '3. Finalidades do tratamento',
    content: `Os dados pessoais são tratados para as seguintes finalidades:

• Cadastro e qualificação de motoristas e fornecedores;
• Execução do contrato de prestação de serviço;
• Gestão de risco e gerenciamento logístico;
• Rastreamento e monitoramento em tempo real;
• Controle de fadiga e distração (câmeras com IA);
• Cumprimento de obrigações legais e regulatórias (ANTT, seguradoras);
• Prevenção a fraudes e segurança da carga;
• Comunicação operacional;
• Avaliação de desempenho;
• Proteção do crédito.`,
  },
  {
    title: '4. Base legal (LGPD)',
    content: `O tratamento dos dados pessoais está fundamentado nas seguintes bases legais previstas na LGPD:

• Execução de contrato ou de procedimentos preliminares relacionados a contrato (art. 7º, V);
• Cumprimento de obrigação legal ou regulatória pelo controlador (art. 7º, II);
• Legítimo interesse do controlador (art. 7º, IX);
• Proteção do crédito (art. 7º, X);
• Proteção da vida ou da incolumidade física do titular ou de terceiro (art. 7º, VII) — aplicável ao monitoramento de fadiga e distração.`,
  },
  {
    title: '5. Compartilhamento de dados',
    content: `Os dados pessoais podem ser compartilhados com as seguintes categorias de destinatários, sempre sob acordos de confidencialidade:

• Gerenciadoras de risco — para aprovação de viagens;
• Seguradoras — para emissão e gestão de apólices;
• Embarcadores/clientes — dados de rastreamento da carga;
• Órgãos reguladores — ANTT, Receita Federal;
• Prestadores de tecnologia — plataformas de rastreamento, sistemas de gestão.`,
  },
  {
    title: '6. Transferência internacional',
    content: `Seus dados podem ser armazenados em servidores no exterior por prestadores de serviços de tecnologia (cloud computing), sempre em conformidade com o art. 33 da LGPD, que estabelece as condições para a transferência internacional de dados pessoais.`,
  },
  {
    title: '7. Segurança dos dados',
    content: `A Tebex Log adota medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Entre as medidas adotadas estão: criptografia de dados em trânsito e em repouso, controle de acesso baseado em perfis, monitoramento de logs de acesso, backups periódicos e treinamento contínuo da equipe sobre proteção de dados.`,
  },
  {
    title: '8. Retenção dos dados',
    content: `Os dados pessoais são mantidos pelos seguintes prazos:

• Dados contratuais: mantidos por 5 (cinco) anos após o encerramento do contrato, conforme obrigações fiscais e trabalhistas aplicáveis;
• Dados de rastreamento: mantidos por 90 (noventa) dias;
• Imagens de câmeras embarcadas: mantidas por 30 (trinta) dias, exceto em caso de sinistro, quando serão preservadas pelo tempo necessário à apuração.`,
  },
  {
    title: '9. Direitos do titular',
    content: `Conforme a LGPD, você tem direito a: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos; portabilidade dos dados; revogação do consentimento; e informação sobre o compartilhamento de dados.

Para exercer seus direitos, entre em contato pelo e-mail: juliana.soares@tebexlog.com.br`,
  },
  {
    title: '10. Incidentes de segurança',
    content: `Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a Tebex Log comunicará o titular e a Autoridade Nacional de Proteção de Dados (ANPD) em prazo razoável, conforme disposto no art. 48 da LGPD.`,
  },
  {
    title: '11. Atualizações',
    content: `Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. A versão vigente estará sempre disponível nesta página.`,
  },
  {
    title: '12. Contato',
    content: `Para dúvidas sobre esta política ou para exercer seus direitos:\n\nTebex Log\nEncarregado de Dados (DPO): juliana.soares@tebexlog.com.br\nTelefone: (12) 99736-4365`,
  },
]

export default function AgregadosPage() {
  return (
    <main style={{ backgroundColor: 'var(--black)', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ backgroundColor: 'var(--black)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(6rem, 10vw, 10rem) 1.5rem clamp(4rem, 8vw, 6rem)' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Início</Link>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.65rem' }}>›</span>
            <span style={{ color: 'var(--gray)', fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Fornecedores e Agregados</span>
          </div>

          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '0.875rem' }}>
            Tratamento de dados.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', marginBottom: '2rem' }}>
            Última atualização: abril de 2025
          </p>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '3rem' }}>
            A Tebex Log está comprometida com a transparência no tratamento de dados pessoais. Este documento descreve como coletamos, utilizamos e protegemos os dados de motoristas agregados, fornecedores e prestadores de serviço, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h2 style={{ color: 'var(--white)', fontWeight: 400, fontSize: '1.1rem', marginBottom: '0.875rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {s.title}
                </h2>
                {s.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '0.875rem' }}>
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

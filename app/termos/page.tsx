import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termos de Uso | Tebex Log',
  description: 'Leia os termos e condições de uso dos serviços da Tebex Log.',
  alternates: { canonical: '/termos' },
}

const sections = [
  { title: '1. Aceitação dos termos', content: `Ao acessar e usar este site, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, não utilize nossos serviços. A Tebex Log reserva o direito de atualizar estes termos a qualquer momento, com publicação da nova versão nesta página.` },
  { title: '2. Uso do site', content: `Este site destina-se a fornecer informações sobre os serviços de transporte e logística da Tebex Log e permitir solicitações de cotação. É vedado: usar o site para fins ilegais; transmitir vírus ou códigos maliciosos; tentar acessar áreas restritas sem autorização; coletar dados de outros usuários sem consentimento.` },
  { title: '3. Serviços de transporte', content: `A contratação dos serviços de transporte está sujeita a contrato específico firmado entre o cliente e a Tebex Log. As cotações fornecidas pelo site ou pelo WhatsApp são estimativas e podem variar conforme análise detalhada da operação. Prazos e valores definitivos são estabelecidos no contrato de prestação de serviços.` },
  { title: '4. Seguro e responsabilidade sobre cargas', content: `Todas as remessas transportadas pela Tebex Log são cobertas por seguro, conforme condições estabelecidas em contrato. A responsabilidade por danos, avarias ou extravios segue os termos da apólice de seguro vigente para a operação contratada.\n\nEventuais reclamações referentes a sinistros devem ser formalizadas pelo cliente em até 72 (setenta e duas) horas após a ocorrência ou a entrega da carga, por meio dos canais de atendimento da Tebex Log. O não cumprimento deste prazo poderá comprometer a análise e o ressarcimento.` },
  { title: '5. Comunicação e notificações', content: `A Tebex Log poderá entrar em contato com o usuário por meio de e-mail, telefone ou WhatsApp para comunicações relacionadas à prestação de serviços, incluindo: confirmações de cotação e agendamento, atualizações sobre o status de transporte, notificações operacionais e informações relevantes sobre a conta ou contrato. Essas comunicações são consideradas parte integrante do serviço e não constituem spam ou comunicação de marketing não solicitada.` },
  { title: '6. Responsabilidade', content: `A Tebex Log não se responsabiliza por: danos indiretos decorrentes do uso do site; indisponibilidade temporária do site; imprecisões em cotações automáticas. A responsabilidade sobre cargas transportadas é regulada pelo contrato de serviço e apólice de seguro vigente.` },
  { title: '7. Propriedade intelectual', content: `Todo o conteúdo deste site, incluindo textos, imagens, logotipos, marcas e código, é propriedade da Tebex Log ou de seus licenciadores. É vedada a reprodução, distribuição ou uso comercial sem autorização prévia por escrito.` },
  { title: '8. Links externos', content: `Este site pode conter links para sites de terceiros. A Tebex Log não tem controle sobre o conteúdo desses sites e não se responsabiliza por suas práticas de privacidade ou conteúdo.` },
  { title: '9. Legislação aplicável', content: `Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de Pindamonhangaba — SP para dirimir quaisquer controvérsias decorrentes destes termos.` },
  { title: '10. Contato', content: `Dúvidas sobre estes termos:\n\nTebex Log\nE-mail: juliana.soares@tebexlog.com.br\nTelefone: (12) 99736-4365` },
]

export default function TermosPage() {
  return (
    <main style={{ backgroundColor: 'var(--black)', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ backgroundColor: 'var(--black)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(6rem, 10vw, 10rem) 1.5rem clamp(4rem, 8vw, 6rem)' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Início</Link>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.65rem' }}>›</span>
            <span style={{ color: 'var(--gray)', fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Termos de Uso</span>
          </div>

          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '0.875rem' }}>
            Termos de uso.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', marginBottom: '3rem' }}>
            Última atualização: abril de 2025
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h2 style={{ color: 'var(--white)', fontWeight: 400, fontSize: '1.1rem', marginBottom: '0.875rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {s.title}
                </h2>
                {s.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '0.875rem' }}>{para}</p>
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

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import Credibility from '@/components/Credibility'
import BigFeature from '@/components/BigFeature'
import Services from '@/components/Services'
import Technology from '@/components/Technology'
import QuoteForm from '@/components/QuoteForm'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <Credibility />
      <BigFeature />
      <Services />
      <Technology />
      <QuoteForm />
      <FinalCTA />
      <Footer />
    </main>
  )
}

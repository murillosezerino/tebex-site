import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBand from '@/components/TrustBand'
import StatsStrip from '@/components/StatsStrip'
import Credibility from '@/components/Credibility'
import ServicesBanner from '@/components/ServicesBanner'
import Features from '@/components/Features'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBand />
      <StatsStrip />
      <Credibility />
      <ServicesBanner />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  )
}

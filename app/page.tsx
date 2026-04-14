import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import Credibility from '@/components/Credibility'
import Services from '@/components/Services'
import Features from '@/components/Features'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <Credibility />
      <Services />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  )
}

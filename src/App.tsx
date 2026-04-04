import { Header } from './sections/Header'
import { SEO } from './components/SEO'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Collections } from './sections/Collections'
import { Authority } from './sections/Authority'
import { Contact } from './sections/Contact'
import { Testimonials } from './sections/Testimonials'
import { Footer } from './sections/Footer'
import { WhatsAppButtonFloat } from './components/WhatsAppButtonFloat'

function App() {
  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <About />
      <Collections />
      <Authority />
      <Testimonials />
      <Contact />
      < Footer />
      <WhatsAppButtonFloat/>
    </>
  )
}

export default App
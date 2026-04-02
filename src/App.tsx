import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Collections } from './sections/Collections'
import { Authority } from './sections/Authority'
import { Contact } from './sections/Contact'
import { WhatsAppButtonFloat } from './components/WhatsAppButtonFloat'
import { SEO } from './components/SEO'

function App() {
  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <Collections />
      <Authority />
      <Contact />
      <WhatsAppButtonFloat />
    </>
  )
}

export default App
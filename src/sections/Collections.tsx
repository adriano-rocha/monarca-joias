import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    image: '/images/alliances.jpg',
    name: 'Par de Alianças Especial',
    material: 'Ouro 18k',
    description: '✨ Feminina 5mm com brilhantes • Masculina 6mm personalizada',
  },
  {
    id: 2,
    image: '/images/two_alliance_flower.jpg',
    name: 'Aliança Flor',
    material: 'Ouro 18k',
    description: '✨ Design floral exclusivo • Símbolo de delicadeza e amor eterno',
  },
  {
    id: 3,
    image: '/images/beautifull_alliance.jpg',
    name: 'Aliança Luxo',
    material: 'Ouro 18k',
    description: '✨ Acabamento premium • Para quem quer o melhor do melhor',
  },
  {
    id: 4,
    image: '/images/blue_alliance.jpg',
    name: 'Anel com Safira Azul',
    material: 'Ouro 18k com Safira',
    description: '✨ Pedra safira azul royal • Elegância e exclusividade',
  },
  {
    id: 5,
    image: '/images/gold_alliance.jpg',
    name: 'Aliança Dourada',
    material: 'Ouro 18k',
    description: '✨ Clássica e atemporal • Perfeita para eternizar seu momento',
  },
  {
    id: 6,
    image: '/images/par_alliance.jpg',
    name: 'Par de Alianças Clássico',
    material: 'Ouro 18k',
    description: '✨ Tradição e elegância • Fabricante direto desde 1991',
  },
]

export function Collections() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const itemsPerPage = isMobile ? 1 : 3

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + itemsPerPage) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [itemsPerPage])

  function prev() {
    setCurrent(prev => (prev - itemsPerPage + products.length) % products.length)
  }

  function next() {
    setCurrent(prev => (prev + itemsPerPage) % products.length)
  }

  const visibleProducts = Array.from({ length: itemsPerPage }, (_, i) =>
    products[(current + i) % products.length]
  )

  return (
    <section id="collections" className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="tracking-[0.4em] uppercase text-sm"
            style={{ fontFamily: "'Inter', sans-serif", color: '#BFA26A' }}
          >
            {t('hero.tagline')}
          </span>
          <h2
            className="text-4xl mt-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F5F0E8' }}
          >
            {t('collections.title')}
          </h2>
          <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: '#BFA26A' }} />
        </motion.div>

        {/* Carrossel */}
        <div className="relative">

          {/* Cards */}
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={`${product.id}-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-stone-800 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500"
                style={{ height: '320px' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8 px-4 text-center bg-linear-to-t from-black/90 via-black/50 to-transparent">
                  <span
                    className="text-xl font-semibold mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F5F0E8' }}
                  >
                    {product.name}
                  </span>
                  <span
                    className="text-xs tracking-wider mb-2 px-3 py-1 rounded-full bg-black/50"
                    style={{ color: '#BFA26A' }}
                  >
                    {product.material}
                  </span>
                  <p className="text-sm leading-tight max-w-[90%] mx-auto" style={{ color: '#D4D4D4' }}>
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Setas Navegação */}
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-yellow-500/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-stone-700 hover:border-yellow-500 hidden md:block"
            aria-label="Produto anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-yellow-500/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-stone-700 hover:border-yellow-500 hidden md:block"
            aria-label="Próximo produto"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(current / itemsPerPage) === index
                    ? 'bg-yellow-500 scale-125 shadow-lg'
                    : 'bg-stone-600 hover:bg-yellow-500/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
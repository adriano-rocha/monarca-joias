import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const products = [
  {
    id: 1,
    image: '/images/par_alliance.jpg',
    name: 'Par de Alianças Clássico',
    material: 'Ouro 18k',
  },
  {
    id: 2,
    image: '/images/two_alliance.jpg',
    name: 'Conjunto Noivado',
    material: 'Ouro 18k com Brilhantes',
  },
  {
    id: 3,
    image: '/images/blue_alliance.jpg',
    name: 'Anel com Safira',
    material: 'Ouro 18k com Safira Azul',
  },
  {
    id: 4,
    image: '/images/two_alliance_flower.jpg',
    name: 'Aliança Flor',
    material: 'Ouro 18k',
  },
]

export function Collections() {
  const { t } = useTranslation()

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
            className="text-yellow-600 tracking-[0.4em] uppercase text-sm"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('hero.tagline')}
          </span>
          <h2
            className="text-4xl text-white mt-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('collections.title')}
          </h2>
          <div className="w-16 h-px bg-yellow-600 mx-auto mt-4" />
        </motion.div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Imagem */}
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay no hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-8 px-4 text-center">
                <span
                  className="text-white text-xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.name}
                </span>
                <span className="text-yellow-500 text-sm tracking-wider mt-1">
                  {product.material}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
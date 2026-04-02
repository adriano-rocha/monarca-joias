import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5511983554617'
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Vim pelo site e gostaria de falar com um especialista.')

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-position-[center_70%]"
        style={{ backgroundImage: "url('/images/gold_alliance.jpg')" }}
      />

      {/* Gradiente sobre a imagem */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-600 tracking-[0.4em] uppercase text-xs md:text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t('hero.tagline')}
        </motion.span>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-4xl text-black font-semibold mt-4 mb-6 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-black text-sm md:text-lg mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA WhatsApp */}
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors text-xs md:text-sm tracking-wider uppercase cursor-pointer"
        >
          <MessageCircle size={20} />
          {t('hero.cta')}
        </motion.a>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react'
// Instagram removido - não existe no lucide-react

const WHATSAPP_NUMBER = '5511983554617'
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Vim pelo site e gostaria de falar com um especialista.')

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#BFA26A' }}
    >
      {/* Padrão de fundo sutil */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/images/logo_about.png')",
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Coluna 1 — Logo + Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <img
              src="/images/logo.png"
              alt="Monarca Jóias"
              className="h-20 w-auto"
            />
            <p
              className="text-sm tracking-[0.3em] uppercase text-center md:text-left"
              style={{ color: '#000000', fontFamily: "'Cormorant Garamond', serif" }}
            >
              Servir • Atender • Surpreender
            </p>
            <p
              className="text-xs text-center md:text-left leading-relaxed"
              style={{ color: '#3D2B00', fontFamily: "'Albert Sans', sans-serif" }}
            >
              Fábrica de alianças desde 1991.<br />
              Sé, São Paulo — SP
            </p>
          </motion.div>

          {/* Coluna 2 — Informações */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3
              className="text-lg font-semibold tracking-wider uppercase text-center md:text-left"
              style={{ color: '#000000', fontFamily: "'Cormorant Garamond', serif" }}
            >
              Informações
            </h3>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: '#3D2B00' }} />
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#3D2B00', fontFamily: "'Albert Sans', sans-serif" }}
              >
                Rua Quintino Bocaiuva, 84 — 10º andar<br />
                Sé, São Paulo — SP<br />
                <span className="text-xs" style={{ color: '#000000' }}>
                  🚉 5 min do Metrô Sé
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="shrink-0" style={{ color: '#3D2B00' }} />
              <p
                className="text-sm"
                style={{ color: '#3D2B00', fontFamily: "'Albert Sans', sans-serif" }}
              >
                (11) 3242-0141
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0" style={{ color: '#3D2B00' }} />
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#3D2B00', fontFamily: "'Albert Sans', sans-serif" }}
              >
                Seg a Sex: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
          </motion.div>

          {/* Coluna 3 — CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 items-center md:items-start"
          >
            <h3
              className="text-lg font-semibold tracking-wider uppercase"
              style={{ color: '#000000', fontFamily: "'Cormorant Garamond', serif" }}
            >
              Fale Conosco
            </h3>

            {/* Botão WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full w-full justify-center transition-all hover:scale-105 cursor-pointer font-semibold text-sm tracking-wider"
              style={{
                backgroundColor: '#000000',
                color: '#F5B800',
                fontFamily: "'Albert Sans', sans-serif",
              }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            {/* Botão Instagram - Ícone custom */}
            <a
              href="https://www.instagram.com/monarcajoias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full w-full justify-center transition-all hover:scale-105 cursor-pointer font-semibold text-sm tracking-wider"
              style={{
                backgroundColor: '#8B6914',
                color: '#F5F0E8',
                fontFamily: "'Albert Sans', sans-serif",
              }}
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209-0 0-3.582-2.209-3.582s-2.209 3.582-2.209 3.582 2.209 3.SVG path do Instagram
2.209 3.582 2.209 3.582zm7.615-8.208c0-1.17-0.948-2.118-2.118-2.118s-2.118.948-2.118 2.118c0 1.17.948 2.118 2.118 2.118s2.118-.948 2.118-2.118z"/>
              </svg>
              @monarcajoias
            </a>

            {/* Botão Ligar */}
            <a
              href="tel:+551132420141"
              className="flex items-center gap-3 px-6 py-3 rounded-full w-full justify-center transition-all hover:scale-105 cursor-pointer font-semibold text-sm tracking-wider"
              style={{
                backgroundColor: '#F5F0E8',
                color: '#000000',
                fontFamily: "'Albert Sans', sans-serif",
              }}
            >
              <Phone size={18} />
              (11) 3242-0141
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px my-10" style={{ backgroundColor: '#8B6914' }} />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-center"
            style={{ color: '#3D2B00', fontFamily: "'Albert Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Monarca Jóias. {t('footer.rights')}
          </p>
          <p
            className="text-xs"
            style={{ color: '#3D2B00', fontFamily: "'Albert Sans', sans-serif" }}
          >
            <a href="https://www.monarcajoias.com.br" target="_blank" rel="noopener noreferrer">
              www.monarcajoias.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
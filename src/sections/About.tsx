import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      className="relative py-32 px-6 overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/logo_about.png"
          alt=""
          className="w-150 md:w-200 opacity-5 select-none"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px" style={{ backgroundColor: '#BFA26A' }} />
          <span
            className="tracking-[0.4em] uppercase text-base md:text-lg"
            style={{ color: '#BFA26A', fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('about.tagline')}
          </span>
          <div className="w-16 h-px" style={{ backgroundColor: '#BFA26A' }} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl leading-relaxed font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F5F0E8' }}
        >
          {t('about.text1')}
          <br /><br />
          <span style={{ color: '#BFA26A', fontStyle: 'italic' }}>
            {t('about.text2')}
          </span>
          <br /><br />
          {t('about.text3')}
        </motion.p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-16 h-px" style={{ backgroundColor: '#BFA26A' }} />
          <span style={{ color: '#BFA26A' }}>👑</span>
          <div className="w-16 h-px" style={{ backgroundColor: '#BFA26A' }} />
        </div>
      </motion.div>
    </section>
  )
}
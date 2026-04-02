import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Shield, Award, MapPin } from 'lucide-react'

const items = [
  {
    icon: Shield,
    key: 'guarantee',
  },
  {
    icon: Award,
    key: 'certificate',
  },
  {
    icon: MapPin,
    key: 'security',
  },
]

export function Authority() {
  const { t } = useTranslation()

  return (
    <section className="bg-black py-24 px-6 border-y border-yellow-900/30">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('authority.title')}
          </h2>
          <div className="w-16 h-px bg-yellow-600 mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full border border-yellow-600 flex items-center justify-center">
                <item.icon size={28} className="text-yellow-500" />
              </div>
              <h3
                className="text-white text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t(`authority.${item.key}`)}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {t(`authority.${item.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5511983554617'
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Vim pelo site e gostaria de falar com um especialista.')

export function WhatsAppButtonFloat() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white rounded-full p-4 shadow-lg shadow-green-900/40 cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
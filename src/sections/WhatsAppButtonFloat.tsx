import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5511983554617";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de falar com um especialista.",
);

export function WhatsAppButtonFloat() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-sm font-medium">Falar no WhatsApp</span>
        <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-green-500" />
      </div>

      {/* Botão */}
      <div className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none">
        <img
          src="/images/whats.png"
          alt="WhatsApp"
          className="w-10 h-10"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </motion.a>
  );
}

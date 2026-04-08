import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "5511983554617";

function WhatsAppButton() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const MESSAGE = encodeURIComponent(t("whatsapp.message"));
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      className="fixed bottom-4 sm:bottom-6 right-2 z-50 flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mr-3 flex items-center pointer-events-none"
          >
            <div
              className="px-4 py-2 rounded-lg shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              <p
                className="text-sm font-medium whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#ffffff",
                }}
              >
                {t("whatsapp.tooltip")}
              </p>
            </div>

            {/* Seta lateral verde apontando para o botão */}
            <div
              className="w-0 h-0"
              style={{
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "8px solid #25D366",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão principal */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: "#25D366",
          boxShadow: hovered
            ? "0 0 0 4px #25D36630, 0 8px 32px #25D36666"
            : "0 4px 24px rgba(0,0,0,0.5)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        {/* Anel pulsante externo */}
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: "#25D366", borderRadius: "9999px" }}
        />

        {/* Ícone WhatsApp — imagem local */}
        <img
          src="/images/whats.png"
          alt="WhatsApp"
          className="w-9 h-9 object-contain relative z-10"
        />
      </motion.div>
    </motion.a>
  );
}

export default WhatsAppButton;

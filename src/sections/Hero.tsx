import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "5511983554617";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de falar com um especialista.",
);

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-black"
    >
      {/* Container do vídeo com overflow hidden */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-60"
          style={{}}
          poster="/images/hero-desktop-bg.jpg"
        >
          <source src="/videos/video_hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradiente sobre o vídeo */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80" />

      {/* Conteúdo superior — Tagline + Título + Subtítulo */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-40 md:mt-48">
        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#BFA26A",
          }}
        >
          {t("hero.tagline")}
        </motion.span>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-4xl font-semibold mt-4 mb-6 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#F5F0E8",
          }}
        >
          {t("hero.title")}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg leading-relaxed"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: "#BFA26A",
          }}
        >
          {t("hero.subtitle")}
        </motion.p>
      </div>

      {/* CTA — fixado na parte inferior */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mb-16 md:mb-20"
      >
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors text-xs md:text-sm tracking-wider uppercase cursor-pointer"
          style={{
            backgroundColor: "#F5B800",
            color: "#000000",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          <img
            src="/images/whats.png"
            alt="WhatsApp"
            className="w-5 h-5 object-contain"
          />
          {t("hero.cta")}
        </motion.a>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

const WHATSAPP_NUMBER = "5511983554617";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de falar com um especialista.",
);

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: "#8B7355" }}>
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          <img
            src="/images/logo.png"
            alt="Monarca Jóias"
            className="h-14 w-auto"
          />
          <p
            className="tracking-[0.3em] uppercase text-xs text-center"
            style={{
              color: "#F5F0E8",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {t('footer.slogan')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg hover:shadow-green-500/50"
            style={{ backgroundColor: "#25D366" }}
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} color="#ffffff" />
          </a>

          <a
            href="https://www.instagram.com/monarcajoias"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg hover:shadow-pink-500/50"
            style={{
              background:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
            aria-label="Instagram"
          >
            <FaInstagram size={20} color="#ffffff" />
          </a>
        </motion.div>

        <div
          className="w-full h-px opacity-30"
          style={{ backgroundColor: "#A89070" }}
        />

        <p
          className="text-xs text-center opacity-70"
          style={{ color: "#F5F0E8", fontFamily: "'Albert Sans', sans-serif" }}
        >
          © {new Date().getFullYear()} Monarca Jóias. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

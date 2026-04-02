import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-[#0D0D0D] py-24 px-6">
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
            {t("nav.contact")}
          </span>
          <h2
            className="text-4xl text-white mt-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("footer.address")}
          </h2>
          <div className="w-16 h-px bg-yellow-600 mx-auto mt-4" />
        </motion.div>

        {/* Grid: Info + Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-yellow-600 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-yellow-500" />
              </div>
              <div>
                <h3
                  className="text-white text-lg mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Endereço
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Rua Quintino Bocaiuva, 84 — 10º andar
                  <br />
                  Sé, São Paulo — SP
                </p>
                <p className="text-yellow-600 text-xs mt-1">
                  🚉 A 5 minutos do Metrô Sé
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-yellow-600 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-yellow-500" />
              </div>
              <div>
                <h3
                  className="text-white text-lg mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Contato
                </h3>
                <p className="text-stone-400 text-sm">(11) 3242-0141</p>
                <p className="text-stone-400 text-sm">
                  WhatsApp: (11) 98355-4617
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-yellow-600 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-yellow-500" />
              </div>
              <div>
                <h3
                  className="text-white text-lg mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {t("footer.hours")}
                </h3>
                <p className="text-stone-400 text-sm">
                  Segunda a Sexta: 9h às 18h
                </p>
                <p className="text-stone-400 text-sm">Sábado: 9h às 14h</p>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-yellow-900/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.530881871416!2d-46.63764572388411!3d-23.549369461153294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ab3cf681d7%3A0x6d79ec31e71f4bf9!2sR.%20Quintino%20Bocai%C3%BAva%2C%2084%20-%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001004-010!5e0!3m2!1sen!2sbr!4v1775073100572!5m2!1sen!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Monarca Jóias"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/products";

export function Collections() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.slice(0, 2) || "pt") as "pt" | "en" | "es";
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = isMobile ? 1 : 3;
  const WHATSAPP_NUMBER = "5511983554617";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + itemsPerPage) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [itemsPerPage]);

  function prev() {
    setCurrent(
      (prev) => (prev - itemsPerPage + products.length) % products.length,
    );
  }

  function next() {
    setCurrent((prev) => (prev + itemsPerPage) % products.length);
  }

  const visibleProducts = Array.from(
    { length: itemsPerPage },
    (_, i) => products[(current + i) % products.length],
  );

  return (
    <section id="collections" className="bg-[#0D0D0D] py-24 px-6">
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
            className="text-4xl mt-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#F5F0E8",
            }}
          >
            {t("collections.title")}
          </h2>
          <div
            className="w-16 h-px mx-auto mt-4"
            style={{ backgroundColor: "#BFA26A" }}
          />
        </motion.div>

        {/* Carrossel */}
        <div className="relative">
          {/* Cards */}
          <div
            className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}
          >
            {visibleProducts.map((product) => {
              const translation =
                product.translations[lang] || product.translations["pt"];
              return (
                <div
                  key={`${product.id}-${current}`}
                  className="group relative overflow-hidden rounded-xl cursor-pointer border border-stone-800 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500"
                  style={{ height: "320px" }}
                >
                  <img
                    src={product.image}
                    alt={translation.name}
                    loading="eager"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 flex flex-col items-center justify-end pb-8 px-4 text-center bg-linear-to-t from-black/90 via-black/50 to-transparent ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    <span
                      className="text-xl font-semibold mb-1"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#F5F0E8",
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {translation.name}
                    </span>
                    <span
                      className="text-xs tracking-wider mb-2 px-3 py-1 rounded-full bg-black/50"
                      style={{ color: "#BFA26A" }}
                    >
                      {translation.material}
                    </span>
                    <p
                      className="text-xs leading-tight max-w-[90%] mx-auto"
                      style={{
                        color: "#F5F0E8",
                        fontFamily: "'Albert Sans', sans-serif",
                      }}
                    >
                      {translation.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Setas Desktop */}
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-yellow-500/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-stone-700 hover:border-yellow-500 hidden md:block cursor-pointer"
            aria-label="Produto anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-yellow-500/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-stone-700 hover:border-yellow-500 hidden md:block cursor-pointer"
            aria-label="Próximo produto"
          >
            <ChevronRight size={24} />
          </button>

          {/* Setas Mobile */}
          <div className="flex md:hidden items-center justify-between mt-6 px-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer"
              style={{ borderColor: "#BFA26A", color: "#BFA26A" }}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({
                length: Math.ceil(products.length / itemsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index * itemsPerPage)}
                  className="w-2 h-2 rounded-full transition-all cursor-pointer"
                  style={{
                    backgroundColor:
                      Math.floor(current / itemsPerPage) === index
                        ? "#BFA26A"
                        : "#4B4B4B",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer"
              style={{ borderColor: "#BFA26A", color: "#BFA26A" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicadores Desktop */}
          <div className="hidden md:flex justify-center gap-2 mt-12">
            {Array.from({
              length: Math.ceil(products.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index * itemsPerPage)}
                className="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor:
                    Math.floor(current / itemsPerPage) === index
                      ? "#BFA26A"
                      : "#4B4B4B",
                  transform:
                    Math.floor(current / itemsPerPage) === index
                      ? "scale(1.25)"
                      : "scale(1)",
                }}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("whatsapp.message"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 rounded-full border transition-all duration-300 hover:bg-[#BFA26A]/10"
              style={{ borderColor: "#BFA26A" }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#BFA26A",
                  fontSize: "1rem",
                  letterSpacing: "0.15em",
                }}
              >
                {t("collections.cta")}
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

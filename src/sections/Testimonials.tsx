import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  "/images/testimonials/aval_01.png",
  "/images/testimonials/aval_02.png",
  "/images/testimonials/aval_03.png",
  "/images/testimonials/aval_04.png",
  "/images/testimonials/aval_05.png",
  "/images/testimonials/aval_06.png",
  "/images/testimonials/aval_07.png",
  "/images/testimonials/aval_08.png",
  "/images/testimonials/aval_09.png",
  "/images/testimonials/aval_10.png",
];

export function Testimonials() {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    function animate() {
      position -= speed;
      const totalWidth = track!.scrollWidth / 2;
      if (Math.abs(position) >= totalWidth) position = 0;
      track!.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  function prev() {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="bg-black py-24 overflow-hidden border-y border-yellow-900/30">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span
            className="tracking-[0.4em] uppercase text-sm"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#BFA26A",
            }}
          >
            {t("testimonials.tagline")}
          </span>
          <h2
            className="text-4xl mt-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#F5F0E8",
            }}
          >
            {t("testimonials.title")}
          </h2>
          <div
            className="w-16 h-px mx-auto mt-4"
            style={{ backgroundColor: "#BFA26A" }}
          />
        </motion.div>
      </div>

      {!isMobile && (
        <div className="relative">
          <div
            className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #000000, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #000000, transparent)",
            }}
          />
          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-6 w-max">
              {doubled.map((src, index) => (
                <div
                  key={index}
                  className="shrink-0 rounded-xl overflow-hidden shadow-lg border border-stone-800"
                  style={{ width: "480px", height: "320px" }}
                >
                  <img
                    src={src}
                    alt={`Avaliação ${(index % 10) + 1}`}
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile — carrossel com setas */}
      {isMobile && (
        <div className="relative px-6">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={testimonials[current]}
                alt={`Avaliação ${current + 1}`}
                className="w-full object-contain bg-white rounded-xl"
                style={{ height: "280px" }}
              />
            </motion.div>
          </div>

          {/* Setas */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer"
              style={{ borderColor: "#BFA26A", color: "#BFA26A" }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all cursor-pointer"
                  style={{
                    backgroundColor: i === current ? "#BFA26A" : "#4B4B4B",
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
        </div>
      )}
    </section>
  );
}

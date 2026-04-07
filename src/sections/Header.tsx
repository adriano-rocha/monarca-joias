import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const languages = [
  { code: "pt", flag: "/flags/br.png", label: "Português" },
  { code: "en", flag: "/flags/eua.png", label: "English" },
  { code: "es", flag: "/flags/esp.png", label: "Español" },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  function changeLanguage(code: string) {
    i18n.changeLanguage(code);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-900/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center">

        {/* Coluna Esquerda — Logo + Início */}
        <div className="flex items-center gap-4 md:w-1/3">
          <img
            src="/images/logo.png"
            alt="Monarca Jóias"
            className="h-10 md:h-12 w-auto"
          />
          <a
            href="#hero"
            className="hidden md:block text-sm text-stone-300 tracking-wider hover:text-yellow-500 transition-colors"
          >
            {t("nav.home")}
          </a>
        </div>

        {/* Coluna Centro — Nome Desktop */}
        <div className="hidden md:flex w-1/3 justify-center">
          <span
            className="tracking-[0.3em] uppercase text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#BFA26A" }}
          >
            Monarca Jóias
          </span>
        </div>

        {/* Mobile — Nome centralizado */}
        <span className="md:hidden flex-1 text-center tracking-widest uppercase text-xs"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#BFA26A" }}>
          Monarca Jóias
        </span>

        {/* Coluna Direita — Nav + Bandeiras Desktop */}
        <div className="hidden md:flex items-center justify-end gap-6 w-1/3">
          <a
            href="#collections"
            className="text-sm text-stone-300 tracking-wider hover:text-yellow-500 transition-colors"
          >
            {t("nav.collections")}
          </a>
          <a
            href="#contact"
            className="text-sm text-stone-300 tracking-wider hover:text-yellow-500 transition-colors"
          >
            {t("nav.contact")}
          </a>
          <div className="flex gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                aria-label={`Mudar idioma para ${lang.label}`}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                  i18n.language === lang.code
                    ? "border-yellow-500 scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Direita — Bandeiras + Hamburguer */}
        <div className="flex md:hidden items-center gap-1 ml-auto">
          <div className="flex gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                aria-label={`Mudar idioma para ${lang.label}`}
                className={`w-6 h-6 rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                  i18n.language === lang.code
                    ? "border-yellow-500 scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <button
            className="text-stone-300 hover:text-yellow-500 cursor-pointer ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Nav Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-black border-t border-yellow-900/30 px-6 py-4 flex flex-col gap-4 text-sm text-stone-300 tracking-wider">
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-500 transition-colors"
          >
            {t("nav.home")}
          </a>
          <a
            href="#collections"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-500 transition-colors"
          >
            {t("nav.collections")}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-500 transition-colors"
          >
            {t("nav.contact")}
          </a>
        </nav>
      )}
    </header>
  );
}
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const languages = [
  { code: 'pt', flag: '/flags/br.png', label: 'Português' },
  { code: 'en', flag: '/flags/eua.png', label: 'English' },
  { code: 'es', flag: '/flags/esp.png', label: 'Español' },
]

export function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  function changeLanguage(code: string) {
    i18n.changeLanguage(code)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-900/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Início - Esquerda */}
        <div className="flex items-center gap-6">
          <img
            src="/images/logo.png"
            alt="Monarca Jóias"
            className="h-12 w-auto"
          />
          <a href="#hero" className="hidden md:block text-sm text-stone-300 tracking-wider hover:text-yellow-500 transition-colors">
            {t('nav.home')}
          </a>
        </div>

        {/* Nome Centralizado */}
        <span
          className="absolute left-1/2 -translate-x-1/2 text-yellow-500 tracking-[0.3em] uppercase text-lg"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Monarca Jóias
        </span>

        {/* Nav Direita + Bandeiras */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#collections" className="text-sm text-stone-300 tracking-wider hover:text-yellow-500 transition-colors">
            {t('nav.collections')}
          </a>
          <a href="#contact" className="text-sm text-stone-300 tracking-wider hover:text-yellow-500 transition-colors">
            {t('nav.contact')}
          </a>
          <div className="flex gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                aria-label={`Mudar idioma para ${lang.label}`}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all cursor-pointer
                  ${i18n.language === lang.code
                    ? 'border-yellow-500 scale-110'
                    : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-stone-300 hover:text-yellow-500 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Nav Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-black border-t border-yellow-900/30 px-6 py-4 flex flex-col gap-4 text-sm text-stone-300 tracking-wider">
          <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">{t('nav.home')}</a>
          <a href="#collections" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">{t('nav.collections')}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">{t('nav.contact')}</a>
          <div className="flex gap-2 pt-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                aria-label={`Mudar idioma para ${lang.label}`}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all cursor-pointer
                  ${i18n.language === lang.code
                    ? 'border-yellow-500 scale-110'
                    : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
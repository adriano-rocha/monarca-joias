import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// controle de  aviso de cookies (LGPD)
// *Ele aparece na primeira visita e salva a escolha do usuário no navegador.

function CookieBanner() {
  const [visible, setVisible] = useState(
  () => !localStorage.getItem("cookie_consent")
);

  function handleAccept() {
    // Salva a escolha "accepted" no navegador
    localStorage.setItem("cookie_consent", "accepted");

    // 🔧 ADC GOOGLE ADS:
    // Substituir 'ID_AQUI' pelo ID do Google Ads (ex: AW-123456789)
    // e descomentar as linhas abaixo:
    //
    // window.gtag('consent', 'update', {
    //   analytics_storage: 'granted',
    //   ad_storage: 'granted',
    // })

    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie_consent", "declined");

    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between flex-wrap gap-4 px-6 py-4 md:px-10"
          style={{
            backgroundColor: "#0D0D0D",
            borderTop: "1px solid #BFA26A44",
          }}
        >
          <p
            className="text-xs md:text-sm leading-relaxed max-w-2xl"
            style={{
              fontFamily: "'Albert Sans', sans-serif",
              color: "#F5F1EA99",
            }}
          >
            Utilizamos cookies para melhorar sua experiência e exibir anúncios
            relevantes. Ao continuar navegando, você concorda com nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: "#BFA26A" }}
            >
              Política de Privacidade
            </a>
            .
          </p>

          <div className="flex items-center gap-3 shrink-0" style={{ marginRight: '36px' }}>
            <button
              onClick={handleDecline}
              className="text-xs md:text-sm px-4 py-2 rounded-full border transition-all duration-200 hover:opacity-70 cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#F5F1EA99",
                borderColor: "#F5F1EA22",
              }}
            >
              Recusar
            </button>

            <button
              onClick={handleAccept}
              className="text-xs md:text-sm px-5 py-2 rounded-full font-semibold transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: "#BFA26A",
                color: "#0D0D0D",
              }}
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;

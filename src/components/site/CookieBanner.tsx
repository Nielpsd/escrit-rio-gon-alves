import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { WaveButton } from "./WaveButton";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "1");
    setVisible(false);
  }

  return (
    <div
      className={
        "fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-lg)] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md cookie-banner " +
        (visible ? "cookie-banner--visible" : "cookie-banner--hidden")
      }
      aria-hidden={!visible}
    >
      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
        Usamos cookies para melhorar sua experiência. Ao continuar navegando,
        você concorda com nossa{" "}
        <Link
          to="/politica-de-privacidade"
          className="text-[var(--navy)] underline underline-offset-2 hover:text-[var(--gold)] transition-colors"
        >
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4">
        <WaveButton variant="primary" size="sm" as="button" onClick={accept}>
          Entendido
        </WaveButton>
      </div>
    </div>
  );
}

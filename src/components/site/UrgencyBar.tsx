import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { SITE } from "@/lib/site";

export function UrgencyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("urgency-bar-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem("urgency-bar-dismissed", "1");
  }

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-amber-500 px-4 py-2 text-center text-sm font-medium text-amber-950">
      <span>
        Recurso negado? Você tem{" "}
        <strong>30 dias para recorrer</strong>.{" "}
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2 hover:text-amber-900 transition-colors"
        >
          Consulte agora →
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label="Fechar aviso"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-amber-600/20 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}

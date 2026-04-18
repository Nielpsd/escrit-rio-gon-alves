import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Falar pelo WhatsApp"
      className={[
        "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-3 text-white shadow-[0_8px_24px_rgba(34,197,94,0.35)] transition-all duration-300 hover:bg-[#16a34a] hover:scale-105 sm:bottom-6 sm:right-6",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#22c55e] opacity-30" />
      <MessageCircle size={22} strokeWidth={2.2} />
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </a>
  );
}

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={
        "fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--navy)] shadow-[var(--shadow-md)] transition-all hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] sm:bottom-6 sm:left-6 back-to-top " +
        (visible ? "back-to-top--visible" : "back-to-top--hidden")
      }
    >
      <ArrowUp size={18} strokeWidth={2.2} />
    </button>
  );
}

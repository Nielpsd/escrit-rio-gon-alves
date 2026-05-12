import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--navy)] shadow-[var(--shadow-md)] transition-all hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] sm:bottom-6 sm:left-6"
        >
          <ArrowUp size={18} strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

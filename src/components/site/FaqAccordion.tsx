import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <div key={i} className="rounded-2xl border border-[var(--border)] bg-white overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setAberto(aberto === i ? null : i)}
          >
            <span className="font-display text-base font-semibold text-[var(--navy)]">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 text-[var(--text-muted)] transition-transform ${aberto === i ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {aberto === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="px-6 pb-5 text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

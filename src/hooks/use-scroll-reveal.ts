import * as React from "react";

/**
 * useScrollReveal — observa elementos com [data-reveal] (ou seletor padrão)
 * e adiciona a classe `is-visible` quando entram na viewport.
 * Funciona em todas as páginas sem precisar editar cada uma.
 */
export function useScrollReveal(
  selector = "[data-reveal], .reveal, .card-interactive, section h2, section h3, section > p, section > div > p",
) {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    elements.forEach((el) => {
      if (!el.classList.contains("reveal-init")) {
        el.classList.add("reveal-init");
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => io.observe(el));

    // Re-scan após mudanças de rota / DOM dinâmico
    const mo = new MutationObserver(() => {
      const fresh = Array.from(document.querySelectorAll<HTMLElement>(selector));
      fresh.forEach((el) => {
        if (!el.classList.contains("reveal-init")) {
          el.classList.add("reveal-init");
          io.observe(el);
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [selector]);
}

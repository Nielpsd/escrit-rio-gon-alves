import * as React from "react";

/**
 * useScrollReveal — observa elementos com [data-reveal] (ou seletor padrão)
 * e adiciona a classe `is-visible` quando entram na viewport.
 *
 * O estado inicial (opacity 0, translate) é aplicado via CSS no seletor
 * `.reveal-init`. Usamos useLayoutEffect para adicionar a classe ANTES do
 * paint, evitando flash sem animação. Em seguida, o IntersectionObserver
 * dispara `is-visible` num próximo frame para garantir que a transição rode.
 */
export function useScrollReveal(
  selector = "[data-reveal], .reveal, .card-interactive, section h2, section h3, section > p, section > div > p",
) {
  React.useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const init = (el: HTMLElement) => {
      if (!el.classList.contains("reveal-init") && !el.classList.contains("is-visible")) {
        el.classList.add("reveal-init");
      }
    };

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("reveal-init", "is-visible"));
      return;
    }

    elements.forEach(init);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // pequeno delay garante que o paint inicial (opacity 0) aconteça
            // antes de disparar a transição para opacity 1
            requestAnimationFrame(() => {
              entry.target.classList.add("is-visible");
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    elements.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [selector]);
}

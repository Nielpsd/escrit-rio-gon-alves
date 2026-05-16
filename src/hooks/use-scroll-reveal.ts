import * as React from "react";

export function useScrollReveal(selector = "[data-reveal]") {
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const run = () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

      if (prefersReduced) {
        elements.forEach((el) => el.classList.add("reveal-init", "is-visible"));
        return () => {};
      }

      elements.forEach((el) => {
        if (!el.classList.contains("reveal-init") && !el.classList.contains("is-visible")) {
          el.classList.add("reveal-init");
        }
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              requestAnimationFrame(() => entry.target.classList.add("is-visible"));
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );

      elements.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };

    let cleanup: (() => void) | undefined;
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    const idleId = w.requestIdleCallback
      ? w.requestIdleCallback(() => { cleanup = run(); })
      : (window.setTimeout(() => { cleanup = run(); }, 0) as unknown as number);

    return () => {
      if (w.cancelIdleCallback) {
        w.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
      cleanup?.();
    };
  }, [selector]);
}

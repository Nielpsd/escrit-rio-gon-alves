import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 143, suffix: "+", label: "avaliações 5 estrelas" },
  { value: 10, suffix: "+", label: "anos de experiência" },
  { value: 3, suffix: "", label: "escritórios em RO" },
  { value: 100, suffix: "%", label: "foco em previdenciário" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          function frame(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
          io.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-semibold text-[var(--gold)]">
      {displayed}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="on-navy bg-[var(--navy)] py-16 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-10 reveal-stagger">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            data-reveal
            className="reveal-init flex flex-col items-center text-center gap-2"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-sm text-white/60 leading-snug">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

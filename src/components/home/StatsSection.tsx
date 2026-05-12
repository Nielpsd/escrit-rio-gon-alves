import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 143, suffix: "+", label: "avaliações 5 estrelas" },
  { value: 15, suffix: "+", label: "anos de experiência" },
  { value: 2, suffix: "", label: "unidades em Rondônia" },
  { value: 100, suffix: "%", label: "foco em previdenciário" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-semibold text-[var(--gold)]">
      {displayed}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="on-navy bg-[var(--navy)] py-16 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-sm text-white/60 leading-snug">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

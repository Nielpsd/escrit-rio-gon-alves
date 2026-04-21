import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Eleni Rocha",
    quote: "Minha aposentadoria deu certo. Só agradecer ao Dr. Renan e à equipe. Foram atenciosos do início ao fim e me mantiveram informada em todas as etapas do processo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carolina Assunção",
    quote: "A questão do meu filho foi resolvida bem rápido, sem trabalho nenhum pra mim. Amei a atenção de toda a equipe. Profissionais dedicados e muito competentes.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vera Lucia Lemes",
    quote: "Dr. Renan, excelente profissional. Equipe muito atenciosa. Nota 10. Recomendo a todos que precisam de orientação previdenciária — são os melhores.",
    rating: 5,
  },
  {
    id: 4,
    name: "Leuciane Silva",
    quote: "Nunca deixaram de me manter informada. Dois anos de processo e em nenhum momento desistiram de mim. Resultado incrível. Sou muito grata a toda a equipe.",
    rating: 5,
  },
  {
    id: 5,
    name: "Érika Vieira",
    quote: "Fui muito bem atendida, solucionaram nossa situação. Excelentes advogados, muito atentos e preparados. Indico sem hesitar para quem precisar.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ilma Fernandes",
    quote: "Gostei muito do atendimento. Foi muito bom, graças a Deus deu tudo certo! A equipe é super dedicada e me orientou em cada passo do processo.",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = TESTIMONIALS[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSelect = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    timerRef.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <section className="w-full bg-white py-20 md:py-[120px] px-6 lg:px-[80px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              O que dizem <em className="hl">quem foi atendido</em> aqui.
            </h2>
          </div>

          {/* Google badge */}
          <a
            href="https://maps.app.goo.gl/mKcZ4Q73PkbPoaWD6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 shrink-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 hover:border-[var(--gold)]/50 transition-colors"
          >
            <svg viewBox="0 0 48 48" className="w-10 h-10 shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M45.5 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h12.1c-.5 2.7-2.1 5-4.4 6.5v5.4h7.1c4.2-3.8 6.7-9.5 6.7-15.6z"/>
              <path fill="#34A853" d="M24 46c6 0 11-2 14.7-5.4l-7.1-5.4c-2 1.3-4.5 2.1-7.6 2.1-5.8 0-10.8-3.9-12.5-9.2H4.2v5.6C7.9 41.5 15.4 46 24 46z"/>
              <path fill="#FBBC05" d="M11.5 28.1c-.5-1.3-.7-2.7-.7-4.1s.2-2.8.7-4.1v-5.6H4.2C2.8 17.2 2 20.5 2 24s.8 6.8 2.2 9.7l7.3-5.6z"/>
              <path fill="#EA4335" d="M24 10.8c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 29.9 2 24 2 15.4 2 7.9 6.5 4.2 13.3l7.3 5.6c1.7-5.3 6.7-8.1 12.5-8.1z"/>
            </svg>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-[var(--navy)] text-lg leading-none">5,0</span>
                <Stars />
              </div>
              <p className="text-xs text-[var(--text-muted)]">Google Meu Negócio</p>
            </div>
          </a>
        </motion.div>

        <div className="flex flex-col gap-8">
          {/* Card principal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="w-full p-8 md:p-12 rounded-3xl bg-[var(--navy)] flex flex-col gap-8 min-h-[200px]"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-display text-xl md:text-3xl font-semibold text-white leading-snug max-w-3xl"
              >
                "{current.quote}"
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={"meta-" + currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-full bg-[var(--gold)] grid place-items-center font-display font-bold text-[var(--navy)] text-lg">
                  {current.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{current.name}</p>
                  <Stars count={current.rating} />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Seletor */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {TESTIMONIALS.map((t, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelect(index)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 text-left",
                    isActive
                      ? "border-[var(--gold)] bg-[var(--gold-pale)] shadow-sm"
                      : "border-[var(--border)] bg-white hover:border-[var(--gold)]/50"
                  )}
                >
                  <div className="h-8 w-8 rounded-full bg-[var(--navy)] grid place-items-center font-display font-semibold text-[var(--gold-light)] text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className={cn("text-sm font-semibold leading-tight", isActive ? "text-[var(--navy)]" : "text-[var(--text)]")}>
                      {t.name.split(" ")[0]}
                    </p>
                    <Stars count={t.rating} />
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Depoimentos espontâneos publicados no Google Meu Negócio. Resultados dependem da análise individual de cada caso.
        </p>
      </div>
    </section>
  );
}

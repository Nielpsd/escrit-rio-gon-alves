import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, BookOpen, FileText, Gavel } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";

interface Lawyer {
  id: number;
  name: string;
  role: string;
  label: string;
  quote: string;
  badge: React.ReactNode;
  photo: string | null;
}

const LAWYERS: Lawyer[] = [
  {
    id: 1,
    name: "Dr. Renan Gonçalves",
    role: "Advogado · OAB/RO 10.297",
    label: "Sócio fundador",
    quote:
      "Passei anos dentro do INSS como gerente. Sei exatamente como cada processo é analisado — e uso esse conhecimento a favor dos nossos clientes todos os dias.",
    badge: <Scale className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/bio/05.webp",
  },
  {
    id: 2,
    name: "Dr. Wesley Rodrigues",
    role: "Advogado · OAB/RO 15430",
    label: "Supervisor",
    quote:
      "Cada caso tem sua particularidade. Meu papel é garantir que cada processo seja conduzido com a estratégia certa para o melhor resultado possível.",
    badge: <BookOpen className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/wesley.webp",
  },
  {
    id: 3,
    name: "Dra. Lucimeiry Boni",
    role: "Advogada · OAB/RO 10.236",
    label: "Direito previdenciário",
    quote:
      "Atuo exclusivamente em previdenciário porque acredito que cada pessoa merece receber o benefício que é seu por direito. Esse é o nosso compromisso.",
    badge: <FileText className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/lucimeiry.webp",
  },
  {
    id: 4,
    name: "Dra. Ana Paula Oliveira",
    role: "Advogada · OAB/RO 9447",
    label: "Direito previdenciário",
    quote:
      "O direito previdenciário tem o poder de transformar vidas. Cada processo que conduzimos representa uma família que vai ter acesso ao benefício que merece.",
    badge: <Gavel className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/ana-paula.webp",
  },
];

const SUPPORT = [
  { name: "Milena Maeda", role: "Equipe previdenciária", photo: "/team/milena.webp" },
  { name: "Letícia Favetta", role: "Equipe previdenciária", photo: "/team/leticia.webp" },
  { name: "Ingrid da Silva", role: "Equipe previdenciária", photo: "/team/ingrid.webp" },
  { name: "Higor Vinicius", role: "Equipe previdenciária", photo: "/team/higor.webp" },
  { name: "Daniel Garcia", role: "Equipe previdenciária", photo: "/team/daniel.webp" },
  { name: "Bruna Oliveira", role: "Equipe previdenciária", photo: "/team/bruna.webp" },
  { name: "Analicy da Hora", role: "Equipe previdenciária", photo: "/team/analicy.webp" },
  { name: "Aline Dias", role: "Equipe previdenciária", photo: "/team/aline.webp" },
];

function PhotoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#1a3a6e] to-[var(--navy)]">
      <span className="font-display text-7xl font-bold text-white/20 select-none">{name[0]}</span>
    </div>
  );
}

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32 px-6 md:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <Eyebrow>Equipe</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Uma equipe inteira focada em{" "}
            <em className="hl">previdenciário</em>.
          </h2>
        </header>

        {/* Advogados — accordion no desktop, cards no mobile */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-center lg:gap-4">
          {LAWYERS.map((member, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={member.id}
                layout
                onMouseEnter={!isMobile ? () => setActiveIndex(index) : undefined}
                onClick={isMobile ? () => setActiveIndex(index === activeIndex ? -1 : index) : undefined}
                className="flex flex-col gap-3 w-full lg:w-auto"
                initial={false}
                animate={isMobile ? {} : { width: isActive ? "500px" : "175px" }}
                transition={{ type: "spring", stiffness: 120, damping: 24, mass: 1, restDelta: 0.001 }}
                style={{ minWidth: 0 }}
              >
                {/* Mobile card layout */}
                {isMobile ? (
                  <motion.div
                    layout
                    animate={{ backgroundColor: isActive ? "var(--navy)" : "#E8EDF5" }}
                    className="relative w-full overflow-hidden rounded-2xl p-4 cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
                        {member.photo ? (
                          <img src={member.photo} alt={member.name} loading="lazy" className="h-full w-full object-cover object-top" />
                        ) : (
                          <PhotoPlaceholder name={member.name} />
                        )}
                      </div>
                      <div className="flex min-w-0 flex-col justify-center">
                        <p className={`text-sm font-semibold truncate ${isActive ? "text-white" : "text-[var(--navy)]"}`}>{member.name}</p>
                        <p className={`text-xs mt-0.5 ${isActive ? "text-[var(--gold-light)]" : "text-[var(--text-muted)]"}`}>{member.role}</p>
                        <p className={`text-xs mt-0.5 ${isActive ? "text-white/60" : "text-[var(--text-muted)]"}`}>{member.label}</p>
                      </div>
                      <div className={`ml-auto flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border ${isActive ? "border-white/20 bg-white/10" : "border-[var(--border)] bg-white"}`}>
                        {member.badge}
                      </div>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={"mobile-content-" + member.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 border-t border-white/15 pt-4 text-sm font-normal leading-relaxed text-white/80">
                            "{member.quote}"
                          </p>
                          <div className="mt-3">
                            <p className="text-sm font-semibold text-white">{member.name}</p>
                            <p className="text-xs text-[var(--gold-light)]">{member.role}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  /* Desktop accordion layout */
                  <>
                    <motion.div
                      layout
                      animate={{ backgroundColor: isActive ? "var(--navy)" : "#E8EDF5" }}
                      className="relative h-[320px] w-full overflow-hidden rounded-3xl p-3"
                    >
                      <div className="flex h-full w-full flex-row">
                        <motion.div
                          layout
                          className={`relative h-full flex-shrink-0 overflow-hidden rounded-2xl ${isActive ? "w-[196px]" : "w-full"}`}
                        >
                          {member.photo ? (
                            <img src={member.photo} alt={member.name} loading="lazy" className="h-full w-full object-cover object-top" />
                          ) : (
                            <PhotoPlaceholder name={member.name} />
                          )}
                          <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-white shadow-sm">
                            {member.badge}
                          </div>
                        </motion.div>

                        <div className="flex-1 overflow-hidden">
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key={"content-" + member.id}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                className="flex h-full flex-col p-6 text-white"
                              >
                                <p className="mb-6 text-base font-normal leading-relaxed opacity-80 line-clamp-6">
                                  "{member.quote}"
                                </p>
                                <div className="mt-auto">
                                  <h4 className="text-base font-semibold">{member.name}</h4>
                                  <p className="text-sm text-[var(--gold-light)]">{member.role}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div layout className="px-1 text-center">
                      <p className="text-sm font-semibold text-[var(--navy)]">{member.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">{member.label}</p>
                    </motion.div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Equipe de apoio — linha de avatares */}
        <div className="mt-16 border-t border-[var(--border)] pt-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-8 text-center">
            Equipe de apoio
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {SUPPORT.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-2">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[var(--border)]">
                  <img src={s.photo} alt={s.name} loading="lazy" className="h-full w-full object-cover object-top" />
                </div>
                <span className="text-sm font-medium text-[var(--navy)]">{s.name}</span>
                <span className="text-xs text-[var(--text-muted)]">{s.role}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

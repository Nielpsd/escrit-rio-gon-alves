import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, BookOpen, FileText } from "lucide-react";
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
    role: "Advogado · OAB/RO",
    label: "Sócio fundador",
    quote:
      "Passei anos dentro do INSS como gerente. Sei exatamente como cada processo é analisado — e uso esse conhecimento a favor dos nossos clientes todos os dias.",
    badge: <Scale className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/about-renan.webp",
  },
  {
    id: 2,
    name: "Letícia Gonçalves",
    role: "Advogada · OAB/RO",
    label: "Direito previdenciário",
    quote:
      "Cada benefício negado tem uma história por trás. Meu trabalho é entender essa história e construir o argumento técnico certo para revertê-la.",
    badge: <BookOpen className="h-5 w-5 text-[var(--navy)]" />,
    photo: null,
  },
  {
    id: 3,
    name: "Wesley Oliveira",
    role: "Advogado · OAB/RO",
    label: "Litígios no INSS",
    quote:
      "Especializado em recursos administrativos e ações judiciais previdenciárias. Se o INSS negou, ainda há caminho — e eu conheço cada um deles.",
    badge: <FileText className="h-5 w-5 text-[var(--navy)]" />,
    photo: null,
  },
];

const SUPPORT = [
  { name: "Lucimeiry", role: "Assistente jurídica" },
  { name: "Camila", role: "Atendimento ao cliente" },
  { name: "Milena", role: "Paralegal" },
  { name: "Aline", role: "Assistente jurídica" },
  { name: "Bruna", role: "Atendimento ao cliente" },
  { name: "Maria", role: "Paralegal" },
  { name: "Marília", role: "Assistente jurídica" },
  { name: "Nathália", role: "Atendimento ao cliente" },
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

  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <Eyebrow>Equipe</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Uma equipe inteira focada em{" "}
            <em className="hl">previdenciário</em>.
          </h2>
        </header>

        {/* Advogados — cards expansíveis */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          {LAWYERS.map((member, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={member.id}
                layout
                onMouseEnter={() => setActiveIndex(index)}
                className="flex flex-col gap-3"
                initial={false}
                animate={{ width: isActive ? "520px" : "220px" }}
                transition={{ type: "spring", stiffness: 120, damping: 24, mass: 1, restDelta: 0.001 }}
                style={{ minWidth: 0 }}
              >
                <motion.div
                  layout
                  animate={{ backgroundColor: isActive ? "var(--navy)" : "#E8EDF5" }}
                  className="relative h-[320px] w-full overflow-hidden rounded-3xl p-3"
                >
                  <div className="flex h-full w-full flex-col md:flex-row">
                    <motion.div
                      layout
                      className="relative h-full w-full flex-shrink-0 overflow-hidden rounded-2xl md:w-[196px]"
                    >
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="h-full w-full object-cover object-top" />
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
                              <h4 className="text-base font-semibold whitespace-nowrap">{member.name}</h4>
                              <p className="text-sm text-[var(--gold-light)] whitespace-nowrap">{member.role}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>

                <motion.div layout className="px-1 text-center">
                  <h3 className="text-sm font-medium text-[var(--navy)]">{member.label}</h3>
                </motion.div>
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
                <div className="h-14 w-14 rounded-full bg-[var(--navy)] grid place-items-center font-display text-xl font-semibold text-[var(--gold-light)]">
                  {s.name[0]}
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

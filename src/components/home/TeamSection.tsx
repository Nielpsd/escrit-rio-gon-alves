import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale, BookOpen, FileText, Gavel,
  Star, BarChart2, MessageCircle, ClipboardList,
  Banknote, Calculator, Search, Users,
} from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";

interface Member {
  id: number;
  name: string;
  role: string;
  label: string;
  quote: string;
  badge: React.ReactNode;
  photo: string;
}

const LAWYERS: Member[] = [
  {
    id: 1,
    name: "Dr. Renan Gonçalves",
    role: "Advogado · OAB/RO 10.297",
    label: "Sócio fundador",
    quote: "Passei anos dentro do INSS como gerente. Conheço os critérios de análise pela prática — e uso esse conhecimento a favor dos nossos clientes todos os dias.",
    badge: <Scale className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/bio/05.webp",
  },
  {
    id: 2,
    name: "Dr. Wesley Rodrigues",
    role: "Advogado · OAB/RO 15430",
    label: "Advogado",
    quote: "Cada caso tem sua particularidade. Meu papel é garantir que cada processo seja conduzido com a estratégia certa para o melhor resultado possível.",
    badge: <BookOpen className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/wesley.webp",
  },
  {
    id: 3,
    name: "Dra. Lucimeiry Boni",
    role: "Advogada · OAB/RO 10.236",
    label: "Advogada",
    quote: "Atuo com dedicação total em cada causa que assumo. Acredito que cada pessoa merece receber o que é seu por direito — esse é o nosso compromisso.",
    badge: <FileText className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/lucimeiry.webp",
  },
  {
    id: 4,
    name: "Dra. Ana Paula Oliveira",
    role: "Advogada · OAB/RO 9447",
    label: "Advogada",
    quote: "O direito tem o poder de transformar vidas. Cada processo que conduzimos representa uma família que vai ter acesso ao que merece.",
    badge: <Gavel className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/ana-paula.webp",
  },
];

const SUPPORT_ROW1: Member[] = [
  {
    id: 5,
    name: "Analicy da Hora",
    role: "Coordenadora do Jurídico",
    label: "Coordenadora",
    quote: "Coordeno o jurídico para garantir que cada processo siga o caminho certo. Organização e atenção aos detalhes fazem toda a diferença no resultado.",
    badge: <Star className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/analicy.webp",
  },
  {
    id: 6,
    name: "Daniel Garcia",
    role: "Administrativo e Financeiro",
    label: "Adm. e Financeiro",
    quote: "Manter tudo em ordem — do administrativo ao financeiro — é o que permite à equipe focar no que realmente importa: o caso de cada cliente.",
    badge: <BarChart2 className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/daniel.webp",
  },
  {
    id: 7,
    name: "Bruna Oliveira",
    role: "Administrativo e Comercial",
    label: "Adm. e Comercial",
    quote: "Sou o primeiro contato de muita gente que chega ao escritório. Meu papel é garantir que cada pessoa se sinta acolhida desde o início.",
    badge: <MessageCircle className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/bruna.webp",
  },
  {
    id: 8,
    name: "Milena Maeda",
    role: "Administrativo",
    label: "Administrativo",
    quote: "Cada processo precisa de uma base sólida para funcionar. Cuido da estrutura administrativa para que nada fique para trás.",
    badge: <ClipboardList className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/milena.webp",
  },
];

const SUPPORT_ROW2: Member[] = [
  {
    id: 9,
    name: "Letícia Favetta",
    role: "Financeiro",
    label: "Financeiro",
    quote: "A transparência financeira é parte do nosso compromisso com o cliente. Garanto que tudo seja claro e organizado em cada etapa.",
    badge: <Banknote className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/leticia.webp",
  },
  {
    id: 10,
    name: "Aline Dias",
    role: "Controladoria",
    label: "Controladoria",
    quote: "A controladoria garante que o escritório funcione com segurança e responsabilidade — para que a equipe possa entregar o melhor resultado.",
    badge: <Calculator className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/aline.webp",
  },
  {
    id: 11,
    name: "Ingrid da Silva",
    role: "Jurídico",
    label: "Jurídico",
    quote: "Cada detalhe jurídico importa. Trabalho para que nenhum prazo, documento ou informação relevante passe despercebido.",
    badge: <Search className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/ingrid.webp",
  },
  {
    id: 12,
    name: "Higor Vinicius",
    role: "Jurídico",
    label: "Jurídico",
    quote: "Apoiar a equipe jurídica com atenção e precisão é o que garante que cada processo seja conduzido da forma certa.",
    badge: <Users className="h-5 w-5 text-[var(--navy)]" />,
    photo: "/team/higor.webp",
  },
];

function PhotoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#1a3a6e] to-[var(--navy)]">
      <span className="font-display text-7xl font-bold text-white/20 select-none">{name[0]}</span>
    </div>
  );
}

function AccordionRow({
  members,
  isMobile,
  activeIndex,
  setActiveIndex,
  offset,
}: {
  members: Member[];
  isMobile: boolean;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  offset: number;
}) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-center lg:gap-4">
      {members.map((member, index) => {
        const globalIndex = offset + index;
        const isActive = activeIndex === globalIndex;
        return (
          <motion.div
            key={member.id}
            layout={!isMobile}
            onMouseEnter={!isMobile ? () => setActiveIndex(globalIndex) : undefined}
            onClick={isMobile ? () => setActiveIndex(activeIndex === globalIndex ? -1 : globalIndex) : undefined}
            className="flex flex-col gap-3 lg:w-auto"
            initial={false}
            animate={isMobile ? { width: "100%" } : { width: isActive ? "500px" : "175px" }}
            transition={{ type: "spring", stiffness: 120, damping: 24, mass: 1, restDelta: 0.001 }}
            style={{ minWidth: 0 }}
          >
            {isMobile ? (
              <div
                style={{ backgroundColor: isActive ? "var(--navy)" : "#E8EDF5" }}
                className="relative w-full overflow-hidden rounded-2xl p-4 cursor-pointer transition-colors duration-300"
              >
                <div className="flex flex-row items-center gap-3">
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
                    <img src={member.photo} alt={member.name} loading="lazy" width={400} height={600} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <p className={`text-sm font-semibold leading-snug ${isActive ? "text-white" : "text-[var(--navy)]"}`}>{member.name}</p>
                    <p className={`text-xs mt-0.5 ${isActive ? "text-[var(--gold-light)]" : "text-[var(--text-muted)]"}`}>{member.role}</p>
                    <p className={`text-xs mt-0.5 ${isActive ? "text-white/60" : "text-[var(--text-muted)]"}`}>{member.label}</p>
                  </div>
                  <div className={`ml-auto flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border ${isActive ? "border-white/20 bg-white/10 [&_svg]:text-white" : "border-[var(--border)] bg-white"}`}>
                    {member.badge}
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={"mobile-" + member.id}
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
              </div>
            ) : (
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
                      <img src={member.photo} alt={member.name} loading="lazy" width={400} height={600} className="h-full w-full object-cover object-top" />
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
  );
}

export function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const rows = [LAWYERS, SUPPORT_ROW1, SUPPORT_ROW2];

  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32 px-6 md:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <Eyebrow>Equipe</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Uma equipe inteira focada em{" "}
            <em className="hl">você</em>.
          </h2>
        </header>

        <div className="flex flex-col gap-3 lg:gap-12">
          {rows.map((row, rowIdx) => (
            <AccordionRow
              key={rowIdx}
              members={row}
              isMobile={isMobile}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              offset={rowIdx * 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

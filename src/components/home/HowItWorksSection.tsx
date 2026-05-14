import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";

interface Step {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

const STEPS: Step[] = [
  {
    id: 0,
    label: "Passo 01",
    title: "Conversa inicial pelo WhatsApp",
    description:
      "Você nos conta sua situação. Nossa equipe ouve o caso e identifica os pontos relevantes para a análise técnica — sem jargão, sem burocracia.",
    image: "/bio/04.webp",
  },
  {
    id: 1,
    label: "Passo 02",
    title: "Montagem do processo do jeito certo",
    description:
      "Orientamos sobre os documentos que fortalecem o pedido e descartamos os que podem atrapalhar. Um processo bem montado no início evita anos de espera depois.",
    image: "/bio/03.webp",
  },
  {
    id: 2,
    label: "Passo 03",
    title: "A gente conduz, você acompanha",
    description:
      "Cuidamos do protocolo, do acompanhamento, das respostas ao INSS e dos recursos. Você não precisa lidar com isso sozinho — só se manter informado.",
    image: "/bio/08.webp",
  },
  {
    id: 3,
    label: "Passo 04",
    title: "Preparação para perícia ou audiência",
    description:
      "Antes de qualquer perícia médica ou audiência, você recebe orientação completa do que vai acontecer e como se posicionar. Nada de surpresas.",
    image: "/bio/07.webp",
  },
  {
    id: 4,
    label: "Passo 05",
    title: "Na Justiça, se for o caso",
    description:
      "Se o pedido administrativo é negado, conduzimos a discussão no Judiciário com fundamentação técnica. Negativa administrativa não encerra o caminho.",
    image: "/bio/09.webp",
  },
];

interface StepCardProps {
  step: Step;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function StepCard({ step, isActive, onClick, onMouseEnter, onMouseLeave }: StepCardProps) {
  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={false}
      animate={{ backgroundColor: isActive ? "var(--navy)" : "#FFFFFF" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={
        "group cursor-pointer flex flex-col w-full p-[12px_16px] lg:p-5 rounded-2xl border transition-colors " +
        (isActive ? "border-transparent" : "border-[var(--border)] hover:border-[var(--gold)]/40")
      }
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-1 flex-1 pr-4">
          <span className={"text-xs font-medium tracking-widest uppercase " + (isActive ? "text-[var(--gold)]" : "text-[var(--text-muted)]")}>
            {step.label}
          </span>
          <h4 className={"font-display text-xl lg:text-2xl font-semibold leading-snug " + (isActive ? "text-white" : "text-[var(--navy)]")}>
            {step.title}
          </h4>
        </div>
        <motion.div
          animate={{ backgroundColor: isActive ? "var(--gold)" : "#F0F0F0" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="flex-shrink-0 w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center"
        >
          {isActive
            ? <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--navy)]" />
            : <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--navy)]" />
          }
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key={"exp-" + step.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm lg:text-base text-white/70 leading-relaxed mt-3 mb-4">
              {step.description}
            </p>
            <div className="md:hidden w-full aspect-[16/10] rounded-xl overflow-hidden mb-1">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section className="w-full py-24 lg:py-32 px-6 md:px-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Eyebrow>Como atuamos</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Simples para você. <em className="hl">Completo para o INSS</em>.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
          {/* Imagem — esquerda no desktop */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
            <div className="hidden md:block relative w-full h-[520px] lg:h-[600px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={STEPS[currentIndex].image}
                  alt={STEPS[currentIndex].title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Accordion de passos */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 order-1 md:order-2">
            {STEPS.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                isActive={currentIndex === index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

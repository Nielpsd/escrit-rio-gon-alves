import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const FAQ = [
  {
    q: "O INSS já negou meu pedido. Ainda tem caminho?",
    a: "Sim. A negativa administrativa não encerra a discussão — é possível recorrer administrativamente ou buscar a tutela do direito na esfera judicial. Cada caso depende da análise individual da fundamentação da negativa e da documentação disponível.",
  },
  {
    q: "Como funciona a contratação dos serviços?",
    a: "A contratação se formaliza por meio de procuração e contrato escrito de honorários. Em conformidade com o Provimento nº 205/2021 da OAB, condições financeiras são tratadas individualmente — fale com a equipe para entender as condições do seu caso.",
  },
  {
    q: "Vale a pena tentar sozinho pelo Meu INSS primeiro?",
    a: "O aplicativo facilita o protocolo, mas detalhes técnicos no preenchimento ou na documentação podem resultar em indeferimento. Uma negativa mal fundamentada pode dificultar pedidos futuros. A análise prévia identifica o melhor caminho para o caso.",
  },
  {
    q: "Moro em outro estado. É possível ser atendido?",
    a: "Sim. Realizamos atendimento online para qualquer cidade do Brasil, por WhatsApp ou videochamada, sem prejuízo da qualidade técnica.",
  },
  {
    q: "Como saber qual benefício se aplica ao meu caso?",
    a: "Depende da sua situação específica: histórico contributivo, idade, atividade exercida e documentação disponível. Por isso a análise é sempre individualizada — fale com a equipe para entender o que se aplica ao seu caso.",
  },
  {
    q: "Trabalhei na roça sem registro formal. Tenho direito a aposentadoria?",
    a: "Possivelmente sim. A legislação prevê regras específicas para o segurado especial, com comprovação por documentos materiais e, em alguns casos, prova testemunhal. Cada caso depende da análise da documentação disponível.",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className={"bg-white border border-[var(--border)] rounded-xl transition-all duration-300 " + (isOpen ? "shadow-md" : "hover:border-[var(--gold)]/40")}>
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
      >
        <span className={"font-display text-base transition-colors " + (isOpen ? "font-semibold text-[var(--navy)]" : "text-[var(--text)]")}>
          {question}
        </span>
        <div className="flex-shrink-0">
          {isOpen
            ? <X className="w-5 h-5 text-[var(--text-muted)]" />
            : <Plus className="w-5 h-5 text-[var(--navy)]" />
          }
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-2 mb-8">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Coluna esquerda */}
          <div className="lg:w-[35%]">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-semibold text-[var(--navy)] leading-[1.15] mb-10">
              Respostas diretas para quem não tem<br className="hidden lg:block" /> tempo a perder.
            </h2>

            {/* Card CTA */}
            <div className="bg-[var(--navy)] rounded-2xl p-8">
              <div className="mb-6 relative w-fit">
                <div className="w-14 h-14 rounded-full bg-[var(--gold)] grid place-items-center font-display text-2xl font-bold text-[var(--navy)]">
                  G
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[var(--navy)]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Fale com a equipe
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                Não encontrou sua dúvida aqui? Fale com nossa equipe pelo WhatsApp — respondemos rápido.
              </p>
              <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener" className="w-full justify-center">
                <WhatsAppIcon size={16} /> Abrir WhatsApp
              </WaveButton>
            </div>
          </div>

          {/* Coluna direita — accordion */}
          <div className="lg:w-[65%] space-y-2">
            {FAQ.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

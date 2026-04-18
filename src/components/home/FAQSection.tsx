"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SITE } from "@/lib/site";

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

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow className="mx-auto justify-center">Dúvidas frequentes</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Respostas diretas para <em className="hl">quem não tem tempo a perder</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Reunimos as dúvidas que mais ouvimos. Se a sua não está aqui, fale com a equipe
            pelo WhatsApp.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-white border border-[var(--border)] px-2 sm:px-6">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-[var(--border)] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-6 px-2 text-left"
                >
                  <span className="font-medium text-[var(--navy)]">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all ${
                      isOpen ? "bg-[var(--navy)] border-[var(--navy)] text-white rotate-45" : ""
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 px-2 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Outras dúvidas? Fale com nossa equipe pelo WhatsApp{" "}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener"
            className="text-[var(--navy)] font-medium underline-offset-4 hover:underline"
          >
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

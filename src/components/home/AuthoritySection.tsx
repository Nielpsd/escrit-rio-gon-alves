import { ArrowRight } from "lucide-react";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export function AuthoritySection() {
  return (
    <section
      id="sobre"
      className="w-full py-24 lg:py-32 px-6 md:px-16 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <h2 data-reveal className="reveal-init max-w-3xl text-center font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-[var(--navy)]">
          Quem já trabalhou no INSS sabe{" "}
          <em className="hl">como o sistema decide</em>.
        </h2>

        <p data-reveal className="reveal-init mt-5 max-w-xl text-center text-base text-[var(--text-muted)] leading-relaxed">
          Dr. Renan Gonçalves passou anos dentro do INSS como gerente. Hoje lidera
          uma equipe exclusivamente previdenciária — e transforma esse conhecimento
          interno em fundamentação técnica para cada caso.
        </p>

        <div data-reveal className="reveal-init mt-8">
          <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
            Falar com a equipe <ArrowRight size={16} />
          </WaveButton>
        </div>

        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          <div data-reveal className="reveal-init h-[340px] rounded-2xl overflow-hidden order-1">
            <img
              src="/bio/01.webp"
              alt="Dr. Renan Gonçalves"
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-5 order-2">
            <div data-reveal className="reveal-init bg-[var(--gold)] rounded-2xl px-7 py-6 flex justify-between items-center">
              <span className="font-display text-3xl font-bold text-[var(--navy)]">+10 anos</span>
              <span className="text-sm font-medium text-[var(--navy)]/70 text-right leading-snug">
                de experiência<br />previdenciária
              </span>
            </div>
            <div data-reveal className="reveal-init bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex-grow">
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] mb-3 flex items-center gap-2">
                <span className="text-[var(--gold)] text-xs">●</span> Ex-gerente do INSS
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Conhecemos o sistema por dentro. Sabemos os critérios de análise e como
                cada documento é avaliado na concessão de benefícios.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 order-3">
            <div data-reveal className="reveal-init bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex-grow">
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] mb-3 flex items-center gap-2">
                <span className="text-[var(--gold)] text-xs">●</span> Só previdenciário
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                O escritório atua exclusivamente em benefícios do INSS. Toda a atenção
                e o estudo da equipe estão concentrados em uma única especialidade.
              </p>
            </div>
            <div data-reveal className="reveal-init bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-7 py-6 flex justify-between items-center">
              <span className="font-display text-3xl font-bold text-[var(--gold)]">100%</span>
              <span className="text-sm text-[var(--text-muted)] text-right leading-snug">
                foco em<br />previdenciário
              </span>
            </div>
          </div>

          <div data-reveal className="reveal-init h-[340px] rounded-2xl overflow-hidden order-4">
            <img
              src="/bio/06.webp"
              alt="Escritório Gonçalves"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

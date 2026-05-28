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
          Quem viveu a prática por dentro sabe{" "}
          <em className="hl">o caminho para o benefício ser aprovado</em>.
        </h2>

        <p data-reveal className="reveal-init mt-5 max-w-xl text-center text-base text-[var(--text-muted)] leading-relaxed">
          Dr. Renan Gonçalves passou anos dentro do INSS como gerente. Hoje lidera
          uma equipe dedicada a benefícios do INSS — e usa esse conhecimento na prática
          a favor de cada cliente.
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
              width={400}
              height={340}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-5 order-2">
            <div data-reveal className="reveal-init bg-[var(--gold)] rounded-2xl px-7 py-6 flex justify-between items-center">
              <span className="font-display text-3xl font-bold text-[var(--navy)]">+10 anos</span>
              <span className="text-sm font-medium text-[var(--navy)]/70 text-right leading-snug">
                de experiência<br />na área
              </span>
            </div>
            <div data-reveal className="reveal-init bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex-grow">
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] mb-3 flex items-center gap-2">
                <span className="text-[var(--gold)] text-xs">●</span> Ex-gerente do INSS
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Conhecemos os critérios de análise pela prática — e usamos isso
                a favor do seu caso em cada etapa.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 order-3">
            <div data-reveal className="reveal-init bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex-grow">
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] mb-3 flex items-center gap-2">
                <span className="text-[var(--gold)] text-xs">●</span> Foco em previdenciário
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                O escritório tem foco principal em benefícios do INSS, mas também atua
                em direito trabalhista, pensão, divórcio, dano moral e outras causas da sua família.
              </p>
            </div>
            <div data-reveal className="reveal-init bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-7 py-6 flex justify-between items-center">
              <span className="font-display text-3xl font-bold text-[var(--gold)]">100%</span>
              <span className="text-sm text-[var(--text-muted)] text-right leading-snug">
                dedicação<br />ao seu caso
              </span>
            </div>
          </div>

          <div data-reveal className="reveal-init h-[340px] rounded-2xl overflow-hidden order-4">
            <img
              src="/bio/06.webp"
              alt="Escritório Gonçalves"
              loading="lazy"
              width={400}
              height={340}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

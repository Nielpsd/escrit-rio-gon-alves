import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

const MEMBERS = [
  "Renan", "Letícia", "Wesley", "Lucimeiry", "Camila",
  "Milena", "Aline", "Bruna", "Maria", "Marília", "Nathália",
];

export function TeamSection() {
  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Equipe</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Uma equipe inteira focada em <em className="hl">previdenciário</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Mais de 10 profissionais dedicados exclusivamente a benefícios previdenciários.
            Não somos um escritório generalista — cada pessoa da equipe se aprofunda,
            todos os dias, na mesma área do direito.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white border border-[var(--border)] p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)] mb-2">
                Atendimento presencial
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Escritórios físicos em Jaru e Alta Floresta D'Oeste (RO).
              </p>
            </div>
            <div className="rounded-xl bg-white border border-[var(--border)] p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)] mb-2">
                Atendimento online
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Para qualquer cidade do Brasil, com a mesma atenção técnica.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <WaveButton variant="primary" href={SITE.whatsapp} target="_blank" rel="noopener">
              Falar com a equipe <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {MEMBERS.map((n, i) => (
            <div
              key={n}
              className={`aspect-square rounded-xl border border-[var(--border)] bg-[var(--navy)] grid place-items-center font-display text-2xl text-[var(--gold-light)] ${
                i === 0 ? "col-span-2 row-span-2 text-5xl" : ""
              }`}
            >
              {n[0]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

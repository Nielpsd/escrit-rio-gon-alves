import { ArrowRight, Check } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

const WPP_PHONE = "5569992621298";

function buildWppLink(service: string) {
  const msg = `Olá! Gostaria de tirar dúvidas sobre *${service}*.`;
  return `https://api.whatsapp.com/send?phone=${WPP_PHONE}&text=${encodeURIComponent(msg)}`;
}

const SERVICES: { title: string; desc: string }[] = [
  {
    title: "Planejamento de Aposentadoria",
    desc: "Análise técnica das regras aplicáveis ao seu histórico contributivo.",
  },
  {
    title: "Aposentadoria por Invalidez",
    desc: "Benefício destinado a quem está permanentemente incapacitado para o trabalho.",
  },
  {
    title: "Auxílio-Doença",
    desc: "Benefício temporário em razão de incapacidade para o trabalho.",
  },
  {
    title: "Salário-Maternidade",
    desc: "Benefício devido durante o afastamento por nascimento ou adoção.",
  },
  {
    title: "Aposentadoria por Idade",
    desc: "Benefício para quem atingiu a idade mínima e o tempo de contribuição exigido.",
  },
  {
    title: "Aposentadoria do Professor",
    desc: "Regras específicas previstas em lei para professores da educação básica.",
  },
  {
    title: "Pensão por Morte",
    desc: "Benefício destinado a cônjuges, filhos e demais dependentes legalmente reconhecidos.",
  },
  {
    title: "BPC/LOAS",
    desc: "Benefício assistencial para idosos e pessoas com deficiência conforme critérios legais.",
  },
  {
    title: "Aposentadoria por Tempo de Contribuição",
    desc: "Análise das regras de transição aplicáveis ao caso concreto.",
  },
  {
    title: "Aposentadoria Especial",
    desc: "Benefício destinado a quem exerceu atividade exposta a agentes nocivos.",
  },
  {
    title: "Auxílio-Reclusão",
    desc: "Benefício destinado aos dependentes de segurado de baixa renda recolhido à prisão.",
  },
  {
    title: "Revisão de Benefícios",
    desc: "Análise técnica do cálculo do benefício e das teses revisionais cabíveis.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-[var(--surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>Áreas de atuação</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Se é benefício do INSS, a gente <em className="hl">conduz</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Atuamos em todos os tipos de benefício previdenciário e assistencial. Quem quer
            se aposentar, quem está afastado por saúde, quem perdeu um familiar segurado
            ou recebeu indeferimento — cada situação tem caminho técnico próprio.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={buildWppLink(s.title)}
              target="_blank"
              rel="noopener"
              aria-label={`Tirar dúvidas no WhatsApp sobre ${s.title}`}
              className="group relative flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--navy)] hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[var(--navy-light)] transition-colors group-hover:bg-[#22c55e]/15">
                  <Check size={16} className="text-[var(--navy)] group-hover:text-[#16a34a]" />
                </span>
                <ArrowRight
                  size={16}
                  className="flex-shrink-0 text-[var(--text-light)] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--navy)]"
                />
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{s.desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-2xl bg-[var(--navy)] p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-display text-xl text-white max-w-xl leading-snug">
            Não sabe qual benefício se aplica ao seu caso? Conte sua situação para nossa equipe.
          </p>
          <WaveButton variant="gold" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
            Falar no WhatsApp <ArrowRight size={16} />
          </WaveButton>
        </div>
      </div>
    </section>
  );
}

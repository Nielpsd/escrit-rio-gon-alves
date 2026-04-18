import { Eyebrow } from "@/components/site/Eyebrow";

const TESTIMONIALS = [
  { text: "Minha aposentadoria deu certo. Só agradecer ao Dr. Renan e à equipe.", name: "Eleni Rocha" },
  {
    text: "A questão do meu filho foi resolvida bem rápido, sem trabalho nenhum pra mim. Amei a atenção de toda a equipe.",
    name: "Carolina Assunção",
  },
  { text: "Dr. Renan, excelente profissional. Equipe muito atenciosa. Nota 10.", name: "Vera Lucia Lemes" },
  {
    text: "Nunca deixaram de me manter informada. Dois anos de processo e em nenhum momento desistiram de mim.",
    name: "Leuciane Silva",
  },
  { text: "Fui muito bem atendida, solucionaram nossa situação. Excelentes advogados.", name: "Érika Vieira" },
  { text: "Gostei muito do atendimento. Foi muito bom, graças a Deus deu tudo certo!", name: "Ilma Fernandes" },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="max-w-3xl">
        <Eyebrow>Depoimentos</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
          O que dizem <em className="hl">quem foi atendido</em> aqui.
        </h2>
        <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
          Manifestações espontâneas publicadas no Google Meu Negócio, reproduzidas com
          finalidade exclusivamente informativa. Cada caso depende da análise individual.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="relative rounded-2xl bg-[var(--surface)] p-7 pt-12">
            <span
              className="absolute left-6 top-1 font-display text-[80px] leading-none text-[var(--gold)] opacity-35"
              aria-hidden
            >
              "
            </span>
            <blockquote className="font-display text-lg italic text-[var(--navy)] leading-snug">
              {t.text}
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--navy)] font-display font-semibold text-[var(--gold-light)]">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-medium text-[var(--text)]">{t.name}</div>
                <div className="text-xs text-[var(--text-muted)]">Cliente</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-xs text-[var(--text-muted)]">
        Depoimentos espontâneos. Resultados em casos previdenciários dependem da análise
        individual de cada situação.
      </p>
    </section>
  );
}

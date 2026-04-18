import { Eyebrow } from "@/components/site/Eyebrow";

const CARDS = [
  {
    title: "Ex-gerente do INSS",
    body: "Conhecemos o sistema por dentro. Sabemos os critérios de análise e como cada documento é avaliado.",
  },
  {
    title: "Quem ensina os outros",
    body: "Dr. Renan é professor de direito previdenciário. Você é atendido por quem forma especialistas na área.",
  },
  {
    title: "Só previdenciário, todos os dias",
    body: "O escritório atua exclusivamente em benefícios do INSS. Toda a atenção e o estudo da equipe estão concentrados em uma única especialidade.",
  },
  {
    title: "Atendimento humano",
    body: "Cada caso é uma pessoa. Conduzimos cada atendimento com escuta, respeito e comunicação clara em todas as etapas.",
  },
];

export function AuthoritySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="max-w-3xl">
        <Eyebrow>Sobre o escritório</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
          Quem já trabalhou no INSS sabe <em className="hl">como o sistema decide</em>.
        </h2>
        <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
          Dr. Renan Gonçalves passou anos dentro do INSS como gerente. Conhece os critérios
          que aprovam e os detalhes que reprovam. Hoje lidera uma equipe que transforma esse
          conhecimento em fundamentação técnica para cada caso.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--gold)] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
          >
            <h3 className="font-display text-xl font-semibold text-[var(--navy)] leading-snug">
              {c.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Conheça o Escritório Gonçalves: atuação técnica e exclusiva em direito previdenciário, liderada por profissional com experiência prévia no INSS.",
      },
      { property: "og:title", content: "Sobre — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "História, missão e princípios do Escritório Gonçalves, dedicado integralmente ao direito previdenciário.",
      },
    ],
  }),
  component: SobrePage,
});

const VALORES = [
  {
    title: "Humanização",
    body:
      "Sabemos que por trás de cada processo existe uma pessoa que precisa de resposta — e que muitas vezes já se sentiu invisível diante do sistema. Tratamos cada cliente com atenção e respeito.",
  },
  {
    title: "Excelência técnica",
    body:
      "Dr. Renan também é professor de advogados. O nível de conhecimento que exigimos da equipe é o mesmo que ensinamos para outros profissionais da área.",
  },
  {
    title: "Transparência",
    body:
      "Você sempre sabe o que está acontecendo no seu processo. Nenhuma surpresa, nenhum abandono no meio do caminho.",
  },
  {
    title: "Especialização",
    body:
      "Atuação exclusiva em direito previdenciário. Toda a atenção, tempo e estudo da equipe estão concentrados em uma única área.",
  },
];

const DIFERENCIAIS = [
  "Liderança com atuação prévia como gerente do INSS",
  "Atendimento presencial em Rondônia (Jaru e Alta Floresta D'Oeste)",
  "Atendimento online para qualquer estado do Brasil",
  "Equipe dedicada exclusivamente ao direito previdenciário",
  "Mais de 143 avaliações no Google Meu Negócio",
  "Atividade docente do fundador na área previdenciária",
];

function SobrePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div
          className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          G
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <Eyebrow>Sobre o escritório</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white max-w-2xl">
              Um escritório que <em className="hl">nasceu de dentro do INSS</em>.
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/65 leading-relaxed">
              Dr. Renan Gonçalves não chegou ao direito previdenciário pelos livros. Chegou
              pela prática — como gerente do INSS, onde aprendeu de perto como o sistema
              funciona, quais pedidos são aprovados e por que tantos são negados.
            </p>
            <div className="mt-8">
              <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
                <MessageCircle size={18} /> Falar com a equipe
              </WaveButton>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)] grid place-items-center">
              <div className="text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[var(--gold)]/15 font-display text-4xl font-semibold text-[var(--gold-light)]">
                  R
                </div>
                <p className="mt-4 font-display text-lg text-white">Dr. Renan Gonçalves</p>
                <p className="text-xs text-white/45">{SITE.oab}</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
              Fundador & Advogado
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Nossa história</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Como tudo <em className="hl">começou</em>
            </h2>
          </div>
          <div className="space-y-5 text-base text-[var(--text-muted)] leading-relaxed">
            <p>
              Depois de anos dentro do INSS, Dr. Renan percebeu que a maioria das negativas
              não era falta de direito — era falta de preparo. Documentos errados, estratégias
              equivocadas, processos mal conduzidos. Pessoas que tinham o direito reconhecido
              em lei, mas saíam de mãos vazias.
            </p>
            <p>
              Foi por isso que fundou o Escritório Gonçalves: para estar do lado de quem
              precisa, com o mesmo conhecimento técnico que antes estava só do lado do sistema.
            </p>
            <p>
              Hoje, com uma equipe de mais de 10 profissionais e clientes em todo o Brasil,
              o escritório mantém o mesmo compromisso do primeiro dia — tratar cada caso
              como único, com escuta e fundamentação técnica.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO E VALORES */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Missão e valores</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              O que nos <em className="hl">orienta</em>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {VALORES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--border)] border-l-[3px] border-l-[var(--gold)] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <h3 className="font-display text-xl font-semibold text-[var(--navy)] leading-snug">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Características</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Nossa <em className="hl">forma de trabalho</em>
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {DIFERENCIAIS.map((d) => (
            <li
              key={d}
              className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-white p-5 transition-colors hover:border-[var(--navy)]"
            >
              <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[var(--navy-light)]">
                <Check size={16} className="text-[var(--navy)]" />
              </span>
              <span className="text-sm leading-relaxed text-[var(--text)]">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
            Quer entender se o seu caso tem <em className="hl">caminho</em>?
          </h2>
          <p className="mt-4 text-white/65 max-w-xl mx-auto">
            Conte sua situação para a nossa equipe. Sem compromisso, com conversa direta
            pelo WhatsApp.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Falar pelo WhatsApp <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

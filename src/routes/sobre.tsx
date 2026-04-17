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
    title: "Cada processo é uma pessoa",
    body:
      "Por trás de todo número de protocolo existe uma vida, uma família e uma história. Conduzimos cada atendimento com escuta, respeito e tempo.",
  },
  {
    title: "Estudo permanente",
    body:
      "Legislação, jurisprudência e teses previdenciárias mudam o tempo todo. Dr. Renan também leciona na área — manter-se atualizado é parte do trabalho.",
  },
  {
    title: "Você sempre sabe onde está",
    body:
      "Comunicação clara em cada etapa. Sem processo desaparecido, sem surpresas, sem juridiquês para te confundir.",
  },
  {
    title: "Só previdenciário",
    body:
      "Não atendemos outras áreas. Toda a atenção, tempo e estudo da equipe estão concentrados em uma única especialidade.",
  },
];

const DIFERENCIAIS = [
  "Liderança com experiência prévia como gerente do INSS",
  "Atendimento presencial em Rondônia (Jaru e Alta Floresta D'Oeste)",
  "Atendimento online para qualquer estado do Brasil",
  "Equipe dedicada exclusivamente ao direito previdenciário",
  "Atividade docente do fundador na área previdenciária",
  "Comunicação clara e acompanhamento próximo do processo",
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
              O escritório que <em className="hl">nasceu de dentro do INSS</em>.
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/65 leading-relaxed">
              Antes de advogar, Dr. Renan analisou pedidos como gerente do INSS. Viu de perto
              por que tantos benefícios eram negados — e decidiu estar do outro lado, ajudando
              a apresentá-los do jeito certo.
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
              Como gerente do INSS, Dr. Renan acompanhou centenas de análises de pedidos.
              Percebeu que muitas negativas não eram pelo direito não existir — eram por
              detalhes procedimentais: documento faltando, pedido formulado fora da regra
              correta, fundamentação técnica ausente.
            </p>
            <p>
              O Escritório Gonçalves nasceu dessa constatação. Se conhecemos o que o INSS
              olha, conseguimos preparar o pedido do jeito que ele precisa ser visto.
            </p>
            <p>
              Hoje, com equipe dedicada exclusivamente ao previdenciário, atendemos clientes
              em Rondônia presencialmente e em todo o Brasil de forma online — com a mesma
              atenção, perto ou longe.
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
      <section className="on-navy bg-[var(--navy)] py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Vamos <em className="hl">nos conhecer</em>?
          </h2>
          <p className="mt-5 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Conte sua situação no WhatsApp. A primeira conversa é só uma conversa — para você
            entender quem somos e nós entendermos como podemos ajudar.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Falar com a equipe <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

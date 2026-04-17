import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone, Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/quero-me-aposentar")({
  head: () => ({
    meta: [
      { title: "Quero me aposentar — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Você pode estar mais perto da aposentadoria do que imagina. Avaliação gratuita, sem compromisso. Atendimento em todo o Brasil.",
      },
      { property: "og:title", content: "Quero me aposentar — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Verifique seu direito à aposentadoria com quem já trabalhou dentro do INSS. Avaliação gratuita pelo WhatsApp.",
      },
    ],
  }),
  component: QueroMeAposentarPage,
});

const SITUACOES = [
  "Tenho mais de 60 anos e contribuí para o INSS",
  "Trabalhei muitos anos com carteira assinada",
  "Trabalhei na roça ou em atividade rural",
  "Sou professor e quero me aposentar mais cedo",
  "Trabalhei em condições insalubres ou de risco",
  "Já tentei me aposentar e fui negado",
];

const TIPOS = [
  {
    title: "Aposentadoria por Idade",
    desc: "Para quem tem 65 anos (homem) ou 62 anos (mulher) e pelo menos 15 anos de contribuição. Trabalhador rural se aposenta mais cedo: 60 anos (homem) e 55 anos (mulher).",
  },
  {
    title: "Aposentadoria por Tempo de Contribuição",
    desc: "Para quem tem longa carreira no mercado formal. A estratégia certa faz toda a diferença no valor final do benefício.",
  },
  {
    title: "Aposentadoria por Invalidez",
    desc: "Para quem não pode mais trabalhar de forma permanente por conta de doença ou acidente. Não exige idade mínima.",
  },
  {
    title: "Aposentadoria Especial (Insalubridade)",
    desc: "Para quem trabalhou exposto a agentes nocivos à saúde — ruído, poeira, produtos químicos, entre outros. Permite se aposentar mais cedo.",
  },
  {
    title: "Aposentadoria do Professor",
    desc: "Benefício específico para professores da educação básica. Condições e tempo diferenciados.",
  },
  {
    title: "Aposentadoria Rural",
    desc: "Para trabalhadores do campo. Pode ser aprovada mesmo sem contribuições formais, com documentação adequada.",
  },
];

const ALERTAS = [
  {
    title: "Um erro hoje pode atrasar em anos",
    desc: "Uma negativa mal fundamentada dificulta o processo futuro, mesmo com advogado.",
  },
  {
    title: "O valor faz diferença",
    desc: "A regra de aposentadoria que você escolhe define o valor que vai receber pelo resto da vida. Planejar certo vale muito.",
  },
  {
    title: "Você pode ter direito agora e não saber",
    desc: "Muita gente espera anos achando que ainda não pode. A avaliação gratuita resolve essa dúvida em minutos.",
  },
];

const PASSOS = [
  {
    title: "Fale com a gente pelo WhatsApp",
    desc: "Conta sua situação em poucos minutos. Nossa equipe já entende o que precisa saber.",
  },
  {
    title: "Receba a análise do seu caso",
    desc: "Avaliamos qual tipo de aposentadoria é o seu caso, o que você já tem e o que ainda falta.",
  },
  {
    title: "A gente cuida de tudo",
    desc: "Se decidir seguir, montamos o processo, acompanhamos cada etapa e te preparamos para perícia ou audiência se necessário.",
  },
];

const DEPOIMENTOS = [
  {
    text: "Minha aposentadoria deu certo. Só agradecer ao Dr. Renan e à equipe.",
    name: "Eleni Rocha",
  },
  {
    text: "Nunca deixaram de me manter informada. Dois anos de processo e em nenhum momento desistiram de mim.",
    name: "Leuciane Silva",
  },
  {
    text: "Fui muito bem atendida, solucionaram nossa situação. Excelentes advogados.",
    name: "Érika Vieira",
  },
];

function QueroMeAposentarPage() {
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
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 text-center">
          <Eyebrow className="mx-auto justify-center">Aposentadoria</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Você pode estar mais perto da aposentadoria do que <em className="hl">imagina</em>.
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Muita gente adia a aposentadoria por achar que ainda não tem direito — quando na
            verdade já poderia estar recebendo. Deixa a gente verificar o seu caso agora, de graça.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Verificar meu direito pelo WhatsApp{" "}
              <ArrowRight size={16} />
            </WaveButton>
          </div>
          <p className="mt-5 text-xs text-white/45">
            Avaliação gratuita · sem compromisso · resultado em minutos
          </p>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Identificação</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Você se encaixa em alguma dessas <em className="hl">situações</em>?
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {SITUACOES.map((s) => (
              <li
                key={s}
                className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-white p-5 transition-colors hover:border-[var(--navy)]"
              >
                <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[var(--navy-light)]">
                  <Check size={16} className="text-[var(--navy)]" />
                </span>
                <span className="text-sm leading-relaxed text-[var(--text)]">{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base text-[var(--text-muted)] leading-relaxed">
            Se você marcou pelo menos um item, provavelmente já tem direito ou está muito perto de
            ter. Nossa equipe analisa seu caso e te diz exatamente o que falta.
          </p>
        </div>
      </section>

      {/* TIPOS DE APOSENTADORIA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Tipos de aposentadoria</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Existe mais de um jeito de se aposentar. <em className="hl">Qual é o seu</em>?
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TIPOS.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--gold)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] leading-snug">
                {t.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE NÃO TENTAR SOZINHO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Atenção</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Parece simples pelo app. Mas os erros têm <em className="hl">custo alto</em>.
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              O Meu INSS foi criado para facilitar o pedido — não para garantir a aprovação.
              Responder perguntas de forma incorreta, enviar documentos desnecessários ou deixar
              de apresentar provas que o INSS exige pode resultar em uma negativa que leva anos
              para ser revertida.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ALERTAS.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--navy)] leading-snug">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Três passos. <em className="hl">Zero burocracia</em> para você.
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3 py-2 text-xs text-[var(--navy)]">
              <Check size={14} /> Você só paga quando o benefício for aprovado.
            </div>
          </div>
          <ol className="relative">
            {PASSOS.map((p, i) => (
              <li key={p.title} className="relative flex gap-5 pb-10 last:pb-0">
                {i < PASSOS.length - 1 && (
                  <span className="absolute left-[19px] top-12 bottom-0 w-px bg-[var(--border)]" />
                )}
                <span className="relative z-10 grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-[var(--navy)] font-display font-semibold text-[var(--gold-light)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold text-[var(--navy)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)] grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[var(--gold)]/15 font-display text-4xl font-semibold text-[var(--gold-light)]">
                    R
                  </div>
                  <p className="mt-4 font-display text-lg text-white">Dr. Renan Gonçalves</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
                Ex-gerente do INSS · Professor
              </div>
            </div>
            <div>
              <Eyebrow>Autoridade</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
                Você vai ser atendido por quem já trabalhou <em className="hl">dentro do INSS</em>.
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Dr. Renan Gonçalves foi gerente do INSS antes de se tornar advogado. Conhece os
                critérios de aprovação por dentro — e hoje usa esse conhecimento para garantir os
                direitos dos seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Quem já se aposentou com a <em className="hl">gente</em>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.name}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <blockquote className="font-display text-base italic text-[var(--navy)] leading-snug">
                "{d.text}"
              </blockquote>
              <figcaption className="mt-4 text-xs text-[var(--text-muted)]">{d.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="on-navy bg-[var(--navy)] py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow className="mx-auto justify-center">Avaliação gratuita</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Não espere mais. Você pode <em className="hl">já ter</em> esse direito.
          </h2>
          <p className="mt-5 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            A avaliação é gratuita, leva poucos minutos e pode mudar sua vida. Fale com a nossa
            equipe agora.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Quero verificar meu direito à aposentadoria{" "}
              <ArrowRight size={16} />
            </WaveButton>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
            <Phone size={12} /> {SITE.phone} · Atendimento online para todo o Brasil
          </p>
        </div>
      </section>
    </Layout>
  );
}

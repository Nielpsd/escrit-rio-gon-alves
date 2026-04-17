import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone, Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/quero-me-aposentar")({
  head: () => ({
    meta: [
      { title: "Aposentadoria — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Informações sobre os principais tipos de aposentadoria previstos na legislação brasileira e sobre a atuação do escritório nessa área.",
      },
      { property: "og:title", content: "Aposentadoria — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Conteúdo informativo sobre aposentadoria previdenciária e atuação especializada do Escritório Gonçalves.",
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
    desc: "Para quem atingiu a idade mínima legal e o tempo mínimo de contribuição. Trabalhador rural possui regras específicas, com idade reduzida.",
  },
  {
    title: "Aposentadoria por Tempo de Contribuição",
    desc: "Aplicável conforme as regras de transição estabelecidas pela Reforma da Previdência (EC 103/2019).",
  },
  {
    title: "Aposentadoria por Invalidez",
    desc: "Destinada a quem está permanentemente incapacitado para o trabalho, conforme avaliação médico-pericial.",
  },
  {
    title: "Aposentadoria Especial",
    desc: "Para quem exerceu atividade exposta a agentes nocivos à saúde, mediante comprovação técnica das condições de trabalho.",
  },
  {
    title: "Aposentadoria do Professor",
    desc: "Regras específicas previstas em lei para professores que comprovem o tempo de exercício efetivo em sala de aula.",
  },
  {
    title: "Aposentadoria Rural",
    desc: "Destinada ao segurado especial, mediante comprovação da atividade rural pelo período exigido em lei.",
  },
];

const ALERTAS = [
  {
    title: "Um erro hoje pode atrasar em anos",
    desc: "Uma negativa mal fundamentada dificulta o processo futuro, mesmo com advogado. O cuidado no início vale tempo lá na frente.",
  },
  {
    title: "A regra escolhida define o valor",
    desc: "A regra de aposentadoria que se aplica ao seu caso define o valor que você vai receber pelo resto da vida. Planejar com antecedência faz diferença.",
  },
  {
    title: "Você pode ter direito agora e não saber",
    desc: "Muita gente espera anos achando que ainda não pode. A análise técnica do histórico contributivo esclarece a dúvida com base em lei.",
  },
];

const PASSOS = [
  {
    title: "Fale com a gente pelo WhatsApp",
    desc: "Você conta sua situação em poucos minutos. Nossa equipe já entende o que precisa saber para começar a análise.",
  },
  {
    title: "Receba a análise técnica do seu caso",
    desc: "Avaliamos qual modalidade de aposentadoria se aplica, o que você já tem e o que ainda falta para fundamentar o pedido.",
  },
  {
    title: "A gente conduz, se for o caso",
    desc: "Se decidir seguir, montamos o processo, acompanhamos cada etapa e te preparamos para perícia ou audiência, quando necessário.",
  },
];

const DEPOIMENTOS = [
  {
    text: "Atendimento atencioso do início ao fim, com explicações claras sobre cada etapa.",
    name: "Eleni Rocha",
  },
  {
    text: "Comunicação clara e constante. Equipe sempre disponível para tirar dúvidas.",
    name: "Leuciane Silva",
  },
  {
    text: "Excelente atendimento. Equipe técnica e respeitosa.",
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
            Aposentadoria: <em className="hl">entenda as regras antes de decidir</em>.
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Conteúdo informativo sobre as principais modalidades de aposentadoria
            previstas na legislação previdenciária brasileira e sobre a atuação técnica
            do escritório nessa área.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Tirar dúvidas pelo WhatsApp <ArrowRight size={16} />
            </WaveButton>
          </div>
          <p className="mt-5 text-xs text-white/45">
            Conversa inicial sem compromisso · Conteúdo informativo · Provimento nº 205/2021 da OAB
          </p>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Perfis comuns</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Você se encaixa em alguma <em className="hl">dessas situações</em>?
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Se você marcou pelo menos um item, talvez já se encaixe em alguma regra
              prevista em lei. Nossa equipe analisa o seu caso e indica, com clareza,
              o que se aplica.
            </p>
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
            Identificar o direito a determinado benefício depende da análise individual do
            histórico contributivo, da idade, da atividade exercida e da documentação disponível.
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
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Conheça as principais modalidades previstas na legislação previdenciária brasileira.
            Cada uma tem regras, requisitos e impactos diferentes no valor do benefício.
          </p>
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

      {/* ALERTAS TÉCNICOS */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Pontos de atenção</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Parece simples pelo app. Mas <em className="hl">os erros têm custo alto</em>.
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              O Meu INSS foi criado para facilitar o pedido — não para garantir aprovação.
              Responder perguntas de forma incorreta, enviar documentos desnecessários ou
              deixar de apresentar provas exigidas pode resultar em uma negativa que
              demora anos para ser revertida.
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
            <Eyebrow>Como atuamos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Etapas do <em className="hl">atendimento</em>.
            </h2>
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
                  <p className="text-xs text-white/45">{SITE.oab}</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
                Ex-servidor do INSS · Docente
              </div>
            </div>
            <div>
              <Eyebrow>Sobre o fundador</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
                Atuação técnica em <em className="hl">previdenciário</em>.
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Dr. Renan Gonçalves atuou como gerente do INSS antes de se dedicar exclusivamente à
                advocacia previdenciária. Também leciona na área, contribuindo para a formação de
                outros profissionais.
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
            O que dizem os <em className="hl">clientes</em>
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
        <p className="mt-6 text-xs text-[var(--text-light)]">
          Manifestações espontâneas. Resultados em casos previdenciários dependem da análise
          individual.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="on-navy bg-[var(--navy)] py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Tem dúvidas sobre o seu caso? <em className="hl">Converse com a equipe</em>.
          </h2>
          <p className="mt-5 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            A análise individual do histórico contributivo é o que permite indicar, com base
            na lei, qual modalidade se aplica ao seu caso e quais documentos podem ser
            necessários.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Tirar dúvidas pelo WhatsApp <ArrowRight size={16} />
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

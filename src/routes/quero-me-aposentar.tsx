import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Phone, Star, X } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const FAQ_APOSENTADORIA = [
  {
    q: "Quanto tempo leva para aprovar uma aposentadoria?",
    a: "Na via administrativa, o INSS tem prazo de 45 dias para analisar o pedido. Na via judicial, o prazo varia conforme a vara e a complexidade do caso — pode levar de meses a anos.",
  },
  {
    q: "Preciso ir pessoalmente ao INSS para dar entrada?",
    a: "Não necessariamente. Muitos pedidos podem ser feitos pelo aplicativo Meu INSS. Porém, dar entrada sem orientação técnica aumenta o risco de negativa. A assessoria profissional faz diferença.",
  },
  {
    q: "Posso me aposentar mesmo tendo trabalhado sem carteira assinada?",
    a: "Depende da situação. Contribuintes individuais, segurados especiais (trabalhadores rurais) e facultativos têm caminhos específicos. A análise do histórico contributivo esclarece o que se aplica.",
  },
  {
    q: "Qual regra de aposentadoria é mais vantajosa para mim?",
    a: "Não existe uma resposta única — depende da sua idade, tempo de contribuição, salários e atividade exercida. A análise técnica individual é o que permite indicar a regra mais vantajosa.",
  },
  {
    q: "Já me aposentei, mas acho que o valor está errado. O que fazer?",
    a: "É possível pedir a revisão do benefício. O INSS pode ter desconsiderado contribuições, períodos especiais ou aplicado uma regra menos favorável. Entre em contato para uma análise.",
  },
  {
    q: "Se meu pedido for negado, perco o direito?",
    a: "Não. A negativa do benefício pode ser contestada com recurso administrativo (prazo de 30 dias) ou ação judicial. O prazo para buscar o benefício na Justiça é de 5 anos após a negativa.",
  },
];

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

const ERROS = [
  {
    erro: "Protocolar sem verificar o CNIS antes",
    consequencia: "Contribuições perdidas, períodos especiais não reconhecidos e benefício calculado com valor menor.",
  },
  {
    erro: "Escolher a regra de transição errada",
    consequencia: "Pode custar centenas de reais por mês pelo resto da vida. Cada regra gera um valor diferente.",
  },
  {
    erro: "Enviar documentos incompletos na perícia médica",
    consequencia: "Negativa por falta de comprovação — mesmo quando o direito existe. A preparação pré-perícia é decisiva.",
  },
  {
    erro: "Deixar o prazo vencer após o benefício ser negado",
    consequencia: "30 dias para recorrer administrativamente. Depois disso, só via judicial — mais demorado e caro.",
  },
  {
    erro: "Usar os documentos errados para comprovar atividade rural",
    consequencia: "Negativa por falta de prova material. A lei exige tipos específicos de documentos que muitos desconhecem.",
  },
  {
    erro: "Não considerar tempo especial no cálculo",
    consequencia: "Anos de trabalho insalubre que poderiam reduzir o tempo de contribuição exigido acabam ignorados.",
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
  {
    text: "Me senti acolhida desde o primeiro contato. Conseguiram minha aposentadoria quando achei que era impossível.",
    name: "Rosana Alves",
  },
  {
    text: "Profissionais sérios e comprometidos. Explicaram tudo de forma simples e resolveram meu caso rápido.",
    name: "José Pereira",
  },
  {
    text: "Tive o pedido negado antes de contratar o escritório. Com eles, consegui reverter e receber os valores atrasados.",
    name: "Maria Aparecida",
  },
];

function QueroMeAposentarPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <motion.div
          className="relative mx-auto max-w-4xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Eyebrow className="mx-auto justify-center">Aposentadoria</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Aposentadoria: <em className="hl">entenda as regras antes de decidir</em>.
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Conteúdo informativo sobre as principais modalidades de aposentadoria
            previstas na legislação previdenciária brasileira e sobre a atuação técnica
            do escritório nessa área.
          </p>
          <p className="mt-4 text-xs text-white/45">
            Conversa inicial sem compromisso · Conteúdo informativo · Provimento nº 205/2021 da OAB
          </p>
        </motion.div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Perfis comuns</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Você se encaixa em alguma <br />
              <em className="hl">dessas situações</em>?
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
          {TIPOS.map((t, i) => (
            <motion.div
              key={t.title}
              className="rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--gold)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] leading-snug">
                {t.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ERROS COMUNS */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Erros comuns</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              O que faz muita gente <em className="hl">perder anos de benefício</em>
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Dar entrada na aposentadoria sem orientação técnica é arriscado. Veja os erros mais
              comuns — e o que cada um pode custar.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {ERROS.map((e, i) => (
              <motion.div
                key={e.erro}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-red-50">
                    <X size={14} className="text-red-500" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-[var(--navy)]">{e.erro}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{e.consequencia}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALERTAS TÉCNICOS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Pontos de atenção</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Parece simples pelo app. <br />
            Mas <em className="hl">os erros têm custo alto</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            O Meu INSS foi criado para facilitar o pedido — não para garantir aprovação.
            Responder perguntas de forma incorreta, enviar documentos desnecessários ou
            deixar de apresentar provas exigidas pode resultar em uma negativa que
            demora anos para ser revertida.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ALERTAS.map((a, i) => (
            <motion.div
              key={a.title}
              className="rounded-2xl border border-[var(--border)] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] leading-snug">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
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
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)]">
              <img
                src="/about-renan.webp"
                alt="Dr. Renan Gonçalves"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
              Ex-servidor do INSS · Docente
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Sobre o fundador</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Atuação técnica em <em className="hl">previdenciário</em>.
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Dr. Renan Gonçalves atuou como gerente do INSS antes de se dedicar exclusivamente à
              advocacia previdenciária. Também leciona na área, contribuindo para a formação de
              outros profissionais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              O que dizem os <em className="hl">clientes</em>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <motion.figure
                key={d.name}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <blockquote className="font-display text-base italic text-[var(--navy)] leading-snug">
                  "{d.text}"
                </blockquote>
                <figcaption className="mt-4 text-xs text-[var(--text-muted)]">{d.name}</figcaption>
              </motion.figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-[var(--text-light)]">
            Manifestações espontâneas. Resultados em casos previdenciários dependem da análise
            individual.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl mb-10">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)]">
            Perguntas que a gente mais <em className="hl">recebe</em>
          </h2>
        </div>
        <FaqAccordion items={FAQ_APOSENTADORIA} />
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
          <div className="relative">
            <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
              Tem dúvidas sobre o seu caso? <em className="hl">Converse com a equipe</em>.
            </h2>
            <p className="mt-4 text-white/65 max-w-xl mx-auto">
              A análise individual do histórico contributivo é o que permite indicar, com base
              na lei, qual modalidade se aplica ao seu caso e quais documentos podem ser
              necessários.
            </p>
            <div className="mt-8 flex justify-center">
              <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
                <WhatsAppIcon size={18} /> Tirar dúvidas pelo WhatsApp <ArrowRight size={16} />
              </WaveButton>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
              <Phone size={12} /> {SITE.phone} · Atendimento online para todo o Brasil
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";

import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CoverageSection } from "@/components/site/CoverageSection";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const FAQ_SOBRE = [
  {
    q: "O Dr. Renan realmente trabalhou no INSS?",
    a: "Sim. Antes de fundar o escritório, Dr. Renan atuou como gerente do INSS, onde acompanhou de perto os critérios técnicos que determinam a aprovação ou negativa de cada pedido.",
  },
  {
    q: "O escritório atua apenas em benefícios do INSS?",
    a: "Não. O foco principal é em benefícios do INSS — aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte, revisão de benefícios e trabalhador rural. Mas também atuamos em direito trabalhista, pensão alimentícia, divórcio, dano moral e outras causas da família.",
  },
  {
    q: "Por que um escritório com foco na área faz diferença?",
    a: "Porque o direito previdenciário tem regras próprias, prazos específicos e critérios técnicos que mudam com frequência. Um erro de estratégia no início pode atrasar o benefício em anos.",
  },
  {
    q: "O escritório tem experiência com casos negados ou complicados?",
    a: "Sim. Parte significativa dos casos que chegam ao escritório já passou por negativa administrativa. A experiência prévia do Dr. Renan dentro do INSS ajuda a entender o que o sistema exige para reverter essa situação.",
  },
  {
    q: "Posso falar diretamente com o Dr. Renan?",
    a: "Sim. Todos os processos passam pelo Dr. Renan e, sempre que necessário, é possível agendar uma reunião diretamente com ele.",
  },
];

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

const STATS = [
  { value: "250+", label: "Avaliações no Google" },
  { value: "10+", label: "Profissionais especializados" },
  { value: "3", label: "Escritórios em RO" },
  { value: "100%", label: "Dedicação ao seu caso" },
];

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
      "Foco principal em benefícios do INSS, com toda a atenção e estudo da equipe concentrados onde você mais precisa.",
  },
];

const DIFERENCIAIS = [
  "Liderança com atuação prévia como gerente do INSS",
  "3 escritórios presenciais em Rondônia",
  "Atendimento online para qualquer estado do Brasil",
  "Equipe com foco em benefícios do INSS e demandas da família",
  "Mais de 250 avaliações no Google Meu Negócio",
  "Atividade docente do fundador na área previdenciária",
];

const TIMELINE = [
  {
    ano: "2014",
    titulo: "Início dos estudos",
    desc: "Dr. Renan começa a estudar Direito, já com interesse especial na área previdenciária.",
  },
  {
    ano: "Concurso",
    titulo: "Entrada no INSS",
    desc: "Aprovação no concurso público e início da carreira como servidor do INSS, acompanhando de perto os critérios de análise dos benefícios.",
  },
  {
    ano: "Gerência",
    titulo: "Gerente do INSS",
    desc: "Promoção ao cargo de gerente — cargo que permitiu entender a fundo como o sistema decide sobre a aprovação ou negativa de cada pedido.",
  },
  {
    ano: "Virada",
    titulo: "Saída do INSS",
    desc: "Após anos como gerente, Dr. Renan percebe que podia usar esse conhecimento para ajudar as pessoas do lado de fora do sistema.",
  },
  {
    ano: "Fundação",
    titulo: "Primeira unidade — Alta Floresta D'Oeste",
    desc: "Abertura do escritório em Alta Floresta D'Oeste (RO), com foco em benefícios do INSS e atendimento humanizado.",
  },
  {
    ano: "Expansão",
    titulo: "Unidade Jaru",
    desc: "Abertura da unidade em Jaru (RO) para ampliar o atendimento presencial na região.",
  },
  {
    ano: "Sede",
    titulo: "Cacoal — sede do escritório",
    desc: "Abertura da sede em Cacoal (RO), consolidando a presença do escritório no estado.",
  },
  {
    ano: "Hoje",
    titulo: "Unidade online — todo o Brasil",
    desc: "Mais de 10 profissionais, 3 escritórios em RO, atendimento online para qualquer estado e mais de 250 avaliações positivas no Google.",
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

function SobrePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Eyebrow className="mx-auto justify-center">Sobre o escritório</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Um escritório que <em className="hl">nasceu da prática</em>.
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
              Dr. Renan Gonçalves não chegou ao direito pelos livros. Chegou
              pela prática — como gerente do INSS, onde aprendeu de perto como o processo
              funciona, quais pedidos são aprovados e por que tantos são negados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl font-bold text-[var(--navy)]">{s.value}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <motion.div className="lg:sticky lg:top-28 lg:self-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Eyebrow>Nossa história</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Como tudo <em className="hl">começou</em>
            </h2>
            <div className="mt-8">
              <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                <WhatsAppIcon size={16} /> Falar no WhatsApp <ArrowRight size={14} />
              </WaveButton>
            </div>
          </motion.div>
          <motion.div className="space-y-5 text-base text-[var(--text-muted)] leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
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
          </motion.div>
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Trajetória</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Uma linha do <em className="hl">tempo de dedicação</em>
            </h2>
          </div>
          <div className="mt-14 relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--border)] md:left-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.titulo}
                  className={`relative flex gap-6 md:w-1/2 ${i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right md:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={`relative z-10 flex-shrink-0 grid h-10 w-10 place-items-center rounded-full bg-[var(--navy)] text-[var(--gold-light)] font-display text-xs font-semibold ${i % 2 !== 0 ? "md:order-last" : ""}`}>
                    {i + 1}
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-white p-6 flex-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">{item.ano}</span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-[var(--navy)]">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO E VALORES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
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
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
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
          Manifestações espontâneas publicadas no Google. Resultados dependem de análise individual de cada caso.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl mb-10">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)]">
            Perguntas que a gente mais <em className="hl">recebe</em>
          </h2>
        </div>
        <FaqAccordion items={FAQ_SOBRE} />
      </section>

      <CoverageSection />

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
          <div className="relative">
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
                <WhatsAppIcon size={18} /> Falar pelo WhatsApp <ArrowRight size={16} />
              </WaveButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

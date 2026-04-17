import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Plus,
  Star,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { WaveButton } from "@/components/site/WaveButton";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escritório Gonçalves — Advocacia Previdenciária | Jaru e Alta Floresta D'Oeste (RO)" },
      {
        name: "description",
        content:
          "Escritório de advocacia dedicado ao direito previdenciário. Conteúdo informativo sobre aposentadorias, auxílios, BPC/LOAS, pensões e revisões. Atendimento presencial em Rondônia e online em todo o Brasil.",
      },
      {
        property: "og:title",
        content: "Escritório Gonçalves — Advocacia Previdenciária",
      },
      {
        property: "og:description",
        content:
          "Conteúdo informativo sobre direito previdenciário. Site em conformidade com o Provimento nº 205/2021 da OAB.",
      },
    ],
  }),
  component: Home,
});

const WPP_PHONE = "5569992621298";
const buildWppLink = (service: string) => {
  const msg = `Olá! Gostaria de tirar dúvidas sobre *${service}*.`;
  return `https://api.whatsapp.com/send?phone=${WPP_PHONE}&text=${encodeURIComponent(msg)}`;
};

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

const STEPS = [
  {
    title: "Conversa inicial pelo WhatsApp",
    desc: "Você nos conta sua situação. Nossa equipe ouve o caso e identifica os pontos relevantes para a análise técnica.",
  },
  {
    title: "Montagem do processo do jeito certo",
    desc: "Orientamos sobre os documentos que fortalecem o pedido e descartamos os que podem atrapalhar. Um processo bem montado no início evita anos de espera depois.",
  },
  {
    title: "A gente conduz, você acompanha",
    desc: "Cuidamos do protocolo, do acompanhamento, das respostas ao INSS, dos recursos e das ações judiciais quando cabíveis. Você não precisa lidar com isso sozinho.",
  },
  {
    title: "Preparação para perícia ou audiência",
    desc: "Antes de qualquer perícia médica ou audiência, você recebe orientação completa do que vai acontecer e como se posicionar. Nada de surpresas.",
  },
  {
    title: "Na Justiça, se for o caso",
    desc: "Se o pedido administrativo é negado, conduzimos a discussão no Judiciário com fundamentação técnica. Negativa administrativa não encerra o caminho.",
  },
];

const TESTIMONIALS = [
  {
    text: "Minha aposentadoria deu certo. Só agradecer ao Dr. Renan e à equipe.",
    name: "Eleni Rocha",
  },
  {
    text: "A questão do meu filho foi resolvida bem rápido, sem trabalho nenhum pra mim. Amei a atenção de toda a equipe.",
    name: "Carolina Assunção",
  },
  {
    text: "Dr. Renan, excelente profissional. Equipe muito atenciosa. Nota 10.",
    name: "Vera Lucia Lemes",
  },
  {
    text: "Nunca deixaram de me manter informada. Dois anos de processo e em nenhum momento desistiram de mim.",
    name: "Leuciane Silva",
  },
  {
    text: "Fui muito bem atendida, solucionaram nossa situação. Excelentes advogados.",
    name: "Érika Vieira",
  },
  {
    text: "Gostei muito do atendimento. Foi muito bom, graças a Deus deu tudo certo!",
    name: "Ilma Fernandes",
  },
];

const FAQ = [
  {
    q: "O INSS já negou meu pedido. Ainda tem caminho?",
    a: "Sim. A negativa administrativa não encerra a discussão — é possível recorrer administrativamente ou buscar a tutela do direito na esfera judicial. Cada caso depende da análise individual da fundamentação da negativa e da documentação disponível.",
  },
  {
    q: "Como funciona a contratação dos serviços?",
    a: "A contratação se formaliza por meio de procuração e contrato escrito de honorários. Em conformidade com o Provimento nº 205/2021 da OAB, condições financeiras são tratadas individualmente — fale com a equipe para entender as condições do seu caso.",
  },
  {
    q: "Vale a pena tentar sozinho pelo Meu INSS primeiro?",
    a: "O aplicativo facilita o protocolo, mas detalhes técnicos no preenchimento ou na documentação podem resultar em indeferimento. Uma negativa mal fundamentada pode dificultar pedidos futuros. A análise prévia identifica o melhor caminho para o caso.",
  },
  {
    q: "Moro em outro estado. É possível ser atendido?",
    a: "Sim. Realizamos atendimento online para qualquer cidade do Brasil, por WhatsApp ou videochamada, sem prejuízo da qualidade técnica.",
  },
  {
    q: "Como saber qual benefício se aplica ao meu caso?",
    a: "Depende da sua situação específica: histórico contributivo, idade, atividade exercida e documentação disponível. Por isso a análise é sempre individualizada — fale com a equipe para entender o que se aplica ao seu caso.",
  },
  {
    q: "Trabalhei na roça sem registro formal. Tenho direito a aposentadoria?",
    a: "Possivelmente sim. A legislação prevê regras específicas para o segurado especial, com comprovação por documentos materiais e, em alguns casos, prova testemunhal. Cada caso depende da análise da documentação disponível.",
  },
];

const POSTS = [
  {
    tag: "Aposentadoria",
    title: "Quanto paga o INSS para a maioria dos brasileiros? Entenda.",
    excerpt:
      "O valor médio dos benefícios pode te surpreender. Veja como funciona o cálculo previdenciário.",
    date: "14/01/2025",
  },
  {
    tag: "Benefícios",
    title: "Lula veta projeto que equipara diabetes tipo 1 a deficiência",
    excerpt:
      "O que muda na prática para portadores de diabetes que buscavam direitos previdenciários equiparados.",
    date: "14/01/2025",
  },
  {
    tag: "Pensão",
    title: "Lula vetou pensão para mães de crianças com anencefalia. Entenda!",
    excerpt:
      "Decisão impacta diretamente famílias que aguardavam a sanção da lei.",
    date: "13/01/2025",
  },
];

function Hero() {
  return (
    <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
      <div
        className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
        aria-hidden
      >
        G
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <Eyebrow>Direito Previdenciário</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white max-w-2xl">
            Direito previdenciário com <em className="hl">quem conhece o sistema por dentro</em>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/65 leading-relaxed">
            Dr. Renan Gonçalves atuou como gerente do INSS antes de fundar o escritório. Hoje
            lidera uma equipe dedicada exclusivamente ao direito previdenciário, com atendimento
            presencial em Rondônia e online para todo o Brasil.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-3 text-sm text-[var(--gold-light)]">
            <Check size={16} />
            Conteúdo informativo · Atendimento mediante contato prévio
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Falar com a equipe
            </WaveButton>
            <WaveButton variant="outline-light" size="lg" href="#servicos">
              Ver áreas de atuação <ArrowRight size={16} />
            </WaveButton>
          </div>

          <p className="mt-6 text-xs text-white/45">
            Atendimento presencial em Rondônia · Online para todo o Brasil
          </p>
        </div>

        {/* Card lateral */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--gold)] text-[var(--gold)]" />
              ))}
              <span className="ml-2 text-xs text-white/55">Avaliações no Google</span>
            </div>
            <p className="font-display text-xl italic leading-snug text-white">
              "Comunicação clara e constante. A equipe sempre manteve atenção ao processo."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--navy-mid)] font-display font-semibold text-[var(--gold-light)]">
                L
              </div>
              <div>
                <div className="text-sm text-white">Leuciane Silva</div>
                <div className="text-xs text-white/45">Cliente</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
            Ex-servidor do INSS
          </div>
        </div>
      </div>
    </section>
  );
}

function Authority() {
  const cards = [
    {
      title: "Ex-gerente do INSS",
      body:
        "Conhecemos o sistema por dentro. Sabemos os critérios de análise e como cada documento é avaliado.",
    },
    {
      title: "Quem ensina os outros",
      body:
        "Dr. Renan é professor de direito previdenciário. Você é atendido por quem forma especialistas na área.",
    },
    {
      title: "Só previdenciário, todos os dias",
      body:
        "O escritório atua exclusivamente em benefícios do INSS. Toda a atenção e o estudo da equipe estão concentrados em uma única especialidade.",
    },
    {
      title: "Atendimento humano",
      body:
        "Cada caso é uma pessoa. Conduzimos cada atendimento com escuta, respeito e comunicação clara em todas as etapas.",
    },
  ];

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
        {cards.map((c) => (
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

function Services() {
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

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Como atuamos</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Simples para você. <em className="hl">Completo para o INSS</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Você não precisa entender de leis nem enfrentar filas. A gente conduz cada
            etapa — no INSS ou na Justiça — e te mantém informado o tempo todo.
          </p>
          <div className="mt-8">
            <WaveButton variant="primary" href={SITE.whatsapp} target="_blank" rel="noopener">
              Falar com a equipe <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>

        <ol className="relative">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 pb-10 last:pb-0">
              {i < STEPS.length - 1 && (
                <span className="absolute left-[19px] top-12 bottom-0 w-px bg-[var(--border)]" />
              )}
              <span className="relative z-10 grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-[var(--navy)] font-display font-semibold text-[var(--gold-light)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-xl font-semibold text-[var(--navy)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Team() {
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
          {[
            "Renan",
            "Letícia",
            "Wesley",
            "Lucimeiry",
            "Camila",
            "Milena",
            "Aline",
            "Bruna",
            "Maria",
            "Marília",
            "Nathália",
          ].map((n, i) => (
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

function Testimonials() {
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
          <figure
            key={t.name}
            className="relative rounded-2xl bg-[var(--surface)] p-7 pt-12"
          >
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

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow className="mx-auto justify-center">Dúvidas frequentes</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Respostas diretas para <em className="hl">quem não tem tempo a perder</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Reunimos as dúvidas que mais ouvimos. Se a sua não está aqui, fale com a equipe
            pelo WhatsApp.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-white border border-[var(--border)] px-2 sm:px-6">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-[var(--border)] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-6 px-2 text-left"
                >
                  <span className="font-medium text-[var(--navy)]">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all ${
                      isOpen
                        ? "bg-[var(--navy)] border-[var(--navy)] text-white rotate-45"
                        : ""
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 px-2 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Outras dúvidas? Fale com nossa equipe pelo WhatsApp{" "}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener"
            className="text-[var(--navy)] font-medium underline-offset-4 hover:underline"
          >
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <Eyebrow>Blog</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Entenda seus direitos <em className="hl">antes de precisar deles</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Conteúdo simples, direto e técnico sobre benefícios do INSS. Sem juridiquês,
            em conformidade com o Provimento nº 205/2021 da OAB.
          </p>
        </div>
        <WaveButton variant="ghost" href="/blog">
          Ver todos os artigos <ArrowRight size={16} />
        </WaveButton>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-[var(--navy)] to-[var(--navy-mid)] relative overflow-hidden">
              <div
                className="absolute inset-0 font-display text-[160px] leading-none text-white/10 grid place-items-center select-none"
                aria-hidden
              >
                G
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block rounded-full bg-[var(--gold-pale)] px-3 py-1 text-xs font-medium text-[var(--gold-deep)] mb-4">
                {p.tag}
              </span>
              <h3 className="font-display text-xl font-semibold text-[var(--navy)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{p.excerpt}</p>
              <div className="mt-5 text-xs text-[var(--text-light)]">{p.date}</div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-[var(--text-muted)]">
        Conteúdo informativo · publicação periódica
      </p>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="on-navy bg-[var(--navy)] text-white relative overflow-hidden">
      <div
        className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none"
        aria-hidden
      >
        G
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-24 lg:py-32 text-center">
        <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white max-w-3xl mx-auto">
          Tem dúvidas sobre o seu caso? <em className="hl">Converse com a nossa equipe</em>.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base text-white/65 leading-relaxed">
          Atendimento mediante contato prévio. A análise individual de cada situação é o que
          permite indicar, com base na legislação, os caminhos cabíveis.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
            <MessageCircle size={18} /> Falar com a equipe
          </WaveButton>
          <WaveButton variant="outline-light" size="lg" href={`tel:+5569992621298`}>
            {SITE.phone}
          </WaveButton>
        </div>

        <p className="mt-8 text-sm text-white/45">
          {SITE.phone} · {SITE.email}
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-[var(--gold-light)] transition-colors"
        >
          <ChevronDown size={14} className="rotate-180" /> Voltar ao topo
        </a>
      </div>
    </section>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />
      <Authority />
      <Services />
      <HowItWorks />
      <Team />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <FinalCTA />
    </Layout>
  );
}

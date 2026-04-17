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
      { title: "Escritório Gonçalves — Aposentadoria e benefícios do INSS" },
      {
        name: "description",
        content:
          "O INSS negou? Você ainda pode receber o que é seu. Liderado por ex-gerente do INSS. Avaliação gratuita. Atendimento em todo o Brasil.",
      },
      {
        property: "og:title",
        content: "Escritório Gonçalves — Aposentadoria e benefícios do INSS",
      },
      {
        property: "og:description",
        content:
          "Especialistas em direito previdenciário. Você só paga quando o benefício for aprovado.",
      },
    ],
  }),
  component: Home,
});

const WPP_PHONE = "5569992621298";
const buildWppLink = (service: string) => {
  const msg = `Olá, Renan! Tenho interesse em saber mais sobre *${service}*. Pode me ajudar?`;
  return `https://api.whatsapp.com/send?phone=${WPP_PHONE}&text=${encodeURIComponent(msg)}`;
};

const SERVICES = [
  "Planejamento de Aposentadoria",
  "Aposentadoria por Invalidez",
  "Auxílio-Doença (Auxílio por Incapacidade)",
  "Salário-Maternidade",
  "Aposentadoria por Idade",
  "Aposentadoria do Professor",
  "Pensão por Morte",
  "BPC/LOAS",
  "Aposentadoria por Tempo de Contribuição",
  "Aposentadoria Especial (Insalubridade)",
  "Auxílio-Reclusão",
  "Revisão de Benefícios",
];

const STEPS = [
  {
    title: "Análise gratuita do seu caso",
    desc: "Você nos conta sua situação pelo WhatsApp. Avaliamos a viabilidade, identificamos os pontos que podem travar o processo e traçamos a melhor estratégia antes de qualquer compromisso.",
  },
  {
    title: "Montamos o processo do jeito certo",
    desc: "Separamos os documentos que fortalecem seu pedido e descartamos os que podem atrapalhar. Um processo bem montado no início evita anos de espera depois.",
  },
  {
    title: "A gente assume o processo, você descansa",
    desc: "Cuidamos de tudo: protocolo, acompanhamento, respostas ao INSS, recursos e ações judiciais quando necessário. Você não precisa lidar com nada disso sozinho.",
  },
  {
    title: "Preparamos você para perícia ou audiência",
    desc: "Antes de qualquer perícia médica ou audiência, você recebe orientação completa do que vai acontecer, o que dizer e como se posicionar. Nada de surpresas.",
  },
  {
    title: "Na Justiça se precisar",
    desc: "Se o INSS negar, levamos para o Judiciário. Negativa não é o fim — para nós, é só o começo de outra estratégia.",
  },
];

const TESTIMONIALS = [
  {
    text: "Minha aposentadoria deu certo. Só agradecer ao Dr. Renan e à equipe.",
    name: "Eleni Rocha",
  },
  {
    text: "Meu filho é autista e a questão foi resolvida bem rápido, sem trabalho nenhum pra mim. Amei a atenção de toda a equipe.",
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
    q: "O INSS já negou meu pedido. Ainda tem jeito?",
    a: "Sim. Negativa não é sentença definitiva. Podemos recorrer administrativamente ou entrar com ação judicial. Em muitos casos, o benefício é aprovado na segunda tentativa com a estratégia certa.",
  },
  {
    q: "Quanto custa contratar o escritório?",
    a: "Na maioria dos casos, você não paga nada no início. Nossos honorários são cobrados apenas quando o benefício é aprovado e você já está recebendo. Fale conosco e entenda as condições do seu caso.",
  },
  {
    q: "Vale a pena tentar sozinho primeiro?",
    a: "Não recomendamos. Erros no pedido inicial — documentos errados, respostas inadequadas no app — podem dificultar ou até inviabilizar a aprovação futura. Fazer com advogado desde o início é mais rápido e mais barato no final.",
  },
  {
    q: "Moro em outro estado. Consigo ser atendido?",
    a: "Sim. Atendemos com a mesma qualidade para qualquer cidade do Brasil, de forma 100% online, pelo WhatsApp ou videochamada.",
  },
  {
    q: "Qual benefício tenho direito?",
    a: "Depende da sua situação específica. Por isso a avaliação inicial é gratuita — entendemos seu caso e indicamos qual benefício faz sentido para você, e qual a melhor forma de conseguir.",
  },
  {
    q: "Trabalhei na roça mas nunca paguei INSS. Tenho direito a aposentadoria?",
    a: "Possivelmente sim. O trabalhador rural tem regras diferentes e pode se aposentar mesmo sem contribuições formais. Precisamos analisar seu caso para confirmar, mas é um dos benefícios que mais aprovamos.",
  },
];

const POSTS = [
  {
    tag: "Aposentadoria",
    title: "Quanto paga o INSS para a maioria dos brasileiros? Entenda.",
    excerpt:
      "O valor médio dos benefícios pode te surpreender. Veja como funciona o cálculo e o que você pode fazer para receber mais.",
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
      "Decisão impacta diretamente famílias que aguardavam a sanção da lei. Saiba o que ainda é possível buscar.",
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
            O INSS negou? Você ainda pode <em className="hl">receber</em> o que é seu de direito.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/65 leading-relaxed">
            O Dr. Renan Gonçalves já foi gerente do INSS. Ele conhece as regras por dentro — e
            agora usa esse conhecimento para defender você. Com equipe especializada e
            atendimento em todo o Brasil, cuidamos do seu processo do início ao fim.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-3 text-sm text-[var(--gold-light)]">
            <Check size={16} />
            Avaliação gratuita. Você só paga quando o benefício for aprovado.
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Falar com especialista
            </WaveButton>
            <WaveButton variant="outline-light" size="lg" href="#servicos">
              Ver serviços <ArrowRight size={16} />
            </WaveButton>
          </div>

          <p className="mt-6 text-xs text-white/45">
            Atendimento presencial em Rondônia · Online para todo o Brasil
          </p>
        </div>

        {/* Card de prova lateral */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--gold)] text-[var(--gold)]" />
              ))}
              <span className="ml-2 text-xs text-white/55">143+ avaliações no Google</span>
            </div>
            <p className="font-display text-xl italic leading-snug text-white">
              "Nunca deixaram de me manter informada. Dois anos de processo e em nenhum momento
              desistiram de mim."
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
            Ex-gerente do INSS
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
        "Conhecemos o sistema por dentro. Sabemos o que o INSS exige e como preparar seu processo para ser aprovado.",
    },
    {
      title: "Professor de advogados",
      body:
        "Dr. Renan forma especialistas previdenciários. Você é atendido por quem ensina os outros a atuar na área.",
    },
    {
      title: "Você só paga no sucesso",
      body:
        "Na maioria dos casos, não há custo inicial. O honorário só é cobrado quando o benefício está aprovado e você já recebendo.",
    },
    {
      title: "Milhares de casos resolvidos",
      body:
        "Clientes em todo o Brasil. Alta taxa de aprovação, inclusive em casos negados anteriormente.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="max-w-3xl">
        <Eyebrow>Autoridade</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
          Quem já trabalhou no INSS sabe exatamente como <em className="hl">ganhar</em>.
        </h2>
        <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
          O Dr. Renan Gonçalves passou anos dentro do INSS como gerente. Conhece os critérios que
          aprovam e os erros que reprovam. Hoje lidera uma equipe comprometida em transformar esse
          conhecimento na sua maior vantagem.
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
          <Eyebrow>Serviços</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Se é benefício do INSS, a gente <em className="hl">resolve</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Atendemos todos os tipos de benefício previdenciário. Seja para quem quer se aposentar
            da melhor forma, quem está doente, quem perdeu a capacidade de trabalhar ou quem foi
            injustamente negado.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <a
              key={s}
              href={buildWppLink(s)}
              target="_blank"
              rel="noopener"
              aria-label={`Falar no WhatsApp sobre ${s}`}
              className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[var(--navy)] hover:shadow-[var(--shadow-sm)]"
            >
              <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-[var(--navy-light)] transition-colors group-hover:bg-[#22c55e]/15">
                <Check size={14} className="text-[var(--navy)] group-hover:text-[#16a34a]" />
              </span>
              <span className="flex-1 text-sm text-[var(--text)]">{s}</span>
              <ArrowRight
                size={16}
                className="flex-shrink-0 text-[var(--text-light)] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--navy)]"
              />
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-2xl bg-[var(--navy)] p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-display text-xl text-white max-w-xl leading-snug">
            Não sabe qual benefício é o seu caso? Fale com a gente. A avaliação é gratuita e sem
            compromisso.
          </p>
          <WaveButton variant="gold" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
            Quero saber meu direito <ArrowRight size={16} />
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
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Simples para você. <em className="hl">Completo</em> para o INSS.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Você não precisa entender de leis nem enfrentar filas. A gente faz tudo — no INSS ou
            na Justiça.
          </p>
          <div className="mt-8">
            <WaveButton variant="primary" href={SITE.whatsapp} target="_blank" rel="noopener">
              Começar agora <ArrowRight size={16} />
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
            Uma equipe inteira focada no <em className="hl">seu</em> caso.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Somos mais de 10 especialistas dedicados exclusivamente a benefícios previdenciários.
            Não somos um escritório generalista — cada pessoa da equipe conhece profundamente o
            direito previdenciário.
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
                Para qualquer cidade do Brasil. Mesmo resultado, sem sair de casa.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <WaveButton variant="primary" href={SITE.whatsapp} target="_blank" rel="noopener">
              Falar com um especialista <ArrowRight size={16} />
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
          Quem confiou no Escritório Gonçalves já recebe o que é <em className="hl">seu</em>.
        </h2>
        <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
          Mais de 143 avaliações no Google. Veja o que dizem alguns dos nossos clientes:
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

      <div className="mt-10 flex items-center gap-2 text-xs text-[var(--text-muted)]">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-pale)] px-3 py-1 font-medium text-[var(--gold-deep)]">
          <Star size={12} className="fill-[var(--gold)] text-[var(--gold)]" /> 143 avaliações
        </span>
        <span>· Google Meu Negócio</span>
      </div>
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
            Respostas <em className="hl">diretas</em> para quem não tem tempo a perder.
          </h2>
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
            Entenda seus direitos antes de <em className="hl">precisar</em> deles.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Publicamos conteúdo simples, direto e confiável sobre benefícios do INSS. Sem
            juridiquês. Para você saber o que é seu por direito.
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
        Novos artigos toda semana · gratuito e sem cadastro
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
        <Eyebrow className="mx-auto justify-center">Última chamada</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white max-w-3xl mx-auto">
          Você trabalhou a vida inteira. Não deixe o que é seu ficar na <em className="hl">mão</em>{" "}
          do INSS.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base text-white/65 leading-relaxed">
          Nossa equipe está pronta para ouvir seu caso agora, sem compromisso. A avaliação é
          gratuita e a conversa é sigilosa.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
            <MessageCircle size={18} /> Falar com especialista
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

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock, MessageCircle, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Seus direitos previdenciários, explicados com clareza. Tudo sobre aposentadoria, benefícios e INSS sem juridiquês.",
      },
      { property: "og:title", content: "Blog — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Conteúdo educativo sobre aposentadoria e benefícios do INSS, produzido por quem conhece o sistema por dentro.",
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORIAS = [
  "Todos",
  "Aposentadoria",
  "Auxílio-Doença",
  "BPC/LOAS",
  "Trabalhador Rural",
  "Pensão por Morte",
  "Revisão de Benefícios",
  "Salário-Maternidade",
  "Benefícios",
  "Pensão",
] as const;

type Categoria = (typeof CATEGORIAS)[number];

const POSTS: {
  tag: Categoria;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
}[] = [
  {
    tag: "Aposentadoria",
    title: "Quanto paga o INSS para a maioria dos brasileiros? Entenda.",
    excerpt:
      "O valor médio dos benefícios pode te surpreender. Veja como funciona o cálculo e o que você pode fazer para receber mais.",
    date: "14/01/2025",
    author: "Dr. Renan Gonçalves",
    readTime: "5 min",
  },
  {
    tag: "Benefícios",
    title: "Lula veta projeto que equipara diabetes tipo 1 a deficiência",
    excerpt:
      "O que muda na prática para portadores de diabetes que buscavam direitos previdenciários equiparados.",
    date: "14/01/2025",
    author: "Equipe Gonçalves",
    readTime: "4 min",
  },
  {
    tag: "Pensão",
    title: "Lula vetou pensão para mães de crianças com anencefalia. Entenda!",
    excerpt:
      "Decisão impacta diretamente famílias que aguardavam a sanção da lei. Saiba o que ainda é possível buscar.",
    date: "13/01/2025",
    author: "Equipe Gonçalves",
    readTime: "6 min",
  },
];

const MAIS_LIDOS = [
  "Quanto paga o INSS para a maioria dos brasileiros?",
  "Trabalhador rural sem carteira tem direito à aposentadoria?",
  "O INSS negou. O que fazer agora?",
];

function BlogPage() {
  const [filtro, setFiltro] = useState<Categoria>("Todos");
  const posts = filtro === "Todos" ? POSTS : POSTS.filter((p) => p.tag === filtro);

  return (
    <Layout>
      {/* HEADER */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div
          className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          G
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <Eyebrow className="mx-auto justify-center">Blog</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Seus direitos previdenciários, explicados com <em className="hl">clareza</em>.
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Aqui você encontra tudo sobre aposentadoria, benefícios e INSS — em linguagem simples,
            produzido por quem conhece o sistema por dentro. Sem juridiquês, sem enrolação.
          </p>
        </div>
      </section>

      {/* FILTROS + LAYOUT */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map((cat) => {
            const active = filtro === cat;
            return (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={[
                  "rounded-full border px-4 py-2 text-xs font-medium transition-all",
                  active
                    ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                    : "border-[var(--border)] bg-white text-[var(--text-muted)] hover:border-[var(--navy)] hover:text-[var(--navy)]",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Lista de artigos */}
          <div className="grid gap-6">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group grid gap-5 overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] sm:grid-cols-[200px_1fr]"
              >
                <div className="relative aspect-video sm:aspect-auto bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)] grid place-items-center">
                  <span className="font-display text-5xl font-bold text-white/10">G</span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:pl-0 sm:pr-7 sm:py-7">
                  <span className="self-start rounded-full bg-[var(--navy-light)] px-2.5 py-1 text-[10px] font-medium text-[var(--navy)]">
                    {p.tag}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-[var(--navy)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[var(--text-light)]">
                    <span className="inline-flex items-center gap-1">
                      <User size={12} /> {p.author}
                    </span>
                    <span>·</span>
                    <span>{p.date}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {p.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {posts.length === 0 && (
              <p className="text-center text-sm text-[var(--text-muted)] py-12">
                Nenhum artigo nesta categoria ainda.
              </p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* CTA WhatsApp */}
            <div className="on-navy rounded-2xl bg-[var(--navy)] p-6 text-white">
              <Eyebrow>Direto com a equipe</Eyebrow>
              <p className="mt-3 font-display text-lg leading-snug text-white">
                Tem uma dúvida que nenhum artigo respondeu?
              </p>
              <div className="mt-5">
                <WaveButton
                  variant="wpp"
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={16} /> Falar com especialista <ArrowRight size={14} />
                </WaveButton>
              </div>
            </div>

            {/* Categorias */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-light)]">
                Categorias
              </h3>
              <ul className="mt-4 space-y-2">
                {CATEGORIAS.filter((c) => c !== "Todos").map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setFiltro(c)}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--navy)] transition-colors"
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mais lidos */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-light)]">
                Mais lidos
              </h3>
              <ul className="mt-4 space-y-3">
                {MAIS_LIDOS.map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="font-display text-lg font-semibold text-[var(--gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-[var(--text)] leading-snug hover:text-[var(--navy)] transition-colors cursor-pointer">
                      {t}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

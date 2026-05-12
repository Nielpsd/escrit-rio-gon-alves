import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { CATEGORIAS, POSTS as POSTS_FALLBACK, MAIS_RECENTES, type Categoria } from "@/lib/posts";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import type { Database } from "@/lib/database.types";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

type PostRow = Database["public"]["Tables"]["posts"]["Row"];

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    if (!supabaseConfigured) return { posts: POSTS_FALLBACK, recentes: MAIS_RECENTES };

    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (!data || data.length === 0) return { posts: POSTS_FALLBACK, recentes: MAIS_RECENTES };

    const posts = data.map(mapRow);
    return { posts, recentes: posts.slice(0, 3) };
  },
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

function mapRow(row: PostRow) {
  return {
    slug: row.slug,
    tag: row.tag as Categoria,
    title: row.title,
    excerpt: row.excerpt,
    date: new Date(row.published_at).toLocaleDateString("pt-BR"),
    author: row.author,
    readTime: row.read_time,
    image: row.image ?? "",
    content: row.content.split("\n\n"),
  };
}

function BlogPage() {
  const { posts, recentes } = Route.useLoaderData();
  const [filtro, setFiltro] = useState<Categoria>("Todos");
  const filtered = filtro === "Todos" ? posts : posts.filter((p) => p.tag === filtro);

  return (
    <Layout>
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <Eyebrow className="mx-auto justify-center">Blog</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Seus direitos previdenciários, explicados com <em className="hl">clareza</em>.
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Aqui você encontra tudo sobre aposentadoria, benefícios e INSS — em linguagem simples,
            produzido por quem conhece o sistema por dentro. Sem juridiquês, sem enrolação.
          </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
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

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
          <div className="grid gap-6 content-start">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group grid gap-5 overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] sm:grid-cols-[200px_1fr]"
              >
                <div className="relative aspect-video sm:aspect-auto sm:min-h-[180px] overflow-hidden bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)]">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center p-6 sm:pl-0 sm:pr-7 sm:py-7">
                  <span className="self-start rounded-full bg-[var(--navy-light)] px-2.5 py-1 text-[10px] font-medium text-[var(--navy)]">
                    {p.tag}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-[var(--navy)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{p.excerpt}</p>
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
              </Link>
            ))}

            {filtered.length === 0 && (
              <p className="text-center text-sm text-[var(--text-muted)] py-12">
                Nenhum artigo nesta categoria ainda.
              </p>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-6 text-white">
              <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
              <div className="relative">
                <Eyebrow>Direto com a equipe</Eyebrow>
                <p className="mt-3 font-display text-lg leading-snug text-white">
                  Tem uma dúvida que nenhum artigo respondeu?
                </p>
                <div className="mt-5">
                  <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                    <WhatsAppIcon size={16} /> Falar com especialista <ArrowRight size={14} />
                  </WaveButton>
                </div>
              </div>
            </div>

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

            <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-light)]">
                Mais recentes
              </h3>
              <ul className="mt-4 space-y-3">
                {recentes.map((p, i) => (
                  <li key={p.slug} className="flex gap-3">
                    <span className="font-display text-lg font-semibold text-[var(--gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="text-sm text-[var(--text)] leading-snug hover:text-[var(--navy)] transition-colors"
                    >
                      {p.title}
                    </Link>
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

import "@/styles-article.css";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { getPostBySlug, POSTS as POSTS_FALLBACK, type Categoria } from "@/lib/posts";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import type { Database } from "@/lib/database.types";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

type PostRow = Database["public"]["Tables"]["posts"]["Row"];

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

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    if (!supabaseConfigured) {
      const post = getPostBySlug(params.slug);
      if (!post) throw notFound();
      const related = POSTS_FALLBACK.filter(
        (p) => p.slug !== post.slug && p.tag === post.tag,
      ).slice(0, 3);
      return { post, related };
    }

    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", params.slug)
      .eq("published", true)
      .maybeSingle();

    if (!data) throw notFound();

    const post = mapRow(data);

    const { data: relatedData } = await supabase
      .from("posts")
      .select("*")
      .eq("tag", data.tag)
      .eq("published", true)
      .neq("slug", params.slug)
      .limit(3);

    const related = (relatedData ?? []).map(mapRow);

    return { post, related };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Artigo não encontrado — Escritório Gonçalves" }] };
    const slug = post.slug ?? "";
    return {
      meta: [
        { title: `${post.title} — Blog Gonçalves` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE.url}/blog/${slug}` },
        ...(post.image ? [{ property: "og:image", content: post.image }] : [{ property: "og:image", content: `${SITE.url}/hero-bg.webp` }]),
        { property: "og:image:alt", content: post.title },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.image || `${SITE.url}/hero-bg.webp` },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `${SITE.url}/blog/${slug}`,
            "image": post.image || `${SITE.url}/hero-bg.webp`,
            "author": {
              "@type": "Person",
              "name": "Dr. Renan Gonçalves",
              "url": SITE.url,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Escritório Gonçalves",
              "url": SITE.url,
            },
          } as Record<string, unknown>,
        },
      ],
      links: [{ rel: "canonical", href: `${SITE.url}/blog/${slug}` }],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold text-[var(--navy)]">
          Artigo não encontrado
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          O conteúdo que você procura não existe ou foi removido.
        </p>
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--gold)]"
          >
            <ArrowLeft size={16} /> Voltar para o blog
          </Link>
        </div>
      </section>
    </Layout>
  ),
  component: PostPage,
});

function PostPage() {
  const { post, related } = Route.useLoaderData();

  return (
    <Layout>
      <ReadingProgress />
      {/* HERO */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        {post.image && (
          <div className="absolute inset-0">
            <img src={post.image} alt="" className="h-full w-full object-cover opacity-20" aria-hidden loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/60 via-[var(--navy)]/80 to-[var(--navy)]" />
          </div>
        )}
        <motion.div
          className="relative mx-auto max-w-3xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Voltar para o blog
          </Link>
          <div className="mt-6">
            <Eyebrow>{post.tag}</Eyebrow>
          </div>
          <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
            <span className="inline-flex items-center gap-1.5">
              {post.author.toLowerCase().includes("renan") ? (
                <img src="/bio/05.webp" alt={post.author} className="h-6 w-6 rounded-full object-cover object-top" loading="lazy" decoding="async" />
              ) : (
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--gold)]/20 font-display text-xs font-semibold text-[var(--gold-light)]">
                  {post.author[0]}
                </span>
              )}
              {post.author}
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
        </motion.div>
      </section>

      {/* IMAGEM DE CAPA */}
      {post.image && (
        <div className="mx-auto max-w-4xl px-6">
          <div className="-mt-8 overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/7] w-full object-cover"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }}
            />
          </div>
        </div>
      )}

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <p className="font-display text-xl text-[var(--navy)] leading-relaxed border-l-4 border-[var(--gold)] pl-5">
          {post.excerpt}
        </p>
        <div
          className="article-body mt-10"
          dangerouslySetInnerHTML={{ __html: Array.isArray(post.content) ? post.content.join("</p><p>") : post.content }}
        />

        {/* DIVIDER */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-display text-sm text-[var(--text-light)]">{SITE.name}</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* CTA */}
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-8 text-white">
          <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
          <div className="relative">
            <Eyebrow>Precisa de ajuda no seu caso?</Eyebrow>
            <p className="mt-3 font-display text-xl leading-snug text-white">
              Cada situação é única. Fale com um especialista do Escritório Gonçalves.
            </p>
            <div className="mt-6">
              <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                <WhatsAppIcon size={16} /> Falar no WhatsApp <ArrowRight size={14} />
              </WaveButton>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGOS RELACIONADOS */}
      {related.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
              Continue lendo
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                  >
                    {p.image ? (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)]" />
                    )}
                    <div className="flex flex-col p-5">
                      <span className="self-start rounded-full bg-[var(--navy-light)] px-2.5 py-1 text-[10px] font-medium text-[var(--navy)]">
                        {p.tag}
                      </span>
                      <h3 className="mt-3 font-display text-base font-semibold text-[var(--navy)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-muted)] line-clamp-2">{p.excerpt}</p>
                      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[var(--gold)]">
                        Ler artigo <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

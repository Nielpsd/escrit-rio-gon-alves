import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, MessageCircle, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { getPostBySlug, POSTS as POSTS_FALLBACK, type Categoria } from "@/lib/posts";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import type { Database } from "@/lib/database.types";

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
    return {
      meta: [
        { title: `${post.title} — Blog Gonçalves` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
      ],
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
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div
          className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          G
        </div>
        <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
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
            <span className="inline-flex items-center gap-1">
              <User size={12} /> {post.author}
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <p className="font-display text-xl text-[var(--navy)] leading-relaxed">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-base text-[var(--text)] leading-relaxed">
          {post.content.map((par: string, i: number) => (
            <p key={i}>{par}</p>
          ))}
        </div>

        <div className="on-navy mt-12 rounded-2xl bg-[var(--navy)] p-8 text-white">
          <Eyebrow>Precisa de ajuda no seu caso?</Eyebrow>
          <p className="mt-3 font-display text-xl leading-snug text-white">
            Cada situação é única. Fale com um especialista do Escritório Gonçalves.
          </p>
          <div className="mt-6">
            <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={16} /> Falar no WhatsApp <ArrowRight size={14} />
            </WaveButton>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--navy-light)]/30">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
              Continue lendo
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                >
                  <span className="rounded-full bg-[var(--navy-light)] px-2.5 py-1 text-[10px] font-medium text-[var(--navy)]">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-[var(--navy)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)] line-clamp-3">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

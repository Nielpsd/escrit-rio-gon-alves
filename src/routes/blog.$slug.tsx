import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, MessageCircle, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { getPostBySlug, POSTS } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
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
  const { post } = Route.useLoaderData();
  const relacionados = POSTS.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, 3);

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

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <p className="font-display text-xl text-[var(--navy)] leading-relaxed">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-base text-[var(--text)] leading-relaxed">
          {post.content.map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </div>

        {/* CTA */}
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

      {/* RELACIONADOS */}
      {relacionados.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--navy-light)]/30">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">
              Continue lendo
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relacionados.map((p) => (
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
                  <p className="mt-2 text-sm text-[var(--text-muted)] line-clamp-3">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

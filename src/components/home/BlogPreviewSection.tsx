import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { MAIS_RECENTES } from "@/lib/posts";

export function BlogPreviewSection() {
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
        {MAIS_RECENTES.map((p) => (
          <article
            key={p.slug}
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

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { MAIS_RECENTES } from "@/lib/posts";

export function BlogPreviewSection() {
  const posts = MAIS_RECENTES.slice(0, 3);

  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-6"
          >
            <Eyebrow>Blog</Eyebrow>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-display text-3xl md:text-4xl lg:text-[42px] font-semibold text-[var(--navy)] leading-tight mb-4"
          >
            Entenda seus direitos <em className="hl">antes de precisar deles</em>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl mx-auto"
          >
            Conteúdo simples, direto e técnico sobre benefícios do INSS — sem juridiquês,
            em conformidade com o Provimento nº 205/2021 da OAB.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={"/blog/" + post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer bg-white border border-[var(--border)] rounded-[20px] p-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[380/270] overflow-hidden rounded-[14px] mb-4 bg-gradient-to-br from-[var(--navy)] to-[#1a3a6e]">
                <div className="absolute inset-0 font-display text-[140px] leading-none text-white/10 grid place-items-center select-none" aria-hidden>
                  G
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-[var(--gold)] text-[var(--navy)] px-6 py-2.5 rounded-full font-bold text-sm shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ler artigo
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <span className="inline-block rounded-full bg-[var(--gold-pale)] px-3 py-1 text-xs font-medium text-[var(--gold-deep)] mb-3 self-start">
                  {post.tag}
                </span>

                <h3 className="font-display text-xl font-semibold text-[var(--navy)] leading-snug mb-4 group-hover:text-[var(--gold)] transition-colors duration-300">
                  {post.title}
                </h3>

                <div className="w-full border-t border-dotted border-[var(--border)] mb-4" />

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[var(--navy)] grid place-items-center font-display text-xs font-semibold text-[var(--gold-light)]">
                      {post.author[0]}
                    </div>
                    <span className="text-sm font-semibold text-[var(--navy)]">
                      {post.author}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WaveButton variant="ghost" href="/blog">
            Ver todos os artigos <ArrowRight size={16} />
          </WaveButton>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Conteúdo informativo · publicação periódica
        </p>
      </div>
    </section>
  );
}

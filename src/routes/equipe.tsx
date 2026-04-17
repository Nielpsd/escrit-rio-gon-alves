import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle, Youtube } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Mais de 10 profissionais dedicados exclusivamente ao direito previdenciário. Conheça quem vai cuidar do seu caso.",
      },
      { property: "og:title", content: "Equipe — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Especialistas em direito previdenciário liderados pelo Dr. Renan Gonçalves, ex-gerente do INSS.",
      },
    ],
  }),
  component: EquipePage,
});

const EQUIPE = [
  { nome: "Letícia", cargo: "Equipe previdenciária" },
  { nome: "Wesley", cargo: "Equipe previdenciária" },
  { nome: "Lucimeiry", cargo: "Equipe previdenciária" },
  { nome: "Dra. Camila", cargo: "Advogada previdenciária" },
  { nome: "Milena", cargo: "Equipe previdenciária" },
  { nome: "Aline", cargo: "Equipe previdenciária" },
  { nome: "Bruna", cargo: "Equipe previdenciária" },
  { nome: "Maria", cargo: "Equipe previdenciária" },
  { nome: "Marília", cargo: "Equipe previdenciária" },
  { nome: "Nathália", cargo: "Equipe previdenciária" },
];

function EquipePage() {
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
          <Eyebrow className="mx-auto justify-center">Nossa equipe</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Conheça quem vai cuidar do <em className="hl">seu caso</em>.
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Mais de 10 profissionais dedicados exclusivamente ao direito previdenciário. Aqui,
            ninguém cuida de vários assuntos ao mesmo tempo — cada pessoa da equipe é especialista
            no que faz.
          </p>
        </div>
      </section>

      {/* DR. RENAN — DESTAQUE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)] grid place-items-center">
              <div className="text-center">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[var(--gold)]/15 font-display text-5xl font-semibold text-[var(--gold-light)]">
                  R
                </div>
                <p className="mt-4 font-display text-xl text-white">Dr. Renan Gonçalves</p>
                <p className="text-xs text-white/45">{SITE.oab}</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
              Ex-gerente do INSS
            </div>
          </div>

          <div>
            <Eyebrow>Fundador</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Dr. Renan <em className="hl">Gonçalves</em>
            </h2>
            <p className="mt-2 text-sm font-medium text-[var(--text-muted)]">
              Advogado · Fundador · {SITE.oab} · Ex-servidor do INSS
            </p>
            <div className="mt-5 space-y-4 text-base text-[var(--text-muted)] leading-relaxed">
              <p>
                Antes de fundar o escritório, Dr. Renan atuou como gerente do INSS — cargo que lhe
                deu acesso direto às regras e critérios que determinam a aprovação ou negativa de
                benefícios. Também é professor de direito previdenciário, formando advogados
                especializados na área.
              </p>
              <p>
                Hoje lidera a equipe do Escritório Gonçalves com o mesmo rigor técnico e
                compromisso humano que sempre marcaram sua carreira.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--navy)] transition-colors hover:border-[var(--navy)]"
              >
                <Instagram size={16} /> @renan.inss
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--navy)] transition-colors hover:border-[var(--navy)]"
              >
                <Youtube size={16} /> Direito em Minutos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Time completo</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Especialistas <em className="hl">dedicados</em> ao seu caso
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {EQUIPE.map((m) => (
              <div
                key={m.nome}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--navy-light)] font-display text-2xl font-semibold text-[var(--navy)]">
                  {m.nome.replace(/^Dra?\.\s*/, "").charAt(0)}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-[var(--navy)]">
                  {m.nome}
                </h3>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{m.cargo}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-[var(--text-light)]">
            Cargos e fotos serão atualizados conforme informações enviadas pelo escritório.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="on-navy bg-[var(--navy)] py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Nossa equipe está <em className="hl">pronta</em> para o seu caso.
          </h2>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Falar com um especialista <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

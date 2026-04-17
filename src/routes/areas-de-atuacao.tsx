import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/areas-de-atuacao")({
  head: () => ({
    meta: [
      { title: "Casos resolvidos — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Mais de um benefício conquistado por dia. Conheça histórias reais de clientes que tiveram seus benefícios aprovados.",
      },
      { property: "og:title", content: "Casos resolvidos — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Histórias reais de aposentadorias, auxílios e BPC aprovados — inclusive em casos negados anteriormente pelo INSS.",
      },
    ],
  }),
  component: CasosResolvidosPage,
});

const STATS = [
  { num: "143+", label: "avaliações no Google" },
  { num: "Todo o Brasil", label: "clientes atendidos" },
  { num: "Alta taxa", label: "de aprovação, inclusive em casos negados" },
];

const CATEGORIAS = [
  "Todos",
  "Aposentadoria",
  "Auxílio-Doença",
  "BPC/LOAS",
  "Pensão por Morte",
  "Trabalhador Rural",
  "Benefício Negado",
] as const;

type Categoria = (typeof CATEGORIAS)[number];

const CASOS: {
  perfil: string;
  situacao: string;
  resultado: string;
  como: string;
  cats: Categoria[];
}[] = [
  {
    perfil: "Mulher, 61 anos, trabalhadora rural",
    situacao:
      "Tentou sozinha no app do Meu INSS e foi negada. Não sabia que precisava de documentação específica.",
    resultado: "Aposentadoria por Idade Rural aprovada",
    como:
      "Reorganizamos toda a documentação rural e orientamos sobre o que o perito analisa. Aprovação em menos de 90 dias.",
    cats: ["Aposentadoria", "Trabalhador Rural", "Benefício Negado"],
  },
  {
    perfil: "Homem, 52 anos, diagnosticado com problema na coluna",
    situacao:
      "O INSS havia negado o auxílio-doença alegando que ele ainda tinha capacidade para trabalho.",
    resultado: "Auxílio-doença concedido via ação judicial",
    como:
      "Construímos laudo técnico complementar e entramos na Justiça. Benefício garantido com pagamento retroativo.",
    cats: ["Auxílio-Doença", "Benefício Negado"],
  },
  {
    perfil: "Mãe solo, 34 anos, filho com transtorno do espectro autista",
    situacao: "Não sabia que o filho tinha direito ao BPC/LOAS.",
    resultado: "BPC aprovado em menos de 60 dias",
    como:
      "Identificamos o direito na primeira conversa, montamos o processo completo e acompanhamos a perícia.",
    cats: ["BPC/LOAS"],
  },
];

const VIDEOS = [
  { nome: "Eleni Rocha", trecho: "Minha aposentadoria deu certo. Só agradecer ao Dr. Renan e à equipe." },
  {
    nome: "Carolina Assunção",
    trecho:
      "Meu filho é autista e a questão foi resolvida bem rápido, sem trabalho nenhum pra mim.",
  },
  {
    nome: "Leuciane Silva",
    trecho:
      "Nunca deixaram de me manter informada. Dois anos de processo e em nenhum momento desistiram de mim.",
  },
];

function CasosResolvidosPage() {
  const [filtro, setFiltro] = useState<Categoria>("Todos");
  const casosFiltrados =
    filtro === "Todos" ? CASOS : CASOS.filter((c) => c.cats.includes(filtro));

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
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24">
          <div className="max-w-3xl">
            <Eyebrow>Casos resolvidos</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Mais de um benefício conquistado por dia. Esse é nosso{" "}
              <em className="hl">ritmo</em>.
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl">
              Cada número aqui representa uma pessoa que voltou a ter renda, segurança e
              tranquilidade. Conheça alguns dos casos que resolvemos — e veja que o seu também tem
              solução.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
              >
                <div className="font-display text-3xl lg:text-4xl font-semibold text-[var(--gold-light)]">
                  {s.num}
                </div>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS EM VÍDEO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Ouça de quem <em className="hl">viveu</em>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VIDEOS.map((v) => (
              <div
                key={v.nome}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)] grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white/10 backdrop-blur">
                    <span className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                  </div>
                  <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 text-[10px] text-white">
                    Vídeo em breve
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <p className="font-display text-sm italic text-[var(--navy)] leading-snug">
                    "{v.trecho}"
                  </p>
                  <p className="mt-3 text-xs text-[var(--text-muted)]">{v.nome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIAS ESCRITAS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Histórias</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Casos reais, <em className="hl">resultados</em> reais
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
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

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {casosFiltrados.map((c, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--gold)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-4 flex flex-wrap gap-1.5">
                {c.cats.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[var(--navy-light)] px-2.5 py-1 text-[10px] font-medium text-[var(--navy)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-display text-base font-semibold text-[var(--navy)]">{c.perfil}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-[var(--text-light)]">
                    Situação
                  </dt>
                  <dd className="mt-1 text-[var(--text-muted)] leading-relaxed">{c.situacao}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-[var(--text-light)]">
                    Resultado
                  </dt>
                  <dd className="mt-1 font-medium text-[var(--navy)] leading-relaxed">
                    {c.resultado}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-[var(--text-light)]">
                    Como resolvemos
                  </dt>
                  <dd className="mt-1 text-[var(--text-muted)] leading-relaxed">{c.como}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {casosFiltrados.length === 0 && (
          <p className="mt-10 text-center text-sm text-[var(--text-muted)]">
            Nenhum caso publicado nesta categoria ainda.
          </p>
        )}
      </section>

      {/* CTA FINAL */}
      <section className="on-navy bg-[var(--navy)] py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow className="mx-auto justify-center">Avaliação gratuita</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            O próximo caso resolvido pode ser <em className="hl">o seu</em>.
          </h2>
          <p className="mt-5 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Fale com a nossa equipe. A avaliação do seu caso é gratuita e sem compromisso.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Quero uma avaliação gratuita <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

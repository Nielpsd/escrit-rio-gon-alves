import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/areas-de-atuacao")({
  head: () => ({
    meta: [
      { title: "Áreas de atuação — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Conheça os tipos de demanda previdenciária atendidos pelo Escritório Gonçalves: aposentadorias, auxílios, BPC/LOAS, pensões e revisões.",
      },
      { property: "og:title", content: "Áreas de atuação — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Atuação especializada em todas as áreas do direito previdenciário, com atendimento presencial em RO e online em todo o Brasil.",
      },
    ],
  }),
  component: AreasPage,
});

const CATEGORIAS = [
  "Todas",
  "Aposentadoria",
  "Auxílio-Doença",
  "BPC/LOAS",
  "Pensão por Morte",
  "Trabalhador Rural",
  "Revisão",
] as const;

type Categoria = (typeof CATEGORIAS)[number];

const AREAS: {
  perfil: string;
  contexto: string;
  atuacao: string;
  cats: Categoria[];
}[] = [
  {
    perfil: "Trabalhador rural sem registro formal",
    contexto:
      "Pessoas que dedicaram a vida à atividade no campo, muitas vezes sem carteira assinada e sem contribuições registradas no INSS.",
    atuacao:
      "Reunião de provas materiais e testemunhais, organização documental e acompanhamento da análise pelo INSS.",
    cats: ["Aposentadoria", "Trabalhador Rural"],
  },
  {
    perfil: "Segurado com incapacidade para o trabalho",
    contexto:
      "Pessoas afastadas de suas atividades por questões de saúde, que precisam de auxílio temporário ou definitivo.",
    atuacao:
      "Análise da documentação médica, acompanhamento administrativo e, quando necessário, condução do processo na esfera judicial.",
    cats: ["Auxílio-Doença"],
  },
  {
    perfil: "Famílias em situação de vulnerabilidade",
    contexto:
      "Idosos a partir de 65 anos e pessoas com deficiência cuja renda familiar per capita esteja dentro dos critérios legais do BPC/LOAS.",
    atuacao:
      "Orientação sobre cadastro no CadÚnico, análise da renda familiar e condução do pedido administrativo.",
    cats: ["BPC/LOAS"],
  },
  {
    perfil: "Dependentes de segurado falecido",
    contexto:
      "Cônjuges, companheiros, filhos menores ou inválidos e demais dependentes de pessoa falecida que mantinha vínculo com o INSS.",
    atuacao:
      "Reconhecimento de dependência, comprovação de união estável quando necessário e protocolo do pedido de pensão.",
    cats: ["Pensão por Morte"],
  },
  {
    perfil: "Aposentado que recebe valor abaixo do esperado",
    contexto:
      "Beneficiários cujo cálculo do INSS pode ter desconsiderado contribuições, períodos especiais ou regras mais vantajosas.",
    atuacao:
      "Análise técnica do cálculo, identificação de teses cabíveis e condução do pedido de revisão.",
    cats: ["Revisão"],
  },
  {
    perfil: "Pessoas próximas da aposentadoria",
    contexto:
      "Quem deseja entender qual regra de transição é aplicável ao seu caso e quando faz sentido protocolar o pedido.",
    atuacao:
      "Estudo previdenciário com simulações por regra de transição e indicação do momento mais adequado para requerer o benefício.",
    cats: ["Aposentadoria"],
  },
];

function AreasPage() {
  const [filtro, setFiltro] = useState<Categoria>("Todas");
  const lista = filtro === "Todas" ? AREAS : AREAS.filter((a) => a.cats.includes(filtro));

  return (
    <Layout>
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div
          className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          G
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24">
          <div className="max-w-3xl">
            <Eyebrow>Áreas de atuação</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Perfis e demandas <em className="hl">atendidos pelo escritório</em>.
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl">
              Reunimos categorias gerais de demandas previdenciárias com finalidade
              meramente informativa. Cada situação real depende de análise individual da
              documentação e do histórico contributivo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Perfis atendidos</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Quem buscamos <em className="hl">orientar</em>
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Conteúdo meramente informativo, em conformidade com o Provimento nº 205/2021 da OAB.
            As descrições abaixo são categorias gerais de demanda — cada caso real depende
            de análise individual e da documentação disponível.
          </p>
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
          {lista.map((a, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--gold)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-4 flex flex-wrap gap-1.5">
                {a.cats.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[var(--navy-light)] px-2.5 py-1 text-[10px] font-medium text-[var(--navy)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-display text-base font-semibold text-[var(--navy)]">{a.perfil}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-[var(--text-light)]">
                    Contexto
                  </dt>
                  <dd className="mt-1 text-[var(--text-muted)] leading-relaxed">{a.contexto}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-[var(--text-light)]">
                    Como atuamos
                  </dt>
                  <dd className="mt-1 text-[var(--text-muted)] leading-relaxed">{a.atuacao}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <Eyebrow className="mx-auto justify-center">Tirar dúvidas</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
            Sua história se parece com <em className="hl">alguma dessas</em>?
          </h2>
          <p className="mt-4 text-white/65 max-w-xl mx-auto">
            Conte para nossa equipe. Ouvimos com atenção e explicamos, com clareza, quais
            caminhos a legislação prevê para o seu caso.
          </p>
          <div className="mt-8 flex justify-center">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Conversar sobre o meu caso <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  HandCoins,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Tractor,
  Users,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Aposentadoria, Auxílio-Doença, BPC/LOAS, Pensão por Morte, Revisão de Benefícios e mais. Atuação especializada em direito previdenciário.",
      },
      { property: "og:title", content: "Serviços — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Tudo o que envolve INSS e benefícios previdenciários, conduzido por quem conhece o sistema por dentro.",
      },
    ],
  }),
  component: ServicosPage,
});

const SERVICOS = [
  {
    icon: ShieldCheck,
    titulo: "Planejamento de Aposentadoria",
    descricao:
      "Análise completa do seu histórico para definir a melhor regra e o melhor momento para se aposentar — pagando o menor custo possível.",
    pontos: [
      "Simulações nas regras de transição",
      "Identificação de períodos não computados",
      "Estratégia para aumentar o valor",
    ],
  },
  {
    icon: HeartPulse,
    titulo: "Auxílio-Doença e Aposentadoria por Invalidez",
    descricao:
      "Quando a saúde impede o trabalho, você tem direito ao benefício. Atuamos do pedido administrativo à ação judicial em caso de negativa.",
    pontos: [
      "Pedido administrativo e recursos",
      "Ação judicial em caso de negativa",
      "Conversão para invalidez quando cabível",
    ],
  },
  {
    icon: HandCoins,
    titulo: "BPC / LOAS",
    descricao:
      "Benefício assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade. Não exige contribuição prévia.",
    pontos: [
      "Análise de renda familiar",
      "Auxílio na inscrição/atualização do CadÚnico",
      "Recurso em caso de negativa",
    ],
  },
  {
    icon: Users,
    titulo: "Pensão por Morte",
    descricao:
      "Apoio à família no momento mais difícil. Garantimos o reconhecimento do direito de cônjuges, companheiros e dependentes.",
    pontos: [
      "Reconhecimento de união estável",
      "Pensão para filhos menores e inválidos",
      "Ações de revisão e atrasados",
    ],
  },
  {
    icon: RefreshCw,
    titulo: "Revisão de Benefícios",
    descricao:
      "Recebeu menos do que deveria? Identificamos erros de cálculo do INSS e buscamos a revisão com pagamento dos valores atrasados.",
    pontos: [
      "Revisão da vida toda",
      "Revisão do teto e do buraco negro",
      "Inclusão de períodos especiais",
    ],
  },
  {
    icon: Tractor,
    titulo: "Trabalhador Rural e Segurado Especial",
    descricao:
      "Aposentadoria do trabalhador do campo, mesmo sem carteira assinada. Reunimos provas e testemunhos para garantir o seu direito.",
    pontos: [
      "Comprovação de atividade rural",
      "Aposentadoria por idade rural",
      "Salário-maternidade rural",
    ],
  },
];

function ServicosPage() {
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
          <Eyebrow className="mx-auto justify-center">Serviços</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Tudo o que envolve INSS, em um só <em className="hl">lugar</em>.
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
            Atuação 100% especializada em direito previdenciário. Sem juridiquês, sem promessas
            vazias — só estratégia jurídica de quem conhece o INSS por dentro.
          </p>
        </div>
      </section>

      {/* GRID DE SERVIÇOS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICOS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.titulo}
                className="group rounded-2xl border border-[var(--border)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--navy-light)] text-[var(--navy)] group-hover:bg-[var(--navy)] group-hover:text-[var(--gold-light)] transition-colors">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-[var(--navy)] leading-snug">
                  {s.titulo}
                </h2>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  {s.descricao}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.pontos.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-[var(--text)]"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-[var(--gold)]"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="on-navy mt-16 rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <Eyebrow className="mx-auto justify-center">Avaliação gratuita</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight text-white">
            Não sabe qual benefício é o seu? <em className="hl">A gente descobre.</em>
          </h2>
          <p className="mt-4 text-white/65 max-w-xl mx-auto">
            Conte sua situação no WhatsApp e nossa equipe identifica gratuitamente o caminho mais
            vantajoso para você.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={16} /> Falar no WhatsApp <ArrowRight size={14} />
            </WaveButton>
            <Link
              to="/contato"
              className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              ou envie uma mensagem pelo formulário
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

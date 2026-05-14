import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CoverageSection } from "@/components/site/CoverageSection";

const FAQ_AREAS = [
  {
    q: "Como saber qual área se aplica ao meu caso?",
    a: "A forma mais direta é contar sua situação para a nossa equipe pelo WhatsApp. Em poucos minutos, identificamos qual categoria se aplica e explicamos o que a lei prevê.",
  },
  {
    q: "Posso ter direito a mais de um benefício ao mesmo tempo?",
    a: "Em alguns casos, sim. Por exemplo, quem recebe aposentadoria pode ter direito a uma revisão que aumente o valor. A acumulação depende da modalidade e da legislação vigente.",
  },
  {
    q: "Preciso ter contribuído para o INSS para ter direito?",
    a: "Depende do benefício. Aposentadorias e auxílio-doença exigem contribuição. Já o BPC/LOAS é um benefício assistencial e não depende de contribuição prévia ao INSS.",
  },
  {
    q: "O que acontece se o INSS negar meu pedido?",
    a: "A negativa administrativa não é o fim. É possível recorrer dentro do próprio INSS (prazo de 30 dias) ou ingressar com ação judicial. Em ambos os casos, podemos ajudar.",
  },
  {
    q: "Trabalhador rural sem carteira assinada tem direito à aposentadoria?",
    a: "Sim. O segurado especial (trabalhador rural, pescador artesanal, agricultor familiar) tem regras próprias previstas em lei e pode se aposentar mesmo sem contribuições formais.",
  },
];

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
  resultado: string;
  cats: Categoria[];
}[] = [
  {
    perfil: "Trabalhador rural sem registro formal",
    contexto:
      "Pessoas que dedicaram a vida à atividade no campo, muitas vezes sem carteira assinada e sem contribuições registradas no INSS.",
    atuacao:
      "Reunião de provas materiais e testemunhais, organização documental e acompanhamento da análise pelo INSS.",
    resultado: "Aposentadoria por idade rural com reconhecimento do tempo de atividade",
    cats: ["Aposentadoria", "Trabalhador Rural"],
  },
  {
    perfil: "Segurado com incapacidade para o trabalho",
    contexto:
      "Pessoas afastadas de suas atividades por questões de saúde, que precisam de auxílio temporário ou definitivo.",
    atuacao:
      "Análise da documentação médica, acompanhamento administrativo e, quando necessário, condução do processo na esfera judicial.",
    resultado: "Auxílio-doença ou aposentadoria por invalidez com pagamento retroativo",
    cats: ["Auxílio-Doença"],
  },
  {
    perfil: "Famílias em situação de vulnerabilidade",
    contexto:
      "Idosos a partir de 65 anos e pessoas com deficiência cuja renda familiar per capita esteja dentro dos critérios legais do BPC/LOAS.",
    atuacao:
      "Orientação sobre cadastro no CadÚnico, análise da renda familiar e condução do pedido administrativo.",
    resultado: "BPC/LOAS de 1 salário mínimo mensal, sem precisar ter contribuído ao INSS",
    cats: ["BPC/LOAS"],
  },
  {
    perfil: "Dependentes de segurado falecido",
    contexto:
      "Cônjuges, companheiros, filhos menores ou inválidos e demais dependentes de pessoa falecida que mantinha vínculo com o INSS.",
    atuacao:
      "Reconhecimento de dependência, comprovação de união estável quando necessário e protocolo do pedido de pensão.",
    resultado: "Pensão por morte com reconhecimento de dependência e pagamento mensal",
    cats: ["Pensão por Morte"],
  },
  {
    perfil: "Aposentado que recebe valor abaixo do esperado",
    contexto:
      "Beneficiários cujo cálculo do INSS pode ter desconsiderado contribuições, períodos especiais ou regras mais vantajosas.",
    atuacao:
      "Análise técnica do cálculo, identificação de teses cabíveis e condução do pedido de revisão.",
    resultado: "Aumento do benefício mensal e recebimento das parcelas atrasadas",
    cats: ["Revisão"],
  },
  {
    perfil: "Pessoas próximas da aposentadoria",
    contexto:
      "Quem deseja entender qual regra de transição é aplicável ao seu caso e quando faz sentido protocolar o pedido.",
    atuacao:
      "Estudo previdenciário com simulações por regra de transição e indicação do momento mais adequado para requerer o benefício.",
    resultado: "Planejamento com a melhor regra e o maior benefício possível",
    cats: ["Aposentadoria"],
  },
  {
    perfil: "Trabalhador que teve pedido negado pelo INSS",
    contexto:
      "Pessoas que já tentaram dar entrada no benefício, receberam negativa e não sabem como proceder.",
    atuacao:
      "Análise da negativa, identificação do motivo técnico e condução do recurso administrativo ou ação judicial.",
    resultado: "Reversão da negativa com pagamento retroativo desde a data do pedido",
    cats: ["Aposentadoria", "Auxílio-Doença", "BPC/LOAS"],
  },
  {
    perfil: "Trabalhador exposto a agentes nocivos",
    contexto:
      "Pessoas que trabalharam em condições de risco ou exposição a agentes físicos, químicos ou biológicos por anos.",
    atuacao:
      "Análise do PPP (Perfil Profissiográfico Previdenciário) e LTCAT, enquadramento como atividade especial e condução do pedido.",
    resultado: "Aposentadoria especial com tempo de contribuição reduzido (15, 20 ou 25 anos)",
    cats: ["Aposentadoria"],
  },
  {
    perfil: "Professor com tempo de sala de aula",
    contexto:
      "Professores do ensino básico (infantil, fundamental e médio) que exerceram efetivamente a docência em sala de aula.",
    atuacao:
      "Comprovação do tempo de exercício em sala de aula, enquadramento e condução do pedido de aposentadoria especial do professor.",
    resultado: "Aposentadoria com 5 anos a menos que o exigido das demais profissões",
    cats: ["Aposentadoria"],
  },
  {
    perfil: "Trabalhador informal que contribuiu por conta própria",
    contexto:
      "Autônomos, microempreendedores ou contribuintes individuais que recolheram ao INSS por conta própria e querem verificar o histórico.",
    atuacao:
      "Levantamento das contribuições, verificação de inconsistências no CNIS e regularização do histórico contributivo.",
    resultado: "Histórico contributivo regularizado e planejamento para aposentadoria",
    cats: ["Aposentadoria"],
  },
  {
    perfil: "Mãe que perdeu filho ou filho que nasceu morto",
    contexto:
      "Mulheres seguradas que tiveram parto de natimorto ou falecimento do filho pouco após o nascimento e têm dúvidas sobre o salário-maternidade.",
    atuacao:
      "Análise da qualidade de segurada, comprovação do evento e protocolo do pedido com a documentação adequada.",
    resultado: "Salário-maternidade de 120 dias, mesmo em casos de natimorto ou morte neonatal",
    cats: ["Trabalhador Rural"],
  },
  {
    perfil: "Cônjuge separado que perdeu ex-parceiro segurado",
    contexto:
      "Pessoas divorciadas ou separadas que dependiam economicamente do ex-cônjuge falecido segurado pelo INSS.",
    atuacao:
      "Comprovação de dependência econômica, análise do vínculo previdenciário do falecido e protocolo da pensão.",
    resultado: "Pensão por morte proporcional conforme legislação vigente",
    cats: ["Pensão por Morte"],
  },
];

function AreasPage() {
  const [filtro, setFiltro] = useState<Categoria>("Todas");
  const lista = filtro === "Todas" ? AREAS : AREAS.filter((a) => a.cats.includes(filtro));

  return (
    <Layout>
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Eyebrow className="mx-auto justify-center">Áreas de atuação</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Você se encaixa em <em className="hl">algum desses perfis</em>?
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
              Reunimos as situações mais comuns atendidas pelo escritório. Se você se
              identificar com alguma, é provável que exista um caminho legal para o seu caso.
              A análise individual confirma o que se aplica.
            </p>
          </motion.div>
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
            <motion.article
              key={i}
              className="flex flex-col rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--gold)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
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
              <dl className="mt-4 space-y-3 text-sm flex-1">
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
              <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-[var(--surface)] px-4 py-3">
                <TrendingUp size={14} className="mt-0.5 flex-shrink-0 text-[var(--gold)]" />
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{a.resultado}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl mb-10">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)]">
            Perguntas que a gente mais <em className="hl">recebe</em>
          </h2>
        </div>
        <FaqAccordion items={FAQ_AREAS} />
      </section>

      <CoverageSection />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
          <div className="relative">
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
                <WhatsAppIcon size={18} /> Conversar sobre o meu caso <ArrowRight size={16} />
              </WaveButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

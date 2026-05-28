import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  Briefcase,
  CheckCircle2,
  HeartPulse,
  HandCoins,
  Heart,
  HelpCircle,
  RefreshCw,
  ShieldCheck,
  Tractor,
  Users,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CoverageSection } from "@/components/site/CoverageSection";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Escritório Gonçalves Advocacia Previdenciária" },
      {
        name: "description",
        content:
          "Conteúdo informativo sobre as áreas do direito previdenciário em que o escritório atua: aposentadorias, auxílios, BPC/LOAS, pensão por morte e revisão de benefícios.",
      },
      { property: "og:title", content: "Serviços — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Conteúdo informativo sobre direito previdenciário, em conformidade com o Provimento nº 205/2021 da OAB.",
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
      "Antes de protocolar, entenda seu cenário. Estudo técnico do histórico contributivo, simulações nas regras de transição e indicação do momento mais adequado para o pedido.",
    pontos: [
      "Simulações nas regras de transição",
      "Identificação de períodos não computados",
      "Análise técnica do tempo de contribuição",
    ],
    perfil: "Para quem está próximo de se aposentar ou quer planejar com antecedência",
  },
  {
    icon: HeartPulse,
    titulo: "Auxílio-Doença e Aposentadoria por Invalidez",
    descricao:
      "Quando a saúde impede o trabalho, a lei prevê amparo. Conduzimos o pedido administrativo, a preparação para a perícia e, se houver negativa, a discussão na esfera judicial.",
    pontos: [
      "Pedido administrativo e recursos",
      "Preparação técnica para a perícia médica",
      "Conversão para invalidez quando cabível",
    ],
    perfil: "Para quem está afastado por doença ou acidente e teve o benefício negado",
  },
  {
    icon: HandCoins,
    titulo: "BPC / LOAS",
    descricao:
      "Benefício assistencial destinado a idosos a partir de 65 anos e pessoas com deficiência em situação de vulnerabilidade. Independe de contribuição prévia ao INSS.",
    pontos: [
      "Análise da renda familiar per capita",
      "Orientação sobre CadÚnico",
      "Recurso administrativo em caso de negativa",
    ],
    perfil: "Para idosos 65+ ou pessoas com deficiência em situação de vulnerabilidade",
  },
  {
    icon: Users,
    titulo: "Pensão por Morte",
    descricao:
      "Em um momento difícil, a família precisa de orientação clara. Atuamos no reconhecimento do direito de cônjuges, companheiros e demais dependentes legalmente previstos.",
    pontos: [
      "Reconhecimento de união estável",
      "Pensão para filhos menores e inválidos",
      "Discussão judicial quando cabível",
    ],
    perfil: "Para famílias que perderam um ente querido segurado pelo INSS",
  },
  {
    icon: RefreshCw,
    titulo: "Revisão de Benefícios",
    descricao:
      "Aposentadoria com valor abaixo do esperado? O cálculo do INSS pode ter desconsiderado contribuições, períodos especiais ou regras mais vantajosas. Análise técnica identifica as teses cabíveis.",
    pontos: [
      "Revisão da vida toda",
      "Revisão do teto e do buraco negro",
      "Inclusão de períodos especiais",
    ],
    perfil: "Para quem já se aposentou mas suspeita que o valor está errado",
  },
  {
    icon: Tractor,
    titulo: "Trabalhador Rural e Segurado Especial",
    descricao:
      "Quem dedicou a vida ao campo tem regras próprias previstas em lei — mesmo sem carteira assinada. Reunimos provas materiais e testemunhais para fundamentar o pedido.",
    pontos: [
      "Comprovação de atividade rural",
      "Aposentadoria por idade rural",
      "Salário-maternidade rural",
    ],
    perfil: "Para trabalhadores rurais, agricultores familiares e pescadores artesanais",
  },
  {
    icon: Baby,
    titulo: "Salário-Maternidade",
    descricao:
      "Benefício pago à segurada durante o período de afastamento por nascimento, adoção ou natimorto. Muitas mulheres desconhecem que têm direito mesmo estando desempregadas ou trabalhando informalmente.",
    pontos: [
      "Seguradas desempregadas e informais",
      "Casos de natimorto e morte neonatal",
      "Trabalhadora rural e MEI",
    ],
    perfil: "Para gestantes, mães que adotaram ou que tiveram parto sem vínculo formal de emprego",
  },
  {
    icon: Briefcase,
    titulo: "Direito Trabalhista",
    descricao:
      "Atuamos em causas trabalhistas — rescisão indevida, horas extras, assédio, FGTS não depositado, verbas rescisórias e outros direitos garantidos pela CLT.",
    pontos: [
      "Rescisão indevida e verbas rescisórias",
      "Horas extras e FGTS",
      "Assédio moral e dano moral",
    ],
    perfil: "Para trabalhadores com direitos não pagos ou relação de trabalho encerrada irregularmente",
  },
  {
    icon: Heart,
    titulo: "Direito de Família",
    descricao:
      "Atuamos em pensão alimentícia, divórcio, guarda de filhos e demais questões que envolvem a família — com escuta humana e condução técnica.",
    pontos: [
      "Pensão alimentícia e revisão de pensão",
      "Divórcio consensual e litigioso",
      "Guarda e regulamentação de visitas",
    ],
    perfil: "Para quem está passando por separação, questões de guarda ou pensão",
  },
  {
    icon: HelpCircle,
    titulo: "Outro caso? Fale com a equipe",
    descricao:
      "Se a sua situação não está listada acima, conte para a equipe. Analisamos cada caso individualmente e indicamos o melhor caminho para a sua situação.",
    pontos: [
      "Dano moral",
      "Causas cíveis diversas",
      "Análise gratuita pelo WhatsApp",
    ],
    perfil: "Para qualquer situação que precise de orientação jurídica",
  },
];

const PASSOS = [
  {
    title: "Fale com a gente pelo WhatsApp",
    desc: "Você conta sua situação em poucos minutos. Nossa equipe já entende o que precisa saber para começar a análise.",
  },
  {
    title: "Receba a análise técnica do seu caso",
    desc: "Avaliamos qual serviço se aplica, o que você já tem e o que ainda falta para fundamentar o pedido com base na lei.",
  },
  {
    title: "A gente conduz, se for o caso",
    desc: "Se decidir seguir, montamos o processo, acompanhamos cada etapa e te preparamos para perícia ou audiência, quando necessário.",
  },
];

const FAQ_SERVICOS = [
  {
    q: "Qual é a diferença entre auxílio-doença e aposentadoria por invalidez?",
    a: "O auxílio-doença é temporário — para quem está incapacitado por um período e pode se recuperar. A aposentadoria por invalidez é permanente e exige comprovação de incapacidade definitiva para qualquer atividade laboral.",
  },
  {
    q: "O BPC/LOAS exige contribuição prévia ao INSS?",
    a: "Não. O BPC/LOAS é um benefício assistencial, não previdenciário. Não depende de contribuição — mas exige comprovação de vulnerabilidade socioeconômica e, no caso de deficiência, laudo específico.",
  },
  {
    q: "Quando vale a pena pedir revisão de um benefício já concedido?",
    a: "Quando há indícios de que o INSS subestimou o valor — por exemplo, desconsiderando salários antigos, períodos de atividade especial ou aplicando uma regra menos favorável. A análise técnica identifica se existe tese cabível.",
  },
  {
    q: "Trabalhador rural precisa de quais documentos para pedir aposentadoria?",
    a: "A lei exige provas materiais da atividade rural — como escritura de terra, notas fiscais de venda de produção, cadastro no sindicato rural, carteira de vacinação animal, entre outros. Provas testemunhais complementam, mas não substituem.",
  },
  {
    q: "O planejamento de aposentadoria é útil mesmo para quem ainda vai contribuir por anos?",
    a: "Sim — e quanto antes melhor. O planejamento antecipado permite identificar períodos não computados, simular diferentes regras de transição e escolher a estratégia que vai gerar o maior benefício possível.",
  },
];

function ServicosPage() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Eyebrow className="mx-auto justify-center">Serviços</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Seu direito existe. <em className="hl">A gente ajuda a provar</em>.
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
              Atuação em benefícios previdenciários e assistenciais — aposentadorias,
              auxílios, BPC/LOAS, pensões, revisões e demais demandas relativas ao INSS.
              Conteúdo meramente informativo sobre cada área.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA O ATENDIMENTO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Como funciona</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
                Etapas do <em className="hl">atendimento</em>
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Do primeiro contato até a conclusão do caso, você sabe o que está acontecendo em cada etapa.
              </p>
            </div>
            <ol className="relative">
              {PASSOS.map((p, i) => (
                <li key={p.title} className="relative flex gap-5 pb-10 last:pb-0">
                  {i < PASSOS.length - 1 && (
                    <span className="absolute left-[19px] top-12 bottom-0 w-px bg-[var(--border)]" />
                  )}
                  <span className="relative z-10 grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-[var(--navy)] font-display font-semibold text-[var(--gold-light)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-semibold text-[var(--navy)]">{p.title}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* GRID DE SERVIÇOS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl mb-12">
          <Eyebrow>Áreas de atuação</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Em que podemos <em className="hl">ajudar você</em>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICOS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
                    <li key={p} className="flex items-start gap-2 text-sm text-[var(--text)]">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[var(--gold)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-lg bg-[var(--surface)] px-4 py-2.5 text-xs text-[var(--text-muted)]">
                  {s.perfil}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="bg-[var(--surface)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-4">
                Atenção
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[var(--navy)]">
                Benefício negado? O prazo para recorrer é de <em className="hl">30 dias</em>.
              </h2>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                Após uma negativa do INSS, você tem 30 dias para apresentar recurso administrativo.
                Deixar esse prazo passar não encerra seu direito, mas pode complicar o processo.
                Não espere — fale com a equipe agora.
              </p>
              <div className="mt-6">
                <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                  <WhatsAppIcon size={16} /> Falar sobre o meu caso <ArrowRight size={14} />
                </WaveButton>
              </div>
            </div>
          </div>
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
        <FaqAccordion items={FAQ_SERVICOS} />
      </section>

      <CoverageSection />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
          <div className="relative">
            <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight text-white">
              Não sabe qual benefício é o <em className="hl">seu caso</em>?
            </h2>
            <p className="mt-4 text-white/65 max-w-xl mx-auto">
              Conte sua situação no WhatsApp. Sem compromisso, com conversa direta para
              entender o que se aplica ao seu caso.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                <WhatsAppIcon size={16} /> Falar no WhatsApp <ArrowRight size={14} />
              </WaveButton>
              <Link
                to="/contato"
                className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                ou envie uma mensagem pelo formulário
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CoverageSection } from "@/components/site/CoverageSection";

export const Route = createFileRoute("/voce-tem-direito")({
  head: () => ({
    meta: [
      { title: "Você Tem Direito? — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Descubra em minutos se você pode ter direito a aposentadoria, auxílio ou revisão de benefício pelo INSS.",
      },
      { property: "og:title", content: "Você Tem Direito? — Escritório Gonçalves" },
      { property: "og:description", content: "Descubra em minutos se você pode ter direito a aposentadoria, auxílio ou revisão de benefício pelo INSS." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/voce-tem-direito` },
      { property: "og:image", content: `${SITE.url}/hero-bg.webp` },
      { property: "og:image:alt", content: "Você Tem Direito? — Escritório Gonçalves" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE.url}/hero-bg.webp` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/voce-tem-direito` }],
  }),
  component: OrientacaoPage,
});

type Step = {
  id: string;
  question: string;
  options: { label: string; value: string }[];
};

const STEPS: Step[] = [
  {
    id: "situacao",
    question: "Qual é a sua situação atual?",
    options: [
      { label: "Estou trabalhando normalmente", value: "trabalhando" },
      { label: "Estou afastado por saúde ou acidente", value: "afastado" },
      { label: "Tive benefício negado ou cancelado", value: "negado" },
      { label: "Já sou aposentado e quero revisar", value: "aposentado" },
    ],
  },
  {
    id: "tempo",
    question: "Quantos anos você contribuiu para o INSS?",
    options: [
      { label: "Menos de 10 anos", value: "menos10" },
      { label: "Entre 10 e 20 anos", value: "10a20" },
      { label: "Entre 20 e 35 anos", value: "20a35" },
      { label: "Mais de 35 anos (ou 30, se mulher)", value: "mais35" },
    ],
  },
  {
    id: "idade",
    question: "Qual é a sua faixa etária?",
    options: [
      { label: "Menos de 40 anos", value: "menos40" },
      { label: "Entre 40 e 55 anos", value: "40a55" },
      { label: "Entre 55 e 65 anos", value: "55a65" },
      { label: "Mais de 65 anos", value: "mais65" },
    ],
  },
];

type Answers = Record<string, string>;

type Result = {
  eligible: boolean;
  title: string;
  description: string;
  cta: string;
};

function calcResult(answers: Answers): Result {
  const { situacao, tempo, idade } = answers;

  if (situacao === "negado") {
    return {
      eligible: true,
      title: "Você pode recorrer",
      description:
        "Benefício negado não significa fim da linha. Na maioria dos casos existe fundamento para recurso ou nova análise — especialmente dentro de 30 dias da decisão.",
      cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20tive%20meu%20benef%C3%ADcio%20negado%20e%20gostaria%20de%20uma%20an%C3%A1lise%20do%20meu%20caso.`,
    };
  }

  if (situacao === "afastado") {
    return {
      eligible: true,
      title: "Você pode ter direito a auxílio por incapacidade",
      description:
        "Afastamento por acidente de qualquer natureza dispensa carência — o direito nasce imediatamente. Por doença comum, são necessárias ao menos 12 contribuições. Em ambos os casos, a incapacidade precisa ser comprovada por perícia médica do INSS.",
      cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20estou%20afastado%20e%20gostaria%20de%20saber%20se%20tenho%20direito%20a%20aux%C3%ADlio.`,
    };
  }

  if (situacao === "aposentado") {
    return {
      eligible: true,
      title: "Sua aposentadoria pode valer mais",
      description:
        "Existem diversas teses de revisão em aberto que podem recuperar valores pagos a menos desde a concessão — por erro no cálculo, salários desconsiderados ou índice de reajuste aplicado incorretamente. Cada caso exige análise individual do extrato CNIS e da carta de concessão.",
      cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20sou%20aposentado%20e%20gostaria%20de%20saber%20se%20tenho%20direito%20a%20revis%C3%A3o.`,
    };
  }

  if (tempo === "mais35" && (idade === "55a65" || idade === "mais65")) {
    return {
      eligible: true,
      title: "Você provavelmente pode se aposentar agora",
      description:
        "Com seu tempo de contribuição e idade, as regras de transição ou a aposentadoria por idade podem estar abertas para você. Vale verificar seu extrato do CNIS.",
      cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20j%C3%A1%20posso%20me%20aposentar.`,
    };
  }

  if (tempo === "mais35" && idade === "40a55") {
    return {
      eligible: true,
      title: "Você está perto — e pode antecipar",
      description:
        "Com esse tempo de contribuição, algumas regras de transição podem permitir aposentadoria antes da idade mínima. Atividade especial ou rural pode ainda reduzir o prazo.",
      cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20quero%20entender%20se%20posso%20antecipar%20minha%20aposentadoria.`,
    };
  }

  if (idade === "mais65" && (tempo === "10a20" || tempo === "20a35" || tempo === "mais35")) {
    return {
      eligible: true,
      title: "Aposentadoria por idade pode ser sua saída",
      description:
        "A aposentadoria por idade exige 65 anos para homens e 62 anos para mulheres, com carência mínima de 15 anos de contribuição. Se você já atingiu a idade e tem esse tempo de contribuição, pode estar apto — vale confirmar com uma análise do seu CNIS.",
      cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20tenho%20mais%20de%2065%20anos%20e%20quero%20saber%20sobre%20aposentadoria%20por%20idade.`,
    };
  }

  if (tempo === "menos10" && idade === "menos40") {
    return {
      eligible: false,
      title: "Ainda não, mas vale planejar agora",
      description:
        "Com menos de 10 anos de contribuição e abaixo dos 40 anos, a aposentadoria ainda está distante — mas o planejamento previdenciário hoje faz diferença enorme no futuro. Uma consulta pode mostrar o melhor caminho.",
      cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20quero%20fazer%20um%20planejamento%20previdenci%C3%A1rio.`,
    };
  }

  return {
    eligible: true,
    title: "Seu caso merece uma análise",
    description:
      "Sua combinação de fatores tem nuances que podem abrir direitos — tempo especial, atividade rural, período em outros regimes. Uma análise individual identifica o melhor benefício para você.",
    cta: `https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20an%C3%A1lise%20do%20meu%20caso%20previdenci%C3%A1rio.`,
  };
}

const slide = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -32 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

function OrientacaoPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<Result | null>(null);

  function choose(value: string) {
    const updated = { ...answers, [STEPS[step].id]: value };
    setAnswers(updated);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setResult(calcResult(updated));
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  const progress = result ? 100 : Math.round((step / STEPS.length) * 100);

  return (
    <Layout>
      {/* HERO */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Eyebrow className="mx-auto justify-center">Você tem direito?</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Descubra em <em className="hl">3 perguntas</em> se você tem direito a um benefício.
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
              Sem cadastro. Sem dados pessoais. Resultado imediato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ORIENTAÇÃO */}
      <section className="mx-auto max-w-2xl px-6 py-20 lg:py-24">

        {/* Barra de progresso */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-[var(--text-muted)] mb-2">
            <span>{result ? "Concluído" : `Pergunta ${step + 1} de ${STEPS.length}`}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--border)]">
            <motion.div
              className="h-full rounded-full bg-[var(--gold)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div key={`step-${step}`} {...slide}>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[var(--navy)] leading-snug">
                {STEPS[step].question}
              </h2>
              <div className="mt-8 flex flex-col gap-3">
                {STEPS[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => choose(opt.value)}
                    className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-white px-5 py-4 text-left text-sm font-medium text-[var(--navy)] transition-all hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 hover:shadow-[var(--shadow-md)]"
                  >
                    {opt.label}
                    <ArrowRight size={16} className="shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--gold)]" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" {...slide}>
              <div className="flex items-center gap-3 mb-6">
                {result.eligible ? (
                  <CheckCircle2 size={28} className="shrink-0 text-emerald-500" />
                ) : (
                  <XCircle size={28} className="shrink-0 text-amber-500" />
                )}
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-[var(--navy)]">
                  {result.title}
                </h2>
              </div>

              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                {result.description}
              </p>

              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                Esta orientação é um ponto de partida. Apenas a análise do seu histórico completo — CNIS, carta de concessão e documentos — confirma seus direitos.
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <WaveButton variant="wpp" href={result.cta} target="_blank" rel="noopener">
                  <WhatsAppIcon size={16} /> Falar com especialista
                </WaveButton>
                <WaveButton variant="outline" as="button" onClick={reset}>
                  <RotateCcw size={14} /> Refazer
                </WaveButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <CoverageSection />

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 text-white text-center">
          <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
          <div className="relative max-w-xl mx-auto">
            <Eyebrow className="mx-auto justify-center">Prefere falar diretamente?</Eyebrow>
            <p className="mt-3 font-display text-xl leading-snug text-white">
              Nossa equipe analisa seu caso sem compromisso — e sem enrolação.
            </p>
            <div className="mt-6 flex justify-center">
              <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                <WhatsAppIcon size={16} /> Falar no WhatsApp <ArrowRight size={14} />
              </WaveButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

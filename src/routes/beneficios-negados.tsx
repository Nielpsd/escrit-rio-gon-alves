import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Clock, ExternalLink, Globe, MapPin, Phone, Shield, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const WPP =
  "https://api.whatsapp.com/send?phone=5569992621298&text=Olá!%20Meu%20benefício%20foi%20negado%20pelo%20INSS%20e%20gostaria%20de%20ajuda.";

const MOTIVOS = [
  "Falta de qualidade de segurado",
  "Falta de carência",
  "Não comprovação de incapacidade",
  "Não comprovação de baixa renda",
  "Divergência no CNIS",
  "Documentação inadequada",
  "Atividade econômica incompatível",
  "Erro na análise do INSS",
  "Requerimento feito de forma errada",
];

const BENEFICIOS = [
  "Auxílio-Doença (Benefício por Incapacidade Temporária)",
  "Aposentadoria por Invalidez",
  "Aposentadoria por Idade",
  "Aposentadoria Especial",
  "Auxílio-Acidente",
  "Benefício de Prestação Continuada (BPC/LOAS)",
  "Salário-Maternidade",
  "Auxílio-Reclusão",
  "Pensão por Morte",
];

const PASSOS = [
  {
    title: "Análise inicial",
    desc: "Avaliamos os motivos da negativa e identificamos os erros do INSS.",
  },
  {
    title: "Avaliação detalhada",
    desc: "Reunimos os documentos necessários e montamos uma estratégia sólida.",
  },
  {
    title: "Novo pedido ou ação judicial",
    desc: "Fazemos um novo pedido administrativo ou levamos o caso à Justiça, conforme o seu caso.",
  },
  {
    title: "Você descansa, nós fazemos o resto",
    desc: "Cuidamos de tudo, acompanhando cada etapa até o melhor resultado possível.",
  },
];

const RISCOS = [
  "Erros nos documentos podem atrasar ou negar o benefício.",
  "Desconhecimento das regras dificulta atender às exigências do INSS.",
  "Um clique errado no Meu INSS, uma resposta inadequada no 135 ou na perícia podem comprometer todo o processo.",
  "Maior chance de negativa — o processo é cheio de detalhes que passam despercebidos.",
  "Estresse e incerteza ao lidar com prazos e burocracia sem suporte.",
];

const BENEFICIOS_ADV = [
  "Orientação completa em cada etapa, inclusive nas perícias.",
  "Mais chances de aprovação com documentação correta e estratégia adequada.",
  "Acompanhamento até a aprovação, inclusive na via judicial se necessário.",
  "Tranquilidade — você descansa enquanto o advogado cuida de tudo.",
];

const FAQ = [
  {
    q: "Quanto tempo tenho para recorrer após uma negativa do INSS?",
    a: "Você tem 30 dias para apresentar recurso administrativo após receber a carta de negativa. Deixar esse prazo vencer não encerra seu direito, mas dificulta o processo — o próximo passo seria a via judicial.",
  },
  {
    q: "O escritório atende quem está em outro estado?",
    a: "Sim. Nosso atendimento é 100% online. Qualquer pessoa, em qualquer estado, tem acesso ao nosso suporte especializado sem precisar sair de casa.",
  },
  {
    q: "Se meu benefício já foi negado uma vez, ainda tenho chance?",
    a: "Sim. Uma negativa anterior não encerra seu direito. Dependendo do que foi enviado e dos motivos da negativa, é possível fazer um novo pedido administrativo ou seguir para a via judicial.",
  },
  {
    q: "Qual o custo do serviço?",
    a: "Nosso honorário é cobrado somente se o pedido for aprovado. Se não houver sucesso, você não paga nada.",
  },
  {
    q: "Vale a pena tentar sozinho primeiro no INSS?",
    a: "Em geral, não. Erros simples — um documento errado, um requerimento inadequado, uma resposta incorreta na perícia — podem comprometer o processo inteiro. Se o benefício ainda não foi negado, ter um advogado desde o início aumenta muito as chances de aprovação.",
  },
];

export const Route = createFileRoute("/beneficios-negados")({
  head: () => ({
    meta: [
      { title: "Benefício Negado pelo INSS — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Seu benefício foi negado pelo INSS? Saiba como reverter a negativa com orientação jurídica especializada. Alta taxa de reversão. Você só paga se for aprovado.",
      },
      {
        property: "og:title",
        content: "Benefício Negado pelo INSS — Escritório Gonçalves",
      },
      {
        property: "og:description",
        content:
          "Saiba como reverter a negativa do INSS com orientação jurídica especializada. Atendimento online em todo o Brasil.",
      },
    ],
  }),
  component: BeneficiosNegadosPage,
});

function BeneficiosNegadosPage() {
  const [isRO, setIsRO] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => { if (d.region_code === "RO") setIsRO(true); })
      .catch(() => {});
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_520px] items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Eyebrow>Benefício Negado</Eyebrow>

              <AnimatePresence>
                {isRO && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/15 px-4 py-1.5"
                  >
                    <MapPin size={13} className="text-[var(--gold)]" />
                    <span className="text-sm font-medium text-[var(--gold-light)]">
                      Atendimento presencial disponível em Rondônia
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
                Seu benefício foi negado<br />
                <em className="hl">pelo INSS</em>?
              </h1>
              <p className="mt-6 text-base text-white/65 leading-relaxed max-w-xl">
                Não desista. Com um advogado especialista em direito previdenciário, você pode
                reverter a negativa e garantir o que é seu por direito.
              </p>
              <div className="mt-8">
                <WaveButton variant="wpp" size="lg" href={WPP} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> Recuperar meu benefício <ArrowRight size={16} />
                </WaveButton>
              </div>
            </motion.div>

            {/* MOCKUP NOTIFICAÇÕES */}
            <div className="hidden lg:flex flex-col gap-4 select-none" aria-hidden>

              {/* Cabeçalho do painel */}
              <motion.p
                className="text-[11px] font-semibold uppercase tracking-widest text-white/25 px-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Central de notificações
              </motion.p>

              {/* Notificação 1 — negativa */}
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm"
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-red-500/25">
                      <X size={13} className="text-red-400" />
                    </span>
                    <span className="text-xs font-semibold text-white/45">Meu INSS</span>
                  </div>
                  <span className="text-[11px] text-white/30">agora mesmo</span>
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  Pedido Indeferido
                </p>
                <p className="mt-1.5 text-xs text-white/55 leading-relaxed">
                  Seu requerimento de <strong className="text-white/70">Auxílio-Doença</strong> foi analisado e indeferido. Benefício negado.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-lg bg-white/[0.07] px-3 py-1 text-xs text-white/50">Ver detalhes</span>
                  <span className="rounded-lg bg-white/[0.07] px-3 py-1 text-xs text-white/50">Dispensar</span>
                </div>
              </motion.div>

              {/* Notificação 2 — prazo */}
              <motion.div
                className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.12] p-4"
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-amber-400/25">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    </span>
                    <span className="text-xs font-semibold text-amber-300/60">Prazo legal</span>
                  </div>
                  <span className="text-[11px] text-amber-300/40">urgente</span>
                </div>
                <p className="text-sm font-semibold text-amber-200 leading-snug">
                  30 dias para apresentar recurso
                </p>
                <p className="mt-1.5 text-xs text-amber-200/55 leading-relaxed">
                  O prazo para recurso administrativo está correndo. Não deixe vencer.
                </p>
                <div className="mt-3">
                  <div className="h-1.5 w-full rounded-full bg-amber-400/15">
                    <div className="h-1.5 w-[72%] rounded-full bg-amber-400/50" />
                  </div>
                  <p className="mt-1 text-[11px] text-amber-300/40">22 dias restantes</p>
                </div>
              </motion.div>

              {/* Notificação 3 — escritório */}
              <motion.div
                className="rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.12] p-4"
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.85 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="grid h-6 w-6 place-items-center rounded-md bg-[var(--gold)]/25"
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Check size={13} className="text-[var(--gold)]" />
                    </motion.span>
                    <span className="text-xs font-semibold text-[var(--gold)]/60">Escritório Gonçalves</span>
                  </div>
                  <span className="text-[11px] text-[var(--gold)]/35">1 min atrás</span>
                </div>
                <p className="text-sm font-semibold text-[var(--gold-light)] leading-snug">
                  Advogado especialista disponível
                </p>
                <p className="mt-1.5 text-xs text-[var(--gold-light)]/55 leading-relaxed">
                  Analisamos seu caso. É possível reverter a negativa.
                  <strong className="text-[var(--gold-light)]/80"> Fale agora sem compromisso.</strong>
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--gold)]/20 px-3 py-1 text-xs font-semibold text-[var(--gold-light)]">
                    <WhatsAppIcon size={11} /> Responder no WhatsApp
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* DOIS CENÁRIOS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl mb-12">
          <Eyebrow>Qual é o seu momento?</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Ainda vai dar entrada ou <em className="hl">já foi negado</em>?
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-[var(--border)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block rounded-full bg-[var(--navy-light)] px-3 py-1 text-xs font-semibold text-[var(--navy)] mb-4">
              Ainda não dei entrada
            </span>
            <h3 className="font-display text-xl font-semibold text-[var(--navy)] leading-snug">
              Ótimo — você está no momento certo.
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              Contratar um advogado desde o início aumenta muito as chances de aprovação e evita
              erros que podem comprometer seu direito — um documento errado, uma resposta inadequada,
              um clique no lugar errado são suficientes para o INSS negar o benefício.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-[var(--border)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-4">
              Já recebi a negativa
            </span>
            <h3 className="font-display text-xl font-semibold text-[var(--navy)] leading-snug">
              Não desanime — na maioria dos casos ainda dá tempo.
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              Temos uma alta taxa de reversão e sabemos como lutar pelo que é seu. Dependendo do
              que foi enviado e dos motivos da negativa, é possível um novo pedido administrativo
              ou uma ação judicial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MOTIVOS DE NEGATIVA */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Por que acontece</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Principais motivos de <em className="hl">negativa no INSS</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {MOTIVOS.map((m, i) => (
              <motion.span
                key={m}
                className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--text)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <X size={14} className="flex-shrink-0 text-red-400" />
                {m}
              </motion.span>
            ))}
            <motion.span
              className="flex items-center gap-2 rounded-xl border border-dashed border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--text-muted)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: MOTIVOS.length * 0.05 }}
            >
              E muitos outros
            </motion.span>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS QUE RECUPERAMOS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl mb-12">
          <Eyebrow>Nossa atuação</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Benefícios que podemos <em className="hl">recuperar</em>
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((b, i) => (
            <motion.div
              key={b}
              className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white p-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-[var(--navy-light)]">
                <Check size={14} className="text-[var(--navy)]" />
              </span>
              <span className="text-sm leading-relaxed text-[var(--text)]">{b}</span>
            </motion.div>
          ))}
          <motion.div
            className="flex items-start gap-3 rounded-xl border border-dashed border-[var(--border)] bg-white p-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: BENEFICIOS.length * 0.06 }}
          >
            <span className="text-sm leading-relaxed text-[var(--text-muted)]">E outros</span>
          </motion.div>
        </div>
      </section>

      {/* OS CAMINHOS POSSÍVEIS */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Como resolvemos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Os caminhos <em className="hl">possíveis</em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--gold)] bg-white p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-xl font-semibold text-[var(--navy)]">
                Novo pedido administrativo
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                Em muitos casos é possível resolver com um novo pedido no INSS. Com toda a nossa
                experiência, reunimos os documentos e os argumentos certos para fortalecer sua
                solicitação e aumentar as chances de aprovação.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-[var(--border)] border-t-[3px] border-t-[var(--navy)] bg-white p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-display text-xl font-semibold text-[var(--navy)]">
                Ação judicial
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                Quando o pedido administrativo não é suficiente, a Justiça é o caminho mais eficaz.
                Na via judicial, produzimos novas provas, apresentamos alegações robustas e
                utilizamos estratégias que aumentam muito as chances de êxito.
              </p>
            </motion.div>
          </div>
          <div className="mt-8">
            <WaveButton variant="wpp" href={WPP} target="_blank" rel="noopener">
              <WhatsAppIcon size={16} /> Falar sobre o meu caso <ArrowRight size={14} />
            </WaveButton>
          </div>
        </div>
      </section>

      {/* PASSO A PASSO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Como atuamos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Passo a passo do <em className="hl">atendimento</em>
            </h2>
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
                  <h3 className="font-display text-xl font-semibold text-[var(--navy)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RISCOS VS BENEFÍCIOS */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Por que contratar um advogado</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Sozinho ou com <em className="hl">orientação especializada</em>?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-red-50/60 p-8">
              <h3 className="font-display text-lg font-semibold text-red-800 mb-5">
                Os riscos de tentar sozinho
              </h3>
              <ul className="space-y-4">
                {RISCOS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-red-100">
                      <X size={12} className="text-red-500" />
                    </span>
                    <span className="text-sm text-[var(--text)] leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8">
              <h3 className="font-display text-lg font-semibold text-[var(--navy)] mb-5">
                Com um advogado ao seu lado
              </h3>
              <ul className="space-y-4">
                {BENEFICIOS_ADV.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--navy-light)]">
                      <Shield size={12} className="text-[var(--navy)]" />
                    </span>
                    <span className="text-sm text-[var(--text)] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEVO TENTAR SOZINHO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <Eyebrow>Uma dúvida comum</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Vale a pena tentar sozinho <em className="hl">primeiro</em>?
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Em geral, não. Ter um advogado especializado desde o início evita negativas por
              erros simples: um documento errado, um requerimento inadequado, uma resposta
              incorreta na perícia.
            </p>
            <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
              Se você buscar ajuda apenas depois de a negativa acontecer, o processo pode ficar
              mais caro, mais difícil de reverter e bem mais demorado.
            </p>
            <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
              Se o seu benefício ainda não foi negado, não corra esse risco — mesmo que o
              processo já esteja em andamento.
            </p>
          </div>
          <motion.div
            className="rounded-2xl border border-amber-200 bg-amber-50 p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-4">
              Atenção
            </span>
            <h3 className="font-display text-xl font-semibold text-[var(--navy)]">
              Benefício negado? O prazo para recorrer é de 30 dias.
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              Após receber a carta de negativa, você tem 30 dias para apresentar recurso
              administrativo. Deixar esse prazo vencer não encerra seu direito, mas complica o
              processo. Não espere.
            </p>
            <div className="mt-6">
              <WaveButton variant="wpp" href={WPP} target="_blank" rel="noopener">
                <WhatsAppIcon size={16} /> Falar agora <ArrowRight size={14} />
              </WaveButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAGUE SOMENTE AO SER APROVADO */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14">
            <div
              className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none"
              aria-hidden
            >
              G
            </div>
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] items-center">
              <div>
                <Eyebrow>Sem risco financeiro</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Pague somente <em className="hl">se for aprovado</em>.
                </h2>
                <p className="mt-4 text-white/65 max-w-xl leading-relaxed">
                  Acreditamos em transparência e confiança. Nosso honorário é cobrado somente se
                  o seu pedido for aprovado. Se não houver sucesso, você não paga nada.
                  Trabalhamos com total dedicação e sem risco financeiro para você.
                </p>
              </div>
              <div className="flex-shrink-0">
                <WaveButton variant="wpp" size="lg" href={WPP} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> Garantir meu benefício <ArrowRight size={16} />
                </WaveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>Assista</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              O que fazer quando o INSS <em className="hl">nega seu benefício</em>
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Dr. Renan Gonçalves, ex-servidor e gerente do INSS, explica os principais motivos
              de negativa e como reverter a decisão.
            </p>
            <div className="mt-8">
              <WaveButton variant="wpp" href={WPP} target="_blank" rel="noopener">
                <WhatsAppIcon size={16} /> Falar com um advogado <ArrowRight size={14} />
              </WaveButton>
            </div>
          </motion.div>
          <motion.div
            className="aspect-video rounded-2xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-md)]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://www.youtube.com/embed/9458BMstnxQ"
              title="O que fazer quando o INSS nega seu benefício — Dr. Renan Gonçalves"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* DR. RENAN */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)]">
                <img
                  src="/02-2.webp"
                  alt="Dr. Renan Gonçalves"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
                Ex-servidor do INSS · @renan.inss
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>Quem vai cuidar do seu caso</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
                Dr. Renan <em className="hl">Gonçalves</em>
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Com mais de 5 anos de experiência como servidor e gerente do INSS, o Dr. Renan
                analisou milhares de benefícios e conhece os processos previdenciários por dentro.
              </p>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                Hoje atua como advogado especializado, aplicando esse conhecimento em favor de
                quem depende dos benefícios do INSS — com alto índice de aprovação em casos de
                clientes em todos os estados do Brasil. Conta com uma equipe altamente
                especializada que trabalha em conjunto para garantir os melhores resultados.
              </p>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                É referência nas redes sociais com milhares de seguidores no{" "}
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--navy)] underline underline-offset-4 hover:text-[var(--gold)]"
                >
                  @renan.inss
                </a>
                , e mentor de advogados previdenciários em todo o país.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COBERTURA + UNIDADES */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Onde atuamos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Online para todo o Brasil. <br />
              <em className="hl">Presencial em Rondônia.</em>
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Nosso serviço é totalmente online — qualquer pessoa, em qualquer estado, tem acesso
              ao nosso suporte especializado sem sair de casa. Para quem prefere atendimento
              presencial, contamos com 3 unidades em Rondônia.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
            {/* Online card */}
            <motion.div
              className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-10 -bottom-10 font-display text-[220px] leading-none font-bold text-white/[0.04] select-none pointer-events-none" aria-hidden>G</div>
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 mb-6">
                  <Globe size={13} /> Atendimento online
                </span>
                <h3 className="font-display text-2xl font-semibold text-white leading-snug">
                  Todo o Brasil,<br />
                  <em className="hl">sem precisar sair de casa</em>
                </h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  Atendemos clientes em todos os estados. WhatsApp, videochamada, envio digital de
                  documentos — você conduz tudo pelo celular.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Análise do caso por WhatsApp",
                    "Envio de documentos pelo celular",
                    "Acompanhamento em tempo real",
                    "Sem necessidade de deslocamento",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/65">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <WaveButton variant="wpp" href={WPP} target="_blank" rel="noopener">
                    <WhatsAppIcon size={16} /> Falar agora <ArrowRight size={14} />
                  </WaveButton>
                </div>
              </div>
            </motion.div>

            {/* Unidades presenciais */}
            <div className="flex flex-col gap-4">
              {[
                {
                  cidade: "Jaru — RO",
                  tipo: "Sede",
                  endereco: "Atendimento presencial com hora marcada",
                  horario: "Seg. a Sex. · 8h às 18h",
                  maps: "https://maps.google.com/?q=Jaru,RO",
                },
                {
                  cidade: "Alta Floresta D'Oeste — RO",
                  tipo: "Unidade",
                  endereco: "Atendimento presencial com hora marcada",
                  horario: "Seg. a Sex. · 8h às 18h",
                  maps: "https://maps.google.com/?q=Alta+Floresta+d%27Oeste,RO",
                },
                {
                  cidade: "3ª Unidade — RO",
                  tipo: "Unidade",
                  endereco: "Atendimento presencial com hora marcada",
                  horario: "Seg. a Sex. · 8h às 18h",
                  maps: "https://maps.google.com/?q=Rondonia,RO",
                },
              ].map((u, i) => (
                <motion.div
                  key={u.cidade}
                  className="flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[var(--navy-light)]">
                    <MapPin size={18} className="text-[var(--navy)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-base font-semibold text-[var(--navy)]">
                        {u.cidade}
                      </h3>
                      <span className="rounded-full bg-[var(--navy-light)] px-2 py-0.5 text-[11px] font-semibold text-[var(--navy)]">
                        {u.tipo}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{u.endereco}</p>
                    <div className="mt-2 flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <Clock size={12} /> {u.horario}
                      </span>
                      <a
                        href={u.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                      >
                        <ExternalLink size={11} /> Ver no Maps
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
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
        <FaqAccordion items={FAQ} />
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <div
            className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none"
            aria-hidden
          >
            G
          </div>
          <div className="relative">
            <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
              Pronto para garantir <em className="hl">seu benefício</em>?
            </h2>
            <p className="mt-4 text-white/65 max-w-xl mx-auto">
              Converse com um advogado especialista e tire todas as suas dúvidas. Sem compromisso.
            </p>
            <div className="mt-8 flex justify-center">
              <WaveButton variant="wpp" size="lg" href={WPP} target="_blank" rel="noopener">
                <WhatsAppIcon size={18} /> Garantir meu benefício <ArrowRight size={16} />
              </WaveButton>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
              <Phone size={12} /> {SITE.phone} · Atendimento online para todo o Brasil
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

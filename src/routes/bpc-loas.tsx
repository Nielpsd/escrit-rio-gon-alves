import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Clock, ExternalLink, Globe, MapPin, Phone, Shield, X } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const WPP =
  "https://api.whatsapp.com/send?phone=5569992621298&text=Olá!%20Gostaria%20de%20saber%20se%20tenho%20direito%20ao%20BPC%2FLOAS.";

const DEFICIENCIAS = [
  "Transtorno do Espectro Autista",
  "Deficiência Intelectual",
  "Deficiência Física",
  "Deficiência Visual",
  "Deficiência Auditiva",
  "Esquizofrenia",
  "Obesidade",
  "Alcoolismo",
  "Doenças Ortopédicas",
  "Deficiência Múltipla",
  "Paralisia Cerebral",
  "Doenças Degenerativas",
  "Síndrome de Down",
  "Deficiência Mental Grave",
  "HIV",
  "Câncer",
  "Doenças Neurológicas",
];

const PASSOS = [
  {
    num: "01",
    title: "Análise inicial",
    desc: "Avaliamos sua situação e verificamos se você tem direito ao benefício.",
  },
  {
    num: "02",
    title: "Montagem do processo",
    desc: "Damos entrada no BPC/LOAS e, se necessário, seguimos para a via judicial.",
  },
  {
    num: "03",
    title: "Orientação para a perícia",
    desc: "Preparamos tudo que você precisa saber para a perícia médica.",
  },
  {
    num: "04",
    title: "Você descansa, nós fazemos o resto",
    desc: "Cuidamos de tudo do início ao fim, garantindo os seus direitos.",
  },
];

const RISCOS = [
  "Erros nos documentos podem atrasar ou negar o benefício.",
  "Falta de conhecimento das regras dificulta atender às exigências do INSS.",
  "Um clique errado no Meu INSS ou uma resposta inadequada na perícia podem comprometer tudo.",
  "Maior chance de negativa — o processo é complexo e cheio de detalhes.",
];

const BENEFICIOS_ADV = [
  "Orientação completa em cada etapa, inclusive nas perícias.",
  "Mais chances de aprovação com documentação correta e estratégia adequada.",
  "Acompanhamento até a aprovação, inclusive na via judicial.",
  "Tranquilidade — você descansa enquanto o advogado cuida de tudo.",
];

const FAQ = [
  {
    q: "Qual é o valor do BPC/LOAS?",
    a: "O BPC/LOAS corresponde a 1 salário mínimo mensal. O valor é atualizado anualmente conforme o salário mínimo vigente.",
  },
  {
    q: "O BPC/LOAS exige contribuição ao INSS?",
    a: "Não. O BPC/LOAS é um benefício assistencial, não previdenciário. Não depende de contribuição prévia — mas exige comprovação de deficiência e de vulnerabilidade socioeconômica.",
  },
  {
    q: "O que é considerado baixa renda para o BPC/LOAS?",
    a: "A lei exige que a renda familiar per capita seja inferior a 1/4 do salário mínimo. Em alguns casos, o juiz pode considerar outras situações de vulnerabilidade.",
  },
  {
    q: "O BPC/LOAS tem restrição de idade?",
    a: "Não. O benefício pode ser solicitado por crianças, jovens, adultos e idosos — desde que comprovem deficiência e baixa renda. Para idosos sem deficiência, a idade mínima é 65 anos.",
  },
  {
    q: "O BPC/LOAS pode ser acumulado com outros benefícios?",
    a: "Em geral, não pode ser acumulado com benefícios previdenciários do INSS. Mas pode ser acumulado com bolsa família e outros programas assistenciais.",
  },
  {
    q: "Meu pedido foi negado. Ainda tenho chance?",
    a: "Sim. A negativa pode ser contestada com recurso administrativo (prazo de 30 dias) ou ação judicial. Com orientação especializada, as chances de reversão são significativas.",
  },
];

function Float({ children, delay = 0, amplitude = 12, duration = 3.5, className = "" }: {
  children: React.ReactNode; delay?: number; amplitude?: number; duration?: number; className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export const Route = createFileRoute("/bpc-loas")({
  head: () => ({
    meta: [
      { title: "BPC/LOAS — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Descubra se você tem direito ao BPC/LOAS. Benefício de 1 salário mínimo para pessoas com deficiência e idosos. Você só paga se for aprovado.",
      },
      { property: "og:title", content: "BPC/LOAS — Escritório Gonçalves" },
      {
        property: "og:description",
        content: "BPC/LOAS para pessoas com deficiência e idosos. Atendimento online para todo o Brasil.",
      },
    ],
  }),
  component: BpcLoasPage,
});

function BpcLoasPage() {
  const [isRO, setIsRO] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => { if (d.region_code === "RO") setIsRO(true); })
      .catch(() => {});
  }, []);

  return (
    <Layout>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* SVGs flutuantes decorativos */}
        <Float className="absolute top-14 left-[6%] pointer-events-none select-none opacity-40" delay={0} amplitude={16}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 12.6 8.2 14.5 10.5C16.8 12.4 23 12 23 12C23 12 16.8 11.6 14.5 13.5C12.6 15.8 12 22 12 22C12 22 11.4 15.8 9.5 13.5C7.2 11.6 1 12 1 12C1 12 7.2 12.4 9.5 10.5C11.4 8.2 12 2 12 2Z" fill="rgb(59 130 246)"/></svg>
        </Float>
        <Float className="absolute top-28 right-[8%] pointer-events-none select-none opacity-30" delay={0.8} amplitude={20}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="rgb(96 165 250)"/></svg>
        </Float>
        <Float className="absolute top-[45%] left-[2%] pointer-events-none select-none opacity-25" delay={1.4} amplitude={12}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 12.6 8.2 14.5 10.5C16.8 12.4 23 12 23 12C23 12 16.8 11.6 14.5 13.5C12.6 15.8 12 22 12 22C12 22 11.4 15.8 9.5 13.5C7.2 11.6 1 12 1 12C1 12 7.2 12.4 9.5 10.5C11.4 8.2 12 2 12 2Z" fill="rgb(37 99 235)"/></svg>
        </Float>
        <Float className="absolute bottom-24 left-[20%] pointer-events-none select-none opacity-35" delay={0.4} amplitude={18}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="rgb(147 197 253)"/></svg>
        </Float>
        <Float className="absolute top-[30%] right-[3%] pointer-events-none select-none opacity-20" delay={1.8} amplitude={14}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgb(59 130 246)"/></svg>
        </Float>
        <Float className="absolute bottom-16 right-[15%] pointer-events-none select-none opacity-30" delay={0.9} amplitude={10}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 12.6 8.2 14.5 10.5C16.8 12.4 23 12 23 12C23 12 16.8 11.6 14.5 13.5C12.6 15.8 12 22 12 22C12 22 11.4 15.8 9.5 13.5C7.2 11.6 1 12 1 12C1 12 7.2 12.4 9.5 10.5C11.4 8.2 12 2 12 2Z" fill="rgb(191 219 254)"/></svg>
        </Float>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 lg:pt-28 lg:pb-40">
          <div className="grid gap-16 lg:grid-cols-[1fr_460px] items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <AnimatePresence>
                {isRO && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5"
                  >
                    <MapPin size={13} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">
                      Atendimento presencial disponível em Rondônia
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                BPC/LOAS
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] text-[var(--navy)] text-balance">
                Autistas e deficientes podem receber{" "}
                <span className="text-blue-600">mais de R$ 1.620 por mês</span>
              </h1>
              <p className="mt-6 text-base text-[var(--text-muted)] leading-relaxed max-w-xl">
                Fale com um advogado especializado e descubra se você tem direito ao
                BPC/LOAS — sem precisar ter contribuído para o INSS.
              </p>
              <div className="mt-8">
                <WaveButton variant="wpp" size="lg" href={WPP} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> Verificar meu direito <ArrowRight size={16} />
                </WaveButton>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Sem contribuição ao INSS", "Todas as idades", "Só paga se aprovado"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700">
                    <Check size={12} className="text-blue-500" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Mockup familiar */}
            <div className="hidden lg:flex flex-col gap-4 select-none" aria-hidden>

              {/* Card de perfil — criança aprovada */}
              <Float delay={0.1} amplitude={7}>
                <motion.div
                  className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--shadow-md)] p-6"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-14 w-14 rounded-2xl bg-blue-50 grid place-items-center text-3xl flex-shrink-0">
                      🧒
                    </div>
                    <div>
                      <p className="font-display text-base font-bold text-[var(--navy)]">Pedro, 7 anos</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">Transtorno do Espectro Autista</p>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Aprovado
                    </span>
                  </div>

                  <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-1">Benefício concedido</p>
                    <p className="font-display text-2xl font-bold text-blue-600">R$ 1.620<span className="text-sm font-normal text-blue-400">/mês</span></p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">BPC/LOAS · INSS · Vigência contínua</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Check size={13} className="text-blue-500 flex-shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">Sem contribuição prévia ao INSS</p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Check size={13} className="text-blue-500 flex-shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">Pagamento realizado após aprovação</p>
                  </div>
                </motion.div>
              </Float>

              {/* Bolha de mensagem — advogado */}
              <Float delay={0.6} amplitude={9}>
                <motion.div
                  className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--shadow-sm)] p-4"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-blue-600 grid place-items-center text-sm font-bold text-white flex-shrink-0">
                      R
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <p className="text-xs font-bold text-[var(--navy)]">Dr. Renan Gonçalves</p>
                        <span className="text-[10px] text-[var(--text-muted)]">agora</span>
                      </div>
                      <div className="rounded-xl rounded-tl-none bg-blue-50 px-3.5 py-2.5">
                        <p className="text-sm text-[var(--navy)] leading-relaxed">
                          Boa notícia! O BPC/LOAS do Pedro foi aprovado. O primeiro pagamento entra no próximo mês. 🎉
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Float>

            </div>
          </div>
        </div>

        {/* Onda → azul */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 56L48 46.7C96 37.3 192 18.7 288 14C384 9.3 480 18.7 576 25.7C672 32.7 768 37.3 864 37.3C960 37.3 1056 32.7 1152 28C1248 23.3 1344 18.7 1392 16.3L1440 14V56H1392C1344 56 1248 56 1152 56C1056 56 960 56 864 56C768 56 672 56 576 56C480 56 384 56 288 56C192 56 96 56 48 56H0Z" fill="rgb(37,99,235)"/>
          </svg>
        </div>
      </section>

      {/* ── QUEM TEM DIREITO ─────────────────────────────── */}
      <section className="on-navy bg-blue-600 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 items-start">
            <div>
              <Eyebrow className="text-white/70 border-white/20 bg-white/10">Requisitos</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Quem tem direito ao BPC/LOAS?
              </h2>
              <p className="mt-5 text-base text-white/65 leading-relaxed">
                Um benefício assistencial de 1 salário mínimo mensal, sem precisar de contribuição
                prévia ao INSS. Para pessoas com deficiência ou idosos em situação de vulnerabilidade.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <motion.div
                  className="flex gap-5 rounded-2xl border border-white/20 bg-white/10 p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center flex-shrink-0">
                    <Check size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">Deficiência comprovada</h3>
                    <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                      É necessário laudo médico. Caso você ainda não tenha, te ajudamos a conseguir.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-5 rounded-2xl border border-white/20 bg-white/10 p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center flex-shrink-0">
                    <Shield size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">Baixa renda</h3>
                    <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                      Renda familiar per capita inferior a 1/4 do salário mínimo. Em alguns casos o
                      juiz pode considerar outras situações de vulnerabilidade.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Deficiências */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-bold text-white/50 mb-5 uppercase tracking-widest">
                Deficiências que podem garantir o BPC/LOAS
              </p>
              <div className="flex flex-wrap gap-2.5">
                {DEFICIENCIAS.map((d, i) => (
                  <motion.span
                    key={d}
                    className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: i * 0.04 }}
                  >
                    <Check size={13} className="text-white/60 flex-shrink-0" />
                    {d}
                  </motion.span>
                ))}
                <span className="flex items-center gap-1.5 rounded-xl border border-dashed border-white/20 px-3.5 py-2 text-sm text-white/40">
                  E muitas outras
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA TODAS AS IDADES ─────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <Eyebrow>Sem restrição de idade</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] text-balance">
                O BPC/LOAS é para <em className="hl">todas as idades</em>
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Crianças, jovens, adultos e idosos podem solicitar o benefício. Não deixe que
                dúvidas sobre a idade impeçam você ou sua família de buscar esse direito.
              </p>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                Para idosos sem deficiência, a idade mínima é de 65 anos. Para pessoas com
                deficiência, não há idade mínima — inclusive crianças têm direito.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "👶", label: "Bebês e Crianças", sub: "Desde o nascimento" },
                { emoji: "🧒", label: "Jovens", sub: "Qualquer idade" },
                { emoji: "👨", label: "Adultos", sub: "Qualquer idade" },
                { emoji: "👴", label: "Idosos", sub: "A partir de 65 anos" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-[var(--border)] bg-white p-5 text-center shadow-[var(--shadow-sm)]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.09 }}
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}
                >
                  <span className="text-4xl block mb-2">{item.emoji}</span>
                  <p className="font-display text-sm font-bold text-[var(--navy)]">{item.label}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PASSO A PASSO ────────────────────────────────── */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <Eyebrow>Como atuamos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] text-balance">
              Passo a passo do <em className="hl">atendimento</em>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((p, i) => (
              <motion.div
                key={p.title}
                className="relative rounded-2xl border border-[var(--border)] bg-white p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                whileHover={{ y: -5, transition: { duration: 0.18 } }}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-white font-display text-sm font-bold shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="absolute top-5 right-5 font-display text-5xl font-black text-black/[0.06] leading-none select-none">
                  {p.num}
                </span>
                <h3 className="font-display text-sm font-bold text-[var(--navy)] leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE ADVOGADO ─────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Por que contratar um advogado</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] text-balance">
              Sozinho ou com <em className="hl">orientação especializada</em>?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border border-red-100 bg-red-50 p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-base font-bold text-red-700 mb-6">Os riscos de tentar sozinho</h3>
              <ul className="space-y-3.5">
                {RISCOS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-red-100">
                      <X size={11} className="text-red-500" />
                    </span>
                    <span className="text-sm text-[var(--text)] leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-blue-100 bg-blue-50 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-display text-base font-bold text-blue-700 mb-6">Com um advogado ao seu lado</h3>
              <ul className="space-y-3.5">
                {BENEFICIOS_ADV.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-blue-100">
                      <Shield size={11} className="text-blue-600" />
                    </span>
                    <span className="text-sm text-[var(--text)] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PAGUE SOMENTE SE APROVADO ────────────────────── */}
      <section className="on-navy bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-10 lg:p-14">
            <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-blue-500/30" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] items-center">
              <div className="text-white">
                <Eyebrow className="text-white/70 border-white/20 bg-white/10">Sem risco financeiro</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
                  Você só paga se for aprovado.
                </h2>
                <p className="mt-4 text-white/65 max-w-xl leading-relaxed">
                  Nosso honorário é cobrado somente se o seu BPC/LOAS for aprovado. Se não houver
                  sucesso, você não paga nada. Total dedicação, zero risco para você.
                </p>
              </div>
              <div className="flex-shrink-0">
                <WaveButton variant="wpp" size="lg" href={WPP} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> Verificar meu direito <ArrowRight size={16} />
                </WaveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COBERTURA + UNIDADES ─────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Onde atuamos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)]">
              Online para todo o Brasil.<br />
              <em className="hl">Presencial em Rondônia.</em>
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Nosso serviço é totalmente online — qualquer pessoa, em qualquer estado, pode ser
              atendida sem sair de casa. Para quem prefere presencial, temos 3 unidades em Rondônia.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-blue-600 p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-8 -bottom-8 h-48 w-48 rounded-full bg-blue-500/30" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white/75 mb-6">
                  <Globe size={13} /> 100% Online
                </span>
                <h3 className="font-display text-xl font-bold text-white leading-snug">
                  Todo o Brasil, sem sair de casa
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Análise do caso por WhatsApp",
                    "Envio de documentos pelo celular",
                    "Acompanhamento em tempo real",
                    "Sem necessidade de deslocamento",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                      <Check size={14} className="text-white/50 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <WaveButton variant="wpp" href={WPP} target="_blank" rel="noopener">
                    <WhatsAppIcon size={16} /> Falar agora <ArrowRight size={14} />
                  </WaveButton>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              {[
                { cidade: "Jaru — RO", tipo: "Sede", endereco: "Atendimento presencial com hora marcada", horario: "Seg. a Sex. · 8h às 18h", maps: "https://maps.google.com/?q=Jaru,RO" },
                { cidade: "Alta Floresta D'Oeste — RO", tipo: "Unidade", endereco: "Atendimento presencial com hora marcada", horario: "Seg. a Sex. · 8h às 18h", maps: "https://maps.google.com/?q=Alta+Floresta+d%27Oeste,RO" },
                { cidade: "3ª Unidade — RO", tipo: "Unidade", endereco: "Atendimento presencial com hora marcada", horario: "Seg. a Sex. · 8h às 18h", maps: "https://maps.google.com/?q=Rondonia,RO" },
              ].map((u, i) => (
                <motion.div
                  key={u.cidade}
                  className="flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-blue-50">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-base font-semibold text-[var(--navy)]">{u.cidade}</h3>
                      <span className="rounded-full bg-blue-50 border border-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-700">{u.tipo}</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{u.endereco}</p>
                    <div className="mt-2 flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <Clock size={12} /> {u.horario}
                      </span>
                      <a href={u.maps} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
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

      {/* ── VÍDEO ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>Assista</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)] text-balance">
              Tudo sobre o <em className="hl">BPC/LOAS</em> explicado pelo Dr. Renan
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Dr. Renan Gonçalves, ex-servidor e gerente do INSS, explica quem tem direito
              ao BPC/LOAS e como garantir o benefício.
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
              src="https://www.youtube.com/embed/kQiEiKNlYIo"
              title="Tudo sobre o BPC/LOAS — Dr. Renan Gonçalves"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── DR. RENAN ────────────────────────────────────── */}
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
                <img src="/bio/10.webp" alt="Dr. Renan Gonçalves" className="h-full w-full object-cover object-top" />
              </div>
              <motion.div
                className="absolute -bottom-5 -left-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Ex-servidor do INSS · @renan.inss
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>Quem vai cuidar do seu caso</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] text-balance">
                Dr. Renan <em className="hl">Gonçalves</em>
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Com mais de 5 anos de experiência como servidor e gerente do INSS, o Dr. Renan
                analisou milhares de benefícios e conhece os processos previdenciários por dentro.
              </p>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                Hoje atua como advogado especializado — com alto índice de aprovação em casos de
                clientes em todos os estados do Brasil. Conta com uma equipe altamente especializada
                para garantir os melhores resultados.
              </p>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                Referência nas redes sociais com milhares de seguidores no{" "}
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800">
                  @renan.inss
                </a>{" "}
                e mentor de advogados previdenciários em todo o país.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-10">
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] text-balance">
              Perguntas que a gente mais <em className="hl">recebe</em>
            </h2>
          </div>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="on-navy relative overflow-hidden rounded-3xl bg-blue-600 p-10 lg:p-16">
            <div
              className="absolute -right-16 -top-16 font-display text-[380px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
              aria-hidden
            >
              B
            </div>
            <Float className="absolute top-6 left-12 pointer-events-none select-none opacity-20" delay={0.3} amplitude={14}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 12.6 8.2 14.5 10.5C16.8 12.4 23 12 23 12C23 12 16.8 11.6 14.5 13.5C12.6 15.8 12 22 12 22C12 22 11.4 15.8 9.5 13.5C7.2 11.6 1 12 1 12C1 12 7.2 12.4 9.5 10.5C11.4 8.2 12 2 12 2Z" fill="white"/></svg>
            </Float>
            <Float className="absolute bottom-8 left-[30%] pointer-events-none select-none opacity-15" delay={1.1} amplitude={18}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="white"/></svg>
            </Float>
            <Float className="absolute top-10 left-[45%] pointer-events-none select-none opacity-10" delay={0.7} amplitude={11}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white"/></svg>
            </Float>

            <div className="relative grid gap-12 lg:grid-cols-[1fr_340px] items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <Eyebrow>Fale com um especialista</Eyebrow>
                <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-white">
                  Descubra agora se você tem direito ao BPC/LOAS
                </h2>
                <p className="mt-5 text-base text-white/65 leading-relaxed max-w-lg">
                  Atendimento sem compromisso. Um advogado especialista analisa seu caso
                  e orienta sobre os próximos passos — sem custo inicial.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <WaveButton variant="wpp" size="lg" href={WPP} target="_blank" rel="noopener">
                    <WhatsAppIcon size={18} /> Verificar meu direito <ArrowRight size={16} />
                  </WaveButton>
                </div>
                <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/40">
                  <Phone size={12} /> {SITE.phone} · Atendimento online para todo o Brasil
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="rounded-2xl bg-white/10 border border-white/15 p-7 text-white"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">O que você recebe</p>
                <ul className="space-y-4">
                  {[
                    "1 salário mínimo por mês (R$ 1.620)",
                    "Sem contribuição prévia ao INSS",
                    "Todas as idades — inclusive crianças",
                    "Você só paga se for aprovado",
                    "Atendimento online para todo o Brasil",
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-white/15">
                        <Check size={13} className="text-white" />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

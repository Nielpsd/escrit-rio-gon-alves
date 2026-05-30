import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star, Shield, FileCheck, Folder, Scale, CheckSquare, FileText, Pencil } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/laudo-certo")({
  head: () => ({
    meta: [
      { title: "Laudo Certo — Laudos médicos jurídicos para o INSS e Justiça" },
      { name: "description", content: "Laudos jurídicos prontos para o INSS e Justiça, com linguagem adequada e emissão 100% online via WhatsApp." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400;1,9..40,700&display=swap" },
    ],
  }),
  component: LaudoCertoPage,
});

const F   = "'DM Sans', system-ui, sans-serif";
const BG  = "#f5fdff";
const DARK = "#1a2238";
const WA   = SITE.whatsapp;

const up = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.55, delay: d },
});

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item    = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

/* ── helpers ── */
const GradText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent ${className}`}>{children}</span>
);

function WaveBottom({ fill = BG }: { fill?: string }) {
  return (
    <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden
      className="absolute bottom-0 left-0 w-full h-[64px] z-10 pointer-events-none">
      <path d="M0,64 L0,32 C360,0 1080,0 1440,32 L1440,64 Z" fill={fill} />
    </svg>
  );
}

function WaveTop({ fill = BG }: { fill?: string }) {
  return (
    <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden
      className="absolute top-0 left-0 w-full h-[64px] z-10 pointer-events-none">
      <path d="M0,0 L0,32 C360,64 1080,64 1440,32 L1440,0 Z" fill={fill} />
    </svg>
  );
}

function Btn({ children, outline = false, white = false, href = WA, sm = false }: {
  children: React.ReactNode; outline?: boolean; white?: boolean; href?: string; sm?: boolean;
}) {
  const base = `inline-flex items-center justify-center font-bold rounded-full transition-all cursor-pointer ${sm ? "px-7 py-3 text-[15px]" : "px-10 py-4 text-[17px]"}`;
  const cls = white
    ? `${base} bg-white`
    : outline
    ? `${base} border-2 border-[#5389ff] text-[#5389ff]`
    : `${base} bg-gradient-to-r from-[#5389ff] to-[#295ccc] text-white shadow-[0_4px_24px_rgba(83,137,255,0.35)]`;
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
      className={cls} style={{ fontFamily: F }}>
      {white ? <GradText>{children}</GradText> : children}
    </motion.a>
  );
}

const PAINS = [
  "Documento médico genérico, sem utilidade processual",
  "Laudo sem CID ou termos jurídicos relevantes",
  "Falta de comprovação da incapacidade ou nexo causal",
  "Cliente frustrado por indeferimento do INSS",
  "Perda de tempo com retrabalho ou nova perícia",
];

const FAQ_ITEMS = [
  { q: "Qual a diferença entre esse laudo e um atestado comum?", a: "O laudo da Laudo Certo é produzido com linguagem jurídica, incluindo CID, nexo causal e terminologia adequada para uso processual — o que um atestado simples geralmente não tem." },
  { q: "Preciso fazer uma consulta médica?", a: "Não necessariamente. O médico analisa seus documentos e, se necessário, realiza uma videochamada para avaliação complementar." },
  { q: "Quais documentos preciso enviar?", a: "Exames laboratoriais, relatórios médicos e quaisquer comprovantes da condição de saúde. A equipe avalia e informa se há algo adicional necessário." },
  { q: "Esse laudo serve para qualquer tipo de benefício?", a: "Sim. Os laudos são adaptados para benefícios por incapacidade, auxílio-doença, aposentadoria por invalidez, ações judiciais e concursos públicos." },
  { q: "Em quanto tempo o laudo fica pronto?", a: "Geralmente entre 3 a 7 dias úteis após o recebimento e análise dos documentos, dependendo da complexidade do caso." },
];

/* ── página ── */
function LaudoCertoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative overflow-x-hidden" style={{ fontFamily: F, backgroundColor: BG }}>

      {/* ── HEADER ── */}
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1280px] px-4">
        <div className="flex items-center justify-between h-[56px] px-6 rounded-full border border-white/60
          backdrop-blur-md bg-white/85 shadow-sm">
          <a href="/laudo-certo" className="flex items-center gap-3 flex-shrink-0">
            <img src="/laudo-certo/icon.webp" alt="ícone" className="h-8 w-auto" />
            <img src="/laudo-certo/logo-text.webp" alt="Laudo Certo" className="h-[18px] w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium" style={{ color: DARK }}>
            <a href="#inicio"      className="font-bold hover:text-[#5389ff] transition-colors">Início</a>
            <a href="#como"        className="hover:text-[#5389ff] transition-colors">Como Funciona</a>
            <a href="#quem-somos"  className="hover:text-[#5389ff] transition-colors">Quem está por trás</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-white font-bold italic text-[13px]
              bg-gradient-to-r from-[#5389ff] to-[#295ccc] shadow-[0_2px_12px_rgba(83,137,255,0.4)]"
            style={{ fontFamily: F }}>
            Falar com especialista
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-[82vh] flex items-center
        bg-gradient-to-br from-[#5389ff] via-[#3e72f0] to-[#295ccc]
        pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[900px] h-[500px] rounded-full bg-white/8 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 w-full flex flex-col items-center text-center gap-7 z-10">
          <motion.h1 {...up(0)}
            className="text-[38px] md:text-[64px] lg:text-[76px] font-bold leading-[1.1] text-white max-w-[860px]"
            style={{ fontFamily: F }}>
            O laudo certo para o seu cliente conquistar o benefício com{" "}
            <em className="not-italic font-bold italic"
              style={{ background: "linear-gradient(90deg,#b8d0ff,#dce9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              segurança
            </em>
          </motion.h1>

          <motion.p {...up(0.1)}
            className="text-white/85 text-[17px] md:text-[20px] font-light max-w-[700px] leading-relaxed"
            style={{ fontFamily: F }}>
            Obtenha{" "}
            <strong className="font-bold italic">laudos jurídicos prontos para o INSS e Justiça</strong>
            , com linguagem adequada e emissão 100% online via WhatsApp
          </motion.p>

          <motion.div {...up(0.18)} className="flex flex-wrap gap-3 items-center justify-center">
            {[
              { Icon: Star,      label: "Coordenação do Dr. Renan Gonçalves" },
              { Icon: Shield,    label: "Médico perito autorizado" },
              { Icon: FileCheck, label: "Análise prévia dos documentos" },
            ].map(({ Icon, label }) => (
              <div key={label}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/50
                  backdrop-blur-sm text-white text-[14px] font-light"
                style={{ fontFamily: F }}>
                <Icon size={16} className="flex-shrink-0" />
                {label}
              </div>
            ))}
          </motion.div>

          <motion.div {...up(0.25)}>
            <Btn white>Falar com um especialista via WhatsApp</Btn>
          </motion.div>
        </div>

        <WaveBottom />
      </section>

      {/* ── S02 COMO FUNCIONA ── */}
      <section id="como" className="relative py-20 md:py-28 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-14 items-center">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center leading-[1.15]"
            style={{ fontFamily: F, color: DARK }}>
            Solicitar seu laudo é simples, direto e{" "}
            <strong className="font-bold italic">
              <GradText>100% digital</GradText>
            </strong>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-50px" }}>
            {[
              { n: "01", title: "Envio dos documentos",       desc: "Exames, relatórios médicos e outros documentos em PDF via WhatsApp" },
              { n: "02", title: "Avaliação médica criteriosa", desc: "O médico analisa tudo. Se necessário, faz videochamada para avaliação" },
              { n: "03", title: "Emissão do laudo sob medida", desc: "Com os termos corretos para o caso, sempre dentro das normas do CFM" },
            ].map((s) => (
              <motion.div key={s.n} variants={item}
                className="relative border-2 border-[#5389ff]/70 rounded-[22px] pt-14 pb-8 px-6
                  flex flex-col items-center text-center gap-3 bg-white shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full
                  bg-gradient-to-br from-[#5389ff] to-[#295ccc] flex items-center justify-center
                  shadow-[0_4px_18px_rgba(83,137,255,0.45)]">
                  <span className="text-white font-bold text-[18px]">{s.n}</span>
                </div>
                <p className="font-bold text-[18px] leading-snug" style={{ color: DARK, fontFamily: F }}>{s.title}</p>
                <p className="font-light text-[15px] leading-relaxed text-[rgba(26,34,56,0.55)]" style={{ fontFamily: F }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p {...up(0.15)} className="text-[rgba(26,34,56,0.5)] text-[14px] text-center" style={{ fontFamily: F }}>
            <strong className="font-bold">Observação:</strong>{" "}
            o serviço é exclusivamente para emissão de laudos<br />
            Caso não existam documentos médicos mínimos, o laudo pode não ser emitido
          </motion.p>

          <motion.div {...up(0.2)}>
            <Btn>Iniciar análise do caso via WhatsApp</Btn>
          </motion.div>
        </div>
      </section>

      {/* ── S03 PARA ADVOGADOS ── */}
      <section className="relative py-16 md:py-24 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12 items-center">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center leading-[1.15]"
            style={{ fontFamily: F, color: DARK }}>
            Se você é advogado, esse laudo foi<br className="hidden md:block" /> feito pra{" "}
            <strong className="font-bold italic"><GradText>caber na sua tese</GradText></strong>
          </motion.h2>

          {/* Box azul — grid 3×2 */}
          <motion.div {...up(0.1)}
            className="w-full rounded-[32px] bg-gradient-to-r from-[#5389ff] to-[#295ccc]
              shadow-[0_8px_40px_rgba(83,137,255,0.3)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {/* Coluna esquerda — card branco "Você já passou por isso" abrangendo 2 linhas */}
              <div className="bg-white/95 p-8 flex items-center justify-start md:row-span-2 min-h-[120px]">
                <p className="font-bold text-[24px] leading-snug" style={{ color: DARK, fontFamily: F }}>
                  Você já passou<br />por isso:
                </p>
              </div>

              {/* Linha 1: dores 1 e 2 */}
              {PAINS.slice(0, 2).map((pain) => (
                <div key={pain}
                  className="flex gap-3 items-start px-6 py-6 border-b border-white/20">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-[13px]">✕</span>
                  </div>
                  <p className="text-white font-bold text-[16px] leading-snug" style={{ fontFamily: F }}>{pain}</p>
                </div>
              ))}

              {/* Linha 2: dores 3, 4 e 5 */}
              {PAINS.slice(2).map((pain) => (
                <div key={pain}
                  className="flex gap-3 items-start px-6 py-6 border-b md:border-b-0 border-white/20 last:border-0">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-[13px]">✕</span>
                  </div>
                  <p className="text-white font-bold text-[16px] leading-snug" style={{ fontFamily: F }}>{pain}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p {...up(0.2)} className="text-[rgba(26,34,56,0.5)] text-[15px] text-center" style={{ fontFamily: F }}>
            ⚠️ Na Laudo Certo, o laudo não é apenas médico. É jurídico
          </motion.p>
        </div>
      </section>

      {/* ── S04 O QUE VOCÊ VAI RECEBER ── */}
      <section className="relative py-16 md:py-24 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12 items-center">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center"
            style={{ fontFamily: F, color: DARK }}>
            O que você{" "}
            <strong className="font-bold italic"><GradText>vai receber:</GradText></strong>
          </motion.h2>

          <motion.div
            className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-center w-full"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-50px" }}>
            {/* Cards escuros 1 e 2 */}
            {([
              { icon: FileText,   label: "Termos certos pro seu tipo de ação" },
              { icon: Pencil,     label: "Redação clara e pronta pra anexar" },
            ] as { icon: React.ElementType; label: string }[]).map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={item}
                className="rounded-[18px] px-5 py-9 flex flex-col gap-3 items-center text-center
                  w-full lg:w-[200px] flex-shrink-0 shadow-md"
                style={{ background: "rgba(26,34,56,0.55)" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Icon size={48} className="text-white/80" strokeWidth={1.5} />
                <p className="text-white font-bold italic text-[16px] leading-snug" style={{ fontFamily: F }}>{label}</p>
              </motion.div>
            ))}

            {/* Card azul central em destaque */}
            <motion.div variants={item}
              className="flex-shrink-0"
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}>
              <div className="border-[1.5px] border-[rgba(26,34,56,0.15)] rounded-[24px] p-2.5">
                <div className="border-[1.5px] border-[rgba(26,34,56,0.1)] rounded-[20px] p-2.5">
                  <div className="bg-gradient-to-br from-[#5389ff] to-[#295ccc] rounded-[16px]
                    px-6 py-10 flex flex-col gap-4 items-center text-center w-[220px]
                    shadow-[0_8px_32px_rgba(83,137,255,0.45)]">
                    <Folder size={60} className="text-white" strokeWidth={1.5} />
                    <p className="text-white font-bold italic text-[19px] leading-snug" style={{ fontFamily: F }}>
                      Serve para benefícios, ações e concursos
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cards escuros 3 e 4 */}
            {([
              { icon: Scale,        label: "Alinhamento com INSS e Justiça" },
              { icon: CheckSquare,  label: "Validação por médico e advogado" },
            ] as { icon: React.ElementType; label: string }[]).map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={item}
                className="rounded-[18px] px-5 py-9 flex flex-col gap-3 items-center text-center
                  w-full lg:w-[200px] flex-shrink-0 shadow-md"
                style={{ background: "rgba(26,34,56,0.55)" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Icon size={48} className="text-white/80" strokeWidth={1.5} />
                <p className="text-white font-bold italic text-[16px] leading-snug" style={{ fontFamily: F }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...up(0.2)} className="flex flex-col items-center gap-3">
            <p className="text-[rgba(26,34,56,0.5)] text-[14px]" style={{ fontFamily: F }}>
              Você faz o jurídico. A gente entrega o laudo ideal
            </p>
            <Btn>Quero laudo adaptado à minha tese</Btn>
          </motion.div>
        </div>
      </section>

      {/* ── S05 TAMBÉM PARA LEIGOS — card arredondado dentro da página ── */}
      <section className="relative py-16 md:py-24 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px]">
          <motion.p {...up(0)}
            className="text-[28px] md:text-[44px] font-light text-center mb-10 leading-snug"
            style={{ fontFamily: F, color: DARK }}>
            Você não é advogado, mas{" "}
            <strong className="font-bold italic"><GradText>precisa de um laudo?</GradText></strong>
          </motion.p>

          <motion.div
            {...up(0.08)}
            className="relative rounded-[24px] bg-gradient-to-r from-[#5389ff] to-[#295ccc]
              overflow-hidden shadow-[0_12px_50px_rgba(83,137,255,0.35)]">
            {/* Glow interno */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full
              bg-white/10 blur-[100px] pointer-events-none" aria-hidden />

            <div className="relative flex flex-col lg:flex-row gap-10 items-center px-10 md:px-14 py-12 lg:py-10 z-10">
              {/* Copy */}
              <div className="flex flex-col gap-6 flex-1 min-w-0">
                <div>
                  <p className="text-[#f5fdff]/75 text-[26px] font-light leading-tight" style={{ fontFamily: F }}>A gente também</p>
                  <p className="text-white text-[26px] md:text-[34px] font-bold italic leading-tight" style={{ fontFamily: F }}>pode te ajudar...</p>
                </div>
                <p className="text-white/85 text-[16px] font-light leading-relaxed max-w-[460px]" style={{ fontFamily: F }}>
                  Segurados e trabalhadores{" "}
                  <strong className="font-bold italic">também podem solicitar laudos,</strong>{" "}
                  seja para dar entrada no INSS ou comprovar alguma condição de saúde em concursos públicos.
                </p>
                <p className="text-white/60 text-[13px] leading-relaxed max-w-[460px]" style={{ fontFamily: F }}>
                  Importante: o serviço é só para emissão de laudos e exige documentos médicos prévios.
                </p>
                <Btn white sm>Solicitar avaliação para emissão do laudo</Btn>
              </div>

              {/* Mockups */}
              <div className="relative flex-shrink-0 w-full lg:w-[520px] flex items-end justify-center">
                <img src="/laudo-certo/macbook.webp" alt="Laudo Certo no MacBook" loading="lazy"
                  className="w-full max-w-[480px] h-auto rounded-lg
                    shadow-[0_20px_60px_rgba(0,0,0,0.35)] relative z-10" />
                <div className="absolute left-4 bottom-0 z-20 -rotate-6">
                  <img src="/laudo-certo/iphone.webp" alt="Laudo Certo no iPhone" loading="lazy"
                    className="w-[90px] md:w-[110px] h-auto rounded-xl
                      shadow-[0_16px_36px_rgba(0,0,0,0.45)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S07 QUEM ESTÁ POR TRÁS ── */}
      <section id="quem-somos" className="relative py-16 md:py-24 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-12 items-center">
          <motion.div className="flex-shrink-0 w-full lg:w-[420px]" {...up(0)}>
            <img src="/guia/renan03.webp" alt="Dr. Renan Gonçalves" loading="lazy"
              className="w-full h-auto rounded-[20px] shadow-[0_10px_50px_rgba(83,137,255,0.18)]" />
          </motion.div>

          <motion.div className="flex flex-col gap-6 flex-1 min-w-0" {...up(0.1)}>
            <div style={{ fontFamily: F }}>
              <p className="text-[38px] md:text-[48px] font-light leading-snug" style={{ color: DARK }}>
                Quem está por trás
              </p>
              <p className="text-[38px] md:text-[48px] leading-snug" style={{ fontFamily: F }}>
                <span className="font-light" style={{ color: DARK }}>da </span>
                <strong className="font-bold italic"><GradText>Laudo Certo</GradText></strong>
              </p>
            </div>

            <p className="text-[17px] font-light leading-relaxed" style={{ color: "rgba(26,34,56,0.65)", fontFamily: F }}>
              Sou o <strong className="font-bold italic" style={{ color: DARK }}>Dr. Renan Gonçalves,</strong>{" "}
              advogado especialista em benefícios e ex-gerente do INSS.
              Criei a Laudo Certo porque sei como um bom laudo pode destravar um processo.
            </p>

            <p className="text-[17px] font-light leading-relaxed" style={{ color: "rgba(26,34,56,0.65)", fontFamily: F }}>
              Os laudos são feitos por médicos peritos,{" "}
              <strong className="font-bold italic" style={{ color: DARK }}>
                seguindo as normas do CFM e com linguagem adaptada ao INSS e à Justiça.
              </strong>{" "}
              Já são utilizados por advogados de todo o Brasil, inclusive no meu próprio escritório.
            </p>

            <Btn>Solicitar meu laudo</Btn>
          </motion.div>
        </div>
      </section>

      {/* ── S08 DEPOIMENTOS ── */}
      <section className="relative py-16 md:py-24 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12 items-center">
          <motion.h2 {...up(0)}
            className="text-[38px] md:text-[60px] font-light text-center leading-snug"
            style={{ fontFamily: F, color: DARK }}>
            Laudos que{" "}
            <strong className="font-bold italic underline decoration-[#5389ff] decoration-[3px]">
              <GradText>resolvem</GradText>
            </strong>
            {" "}na prática!
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-50px" }}>
            {[
              { text: "Antes, era uma luta explicar pro cliente que o laudo que ele trouxe não servia. Com a Laudo Certo, eu recebo o documento já no formato ideal pra anexar. Economiza tempo e aumenta a chance de deferimento.", name: "Dr. Rafael Oliveira",  role: "Advogado Previdenciarista",       img: "/laudo-certo/dep1.webp" },
              { text: "A gente usa direto nos nossos casos. O médico já entende o que precisa constar no laudo, o formato vem redondo. É quase como se fosse feito sob medida pra nossa petição.",                              name: "Dra. Camila Braga",     role: "Escritório Braga & Associados", img: "/laudo-certo/dep2.webp" },
              { text: "Sou advogado iniciante e sempre tive dificuldade com a parte médica dos processos. Esse serviço me dá confiança pra entrar com a ação sabendo que o laudo sustenta minha tese.",                         name: "Henrique Lacerda",     role: "Advogado autônomo",             img: "/laudo-certo/dep3.webp" },
            ].map((t) => (
              <motion.div key={t.name} variants={item}
                className="bg-white border-2 border-[rgba(26,34,56,0.1)] rounded-[20px] p-8
                  flex flex-col gap-5 shadow-md"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <svg width="22" height="18" viewBox="0 0 30 24" fill="none" aria-hidden>
                  <path d="M0 24V14.4C0 10.4 1.2 7.07 3.6 4.4 6 1.73 9.2 0.13 13.2 0v4C10.8 4.4 8.93 5.33 7.6 6.8 6.4 8.27 5.8 10 5.8 12h5v12H0Zm13.8 0V14.4c0-4 1.2-7.33 3.6-10C19.8 1.73 23 0.13 27 0v4c-2.4 0.4-4.27 1.33-5.6 2.8-1.2 1.47-1.8 3.2-1.8 5.2h5v12h-10.8Z" fill="#5389ff" />
                </svg>
                <p className="text-[rgba(26,34,56,0.55)] text-[14px] italic font-light leading-relaxed flex-1" style={{ fontFamily: F }}>{t.text}</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} loading="lazy"
                    className="w-11 h-11 rounded-full object-cover object-top border-2 border-[#5389ff]" />
                  <div>
                    <p className="font-bold italic text-[15px]" style={{ color: DARK, fontFamily: F }}>{t.name}</p>
                    <p className="font-light text-[12px] text-[rgba(26,34,56,0.5)]" style={{ fontFamily: F }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...up(0.2)} className="flex flex-col items-center gap-2">
            <Btn>Peça o seu laudo agora mesmo pelo WhatsApp</Btn>
            <p className="text-[rgba(26,34,56,0.5)] text-[13px]" style={{ fontFamily: F }}>
              Fácil, rápido e com retorno real no processo
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── S09 FAQ + FOOTER — seção azul com onda no topo ── */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-br from-[#5389ff] to-[#295ccc] overflow-hidden">
        <WaveTop />

        <div className="relative mx-auto max-w-[1280px] z-10 flex flex-col lg:flex-row gap-14">
          {/* Esquerda */}
          <motion.div className="flex flex-col gap-5 lg:w-[380px] flex-shrink-0" {...up(0)}>
            <h2 className="text-white font-semibold text-[28px] leading-snug" style={{ fontFamily: F }}>
              Perguntas Frequentes
            </h2>
            <p className="text-white/75 text-[15px] font-light leading-relaxed" style={{ fontFamily: F }}>
              Caso você tenha alguma dúvida, entre em contato com a nossa equipe através do WhatsApp!
              Teremos prazer em responder e tirar todas as suas dúvidas.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white rounded-full px-8 py-3.5
                font-semibold text-[15px] w-fit shadow-md transition-transform hover:scale-105"
              style={{ fontFamily: F }}>
              <GradText>Falar com o suporte</GradText>
            </a>
          </motion.div>

          {/* FAQ accordion */}
          <motion.div className="flex-1 min-w-0 flex flex-col" {...up(0.1)}>
            {FAQ_ITEMS.map((faq, i) => (
              <button key={faq.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left border-b border-white/20 py-4" style={{ fontFamily: F }}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white text-[15px] leading-snug">{faq.q}</span>
                  <ChevronDown size={18}
                    className={`text-white/70 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </div>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-white/75 text-[14px] leading-relaxed pr-6">
                    {faq.a}
                  </motion.p>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="relative mx-auto max-w-[1280px] mt-16 pt-5 border-t border-white/20 z-10">
          <p className="text-center text-white/50 text-[13px]" style={{ fontFamily: F }}>
            Página de vendas produzida por <strong className="text-white/70">Niel Hart.</strong>
          </p>
        </div>
      </section>

    </div>
  );
}

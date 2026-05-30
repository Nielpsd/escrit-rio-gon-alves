import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star, Shield, FileCheck, Folder, Scale, CheckSquare, FileText, Pencil } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/laudo-certo")({
  head: () => ({
    meta: [
      { title: "Laudo Certo — Laudos médicos jurídicos para o INSS e Justiça" },
      { name: "description", content: "Obtenha laudos jurídicos prontos para o INSS e Justiça, com linguagem adequada e emissão 100% online via WhatsApp." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400;1,9..40,700&display=swap" },
    ],
  }),
  component: LaudoCertoPage,
});

/* ── constantes ── */
const F = "'DM Sans', system-ui, sans-serif";
const BG = "#f5fdff";
const DARK = "#1a2238";
const WA_URL = SITE.whatsapp;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6, delay },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── componentes ── */

/** Onda branca na base de uma seção azul */
function WaveBottom() {
  return (
    <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-[72px] z-10 pointer-events-none"
      aria-hidden>
      <path d="M0,72 L0,38 C360,0 1080,0 1440,38 L1440,72 Z" fill={BG} />
    </svg>
  );
}

/** Onda branca no topo de uma seção azul */
function WaveTop() {
  return (
    <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full h-[72px] z-10 pointer-events-none"
      aria-hidden>
      <path d="M0,0 L0,34 C360,72 1080,72 1440,34 L1440,0 Z" fill={BG} />
    </svg>
  );
}

function Badge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/60 backdrop-blur-sm text-white text-sm font-light"
      style={{ fontFamily: F }}>
      <Icon size={18} className="flex-shrink-0" />
      {label}
    </div>
  );
}

function CTABtn({ children, outline = false, href = WA_URL }: { children: React.ReactNode; outline?: boolean; href?: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-[17px] transition-all cursor-pointer ${
        outline
          ? "bg-white text-transparent bg-clip-text border-2 border-white"
          : "bg-gradient-to-r from-[#5389ff] to-[#295ccc] text-white shadow-[0_4px_24px_rgba(83,137,255,0.35)]"
      }`}
      style={{ fontFamily: F }}
    >
      {children}
    </motion.a>
  );
}

/** Botão branco com texto em gradiente azul (usado dentro de seções azuis) */
function CTAWhite({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white font-bold text-[17px] cursor-pointer"
      style={{ fontFamily: F }}
    >
      <span className="bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent">{children}</span>
    </motion.a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border-b border-white/20 py-4 flex items-start justify-between gap-4"
      style={{ fontFamily: F }}
    >
      <span className="text-white text-[16px] leading-snug">{q}</span>
      <ChevronDown size={20} className={`text-white/70 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      {open && (
        <div className="text-white/75 text-[14px] leading-relaxed mt-2 col-span-full w-full">{a}</div>
      )}
    </button>
  );
}

/* ── página ── */
function LaudoCertoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative" style={{ fontFamily: F, backgroundColor: BG }}>

      {/* ── HEADER ── */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1280px] px-4">
        <div className="flex items-center justify-between h-[60px] px-6 rounded-full border border-white/50 backdrop-blur-md bg-white/80 shadow-sm">
          {/* Logo */}
          <a href="/laudo-certo" className="flex items-center gap-3 flex-shrink-0">
            <img src="/laudo-certo/icon.webp" alt="Laudo Certo ícone" className="h-9 w-auto" />
            <img src="/laudo-certo/logo-text.webp" alt="Laudo Certo" className="h-5 w-auto" />
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10 text-[15px]" style={{ color: DARK }}>
            <a href="#inicio" className="font-bold hover:text-[#5389ff] transition-colors">Início</a>
            <a href="#como-funciona" className="hover:text-[#5389ff] transition-colors">Como Funciona</a>
            <a href="#quem-somos" className="hover:text-[#5389ff] transition-colors">Quem está por trás</a>
          </nav>

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5389ff] to-[#295ccc] text-white font-bold italic text-[14px] shadow-[0_4px_16px_rgba(83,137,255,0.35)]"
            style={{ fontFamily: F }}
          >
            Falar com especialista
          </a>
        </div>
      </header>

      {/* ── S01 HERO ── */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#5389ff] to-[#295ccc] pt-24 pb-32 overflow-hidden">
        {/* Glow decorativo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-white/10 blur-[120px] pointer-events-none" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] px-6 w-full flex flex-col items-center text-center gap-8 z-10">
          <motion.h1
            {...fadeUp(0)}
            className="text-[42px] md:text-[68px] lg:text-[80px] font-bold leading-[1.1] text-white max-w-[900px]"
            style={{ fontFamily: F }}
          >
            O laudo certo para o seu cliente conquistar o benefício com{" "}
            <em className="not-italic font-bold bg-gradient-to-r from-[#a8c4ff] to-[#c5d9ff] bg-clip-text text-transparent italic">
              segurança
            </em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.12)}
            className="text-white/85 text-[18px] md:text-[22px] font-light max-w-[760px] leading-relaxed"
            style={{ fontFamily: F }}
          >
            Obtenha{" "}
            <strong className="font-bold italic">laudos jurídicos prontos para o INSS e Justiça</strong>
            , com linguagem adequada e emissão 100% online via WhatsApp
          </motion.p>

          <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-3 items-center justify-center">
            <Badge icon={Star} label="Coordenação do Dr. Renan Gonçalves" />
            <Badge icon={Shield} label="Médico perito autorizado" />
            <Badge icon={FileCheck} label="Análise prévia dos documentos" />
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <CTAWhite>Falar com um especialista via WhatsApp</CTAWhite>
          </motion.div>
        </div>

        {/* Onda branca na base */}
        <WaveBottom />
      </section>

      {/* ── S02 COMO FUNCIONA ── */}
      <section id="como-funciona" className="relative py-24 md:py-32 px-6 bg-[#f5fdff]">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-16 items-center">
          <motion.h2
            {...fadeUp(0)}
            className="text-[40px] md:text-[60px] text-center font-light leading-[1.15]"
            style={{ fontFamily: F, color: DARK }}
          >
            Solicitar seu laudo é simples, direto e{" "}
            <strong className="font-bold italic bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent">
              100% digital
            </strong>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              {
                num: "01",
                title: "Envio dos documentos",
                desc: "Exames, relatórios médicos e outros documentos em PDF via WhatsApp",
              },
              {
                num: "02",
                title: "Avaliação médica criteriosa",
                desc: "O médico analisa tudo. Se necessário, faz videochamada para avaliação",
              },
              {
                num: "03",
                title: "Emissão do laudo sob medida",
                desc: "Com os termos corretos para o caso, sempre dentro das normas do CFM",
              },
            ].map((step) => (
              <motion.div
                key={step.num}
                variants={staggerItem}
                className="relative border-2 border-[#5389ff] rounded-[24px] pt-16 pb-10 px-6 flex flex-col items-center text-center gap-3 bg-white shadow-sm"
                style={{ fontFamily: F }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Número flutuante */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#5389ff] to-[#295ccc] flex items-center justify-center shadow-[0_4px_20px_rgba(83,137,255,0.4)]">
                  <span className="text-white font-bold text-[20px]">{step.num}</span>
                </div>
                <p className="font-bold text-[20px] leading-snug" style={{ color: DARK }}>{step.title}</p>
                <p className="font-light text-[16px] leading-relaxed text-[rgba(26,34,56,0.55)]">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <CTABtn>Iniciar análise do caso via WhatsApp</CTABtn>
          </motion.div>
        </div>
      </section>

      {/* ── S03 PARA ADVOGADOS ── */}
      <section className="relative py-24 md:py-32 px-6 bg-[#f5fdff]">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-14 items-center">
          <motion.h2
            {...fadeUp(0)}
            className="text-[40px] md:text-[60px] font-light text-center leading-[1.15]"
            style={{ fontFamily: F, color: DARK }}
          >
            Se você é advogado, esse laudo foi{" "}
            <br className="hidden md:block" />
            feito pra{" "}
            <strong className="font-bold italic bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent">
              caber na sua tese
            </strong>
          </motion.h2>

          {/* Box azul de dores */}
          <motion.div
            {...fadeUp(0.1)}
            className="w-full rounded-[40px] bg-gradient-to-r from-[#5389ff] to-[#295ccc] p-8 md:p-12 shadow-[0_8px_48px_rgba(83,137,255,0.3)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Card branco "Você já passou" */}
              <div className="bg-white rounded-[20px] p-7 flex flex-col justify-center md:row-span-2 shadow-sm self-start">
                <p className="font-bold text-[26px] leading-snug" style={{ color: DARK }}>
                  Você já passou<br />por isso:
                </p>
              </div>

              {/* Dores */}
              {[
                "Documento médico genérico, sem utilidade processual",
                "Laudo sem CID ou termos jurídicos relevantes",
                "Falta de comprovação da incapacidade ou nexo causal",
                "Cliente frustrado por indeferimento do INSS",
                "Perda de tempo com retrabalho ou nova perícia",
              ].map((pain) => (
                <div key={pain} className="border-b border-white/20 last:border-0 md:border-b md:border-l md:last:border-b-0 flex items-center gap-3 px-6 py-5">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[16px]">✕</span>
                  </div>
                  <p className="text-white font-bold text-[17px] leading-snug">{pain}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="text-[rgba(26,34,56,0.5)] text-[16px] text-center" style={{ fontFamily: F }}>
            ⚠️ Na Laudo Certo, o laudo não é apenas médico. É jurídico
          </motion.p>
        </div>
      </section>

      {/* ── S04 O QUE VOCÊ VAI RECEBER ── */}
      <section className="relative py-24 md:py-32 px-6 bg-[#f5fdff]">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-14 items-center">
          <motion.h2
            {...fadeUp(0)}
            className="text-[40px] md:text-[60px] font-light text-center"
            style={{ fontFamily: F, color: DARK }}
          >
            O que você{" "}
            <strong className="font-bold italic bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent">
              vai receber:
            </strong>
          </motion.h2>

          <motion.div
            className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-center w-full"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Card escuro 1 */}
            {([
              { icon: FileText, label: "Termos certos pro seu tipo de ação" },
              { icon: Pencil, label: "Redação clara e pronta pra anexar" },
            ] as const).map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="bg-[rgba(26,34,56,0.5)] rounded-[18px] px-5 py-9 flex flex-col gap-3 items-center text-center w-full md:w-[200px] flex-shrink-0 shadow-md"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Icon size={50} className="text-white/80" strokeWidth={1.5} />
                <p className="text-white font-bold italic text-[17px] leading-snug">{label}</p>
              </motion.div>
            ))}

            {/* Card azul central em destaque */}
            <motion.div
              variants={staggerItem}
              className="relative rounded-[24px] overflow-hidden flex-shrink-0"
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="border-[1.5px] border-[rgba(26,34,56,0.2)] rounded-[24px] p-3">
                <div className="border-[1.5px] border-[rgba(26,34,56,0.15)] rounded-[20px] p-3">
                  <div className="bg-gradient-to-br from-[#5389ff] to-[#295ccc] rounded-[18px] px-6 py-10 flex flex-col gap-4 items-center text-center w-[230px] shadow-[0_8px_32px_rgba(83,137,255,0.4)]">
                    <Folder size={64} className="text-white" strokeWidth={1.5} />
                    <p className="text-white font-bold italic text-[20px] leading-snug">Serve para benefícios, ações e concursos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cards escuros 3 e 4 */}
            {([
              { icon: Scale, label: "Alinhamento com INSS e Justiça" },
              { icon: CheckSquare, label: "Validação por médico e advogado" },
            ] as const).map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="bg-[rgba(26,34,56,0.5)] rounded-[18px] px-5 py-9 flex flex-col gap-3 items-center text-center w-full md:w-[200px] flex-shrink-0 shadow-md"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Icon size={50} className="text-white/80" strokeWidth={1.5} />
                <p className="text-white font-bold italic text-[17px] leading-snug">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="text-[rgba(26,34,56,0.5)] text-[16px] text-center" style={{ fontFamily: F }}>
            Você faz o jurídico. A gente entrega o laudo ideal
          </motion.p>

          <motion.div {...fadeUp(0.25)}>
            <CTABtn>Quero laudo adaptado à minha tese</CTABtn>
          </motion.div>
        </div>
      </section>

      {/* ── S05 TAMBÉM PARA LEIGOS ── */}
      <section className="relative py-36 md:py-44 px-6 bg-gradient-to-br from-[#5389ff] to-[#295ccc] overflow-hidden">
        <WaveTop />
        <WaveBottom />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-white/10 blur-[120px] pointer-events-none" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-12 items-center z-10">
          {/* Copy */}
          <motion.div className="flex flex-col gap-7 flex-1 min-w-0" {...fadeUp(0)}>
            <p className="text-white/85 text-[18px] font-light leading-relaxed" style={{ fontFamily: F }}>
              Você não é advogado, mas{" "}
              <strong className="font-bold italic">precisa de um laudo?</strong>
            </p>

            <div className="flex flex-col gap-1">
              <p className="text-[#f5fdff]/70 text-[28px] font-light leading-tight" style={{ fontFamily: F }}>A gente também</p>
              <p className="text-[28px] md:text-[36px] font-bold italic text-white leading-tight" style={{ fontFamily: F }}>pode te ajudar...</p>
            </div>

            <p className="text-white/85 text-[17px] font-light leading-relaxed max-w-[480px]" style={{ fontFamily: F }}>
              Segurados e trabalhadores{" "}
              <strong className="font-bold italic">também podem solicitar laudos,</strong>{" "}
              seja para dar entrada no INSS ou comprovar alguma condição de saúde em concursos públicos.
            </p>

            <p className="text-white/65 text-[14px] leading-relaxed max-w-[480px]" style={{ fontFamily: F }}>
              Importante: o serviço é só para emissão de laudos e exige documentos médicos prévios.
            </p>

            <CTAWhite>Solicitar avaliação para emissão do laudo</CTAWhite>
          </motion.div>

          {/* Mockups */}
          <motion.div
            className="relative flex-shrink-0 flex-1 min-w-0 flex justify-center items-end"
            {...fadeUp(0.15)}
          >
            <div className="relative w-full max-w-[580px]">
              <img
                src="/laudo-certo/macbook.webp"
                alt="Laudo Certo no MacBook"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              />
              <div className="absolute left-0 bottom-0 translate-y-8 -rotate-[7deg]">
                <img
                  src="/laudo-certo/iphone.webp"
                  alt="Laudo Certo no iPhone"
                  loading="lazy"
                  className="w-[100px] md:w-[130px] h-auto rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S07 QUEM ESTÁ POR TRÁS ── */}
      <section id="quem-somos" className="relative py-24 md:py-32 px-6 bg-[#f5fdff]">
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-14 items-center">
          {/* Foto */}
          <motion.div className="flex-shrink-0 w-full lg:w-[460px]" {...fadeUp(0)}>
            <img
              src="/guia/renan03.webp"
              alt="Dr. Renan Gonçalves"
              loading="lazy"
              className="w-full h-auto rounded-[24px] shadow-[0_12px_60px_rgba(83,137,255,0.2)]"
            />
          </motion.div>

          {/* Copy */}
          <motion.div className="flex flex-col gap-7 flex-1 min-w-0" {...fadeUp(0.1)}>
            <div>
              <p className="text-[42px] md:text-[52px] font-light leading-snug" style={{ color: DARK, fontFamily: F }}>
                Quem está por trás
              </p>
              <p className="text-[42px] md:text-[52px] leading-snug" style={{ fontFamily: F }}>
                <span className="font-light" style={{ color: DARK }}>da </span>
                <strong className="font-bold italic bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent">
                  Laudo Certo
                </strong>
              </p>
            </div>

            <p className="text-[18px] font-light leading-relaxed" style={{ color: `rgba(26,34,56,0.6)`, fontFamily: F }}>
              Sou o{" "}
              <strong className="font-bold italic" style={{ color: DARK }}>Dr. Renan Gonçalves,</strong>{" "}
              advogado especialista em benefícios e ex-gerente do INSS.
              Criei a Laudo Certo porque sei como um bom laudo pode destravar um processo.
            </p>

            <p className="text-[18px] font-light leading-relaxed" style={{ color: `rgba(26,34,56,0.6)`, fontFamily: F }}>
              Os laudos são feitos por médicos peritos,{" "}
              <strong className="font-bold italic" style={{ color: DARK }}>
                seguindo as normas do CFM e com linguagem adaptada ao INSS e à Justiça.
              </strong>{" "}
              Já são utilizados por advogados de todo o Brasil, inclusive no meu próprio escritório.
            </p>

            <CTABtn>Solicitar meu laudo</CTABtn>
          </motion.div>
        </div>
      </section>

      {/* ── S08 DEPOIMENTOS ── */}
      <section className="relative py-24 md:py-32 px-6 bg-[#f5fdff]">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-14 items-center">
          <motion.h2
            {...fadeUp(0)}
            className="text-[42px] md:text-[64px] font-light text-center leading-snug"
            style={{ fontFamily: F, color: DARK }}
          >
            Laudos que{" "}
            <strong className="font-bold italic underline decoration-[#5389ff] decoration-4 bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent">
              resolvem
            </strong>{" "}
            na prática!
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              {
                text: "Antes, era uma luta explicar pro cliente que o laudo que ele trouxe não servia. Com a Laudo Certo, eu recebo o documento já no formato ideal pra anexar. Economiza tempo e aumenta a chance de deferimento.",
                name: "Dr. Rafael Oliveira",
                role: "Advogado Previdenciarista",
                img: "/laudo-certo/dep1.webp",
              },
              {
                text: "A gente usa direto nos nossos casos. O médico já entende o que precisa constar no laudo, o formato vem redondo. É quase como se fosse feito sob medida pra nossa petição.",
                name: "Dra. Camila Braga",
                role: "Escritório Braga & Associados",
                img: "/laudo-certo/dep2.webp",
              },
              {
                text: "Sou advogado iniciante e sempre tive dificuldade com a parte médica dos processos. Esse serviço me dá confiança pra entrar com a ação sabendo que o laudo sustenta minha tese.",
                name: "Henrique Lacerda",
                role: "Advogado autônomo",
                img: "/laudo-certo/dep3.webp",
              },
            ].map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="bg-white border-2 border-[rgba(26,34,56,0.12)] rounded-[20px] p-8 flex flex-col gap-5 shadow-md"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <svg width="24" height="20" viewBox="0 0 30 24" fill="none" aria-hidden>
                  <path d="M0 24V14.4C0 10.4 1.2 7.07 3.6 4.4 6 1.73 9.2 0.13 13.2 0v4C10.8 4.4 8.93 5.33 7.6 6.8 6.4 8.27 5.8 10 5.8 12h5v12H0Zm13.8 0V14.4c0-4 1.2-7.33 3.6-10C19.8 1.73 23 0.13 27 0v4c-2.4 0.4-4.27 1.33-5.6 2.8-1.2 1.47-1.8 3.2-1.8 5.2h5v12h-10.8Z" fill="#5389ff" />
                </svg>
                <p className="text-[rgba(26,34,56,0.55)] text-[15px] italic font-light leading-relaxed flex-1">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#5389ff]" loading="lazy" />
                  <div>
                    <p className="font-bold italic text-[16px]" style={{ color: DARK, fontFamily: F }}>{t.name}</p>
                    <p className="font-light text-[13px] text-[rgba(26,34,56,0.5)]" style={{ fontFamily: F }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-3">
            <CTABtn>Peça o seu laudo agora mesmo pelo WhatsApp</CTABtn>
            <p className="text-[rgba(26,34,56,0.5)] text-[14px]" style={{ fontFamily: F }}>
              Fácil, rápido e com retorno real no processo
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── S09 FAQ + FOOTER ── */}
      <section className="relative pt-40 pb-24 px-6 bg-gradient-to-br from-[#5389ff] to-[#295ccc] overflow-hidden">
        <WaveTop />

        <div className="relative mx-auto max-w-[1280px] z-10 flex flex-col lg:flex-row gap-14">
          {/* Coluna esquerda */}
          <motion.div className="flex flex-col gap-6 lg:w-[420px] flex-shrink-0" {...fadeUp(0)}>
            <h2 className="text-white font-semibold text-[32px] leading-snug" style={{ fontFamily: F }}>
              Perguntas Frequentes
            </h2>
            <p className="text-white/75 text-[16px] font-light leading-relaxed" style={{ fontFamily: F }}>
              Caso você tenha alguma dúvida, entre em contato com a nossa equipe através do WhatsApp! Teremos prazer em responder e tirar todas as suas dúvidas.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white rounded-full px-8 py-4 font-semibold text-[16px] w-fit shadow-md"
              style={{ fontFamily: F }}
            >
              <span className="bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent">
                Falar com o suporte
              </span>
            </a>
          </motion.div>

          {/* FAQ accordion */}
          <motion.div className="flex-1 min-w-0 flex flex-col" {...fadeUp(0.1)}>
            {[
              {
                q: "Qual a diferença entre esse laudo e um atestado comum?",
                a: "O laudo da Laudo Certo é produzido com linguagem jurídica, incluindo CID, nexo causal, termos técnicos do INSS e terminologia adequada para uso processual. Um atestado comum geralmente não tem essa estrutura e costuma ser rejeitado pelo INSS ou na Justiça.",
              },
              {
                q: "Preciso fazer uma consulta médica?",
                a: "Não necessariamente. O médico analisa seus documentos e, se necessário, realiza uma videochamada para avaliação complementar. Na maioria dos casos, os documentos enviados são suficientes.",
              },
              {
                q: "Quais documentos preciso enviar?",
                a: "Exames laboratoriais, relatórios médicos, atestados anteriores e qualquer comprovação da condição de saúde. Após o envio, a equipe avalia e informa se há algo adicional necessário.",
              },
              {
                q: "Esse laudo serve para qualquer tipo de benefício?",
                a: "Sim. Os laudos são adaptados para benefícios por incapacidade, auxílio-doença, aposentadoria por invalidez, ações judiciais e concursos públicos.",
              },
              {
                q: "Em quanto tempo o laudo fica pronto?",
                a: "O prazo varia conforme a complexidade do caso, mas geralmente entre 3 a 7 dias úteis após o recebimento e análise dos documentos.",
              },
            ].map((item, i) => (
              <button
                key={item.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left border-b border-white/20 py-5"
                style={{ fontFamily: F }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white text-[16px] leading-snug">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-white/70 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </div>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-white/75 text-[14px] leading-relaxed pr-8"
                  >
                    {item.a}
                  </motion.p>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="relative mx-auto max-w-[1280px] mt-20 pt-6 border-t border-white/20 z-10">
          <p className="text-center text-[rgba(26,34,56,0.7)] text-[14px]" style={{ fontFamily: F, color: DARK }}>
            Página de vendas produzida por <strong>Niel Hart.</strong>
          </p>
        </div>
      </section>

    </div>
  );
}

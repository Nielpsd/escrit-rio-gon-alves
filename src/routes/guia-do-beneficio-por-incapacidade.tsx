import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/guia-do-beneficio-por-incapacidade")({
  head: () => ({
    meta: [
      { title: "Guia do Benefício por Incapacidade — Dr. Renan Gonçalves" },
      {
        name: "description",
        content:
          "Aprenda a conseguir seu Benefício por Incapacidade sem precisar de intermediários ou advogado. Passo a passo com um ex-gerente do INSS.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: GuiaPage,
});

const CTA_URL = "#comprar";
const FONT = "'Space Grotesk', system-ui, sans-serif";

/* ─────────────── tipografia padronizada ───────────────
   Headlines aplicam fontFamily + color inline para vencer a
   regra global de h1-h4 do site (Cormorant serif / navy). */

function Headline({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`text-[28px] md:text-[38px] font-bold leading-[1.15] ${className}`} style={{ fontFamily: FONT, color: "#fff" }}>
      {children}
    </h1>
  );
}
function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-[26px] md:text-[32px] font-bold leading-[1.2] ${className}`} style={{ fontFamily: FONT, color: "#fff" }}>
      {children}
    </h2>
  );
}
function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-[19px] md:text-[21px] font-bold leading-[1.25] ${className}`} style={{ fontFamily: FONT, color: "#fff" }}>
      {children}
    </h3>
  );
}
function Lead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[16px] md:text-[18px] leading-[1.45] font-light ${className}`}>{children}</p>;
}
function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[15px] md:text-[16px] leading-[1.4] ${className}`}>{children}</p>;
}
function Caption({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[12px] md:text-[13px] ${className}`}>{children}</p>;
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function CTAButton({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={CTA_URL}
      className={`inline-flex items-center justify-center bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-bold uppercase rounded-[10px] transition-all hover:brightness-110 hover:-translate-y-0.5 ${large ? "px-8 py-4 text-[15px] md:text-base" : "px-7 py-3.5 text-sm"}`}
      style={{ fontFamily: FONT, boxShadow: "0 0 30px rgba(197,110,255,0.35)" }}
    >
      {children}
    </a>
  );
}

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{ background: "radial-gradient(circle, rgba(197,110,255,0.18) 0%, rgba(197,110,255,0) 70%)" }}
    />
  );
}

/* ─────────────── dados ─────────────── */

const FEATURES = [
  { title: "Descubra se você tem direito", desc: "Entenda quem realmente pode pedir o benefício e quem não se encaixa nas regras." },
  { title: "Organize seus documentos", desc: "Saiba quais laudos e papéis precisa juntar com clareza e sem erro." },
  { title: "Monte seu pedido no Meu INSS", desc: "Aprenda como fazer tudo sozinho pelo aplicativo, sem depender de ninguém." },
  { title: "Veja exatamente onde clicar", desc: "Você acompanha na tela, passo a passo, tudo o que precisa fazer." },
  { title: "Prepare-se pra perícia médica", desc: "Saiba o que dizer, o que levar e o que não fazer na hora da avaliação." },
  { title: "Peça prorrogação do jeito certo", desc: "Entenda quando e como renovar o benefício, evitando negativas." },
  { title: "Acompanhe seu pedido com segurança", desc: "Veja como monitorar todo o processo até a resposta do INSS." },
  { title: "Conquiste seu direito sem depender de outros", desc: "Você mesmo faz tudo, sem gastar com advogado ou cair em golpe de intermediário." },
  { title: "Evite os erros mais comuns que causam negativa", desc: "Aprenda o que leva o INSS a negar pedidos mesmo de quem tem direito e fuja dessas armadilhas." },
];

const MODULES = [
  { num: "01", title: "Entenda se você tem direito", img: "/guia/mod01.webp" },
  { num: "02", title: "Carência, qualidade e incapacidade", img: "/guia/mod02.webp" },
  { num: "03", title: "Documentos e laudos corretos", img: "/guia/mod03.webp" },
  { num: "04", title: "Como enviar tudo no Meu INSS", img: "/guia/mod04.webp" },
  { num: "05", title: "O que fazer na perícia médica", img: "/guia/mod05.webp" },
  { num: "06", title: "Como pedir prorrogação", img: "/guia/mod06.webp" },
  { num: "07", title: "Tipos de benefício e diferenças", img: "/guia/mod07.webp" },
  { num: "08", title: "Reabilitação profissional", img: "/guia/mod08.webp" },
];

const PARA_QUEM = [
  "Pra quem quer pedir o benefício sozinho, direto no celular, sem depender de advogado ou despachante.",
  "Pra quem precisa economizar e não tem como pagar consulta. Aqui você aprende tudo por menos.",
  "Pra quem já tentou e se enrolou, errou documentos ou não sabe o que o INSS realmente exige.",
  "Pra quem quer aprender rápido e ter segurança no que está fazendo, sem enrolação nem juridiquês.",
];

const FAQ = [
  { q: "Mas será que eu vou conseguir fazer sozinho(a) mesmo?", a: "Sim. O Guia foi feito justamente para quem nunca mexeu com isso. Cada passo é mostrado na tela, com linguagem simples, pra você só copiar e fazer igual." },
  { q: "E se eu não tiver todos os documentos?", a: "Você vai aprender exatamente quais documentos são necessários e como conseguir cada um deles, mesmo que ainda não tenha tudo em mãos." },
  { q: "E se eu tiver dúvidas?", a: "O conteúdo é direto ao ponto e cobre as dúvidas mais comuns. Você pode rever as aulas quantas vezes precisar, no seu ritmo." },
  { q: "Preciso ter um laudo médico antes?", a: "O Guia explica qual tipo de laudo e documentação médica o INSS espera, e como organizar isso antes de fazer o pedido." },
  { q: "E se eu fizer errado e o INSS negar?", a: "O Guia mostra justamente os erros que mais causam negativa e como evitá-los, aumentando muito suas chances de aprovação." },
  { q: "Tenho medo de mexer no aplicativo Meu INSS...", a: "Você vai ver a tela do aplicativo sendo usada de verdade, clique por clique. É só acompanhar e repetir no seu celular." },
  { q: "E se eu não entender logo de cara?", a: "As aulas são curtas e você assiste no seu tempo, quantas vezes quiser. Nada de pressa nem juridiquês." },
  { q: "Tenho só ensino fundamental, vou conseguir entender?", a: "Com certeza. O Guia foi pensado para qualquer pessoa entender, sem termos técnicos e com explicações simples." },
  { q: "Preciso fazer tudo no mesmo dia?", a: "Não. Você avança no seu ritmo e faz cada etapa quando estiver pronto. O acesso fica disponível pra você." },
  { q: "Posso assistir no celular?", a: "Sim. Você assiste de onde quiser — celular, tablet ou computador — quando for melhor pra você." },
  { q: "E se eu não tiver internet boa?", a: "As aulas são leves e você pode assistir em qualquer conexão. Basta um sinal básico de internet." },
  { q: "E se eu me arrepender da compra?", a: "Você tem 7 dias de garantia. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas." },
];

const PRICE_ITEMS = [
  "Renan Gonçalves, Especialista em benefícios",
  "Ex-gerente do INSS com experiência prática real",
  "Já analisou centenas de pedidos",
  "Ensina com exemplos reais",
  "Te mostra como fazer tudo sozinho",
  "Conhece o que realmente faz o INSS negar ou aprovar",
];

const TESTIMONIALS = [
  { text: "Eu achei que nunca ia conseguir fazer esse pedido. Já tinha tentado duas vezes e sempre errava alguma coisa. Com o Guia eu vi onde estava errando e fiz tudo certo. Agora tô recebendo meu auxílio e sem depender de ninguém.", name: "Roseli M.", city: "Manaus-AM", avatar: "/guia/avatars/women-1.jpg" },
  { text: "Segui o passo a passo certinho e meu pedido foi aprovado na primeira vez. Não precisei pagar nada pra ninguém. O Renan explica de um jeito que qualquer pessoa entende.", name: "Francisca L.", city: "Fortaleza-CE", avatar: "/guia/avatars/women-2.jpg" },
  { text: "Tinha medo de errar e ser negado de novo. Com o Guia aprendi o que o INSS realmente analisa. Foi aprovado em menos de 30 dias.", name: "Carlos R.", city: "Porto Velho-RO", avatar: "/guia/avatars/men-1.jpg" },
  { text: "Eu não entendia nada de Meu INSS. Achei que ia ser complicado, mas é só ir clicando junto com o vídeo. Consegui dar entrada sozinha.", name: "Marlene S.", city: "Belém-PA", avatar: "/guia/avatars/women-3.jpg" },
  { text: "Vale cada centavo. Economizei o que ia gastar com advogado e ainda aprendi pra ajudar minha família depois.", name: "João P.", city: "Cuiabá-MT", avatar: "/guia/avatars/men-2.jpg" },
  { text: "Conteúdo direto, sem enrolação. Em uma tarde eu já tinha montado meu pedido do jeito certo. Recomendo demais.", name: "Antônia F.", city: "Teresina-PI", avatar: "/guia/avatars/women-4.jpg" },
];

/* ─────────────── componentes de seção ─────────────── */

function ModuleCard({ mod }: { mod: (typeof MODULES)[0] }) {
  return (
    <div className="relative h-[420px] w-[280px] md:w-[320px] flex-shrink-0 rounded-[10px] overflow-hidden bg-[#1a1a1a]">
      <img src={mod.img} alt={mod.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent" />
      <div className="absolute bottom-8 left-0 right-0 px-5 flex flex-col gap-3 items-center text-center">
        <span className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-medium text-[14px] px-5 py-1 rounded-[8px]" style={{ fontFamily: FONT }}>
          MÓDULO {mod.num}
        </span>
        <CardTitle className="!text-[22px] md:!text-[26px] text-center">{mod.title}</CardTitle>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#cf88ff] to-[#c56eff]" />
    </div>
  );
}

function ModulesHeader() {
  return (
    <>
      <SectionHeading className="mb-6">
        Tudo o que você precisa saber <GradientText>está aqui dentro.</GradientText>
      </SectionHeading>
      <Lead className="text-white/90 max-w-3xl">
        A seguir, você assiste a um pedido real sendo feito na tela, clicando, marcando e anexando
        cada item pra <strong className="font-bold text-white">copiar e fazer igual.</strong>
        {" "}Aulas curtas, linguagem simples e conteúdo direto ao ponto. Sem enrolação, sem juridiquês —
        só o que funciona na prática.
      </Lead>
    </>
  );
}

function ModulesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      if (trackRef.current) trackRef.current.style.transform = "";
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;
        const rect = section.getBoundingClientRect();
        const total = section.offsetHeight - window.innerHeight;
        const progress = Math.min(Math.max(-rect.top / total, 0), 1);
        const maxX = Math.max(track.scrollWidth - window.innerWidth + 48, 0);
        track.style.transform = `translate3d(${-progress * maxX}px,0,0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  return (
    <>
      {/* Desktop — pin horizontal */}
      <section ref={sectionRef} className="hidden lg:block relative h-[320vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="max-w-[1280px] w-full mx-auto px-6 mb-10">
            <ModulesHeader />
          </div>
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5 will-change-transform"
              style={{ paddingLeft: "max(24px, calc((100vw - 1280px) / 2))", paddingRight: "24px" }}
            >
              {MODULES.map((mod) => (
                <ModuleCard key={mod.num} mod={mod} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile — swipe nativo */}
      <section className="lg:hidden relative py-16">
        <div className="max-w-[1280px] mx-auto px-6 mb-8">
          <ModulesHeader />
        </div>
        <div className="px-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 w-max">
            {MODULES.map((mod) => (
              <ModuleCard key={mod.num} mod={mod} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left bg-white/[0.04] hover:bg-white/[0.07] rounded-[10px] px-6 py-4 transition-colors"
      style={{ fontFamily: FONT }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[#ced4da] text-[15px] md:text-[16px] leading-snug">{q}</span>
        <span className={`grid place-items-center w-7 h-7 rounded-[5px] bg-white/[0.06] text-[#f8f9fa] text-sm flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </div>
      {open && <p className="mt-3 text-[#a2a2a2] text-[14px] leading-relaxed">{a}</p>}
    </button>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="bg-[#f2f2f2] rounded-[20px] p-7 md:p-8 flex flex-col gap-3 w-[300px] md:w-[360px] flex-shrink-0" style={{ fontFamily: FONT }}>
      <svg width="26" height="20" viewBox="0 0 30 24" fill="none" aria-hidden>
        <path d="M0 24V14.4C0 10.4 1.2 7.07 3.6 4.4 6 1.73 9.2 0.13 13.2 0v4C10.8 4.4 8.93 5.33 7.6 6.8 6.4 8.27 5.8 10 5.8 12h5v12H0Zm13.8 0V14.4c0-4 1.2-7.33 3.6-10C19.8 1.73 23 0.13 27 0v4c-2.4 0.4-4.27 1.33-5.6 2.8-1.2 1.47-1.8 3.2-1.8 5.2h5v12h-10.8Z" fill="#cf88ff" />
      </svg>
      <p className="text-[#131313] text-[15px] leading-[1.4]">{t.text}</p>
      <div className="flex items-center gap-3 mt-1">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#ddd]">
          <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-[#131313] text-[16px] leading-none">{t.name}</p>
          <p className="text-[#131313]/70 text-[13px] mt-1">{t.city}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const DRIFT = 220; // px de deslocamento total
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // progresso 0→1 enquanto a seção atravessa a viewport
        const p = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
        if (row1.current) row1.current.style.transform = `translate3d(${-p * DRIFT}px,0,0)`;
        if (row2.current) row2.current.style.transform = `translate3d(${-DRIFT + p * DRIFT}px,0,0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const rowA = [...TESTIMONIALS, ...TESTIMONIALS];
  const rowB = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];

  return (
    <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12 items-center">
        <div className="flex -space-x-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#cf88ff] bg-[#1a1a1a]">
              <img src={t.avatar} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <SectionHeading className="text-center max-w-[882px] !font-normal">
          Quem seguiu o passo a passo já está{" "}
          <span className="font-bold"><GradientText>recebendo o benefício</GradientText></span>
        </SectionHeading>
      </div>

      <div className="mt-12 flex flex-col gap-5">
        <div ref={row1} className="flex gap-5 w-max px-4 will-change-transform">
          {rowA.map((t, i) => <TestimonialCard key={"a" + i} t={t} />)}
        </div>
        <div ref={row2} className="flex gap-5 w-max px-4 will-change-transform" style={{ transform: "translate3d(-220px,0,0)" }}>
          {rowB.map((t, i) => <TestimonialCard key={"b" + i} t={t} />)}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── página ─────────────── */

function GuiaPage() {
  return (
    <div className="bg-[#131313] text-white overflow-x-hidden relative" style={{ fontFamily: FONT }}>
      {/* ── S01 HERO ── */}
      <section className="relative min-h-[520px] md:h-[760px] flex items-center">
        <img
          src="/guia/hero-bg.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/85 md:via-[#131313]/55 to-[#131313]/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1280px] px-6 w-full">
          <div className="max-w-[600px] flex flex-col gap-7 md:gap-8">
            <div className="flex flex-col gap-5">
              <Headline>
                Aprenda a Conseguir seu <GradientText>Benefício por Incapacidade</GradientText>{" "}
                Sem Precisar de Intermediários ou Algum Advogado.
              </Headline>
              <Lead className="text-white/90 max-w-[531px]">
                Sem enrolação, sem depender dos outros, só o que funciona. Com a ajuda de um ex-gerente do INSS,{" "}
                <strong className="font-bold text-white">você vai descobrir o passo a passo</strong>{" "}
                para pedir, montar e acompanhar seu processo{" "}
                <strong className="font-bold text-white">direto no Meu INSS,</strong>{" "}
                com base, verdade e responsabilidade.
              </Lead>
            </div>

            <CTAButton large>Quero aprender agora</CTAButton>

            <div className="flex flex-col gap-2">
              <Caption className="text-white/90 !text-[14px]">87% das vagas já estão preenchidas</Caption>
              <div className="h-2 bg-white/15 rounded-full overflow-hidden w-[280px] max-w-full">
                <div className="h-full w-[87%] bg-gradient-to-r from-[#cf88ff] to-[#c56eff] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAIXA / MARQUEE ── */}
      <div
        className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] py-[10px] overflow-hidden relative z-10"
        style={{ boxShadow: "0 0 30px rgba(197,110,255,0.45)" }}
      >
        <div className="flex w-max animate-[marquee_30s_linear_infinite]" style={{ willChange: "transform" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[32px] pr-[32px] whitespace-nowrap font-medium text-[13px] md:text-[15px] uppercase text-[#131313]" style={{ fontFamily: FONT }}>
              <span>Poucas vagas disponíveis</span>
              <span>✦</span>
              <span>Acesso imediato</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── S02 FEATURES ── */}
      <section className="relative py-16 md:py-20 px-6">
        <Glow className="left-1/2 -translate-x-1/2 top-10 w-[900px] h-[300px]" />
        <div className="relative mx-auto max-w-[1280px]">
          <SectionHeading className="text-center mb-12">
            Com o Guia do benefício por incapacidade, <GradientText>você vai conseguir:</GradientText>
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-[rgba(26,26,26,0.5)] border border-[#4c4c4c] rounded-[10px] p-7 flex flex-col gap-4">
                <CardTitle>{f.title}</CardTitle>
                <div className="h-px w-full bg-[#4c4c4c]" />
                <Body className="text-[#a2a2a2]">{f.desc}</Body>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S03 INSTRUTOR ── */}
      <section className="relative py-16 md:py-20 px-6">
        <Glow className="right-0 top-1/4 w-[700px] h-[700px]" />
        <div className="relative mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex flex-row gap-4 justify-center flex-shrink-0">
            <div className="w-[180px] md:w-[240px] h-[380px] md:h-[500px] rounded-[20px] overflow-hidden shadow-[0px_0px_25px_0px_rgba(0,0,0,0.25)] mt-10">
              <img src="/guia/renan01.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="w-[230px] md:w-[320px] h-[440px] md:h-[580px] rounded-[20px] overflow-hidden shadow-[0px_0px_25px_0px_rgba(0,0,0,0.25)]">
              <img src="/guia/renan03.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          <div className="flex flex-col gap-7 max-w-[522px]">
            <SectionHeading>
              Quem vai te ensinar é quem já esteve <GradientText>do outro lado do balcão.</GradientText>
            </SectionHeading>
            <div className="space-y-4 text-white">
              <Body className="!text-[17px]">
                Sou <strong className="font-bold">Renan Gonçalves,</strong> advogado especialista em benefícios do INSS e ex-gerente de agência do próprio INSS.
              </Body>
              <Body className="!text-[17px] text-white/90 font-light">
                Passei anos analisando pedidos de dentro do sistema, entendendo o que realmente dá certo e o que faz as pessoas saírem de mãos abanando.
              </Body>
              <Body className="!text-[17px] font-light">
                <span className="text-white/90">Hoje, ajudo pessoas comuns a conquistarem seus direitos de forma correta e consciente. </span>
                <strong className="font-bold">E criei este Guia exatamente pra isso:</strong>
                <span className="text-white/90"> pra que você possa pedir seu benefício </span>
                <strong className="font-bold">sem depender de intermediários ou advogado,</strong>
                <span className="text-white/90"> e sem errar no processo.</span>
              </Body>
              <p className="text-[20px] md:text-[22px] font-bold leading-[1.25]" style={{ fontFamily: FONT }}>
                É o que eu faria se fosse pra mim ou pra alguém da minha família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S04 MÓDULOS (pin horizontal) ── */}
      <ModulesSection />

      {/* ── S05 PARA QUEM É ── */}
      <section className="relative py-16 md:py-20 px-6 overflow-hidden">
        <Glow className="left-[8%] top-1/2 -translate-y-1/2 w-[780px] h-[780px]" />
        <div className="relative mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-10 lg:gap-6 items-center">
          <div className="flex-1 flex justify-center">
            <img src="/guia/ipad-s05.webp" alt="Guia do benefício por incapacidade" loading="lazy" className="w-full max-w-[600px] h-auto" />
          </div>
          <div className="flex flex-col gap-8 items-start flex-shrink-0 w-full lg:w-[435px]">
            <SectionHeading>Para quem é?</SectionHeading>
            <div className="flex flex-col w-full">
              {PARA_QUEM.map((item, i) => (
                <div key={i} className="border-b border-white/10 last:border-0">
                  <div className="flex gap-3 items-center py-4">
                    <img src="/guia/check.svg" alt="" className="w-[40px] h-[40px] flex-shrink-0" />
                    <Body className="text-white">{item}</Body>
                  </div>
                </div>
              ))}
            </div>
            <CTAButton large>Quero aprender agora</CTAButton>
          </div>
        </div>
      </section>

      {/* ── S06 FAQ ── */}
      <section className="relative py-16 md:py-20 px-6">
        <div className="mx-auto max-w-[1300px] flex flex-col gap-12 items-center">
          <SectionHeading className="text-center">Perguntas frequentes</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── S07 COMPARAÇÃO + PREÇO ── */}
      <section className="relative py-16 md:py-20 px-6">
        <Glow className="left-1/2 -translate-x-1/2 top-0 w-[1000px] h-[500px]" />
        <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <SectionHeading className="flex-1">
              <GradientText>Tá na sua mão:</GradientText> escolher o caminho certo ou continuar tentando no escuro
            </SectionHeading>
            <Lead className="flex-1 text-white/90 lg:pt-2">
              Você tem duas opções a partir daqui. E a escolha que você fizer hoje vai definir se você finalmente conquista seu benefício{" "}
              <strong className="font-bold text-white">ou continua travado por conta de erros simples que poderiam ter sido evitados.</strong>
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#0f0f0f] border border-[#4c4c4c] rounded-[20px] p-8 md:p-10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-red-500/15 text-red-400 text-lg flex-shrink-0">✗</span>
                <CardTitle>Continuar tentando no escuro</CardTitle>
              </div>
              <div className="h-px w-full bg-[#4c4c4c]" />
              <Body className="text-[#a2a2a2]">
                Tentar sozinho, errar documentos, não saber o que o INSS realmente analisa e aumentar o risco de ter o pedido negado mais uma vez.
              </Body>
            </div>
            <div className="bg-[#0f0f0f] border border-[#cf88ff]/50 rounded-[20px] p-8 md:p-10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-[#cf88ff]/15 text-[#cf88ff] text-lg flex-shrink-0">✓</span>
                <CardTitle>Aprender com quem já esteve dentro do INSS</CardTitle>
              </div>
              <div className="h-px w-full bg-[#cf88ff]/20" />
              <Body className="text-[#a2a2a2]">
                Aprender em poucas horas, com quem já trabalhou dentro do INSS, como montar o pedido certo, sem depender de intermediários ou gastar com advogados.
              </Body>
            </div>
          </div>

          {/* preço */}
          <div className="flex flex-col lg:flex-row mt-4 rounded-[40px] overflow-hidden">
            <div className="flex-1 bg-[#0f0f0f] border border-[#4c4c4c] p-9 lg:p-12 flex flex-col gap-7 lg:rounded-l-[40px] rounded-t-[40px] lg:rounded-tr-none">
              <CardTitle className="!text-[24px] md:!text-[30px] max-w-[331px]">
                Você vai aprender com quem já esteve dentro do INSS:
              </CardTitle>
              <ul className="flex flex-col gap-3">
                {PRICE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white text-[16px] leading-snug" style={{ fontFamily: FONT }}>
                    <span className="text-[#cf88ff] mt-0.5 flex-shrink-0">➤</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-white p-9 lg:p-12 flex flex-col gap-4 items-center justify-center text-center lg:rounded-r-[40px] rounded-b-[40px] lg:rounded-bl-none">
              <p className="text-[#131313] text-[18px] md:text-[20px]" style={{ fontFamily: FONT }}>
                De:{" "}
                <span className="line-through decoration-[#fe2a2a]">R$ <span className="text-[#fe2a2a]">597,00</span></span>{" "}
                por apenas:
              </p>
              <p className="leading-none" style={{ fontFamily: FONT }}>
                <span className="text-[#131313] font-bold text-[36px] md:text-[44px]">12x </span>
                <span className="font-bold text-[56px] md:text-[72px] bg-gradient-to-r from-[#cf88ff] to-[#c56eff] bg-clip-text text-transparent">34,13</span>
              </p>
              <p className="text-[#131313] text-[18px] md:text-[20px]" style={{ fontFamily: FONT }}>
                ou <span className="font-medium text-[20px] md:text-[24px]">R$ 330,00</span> à vista
              </p>
              <a
                href={CTA_URL}
                className="mt-2 w-full max-w-[386px] inline-flex items-center justify-center bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-bold uppercase text-base md:text-lg rounded-[12px] px-8 py-4 transition-all hover:brightness-110"
                style={{ fontFamily: FONT }}
              >
                Quero meu acesso
              </a>
              <Caption className="text-[#131313] font-semibold mt-1">🔒 Compra segura · Hotmart</Caption>
            </div>
          </div>
        </div>
      </section>

      {/* ── S08 DEPOIMENTOS (drift horizontal) ── */}
      <TestimonialsSection />

      {/* ── S09 GARANTIA ── */}
      <section className="relative py-16 md:py-20 px-6">
        <Glow className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[645px] h-[400px]" />
        <div className="relative mx-auto max-w-[1280px] flex flex-col md:flex-row gap-10 md:gap-[60px] items-center justify-center">
          <img src="/guia/garantia.webp" alt="Garantia de 7 dias" loading="lazy" className="w-[240px] md:w-[300px] h-auto flex-shrink-0" />
          <div className="flex flex-col gap-6 items-start text-center md:text-left">
            <h2 className="text-[26px] md:text-[30px] font-medium text-white max-w-[346px] leading-[1.25]" style={{ fontFamily: FONT }}>
              Garantia de 7 Dias Sem Risco Pra Você
            </h2>
            <Lead className="text-white max-w-[438px]">
              Se você não gostar, devolvo 100% do seu dinheiro sem perguntas.
            </Lead>
            <CTAButton large>Quero meu acesso</CTAButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="comprar" className="relative py-10 px-6 border-t border-white/10">
        <Caption className="text-center text-[#8e8e8e]">
          Página de vendas produzida por <strong className="text-white/80 font-semibold">Niel Hart.</strong>
        </Caption>
      </footer>
    </div>
  );
}

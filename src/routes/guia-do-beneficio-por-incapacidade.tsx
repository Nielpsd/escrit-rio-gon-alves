import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/guia-do-beneficio-por-incapacidade")({
  head: () => ({
    meta: [
      { title: "Guia do Benefício por Incapacidade — Dr. Renan Gonçalves" },
      { name: "description", content: "Aprenda a conseguir seu Benefício por Incapacidade sem precisar de intermediários ou advogado. Passo a passo com um ex-gerente do INSS." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: GuiaPage,
});

const CTA_URL = "#comprar";
const FONT = "'Space Grotesk', system-ui, sans-serif";

/* ── tipografia — inline style vence regra global h1-h4 ── */
function Headline({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h1 className={`text-[26px] md:text-[36px] font-bold leading-[1.15] ${className}`} style={{ fontFamily: FONT, color: "#fff" }}>{children}</h1>;
}
function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-[24px] md:text-[30px] font-bold leading-[1.2] ${className}`} style={{ fontFamily: FONT, color: "#fff" }}>{children}</h2>;
}
function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-[17px] md:text-[19px] font-bold leading-[1.25] ${className}`} style={{ fontFamily: FONT, color: "#fff" }}>{children}</h3>;
}
function Lead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[15px] md:text-[17px] leading-[1.5] font-light ${className}`}>{children}</p>;
}
function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[14px] md:text-[15px] leading-[1.45] ${className}`}>{children}</p>;
}
function Caption({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[12px] md:text-[13px] ${className}`}>{children}</p>;
}
function GradientText({ children }: { children: React.ReactNode }) {
  return <span className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] bg-clip-text text-transparent">{children}</span>;
}
function CTAButton({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={CTA_URL}
      className={`inline-flex items-center justify-center bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-bold uppercase rounded-[10px] transition-all hover:brightness-110 hover:-translate-y-0.5 ${large ? "px-7 py-3.5 text-[14px] md:text-[15px]" : "px-6 py-3 text-[13px]"}`}
      style={{ fontFamily: FONT, boxShadow: "0 0 24px rgba(197,110,255,0.3)" }}
    >
      {children}
    </a>
  );
}

/* ── dados ── */
const FEATURES = [
  { title: "Descubra se você tem direito", desc: "Entenda quem pode pedir o benefício e quem não se encaixa nas regras." },
  { title: "Organize seus documentos", desc: "Saiba quais laudos e papéis juntar com clareza e sem erro." },
  { title: "Monte seu pedido no Meu INSS", desc: "Aprenda como fazer tudo sozinho pelo aplicativo, sem depender de ninguém." },
  { title: "Veja exatamente onde clicar", desc: "Acompanhe na tela, passo a passo, tudo o que precisa fazer." },
  { title: "Prepare-se pra perícia médica", desc: "Saiba o que dizer, o que levar e o que não fazer na hora da avaliação." },
  { title: "Peça prorrogação do jeito certo", desc: "Entenda quando e como renovar o benefício, evitando negativas." },
  { title: "Acompanhe seu pedido com segurança", desc: "Veja como monitorar todo o processo até a resposta do INSS." },
  { title: "Conquiste seu direito sem depender de outros", desc: "Você mesmo faz tudo, sem gastar com advogado ou cair em golpe." },
  { title: "Evite os erros que causam negativa", desc: "Aprenda o que leva o INSS a negar mesmo de quem tem direito." },
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
  { q: "Mas será que eu vou conseguir fazer sozinho(a) mesmo?", a: "Sim. O Guia foi feito justamente para quem nunca mexeu com isso. Cada passo é mostrado na tela, com linguagem simples." },
  { q: "E se eu não tiver todos os documentos?", a: "Você vai aprender exatamente quais documentos são necessários e como conseguir cada um, mesmo que ainda não tenha tudo em mãos." },
  { q: "E se eu tiver dúvidas?", a: "O conteúdo é direto ao ponto e cobre as dúvidas mais comuns. Você pode rever as aulas quantas vezes precisar, no seu ritmo." },
  { q: "Preciso ter um laudo médico antes?", a: "O Guia explica qual tipo de laudo o INSS espera e como organizar isso antes de fazer o pedido." },
  { q: "E se eu fizer errado e o INSS negar?", a: "O Guia mostra justamente os erros que mais causam negativa e como evitá-los, aumentando suas chances de aprovação." },
  { q: "Tenho medo de mexer no aplicativo Meu INSS...", a: "Você vai ver a tela do aplicativo sendo usada de verdade, clique por clique. É só acompanhar e repetir no seu celular." },
  { q: "E se eu não entender logo de cara?", a: "As aulas são curtas e você assiste no seu tempo, quantas vezes quiser. Nada de pressa nem juridiquês." },
  { q: "Tenho só ensino fundamental, vou conseguir entender?", a: "Com certeza. O Guia foi pensado para qualquer pessoa entender, sem termos técnicos e com explicações simples." },
  { q: "Preciso fazer tudo no mesmo dia?", a: "Não. Você avança no seu ritmo e faz cada etapa quando estiver pronto. O acesso fica disponível pra você." },
  { q: "Posso assistir no celular?", a: "Sim. Você assiste de onde quiser — celular, tablet ou computador." },
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

/* 9 depoimentos únicos para 3 linhas com boa variação */
const TESTIMONIALS = [
  { text: "Nunca imaginei que ia conseguir dar entrada sozinha. Segui o passo a passo e foi aprovado em menos de 20 dias. Economizei mais de R$2.000 que ia gastar com despachante.", name: "Roseli M.", city: "Manaus-AM", avatar: "/guia/avatars/women-1.jpg" },
  { text: "Já tinha tentado duas vezes antes e sempre errava alguma coisa nos documentos. Com o Guia vi exatamente onde estava errando. Agora tô recebendo meu auxílio.", name: "Francisca L.", city: "Fortaleza-CE", avatar: "/guia/avatars/women-2.jpg" },
  { text: "Fui muito bem orientado. O Renan explica de um jeito que qualquer pessoa entende. Meu processo foi aprovado direto, sem recurso nenhum.", name: "Carlos R.", city: "Porto Velho-RO", avatar: "/guia/avatars/men-1.jpg" },
  { text: "Tinha medo de mexer no Meu INSS. Com o Guia é como se você tivesse alguém do lado te mostrando cada clique. Consegui fazer tudo pelo celular sem sair de casa.", name: "Marlene S.", city: "Belém-PA", avatar: "/guia/avatars/women-3.jpg" },
  { text: "Vale cada centavo e mais um pouco. Aprendi o que o INSS realmente analisa na perícia. Fui preparado e saí com o benefício aprovado.", name: "João P.", city: "Cuiabá-MT", avatar: "/guia/avatars/men-2.jpg" },
  { text: "Em uma tarde eu já tinha montado meu pedido do jeito certo. Conteúdo direto, sem enrolação. Dois meses depois o dinheiro caiu na conta.", name: "Antônia F.", city: "Teresina-PI", avatar: "/guia/avatars/women-4.jpg" },
  { text: "Tentei sozinho no INSS três vezes e levei negativa nas três. Com o Guia entendi o que estava faltando. Na quarta tentativa aprovei na primeira análise.", name: "Raimundo A.", city: "São Luís-MA", avatar: "/guia/avatars/men-1.jpg" },
  { text: "Não tenho estudo mas entendi tudo. Linguagem simples e muito clara. O Dr. Renan realmente sabe o que está ensinando, dá pra sentir a experiência de quem já viveu isso.", name: "Benedita C.", city: "Santarém-PA", avatar: "/guia/avatars/women-2.jpg" },
  { text: "Minha filha me ajudou a acessar o Guia e eu mesma fiz todo o processo. 63 anos, nunca mexi muito em aplicativo, e consegui. Fico muito grata.", name: "Aparecida R.", city: "Imperatriz-MA", avatar: "/guia/avatars/women-3.jpg" },
];

/* ── componentes ── */
function ModuleCard({ mod }: { mod: (typeof MODULES)[0] }) {
  return (
    <div className="relative h-[400px] w-[270px] flex-shrink-0 rounded-[10px] overflow-hidden bg-[#1a1a1a]">
      <img src={mod.img} alt={mod.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent" />
      <div className="absolute bottom-7 left-0 right-0 px-4 flex flex-col gap-2.5 items-center text-center">
        <span className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-medium text-[12px] px-4 py-1 rounded-[6px]" style={{ fontFamily: FONT }}>
          MÓDULO {mod.num}
        </span>
        <h3 className="text-white font-bold text-[20px] leading-[1.2] text-center" style={{ fontFamily: FONT }}>{mod.title}</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-gradient-to-r from-[#cf88ff] to-[#c56eff]" />
    </div>
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
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const scrolled = window.scrollY - sectionTop;
        const total = section.offsetHeight - window.innerHeight;
        const progress = Math.min(Math.max(scrolled / total, 0), 1);
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

  const header = (
    <>
      <SectionHeading className="mb-5">
        Tudo o que você precisa saber <GradientText>está aqui dentro.</GradientText>
      </SectionHeading>
      <Lead className="text-white/80 max-w-2xl">
        Você assiste a um pedido real sendo feito na tela, clicando e anexando cada item pra{" "}
        <strong className="font-semibold text-white">copiar e fazer igual.</strong>{" "}
        Aulas curtas, linguagem simples, sem enrolação.
      </Lead>
    </>
  );

  return (
    <>
      {/* Desktop — pin + horizontal scroll driven by page scroll */}
      <section ref={sectionRef} className="hidden lg:block relative" style={{ height: "350vh" }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-[1280px] w-full mx-auto px-6 mb-10">{header}</div>
          <div className="overflow-visible">
            <div
              ref={trackRef}
              className="flex gap-5 will-change-transform"
              style={{ paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))", paddingRight: "80px" }}
            >
              {MODULES.map((mod) => <ModuleCard key={mod.num} mod={mod} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile — swipe nativo */}
      <section className="lg:hidden relative py-14">
        <div className="max-w-[1280px] mx-auto px-6 mb-7">{header}</div>
        <div className="overflow-x-auto pb-4 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 w-max">
            {MODULES.map((mod) => <ModuleCard key={mod.num} mod={mod} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen((v) => !v)} className="w-full text-left bg-white/[0.04] hover:bg-white/[0.07] rounded-[10px] px-5 py-4 transition-colors" style={{ fontFamily: FONT }}>
      <div className="flex items-center justify-between gap-4">
        <span className="text-[#ced4da] text-[14px] md:text-[15px] leading-snug">{q}</span>
        <span className={`grid place-items-center w-6 h-6 rounded-[4px] bg-white/[0.06] text-[#f8f9fa] text-xs flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
      </div>
      {open && <p className="mt-3 text-[#a2a2a2] text-[13px] leading-relaxed">{a}</p>}
    </button>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="bg-[#f2f2f2] rounded-[16px] p-6 flex flex-col gap-3 w-[280px] flex-shrink-0" style={{ fontFamily: FONT }}>
      <svg width="22" height="18" viewBox="0 0 30 24" fill="none" aria-hidden>
        <path d="M0 24V14.4C0 10.4 1.2 7.07 3.6 4.4 6 1.73 9.2 0.13 13.2 0v4C10.8 4.4 8.93 5.33 7.6 6.8 6.4 8.27 5.8 10 5.8 12h5v12H0Zm13.8 0V14.4c0-4 1.2-7.33 3.6-10C19.8 1.73 23 0.13 27 0v4c-2.4 0.4-4.27 1.33-5.6 2.8-1.2 1.47-1.8 3.2-1.8 5.2h5v12h-10.8Z" fill="#cf88ff" />
      </svg>
      <p className="text-[#131313] text-[13px] leading-[1.45] flex-1">{t.text}</p>
      <div className="flex items-center gap-2.5 mt-1">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#ddd]">
          <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-[#131313] text-[14px] leading-none">{t.name}</p>
          <p className="text-[#131313]/60 text-[12px] mt-0.5">{t.city}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const SPEED = 0.55; // px horizontal per px vertical scroll (within section)
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // entered: 0 when section top hits bottom of screen; grows as user scrolls
        const entered = Math.max(0, vh - rect.top);
        if (r1.current) r1.current.style.transform = `translate3d(${-entered * SPEED}px,0,0)`;
        if (r2.current) r2.current.style.transform = `translate3d(${-800 + entered * SPEED}px,0,0)`;
        if (r3.current) r3.current.style.transform = `translate3d(${-400 - entered * SPEED * 0.7}px,0,0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  // 3 rows with different ordering; triple each for infinite feel
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)];
  const row3 = [...TESTIMONIALS.slice(6), ...TESTIMONIALS.slice(0, 6), ...TESTIMONIALS.slice(6), ...TESTIMONIALS.slice(0, 6)];

  return (
    <section ref={ref} className="relative py-16 md:py-20" style={{ overflow: "hidden" }}>
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-10 items-center mb-12">
        <div className="flex -space-x-3">
          {TESTIMONIALS.slice(0, 6).map((t) => (
            <div key={t.name} className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#cf88ff] bg-[#1a1a1a]">
              <img src={t.avatar} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <SectionHeading className="text-center max-w-[780px] !font-normal">
          Quem seguiu o passo a passo já está{" "}
          <span className="font-bold"><GradientText>recebendo o benefício</GradientText></span>
        </SectionHeading>
      </div>

      <div className="flex flex-col gap-4">
        <div ref={r1} className="flex gap-4 w-max px-4 will-change-transform">
          {row1.map((t, i) => <TestimonialCard key={"a" + i} t={t} />)}
        </div>
        <div ref={r2} className="flex gap-4 w-max px-4 will-change-transform" style={{ transform: "translate3d(-800px,0,0)" }}>
          {row2.map((t, i) => <TestimonialCard key={"b" + i} t={t} />)}
        </div>
        <div ref={r3} className="flex gap-4 w-max px-4 will-change-transform" style={{ transform: "translate3d(-400px,0,0)" }}>
          {row3.map((t, i) => <TestimonialCard key={"c" + i} t={t} />)}
        </div>
      </div>
    </section>
  );
}

/* ── página ── */
function GuiaPage() {
  return (
    /* overflow-x-clip em vez de hidden: não cria novo contexto de formatação,
       permitindo que position:sticky funcione na seção de módulos */
    <div className="bg-[#131313] text-white relative" style={{ fontFamily: FONT, overflowX: "clip" }}>

      {/* ── S01 HERO ── */}
      <section className="relative min-h-[500px] md:h-[720px] flex items-center">
        <img src="/guia/hero-bg.webp" alt="" fetchPriority="high" loading="eager" className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center pointer-events-none select-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/85 md:via-[#131313]/55 to-[#131313]/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1280px] px-6 w-full">
          {/* max-w-[420px] — container de copy mais estreito */}
          <div className="max-w-[420px] flex flex-col gap-6 md:gap-7">
            <div className="flex flex-col gap-4">
              <Headline>
                Aprenda a Conseguir seu <GradientText>Benefício por Incapacidade</GradientText>{" "}
                Sem Precisar de Intermediários ou Algum Advogado.
              </Headline>
              <Lead className="text-white/85">
                Sem enrolação, sem depender dos outros, só o que funciona. Com a ajuda de um ex-gerente do INSS,{" "}
                <strong className="font-semibold text-white">você vai descobrir o passo a passo</strong>{" "}
                para pedir, montar e acompanhar seu processo{" "}
                <strong className="font-semibold text-white">direto no Meu INSS.</strong>
              </Lead>
            </div>
            <CTAButton large>Quero aprender agora</CTAButton>
            <div className="flex flex-col gap-1.5">
              <Caption className="text-white/80 !text-[13px]">87% das vagas já estão preenchidas</Caption>
              <div className="h-1.5 bg-white/15 rounded-full overflow-hidden w-[240px] max-w-full">
                <div className="h-full w-[87%] bg-gradient-to-r from-[#cf88ff] to-[#c56eff] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAIXA ── */}
      <div className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] py-[9px] relative z-10" style={{ boxShadow: "0 0 24px rgba(197,110,255,0.4)", overflow: "hidden" }}>
        <div className="flex w-max animate-[marquee_30s_linear_infinite]" style={{ willChange: "transform" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[28px] pr-[28px] whitespace-nowrap font-medium text-[12px] md:text-[13px] uppercase text-[#131313]" style={{ fontFamily: FONT }}>
              <span>Poucas vagas disponíveis</span><span>✦</span><span>Acesso imediato</span><span>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── S02 FEATURES ── */}
      <section className="py-14 md:py-16 px-6">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading className="text-center mb-10">
            Com o Guia do benefício por incapacidade, <GradientText>você vai conseguir:</GradientText>
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-[rgba(26,26,26,0.5)] border border-[#4c4c4c] rounded-[10px] p-6 flex flex-col gap-3">
                <CardTitle>{f.title}</CardTitle>
                <div className="h-px w-full bg-[#4c4c4c]" />
                <Body className="text-[#a2a2a2]">{f.desc}</Body>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S03 INSTRUTOR ── */}
      <section className="py-14 md:py-16 px-6">
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <div className="flex flex-row gap-3 justify-center flex-shrink-0">
            <div className="w-[160px] md:w-[220px] h-[340px] md:h-[480px] rounded-[16px] overflow-hidden shadow-[0px_0px_25px_0px_rgba(0,0,0,0.25)] mt-10">
              <img src="/guia/renan01.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="w-[200px] md:w-[280px] h-[400px] md:h-[540px] rounded-[16px] overflow-hidden shadow-[0px_0px_25px_0px_rgba(0,0,0,0.25)]">
              <img src="/guia/renan03.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-[500px]">
            <SectionHeading>
              Quem vai te ensinar é quem já esteve <GradientText>do outro lado do balcão.</GradientText>
            </SectionHeading>
            <div className="space-y-3">
              <Body className="!text-[16px] text-white">
                Sou <strong className="font-bold">Renan Gonçalves,</strong> advogado especialista em benefícios do INSS e ex-gerente de agência do próprio INSS.
              </Body>
              <Body className="!text-[15px] text-white/80 font-light">
                Passei anos analisando pedidos de dentro do sistema, entendendo o que realmente dá certo e o que faz as pessoas saírem de mãos abanando.
              </Body>
              <Body className="!text-[15px] font-light">
                <span className="text-white/80">Hoje, ajudo pessoas comuns a conquistarem seus direitos. </span>
                <strong className="font-semibold text-white">E criei este Guia exatamente pra isso:</strong>
                <span className="text-white/80"> pra que você possa pedir seu benefício </span>
                <strong className="font-semibold text-white">sem depender de intermediários,</strong>
                <span className="text-white/80"> e sem errar no processo.</span>
              </Body>
              <p className="text-[18px] md:text-[20px] font-bold leading-[1.25] text-white" style={{ fontFamily: FONT }}>
                É o que eu faria se fosse pra mim ou pra alguém da minha família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S04 MÓDULOS ── */}
      <ModulesSection />

      {/* ── S05 PARA QUEM É ── */}
      <section className="py-14 md:py-16 px-6">
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
          {/* imagem maior — flex-[1.3] dá mais espaço ao iPad */}
          <div className="flex-[1.3] flex justify-center">
            <img src="/guia/ipad-s05.webp" alt="Guia do benefício por incapacidade" loading="lazy" className="w-full max-w-[720px] h-auto" />
          </div>
          <div className="flex flex-col gap-7 items-start flex-shrink-0 w-full lg:w-[400px]">
            <SectionHeading>Para quem é?</SectionHeading>
            <div className="flex flex-col w-full">
              {PARA_QUEM.map((item, i) => (
                <div key={i} className="border-b border-white/10 last:border-0">
                  <div className="flex gap-3 items-center py-4">
                    <img src="/guia/check.svg" alt="" className="w-[36px] h-[36px] flex-shrink-0" />
                    <Body className="text-white/90 !text-[15px]">{item}</Body>
                  </div>
                </div>
              ))}
            </div>
            <CTAButton large>Quero aprender agora</CTAButton>
          </div>
        </div>
      </section>

      {/* ── S06 FAQ ── */}
      <section className="py-14 md:py-16 px-6">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-10 items-center">
          <SectionHeading className="text-center">Perguntas frequentes</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
            {FAQ.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* ── S07 COMPARAÇÃO + PREÇO ── */}
      <section className="py-14 md:py-16 px-6">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <SectionHeading className="flex-1">
              <GradientText>Tá na sua mão:</GradientText> escolher o caminho certo ou continuar tentando no escuro
            </SectionHeading>
            <Lead className="flex-1 text-white/80 lg:pt-1">
              Você tem duas opções a partir daqui. A escolha que fizer hoje vai definir se você finalmente conquista seu benefício{" "}
              <strong className="font-semibold text-white">ou continua travado por erros simples que poderiam ter sido evitados.</strong>
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0f0f0f] border border-[#4c4c4c] rounded-[16px] p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-red-500/15 text-red-400 text-base flex-shrink-0">✗</span>
                <CardTitle>Continuar tentando no escuro</CardTitle>
              </div>
              <div className="h-px w-full bg-[#4c4c4c]" />
              <Body className="text-[#a2a2a2]">Tentar sozinho, errar documentos, não saber o que o INSS realmente analisa e aumentar o risco de ter o pedido negado mais uma vez.</Body>
            </div>
            <div className="bg-[#0f0f0f] border border-[#cf88ff]/50 rounded-[16px] p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-[#cf88ff]/15 text-[#cf88ff] text-base flex-shrink-0">✓</span>
                <CardTitle>Aprender com quem já esteve dentro do INSS</CardTitle>
              </div>
              <div className="h-px w-full bg-[#cf88ff]/20" />
              <Body className="text-[#a2a2a2]">Aprender em poucas horas, com quem já trabalhou dentro do INSS, como montar o pedido certo, sem depender de intermediários.</Body>
            </div>
          </div>

          {/* preço */}
          <div className="flex flex-col lg:flex-row rounded-[32px] overflow-hidden">
            <div className="flex-1 bg-[#0f0f0f] border border-[#4c4c4c] p-8 lg:p-10 flex flex-col gap-6 lg:rounded-l-[32px] rounded-t-[32px] lg:rounded-tr-none">
              <CardTitle className="!text-[22px] md:!text-[26px] max-w-[320px]">
                Você vai aprender com quem já esteve dentro do INSS:
              </CardTitle>
              <ul className="flex flex-col gap-2.5">
                {PRICE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/90 text-[14px] leading-snug" style={{ fontFamily: FONT }}>
                    <span className="text-[#cf88ff] mt-0.5 flex-shrink-0">➤</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-white p-8 lg:p-10 flex flex-col gap-4 items-center justify-center text-center lg:rounded-r-[32px] rounded-b-[32px] lg:rounded-bl-none">
              <p className="text-[#131313] text-[16px] md:text-[18px]" style={{ fontFamily: FONT }}>
                De: <span className="line-through decoration-[#fe2a2a]">R$ <span className="text-[#fe2a2a]">597,00</span></span> por apenas:
              </p>
              <p className="leading-none" style={{ fontFamily: FONT }}>
                <span className="text-[#131313] font-bold text-[32px] md:text-[40px]">12x </span>
                <span className="font-bold text-[52px] md:text-[68px] bg-gradient-to-r from-[#cf88ff] to-[#c56eff] bg-clip-text text-transparent">34,13</span>
              </p>
              <p className="text-[#131313] text-[16px] md:text-[18px]" style={{ fontFamily: FONT }}>
                ou <span className="font-medium text-[18px] md:text-[22px]">R$ 330,00</span> à vista
              </p>
              <a
                href={CTA_URL}
                className="mt-1 w-full max-w-[360px] inline-flex items-center justify-center bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-bold uppercase text-[14px] md:text-[15px] rounded-[10px] px-7 py-4 transition-all hover:brightness-110"
                style={{ fontFamily: FONT }}
              >
                Quero meu acesso
              </a>
              <Caption className="text-[#131313]/60 mt-0.5">🔒 Compra segura · Hotmart</Caption>
            </div>
          </div>
        </div>
      </section>

      {/* ── S08 DEPOIMENTOS ── */}
      <TestimonialsSection />

      {/* ── S09 GARANTIA ── */}
      <section className="py-14 md:py-16 px-6">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-center">
          <img src="/guia/garantia.webp" alt="Garantia de 7 dias" loading="lazy" className="w-[220px] md:w-[280px] h-auto flex-shrink-0" />
          <div className="flex flex-col gap-5 items-start text-center md:text-left">
            <h2 className="text-[24px] md:text-[28px] font-medium text-white max-w-[340px] leading-[1.25]" style={{ fontFamily: FONT }}>
              Garantia de 7 Dias Sem Risco Pra Você
            </h2>
            <Lead className="text-white/80 max-w-[400px]">
              Se você não gostar, devolvo 100% do seu dinheiro sem perguntas.
            </Lead>
            <CTAButton large>Quero meu acesso</CTAButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="comprar" className="py-8 px-6 border-t border-white/10">
        <Caption className="text-center text-[#8e8e8e]">
          Página de vendas produzida por <strong className="text-white/70 font-semibold">Niel Hart.</strong>
        </Caption>
      </footer>
    </div>
  );
}

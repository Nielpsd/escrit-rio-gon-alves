import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/guia-do-beneficio-por-incapacidade")({
  head: () => ({
    meta: [
      { title: "Guia do Benefício por Incapacidade — Dr. Renan Gonçalves" },
      { name: "description", content: "Aprenda a conseguir seu Benefício por Incapacidade sem precisar de intermediários ou advogado." },
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
const F = "'Space Grotesk', system-ui, sans-serif";
const SEC = "py-24 md:py-28 px-6"; // espaçamento padrão entre seções

/* ── helpers de animação ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6, delay },
});
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.55, delay },
});
const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.65, delay },
});
const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.65, delay },
});
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── tipografia (inline style vence regra global h1-h4) ── */
const H1 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h1 className={`text-[26px] md:text-[36px] font-bold leading-[1.15] ${className}`} style={{ fontFamily: F, color: "#fff" }}>{children}</h1>
);
const H2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-[22px] md:text-[28px] font-bold leading-[1.2] ${className}`} style={{ fontFamily: F, color: "#fff" }}>{children}</h2>
);
const H3 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-[16px] md:text-[18px] font-bold leading-[1.25] ${className}`} style={{ fontFamily: F, color: "#fff" }}>{children}</h3>
);
const Lead = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[15px] md:text-[16px] leading-[1.55] font-light ${className}`}>{children}</p>
);
const Small = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[13px] md:text-[14px] leading-[1.45] ${className}`}>{children}</p>
);
const Tiny = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[11px] md:text-[12px] ${className}`}>{children}</p>
);
const Grad = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] bg-clip-text text-transparent">{children}</span>
);
const CTA = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={CTA_URL}
    className={`w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-bold uppercase rounded-[10px] px-12 py-4 sm:py-3.5 text-[14px] transition-all hover:brightness-110 hover:-translate-y-0.5 ${className}`}
    style={{ fontFamily: F, boxShadow: "0 0 24px rgba(197,110,255,0.3)" }}
  >
    {children}
  </a>
);

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
  { num: "01", title: "Entenda se você tem direito", img: "/guia/mod01.webp?v=2" },
  { num: "02", title: "Carência, qualidade e incapacidade", img: "/guia/mod02.webp?v=2" },
  { num: "03", title: "Documentos e laudos corretos", img: "/guia/mod03.webp?v=2" },
  { num: "04", title: "Como enviar tudo no Meu INSS", img: "/guia/mod04.webp?v=2" },
  { num: "05", title: "O que fazer na perícia médica", img: "/guia/mod05.webp?v=2" },
  { num: "06", title: "Como pedir prorrogação", img: "/guia/mod06.webp?v=2" },
  { num: "07", title: "Tipos de benefício e diferenças", img: "/guia/mod07.webp?v=2" },
  { num: "08", title: "Reabilitação profissional", img: "/guia/mod08.webp?v=2" },
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

/* 18 depoimentos em 3 fileiras — 6 únicos por fileira, sem repetição de avatar dentro da mesma linha */
const T_ROW1 = [
  { text: "Nunca imaginei que ia conseguir dar entrada sozinha. Segui o passo a passo e foi aprovado em menos de 20 dias. Economizei mais de R$2.000 que ia gastar com despachante.", name: "Roseli M.", city: "Manaus-AM", avatar: "/guia/avatars/women-1.jpg" },
  { text: "Já tinha tentado duas vezes antes e sempre errava nos documentos. Com o Guia vi exatamente onde estava errando. Agora tô recebendo meu auxílio há três meses.", name: "Francisca L.", city: "Fortaleza-CE", avatar: "/guia/avatars/women-2.jpg" },
  { text: "Fui muito bem orientado. O Renan explica de um jeito que qualquer pessoa entende. Meu processo foi aprovado direto, sem recurso nenhum.", name: "Carlos R.", city: "Porto Velho-RO", avatar: "/guia/avatars/men-1.jpg" },
  { text: "Comprei sem muita expectativa, achei que seria complicado. Mas as aulas são tão diretas que em dois dias já tinha feito meu pedido completo. Fui aprovado.", name: "Edivaldo N.", city: "Natal-RN", avatar: "/guia/avatars/men-4.jpg" },
  { text: "Tava completamente perdida. Assistindo o Guia aprendi que o laudo que eu tinha nem era o certo. Corrigi, enviei e em três semanas saiu meu benefício.", name: "Simone A.", city: "Recife-PE", avatar: "/guia/avatars/women-7.jpg" },
  { text: "Minha sogra nunca usou aplicativo na vida. A gente assistiu o Guia junto e ela deu entrada sozinha no celular. Aprovada. Incrível.", name: "Tatiana B.", city: "Goiânia-GO", avatar: "/guia/avatars/women-6.jpg" },
];
const T_ROW2 = [
  { text: "Tinha medo de mexer no Meu INSS. Com o Guia é como se você tivesse alguém do lado te mostrando cada clique. Consegui fazer tudo pelo celular sem sair de casa.", name: "Marlene S.", city: "Belém-PA", avatar: "/guia/avatars/women-3.jpg" },
  { text: "Vale cada centavo. Aprendi o que o INSS realmente analisa na perícia. Fui preparado e saí com o benefício aprovado na primeira análise. Não precisei de advogado.", name: "João P.", city: "Cuiabá-MT", avatar: "/guia/avatars/men-2.jpg" },
  { text: "Em uma tarde eu já tinha montado meu pedido do jeito certo. Conteúdo direto, sem enrolação. Dois meses depois o dinheiro caiu na conta.", name: "Antônia F.", city: "Teresina-PI", avatar: "/guia/avatars/women-4.jpg" },
  { text: "Achei que precisava de advogado pra tudo. Com o Guia entendi que dá pra fazer sozinho, do jeitinho certo. Economizei muito e o benefício foi aprovado.", name: "Sebastião O.", city: "Macapá-AP", avatar: "/guia/avatars/men-3.jpg" },
  { text: "Fiz o pedido em dois dias, direto pelo celular. O Renan mostra tudo na tela, não tem como errar. Minha aprovação saiu em menos de um mês.", name: "Lindalva C.", city: "Palmas-TO", avatar: "/guia/avatars/women-5.jpg" },
  { text: "Já tinha gastado R$800 com despachante e levei negativa. Com o Guia aprendi onde errei. Refiz tudo sozinho e aprovei. Não precisei gastar mais nada.", name: "Valdemar T.", city: "Maceió-AL", avatar: "/guia/avatars/women-1.jpg" },
];
const T_ROW3 = [
  { text: "Tentei sozinho no INSS três vezes e levei negativa. Com o Guia entendi o que estava faltando. Na quarta tentativa aprovei na primeira análise.", name: "Raimundo A.", city: "São Luís-MA", avatar: "/guia/avatars/men-1.jpg" },
  { text: "Não tenho estudo mas entendi tudo. Linguagem simples e muito clara. Dá pra sentir a experiência de quem viveu isso por dentro. Consegui meu benefício.", name: "Benedita C.", city: "Santarém-PA", avatar: "/guia/avatars/women-2.jpg" },
  { text: "63 anos, nunca mexi muito em aplicativo, e consegui dar entrada sozinha. Minha filha me ajudou só na primeira vez. Estou muito grata por esse material.", name: "Aparecida R.", city: "Imperatriz-MA", avatar: "/guia/avatars/women-5.jpg" },
  { text: "Fiquei mais de um ano sem pedir por não saber como fazer. O Guia mostrou que era mais simples do que eu pensava. Aprovei e o dinheiro já tá na conta.", name: "Ivoneide P.", city: "Aracaju-SE", avatar: "/guia/avatars/men-4.jpg" },
  { text: "Minha esposa estava afastada há meses sem benefício. Em uma semana com o Guia fizemos o pedido juntos, certinho. A aprovação veio rápido.", name: "Gilson M.", city: "Campo Grande-MS", avatar: "/guia/avatars/women-7.jpg" },
  { text: "Pensei que seria difícil porque não tenho intimidade com tecnologia. Mas o Guia é muito prático. Consegui tudo pelo celular, aprovação em 18 dias.", name: "Eunice V.", city: "Porto Velho-RO", avatar: "/guia/avatars/men-2.jpg" },
];

/* ── componentes ── */

function ModuleCard({ mod }: { mod: (typeof MODULES)[0] }) {
  return (
    <motion.div
      className="relative h-[400px] w-[270px] flex-shrink-0 rounded-[10px] overflow-hidden bg-[#1a1a1a] cursor-pointer"
      whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.25 } }}
    >
      <img src={mod.img} alt={mod.title} loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent" />
      <div className="absolute bottom-7 left-0 right-0 px-4 flex flex-col gap-2 items-center text-center">
        <span className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-medium text-[12px] px-4 py-1 rounded-[6px]" style={{ fontFamily: F }}>
          MÓDULO {mod.num}
        </span>
        <h3 className="text-white font-bold text-[20px] leading-[1.2] text-center" style={{ fontFamily: F }}>{mod.title}</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-gradient-to-r from-[#cf88ff] to-[#c56eff]" />
    </motion.div>
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
    if (!isDesktop) { if (trackRef.current) trackRef.current.style.transform = ""; return; }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;
        const sTop = section.getBoundingClientRect().top + window.scrollY;
        const scrolled = window.scrollY - sTop;
        const total = section.offsetHeight - window.innerHeight;
        const p = Math.min(Math.max(scrolled / total, 0), 1);
        const maxX = Math.max(track.scrollWidth - window.innerWidth + 48, 0);
        track.style.transform = `translate3d(${-p * maxX}px,0,0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [isDesktop]);

  const header = (
    <div className="max-w-[1280px] w-full mx-auto px-6 mb-10">
      <H2 className="mb-4">Tudo o que você precisa saber <Grad>está aqui dentro.</Grad></H2>
      <Lead className="text-white/70 max-w-2xl">
        Você assiste a um pedido real sendo feito na tela, clicando e anexando cada item pra{" "}
        <strong className="font-semibold text-white">copiar e fazer igual.</strong>{" "}
        Aulas curtas, linguagem simples, sem enrolação.
      </Lead>
    </div>
  );

  return (
    <>
      <section ref={sectionRef} className="hidden lg:block relative" style={{ height: "440vh" }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {header}
          <div className="overflow-visible">
            <div
              ref={trackRef}
              className="flex gap-5 will-change-transform"
              style={{ paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))", paddingRight: "0px" }}
            >
              {MODULES.map((mod) => <ModuleCard key={mod.num} mod={mod} />)}
              <div className="w-[50px] flex-shrink-0" aria-hidden />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden relative py-24">
        {header}
        <div className="overflow-x-auto pb-4 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 w-max">
            {MODULES.map((mod) => <ModuleCard key={mod.num} mod={mod} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqColumn({ items, baseIdx, openIdx, setOpenIdx }: {
  items: typeof FAQ; baseIdx: number; openIdx: number | null; setOpenIdx: (i: number | null) => void;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, i) => {
        const idx = baseIdx + i;
        const open = openIdx === idx;
        return (
          <button
            key={item.q}
            onClick={() => setOpenIdx(open ? null : idx)}
            className="w-full text-left bg-white/[0.04] hover:bg-white/[0.07] rounded-[10px] px-5 py-4 transition-colors"
            style={{ fontFamily: F }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#ced4da] text-[14px] leading-snug">{item.q}</span>
              <span
                className="grid place-items-center w-6 h-6 rounded-[4px] bg-white/[0.06] text-[#f8f9fa] text-xs flex-shrink-0 transition-transform duration-300"
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              >⌄</span>
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
            >
              <p className="mt-3 text-[#a2a2a2] text-[13px] leading-relaxed">{item.a}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full items-start">
      <FaqColumn items={FAQ.slice(0, 6)} baseIdx={0} openIdx={openIdx} setOpenIdx={setOpenIdx} />
      <FaqColumn items={FAQ.slice(6)} baseIdx={6} openIdx={openIdx} setOpenIdx={setOpenIdx} />
    </div>
  );
}

function TCard({ t }: { t: { text: string; name: string; city: string; avatar: string } }) {
  return (
    <div className="bg-[#f2f2f2] rounded-[16px] p-6 flex flex-col gap-3 w-[300px] flex-shrink-0" style={{ fontFamily: F }}>
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
  // 2 cópias de cada row para loop seamless (CSS marquee anima -50%)
  const row1 = [...T_ROW1, ...T_ROW1];
  const row2 = [...T_ROW2, ...T_ROW2];
  const row3 = [...T_ROW3, ...T_ROW3];

  return (
    <section className="relative py-24 md:py-28" style={{ overflow: "hidden" }}>
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-8 items-center mb-12">
        <div className="flex -space-x-3">
          {[...T_ROW1, ...T_ROW2, ...T_ROW3].slice(0, 6).map((t) => (
            <div key={t.name} className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#cf88ff] bg-[#1a1a1a]">
              <img src={t.avatar} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <H2 className="text-center max-w-[720px] !font-normal">
          Quem seguiu<br />
          o passo a passo já está<br />
          <strong className="font-bold"><Grad>recebendo o benefício</Grad></strong>
        </H2>
      </div>

      {/* CSS marquee puro — GPU-composited, 60fps sem JS */}
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max" style={{ animation: "tLeft 38s linear infinite" }}>
            {row1.map((t, i) => <TCard key={"a" + i} t={t} />)}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max" style={{ animation: "tRight 46s linear infinite" }}>
            {row2.map((t, i) => <TCard key={"b" + i} t={t} />)}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max" style={{ animation: "tLeft 32s linear infinite" }}>
            {row3.map((t, i) => <TCard key={"c" + i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── badge circular de garantia ── */
function GarantiaBadge() {
  return (
    <div className="w-[200px] md:w-[240px] flex-shrink-0">
      <svg viewBox="0 0 280 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gbPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cf88ff" />
            <stop offset="100%" stopColor="#c56eff" />
          </linearGradient>
          <radialGradient id="gbBg" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#200f32" />
            <stop offset="100%" stopColor="#0c0c0c" />
          </radialGradient>
          {/*
            Trilha circular completa (4 arcos) — raio 99, centro (140,140).
            Começa no topo (140,41). Todo texto fica na mesma direção;
            o grupo inteiro gira junto via animateTransform.
          */}
          <path
            id="gbRing"
            d="M 140,41 A 99,99 0 0,1 239,140 A 99,99 0 0,1 140,239 A 99,99 0 0,1 41,140 A 99,99 0 0,1 140,41 Z"
          />
        </defs>

        {/* brilho externo */}
        <circle cx="140" cy="140" r="139" fill="rgba(197,110,255,0.06)" />

        {/* anel metálico — 3 camadas para profundidade */}
        <circle cx="140" cy="140" r="136" fill="none" stroke="rgba(207,136,255,0.2)" strokeWidth="3" />
        <circle cx="140" cy="140" r="134" fill="none" stroke="url(#gbPurple)" strokeWidth="8" />
        <circle cx="140" cy="140" r="129" fill="none" stroke="rgba(80,20,110,0.55)" strokeWidth="2.5" />

        {/* fundo escuro */}
        <circle cx="140" cy="140" r="127" fill="url(#gbBg)" />

        {/* anéis da faixa de texto — mais próximos do centro */}
        <circle cx="140" cy="140" r="118" fill="none" stroke="rgba(207,136,255,0.3)" strokeWidth="1" />
        <circle cx="140" cy="140" r="89"  fill="none" stroke="rgba(207,136,255,0.3)" strokeWidth="1" />

        {/* grupo de texto girando — animateTransform SVG nativo */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 140 140"
            to="360 140 140"
            dur="18s"
            repeatCount="indefinite"
          />
          <text
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="700"
            fill="#cf88ff"
            letterSpacing="10.2"
          >
            <textPath href="#gbRing" startOffset="0%">
              7 DIAS · GARANTIA · 7 DIAS · GARANTIA ·
            </textPath>
          </text>
        </g>

        {/* "7D" central — fixo, não gira */}
        <text
          x="140"
          y="170"
          textAnchor="middle"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontSize="88"
          fontWeight="800"
          fill="url(#gbPurple)"
        >7D</text>
      </svg>
    </div>
  );
}

/* ── página ── */
function GuiaPage() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const [pH, pB] = [html.style.overflowX, body.style.overflowX];
    html.style.overflowX = "clip";
    body.style.overflowX = "clip";
    return () => { html.style.overflowX = pH; body.style.overflowX = pB; };
  }, []);

  return (
    <div className="bg-[#131313] text-white relative" style={{ fontFamily: F, overflowX: "clip" }}>
      <style>{`
        @keyframes cardGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(197,110,255,0.15), 0 0 0 1px rgba(207,136,255,0.08) inset; }
          50%       { box-shadow: 0 0 60px rgba(197,110,255,0.38), 0 0 0 1px rgba(207,136,255,0.18) inset; }
        }
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(197,110,255,0.4); }
          50%       { box-shadow: 0 0 26px rgba(197,110,255,0.85); }
        }
        @keyframes checkGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(197,110,255,0.3); }
          50%       { box-shadow: 0 0 22px rgba(197,110,255,0.75); }
        }
        .card-glow-pulse  { animation: cardGlow  3s ease-in-out infinite; }
        .badge-glow-pulse { animation: badgeGlow 3s ease-in-out infinite; }
        .check-glow-pulse { animation: checkGlow 2.5s ease-in-out infinite; }
        @keyframes tLeft  { from { transform: translate3d(0,0,0) }    to { transform: translate3d(-50%,0,0) } }
        @keyframes tRight { from { transform: translate3d(-50%,0,0) } to { transform: translate3d(0,0,0) } }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-[140svh] md:min-h-0 md:h-[720px] flex items-end md:items-center pb-12 md:pb-0">
        <picture className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden>
          <source media="(max-width: 767px)" srcSet="/guia/hero-bg-mobile.webp" />
          <img src="/guia/hero-bg.webp" alt="" fetchPriority="high" loading="eager" className="absolute inset-0 w-full h-full object-cover object-top md:object-center" />
        </picture>

        <div className="relative mx-auto max-w-[1280px] px-6 w-full">
          <div className="max-w-[500px] flex flex-col gap-6 md:gap-7">
            <div className="flex flex-col gap-4">
              <motion.div {...fadeUp(0)}>
                <H1>
                  Aprenda a<br className="md:hidden" />
                  {" "}Conseguir seu <Grad>Benefício<br className="md:hidden" />{" "}por Incapacidade</Grad> Sem<br className="md:hidden" />
                  {" "}Ficar Dependente de<br className="md:hidden" />
                  {" "}Intermediários ou<br className="md:hidden" />
                  {" "}Algum Advogado.
                </H1>
              </motion.div>
              <motion.div {...fadeUp(0.15)}>
                <Lead className="text-white/80">
                  Sem enrolação, sem depender dos outros, só o que funciona.{" "}
                  Com a ajuda de um ex-gerente do INSS,{" "}
                  <strong className="font-semibold text-white">você vai descobrir o passo a passo</strong>{" "}
                  para pedir, montar e acompanhar seu processo{" "}
                  <strong className="font-semibold text-white">direto no Meu INSS,</strong>{" "}
                  com base, verdade e responsabilidade.
                </Lead>
              </motion.div>
            </div>
            <motion.div {...fadeUp(0.28)} className="w-full sm:w-fit">
              <CTA>Quero aprender agora</CTA>
            </motion.div>
            <motion.div {...fadeUp(0.38)} className="flex flex-col gap-1.5">
              <Tiny className="text-white/75 !text-[13px]">87% das vagas já estão preenchidas</Tiny>
              <div className="h-1.5 bg-white/15 rounded-full overflow-hidden w-[240px] max-w-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#cf88ff] to-[#c56eff] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAIXA ── */}
      <div className="bg-gradient-to-r from-[#cf88ff] to-[#c56eff] py-[9px] relative z-10" style={{ boxShadow: "0 0 24px rgba(197,110,255,0.4)", overflow: "hidden" }}>
        <div className="flex w-max animate-[marquee_30s_linear_infinite]" style={{ willChange: "transform" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[28px] pr-[28px] whitespace-nowrap font-medium text-[12px] uppercase text-[#131313]" style={{ fontFamily: F }}>
              <span>Poucas vagas disponíveis</span><span>✦</span><span>Acesso imediato</span><span>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURES — grid com divisórias ── */}
      <section className={SEC}>
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fadeUp(0)}>
            <H2 className="text-center mb-12">
              Com o Guia do benefício por incapacidade, <Grad>você vai conseguir:</Grad>
            </H2>
          </motion.div>
          <motion.div
            className="rounded-[16px] overflow-hidden border border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="group bg-[#131313] hover:bg-[#1c1c1c] transition-colors duration-200 p-5 md:p-7 flex flex-col gap-3 cursor-default"
                whileHover={{ backgroundColor: "#1e1e1e", transition: { duration: 0.2 } }}
              >
                <motion.span
                  className="text-[12px] font-semibold tracking-widest uppercase bg-gradient-to-r from-[#cf88ff] to-[#c56eff] bg-clip-text text-transparent"
                  style={{ fontFamily: F }}
                  whileHover={{ letterSpacing: "0.2em", transition: { duration: 0.3 } }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <H3 className="group-hover:text-[#cf88ff] transition-colors duration-200">{f.title}</H3>
                <Small className="text-[#666] group-hover:text-[#888] transition-colors duration-200">{f.desc}</Small>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INSTRUTOR ── */}
      <section className={SEC}>
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <motion.img
            src="/guia/renan03.webp"
            alt="Dr. Renan Gonçalves"
            loading="lazy"
            className="w-full lg:w-[520px] max-h-[380px] sm:max-h-none h-auto flex-shrink-0 rounded-[20px] object-cover"
            style={{ filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.55))" }}
            {...slideLeft(0)}
            whileHover={{ scale: 1.02, filter: "drop-shadow(0px 12px 60px rgba(0,0,0,0.7))", transition: { duration: 0.3 } }}
          />
          <motion.div className="flex flex-col gap-6 flex-1 min-w-0" {...slideRight(0.1)}>
            <H2>Quem vai te ensinar é quem já esteve <Grad>do outro lado do balcão.</Grad></H2>
            <div className="space-y-3">
              <motion.div {...fadeUp(0.2)}>
                <Lead className="text-white">Sou <strong className="font-bold">Renan Gonçalves,</strong> advogado especialista em benefícios do INSS e ex-gerente de agência do próprio INSS.</Lead>
              </motion.div>
              <motion.div {...fadeUp(0.28)}>
                <Lead className="text-white/75 font-light">Passei anos analisando pedidos de dentro do sistema, entendendo o que realmente dá certo e o que faz as pessoas saírem de mãos abanando.</Lead>
              </motion.div>
              <motion.div {...fadeUp(0.36)}>
                <Lead className="font-light">
                  <span className="text-white/75">Hoje, ajudo pessoas comuns a conquistarem seus direitos. </span>
                  <strong className="font-semibold text-white">E criei este Guia exatamente pra isso:</strong>
                  <span className="text-white/75"> pra que você possa pedir seu benefício sem depender de intermediários e sem errar no processo.</span>
                </Lead>
              </motion.div>
              <motion.p
                className="text-[18px] md:text-[20px] font-bold leading-[1.25] text-white"
                style={{ fontFamily: F }}
                {...fadeUp(0.44)}
              >
                É o que eu faria se fosse pra mim ou pra alguém da minha família.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MÓDULOS ── */}
      <ModulesSection />

      {/* ── PARA QUEM É ── */}
      {/* overflow:clip no section evita scrollbar horizontal sem cortar a sombra do iPad */}
      <section className="py-24 md:py-28" style={{ overflow: "clip" }}>
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-0">
          <div className="w-full lg:w-1/2 h-[260px] sm:h-[380px] lg:h-[620px]">
            <img
              src="/guia/ipad.webp"
              alt="Guia do benefício por incapacidade"
              loading="lazy"
              className="w-full h-full object-contain"
              style={{ transform: "scale(1.72)", transformOrigin: "50% 28%" }}
            />
          </div>
          <div className="flex flex-col gap-7 items-start w-full lg:w-1/2 px-6 lg:pl-2 lg:pr-12">
            <motion.div {...fadeUp(0)}><H2>Para quem é?</H2></motion.div>
            <motion.div
              className="flex flex-col w-full"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {PARA_QUEM.map((item, i) => (
                <motion.div key={i} variants={staggerItem} className="border-b border-white/10 last:border-0">
                  <div className="flex gap-3 items-start py-4 group">
                    <motion.img
                      src="/guia/icone.webp"
                      alt=""
                      className="w-[34px] h-[34px] flex-shrink-0 mt-0.5"
                      whileInView={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5, delay: i * 0.1 } }}
                      viewport={{ once: true }}
                    />
                    <Lead className="text-white/85 group-hover:text-white transition-colors duration-200">{item}</Lead>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div {...fadeUp(0.3)} className="w-fit"><CTA>Quero aprender agora</CTA></motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARAÇÃO ── */}
      <section className={SEC}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <motion.div className="flex-1" {...fadeUp(0)}>
              <H2><Grad>Tá na sua mão:</Grad> escolher o caminho certo ou continuar tentando no escuro</H2>
            </motion.div>
            <motion.div className="flex-1" {...fadeUp(0.1)}>
              <Lead className="text-white/75 lg:pt-1 lg:text-right">
                Você tem duas opções a partir daqui. A escolha que fizer hoje vai definir se você finalmente conquista seu benefício{" "}
                <strong className="font-semibold text-white">ou continua travado por erros simples que poderiam ter sido evitados.</strong>
              </Lead>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* card ruim */}
            <motion.div
              className="bg-[#0a0a0a] border border-[#3a3a3a] rounded-[16px] p-5 md:p-7 flex flex-col gap-4 opacity-70"
              {...slideLeft(0.05)}
              whileHover={{ opacity: 0.85, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-red-500/10 text-red-500/70 text-base flex-shrink-0">✗</span>
                <H3 className="!text-white/60">Continuar tentando no escuro</H3>
              </div>
              <div className="h-px w-full bg-[#3a3a3a]" />
              <Small className="text-[#555]">Tentar sozinho, errar documentos, não saber o que o INSS realmente analisa e aumentar o risco de ter o pedido negado mais uma vez.</Small>
            </motion.div>

            {/* card destaque — entrada via framer-motion, glow via CSS animation */}
            <motion.div
              className="relative bg-gradient-to-br from-[#21083a] via-[#160626] to-[#0f0f0f] border border-[#cf88ff]/60 rounded-[16px] p-5 md:p-7 flex flex-col gap-4 card-glow-pulse mt-6 md:mt-0"
              {...slideRight(0.05)}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div
                className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap badge-glow-pulse"
                style={{ fontFamily: F }}
              >
                ✦ Caminho certo
              </div>

              <div className="flex items-center gap-3 mt-2">
                <span
                  className="grid place-items-center w-9 h-9 rounded-full text-[#131313] font-bold text-base flex-shrink-0 check-glow-pulse"
                  style={{ background: "linear-gradient(135deg, #cf88ff, #c56eff)" }}
                >✓</span>
                <H3>Aprender com quem já esteve dentro do INSS</H3>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-[#cf88ff]/40 to-transparent" />
              <Small className="text-white/75">Aprender em poucas horas, com quem já trabalhou dentro do INSS, como montar o pedido certo, sem depender de intermediários.</Small>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PREÇO ── */}
      <section className={SEC}>
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            className="flex flex-col lg:flex-row rounded-[32px] overflow-hidden"
            {...fadeUp(0)}
            whileHover={{ scale: 1.005, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="flex-1 bg-[#0f0f0f] border border-[#4c4c4c] p-8 lg:p-10 flex flex-col gap-6 lg:rounded-l-[32px] rounded-t-[32px] lg:rounded-tr-none"
              {...slideLeft(0.05)}
            >
              <H3 className="!text-[20px] md:!text-[24px] max-w-[320px]">Você vai aprender com quem já esteve dentro do INSS:</H3>
              <motion.ul
                className="flex flex-col gap-2.5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {PRICE_ITEMS.map((item) => (
                  <motion.li key={item} variants={staggerItem} className="flex items-start gap-2.5 text-white/85 text-[14px] leading-snug" style={{ fontFamily: F }}>
                    <span className="text-[#cf88ff] mt-0.5 flex-shrink-0">➤</span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className="flex-1 bg-white p-8 lg:p-10 flex flex-col gap-4 items-center justify-center text-center lg:rounded-r-[32px] rounded-b-[32px] lg:rounded-bl-none"
              {...slideRight(0.05)}
            >
              <p className="text-[#131313] text-[16px] md:text-[17px]" style={{ fontFamily: F }}>
                De: <span className="line-through decoration-[#fe2a2a]">R$ <span className="text-[#fe2a2a]">597,00</span></span> por apenas:
              </p>
              <motion.p
                className="leading-none"
                style={{ fontFamily: F }}
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-[#131313] font-bold text-[24px] md:text-[38px]">12x </span>
                <span className="font-bold text-[42px] md:text-[64px] bg-gradient-to-r from-[#cf88ff] to-[#c56eff] bg-clip-text text-transparent">34,13</span>
              </motion.p>
              <p className="text-[#131313] text-[15px] md:text-[17px]" style={{ fontFamily: F }}>
                ou <span className="font-medium text-[17px] md:text-[20px]">R$ 330,00</span> à vista
              </p>
              <motion.a
                href={CTA_URL}
                className="mt-1 w-full max-w-[340px] inline-flex items-center justify-center bg-gradient-to-r from-[#cf88ff] to-[#c56eff] text-[#131313] font-bold uppercase text-[14px] rounded-[10px] px-7 py-4 sm:py-3.5"
                style={{ fontFamily: F }}
                whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ["0 0 0px rgba(197,110,255,0)", "0 0 20px rgba(197,110,255,0.5)", "0 0 0px rgba(197,110,255,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Quero meu acesso
              </motion.a>
              <Tiny className="text-[#131313]/60 mt-0.5">🔒 Compra segura · Hotmart</Tiny>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <TestimonialsSection />

      {/* ── FAQ ── */}
      <section className={SEC}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-10 items-center">
          <motion.div {...fadeUp(0)}><H2 className="text-center">Perguntas frequentes</H2></motion.div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── GARANTIA ── */}
      <section className={SEC}>
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-center">
          <motion.div {...slideLeft(0)} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <GarantiaBadge />
          </motion.div>
          <motion.div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left" {...slideRight(0.1)}>
            <h2 className="text-[24px] md:text-[28px] font-medium text-white max-w-[340px] leading-[1.25]" style={{ fontFamily: F }}>
              Garantia de 7 Dias<br className="md:hidden" /> Sem Risco Pra Você
            </h2>
            <Lead className="text-white/75 max-w-[400px]">Se você não gostar, devolvo 100% do seu dinheiro sem perguntas.</Lead>
            <motion.div className="w-fit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <CTA>Quero meu acesso</CTA>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer id="comprar" className="py-8 px-6 border-t border-white/10">
        <Tiny className="text-center text-[#8e8e8e]">
          Página de vendas produzida por <strong className="text-white/60 font-semibold">Niel Hart.</strong>
        </Tiny>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guia-do-beneficio-por-incapacidade")({
  head: () => ({
    meta: [
      { title: "Guia do Benefício por Incapacidade — Dr. Renan Gonçalves" },
      {
        name: "description",
        content:
          "Aprenda a conseguir seu Benefício por Incapacidade sem precisar de intermediários. Passo a passo com ex-gerente do INSS.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: GuiaPage,
});

const PURPLE = "from-[#cf88ff] to-[#c56eff]";

const FEATURES = [
  {
    title: "Descubra se você tem direito",
    desc: "Entenda quem realmente pode pedir o benefício e quem não se encaixa nas regras.",
  },
  {
    title: "Organize seus documentos",
    desc: "Saiba quais laudos e papéis precisa juntar com clareza e sem erro.",
  },
  {
    title: "Monte seu pedido no Meu INSS",
    desc: "Aprenda como fazer tudo sozinho pelo aplicativo, sem depender de ninguém.",
  },
  {
    title: "Veja exatamente onde clicar",
    desc: "Você acompanha na tela, passo a passo, tudo o que precisa fazer.",
  },
  {
    title: "Prepare-se pra perícia médica",
    desc: "Saiba o que dizer, o que levar e o que não fazer na hora da avaliação.",
  },
  {
    title: "Peça prorrogação do jeito certo",
    desc: "Entenda quando e como renovar o benefício, evitando negativas.",
  },
  {
    title: "Acompanhe seu pedido com segurança",
    desc: "Veja como monitorar todo o processo até a resposta do INSS.",
  },
  {
    title: "Conquiste seu direito sem depender de outros",
    desc: "Você mesmo faz tudo, sem gastar com advogado ou cair em golpe de intermediário.",
  },
  {
    title: "Evite os erros mais comuns que causam negativa",
    desc: "Aprenda o que leva o INSS a negar pedidos mesmo de quem tem direito e fuja dessas armadilhas.",
  },
];

const MODULES = [
  { num: "01", title: "Entenda se você tem direito", img: "/guia/mod01.webp" },
  { num: "02", title: "Carência, qualidade e incapacidade", img: "/guia/mod02.webp" },
  { num: "03", title: "Documentos e laudos corretos", img: "/guia/mod03.webp" },
  { num: "04", title: "Como enviar tudo no Meu INSS", img: "/guia/mod04.webp" },
  { num: "05", title: "O que fazer na perícia médica", img: "/guia/mod05.webp" },
  { num: "06", title: "Como pedir prorrogação", img: "/guia/mod06.webp" },
  { num: "07", title: "Evite os erros que causam negativa", img: "/guia/mod07.webp" },
  { num: "08", title: "Acompanhe e conquiste seu benefício", img: "/guia/mod08.webp" },
];

const TESTIMONIALS = [
  {
    text: "Eu achei que nunca ia conseguir fazer esse pedido. Já tinha tentado duas vezes e sempre errava alguma coisa. Com o Guia eu vi onde estava errando e fiz tudo certo. Agora tô recebendo meu auxílio e sem depender de ninguém.",
    name: "Roseli M.",
    city: "Manaus-AM",
  },
  {
    text: "Segui o passo a passo certinho e meu pedido foi aprovado na primeira vez. Não precisei pagar nada pra ninguém. O Renan explica de um jeito que qualquer pessoa entende.",
    name: "Francisca L.",
    city: "Fortaleza-CE",
  },
  {
    text: "Tinha medo de errar e ser negado de novo. Com o Guia aprendi o que o INSS realmente analisa. Foi aprovado em menos de 30 dias.",
    name: "Carlos R.",
    city: "Porto Velho-RO",
  },
];

const CTA_URL = "#comprar";

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className={`bg-gradient-to-r ${PURPLE} bg-clip-text text-transparent`}>
      {children}
    </span>
  );
}

function PurpleButton({ href, children, large }: { href: string; children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center bg-gradient-to-r ${PURPLE} text-[#131313] font-bold uppercase rounded-[10px] transition-opacity hover:opacity-90 ${large ? "px-12 py-6 text-xl" : "px-10 py-5 text-base"}`}
    >
      {children}
    </a>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[rgba(26,26,26,0.5)] border border-[#4c4c4c] rounded-[10px] p-8 flex flex-col gap-4">
      <h3 className="text-white font-bold text-xl leading-snug">{title}</h3>
      <hr className="border-[#4c4c4c]" />
      <p className="text-[#a2a2a2] text-base leading-relaxed">{desc}</p>
    </div>
  );
}

function ModuleCard({ mod }: { mod: (typeof MODULES)[0] }) {
  return (
    <div className="relative h-[380px] w-[260px] md:w-[300px] flex-shrink-0 rounded-xl overflow-hidden">
      <img
        src={mod.img}
        alt={mod.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[rgba(19,19,19,0.5)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2 items-center text-center">
        <span className={`bg-gradient-to-r ${PURPLE} text-[#131313] font-bold text-sm px-5 py-1 rounded-lg`}>
          MÓDULO {mod.num}
        </span>
        <h3 className="text-white font-bold text-2xl leading-tight">{mod.title}</h3>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-r ${PURPLE}`} />
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="bg-[#f2f2f2] rounded-2xl p-8 flex flex-col gap-4 flex-shrink-0 w-[320px] md:w-[380px]">
      <svg width="30" height="24" viewBox="0 0 30 24" fill="none" aria-hidden>
        <path d="M0 24V14.4C0 10.4 1.2 7.06667 3.6 4.4C6 1.73333 9.2 0.133333 13.2 0V4C10.8 4.4 8.93333 5.33333 7.6 6.8C6.4 8.26667 5.8 10 5.8 12H10.8V24H0ZM19.2 24V14.4C19.2 10.4 20.4 7.06667 22.8 4.4C25.2 1.73333 28.4 0.133333 32.4 0V4C30 4.4 28.1333 5.33333 26.8 6.8C25.6 8.26667 25 10 25 12H30V24H19.2Z" fill="#cf88ff"/>
      </svg>
      <p className="text-black text-base leading-relaxed">{t.text}</p>
      <div className="flex items-center gap-3 mt-2">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#d0a0ff]/20 flex-shrink-0">
          <img src="/guia/dep-avatar.webp" alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-black text-base leading-none">{t.name}</p>
          <p className="text-[#666] text-sm mt-0.5">{t.city}</p>
        </div>
      </div>
    </div>
  );
}

function GuiaPage() {
  return (
    <div className="bg-[#131313] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif" }}>

      {/* ── S01 HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[600px] md:min-h-[900px] flex items-center">
        <img
          src="/guia/hero-bg.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/90 via-[#131313]/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 w-full">
          <div className="max-w-xl flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-black leading-[1.15]">
                Aprenda a Conseguir seu{" "}
                <GradientText>Benefício por Incapacidade</GradientText>
                {" "}Sem Precisar de Intermediários ou Algum Advogado.
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                Sem enrolação, sem depender dos outros, só o que funciona.
                <br /><br />
                Com a ajuda de um ex-gerente do INSS,{" "}
                <strong className="font-bold text-white">você vai descobrir o passo a passo</strong>{" "}
                para pedir, montar e acompanhar seu processo{" "}
                <strong className="font-bold text-white">direto no Meu INSS,</strong>{" "}
                com base, verdade e responsabilidade.
              </p>
            </div>

            <PurpleButton href={CTA_URL} large>Quero aprender agora</PurpleButton>

            <div className="flex flex-col gap-2">
              <p className="text-white/80 text-base">87% das vagas já estão preenchidas</p>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden w-64">
                <div className="h-full w-[87%] bg-gradient-to-r from-[#cf88ff] to-[#c56eff] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className={`bg-gradient-to-r ${PURPLE} py-4 overflow-hidden`}>
        <div
          className="flex w-max animate-[marquee_30s_linear_infinite] gap-12 items-center"
          style={{ willChange: "transform" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap font-bold text-lg uppercase text-[#131313]">
              <span>Poucas vagas disponíveis</span>
              <span>✦</span>
              <span>Acesso imediato</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── S02 FEATURES ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-14 leading-tight">
            Com o Guia do benefício por incapacidade,{" "}
            <GradientText>você vai conseguir:</GradientText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── S03 INSTRUTOR ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 items-center">
          {/* Fotos */}
          <div className="flex flex-row gap-4 justify-center flex-shrink-0">
            <div className="flex flex-col gap-4">
              <div className="w-[130px] h-[320px] rounded-2xl overflow-hidden shadow-xl">
                <img src="/guia/renan01.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-bottom" />
              </div>
              <div className="w-[130px] h-[200px] rounded-2xl overflow-hidden shadow-xl">
                <img src="/guia/renan02.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-bottom" />
              </div>
            </div>
            <div className="w-[180px] h-[540px] rounded-2xl overflow-hidden shadow-xl self-start">
              <img src="/guia/renan03.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-bottom" />
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Quem vai te ensinar é quem já esteve{" "}
              <GradientText>do outro lado do balcão.</GradientText>
            </h2>
            <div className="space-y-4 text-lg text-white/80 leading-relaxed font-light">
              <p>
                Sou <strong className="font-bold text-white">Renan Gonçalves,</strong>{" "}
                advogado especialista em benefícios do INSS e ex-gerente de agência do próprio INSS.
              </p>
              <p>
                Passei anos analisando pedidos de dentro do sistema, entendendo o que realmente dá certo e o que faz as pessoas saírem de mãos abanando.
              </p>
              <p>
                Hoje, ajudo pessoas comuns a conquistarem seus direitos de forma correta e consciente.{" "}
                <strong className="font-bold text-white">E criei este Guia exatamente pra isso:</strong>{" "}
                pra que você possa pedir seu benefício{" "}
                <strong className="font-bold text-white">sem depender de intermediários ou advogado,</strong>{" "}
                e sem errar no processo.
              </p>
              <p className="text-2xl font-bold text-white">
                É o que eu faria se fosse pra mim ou pra alguém da minha família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S04 MÓDULOS ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 mb-10">
          <p className="text-lg text-white/80 leading-relaxed font-light max-w-2xl">
            A seguir, você assiste a um pedido real sendo feito na tela, clicando, marcando e anexando cada item pra{" "}
            <strong className="font-bold text-white">copiar e fazer igual.</strong>
            <br />
            Tudo com aulas curtas, linguagem simples e conteúdo direto ao ponto.
            <br /><br />
            Sem enrolação, sem juridiquês. Só o que funciona na prática.
          </p>
        </div>
        <div className="px-6 overflow-x-auto pb-4">
          <div className="flex gap-4 max-w-6xl mx-auto">
            {MODULES.map((mod) => (
              <ModuleCard key={mod.num} mod={mod} />
            ))}
          </div>
        </div>
      </section>

      {/* ── S05 MOCKUP iPad ──────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-black text-center leading-tight">
            Tudo em um guia{" "}
            <GradientText>fácil de seguir</GradientText>
          </h2>
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
            <img src="/guia/ipad.webp" alt="Interface do Guia" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── S07 COMPARAÇÃO ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                <GradientText>Tá na sua mão:</GradientText>{" "}
                escolher o caminho certo ou continuar tentando no escuro
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Você tem duas opções a partir daqui. E a escolha que você fizer hoje vai definir se você finalmente conquista seu benefício{" "}
                <strong className="font-bold text-white">ou continua travado por conta de erros simples que poderiam ter sido evitados.</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#0f0f0f] border border-[#4c4c4c] rounded-2xl p-10 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-xl">✗</span>
                </div>
                <h3 className="text-white font-bold text-2xl">Continuar tentando no escuro</h3>
              </div>
              <hr className="border-[#4c4c4c]" />
              <p className="text-[#a2a2a2] text-lg leading-relaxed">
                Tentar sozinho, errar documentos, não saber o que o INSS realmente analisa e aumentar o risco de ter o pedido negado mais uma vez.
              </p>
            </div>

            <div className={`bg-gradient-to-br from-[#1a0a2e] to-[#0f0f0f] border border-[#cf88ff]/40 rounded-2xl p-10 flex flex-col gap-5`}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#cf88ff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#cf88ff] text-xl">✓</span>
                </div>
                <h3 className="text-white font-bold text-2xl leading-tight">Aprender com quem já esteve dentro do INSS</h3>
              </div>
              <hr className="border-[#cf88ff]/20" />
              <p className="text-[#a2a2a2] text-lg leading-relaxed">
                Aprender em poucas horas, com quem já trabalhou dentro do INSS, como montar o pedido certo, sem depender de intermediários ou gastar com advogados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S08 DEPOIMENTOS ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl flex flex-col gap-12 items-center">
          <h2 className="text-4xl md:text-5xl font-black text-center leading-tight">
            Quem seguiu o passo a passo já está{" "}
            <GradientText>recebendo o benefício</GradientText>
          </h2>

          <div className="overflow-x-auto pb-4 w-full">
            <div className="flex gap-5 min-w-max mx-auto px-4">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────── */}
      <section id="comprar" className="py-24 px-6">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Comece agora e conquiste{" "}
            <GradientText>seu benefício</GradientText>
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed max-w-xl">
            Acesso imediato ao Guia do Benefício por Incapacidade. Passo a passo completo com quem viveu por dentro do INSS.
          </p>
          <PurpleButton href="#" large>Quero aprender agora</PurpleButton>
          <p className="text-white/40 text-sm">Poucas vagas disponíveis · Acesso imediato</p>
        </div>
      </section>

    </div>
  );
}

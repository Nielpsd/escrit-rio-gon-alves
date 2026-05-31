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
  "https://api.whatsapp.com/send?phone=5569992621298&text=Olá!%20Sou%20trabalhador%20rural%20e%20gostaria%20de%20saber%20se%20tenho%20direito%20à%20aposentadoria.";

const BENEFICIOS = [
  "Aposentadoria por Idade",
  "Aposentadoria por Invalidez",
  "Auxílio-Doença",
  "Auxílio-Acidente",
  "Salário-Maternidade",
  "BPC/LOAS",
  "Auxílio-Reclusão",
  "Pensão por Morte",
];

const DOCUMENTOS = [
  "Notas fiscais de venda de produtos rurais",
  "Declaração do sindicato rural",
  "Contratos de arrendamento ou parceria",
  "Certidões com profissão de lavrador",
  "Fichas de saúde ou escolar da roça",
  "Notas de compra de insumos agrícolas",
  "Depoimentos de testemunhas",
  "Documentos da propriedade rural",
];

const MOTIVOS_NEGATIVA = [
  "Falta de qualidade de segurado",
  "Falta de carência mínima",
  "Atividade econômica incompatível",
  "Divergência no CNIS",
  "Documentação insuficiente",
  "Requerimento errado",
  "Erro na análise do INSS",
  "Não comprovação de atividade rural",
];

const PASSOS = [
  {
    num: "01",
    title: "Análise do caso",
    desc: "Avaliamos sua situação, documentos disponíveis e verificamos se você tem direito à aposentadoria rural.",
  },
  {
    num: "02",
    title: "Montagem do processo",
    desc: "Reunimos toda a documentação e construímos uma estratégia sólida para o seu pedido.",
  },
  {
    num: "03",
    title: "INSS ou via judicial",
    desc: "Damos entrada no INSS ou, se necessário, acionamos a Justiça para garantir seu benefício.",
  },
  {
    num: "04",
    title: "Você descansa, nós fazemos o resto",
    desc: "Cuidamos de tudo do início ao fim — você não precisa se preocupar com burocracia.",
  },
];

const RISCOS = [
  "Erros no preenchimento podem atrasar ou negar o benefício.",
  "Documentação mal organizada é o principal motivo de negativa.",
  "Um clique errado no Meu INSS pode comprometer todo o processo.",
  "Sem conhecimento das regras, o INSS usa qualquer brecha para negar.",
];

const BENEFICIOS_ADV = [
  "Orientação completa na reunião e organização dos documentos.",
  "Mais chances de aprovação com estratégia certa desde o início.",
  "Acompanhamento até a aprovação, inclusive na via judicial.",
  "Tranquilidade — você descansa enquanto o advogado cuida de tudo.",
];

const FAQ = [
  {
    q: "Já trabalhei de carteira assinada. Isso atrapalha minha aposentadoria rural?",
    a: "Não interfere, desde que você consiga comprovar a atividade rural pelo tempo exigido. O histórico urbano e rural são analisados separadamente.",
  },
  {
    q: "Preciso pagar o INSS para ter direito?",
    a: "Não. Como segurado especial, o trabalhador rural não precisa fazer contribuições mensais — basta comprovar o exercício da atividade rural pelo período exigido.",
  },
  {
    q: "Com qual idade posso me aposentar como trabalhador rural?",
    a: "Mulheres podem se aposentar aos 55 anos e homens aos 60 anos, com 15 anos de atividade rural comprovada. É uma das maiores vantagens do trabalhador rural frente ao trabalhador urbano.",
  },
  {
    q: "Morei ou moro na cidade. Isso atrapalha?",
    a: "Não necessariamente. O que importa é comprovar o exercício da atividade rural pelo período exigido. Ter residência urbana não impede o reconhecimento do direito.",
  },
  {
    q: "A terra que eu trabalhava era de terceiros. Isso impede?",
    a: "Não. Você não precisa ser proprietário da terra. Trabalhadores em regime de parceria, meação ou arrendamento também têm direito à aposentadoria rural.",
  },
  {
    q: "Tenho poucos documentos. Consigo comprovar os 15 anos?",
    a: "Sim. Além dos documentos, é possível comprovar a atividade rural por meio de depoimentos de testemunhas, certidões de casamento com profissão de lavrador, fichas de saúde e outros meios complementares.",
  },
  {
    q: "O INSS já me negou. Ainda tenho chance?",
    a: "Sim. A negativa pode ser contestada por recurso administrativo (prazo de 30 dias) ou ação judicial. Com orientação especializada, as chances de reversão são significativas.",
  },
  {
    q: "Posso contratar um advogado de outro estado ou online?",
    a: "Sim, é totalmente válido. Nosso atendimento é 100% online — atendemos trabalhadores rurais de qualquer estado do Brasil.",
  },
];

function Float({
  children,
  delay = 0,
  amplitude = 12,
  duration = 3.5,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  amplitude?: number;
  duration?: number;
  className?: string;
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

export const Route = createFileRoute("/trabalhador-rural")({
  head: () => ({
    meta: [
      { title: "Aposentadoria do Trabalhador Rural — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Trabalhador rural pode se aposentar mais cedo: mulheres aos 55 e homens aos 60 anos. Sem contribuição ao INSS. Atendimento online para todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/trabalhador-rural` },
      { property: "og:image", content: `${SITE.url}/hero-bg.webp` },
      { property: "og:image:alt", content: "Aposentadoria do Trabalhador Rural — Escritório Gonçalves" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE.url}/hero-bg.webp` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/trabalhador-rural` }],
  }),
  component: TrabalhadorRuralPage,
});

function TrabalhadorRuralPage() {
  const [isRO, setIsRO] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => {
        if (d.region_code === "RO") setIsRO(true);
      })
      .catch(() => {});
  }, []);

  return (
    <Layout>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
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
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5"
                  >
                    <MapPin size={13} className="text-green-700" />
                    <span className="text-sm font-medium text-green-700">
                      Atendimento presencial disponível em Rondônia
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
                Aposentadoria Rural
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] text-[var(--navy)] text-balance">
                Trabalhador rural pode se aposentar<br className="hidden lg:block" />{" "}
                <span className="text-green-700">5 anos antes</span> dos demais
              </h1>
              <p className="mt-6 text-base text-[var(--text-muted)] leading-relaxed max-w-xl">
                Mulheres aos 55 e homens aos 60 anos, com apenas 15 anos de atividade
                rural comprovada — sem precisar contribuir mensalmente ao INSS.
              </p>
              <div className="mt-8">
                <WaveButton variant="wpp" size="lg" href={WPP} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> Verificar meu direito <ArrowRight size={16} />
                </WaveButton>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Sem contribuição ao INSS", "Mulheres: 55 anos", "Homens: 60 anos"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 rounded-full bg-green-50 border border-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
                    <Check size={12} className="text-green-500" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Mockup — ficha de comprovação rural */}
            <div className="hidden lg:flex flex-col gap-4 select-none" aria-hidden>

              {/* Ficha INSS */}
              <Float delay={0.1} amplitude={6}>
                <motion.div
                  className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--shadow-md)] overflow-hidden"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Header */}
                  <div className="bg-green-700 px-5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-white/20 grid place-items-center">
                        <div className="h-2.5 w-2.5 rounded-sm bg-white/80" />
                      </div>
                      <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">INSS · Segurado Especial</span>
                    </div>
                    <span className="text-[10px] text-white/50">Meu Benefício</span>
                  </div>

                  <div className="p-5">
                    {/* Perfil */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-11 w-11 rounded-full bg-green-700 grid place-items-center text-white font-display font-bold text-base flex-shrink-0">
                        J
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold text-[var(--navy)]">João F. da Silva</p>
                        <p className="text-xs text-[var(--text-muted)]">Agricultor Familiar · Jaru, RO</p>
                      </div>
                    </div>

                    {/* Dados */}
                    <div className="space-y-3 border-t border-[var(--border)] pt-4">
                      {[
                        { label: "Atividade rural", value: "15a 4m comprovados" },
                        { label: "Regime", value: "Economia familiar" },
                        { label: "Idade", value: "61 anos" },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex items-center justify-between">
                          <span className="text-xs text-[var(--text-muted)]">{label}</span>
                          <span className="text-xs font-semibold text-[var(--navy)]">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="mt-4 rounded-xl bg-green-50 border border-green-100 px-4 py-2.5 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-700 grid place-items-center flex-shrink-0">
                        <Check size={11} className="text-white" />
                      </div>
                      <p className="text-xs font-semibold text-green-800">Elegível — Aposentadoria por Idade Rural</p>
                    </div>
                  </div>
                </motion.div>
              </Float>

              {/* Card de aprovação */}
              <Float delay={0.7} amplitude={9}>
                <motion.div
                  className="rounded-2xl bg-green-700 p-5"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/15 grid place-items-center flex-shrink-0">
                      <Check size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-0.5">Benefício aprovado</p>
                      <p className="font-display text-xl font-bold text-white">
                        R$ 1.620<span className="text-sm font-normal text-white/60">/mês</span>
                      </p>
                      <p className="text-xs text-white/55 mt-0.5">Aposentadoria Rural · a partir de Jan/2025</p>
                    </div>
                  </div>
                </motion.div>
              </Float>

            </div>
          </div>
        </div>

        {/* Onda → verde */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 56L48 46.7C96 37.3 192 18.7 288 14C384 9.3 480 18.7 576 25.7C672 32.7 768 37.3 864 37.3C960 37.3 1056 32.7 1152 28C1248 23.3 1344 18.7 1392 16.3L1440 14V56H1392C1344 56 1248 56 1152 56C1056 56 960 56 864 56C768 56 672 56 576 56C480 56 384 56 288 56C192 56 96 56 48 56H0Z" fill="rgb(21,128,61)" />
          </svg>
        </div>
      </section>

      {/* ── QUEM TEM DIREITO ─────────────────────────────── */}
      <section className="on-navy bg-green-700 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 items-start">
            <div>
              <Eyebrow className="text-white/70 border-white/20 bg-white/10">Requisitos</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Quem tem direito à aposentadoria rural?
              </h2>
              <p className="mt-5 text-base text-white/65 leading-relaxed">
                O trabalhador rural enquadrado como segurado especial tem direito a se aposentar
                mais cedo e sem contribuição mensal ao INSS — basta comprovar a atividade.
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
                    <h3 className="font-display text-base font-bold text-white">15 anos de atividade rural</h3>
                    <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                      É necessário comprovar o exercício da atividade rural por pelo menos 15 anos,
                      mesmo que não sejam contínuos.
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
                    <h3 className="font-display text-base font-bold text-white">Idade mínima reduzida</h3>
                    <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                      Mulheres aos <strong className="text-white">55 anos</strong> e homens aos{" "}
                      <strong className="text-white">60 anos</strong> — 5 anos antes dos trabalhadores urbanos.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quem se enquadra */}
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold text-white/50 mb-5 uppercase tracking-widest">
                Quem se enquadra como segurado especial
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Agricultores familiares",
                  "Pescadores artesanais",
                  "Seringueiros",
                  "Extrativistas",
                  "Meeiros e parceiros",
                  "Arrendatários rurais",
                  "Garimpeiros",
                  "Aquicultores",
                  "Bóias-frias",
                  "Trabalhadores em regime familiar",
                  "Silvicultores",
                  "Índios aldeados",
                  "Trabalhadores em economia familiar",
                ].map((item, i) => (
                  <motion.span
                    key={item}
                    className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: i * 0.04 }}
                  >
                    <Check size={13} className="text-white/60 flex-shrink-0" />
                    {item}
                  </motion.span>
                ))}
                <span className="flex items-center gap-1.5 rounded-xl border border-dashed border-white/20 px-3.5 py-2 text-sm text-white/40">
                  E outros...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO COMPROVAR ───────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Documentação</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] text-balance">
                Como comprovar os <em className="hl">15 anos de atividade</em>
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Não precisa ser proprietário da terra nem ter todos os documentos perfeitos.
                Existem diversas formas de comprovar a atividade rural — e um advogado sabe
                exatamente quais usar no seu caso.
              </p>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                Mesmo com poucos documentos, é possível complementar a prova com depoimentos
                de vizinhos, certidões e outros meios aceitos pelo INSS e pela Justiça.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {DOCUMENTOS.map((doc, i) => (
                <motion.div
                  key={doc}
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <div className="h-8 w-8 rounded-lg bg-green-50 grid place-items-center flex-shrink-0">
                    <Check size={14} className="text-green-700" />
                  </div>
                  <p className="text-sm text-[var(--text)] leading-snug">{doc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS DISPONÍVEIS ───────────────────────── */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <Eyebrow>O que você pode receber</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] text-balance">
                Benefícios disponíveis para o <em className="hl">trabalhador rural</em>
              </h2>
              <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
                Além da aposentadoria por idade, o trabalhador rural segurado especial tem
                acesso a uma série de benefícios — muitos dos quais são negados por falta
                de orientação adequada.
              </p>

              {/* Motivos de negativa */}
              <div className="mt-10">
                <p className="text-xs font-bold text-[var(--text-muted)] mb-4 uppercase tracking-widest">
                  Principais motivos de negativa no INSS
                </p>
                <div className="flex flex-wrap gap-2">
                  {MOTIVOS_NEGATIVA.map((motivo) => (
                    <span
                      key={motivo}
                      className="flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700"
                    >
                      <X size={11} className="text-red-400 flex-shrink-0" />
                      {motivo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {BENEFICIOS.map((b, i) => (
                <motion.div
                  key={b}
                  className="rounded-2xl border border-[var(--border)] bg-white p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}
                >
                  <div className="h-8 w-8 rounded-lg bg-green-50 grid place-items-center mb-3">
                    <Check size={14} className="text-green-700" />
                  </div>
                  <p className="text-sm font-semibold text-[var(--navy)] leading-snug">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PASSO A PASSO ────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
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
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-green-700 text-white font-display text-sm font-bold shadow-sm">
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
      <section className="bg-[var(--surface)] py-24 lg:py-32">
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
              <h3 className="font-display text-base font-bold text-red-700 mb-6">
                Os riscos de tentar sozinho
              </h3>
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
              className="rounded-2xl border border-green-100 bg-green-50 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-display text-base font-bold text-green-700 mb-6">
                Com um advogado ao seu lado
              </h3>
              <ul className="space-y-3.5">
                {BENEFICIOS_ADV.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-green-100">
                      <Shield size={11} className="text-green-700" />
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
      <section className="on-navy bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-green-700 p-10 lg:p-14">
            <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-green-500/30" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] items-center">
              <div className="text-white">
                <Eyebrow className="text-white/70 border-white/20 bg-white/10">Sem risco financeiro</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
                  Você só paga se for aprovado.
                </h2>
                <p className="mt-4 text-white/65 max-w-xl leading-relaxed">
                  Nosso honorário é cobrado somente se a sua aposentadoria rural for aprovada.
                  Se não houver sucesso, você não paga nada. Total dedicação, zero risco para você.
                </p>
              </div>
              <div className="flex-shrink-0">
                <WaveButton variant="white" size="lg" href={WPP} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> Verificar meu direito <ArrowRight size={16} />
                </WaveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COBERTURA + UNIDADES ─────────────────────────── */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Onde atuamos</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)]">
              Online para todo o Brasil.<br />
              <em className="hl">Presencial em Rondônia.</em>
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Atendemos trabalhadores rurais de qualquer estado, totalmente online. Para quem
              prefere presencial, temos 3 unidades em Rondônia.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
            <motion.div
              className="on-navy relative overflow-hidden rounded-2xl bg-green-700 p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-8 -bottom-8 h-48 w-48 rounded-full bg-green-500/30" />
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
                  <WaveButton variant="white" href={WPP} target="_blank" rel="noopener">
                    <WhatsAppIcon size={16} /> Falar agora <ArrowRight size={14} />
                  </WaveButton>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              {[
                { cidade: "Jaru — RO", tipo: "Sede", endereco: "Av. Rio Branco, 1939, Centro · Próximo ao INSS · CEP 76890-000", horario: "Seg. a Sex. · 8h às 18h", maps: "https://share.google/qVXQppwhXEBJgGzMw" },
                { cidade: "Alta Floresta D'Oeste — RO", tipo: "Unidade", endereco: "Av. Carlos Luz, 4700, esq. R. João Café Filho, Bairro Redondo · Próximo ao Colégio Militar · CEP 76954-000", horario: "Seg. a Sex. · 8h às 18h", maps: "https://maps.app.goo.gl/REP4wGEcYpNAbLCD8" },
                { cidade: "Cacoal — RO", tipo: "Unidade", endereco: "R. Gen. Osório, 484, Princesa Isabel · Próximo ao INSS · CEP 76963-862", horario: "Seg. a Sex. · 8h às 18h", maps: "https://share.google/saxYz8ahcwvzpSx6e" },
              ].map((u, i) => (
                <motion.div
                  key={u.cidade}
                  className="flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-green-50">
                    <MapPin size={18} className="text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-base font-semibold text-[var(--navy)]">{u.cidade}</h3>
                      <span className="rounded-full bg-green-50 border border-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">{u.tipo}</span>
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
                        className="flex items-center gap-1 text-xs font-semibold text-green-700 hover:text-green-900 transition-colors"
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
              Aposentadoria rural — <em className="hl">quem tem direito</em> e como provar
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Dr. Renan Gonçalves, ex-servidor e gerente do INSS, explica tudo sobre a
              aposentadoria do trabalhador rural e os direitos do segurado especial.
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
              src="https://www.youtube.com/embed/Adq18gXUP6A"
              title="Aposentadoria do Trabalhador Rural — Dr. Renan Gonçalves"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── DR. RENAN ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
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
                  src="/bio/09.webp"
                  alt="Dr. Renan Gonçalves"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <motion.div
                className="absolute -bottom-5 -left-5 rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white shadow-lg"
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
                trabalhadores rurais em todos os estados do Brasil. Conta com uma equipe altamente
                especializada para garantir os melhores resultados.
              </p>
              <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
                Referência nas redes sociais com milhares de seguidores no{" "}
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-700 underline underline-offset-4 hover:text-green-900"
                >
                  @renan.inss
                </a>{" "}
                e mentor de advogados previdenciários em todo o país.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-[var(--surface)] py-20 lg:py-24">
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
          <div className="on-navy relative overflow-hidden rounded-3xl bg-green-700 p-10 lg:p-16">
            <div
              className="absolute -right-16 -top-16 font-display text-[380px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
              aria-hidden
            >
              R
            </div>
            <div className="relative grid gap-12 lg:grid-cols-[1fr_340px] items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <Eyebrow>Fale com um especialista</Eyebrow>
                <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-white">
                  Descubra agora se você tem direito à aposentadoria rural
                </h2>
                <p className="mt-5 text-base text-white/65 leading-relaxed max-w-lg">
                  Atendimento sem compromisso. Um advogado especialista analisa seu caso
                  e orienta sobre os próximos passos — sem custo inicial.
                </p>
                <div className="mt-8">
                  <WaveButton variant="white" size="lg" href={WPP} target="_blank" rel="noopener">
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
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">O que você precisa saber</p>
                <ul className="space-y-4">
                  {[
                    "Aposentadoria 5 anos antes dos urbanos",
                    "Sem contribuição mensal ao INSS",
                    "15 anos de atividade comprovada",
                    "Atendemos negativas do INSS",
                    "Você só paga se for aprovado",
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

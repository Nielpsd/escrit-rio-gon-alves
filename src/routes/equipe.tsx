import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion";
import { ArrowRight, Heart, Instagram, Shield, Star, Users, Youtube } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const FAQ_EQUIPE = [
  {
    q: "Quem vai me atender diretamente?",
    a: "Dependendo da sua demanda, você será atendido por um dos profissionais especializados da equipe. O Dr. Renan coordena o trabalho e está presente nas decisões técnicas mais relevantes.",
  },
  {
    q: "A equipe recebe formação específica em previdenciário?",
    a: "Sim. O Dr. Renan é professor de direito previdenciário e transmite esse nível de exigência técnica para toda a equipe. O padrão que ensinamos para outros advogados é o mesmo que aplicamos internamente.",
  },
  {
    q: "Vocês têm advogados especializados em cada área?",
    a: "Toda a equipe atua exclusivamente em direito previdenciário. Não dividimos atenção com outras áreas do direito — isso garante um nível técnico mais elevado em cada caso.",
  },
  {
    q: "Como funciona o acompanhamento do processo?",
    a: "Você é informado sobre cada etapa relevante do seu processo. Nenhuma surpresa, nenhum abandono no meio do caminho — esse é um dos nossos principais compromissos.",
  },
  {
    q: "Posso falar diretamente com o Dr. Renan?",
    a: "O Dr. Renan está presente nas decisões técnicas e estratégicas de cada caso. O atendimento no dia a dia é feito pela equipe — que mantém o mesmo padrão de cuidado e qualidade.",
  },
];

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Escritório Gonçalves Advocacia Previdenciária" },
      {
        name: "description",
        content:
          "Conheça a equipe do Escritório Gonçalves: profissionais dedicados ao direito previdenciário, sob coordenação do Dr. Renan Gonçalves.",
      },
      { property: "og:title", content: "Equipe — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Conteúdo institucional sobre a equipe do escritório. Em conformidade com o Provimento nº 205/2021 da OAB.",
      },
    ],
  }),
  component: EquipePage,
});

const EQUIPE = [
  { nome: "Dr. Renan Gonçalves", cargo: "Fundador · Advogado", foto: "/bio/05.webp" },
  { nome: "Dr. Wesley Rodrigues", cargo: "Advogado · Supervisor", foto: "/team/wesley.webp" },
  { nome: "Dra. Lucimeiry Boni", cargo: "Advogada Previdenciária", foto: "/team/lucimeiry.webp" },
  { nome: "Milena Maeda", cargo: "Equipe previdenciária", foto: "/team/milena.webp" },
  { nome: "Letícia Favetta", cargo: "Equipe previdenciária", foto: "/team/leticia.webp" },
  { nome: "Ingrid da Silva", cargo: "Equipe previdenciária", foto: "/team/ingrid.webp" },
  { nome: "Higor Vinicius", cargo: "Equipe previdenciária", foto: "/team/higor.webp" },
  { nome: "Daniel Garcia", cargo: "Equipe previdenciária", foto: "/team/daniel.webp" },
  { nome: "Bruna Oliveira", cargo: "Equipe previdenciária", foto: "/team/bruna.webp" },
  { nome: "Ana Paula Oliveira", cargo: "Equipe previdenciária", foto: "/team/ana-paula.webp" },
  { nome: "Analicy da Hora", cargo: "Equipe previdenciária", foto: "/team/analicy.webp" },
  { nome: "Aline Dias", cargo: "Equipe previdenciária", foto: "/team/aline.webp" },
];

const CULTURA = [
  {
    icon: Star,
    titulo: "Especialização total",
    desc: "Ninguém aqui cuida de vários assuntos ao mesmo tempo. Cada pessoa da equipe tem foco exclusivo no previdenciário.",
  },
  {
    icon: Heart,
    titulo: "Atendimento humano",
    desc: "Sabemos que quem nos procura muitas vezes está passando por um momento difícil. Ouvimos com atenção antes de qualquer outra coisa.",
  },
  {
    icon: Shield,
    titulo: "Responsabilidade técnica",
    desc: "O fundador é professor de advogados previdenciários. O padrão de exigência que aplicamos à equipe é o mesmo que ensinamos para outros.",
  },
  {
    icon: Users,
    titulo: "Trabalho em equipe",
    desc: "Cada caso passa por mais de um olhar técnico. Isso garante que nada relevante seja esquecido antes de protocolar qualquer pedido.",
  },
];

function EquipePage() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Eyebrow className="mx-auto justify-center">Nossa equipe</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Conheça quem vai <br />
              <em className="hl">cuidar do seu caso</em>.
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
              Mais de 10 profissionais dedicados exclusivamente ao direito previdenciário.
              Aqui ninguém cuida de vários assuntos ao mesmo tempo — cada pessoa da equipe
              tem foco no que faz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DR. RENAN — DESTAQUE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center">
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/07-1.webp" alt="Dr. Renan Gonçalves" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[var(--navy)] shadow-lg">
              Ex-gerente do INSS
            </div>
          </motion.div>

          <div>
            <Eyebrow>Fundador</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              Dr. Renan <em className="hl">Gonçalves</em>
            </h2>
            <p className="mt-2 text-sm font-medium text-[var(--text-muted)]">
              Advogado · Fundador · {SITE.oab} · Ex-servidor do INSS · Professor
            </p>
            <div className="mt-5 space-y-4 text-base text-[var(--text-muted)] leading-relaxed">
              <p>
                Antes de fundar o escritório, Dr. Renan atuou como gerente do INSS — onde
                acompanhou de perto os critérios técnicos que determinam a aprovação ou
                negativa de cada pedido. Hoje também é professor de direito previdenciário,
                formando outros advogados da área.
              </p>
              <p>
                Lidera a equipe do Escritório Gonçalves com a mesma seriedade técnica e
                escuta atenta que sempre marcaram sua trajetória.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--navy)] transition-colors hover:border-[var(--navy)]"
              >
                <Instagram size={16} /> @renan.inss
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--navy)] transition-colors hover:border-[var(--navy)]"
              >
                <Youtube size={16} /> Direito em Minutos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Time completo</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
              A equipe que vai estar <em className="hl">do seu lado</em>
            </h2>
            <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
              Os nomes e rostos que você vai encontrar ao longo do processo. Cada pessoa
              com função definida, todas dedicadas exclusivamente ao previdenciário.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {EQUIPE.map((m) => (
              <div
                key={m.nome}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--border)]">
                  <img src={m.foto} alt={m.nome} className="h-full w-full object-cover object-top" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-[var(--navy)]">
                  {m.nome}
                </h3>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{m.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Como trabalhamos</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            O que une a <em className="hl">nossa equipe</em>
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Mais do que habilidades técnicas, o que define cada pessoa da equipe é o compromisso
            com quem confia o seu caso a nós.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CULTURA.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.titulo}
                className="flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[var(--navy-light)] text-[var(--navy)]">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--navy)]">{c.titulo}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
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
        <FaqAccordion items={FAQ_EQUIPE} />
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
          <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
          <div className="relative">
            <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
              Nossa equipe está <em className="hl">pronta para o seu caso</em>.
            </h2>
            <p className="mt-4 text-white/65 max-w-xl mx-auto">
              Conte sua situação pelo WhatsApp. Nossa equipe ouve com atenção e responde com clareza.
            </p>
            <div className="mt-8 flex justify-center">
              <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
                <WhatsAppIcon size={18} /> Falar com a equipe <ArrowRight size={16} />
              </WaveButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

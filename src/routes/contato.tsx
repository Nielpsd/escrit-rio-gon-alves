import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SITE } from "@/lib/site";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Fale com o Escritório Gonçalves. Atendimento presencial em Jaru e Alta Floresta D'Oeste (RO) e online para todo o Brasil.",
      },
      { property: "og:title", content: "Contato — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Tire suas dúvidas sobre aposentadoria e benefícios do INSS. Conteúdo informativo, em conformidade com o Provimento nº 205/2021 da OAB.",
      },
    ],
  }),
  component: ContatoPage,
});

const UNIDADES = [
  {
    cidade: "Jaru — RO",
    endereco: "Sede do escritório · Atendimento presencial com hora marcada",
    horario: "Seg. a Sex. · 8h às 18h",
    maps: "https://maps.google.com/?q=Jaru,RO",
  },
  {
    cidade: "Alta Floresta D'Oeste — RO",
    endereco: "Atendimento presencial com hora marcada",
    horario: "Seg. a Sex. · 8h às 18h",
    maps: "https://maps.google.com/?q=Alta+Floresta+d%27Oeste,RO",
  },
  {
    cidade: "3ª Unidade — RO",
    endereco: "Atendimento presencial com hora marcada",
    horario: "Seg. a Sex. · 8h às 18h",
    maps: "https://maps.google.com/?q=Rondonia,RO",
  },
];

const FAQS = [
  {
    q: "O atendimento inicial é gratuito?",
    a: "Sim. A conversa inicial pelo WhatsApp ou pelo formulário é gratuita e sem compromisso. Nessa etapa, entendemos a situação e explicamos o que a lei prevê para o seu caso.",
  },
  {
    q: "Preciso ir pessoalmente ao escritório?",
    a: "Não é obrigatório. Atendemos online para todo o Brasil. O atendimento presencial está disponível nos 3 escritórios em Rondônia, com hora marcada.",
  },
  {
    q: "Em quanto tempo recebo uma resposta?",
    a: "Respondemos pelo WhatsApp geralmente no mesmo dia útil. Para mensagens enviadas pelo formulário, o retorno é feito em até 24 horas nos dias úteis.",
  },
  {
    q: "Já tive o benefício negado. Ainda posso entrar em contato?",
    a: "Sim — e quanto antes, melhor. O prazo para recurso administrativo após uma negativa do INSS é de 30 dias. Fale com a equipe para entender as opções disponíveis.",
  },
  {
    q: "Posso enviar documentos pela conversa?",
    a: "Sim. Pelo WhatsApp você pode enviar fotos ou PDFs dos documentos. Isso agiliza bastante a análise inicial do seu caso.",
  },
];

const ASSUNTOS_WPP = [
  { label: "Quero me aposentar", msg: "Olá! Gostaria de tirar dúvidas sobre aposentadoria." },
  { label: "Benefício negado", msg: "Olá! Tive um benefício negado pelo INSS e gostaria de entender o que fazer." },
  { label: "Pensão por morte", msg: "Olá! Preciso de orientação sobre pensão por morte." },
  { label: "Auxílio-Doença", msg: "Olá! Preciso de ajuda com auxílio-doença ou afastamento médico." },
  { label: "Revisão de benefício", msg: "Olá! Gostaria de verificar se o valor do meu benefício está correto." },
  { label: "Outro assunto", msg: "Olá! Gostaria de tirar dúvidas sobre direito previdenciário." },
];

function wppLink(msg: string) {
  return `https://api.whatsapp.com/send?phone=5569992621298&text=${encodeURIComponent(msg)}`;
}

function ContatoPage() {
  const [enviado, setEnviado] = useState(false);
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = String(form.get("nome") ?? "");
    const telefone = String(form.get("telefone") ?? "");
    const assunto = String(form.get("assunto") ?? "");
    const mensagem = String(form.get("mensagem") ?? "");

    if (supabaseConfigured) {
      await supabase.from("messages").insert({ nome, telefone, assunto, mensagem });
    }

    const texto = `Olá! Meu nome é ${nome}. ${mensagem}`;
    const url = `https://api.whatsapp.com/send?phone=5569992621298&text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener");
    setEnviado(true);
  }

  return (
    <Layout>
      {/* HEADER */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Eyebrow className="mx-auto justify-center">Contato</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Vamos conversar sobre o <em className="hl">seu caso</em>.
            </h1>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">
              Conte sua situação para a nossa equipe. Lemos cada mensagem com atenção e
              respondemos com clareza — sem compromisso, sem juridiquês.
            </p>
            <p className="mt-4 text-xs text-white/45">
              Conversa inicial pelo WhatsApp · Conteúdo informativo · Provimento nº 205/2021 da OAB
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHATSAPP RÁPIDO POR ASSUNTO */}
      <section className="border-b border-[var(--border)] bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium text-[var(--text-muted)] mb-6">
            Escolha o assunto e fale direto pelo WhatsApp
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ASSUNTOS_WPP.map((a) => (
              <a
                key={a.label}
                href={wppLink(a.msg)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-all hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#128C50]"
              >
                <WhatsAppIcon size={14} />
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GRID PRINCIPAL */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Formulário */}
          <div className="rounded-2xl border border-[var(--border)] bg-white p-8 lg:p-10 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Envie sua mensagem</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--navy)] leading-snug">
              Conte, sem pressa, o que você está vivendo
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Ao enviar, abrimos o WhatsApp com a sua mensagem pronta. Você revisa antes de mandar.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="nome" className="text-xs font-medium text-[var(--text)]">
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  className="rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--navy)]"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="telefone" className="text-xs font-medium text-[var(--text)]">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    className="rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--navy)]"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="assunto" className="text-xs font-medium text-[var(--text)]">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    className="rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--navy)]"
                  >
                    <option>Aposentadoria</option>
                    <option>Auxílio-Doença</option>
                    <option>BPC/LOAS</option>
                    <option>Pensão por Morte</option>
                    <option>Revisão de Benefício</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="mensagem" className="text-xs font-medium text-[var(--text)]">
                  Sua mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--navy)] resize-none"
                  placeholder="Descreva brevemente sua situação..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <WaveButton variant="wpp" as="button" type="submit">
                  <Send size={16} /> Enviar pelo WhatsApp <ArrowRight size={14} />
                </WaveButton>
                {enviado && (
                  <span className="text-xs text-[var(--text-muted)]">
                    ✓ Mensagem aberta no WhatsApp
                  </span>
                )}
              </div>
            </form>

            {/* O que acontece depois */}
            <div className="mt-8 rounded-xl bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-light)] mb-3">
                O que acontece depois que você envia?
              </p>
              <ol className="space-y-2">
                {[
                  "O WhatsApp abre com sua mensagem pronta — você revisa antes de mandar.",
                  "Nossa equipe recebe e lê com atenção, geralmente no mesmo dia útil.",
                  "Respondemos com clareza sobre o que a lei prevê para o seu caso.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[var(--text-muted)]">
                    <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--navy-light)] text-[var(--navy)] font-semibold text-[10px]">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar de contato */}
          <aside className="space-y-6">
            <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-8 text-white">
              <div className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none" aria-hidden>G</div>
              <div className="relative">
                <Eyebrow>Atendimento direto</Eyebrow>
                <p className="mt-3 font-display text-xl leading-snug text-white">
                  Prefere falar agora mesmo? Nossa equipe está no WhatsApp, pronta para ouvir.
                </p>
                <div className="mt-5">
                  <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                    <WhatsAppIcon size={16} /> Abrir WhatsApp <ArrowRight size={14} />
                  </WaveButton>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-light)]">
                Canais
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 text-[var(--gold)]" />
                  <div>
                    <p className="text-[var(--text-light)] text-xs">Telefone</p>
                    <p className="text-[var(--text)] font-medium">{SITE.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 text-[var(--gold)]" />
                  <div>
                    <p className="text-[var(--text-light)] text-xs">E-mail</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-[var(--text)] font-medium hover:text-[var(--navy)]"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 text-[var(--gold)]" />
                  <div>
                    <p className="text-[var(--text-light)] text-xs">Horário de atendimento</p>
                    <p className="text-[var(--text)] font-medium">Seg. a Sex. · 8h às 18h</p>
                    <p className="text-[var(--text-light)] text-xs mt-0.5">Sáb. e Dom. · Fechado</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-light)]">
                Unidades
              </h3>
              <ul className="mt-4 space-y-5">
                {UNIDADES.map((u) => (
                  <li key={u.cidade} className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 text-[var(--gold)]" />
                    <div>
                      <p className="font-display text-sm font-semibold text-[var(--navy)]">
                        {u.cidade}
                      </p>
                      <p className="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">
                        {u.endereco}
                      </p>
                      <p className="mt-1 text-xs text-[var(--text-light)]">{u.horario}</p>
                      <a
                        href={u.maps}
                        target="_blank"
                        rel="noopener"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--navy)] underline underline-offset-2 hover:opacity-70"
                      >
                        Ver no Google Maps <ArrowRight size={10} />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[var(--text-light)] leading-relaxed">
                Atendimento presencial somente com hora marcada. Atendimento online disponível para
                todo o Brasil.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl mb-10">
          <Eyebrow>Antes de entrar em contato</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)]">
            Dúvidas que a gente mais <em className="hl">recebe</em>
          </h2>
        </div>
        <FaqAccordion items={FAQS} />
      </section>
    </Layout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
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
import { SITE } from "@/lib/site";
import { supabase, supabaseConfigured } from "@/lib/supabase";

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
  },
  {
    cidade: "Alta Floresta D'Oeste — RO",
    endereco: "Atendimento presencial com hora marcada",
    horario: "Seg. a Sex. · 8h às 18h",
  },
];

function ContatoPage() {
  const [enviado, setEnviado] = useState(false);

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

      {/* GRID PRINCIPAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Formulário */}
          <div className="rounded-2xl border border-[var(--border)] bg-white p-8 lg:p-10">
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
          </div>

          {/* Sidebar de contato */}
          <aside className="space-y-6">
            <div className="on-navy rounded-2xl bg-[var(--navy)] p-8 text-white">
              <Eyebrow>Atendimento direto</Eyebrow>
              <p className="mt-3 font-display text-xl leading-snug text-white">
                Prefere falar agora mesmo? Nossa equipe está no WhatsApp, pronta para ouvir.
              </p>
              <div className="mt-5">
                <WaveButton variant="wpp" href={SITE.whatsapp} target="_blank" rel="noopener">
                  <MessageCircle size={16} /> Abrir WhatsApp <ArrowRight size={14} />
                </WaveButton>
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
                    <p className="text-[var(--text-light)] text-xs">Horário</p>
                    <p className="text-[var(--text)] font-medium">Seg. a Sex. · 8h às 18h</p>
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
    </Layout>
  );
}

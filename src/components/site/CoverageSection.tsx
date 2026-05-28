import { ArrowRight, Clock, ExternalLink, Globe, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const UNIDADES = [
  {
    cidade: "Cacoal — RO",
    tipo: "Sede",
    endereco: "R. Gen. Osório, 484, Princesa Isabel · Próximo ao INSS · CEP 76963-862",
    horario: "Seg. a Sex. · 8h às 18h",
    maps: "https://share.google/saxYz8ahcwvzpSx6e",
  },
  {
    cidade: "Jaru — RO",
    tipo: "Unidade",
    endereco: "Av. Rio Branco, 1939, Centro · Próximo ao INSS · CEP 76890-000",
    horario: "Seg. a Sex. · 8h às 18h",
    maps: "https://share.google/qVXQppwhXEBJgGzMw",
  },
  {
    cidade: "Alta Floresta D'Oeste — RO",
    tipo: "Unidade",
    endereco: "Av. Carlos Luz, 4700, esq. R. João Café Filho, Bairro Redondo · Próximo ao Colégio Militar · CEP 76954-000",
    horario: "Seg. a Sex. · 8h às 18h",
    maps: "https://maps.app.goo.gl/REP4wGEcYpNAbLCD8",
  },
];

const WPP_DEFAULT =
  "https://api.whatsapp.com/send?phone=5569992621298&text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20meu%20direito%20previdenciário.";

interface CoverageSectionProps {
  wpp?: string;
}

export function CoverageSection({ wpp = WPP_DEFAULT }: CoverageSectionProps) {
  return (
    <section className="bg-[var(--surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-14">
          <Eyebrow>Onde atuamos</Eyebrow>
          <h2 className="text-balance font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Online para todo o Brasil. <br />
            <em className="hl">Presencial em Rondônia.</em>
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Nosso serviço é totalmente online — qualquer pessoa, em qualquer estado, tem acesso
            ao nosso suporte especializado sem sair de casa. Para quem prefere atendimento
            presencial, contamos com 3 unidades em Rondônia.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          {/* Online card */}
          <div
            data-reveal
            className="reveal-init on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-8 text-white"
          >
            <div
              className="absolute -right-10 -bottom-10 font-display text-[220px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
              aria-hidden
            >
              G
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 mb-6">
                <Globe size={13} /> Atendimento online
              </span>
              <h3 className="font-display text-2xl font-semibold text-white leading-snug">
                Todo o Brasil,<br />
                <em className="hl">sem precisar sair de casa</em>
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                Atendemos clientes em todos os estados. WhatsApp, videochamada, envio digital de
                documentos — você conduz tudo pelo celular.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Análise do caso por WhatsApp",
                  "Envio de documentos pelo celular",
                  "Acompanhamento em tempo real",
                  "Sem necessidade de deslocamento",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WaveButton variant="wpp" href={wpp} target="_blank" rel="noopener">
                  <WhatsAppIcon size={16} /> Falar agora <ArrowRight size={14} />
                </WaveButton>
              </div>
            </div>
          </div>

          {/* Unidades presenciais */}
          <div className="reveal-stagger flex flex-col gap-4">
            {UNIDADES.map((u) => (
              <div
                key={u.cidade}
                data-reveal
                className="reveal-init reveal-right flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
              >
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-[var(--navy-light)]">
                  <MapPin size={18} className="text-[var(--navy)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-base font-semibold text-[var(--navy)]">
                      {u.cidade}
                    </h3>
                    <span className="rounded-full bg-[var(--navy-light)] px-2 py-0.5 text-[11px] font-semibold text-[var(--navy)]">
                      {u.tipo}
                    </span>
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
                      className="flex items-center gap-1 text-xs font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                    >
                      <ExternalLink size={11} /> Ver no Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

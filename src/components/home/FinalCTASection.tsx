import { ChevronDown } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function FinalCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <div className="on-navy relative overflow-hidden rounded-2xl bg-[var(--navy)] p-10 lg:p-14 text-center text-white">
        <div
          className="absolute -right-20 -top-20 font-display text-[420px] leading-none font-bold text-white/[0.03] select-none pointer-events-none"
          aria-hidden
        >
          G
        </div>
        <div className="relative">
          <Eyebrow className="mx-auto justify-center">Atendimento</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white max-w-3xl mx-auto">
            Tem dúvidas sobre o seu caso? <em className="hl">Converse com a nossa equipe</em>.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/65 leading-relaxed">
            Atendimento mediante contato prévio. A análise individual de cada situação é o que
            permite indicar, com base na legislação, os caminhos cabíveis.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <WhatsAppIcon size={18} /> Falar com a equipe
            </WaveButton>
            <WaveButton variant="outline-light" size="lg" href={`tel:+5569992621298`}>
              {SITE.phone}
            </WaveButton>
          </div>

          <p className="mt-6 text-sm text-white/45">
            {SITE.phone} · {SITE.email}
          </p>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-[var(--gold-light)] transition-colors"
          >
            <ChevronDown size={14} className="rotate-180" /> Voltar ao topo
          </a>
        </div>
      </div>
    </section>
  );
}

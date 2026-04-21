import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
        aria-hidden
      />

      <div
        className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
        aria-hidden
      >
        G
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 flex items-center">
        <div className="max-w-2xl">
          <Eyebrow>Direito Previdenciário</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Direito previdenciário com <em className="hl">quem conhece o sistema por dentro</em>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/65 leading-relaxed">
            Dr. Renan Gonçalves atuou como gerente do INSS antes de fundar o escritório. Hoje
            lidera uma equipe dedicada exclusivamente ao direito previdenciário, com atendimento
            presencial em Rondônia e online para todo o Brasil.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-3 text-sm text-[var(--gold-light)]">
            <Check size={16} />
            Conteúdo informativo · Atendimento mediante contato prévio
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <MessageCircle size={18} /> Falar com a equipe
            </WaveButton>
            <WaveButton variant="outline-light" size="lg" href="#servicos">
              Ver áreas de atuação <ArrowRight size={16} />
            </WaveButton>
          </div>

          <p className="mt-6 text-xs text-white/45">
            Atendimento presencial em Rondônia · Online para todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
}

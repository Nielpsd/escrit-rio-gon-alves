import { ArrowRight, Check, MessageCircle, Star } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
      <div
        className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
        aria-hidden
      >
        G
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <Eyebrow>Direito Previdenciário</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white max-w-2xl">
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

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--gold)] text-[var(--gold)]" />
              ))}
              <span className="ml-2 text-xs text-white/55">Avaliações no Google</span>
            </div>
            <p className="font-display text-xl italic leading-snug text-white">
              "Comunicação clara e constante. A equipe sempre manteve atenção ao processo."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--navy-mid)] font-display font-semibold text-[var(--gold-light)]">
                L
              </div>
              <div>
                <div className="text-sm text-white">Leuciane Silva</div>
                <div className="text-xs text-white/45">Cliente</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white shadow-lg">
            Ex-servidor do INSS
          </div>
        </div>
      </div>
    </section>
  );
}

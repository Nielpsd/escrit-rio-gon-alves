import { ArrowRight, Check } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
      {/* Hero background — <picture> para que o preload scanner do HTML descubra
          a imagem antes do CSS ser parseado, acelerando o LCP */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden>
        <source srcSet="/hero-bg.webp" media="(min-width: 768px)" />
        <img
          src="/hero-bg-mobile.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1920}
          height={562}
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
        />
      </picture>

      <div className="relative mx-auto max-w-7xl px-6 pt-[420px] pb-24 md:pt-20 lg:pt-28 lg:pb-32 flex items-center">
        <div className="max-w-3xl">
          <Eyebrow>Direito Previdenciário</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Direito Previdenciário<br />
            com quem conhece o<br />
            <em className="hl">sistema por dentro</em>.
          </h1>
          <p className="mt-6 max-w-md text-base text-white/65 leading-relaxed">
            Dr. Renan Gonçalves atuou como gerente do INSS antes
            de fundar o escritório — hoje lidera
            uma equipe 100% previdenciária.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-3 text-sm text-[var(--gold-light)]">
            <Check size={16} />
            Conteúdo informativo · Atendimento mediante contato prévio
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
              <WhatsAppIcon size={18} /> Falar com a equipe
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

import { ArrowRight, Check } from "lucide-react";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
      {/* Imagem de fundo */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden>
        <source srcSet="/hero-bg.webp" media="(min-width: 768px)" />
        <img
          src="/hero-bg-mobile.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={2560}
          height={750}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      {/* Conteúdo — seção com 750px fixos no desktop, altura automática no mobile */}
      <div className="relative mx-auto max-w-7xl px-6 pt-[420px] pb-24 md:h-[750px] md:pt-0 md:pb-0 md:flex md:items-center">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Conquiste seus benefícios<br />
            do INSS com quem conhece<br />
            <em className="hl">a prática por dentro</em>.
          </h1>
          <p className="mt-6 max-w-md text-base text-white/65 leading-relaxed">
            Dr. Renan Gonçalves atuou como gerente do INSS antes
            de fundar o escritório — hoje lidera
            uma equipe 100% dedicada a benefícios do INSS.
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
            Atendimento presencial em Rondônia e online para todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
}

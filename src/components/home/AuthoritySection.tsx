import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export function AuthoritySection() {
  return (
    <section
      id="sobre"
      className="w-full py-24 lg:py-32 px-6 md:px-16 overflow-hidden bg-[var(--navy)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Headline */}
        <motion.h2
          {...fade(0)}
          className="max-w-3xl text-center font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white"
        >
          Quem já trabalhou no INSS sabe{" "}
          <em className="hl">como o sistema decide</em>.
        </motion.h2>

        {/* Sub */}
        <motion.p
          {...fade(0.1)}
          className="mt-5 max-w-xl text-center text-base text-white/60 leading-relaxed"
        >
          Dr. Renan Gonçalves passou anos dentro do INSS como gerente. Hoje lidera
          uma equipe exclusivamente previdenciária — e transforma esse conhecimento
          interno em fundamentação técnica para cada caso.
        </motion.p>

        {/* CTA */}
        <motion.div {...fade(0.2)} className="mt-8">
          <WaveButton variant="wpp" size="lg" href={SITE.whatsapp} target="_blank" rel="noopener">
            Falar com a equipe <ArrowRight size={16} />
          </WaveButton>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Foto Renan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="h-[340px] rounded-2xl overflow-hidden order-1"
          >
            <img
              src="/about-renan.webp"
              alt="Dr. Renan Gonçalves"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-5 order-2">
            <motion.div
              {...fade(0.4)}
              className="bg-[var(--gold)] rounded-2xl px-7 py-6 flex justify-between items-center"
            >
              <span className="font-display text-3xl font-bold text-[var(--navy)]">+15 anos</span>
              <span className="text-sm font-medium text-[var(--navy)]/70 text-right leading-snug">
                de experiência<br />previdenciária
              </span>
            </motion.div>
            <motion.div
              {...fade(0.5)}
              className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 flex-grow"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-[var(--gold)] text-xs">●</span> Ex-gerente do INSS
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Conhecemos o sistema por dentro. Sabemos os critérios de análise e como
                cada documento é avaliado na concessão de benefícios.
              </p>
            </motion.div>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col gap-5 order-3">
            <motion.div
              {...fade(0.6)}
              className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 flex-grow"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-[var(--gold)] text-xs">●</span> Só previdenciário
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                O escritório atua exclusivamente em benefícios do INSS. Toda a atenção
                e o estudo da equipe estão concentrados em uma única especialidade.
              </p>
            </motion.div>
            <motion.div
              {...fade(0.7)}
              className="bg-white/[0.06] border border-white/10 rounded-2xl px-7 py-6 flex justify-between items-center"
            >
              <span className="font-display text-3xl font-bold text-[var(--gold)]">100%</span>
              <span className="text-sm text-white/60 text-right leading-snug">
                foco em<br />previdenciário
              </span>
            </motion.div>
          </div>

          {/* Foto escritório */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.8 }}
            className="h-[340px] rounded-2xl overflow-hidden order-4"
          >
            <img
              src="/about-office.jpg"
              alt="Escritório Gonçalves"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

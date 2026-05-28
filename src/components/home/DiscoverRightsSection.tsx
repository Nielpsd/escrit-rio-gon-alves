import { ArrowRight, XCircle, Clock, FileX, Baby } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";

const TRIGGERS = [
  { icon: FileX, text: "Tive meu benefício negado pelo INSS" },
  { icon: Clock, text: "Contribuí por anos e ainda não me aposentei" },
  { icon: XCircle, text: "Estou afastado e não sei o que me cabe" },
  { icon: Baby, text: "Estou grávida e preciso do salário-maternidade" },
];

export function DiscoverRightsSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div>
          <div data-reveal className="reveal-init">
            <Eyebrow>Você tem direito?</Eyebrow>
          </div>
          <h2 data-reveal className="reveal-init mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-[var(--navy)]">
            Se encaixa em alguma <em className="hl">dessas situações</em>?
          </h2>
          <p data-reveal className="reveal-init mt-5 text-base text-[var(--text-muted)] leading-relaxed max-w-md">
            Muita gente desiste antes de saber que tem direito. Responda 3 perguntas
            rápidas e descubra o que a lei prevê para o seu caso — sem cadastro, sem compromisso.
          </p>

          <div data-reveal className="reveal-init mt-8">
            <WaveButton variant="primary" href="/voce-tem-direito">
              Verificar meu direito <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>

        <div className="flex flex-col gap-4 reveal-stagger">
          {TRIGGERS.map(({ icon: Icon, text }) => (
            <div key={text} data-reveal className="reveal-init">
              <Link
                to="/voce-tem-direito"
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white px-6 py-5 transition-all hover:border-[var(--gold)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--navy-light)] text-[var(--navy)] transition-colors group-hover:bg-[var(--gold)]/15 group-hover:text-[var(--gold)]">
                  <Icon size={20} />
                </span>
                <span className="flex-1 text-sm font-medium text-[var(--navy)] leading-snug">
                  {text}
                </span>
                <ArrowRight size={16} className="shrink-0 text-[var(--text-muted)] transition-all group-hover:text-[var(--gold)] group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

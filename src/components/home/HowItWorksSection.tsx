import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaveButton } from "@/components/site/WaveButton";
import { SITE } from "@/lib/site";

const STEPS = [
  {
    title: "Conversa inicial pelo WhatsApp",
    desc: "Você nos conta sua situação. Nossa equipe ouve o caso e identifica os pontos relevantes para a análise técnica.",
  },
  {
    title: "Montagem do processo do jeito certo",
    desc: "Orientamos sobre os documentos que fortalecem o pedido e descartamos os que podem atrapalhar. Um processo bem montado no início evita anos de espera depois.",
  },
  {
    title: "A gente conduz, você acompanha",
    desc: "Cuidamos do protocolo, do acompanhamento, das respostas ao INSS, dos recursos e das ações judiciais quando cabíveis. Você não precisa lidar com isso sozinho.",
  },
  {
    title: "Preparação para perícia ou audiência",
    desc: "Antes de qualquer perícia médica ou audiência, você recebe orientação completa do que vai acontecer e como se posicionar. Nada de surpresas.",
  },
  {
    title: "Na Justiça, se for o caso",
    desc: "Se o pedido administrativo é negado, conduzimos a discussão no Judiciário com fundamentação técnica. Negativa administrativa não encerra o caminho.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Como atuamos</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--navy)]">
            Simples para você. <em className="hl">Completo para o INSS</em>.
          </h2>
          <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed">
            Você não precisa entender de leis nem enfrentar filas. A gente conduz cada
            etapa — no INSS ou na Justiça — e te mantém informado o tempo todo.
          </p>
          <div className="mt-8">
            <WaveButton variant="primary" href={SITE.whatsapp} target="_blank" rel="noopener">
              Falar com a equipe <ArrowRight size={16} />
            </WaveButton>
          </div>
        </div>

        <ol className="relative">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 pb-10 last:pb-0">
              {i < STEPS.length - 1 && (
                <span className="absolute left-[19px] top-12 bottom-0 w-px bg-[var(--border)]" />
              )}
              <span className="relative z-10 grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-[var(--navy)] font-display font-semibold text-[var(--gold-light)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-xl font-semibold text-[var(--navy)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

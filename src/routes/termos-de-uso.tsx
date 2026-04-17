import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Termos e condições de uso do site do Escritório Gonçalves Sociedade Individual de Advocacia.",
      },
      { property: "og:title", content: "Termos de Uso — Escritório Gonçalves" },
      {
        property: "og:description",
        content: "Conheça as condições de uso do nosso site e dos canais de atendimento.",
      },
    ],
  }),
  component: TermosPage,
});

const SECOES = [
  {
    titulo: "1. Aceitação dos termos",
    texto:
      "Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos que não utilize nossos serviços online.",
  },
  {
    titulo: "2. Natureza das informações",
    texto:
      "Os conteúdos publicados neste site têm caráter exclusivamente informativo e educativo. Não constituem consulta jurídica nem substituem o atendimento personalizado por um advogado habilitado.",
  },
  {
    titulo: "3. Relação cliente-advogado",
    texto:
      "O simples envio de mensagens, e-mails ou contato pelos canais aqui disponíveis não estabelece, por si só, relação de patrocínio. Esta relação somente se forma após contratação formal por meio de procuração e contrato de honorários.",
  },
  {
    titulo: "4. Propriedade intelectual",
    texto:
      "Todo o conteúdo deste site — textos, marcas, identidade visual, artigos e materiais educativos — é de propriedade do Escritório Gonçalves e está protegido pela legislação de direitos autorais. É vedada a reprodução sem autorização prévia.",
  },
  {
    titulo: "5. Publicidade e ética profissional",
    texto:
      "Em estrita observância ao Provimento nº 205/2021 da OAB, este site tem caráter meramente informativo, sendo vedada qualquer captação de clientela, oferta de serviços ou promessa de resultados.",
  },
  {
    titulo: "6. Limitação de responsabilidade",
    texto:
      "Não nos responsabilizamos por decisões tomadas com base unicamente nas informações deste site. Para análise do seu caso específico, procure atendimento jurídico individualizado.",
  },
  {
    titulo: "7. Links externos",
    texto:
      "Este site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo de tais sites e não nos responsabilizamos por suas práticas, políticas ou conteúdos.",
  },
  {
    titulo: "8. Alterações nos termos",
    texto:
      "Estes Termos podem ser atualizados a qualquer momento, sem aviso prévio. Recomendamos a consulta periódica desta página.",
  },
  {
    titulo: "9. Foro",
    texto:
      "Fica eleito o foro da Comarca de Jaru — RO para dirimir quaisquer questões oriundas destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.",
  },
];

function TermosPage() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
        <div
          className="absolute right-[-60px] top-[-80px] font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          G
        </div>
        <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24">
          <Eyebrow>Documento legal</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-white">
            Termos de <em className="hl">Uso</em>
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl">
            Última atualização: janeiro de 2026
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
        <p className="text-base text-[var(--text)] leading-relaxed">
          Bem-vindo ao site do <strong>{SITE.legal}</strong>, inscrito no CNPJ {SITE.cnpj}. Estes
          Termos de Uso regulam o acesso e a utilização deste site e dos demais canais oficiais do
          escritório.
        </p>

        <div className="mt-10 space-y-10">
          {SECOES.map((s) => (
            <div key={s.titulo}>
              <h2 className="font-display text-xl font-semibold text-[var(--navy)] leading-snug">
                {s.titulo}
              </h2>
              <p className="mt-3 text-base text-[var(--text)] leading-relaxed">{s.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--navy-light)]/40 p-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--navy)]">
            Dúvidas?
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Entre em contato pelo e-mail{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-[var(--navy)] font-medium hover:text-[var(--gold)]"
            >
              {SITE.email}
            </a>{" "}
            ou pelo telefone {SITE.phone}.
          </p>
        </div>
      </section>
    </Layout>
  );
}

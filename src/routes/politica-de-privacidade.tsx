import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Escritório Gonçalves" },
      {
        name: "description",
        content:
          "Saiba como o Escritório Gonçalves coleta, utiliza e protege seus dados pessoais, em conformidade com a LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade — Escritório Gonçalves" },
      {
        property: "og:description",
        content:
          "Transparência total sobre o tratamento dos seus dados pessoais. Conheça seus direitos sob a LGPD.",
      },
    ],
  }),
  component: PoliticaPage,
});

const SECOES = [
  {
    titulo: "1. Quem somos",
    texto:
      `Esta Política descreve como o ${SITE.legal}, inscrito no CNPJ ${SITE.cnpj} ("Escritório Gonçalves", "nós"), trata os dados pessoais coletados por meio deste site e dos demais canais oficiais de atendimento, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).`,
  },
  {
    titulo: "2. Dados que coletamos",
    texto:
      "Coletamos apenas os dados necessários ao atendimento jurídico e à comunicação com você, tais como: nome completo, telefone/WhatsApp, e-mail, dados previdenciários (CPF, NIT/PIS, histórico de contribuições) e informações que você espontaneamente nos envia em formulários ou mensagens.",
  },
  {
    titulo: "3. Finalidades do tratamento",
    texto:
      "Utilizamos seus dados para: (i) responder solicitações de contato e prestar atendimento jurídico; (ii) elaborar análises previdenciárias e peças processuais; (iii) cumprir obrigações legais, regulatórias e éticas da advocacia; (iv) enviar comunicações relevantes sobre o seu caso ou sobre conteúdos educativos, mediante consentimento.",
  },
  {
    titulo: "4. Base legal",
    texto:
      "O tratamento é fundamentado, conforme o caso, no consentimento do titular, na execução de contrato, no cumprimento de obrigação legal ou regulatória, no exercício regular de direitos em processo judicial ou administrativo, e no legítimo interesse do escritório.",
  },
  {
    titulo: "5. Compartilhamento de dados",
    texto:
      "Não comercializamos seus dados. Eventualmente, eles podem ser compartilhados com: órgãos públicos (INSS, Justiça Federal, Tribunais), peritos e correspondentes jurídicos contratados, e prestadores de serviços de tecnologia que apoiam a operação do escritório, todos sujeitos a obrigações de confidencialidade.",
  },
  {
    titulo: "6. Cookies e dados de navegação",
    texto:
      "Este site pode utilizar cookies essenciais ao seu funcionamento e cookies analíticos para entender como os visitantes interagem com o conteúdo. Você pode bloqueá-los nas configurações do seu navegador, sem prejuízo da navegação básica.",
  },
  {
    titulo: "7. Armazenamento e segurança",
    texto:
      "Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acessos não autorizados, perda, alteração ou destruição. Os dados são mantidos pelo tempo necessário ao cumprimento das finalidades e obrigações legais aplicáveis à advocacia.",
  },
  {
    titulo: "8. Seus direitos como titular",
    texto:
      "Nos termos da LGPD, você pode, a qualquer momento, solicitar: confirmação da existência de tratamento; acesso, correção, anonimização, portabilidade ou eliminação dos seus dados; informação sobre compartilhamentos; e revogação do consentimento. Para exercer qualquer direito, basta entrar em contato pelos canais abaixo.",
  },
  {
    titulo: "9. Encarregado pelo tratamento de dados (DPO)",
    texto: `Para tratar de assuntos relacionados a esta Política e à proteção dos seus dados, entre em contato pelo e-mail ${SITE.email} ou pelo telefone ${SITE.phone}.`,
  },
  {
    titulo: "10. Atualizações",
    texto:
      "Esta Política pode ser revisada periodicamente. A versão vigente será sempre a publicada nesta página, com indicação da data da última atualização.",
  },
];

function PoliticaPage() {
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
          <Eyebrow>Documento legal · LGPD</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-white">
            Política de <em className="hl">Privacidade</em>
          </h1>
          <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl">
            Última atualização: janeiro de 2026
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
        <p className="text-base text-[var(--text)] leading-relaxed">
          A sua privacidade é prioridade para o <strong>{SITE.legal}</strong>. Esta Política
          explica, de forma clara e objetiva, como coletamos, utilizamos, armazenamos e protegemos
          seus dados pessoais.
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
            Fale com o encarregado
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Para dúvidas, solicitações ou exercício dos seus direitos como titular, escreva para{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-[var(--navy)] font-medium hover:text-[var(--gold)]"
            >
              {SITE.email}
            </a>{" "}
            ou ligue para {SITE.phone}.
          </p>
        </div>
      </section>
    </Layout>
  );
}

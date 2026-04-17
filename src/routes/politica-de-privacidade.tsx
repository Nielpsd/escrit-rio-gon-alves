import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({ meta: [{ title: "Política de Privacidade — Escritório Gonçalves" }] }),
  component: () => (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Eyebrow className="mx-auto justify-center">Em breve</Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--navy)]">
          Política de <em className="hl">Privacidade</em>
        </h1>
        <p className="mt-5 text-[var(--text-muted)]">Esta página será implementada em seguida.</p>
      </section>
    </Layout>
  ),
});

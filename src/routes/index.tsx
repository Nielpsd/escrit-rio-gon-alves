import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Layout } from "@/components/site/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
const DiscoverRightsSection = lazy(() =>
  import("@/components/home/DiscoverRightsSection").then((m) => ({ default: m.DiscoverRightsSection }))
);
const AuthoritySection = lazy(() =>
  import("@/components/home/AuthoritySection").then((m) => ({ default: m.AuthoritySection }))
);
const ServicesSection = lazy(() =>
  import("@/components/home/ServicesSection").then((m) => ({ default: m.ServicesSection }))
);
const BlogPreviewSection = lazy(() =>
  import("@/components/home/BlogPreviewSection").then((m) => ({ default: m.BlogPreviewSection }))
);

// Seções abaixo do fold com framer-motion — carregam lazy para não bloquear LCP
const StatsSection = lazy(() =>
  import("@/components/home/StatsSection").then((m) => ({ default: m.StatsSection }))
);
const HowItWorksSection = lazy(() =>
  import("@/components/home/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection }))
);
const TeamSection = lazy(() =>
  import("@/components/home/TeamSection").then((m) => ({ default: m.TeamSection }))
);
const TestimonialsSection = lazy(() =>
  import("@/components/home/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection }))
);
const FAQSection = lazy(() =>
  import("@/components/home/FAQSection").then((m) => ({ default: m.FAQSection }))
);
const CoverageSection = lazy(() =>
  import("@/components/site/CoverageSection").then((m) => ({ default: m.CoverageSection }))
);
const FinalCTASection = lazy(() =>
  import("@/components/home/FinalCTASection").then((m) => ({ default: m.FinalCTASection }))
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Escritório Gonçalves — Advocacia Previdenciária | 3 Escritórios em Rondônia",
      },
      {
        name: "description",
        content:
          "Escritório de advocacia dedicado ao direito previdenciário. Conteúdo informativo sobre aposentadorias, auxílios, BPC/LOAS, pensões e revisões. Atendimento presencial em Rondônia e online em todo o Brasil.",
      },
      {
        property: "og:title",
        content: "Escritório Gonçalves — Advocacia Previdenciária",
      },
      {
        property: "og:description",
        content:
          "Conteúdo informativo sobre direito previdenciário. Site em conformidade com o Provimento nº 205/2021 da OAB.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <HeroSection />
      <MarqueeStrip />
      <Suspense fallback={null}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={null}>
        <DiscoverRightsSection />
      </Suspense>
      <Suspense fallback={null}>
        <AuthoritySection />
      </Suspense>
      <Suspense fallback={null}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={null}>
        <HowItWorksSection />
      </Suspense>
      <Suspense fallback={null}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={null}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={null}>
        <BlogPreviewSection />
      </Suspense>
      <Suspense fallback={null}>
        <CoverageSection />
      </Suspense>
      <Suspense fallback={null}>
        <FinalCTASection />
      </Suspense>
    </Layout>
  );
}

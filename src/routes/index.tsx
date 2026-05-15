import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Layout } from "@/components/site/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { DiscoverRightsSection } from "@/components/home/DiscoverRightsSection";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { CoverageSection } from "@/components/site/CoverageSection";

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

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      // Preload das imagens do hero com media query — garante que só a imagem
      // correta seja baixada e que ela inicie o download no scan inicial do HTML
      { rel: "preload", as: "image", href: "/hero-bg.webp", media: "(min-width: 768px)" },
      { rel: "preload", as: "image", href: "/hero-bg-mobile.webp", media: "(max-width: 767px)" },
    ],
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
      <DiscoverRightsSection />
      <AuthoritySection />
      <ServicesSection />
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
      <BlogPreviewSection />
      <CoverageSection />
      <FinalCTASection />
    </Layout>
  );
}

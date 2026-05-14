import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { StatsSection } from "@/components/home/StatsSection";
import { DiscoverRightsSection } from "@/components/home/DiscoverRightsSection";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { CoverageSection } from "@/components/site/CoverageSection";

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
      <StatsSection />
      <DiscoverRightsSection />
      <AuthoritySection />
      <ServicesSection />
      <HowItWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreviewSection />
      <CoverageSection />
      <FinalCTASection />
    </Layout>
  );
}

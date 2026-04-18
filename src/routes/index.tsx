import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Escritório Gonçalves — Advocacia Previdenciária | Jaru e Alta Floresta D'Oeste (RO)",
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
      <AuthoritySection />
      <ServicesSection />
      <HowItWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreviewSection />
      <FinalCTASection />
    </Layout>
  );
}

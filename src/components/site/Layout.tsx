import { Header } from "./Header";
import { Footer } from "./Footer";
import { UrgencyBar } from "./UrgencyBar";
import { ReadingProgress } from "./ReadingProgress";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Layout({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="min-h-screen flex flex-col bg-[var(--white)]">
      <ReadingProgress />
      <UrgencyBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { UrgencyBar } from "./UrgencyBar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Footer = lazy(() => import("./Footer").then((m) => ({ default: m.Footer })));

export function Layout({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="min-h-screen flex flex-col bg-[var(--white)]">
      <UrgencyBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

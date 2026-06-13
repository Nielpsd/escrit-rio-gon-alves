import { Outlet, Link, createRootRoute, HeadContent, Scripts, ScrollRestoration, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CookieBanner } from "@/components/site/CookieBanner";
import { BackToTop } from "@/components/site/BackToTop";
import { SITE } from "@/lib/site";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="on-navy flex min-h-screen items-center justify-center bg-[var(--navy)] px-6 text-white">
      <div className="relative max-w-xl text-center">
        <div
          className="absolute inset-0 -z-10 grid place-items-center font-display text-[420px] leading-none font-bold text-white/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          G
        </div>
        <p className="font-display text-7xl md:text-9xl font-semibold text-[var(--gold)]">404</p>
        <h1 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white">
          Página não <em className="hl">encontrada</em>
        </h1>
        <p className="mt-4 text-sm text-white/65 leading-relaxed">
          O endereço que você procura não existe, foi movido ou está temporariamente indisponível.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:bg-[var(--gold-light)]"
          >
            Voltar para o início
          </Link>
          <Link
            to="/contato"
            className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Falar com o escritório
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Escritório Gonçalves — Direito Previdenciário" },
      {
        name: "description",
        content:
          "Escritório de advocacia dedicado ao direito previdenciário. Atendimento presencial em Rondônia e online em todo o Brasil.",
      },
      { name: "author", content: "Escritório Gonçalves" },
      { property: "og:title", content: "Escritório Gonçalves — Direito Previdenciário" },
      {
        property: "og:description",
        content:
          "Atuação técnica em aposentadorias, auxílios, BPC/LOAS, pensões e revisões previdenciárias.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE.url}/hero-bg.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:alt", content: "Escritório Gonçalves — Advocacia Previdenciária" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE.url}/hero-bg.webp` },
      {
        'script:ld+json': {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": SITE.name,
          "legalName": SITE.legal,
          "url": SITE.url,
          "telephone": SITE.phone,
          "email": SITE.email,
          "description": "Escritório de advocacia especializado em direito previdenciário. Aposentadorias, auxílios, BPC/LOAS, pensões e revisões. Atendimento presencial em Rondônia e online em todo o Brasil.",
          "areaServed": "Brasil",
          "priceRange": "Honorários contingenciais",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "RO",
            "addressCountry": "BR",
          },
          "sameAs": [
            SITE.instagram,
            SITE.tiktok,
            SITE.youtube,
          ],
        }
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap";

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Hero preloads first — before HeadContent injects SSR image preloads */}
        <link rel="preload" as="image" href="/hero-bg.webp" media="(min-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/hero-bg-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />
        <HeadContent />
        {/* Fontes carregadas de forma não-bloqueante via JS — evita render-blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='${FONT_URL}';document.head.appendChild(l);})();`,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function GuiaFab() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5569992621298&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Guia%20do%20Benef%C3%ADcio%20por%20Incapacidade."
      target="_blank"
      rel="noopener"
      aria-label="Falar pelo WhatsApp"
      className={[
        "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#22c55e] px-5 py-3.5 text-white shadow-[0_8px_24px_rgba(34,197,94,0.35)] transition-all duration-300 hover:bg-[#16a34a] hover:scale-105 sm:bottom-6 sm:right-6",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#22c55e] opacity-30" />
      <WhatsAppIcon size={16} />
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </a>
  );
}

function LaudoFab() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="https://api.whatsapp.com/send?phone=556993627234&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20laudo%20pelo%20WhatsApp."
      target="_blank"
      rel="noopener"
      aria-label="Falar pelo WhatsApp"
      className={[
        "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#22c55e] px-5 py-3.5 text-white shadow-[0_8px_24px_rgba(34,197,94,0.35)] transition-all duration-300 hover:bg-[#16a34a] hover:scale-105 sm:bottom-6 sm:right-6",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#22c55e] opacity-30" />
      <WhatsAppIcon size={16} />
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </a>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isGuia = pathname === "/guia-do-beneficio-por-incapacidade";
  const isLaudo = pathname === "/laudo-certo";
  return (
    <>
      <div key={pathname} className="page-transition">
        <Outlet />
      </div>
      {isGuia ? <GuiaFab /> : isLaudo ? <LaudoFab /> : <WhatsAppFab />}
      <BackToTop />
      <CookieBanner />
    </>
  );
}

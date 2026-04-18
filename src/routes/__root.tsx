import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

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
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <WhatsAppFab />
    </>
  );
}

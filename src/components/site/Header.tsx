import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { WaveButton } from "./WaveButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/equipe", label: "Equipe" },
  { to: "/servicos", label: "Serviços" },
  { to: "/areas-de-atuacao", label: "Áreas" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--white)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/Logo-Escura.webp" alt="Escritório Gonçalves" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--navy)]"
              activeProps={{ className: "text-[var(--navy)] font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WaveButton variant="wpp" size="sm" href={SITE.whatsapp} target="_blank" rel="noopener">
            <WhatsAppIcon size={16} /> WhatsApp
          </WaveButton>
        </div>

        <button
          className="lg:hidden p-2 text-[var(--navy)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--white)] px-6 py-4">
          <nav className="flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-base text-[var(--text)] py-1"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3">
              <WaveButton variant="wpp" full href={SITE.whatsapp} target="_blank" rel="noopener">
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </WaveButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

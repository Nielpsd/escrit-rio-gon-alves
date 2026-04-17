import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.6 6.6a5.4 5.4 0 0 1-3.2-1.1V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V2h2.7a5.4 5.4 0 0 0 3.2 4.6v0Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white mt-24 on-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white/10 font-display text-lg font-semibold text-[var(--gold-light)]">
                G
              </span>
              <span className="font-display text-xl font-semibold">Escritório Gonçalves</span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Escritório especializado em direito previdenciário, com atendimento presencial em
              Rondônia e online para todo o Brasil.
            </p>
            <p className="text-xs text-white/35 mt-4">CNPJ: {SITE.cnpj}</p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/35 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li>Planejamento de Aposentadoria</li>
              <li>Aposentadoria por Invalidez</li>
              <li>Auxílio-Doença</li>
              <li>BPC/LOAS</li>
              <li>Pensão por Morte</li>
              <li>Revisão de Benefícios</li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/35 mb-4">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/sobre", label: "Sobre o Escritório" },
                { to: "/equipe", label: "Nossa Equipe" },
                { to: "/servicos", label: "Serviços" },
                { to: "/casos-resolvidos", label: "Casos Resolvidos" },
                { to: "/blog", label: "Blog / Artigos" },
                { to: "/contato", label: "Contato" },
                { to: "/politica-de-privacidade", label: "Política de Privacidade" },
                { to: "/termos-de-uso", label: "Termos de Uso" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/55 hover:text-[var(--gold-light)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/35 mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li>{SITE.phone}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-[var(--gold-light)]">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.cities}</li>
              <li className="text-white/40">Atendimento online para todo o Brasil</li>
            </ul>

            <div className="flex gap-3 mt-5">
              {[
                { href: SITE.instagram, icon: <Instagram size={16} />, label: "Instagram" },
                { href: SITE.whatsapp, icon: <MessageCircle size={16} />, label: "WhatsApp" },
                { href: SITE.tiktok, icon: <TikTokIcon />, label: "TikTok" },
                { href: SITE.youtube, icon: <Youtube size={16} />, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-white/40 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold-light)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-white/10 pt-6 text-xs text-white/35">
          <p>
            © 2026 {SITE.legal} · Todos os direitos reservados
          </p>
          <Link to="/politica-de-privacidade" className="hover:text-[var(--gold-light)]">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

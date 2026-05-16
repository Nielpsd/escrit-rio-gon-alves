import { Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

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
            <div className="mb-4">
              <img src="/logo clara.webp" alt="Escritório Gonçalves" loading="lazy" width={120} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Escritório especializado em direito previdenciário, com atendimento presencial em
              Rondônia e online para todo o Brasil.
            </p>
            <p className="text-xs text-white/45 mt-4 leading-relaxed">
              <span className="block text-white/60 font-medium">{SITE.lawyerName}</span>
              Advogado responsável · {SITE.oab}
            </p>
            <p className="text-xs text-white/35 mt-2">
              {SITE.legal}<br />
              CNPJ: {SITE.cnpj}
            </p>
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
              <li><Link to="/bpc-loas" className="hover:text-[var(--gold-light)] transition-colors">BPC/LOAS</Link></li>
              <li>Pensão por Morte</li>
              <li>Revisão de Benefícios</li>
              <li><Link to="/beneficios-negados" className="hover:text-[var(--gold-light)] transition-colors">Benefício Negado</Link></li>
              <li><Link to="/trabalhador-rural" className="hover:text-[var(--gold-light)] transition-colors">Trabalhador Rural</Link></li>
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
                { to: "/areas-de-atuacao", label: "Áreas de atuação" },
                { to: "/voce-tem-direito", label: "Você tem direito?" },
                { to: "/quero-me-aposentar", label: "Quero me aposentar" },
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
                { href: SITE.whatsapp, icon: <WhatsAppIcon size={16} />, label: "WhatsApp" },
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

        <div className="mt-12 border-t border-white/10 pt-6 space-y-3">
          <p className="text-[11px] text-white/45 leading-relaxed max-w-3xl">
            <strong className="text-white/60">Aviso legal:</strong> este site tem caráter
            exclusivamente informativo, em estrita observância ao Código de Ética e Disciplina
            da OAB e ao Provimento nº 205/2021 do Conselho Federal da OAB. Seu conteúdo não
            constitui captação de clientela, oferta de serviços, mercantilização da advocacia
            nem promessa de resultados. As informações publicadas não substituem consulta
            jurídica individual e não geram, por si só, vínculo profissional.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-white/35">
            <p>© 2026 {SITE.legal} · Todos os direitos reservados</p>
            <div className="flex gap-4">
              <Link to="/politica-de-privacidade" className="hover:text-[var(--gold-light)]">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="hover:text-[var(--gold-light)]">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Instagram, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Links — Dr. Renan Gonçalves" },
      { name: "description", content: "Todos os links do Dr. Renan Gonçalves — Escritório Gonçalves, Direito Previdenciário." },
    ],
  }),
  component: LinksPage,
});

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
    </svg>
  );
}

const CARDS = [
  {
    id: "escritorio",
    banner: "/links/banner-escritorio.webp",
    bannerAlt: "Escritório Gonçalves — Benefícios do INSS",
    bannerHref: "https://escrit-rio-gon-alves.vercel.app/",
    zap: "/links/zap-escritorio.webp",
    zapAlt: "Chamar o Suporte do Escritório",
    zapHref: SITE.whatsapp,
  },
  {
    id: "incapacidade",
    banner: "/links/banner-incapacidade.webp",
    bannerAlt: "Guia do Benefício por Incapacidade",
    bannerHref: "#",
    zap: "/links/zap-incapacidade.webp",
    zapAlt: "Quero tirar uma dúvida sobre o Guia",
    zapHref: "#",
  },
  {
    id: "laudo",
    banner: "/links/banner-laudo.webp",
    bannerAlt: "Laudo Certa — O laudo certo para conquistar o benefício",
    bannerHref: "#",
    zap: "/links/zap-laudo.webp",
    zapAlt: "Falar com o suporte da Laudo Certa",
    zapHref: "#",
  },
  {
    id: "apl",
    banner: "/links/banner-apl.webp",
    bannerAlt: "Comunidade APL",
    bannerHref: "#",
    zap: "/links/zap-apl.webp",
    zapAlt: "Chamar o Suporte da Comunidade APL",
    zapHref: "#",
  },
  {
    id: "marketing",
    banner: "/links/banner-marketing.webp",
    bannerAlt: "Gonçalves Marketing",
    bannerHref: "#",
    zap: null,
    zapAlt: null,
    zapHref: null,
  },
];

const BIO_PHOTOS = [
  "/bio/01.webp", "/bio/02.webp", "/bio/03.webp", "/bio/04.webp", "/bio/05.webp",
  "/bio/06.webp", "/bio/07.webp", "/bio/08.webp", "/bio/09.webp", "/bio/10.webp",
];

const EXTENDED = [...BIO_PHOTOS, BIO_PHOTOS[0], BIO_PHOTOS[1], BIO_PHOTOS[2]];

function BioCarousel() {
  const [idx, setIdx] = useState(0);
  const [transition, setTransition] = useState(true);
  const n = BIO_PHOTOS.length;

  useEffect(() => {
    const t = setInterval(() => {
      setTransition(true);
      setIdx((i) => i + 1);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (idx === n) {
      const reset = setTimeout(() => {
        setTransition(false);
        setIdx(0);
      }, 500);
      return () => clearTimeout(reset);
    }
  }, [idx, n]);

  return (
    <div className="mb-5 overflow-hidden rounded-xl">
      <div
        className="flex gap-2"
        style={{
          transform: `translateX(calc(-${idx * (100 / 3)}% - ${idx * (8 / 3)}px))`,
          transition: transition ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {EXTENDED.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Dr. Renan Gonçalves"
            className="aspect-square flex-shrink-0 rounded-lg object-cover"
            style={{ width: "calc(33.333% - 6px)" }}
          />
        ))}
      </div>
    </div>
  );
}

const REVIEWS = [
  { name: "Elias Rosendo dos Sa...", text: "Excelente recomendo", time: "8 meses atrás" },
  { name: "Vera lucia Lemes", text: "Dr Renan excelente profissional e equipe muito atenciosa. Nota 10", time: "6 meses atrás" },
  { name: "Erika Vieira", text: "Muito bem atendida excelentes advogados. Estão de parabéns", time: "7 meses atrás" },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbc05">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function LinksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Faixa benefício negado */}
      <a
        href="https://escrit-rio-gon-alves.vercel.app/beneficios-negados"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 bg-red-600 px-4 py-3 text-center text-xs font-semibold text-white transition-opacity hover:opacity-90"
      >
        <span className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-red-600">!</span>
        Benefício negado pelo INSS? Ainda dá tempo de recorrer — saiba como
        <span className="hidden sm:inline">→</span>
      </a>

      <div className="mx-auto max-w-lg px-4 pb-16 pt-10">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <div className="mb-6 flex items-center gap-4 text-xs font-bold tracking-[0.18em] text-white/40 uppercase">
            <span>Fé</span>
            <span>Esperança</span>
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/10">
              <img src="/bio/05.webp" alt="Dr. Renan Gonçalves" className="h-full w-full object-cover object-top" />
            </div>
            <span>Direito</span>
            <span>Justiça</span>
          </div>

          <p className="text-sm font-semibold text-white/90">Dr. Renan Gonçalves</p>
          <p className="mt-1 text-xs text-white/40">Advogado Previdenciário</p>

          <div className="mt-5 flex items-center gap-5">
            <a href={SITE.youtube} target="_blank" rel="noopener" className="text-white/50 transition-colors hover:text-white">
              <Youtube size={20} />
            </a>
            <a href={SITE.tiktok} target="_blank" rel="noopener" className="text-white/50 transition-colors hover:text-white">
              <TikTokIcon size={20} />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener" className="text-white/50 transition-colors hover:text-white">
              <Instagram size={20} />
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="text-white/50 transition-colors hover:text-white">
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              className="flex flex-col gap-2"
            >
              <a href={card.bannerHref} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl transition-opacity hover:opacity-90 active:opacity-75">
                <img src={card.banner} alt={card.bannerAlt} className="w-full" />
              </a>
              {card.zap && (
                <a href={card.zapHref!} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl transition-opacity hover:opacity-90 active:opacity-75 mb-8">
                  <img src={card.zap} alt={card.zapAlt!} className="w-full" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <BioCarousel />
          <p className="text-sm leading-relaxed text-white/55">
            Se você ainda não me conhece, prazer, eu sou o{" "}
            <strong className="text-white">Dr. Renan Gonçalves</strong>. Fundador do Escritório Gonçalves.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            Trago uma bagagem prática pois{" "}
            <strong className="text-white">já estive dentro do INSS como gerente</strong> e hoje também ensino
            advogados como professor. Isso me deu duas coisas que eu não abro mão: visão real do sistema por dentro
            e um jeito humano de atender quem chega aqui precisando de ajuda de verdade.
          </p>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <div className="mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-xs font-semibold text-white/50">Avaliações Google</span>
          </div>
          <div className="flex flex-col gap-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-[#4285F4] text-xs font-bold text-white">
                      {r.name[0]}
                    </div>
                    <span className="text-xs font-medium text-white/70">{r.name}</span>
                  </div>
                  <span className="text-[10px] text-white/30">{r.time}</span>
                </div>
                <StarRow />
                <p className="mt-2 text-xs leading-relaxed text-white/55">{r.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-10 text-center text-[10px] text-white/20">
          © {new Date().getFullYear()} {SITE.legal}
        </p>

      </div>
    </div>
  );
}

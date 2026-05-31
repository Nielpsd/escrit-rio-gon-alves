import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimate, stagger as fmStagger, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, Star, Shield, FileCheck, Folder, Scale, CheckSquare, FileText, Pencil, Upload, Stethoscope, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/laudo-certo")({
  head: () => ({
    meta: [
      { title: "Laudo Certo — Laudos médicos jurídicos para o INSS e Justiça" },
      { name: "description", content: "Laudos jurídicos prontos para o INSS e Justiça, com linguagem adequada e emissão 100% online via WhatsApp." },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/laudo-certo/icon-laudocerto.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400;1,9..40,700&display=swap" },
    ],
  }),
  component: LaudoCertoPage,
});

const F   = "'DM Sans', system-ui, sans-serif";
const BG  = "#f5fdff";
const DARK = "#1a2238";
const WA   = SITE.whatsapp;

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

const fromLeft = (d = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
});

const fromRight = (d = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
});

const scaleIn = (d = 0) => ({
  initial: { opacity: 0, scale: 0.88 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] },
});

const floatAnim = (delay = 0, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
});

const pulseAnim = (delay = 0) => ({
  animate: { scale: [1, 1.03, 1], opacity: [1, 0.88, 1] },
  transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
});

const glowPulse = {
  animate: { opacity: [0.08, 0.18, 0.08] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item    = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

/* ── helpers ── */
const GradText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent ${className}`}>{children}</span>
);

const HERO_WORDS = ['segurança', 'confiança', 'precisão', 'agilidade', 'excelência']

function CyclingHighlight() {
  const [word, setWord] = useState(HERO_WORDS[0])
  const wordRef = useRef(HERO_WORDS[0])
  const [scope, animate] = useAnimate()
  const busy = useRef(false)

  const getLetters = () => Array.from(scope.current?.querySelectorAll('.cletter') ?? [])

  // anima a primeira palavra ao montar
  useEffect(() => {
    animate(getLetters(), { y: '0%' }, {
      type: 'spring',
      duration: 0.85,
      bounce: 0.1,
      delay: fmStagger(0.05, { from: 'first' }),
    })
  }, [])

  const advance = useCallback(async () => {
    if (busy.current || !scope.current) return
    busy.current = true

    // saída: da última letra para a primeira
    await animate(getLetters(), { y: '110%' }, {
      duration: 0.4,
      ease: 'easeIn',
      delay: fmStagger(0.03, { from: 'last' }),
    })

    const nextWord = HERO_WORDS[(HERO_WORDS.indexOf(wordRef.current) + 1) % HERO_WORDS.length]
    wordRef.current = nextWord
    setWord(nextWord)

    // aguarda re-render — novas letras já nascem em y:110% pelo style do JSX
    await new Promise(r => requestAnimationFrame(r))

    // entrada: da primeira para a última
    await animate(getLetters(), { y: '0%' }, {
      type: 'spring',
      duration: 0.65,
      bounce: 0.1,
      delay: fmStagger(0.035, { from: 'first' }),
    })

    busy.current = false
  }, [animate])

  useEffect(() => {
    const id = setInterval(advance, 7000)
    return () => clearInterval(id)
  }, [advance])

  return (
    <motion.span layout className="relative inline-flex items-center" ref={scope}
      transition={{ layout: { type: 'spring', duration: 0.5, bounce: 0.15 } }}>
      <span className="relative z-10 font-bold italic bg-gradient-to-r from-[#5389ff] to-[#295ccc] bg-clip-text text-transparent inline-flex overflow-hidden px-3">
        {word.split('').map((ch, i) => (
          <span key={`${word}-${i}`} className="cletter" style={{ display: 'inline-block', transform: 'translateY(110%)' }}>
            {ch}
          </span>
        ))}
      </span>
      <motion.span layout className="absolute inset-0 -mx-2 rounded-[8px] bg-white z-0" aria-hidden
        transition={{ layout: { type: 'spring', duration: 0.5, bounce: 0.15 } }} />
    </motion.span>
  )
}

/* Curvas assimétricas tipo S — dois pontos de inflexão, mais orgânicas */
function WaveBottom({ fill = BG }: { fill?: string }) {
  return (
    <svg viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden
      className="absolute bottom-0 left-0 w-full h-[72px] z-10 pointer-events-none">
      <path d="M0,72 L0,38 C200,4 480,62 720,28 C960,-6 1220,52 1440,22 L1440,72 Z" fill={fill} />
    </svg>
  );
}

function WaveTop({ fill = BG }: { fill?: string }) {
  return (
    <svg viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden
      className="absolute top-0 left-0 w-full h-[72px] z-10 pointer-events-none">
      <path d="M0,0 L0,22 C200,52 480,6 720,40 C960,72 1220,18 1440,50 L1440,0 Z" fill={fill} />
    </svg>
  );
}

function Btn({ children, outline = false, white = false, href = WA, sm = false, extraPx }: {
  children: React.ReactNode; outline?: boolean; white?: boolean; href?: string; sm?: boolean; extraPx?: string;
}) {
  const shine = `relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.55)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position] before:duration-700 hover:before:bg-[position:-100%_0,0_0]`;
  const px = extraPx ?? (sm ? "px-7" : "px-10");
  const base = `inline-flex items-center justify-center font-bold rounded-full transition-all cursor-pointer ${px} ${sm ? "py-3 text-[15px]" : "py-4 text-[17px]"} ${shine}`;
  const cls = white
    ? `${base} bg-white`
    : outline
    ? `${base} border-2 border-[#5389ff] text-[#5389ff]`
    : `${base} bg-gradient-to-r from-[#5389ff] to-[#295ccc] text-white shadow-[0_4px_24px_rgba(83,137,255,0.35)]`;
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
      className={cls} style={{ fontFamily: F }}>
      <span className="relative z-10 text-center w-full">{white ? <GradText>{children}</GradText> : children}</span>
    </motion.a>
  );
}

const PAINS = [
  "Documento médico genérico, sem utilidade processual",
  "Laudo sem CID ou termos jurídicos relevantes",
  "Falta de comprovação da incapacidade ou nexo causal",
  "Cliente frustrado por indeferimento do INSS",
  "Perda de tempo com retrabalho ou nova perícia",
];

const FAQ_ITEMS = [
  { q: "Qual a diferença entre esse laudo e um atestado comum?", a: "O laudo da Laudo Certo é produzido com linguagem jurídica, incluindo CID, nexo causal e terminologia adequada para uso processual — o que um atestado simples geralmente não tem." },
  { q: "Preciso fazer uma consulta médica?", a: "Não necessariamente. O médico analisa seus documentos e, se necessário, realiza uma videochamada para avaliação complementar." },
  { q: "Quais documentos preciso enviar?", a: "Exames laboratoriais, relatórios médicos e quaisquer comprovantes da condição de saúde. A equipe avalia e informa se há algo adicional necessário." },
  { q: "Esse laudo serve para qualquer tipo de benefício?", a: "Sim. Os laudos são adaptados para benefícios por incapacidade, auxílio-doença, aposentadoria por invalidez, ações judiciais e concursos públicos." },
  { q: "Em quanto tempo o laudo fica pronto?", a: "Geralmente entre 3 a 7 dias úteis após o recebimento e análise dos documentos, dependendo da complexidade do caso." },
];

/* ── página ── */
function LaudoCertoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("laudo-certo-page");
    return () => document.body.classList.remove("laudo-certo-page");
  }, []);

  return (
    <div className="relative overflow-x-hidden" style={{ fontFamily: F, backgroundColor: BG }}>
      <style>{`
        body.laudo-certo-page .back-to-top {
          background: linear-gradient(135deg, #5389ff, #295ccc) !important;
          border-color: transparent !important;
          color: white !important;
          box-shadow: 0 4px_20px rgba(83,137,255,0.45) !important;
        }
        body.laudo-certo-page .back-to-top:hover {
          background: linear-gradient(135deg, #6699ff, #3366dd) !important;
          border-color: transparent !important;
          color: white !important;
        }
        @media (min-width: 768px) {
          .hero-section { background: #F5FDFF !important; }
          .faq-section  { background: #F5FDFF !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] px-4">
        <div className="flex items-center justify-between h-[60px] pl-7 pr-4 rounded-full
          border border-white/50 backdrop-blur-xl bg-white/85
          shadow-[0_4px_28px_rgba(83,137,255,0.12)]">

          {/* Logo */}
          <a href="/laudo-certo" className="flex-shrink-0" aria-label="Laudo Certo">
            <svg width="148" height="26" viewBox="0 0 246 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.1442 0C33.3074 1.56429 31.0198 2.4641 28.7555 3.21836C27.4441 3.63516 26.1108 3.98732 24.7631 4.27061C25.4832 5.08615 26.0268 6.06129 26.3339 7.13622C26.6544 7.0585 26.9743 6.97855 27.2935 6.89675C29.9868 6.17192 32.6662 5.26743 35.0575 3.80694C35.2356 3.6753 35.4044 3.88902 35.5624 3.95097C38.4865 5.66389 41.7854 6.57926 45.0626 7.34124C46.8313 7.73465 48.6279 7.98093 50.4106 8.29222C50.3719 11.2937 50.392 14.2937 50.3687 17.2952C50.3439 21.8208 49.108 26.3417 46.7693 30.2213C44.1055 34.7453 39.947 38.2873 35.2356 40.5424C32.9961 39.5744 30.9656 38.182 29.1025 36.6178C28.2336 35.8533 27.3981 35.0454 26.6184 34.1878V34.78C26.6184 35.9552 26.345 37.0665 25.8585 38.0539C27.3268 39.4328 28.9349 40.6623 30.6482 41.7225C32.1257 42.5852 33.6311 43.4308 35.2589 43.976C37.6997 43.1025 39.9454 41.7272 42.0239 40.1877C46.5618 36.8532 50.0388 32.1093 51.8695 26.7845C52.9737 23.6483 53.4121 20.3091 53.3981 16.9932C53.3966 13.0284 53.4321 9.06189 53.4136 5.09704C49.7182 5.03507 46.0337 4.48066 42.4901 3.42592C39.8974 2.64999 37.311 1.6603 35.1442 0Z" fill="url(#nav-g0)"/>
              <path d="M25.6021 34.78V30.9396C25.6021 29.5367 26.7305 28.3973 28.1293 28.3796L28.1623 28.3794H32.0027C35.5377 28.3794 38.4033 25.5138 38.4033 21.9788C38.4033 18.4438 35.5377 15.5782 32.0027 15.5782H28.1623L28.1293 15.578C26.7415 15.5604 25.6199 14.4388 25.6023 13.051L25.6021 13.018V9.17758C25.6021 5.64263 22.7365 2.77698 19.2015 2.77698C15.6665 2.77698 12.8009 5.64263 12.8009 9.17758V13.018L12.8007 13.051C12.783 14.4498 11.6436 15.5782 10.2407 15.5782H6.40029C2.86533 15.5782 -0.000312805 18.4438 -0.000312805 21.9788C-0.000312805 25.5138 2.86533 28.3794 6.40029 28.3794H10.2407C11.6546 28.3794 12.8009 29.5257 12.8009 30.9396V34.78C12.8009 38.315 15.6665 41.1806 19.2015 41.1806C22.7365 41.1806 25.6021 38.315 25.6021 34.78Z" fill="#1A2238"/>
              <path d="M235.515 32.5665C234.155 32.5665 232.974 32.2663 231.973 31.6659C230.973 31.0456 230.212 30.2051 229.692 29.1444C229.172 28.0838 228.952 26.8731 229.032 25.5123C229.072 24.2715 229.332 23.1209 229.812 22.0602C230.292 20.9796 230.933 20.049 231.733 19.2686C232.554 18.4681 233.494 17.8477 234.555 17.4075C235.616 16.9472 236.766 16.717 238.007 16.717C239.368 16.717 240.548 17.0172 241.549 17.6176C242.55 18.2179 243.31 19.0484 243.83 20.1091C244.371 21.1497 244.611 22.3604 244.551 23.7412C244.491 25.002 244.221 26.1727 243.74 27.2533C243.26 28.3139 242.61 29.2445 241.789 30.045C240.969 30.8455 240.028 31.4658 238.968 31.9061C237.907 32.3463 236.756 32.5665 235.515 32.5665ZM236.056 29.0544C236.856 29.0544 237.567 28.8443 238.187 28.424C238.827 27.9837 239.338 27.3734 239.718 26.5929C240.118 25.8125 240.338 24.9119 240.378 23.8913C240.438 23.1108 240.348 22.4505 240.108 21.9101C239.868 21.3498 239.518 20.9295 239.058 20.6494C238.617 20.3692 238.097 20.2291 237.497 20.2291C236.716 20.2291 236.006 20.4493 235.365 20.8895C234.745 21.3298 234.235 21.9402 233.835 22.7206C233.454 23.4811 233.234 24.3716 233.174 25.3922C233.134 26.1727 233.234 26.8431 233.474 27.4034C233.714 27.9437 234.055 28.354 234.495 28.6341C234.955 28.9143 235.475 29.0544 236.056 29.0544Z" fill="url(#nav-g1)"/>
              <path d="M222.458 32.2063C221.278 32.2063 220.317 32.0162 219.577 31.636C218.856 31.2557 218.366 30.6754 218.106 29.8949C217.846 29.0944 217.826 28.0939 218.046 26.8931L219.187 20.4693H216.665L217.265 17.0773H219.787L220.958 12.9648H224.59L223.839 17.0773H227.832L227.231 20.4693H223.239L222.098 26.9232C221.978 27.6236 222.058 28.1039 222.338 28.364C222.619 28.6242 223.079 28.7542 223.719 28.7542H225.82L225.19 32.2063H222.458Z" fill="url(#nav-g2)"/>
              <path d="M203.362 32.2063L206.004 17.0773H209.636L209.546 19.8089C210.026 19.1685 210.577 18.6282 211.197 18.1879C211.837 17.7276 212.538 17.3674 213.298 17.1073C214.059 16.8471 214.859 16.717 215.7 16.717L214.979 21.0096H213.568C212.968 21.0096 212.398 21.0796 211.857 21.2197C211.337 21.3398 210.857 21.5599 210.417 21.8801C209.996 22.1803 209.636 22.5905 209.336 23.1108C209.036 23.6312 208.816 24.2815 208.675 25.062L207.415 32.2063H203.362Z" fill="url(#nav-g3)"/>
              <path d="M192.481 32.5665C191.1 32.5665 189.91 32.2863 188.909 31.726C187.928 31.1656 187.178 30.3752 186.658 29.3546C186.157 28.334 185.947 27.1432 186.027 25.7824C186.067 24.5217 186.317 23.351 186.778 22.2703C187.258 21.1697 187.908 20.2091 188.729 19.3886C189.549 18.5481 190.51 17.8977 191.611 17.4375C192.711 16.9572 193.932 16.717 195.273 16.717C196.634 16.717 197.794 16.9972 198.755 17.5575C199.715 18.1179 200.436 18.8783 200.916 19.8389C201.396 20.7995 201.607 21.9101 201.547 23.1709C201.547 23.5911 201.497 24.0214 201.396 24.4617C201.316 24.8819 201.226 25.2721 201.126 25.6323H188.879L189.299 23.1709H197.524C197.604 22.4905 197.534 21.9201 197.314 21.4599C197.094 20.9796 196.754 20.6194 196.293 20.3792C195.853 20.1391 195.333 20.019 194.732 20.019C194.032 20.019 193.362 20.1791 192.721 20.4993C192.101 20.7995 191.571 21.2698 191.13 21.9101C190.69 22.5505 190.38 23.361 190.2 24.3416L190.05 25.2121C189.91 25.9926 189.93 26.693 190.11 27.3133C190.31 27.9137 190.66 28.394 191.16 28.7542C191.661 29.0944 192.281 29.2645 193.021 29.2645C193.782 29.2645 194.432 29.1044 194.973 28.7842C195.513 28.464 195.953 28.0538 196.293 27.5535H200.436C199.976 28.4941 199.345 29.3446 198.545 30.105C197.764 30.8655 196.854 31.4658 195.813 31.9061C194.793 32.3463 193.682 32.5665 192.481 32.5665Z" fill="url(#nav-g4)"/>
              <path d="M172.571 32.5664C170.69 32.5664 169.099 32.1862 167.798 31.4258C166.517 30.6653 165.567 29.6147 164.946 28.2739C164.326 26.9131 164.056 25.3321 164.136 23.5311C164.216 21.71 164.576 20.029 165.216 18.4881C165.857 16.9471 166.717 15.6063 167.798 14.4657C168.899 13.305 170.169 12.4144 171.61 11.7941C173.071 11.1537 174.652 10.8335 176.353 10.8335C178.875 10.8335 180.836 11.4639 182.237 12.7246C183.657 13.9854 184.368 15.7664 184.368 18.0678H179.895C179.875 16.9471 179.505 16.0766 178.785 15.4562C178.064 14.8159 177.033 14.4957 175.693 14.4957C174.652 14.4957 173.691 14.7158 172.811 15.1561C171.95 15.5763 171.19 16.1767 170.53 16.9571C169.869 17.7376 169.349 18.6582 168.969 19.7188C168.588 20.7794 168.368 21.9301 168.308 23.1708C168.248 24.3916 168.398 25.4322 168.759 26.2927C169.139 27.1332 169.699 27.7836 170.44 28.2439C171.2 28.7041 172.121 28.9343 173.201 28.9343C174.542 28.9343 175.663 28.6441 176.563 28.0638C177.464 27.4834 178.134 26.6529 178.574 25.5723H183.047C182.527 27.0532 181.756 28.3139 180.736 29.3545C179.735 30.3951 178.534 31.1956 177.134 31.756C175.753 32.2963 174.232 32.5664 172.571 32.5664Z" fill="url(#nav-g5)"/>
              <path d="M146.134 32.5665C144.693 32.5665 143.393 32.2363 142.232 31.5759C141.091 30.8955 140.181 29.9649 139.5 28.7842C138.84 27.5835 138.51 26.2127 138.51 24.6718C138.51 23.0908 138.84 21.71 139.5 20.5293C140.181 19.3286 141.101 18.398 142.262 17.7376C143.423 17.0572 144.723 16.717 146.164 16.717C147.625 16.717 148.926 17.0572 150.067 17.7376C151.227 18.398 152.138 19.3286 152.798 20.5293C153.479 21.71 153.819 23.0808 153.819 24.6418C153.819 26.2027 153.479 27.5835 152.798 28.7842C152.138 29.9649 151.227 30.8955 150.067 31.5759C148.906 32.2363 147.595 32.5665 146.134 32.5665ZM146.134 29.0544C146.815 29.0544 147.415 28.8943 147.935 28.5741C148.476 28.2539 148.896 27.7636 149.196 27.1032C149.516 26.4428 149.676 25.6223 149.676 24.6418C149.676 23.6612 149.516 22.8507 149.196 22.2103C148.896 21.5499 148.476 21.0596 147.935 20.7394C147.415 20.3992 146.825 20.2291 146.164 20.2291C145.524 20.2291 144.934 20.3992 144.393 20.7394C143.853 21.0596 143.423 21.5499 143.102 22.2103C142.802 22.8507 142.652 23.6612 142.652 24.6418C142.652 25.6223 142.802 26.4428 143.102 27.1032C143.423 27.7636 143.843 28.2539 144.363 28.5741C144.904 28.8943 145.494 29.0544 146.134 29.0544Z" fill="#1A2238"/>
              <path d="M126.044 32.5665C124.663 32.5665 123.423 32.2263 122.322 31.5459C121.241 30.8655 120.391 29.9249 119.77 28.7242C119.15 27.5235 118.84 26.1727 118.84 24.6718C118.84 23.1308 119.15 21.77 119.77 20.5893C120.411 19.3886 121.281 18.4481 122.382 17.7677C123.503 17.0672 124.753 16.717 126.134 16.717C127.215 16.717 128.165 16.9171 128.986 17.3174C129.806 17.7176 130.467 18.288 130.967 19.0284V10.5934H135.019V32.2063H131.417L130.967 30.135C130.667 30.5553 130.287 30.9555 129.826 31.3357C129.386 31.716 128.856 32.0161 128.235 32.2363C127.615 32.4564 126.885 32.5665 126.044 32.5665ZM127.005 29.0244C127.805 29.0244 128.506 28.8442 129.106 28.484C129.726 28.1038 130.207 27.5835 130.547 26.9231C130.887 26.2627 131.057 25.5023 131.057 24.6417C131.057 23.7812 130.887 23.0208 130.547 22.3604C130.207 21.7 129.726 21.1897 129.106 20.8295C128.506 20.4493 127.805 20.2591 127.005 20.2591C126.244 20.2591 125.554 20.4493 124.933 20.8295C124.313 21.1897 123.823 21.7 123.463 22.3604C123.122 23.0208 122.952 23.7712 122.952 24.6117C122.952 25.4923 123.122 26.2627 123.463 26.9231C123.823 27.5835 124.303 28.1038 124.903 28.484C125.524 28.8442 126.224 29.0244 127.005 29.0244Z" fill="#1A2238"/>
              <path d="M106.466 32.5665C105.245 32.5665 104.195 32.3163 103.314 31.816C102.454 31.2957 101.793 30.5453 101.333 29.5647C100.873 28.5641 100.643 27.3334 100.643 25.8725V17.0773H104.695V25.4523C104.695 26.673 104.945 27.5935 105.445 28.2139C105.966 28.8343 106.756 29.1445 107.817 29.1445C108.497 29.1445 109.098 28.9944 109.618 28.6942C110.138 28.374 110.548 27.9237 110.849 27.3434C111.169 26.743 111.329 26.0126 111.329 25.1521V17.0773H115.351V32.2063H111.809L111.479 29.7448C111.039 30.6053 110.388 31.2957 109.528 31.816C108.667 32.3163 107.647 32.5665 106.466 32.5665Z" fill="#1A2238"/>
              <path d="M88.3368 32.5665C87.076 32.5665 86.0354 32.3664 85.2149 31.9661C84.3944 31.5459 83.7841 30.9955 83.3838 30.3151C83.0036 29.6147 82.8135 28.8443 82.8135 28.0038C82.8135 27.0832 83.0436 26.2727 83.5039 25.5723C83.9842 24.8719 84.6946 24.3216 85.6352 23.9213C86.5957 23.5211 87.7964 23.321 89.2373 23.321H92.9895C92.9895 22.5805 92.8895 21.9702 92.6894 21.4899C92.4892 20.9896 92.1791 20.6194 91.7588 20.3792C91.3386 20.1391 90.7782 20.019 90.0778 20.019C89.3173 20.019 88.667 20.1891 88.1266 20.5293C87.6063 20.8495 87.2861 21.3498 87.1661 22.0302H83.2337C83.3338 20.9496 83.684 20.019 84.2844 19.2385C84.9047 18.4381 85.7152 17.8177 86.7158 17.3774C87.7364 16.9372 88.8671 16.717 90.1078 16.717C91.5287 16.717 92.7594 16.9572 93.8 17.4375C94.8406 17.9178 95.6411 18.6082 96.2014 19.5087C96.7618 20.4092 97.0419 21.5199 97.0419 22.8407V32.2063H93.6199L93.1696 29.8949C92.9495 30.2951 92.6894 30.6553 92.3892 30.9755C92.089 31.2957 91.7388 31.5759 91.3386 31.816C90.9383 32.0562 90.488 32.2363 89.9877 32.3564C89.4874 32.4964 88.9371 32.5665 88.3368 32.5665ZM89.2973 29.4446C89.8176 29.4446 90.2779 29.3546 90.6782 29.1745C91.0984 28.9743 91.4586 28.7142 91.7588 28.394C92.059 28.0538 92.2891 27.6736 92.4492 27.2533C92.6293 26.8131 92.7494 26.3428 92.8094 25.8425V25.8125H89.7176C89.0972 25.8125 88.5869 25.8925 88.1867 26.0526C87.8064 26.1927 87.5263 26.4028 87.3462 26.683C87.1661 26.9631 87.076 27.2833 87.076 27.6435C87.076 28.0438 87.1661 28.374 87.3462 28.6341C87.5263 28.8943 87.7864 29.0944 88.1266 29.2345C88.4668 29.3746 88.8571 29.4446 89.2973 29.4446Z" fill="#1A2238"/>
              <path d="M66.5859 32.2062V11.1937H70.6384V29.0544H79.8538V32.2062H66.5859Z" fill="#1A2238"/>
              <defs>
                <linearGradient id="nav-g0" x1="53.4189" y1="21.988" x2="24.7631" y2="21.988" gradientUnits="userSpaceOnUse"><stop stopColor="#5389FF"/><stop offset="1" stopColor="#295CCC"/></linearGradient>
                <linearGradient id="nav-g1" x1="229.016" y1="24.6418" x2="244.56" y2="24.6418" gradientUnits="userSpaceOnUse"><stop stopColor="#5389FF"/><stop offset="1" stopColor="#295CCC"/></linearGradient>
                <linearGradient id="nav-g2" x1="216.665" y1="22.5856" x2="227.832" y2="22.5856" gradientUnits="userSpaceOnUse"><stop stopColor="#5389FF"/><stop offset="1" stopColor="#295CCC"/></linearGradient>
                <linearGradient id="nav-g3" x1="203.362" y1="24.4617" x2="215.7" y2="24.4617" gradientUnits="userSpaceOnUse"><stop stopColor="#5389FF"/><stop offset="1" stopColor="#295CCC"/></linearGradient>
                <linearGradient id="nav-g4" x1="186.011" y1="24.6418" x2="201.557" y2="24.6418" gradientUnits="userSpaceOnUse"><stop stopColor="#5389FF"/><stop offset="1" stopColor="#295CCC"/></linearGradient>
                <linearGradient id="nav-g5" x1="164.122" y1="21.7" x2="184.368" y2="21.7" gradientUnits="userSpaceOnUse"><stop stopColor="#5389FF"/><stop offset="1" stopColor="#295CCC"/></linearGradient>
              </defs>
            </svg>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 ml-auto"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: '#1a2238' }} />
            <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#1a2238' }} />
            <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: '#1a2238' }} />
          </button>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium" style={{ color: DARK }}>
            {[
              { href: "#inicio",     label: "Início" },
              { href: "#como",       label: "Como Funciona" },
              { href: "#quem-somos", label: "Quem está por trás" },
            ].map(({ href, label }) => (
              <a key={href} href={href}
                className="relative py-1 text-[14px] font-medium transition-colors hover:text-[#5389ff] group"
                style={{ color: DARK, fontFamily: F }}>
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#5389ff] to-[#295ccc] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-[13px]
              bg-gradient-to-r from-[#5389ff] to-[#295ccc] shadow-[0_2px_16px_rgba(83,137,255,0.45)]
              relative overflow-hidden
              before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[position:200%_0] before:bg-no-repeat before:transition-[background-position] before:duration-700 hover:before:bg-[position:-100%_0]
              transition-transform hover:scale-105"
            style={{ fontFamily: F }}>
            <span className="relative z-10">Falar com especialista</span>
          </a>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/50 backdrop-blur-xl bg-white/90 shadow-[0_4px_28px_rgba(83,137,255,0.12)] px-6 py-4 flex flex-col gap-4">
            {[
              { href: "#inicio",     label: "Início" },
              { href: "#como",       label: "Como Funciona" },
              { href: "#quem-somos", label: "Quem está por trás" },
            ].map(({ href, label }) => (
              <a key={href} href={href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium py-1 border-b border-[#1a2238]/8 last:border-0"
                style={{ color: '#1a2238' }}>
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-[640px] h-auto md:h-[750px] flex items-center
        pt-28 pb-16 md:pt-36 md:pb-24 hero-section bg-gradient-to-br from-[#5389ff] to-[#295ccc]">
        <svg aria-hidden viewBox="0 0 2560 900" preserveAspectRatio="xMidYMin meet"
          className="hidden md:block"
          style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: '750px', width: 'auto', pointerEvents: 'none' }}>
          <path d="M2274.09 -1337.14C2295.08 -1325.95 2309.99 -1305.99 2314.79 -1282.7L2558.36 -100.679C2560.07 -92.3936 2558.23 -83.772 2553.29 -76.9069L2534.72 -51.1107C2528.07 -41.8781 2534.67 -28.998 2546.04 -28.998C2553.75 -28.998 2560 -22.749 2560 -15.0405V736.002C2560 780.185 2524.18 816.002 2480 816.002H1951.4C1925.67 816.002 1901.51 828.378 1886.47 849.259L1873.78 866.884C1858.75 887.765 1834.59 900.141 1808.86 900.141H750.14C724.41 900.141 700.25 887.765 685.216 866.884L672.527 849.259C657.493 828.378 633.333 816.002 607.603 816.002H80.0001C35.8174 816.002 0 780.185 0 736.002V-15.3793C0 -22.9008 6.09734 -28.998 13.6188 -28.998C24.7193 -28.998 31.157 -41.5656 24.6711 -50.5741L5.71238 -76.9069C0.769729 -83.772 -1.07141 -92.3936 0.63586 -100.679L244.206 -1282.7C249.006 -1305.99 263.923 -1325.95 284.908 -1337.14L1241.85 -1847.59C1265.38 -1860.14 1293.62 -1860.14 1317.15 -1847.59L2274.09 -1337.14Z" fill="url(#hero-grad)"/>
          <defs>
            <linearGradient id="hero-grad" x1="0" y1="-478.43" x2="2560" y2="-478.43" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5389FF"/>
              <stop offset="1" stopColor="#295CCC"/>
            </linearGradient>
          </defs>
        </svg>

        <div className="relative mx-auto max-w-[1280px] px-6 w-full flex flex-col items-center text-center gap-5 md:gap-7 z-10">
          <motion.h1 {...up(0)}
            className="text-[42px] md:text-[76px] font-bold leading-[1.15] text-white max-w-[1050px] w-full"
            style={{ fontFamily: F }}>
            O laudo certo para o seu<br className="hidden md:block" />
            {" "}cliente conquistar o benefício<br className="hidden md:block" />
            <span>{" "}com{" "}<CyclingHighlight /></span>
          </motion.h1>

          <motion.p {...up(0.1)}
            className="text-white/85 text-[17px] md:text-[18px] font-light max-w-[700px] px-2 leading-relaxed"
            style={{ fontFamily: F }}>
            Obtenha{" "}
            <strong className="font-bold italic">laudos jurídicos prontos para o INSS e Justiça</strong>
            , com linguagem adequada e emissão 100% online via WhatsApp
          </motion.p>

          <motion.div {...up(0.18)} className="flex flex-wrap gap-2 items-center justify-center">
            {[
              { Icon: Star,      label: "Coordenação do Dr. Renan Gonçalves" },
              { Icon: Shield,    label: "Médico perito autorizado" },
              { Icon: FileCheck, label: "Análise prévia dos documentos" },
            ].map(({ Icon, label }, i) => (
              <motion.div key={label} {...floatAnim(i * 0.6, 6)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/50
                  backdrop-blur-sm text-white text-[12px] font-light"
                style={{ fontFamily: F }}>
                <Icon size={16} className="flex-shrink-0" />
                {label}
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...up(0.25)}>
            <Btn white extraPx="px-14">Falar com um especialista</Btn>
          </motion.div>
        </div>

      </section>

      {/* ── S02 COMO FUNCIONA ── */}
      <section id="como" className="relative py-14 md:py-20 lg:py-28 px-6" style={{ background: BG }}>

        <div className="mx-auto max-w-[1280px] flex flex-col gap-14 items-center">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center leading-[1.2]"
            style={{ fontFamily: F, color: DARK }}>
            Simples, direto e<br className="md:hidden" />{" "}
            <strong className="font-bold italic">
              <GradText>100% digital</GradText>
            </strong>
          </motion.h2>

          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[860px] mx-auto">
              {[
                { n: "01", Icon: Upload,       title: "Envio dos documentos",        desc: "Exames, relatórios médicos e outros documentos em PDF via WhatsApp" },
                { n: "02", Icon: Stethoscope,  title: "Avaliação médica criteriosa", desc: "O médico analisa tudo. Se necessário, faz videochamada para avaliação" },
                { n: "03", Icon: BadgeCheck,   title: "Emissão do laudo sob medida", desc: "Com os termos corretos para o caso, sempre dentro das normas do CFM" },
              ].map((s, idx) => (
                <motion.div key={s.n}
                  initial={{ opacity: 0, x: idx === 1 ? 0 : idx === 0 ? 40 : -40, scale: idx === 1 ? 0.82 : 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx === 1 ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center bg-white rounded-[28px] overflow-hidden
                    shadow-[0_4px_28px_rgba(83,137,255,0.12)] hover:shadow-[0_12px_48px_rgba(83,137,255,0.25)] border border-[#5389ff]/15 transition-shadow duration-300"
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}>
                  {/* Topo gradiente */}
                  <div className="relative w-full bg-gradient-to-br from-[#5389ff] to-[#295ccc] pt-8 pb-10 flex flex-col items-center gap-3 overflow-hidden">
                    {/* Glow interno */}
                    <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[180px] h-[120px] rounded-full bg-white/15 blur-[40px] pointer-events-none" />
                    {/* Número grande semitransparente no fundo */}
                    <span className="hidden md:block absolute bottom-[-16px] right-4 text-[50px] md:text-[80px] font-bold text-white/10 leading-none select-none pointer-events-none" style={{ fontFamily: F }}>{s.n}</span>
                    {/* Ícone */}
                    <motion.div {...floatAnim(idx * 0.5, 8)} className="relative z-10 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 flex-shrink-0">
                      <s.Icon size={24} className="text-white" strokeWidth={1.8} />
                    </motion.div>
                    {/* Label + número */}
                    <div className="relative z-10 flex flex-col items-center gap-0.5">
                      <span className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ fontFamily: F }}>Etapa</span>
                      <span className="text-white font-bold text-[32px] md:text-[44px] leading-none" style={{ fontFamily: F }}>{s.n}</span>
                    </div>
                  </div>
                  {/* Conteúdo */}
                  <div className="px-5 py-5 flex flex-col gap-2">
                    <p className="font-bold text-[18px] leading-snug" style={{ color: DARK, fontFamily: F }}>{s.title}</p>
                    <p className="font-light text-[15px] leading-relaxed text-[rgba(26,34,56,0.5)]" style={{ fontFamily: F }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          <motion.div {...up(0.15)} className="flex items-center justify-start md:justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="flex-shrink-0 mt-0.5">
              <path d="M12 2L2 20h20L12 2z" stroke="#e53e3e" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 9v5M12 16.5v.5" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="text-[14px] text-left md:text-center" style={{ color: DARK, fontFamily: F }}>
            o serviço é exclusivamente para emissão de laudos.{" "}
            Caso não existam documentos médicos mínimos, o laudo pode não ser emitido
            </p>
          </motion.div>

          <motion.div {...up(0.2)}>
            <Btn>Iniciar análise do meu caso</Btn>
          </motion.div>
        </div>
      </section>

      {/* ── S03 PARA ADVOGADOS ── */}
      <section className="relative py-14 md:py-20 lg:py-28 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12 items-center">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center leading-[1.2]"
            style={{ fontFamily: F, color: DARK }}>
            O laudo feito para{" "}
            <strong className="font-bold italic"><GradText>caber na sua tese</GradText></strong>
          </motion.h2>

          <motion.div {...up(0.1)}
            className="w-full rounded-[40px] bg-gradient-to-br from-[#5389ff] to-[#295ccc]
              shadow-[0_10px_48px_rgba(83,137,255,0.35)] overflow-hidden pt-8 p-5 md:p-8 lg:p-12 flex flex-col gap-6 md:gap-8">

            {/* Glow interno pulsante */}
            <motion.div {...glowPulse} className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-white blur-[80px] pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
              <p className="text-white font-bold text-[20px] md:text-[36px] leading-tight text-center md:text-left" style={{ fontFamily: F }}>
                Você já passou por isso:
              </p>
              <p className="text-white/50 text-[15px] font-light pb-1 flex-1 text-center md:text-right" style={{ fontFamily: F }}>
                Problemas que custam casos e clientes
              </p>
            </div>

            {/* Grid de dores + card destaque */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {PAINS.map((pain, i) => (
                <div key={pain}
                  className="flex gap-4 items-start bg-white/10 backdrop-blur-sm rounded-[20px] p-5 border border-white/15">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 10 10" width="9" height="9" aria-hidden>
                      <path d="M2 2L8 8M8 2L2 8" stroke="#e53e3e" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ fontFamily: F }}>0{i + 1}</span>
                    <p className="text-white font-semibold text-[15px] leading-snug" style={{ fontFamily: F }}>{pain}</p>
                  </div>
                </div>
              ))}

              {/* Card destaque — ocupa o slot vazio */}
              <motion.div {...floatAnim(0.3, 7)} className="relative flex flex-col justify-between gap-4 bg-white rounded-[20px] p-5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#e8f0ff] pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color: '#5389ff', fontFamily: F }}>A solução</span>
                  <p className="font-bold text-[15px] leading-snug" style={{ color: DARK, fontFamily: F }}>
                    Na Laudo Certo, o laudo não é apenas médico.
                  </p>
                  <p className="font-bold italic text-[15px]" style={{ fontFamily: F }}>
                    <GradText>É jurídico.</GradText>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Aviso com ícone SVG azul */}
          <motion.div {...up(0.2)} className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2L2 20h20L12 2z" stroke="#e53e3e" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 9v5M12 16.5v.5" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="font-semibold text-[15px]" style={{ color: DARK, fontFamily: F }}>
              Na Laudo Certo, o laudo não é apenas médico. É jurídico
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── S04 O QUE VOCÊ VAI RECEBER ── */}
      <section className="relative py-14 md:py-20 lg:py-28 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12 items-center">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center leading-[1.2]"
            style={{ fontFamily: F, color: DARK }}>
            O que você{" "}
            <strong className="font-bold italic"><GradText>vai receber</GradText></strong>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-50px" }}>

            {/* 4 cards menores — 2×2 */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                { Icon: FileText,    title: "Termos certos pro seu tipo de ação",    desc: "Linguagem adequada para BPC, auxílio-doença, aposentadoria por invalidez e ações judiciais" },
                { Icon: Pencil,      title: "Redação clara e pronta pra anexar",     desc: "Documento direto ao ponto, sem ambiguidades, pronto para protocolar" },
                { Icon: Scale,       title: "Alinhamento com INSS e Justiça",        desc: "Segue os critérios de avaliação do INSS e as exigências dos tribunais" },
                { Icon: CheckSquare, title: "Validação por médico e advogado",       desc: "Revisado com olhar médico e jurídico antes de chegar nas suas mãos" },
              ] as { Icon: React.ElementType; title: string; desc: string }[]).map(({ Icon, title, desc }) => (
                <motion.div key={title} variants={item}
                  className="bg-white rounded-[24px] p-6 flex flex-col gap-4 border border-[#5389ff]/10
                    shadow-[0_4px_24px_rgba(83,137,255,0.08)] hover:shadow-[0_12px_40px_rgba(83,137,255,0.18)] transition-shadow duration-300"
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}>
                  <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#5389ff] to-[#295ccc] flex items-center justify-center shadow-[0_4px_12px_rgba(83,137,255,0.35)]">
                    <Icon size={22} className="text-white" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="font-bold text-[17px] leading-snug" style={{ color: DARK, fontFamily: F }}>{title}</p>
                    <p className="text-[14px] font-light leading-relaxed text-[rgba(26,34,56,0.5)]" style={{ fontFamily: F }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Card featured — ocupa toda a altura */}
            <motion.div variants={item}
              className="relative bg-gradient-to-br from-[#5389ff] to-[#295ccc] rounded-[24px] p-8
                flex flex-col justify-between overflow-hidden
                shadow-[0_8px_40px_rgba(83,137,255,0.40)] min-h-[280px]"
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}>
              {/* Glows pulsantes */}
              <motion.div {...glowPulse} className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full bg-white/20 blur-[60px] pointer-events-none" />
              <motion.div animate={{ opacity: [0.06, 0.15, 0.06] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[-20px] left-[-20px] w-[140px] h-[140px] rounded-full bg-white blur-[40px] pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6">
                <motion.div {...floatAnim(0, 10)} className="w-14 h-14 rounded-[18px] bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center">
                  <Folder size={30} className="text-white" strokeWidth={1.5} />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <span className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ fontFamily: F }}>Versatilidade</span>
                  <p className="text-white font-bold text-[22px] leading-snug" style={{ fontFamily: F }}>
                    Serve para benefícios, ações e concursos
                  </p>
                  <p className="text-white/70 text-[15px] font-light leading-relaxed" style={{ fontFamily: F }}>
                    Um laudo que funciona em qualquer frente jurídica, do INSS à Justiça Federal.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 pt-5 border-t border-white/20">
                <p className="text-white/60 text-[13px] font-light" style={{ fontFamily: F }}>
                  Validado por advogados em todo o Brasil
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...up(0.2)} className="flex flex-col items-center gap-3">
            <p className="text-[rgba(26,34,56,0.5)] text-[14px]" style={{ fontFamily: F }}>
              Você faz o jurídico. A gente entrega o laudo ideal
            </p>
            <Btn>Quero laudo adaptado à minha tese</Btn>
          </motion.div>
        </div>
      </section>

      {/* ── S05 TAMBÉM PARA LEIGOS ── */}
      <section className="relative py-14 md:py-20 lg:py-28 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1100px] flex flex-col gap-10">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center leading-[1.2]"
            style={{ fontFamily: F, color: DARK }}>
            Não é advogado, mas{" "}
            <strong className="font-bold italic"><GradText>precisa de um laudo?</GradText></strong>
          </motion.h2>

          <motion.div {...up(0.08)}
            className="relative rounded-[32px] bg-gradient-to-br from-[#5389ff] to-[#295ccc]
              overflow-hidden shadow-[0_12px_50px_rgba(83,137,255,0.35)]">

            {/* Glows pulsantes */}
            <motion.div {...glowPulse} className="absolute top-[-60px] left-[20%] w-[400px] h-[300px] rounded-full bg-white/15 blur-[80px] pointer-events-none" />
            <motion.div animate={{ opacity: [0.04, 0.12, 0.04] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[-40px] right-[10%] w-[300px] h-[200px] rounded-full bg-white blur-[60px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_580px] items-center">

              {/* ── Copy ── */}
              <div className="flex flex-col gap-7 px-6 md:px-10 lg:px-16 py-8 md:py-12 relative z-10">

                {/* Badge */}
                <span className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-[12px] font-bold tracking-[0.15em] uppercase" style={{ fontFamily: F }}>
                  Para segurados também
                </span>

                {/* Sub-headline */}
                <p className="text-white text-[24px] md:text-[30px] leading-tight" style={{ fontFamily: F }}>
                  <span className="font-light">A gente também </span><strong className="font-bold italic">te ajuda!</strong>
                </p>

                {/* Body */}
                <p className="text-white/80 text-[17px] md:text-[18px] font-light leading-relaxed" style={{ fontFamily: F }}>
                  Segurados e trabalhadores <strong className="font-bold italic text-white">também podem solicitar laudos,</strong>{" "}
                  seja para dar entrada no INSS ou comprovar alguma condição de saúde em concursos públicos.
                </p>

                <Btn white>Solicitar meu laudo</Btn>
              </div>

              {/* ── Mockup ── */}
              <div className="flex items-center justify-center p-4 md:p-6 lg:py-8 lg:-ml-16 relative z-0">
                <img src="/laudo-certo/macbook.webp" alt="Laudo Certo no MacBook" loading="lazy"
                  className="w-full h-auto"
                  style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.45))" }} />
              </div>
            </div>
          </motion.div>

          {/* Pills + nota abaixo do card */}
          <motion.div {...up(0.15)} className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: "Entrada no INSS",           icon: <Shield size={13} strokeWidth={2} /> },
                { label: "Concursos públicos",         icon: <FileCheck size={13} strokeWidth={2} /> },
                { label: "Ações judiciais",            icon: <Scale size={13} strokeWidth={2} /> },
                { label: "100% online via WhatsApp",   icon: <Star size={13} strokeWidth={2} /> },
              ].map(({ label, icon }) => (
                <span key={label} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#5389ff]/20 shadow-sm text-[13px] font-medium" style={{ color: DARK, fontFamily: F }}>
                  <span className="text-[#5389ff] flex-shrink-0">{icon}</span>
                  {label}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="flex-shrink-0">
                <path d="M12 2L2 20h20L12 2z" stroke="#e53e3e" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 9v5M12 16.5v.5" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-[13px]" style={{ color: DARK, fontFamily: F }}>
                O serviço é exclusivo para emissão de laudos e exige documentos médicos prévios.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S07 QUEM ESTÁ POR TRÁS ── */}
      <section id="quem-somos" className="relative py-14 md:py-20 lg:py-28 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1100px] flex flex-col lg:flex-row gap-8 md:gap-14 items-center">

          {/* Foto */}
          <motion.img
            {...fromLeft(0)}
            src="/guia/renan03.webp"
            alt="Dr. Renan Gonçalves"
            loading="lazy"
            className="flex-shrink-0 w-full max-w-[380px] lg:w-[480px] h-auto block rounded-[28px] mx-auto"
            style={{ filter: "drop-shadow(0 16px 48px rgba(83,137,255,0.25))" }}
          />

          {/* Conteúdo */}
          <motion.div className="flex flex-col gap-5 flex-1 min-w-0" {...fromRight(0.15)}>

            {/* Label */}
            <span className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-[#5389ff]/30 text-[#5389ff] text-[12px] font-bold tracking-[0.15em] uppercase" style={{ fontFamily: F }}>
              Quem está por trás
            </span>

            {/* Headline com nome */}
            <h2 className="text-[34px] md:text-[54px] leading-[1.15]" style={{ fontFamily: F, color: DARK }}>
              <strong className="font-bold italic"><GradText>Dr. Renan Gonçalves</GradText></strong>
            </h2>

            {/* Credenciais */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Advogado Previdenciarista", icon: <Scale size={13} strokeWidth={2} /> },
                { label: "Ex-Gerente do INSS",        icon: <Shield size={13} strokeWidth={2} /> },
                { label: "Fundador da Laudo Certo",   icon: <Star size={13} strokeWidth={2} /> },
              ].map(({ label, icon }) => (
                <span key={label} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5389ff]/8 border border-[#5389ff]/15 text-[13px] font-medium" style={{ color: DARK, fontFamily: F }}>
                  <span className="text-[#5389ff] flex-shrink-0">{icon}</span>
                  {label}
                </span>
              ))}
            </div>

            {/* Bio resumida */}
            <p className="text-[17px] md:text-[18px] font-light leading-relaxed" style={{ color: "rgba(26,34,56,0.65)", fontFamily: F }}>
              Criei a Laudo Certo porque, na prática, sei o que derruba um processo previdenciário —{" "}
              <strong className="font-bold italic" style={{ color: DARK }}>e é quase sempre o laudo.</strong>{" "}
              Os laudos são produzidos por médicos peritos, com linguagem jurídica, dentro das normas do CFM.
            </p>

            <div className="w-fit"><Btn>Solicitar meu laudo</Btn></div>
          </motion.div>
        </div>
      </section>

      {/* ── S08 DEPOIMENTOS ── */}
      <section className="relative py-14 md:py-20 lg:py-28 px-6" style={{ background: BG }}>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12 items-center">
          <motion.h2 {...up(0)}
            className="text-[34px] md:text-[54px] font-light text-center leading-[1.2]"
            style={{ fontFamily: F, color: DARK }}>
            Laudos que{" "}
            <strong className="font-bold italic"><GradText>resolvem</GradText></strong>
            {" "}na prática
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-50px" }}>
            {[
              { text: "Antes, era uma luta explicar pro cliente que o laudo que ele trouxe não servia. Com a Laudo Certo, eu recebo o documento já no formato ideal pra anexar. Economiza tempo e aumenta a chance de deferimento.", name: "Dr. Rafael Oliveira",  role: "Advogado Previdenciarista",       img: "/laudo-certo/dep1.webp" },
              { text: "A gente usa direto nos nossos casos. O médico já entende o que precisa constar no laudo, o formato vem redondo. É quase como se fosse feito sob medida pra nossa petição.",                              name: "Dra. Camila Braga",     role: "Escritório Braga & Associados", img: "/laudo-certo/dep2.webp" },
              { text: "Sou advogado iniciante e sempre tive dificuldade com a parte médica dos processos. Esse serviço me dá confiança pra entrar com a ação sabendo que o laudo sustenta minha tese.",                         name: "Henrique Lacerda",     role: "Advogado autônomo",             img: "/laudo-certo/dep3.webp" },
            ].map((t, i) => (
              <motion.div key={t.name}
                variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                className="relative bg-white rounded-[24px] p-5 md:p-7 flex flex-col gap-4 md:gap-5
                  shadow-[0_4px_24px_rgba(83,137,255,0.10)] hover:shadow-[0_12px_40px_rgba(83,137,255,0.20)] border border-[#5389ff]/10 overflow-hidden transition-shadow duration-300"
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}>

                {/* Acento de cor no topo */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5389ff] to-[#295ccc]" />

                {/* Avatar + nome no topo */}
                <div className="flex items-center gap-3 pt-1">
                  <img src={t.img} alt={t.name} loading="lazy"
                    className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0"
                    style={{ filter: "drop-shadow(0 2px 8px rgba(83,137,255,0.25))" }} />
                  <div>
                    <p className="font-bold text-[15px]" style={{ color: DARK, fontFamily: F }}>{t.name}</p>
                    <p className="font-light text-[12px] text-[rgba(26,34,56,0.45)]" style={{ fontFamily: F }}>{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#5389ff" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[rgba(26,34,56,0.6)] text-[14px] italic font-light leading-relaxed flex-1" style={{ fontFamily: F }}>
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...up(0.2)} className="flex flex-col items-center gap-2">
            <Btn>Peça o seu laudo pelo WhatsApp</Btn>
            <p className="text-[rgba(26,34,56,0.5)] text-[13px]" style={{ fontFamily: F }}>
              Fácil, rápido e com retorno real no processo
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── S09 FAQ + FOOTER ── */}
      <section className="relative pt-20 md:pt-32 pb-10 px-6 overflow-hidden faq-section bg-gradient-to-br from-[#5389ff] to-[#295ccc]">

        {/* SVG background */}
        <svg aria-hidden viewBox="0 0 2560 900" preserveAspectRatio="xMidYMin meet"
          className="hidden md:block"
          style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: '750px', width: 'auto', pointerEvents: 'none', zIndex: 0 }}>
          <path d="M2560 1018C2560 1062.18 2524.18 1098 2480 1098H80C35.8172 1098 0 1062.18 0 1018V80C0 35.8172 35.8172 0 80 0H606.68C632.41 0 656.569 12.3757 671.603 33.2569L686.216 53.5536C701.25 74.4348 725.41 86.8105 751.14 86.8105H1809.86C1835.59 86.8105 1859.75 74.4348 1874.78 53.5536L1889.4 33.2569C1904.43 12.3757 1928.59 0 1954.32 0H2480C2524.18 0 2560 35.8172 2560 80V1018Z" fill="url(#footer-grad)"/>
          <defs>
            <linearGradient id="footer-grad" x1="0" y1="549" x2="2560" y2="549" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5389FF"/>
              <stop offset="1" stopColor="#295CCC"/>
            </linearGradient>
          </defs>
        </svg>

        <div className="relative mx-auto max-w-[1280px] z-10 flex flex-col lg:flex-row gap-8 md:gap-16">

          {/* ── Esquerda ── */}
          <motion.div className="flex flex-col gap-5 w-full lg:w-[360px] flex-shrink-0 self-start" {...up(0)}>
            {/* Label */}
            <span className="inline-flex w-fit items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-[12px] font-bold tracking-[0.15em] uppercase" style={{ fontFamily: F }}>
              Dúvidas
            </span>

            <h2 className="text-white font-light text-[34px] md:text-[42px] leading-[1.15]" style={{ fontFamily: F }}>
              Perguntas{" "}
              <strong className="font-bold italic">Frequentes</strong>
            </h2>

            <p className="text-white/65 text-[16px] font-light leading-relaxed" style={{ fontFamily: F }}>
              Não encontrou o que precisava? Fale diretamente com nossa equipe pelo WhatsApp.
            </p>

            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white rounded-full px-8 py-3.5
                font-bold text-[15px] w-fit shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
              style={{ fontFamily: F }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#5389ff" aria-hidden className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <GradText>Falar com o suporte</GradText>
            </a>
          </motion.div>

          {/* ── FAQ accordion ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-3 self-start">
            {FAQ_ITEMS.map((faq, i) => (
              <motion.div key={faq.q}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-[16px] border transition-colors duration-200 overflow-hidden ${openFaq === i ? 'bg-white/15 border-white/30' : 'bg-white/8 border-white/15 hover:bg-white/12'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-4 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4"
                  style={{ fontFamily: F }}>
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] flex-shrink-0" style={{ fontFamily: F }}>0{i + 1}</span>
                    <span className="text-white font-medium text-[16px] leading-snug">{faq.q}</span>
                  </div>
                  <ChevronDown size={18}
                    className={`text-white/60 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}>
                      <p className="px-6 pb-5 text-white/70 text-[15px] leading-relaxed pl-[calc(1.5rem+2rem)]"
                        style={{ fontFamily: F }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="py-5 px-6 border-t border-[rgba(26,34,56,0.08)]" style={{ background: '#fff' }}>
        <p className="text-center text-[rgba(26,34,56,0.35)] text-[13px]" style={{ fontFamily: F }}>
          Página de vendas produzida por <strong className="font-semibold text-[rgba(26,34,56,0.5)]">Niel Hart.</strong>
        </p>
      </footer>

    </div>
  );
}

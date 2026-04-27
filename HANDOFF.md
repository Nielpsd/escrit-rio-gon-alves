# Handoff: Escritório Gonçalves — Site jurídico previdenciário

**Data:** 2026-04-27
**Status:** Em andamento — home page concluída, páginas internas padronizadas, backend pendente de configuração

---

## 1. Objetivo

Site institucional para o Escritório Gonçalves, escritório de advocacia especializado em direito previdenciário com sede em Rondônia. O site foi gerado originalmente pelo Lovable (React + TanStack Start) e está sendo refinado visualmente, integrado com Supabase como backend, e preparado para deploy na Vercel com SSR. O trabalho é iterativo — o usuário aprova cada sessão de mudanças antes de prosseguir.

---

## 2. Contexto essencial

### Stack
- **Framework:** TanStack Start v1.167 (React 19 + Vite 7 + TypeScript)
- **Roteamento:** TanStack Router — file-based, rotas em `src/routes/`
- **Styling:** Tailwind CSS v4 + shadcn/ui, tema navy/gold via CSS vars
- **Animações:** Framer Motion (já instalado)
- **Config Vite:** `@lovable.dev/vite-tanstack-config` — NÃO adicionar plugins manualmente
- **Package manager:** Bun (mas npm funciona também)
- **Deploy:** Vercel via `api/server.js` (adapter Node.js → H3), `vercel.json` configurado
- **Backend:** Supabase (tabelas: `posts`, `messages`, `site_content`) — cliente em `src/lib/supabase.ts`

### Variáveis de ambiente necessárias (Vercel)
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

### Cores principais (CSS vars em `src/styles.css`)
```css
--navy: #0d1f3c
--gold: #e0a013
--gold-sat: #ffb400
--gold-light: #ffc338
--gold-pale: #fef3d4
```

### Decisões importantes já tomadas
- Removido `@cloudflare/vite-plugin` — não é Cloudflare Workers, é Vercel Node.js
- `vite.config.ts` tem apenas `spa: { enabled: true }` — não adicionar mais nada
- Admin usa `beforeLoad` guard no TanStack Router para isolamento de código real
- Blog tem fallback para dados hardcoded em `src/lib/posts.ts` quando Supabase não está configurado
- Formulário de contato salva no Supabase E abre WhatsApp simultaneamente
- OAB do Renan ainda está como placeholder `OAB/RO 00.000` em `src/lib/site.ts` — precisa ser corrigido

---

## 3. O que já foi feito

### Infraestrutura
- [x] Extração de `index.tsx` (era 731 linhas) para 10 componentes em `src/components/home/`
- [x] Fix 404 na Vercel: removido Cloudflare plugin, criado `api/server.js` (adapter H3↔Node.js) e `vercel.json`
- [x] Integração Supabase: `src/lib/supabase.ts`, `src/lib/database.types.ts`, migration SQL em `supabase/migrations/001_initial.sql`
- [x] Blog migrado para buscar do Supabase com fallback
- [x] Formulário de contato salva em Supabase
- [x] Login em `/login` com Supabase Auth
- [x] Painel `/admin` completo: blog CRUD, mensagens, conteúdo, configurações — com guard `beforeLoad`

### Home page — seções redesenhadas
- [x] **HeroSection** — imagem de fundo desktop (`/hero-bg.webp`) + mobile (`/hero-bg-mobile.webp`), headline em 3 linhas forçadas, subhead em 3 linhas, sem card de depoimento, sem "G" decorativo
- [x] **MarqueeStrip** — faixa dourada infinita com 10 termos previdenciários, 45s, separador ✦, espaçamento mx-10
- [x] **AuthoritySection** ("Sobre") — grid 4 colunas: foto Renan + stat "+15 anos" + 2 cards + foto escritório, fundo branco, animações Framer Motion
- [x] **HowItWorksSection** ("Como atuamos") — accordion expansível ao hover/click (estilo Solra), imagem animada à esquerda no desktop, sem botão CTA
- [x] **TeamSection** ("Equipe") — 3 advogados em cards expansíveis (320px altura, primeiro aberto por padrão) + equipe de apoio em avatares separados abaixo
- [x] **TestimonialsSection** — card navy rotativo com citação animada, seletor de clientes, badge Google linkando para avaliações reais, autoplay 4s
- [x] **FAQSection** — layout 2 colunas: título+card CTA navy (esquerda) + accordion com texto base (direita)
- [x] **BlogPreviewSection** — grid 3 cards com thumbnail navy, overlay dourado ao hover, tag, autor, data, animação stagger

### Páginas internas — padronização
- [x] **sobre.tsx** — removeu G decorativo, foto real Renan no hero, animações Framer Motion
- [x] **equipe.tsx** — removeu G, foto real Renan no destaque, motion
- [x] **servicos.tsx** — removeu G, cards com stagger animation
- [x] **contato.tsx** — removeu G, motion no hero
- [x] **blog.tsx** — removeu G, motion no hero

### Imagens disponíveis em `public/`
| Arquivo | Uso |
|---------|-----|
| `hero-bg.webp` | Hero desktop |
| `hero-bg-mobile.webp` | Hero mobile |
| `about-renan.webp` | Foto perfil Renan |
| `about-office.jpg` | Foto escritório |
| `renan-sf.png` | Foto Renan (alternativa) |
| `renan-recorte.webp` | Recorte Renan |

---

## 4. Estado atual

### O que funciona
- Home page completa com todas as seções redesenhadas e animadas
- Dev server rodando em `http://localhost:8080`
- Deploy na Vercel funcionando (branch `main` → auto-deploy)
- Todas as páginas internas com hero sem G decorativo e animações básicas
- Admin panel acessível em `/admin` (redireciona para `/login` sem auth)

### O que está pendente / não testado
- **Supabase não está configurado** na Vercel ainda — o blog usa dados hardcoded como fallback, mensagens do formulário não estão sendo salvas
- **OAB/RO** em `src/lib/site.ts` está como `OAB/RO 00.000` — precisa do número real
- **Fotos da equipe de apoio** — todos os membros têm placeholder (inicial), sem fotos reais
- **Fotos dos advogados** Letícia e Wesley — também sem foto (placeholder)
- Páginas `areas-de-atuacao.tsx` e `quero-me-aposentar.tsx` não foram revisadas nesta sessão

---

## 5. Próximos passos

1. **Configurar Supabase na Vercel** — adicionar `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nas env vars do projeto Vercel. Rodar a migration `supabase/migrations/001_initial.sql` no dashboard do Supabase.

2. **Criar usuário admin no Supabase** — Dashboard > Authentication > Users > Invite, com o email do Renan. Testar login em `/login` → `/admin`.

3. **Corrigir OAB/RO** — Atualizar `oab` em `src/lib/site.ts` com o número real.

4. **Revisar `areas-de-atuacao.tsx` e `quero-me-aposentar.tsx`** — aplicar o mesmo padrão das outras páginas (remover G decorativo se houver, adicionar Framer Motion no hero).

5. **Fotos da equipe** — quando o usuário enviar fotos dos advogados (Letícia, Wesley) e da equipe de apoio, substituir os placeholders em `TeamSection.tsx` e `equipe.tsx`.

6. **Google Places API** — para puxar avaliações reais do Google automaticamente em `TestimonialsSection`. Requer chave de API com backend (server function do TanStack Start).

7. **SEO** — verificar metatags de todas as páginas, adicionar sitemap, robots.txt.

---

## 6. Perguntas em aberto

- Qual o número real da OAB/RO do Dr. Renan? (está como placeholder)
- Quais são os cargos reais dos membros da equipe de apoio? (estão como "Assistente jurídica", "Paralegal", etc. — inventados)
- O usuário quer adicionar mais depoimentos à `TestimonialsSection`? Há mais avaliações reais no Google?
- Faz sentido criar um componente de "Resultados/Cases" para a home? O usuário ainda não pediu, mas pode querer.
- A página `/quero-me-aposentar` tem 354 linhas — precisa de revisão visual ou o conteúdo está bom?

---

## 7. Artefatos relevantes

### Repositório
```
GitHub: https://github.com/Nielpsd/escrit-rio-gon-alves
Branch: main
```

### Arquivos-chave
```
src/lib/site.ts                          — dados globais do escritório (OAB pendente)
src/lib/supabase.ts                      — cliente Supabase com flag supabaseConfigured
src/styles.css                           — CSS vars (navy, gold), keyframe marquee
src/routes/__root.tsx                    — layout global, WhatsApp FAB
src/components/home/HeroSection.tsx      — hero com imagens responsivas
src/components/home/MarqueeStrip.tsx     — faixa dourada (velocidade: 45s)
src/components/home/TeamSection.tsx      — cards expansíveis + avatares equipe
src/components/home/TestimonialsSection.tsx — card rotativo + badge Google
src/components/home/FAQSection.tsx       — accordion 2 colunas
src/routes/admin.tsx                     — guard beforeLoad → /login
supabase/migrations/001_initial.sql      — schema inicial (posts, messages, site_content)
api/server.js                            — adapter Vercel Node.js ↔ H3
vercel.json                              — config deploy Vercel
```

### Comandos úteis
```bash
# Dev local
bun dev   # ou: npm run dev
# Abre em http://localhost:8080

# Build de verificação
bun run build

# Git status
git log --oneline -10
```

### Google Maps (avaliações reais)
```
https://maps.app.goo.gl/mKcZ4Q73PkbPoaWD6
```

---

## 8. Instruções para a próxima sessão

**Tom:** O usuário é o dono do escritório ou designer do projeto. Aprecia respostas curtas e diretas. Não gosta de explicações longas desnecessárias. Prefere ver o resultado rápido e ajustar iterativamente.

**Ritmo:** Cada pedido de mudança visual → editar o arquivo → commit → push. O usuário vê na Vercel e pede ajustes. Não acumular mudanças.

**Padrão de código a manter:**
- Animações sempre com Framer Motion (`motion.div`, `whileInView`, `viewport={{ once: true }}`)
- Cores via CSS vars (`var(--navy)`, `var(--gold)`, etc.) — nunca hardcoded
- Cards: `rounded-2xl border border-[var(--border)] bg-white`
- Sem comentários no código, sem `G` decorativo nos headers
- Commits pequenos e descritivos em português

**Armadilhas a evitar:**
- NÃO adicionar plugins ao `vite.config.ts` — o `@lovable.dev/vite-tanstack-config` já inclui tudo
- NÃO usar `next/image` — é React puro, não Next.js
- NÃO usar `motion/react` como import — usar `framer-motion`
- Ao usar `Write` tool, sempre fazer `Read` primeiro no mesmo arquivo
- O Supabase client exporta `supabaseConfigured` — sempre checar antes de queries
- A rota `/admin` tem guard `beforeLoad` — não remover ou o isolamento de código quebra

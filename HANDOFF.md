# Handoff: Escritório Gonçalves — Site jurídico previdenciário

**Data:** 2026-04-27
**Status:** Em andamento — blog com Supabase funcional, editor rico implementado, pendências visuais e de conteúdo

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
- **Editor de texto rico:** Tiptap (instalado nesta sessão) — `@tiptap/react`, `@tiptap/starter-kit`, extensões de underline, link, placeholder, character-count
- **Config Vite:** `@lovable.dev/vite-tanstack-config` — NÃO adicionar plugins manualmente
- **Package manager:** npm (bun não está disponível no ambiente)
- **Deploy:** Vercel via `api/server.js` (adapter Node.js → H3), `vercel.json` configurado
- **Backend:** Supabase (tabelas: `posts`, `messages`, `site_content`) — cliente em `src/lib/supabase.ts`

### Supabase — projeto configurado
- **Project ID:** `pkjiruofjzbhiasamowd`
- **URL:** `https://pkjiruofjzbhiasamowd.supabase.co`
- **Storage bucket:** `post-images` (público) — para upload de imagens de capa dos posts
- **Env vars na Vercel:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` — todas configuradas e funcionando

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
- Admin usa `beforeLoad` guard no TanStack Router — agora com `if (typeof window === 'undefined') return` para evitar redirect no SSR
- Blog usa roteamento aninhado: `blog.tsx` (layout com `<Outlet />`), `blog.index.tsx` (lista), `blog.$slug.tsx` (artigo individual)
- Conteúdo dos posts salvo como **HTML** (gerado pelo Tiptap), não mais texto plano
- Posts hardcoded em `src/lib/posts.ts` servem como fallback se Supabase não estiver configurado
- Formulário de contato salva no Supabase E abre WhatsApp simultaneamente
- OAB do Renan está como `OAB/RO 00.000` em `src/lib/site.ts` — número real não fornecido ainda
- Imagens dos posts: campo `image` na tabela `posts`, armazenadas no bucket `post-images` do Supabase Storage

### Padrão de código a manter
- Animações: Framer Motion (`motion.div`, `whileInView`, `viewport={{ once: true }}`)
- Cores via CSS vars — nunca hardcoded
- Cards: `rounded-2xl border border-[var(--border)] bg-white`
- G decorativo nos cards CTA navy: `absolute -right-20 -top-20 font-display text-[420px] text-white/[0.03]` dentro de `relative overflow-hidden`
- Sem comentários no código, sem G decorativo nos heroes das páginas internas
- Commits pequenos e descritivos em português

---

## 3. O que já foi feito

### Infraestrutura
- [x] Extração de `index.tsx` (era 731 linhas) para 10 componentes em `src/components/home/`
- [x] Fix 404 na Vercel: removido Cloudflare plugin, criado `api/server.js` e `vercel.json`
- [x] Fix imagens estáticas na Vercel: adicionada rota para extensões `.webp`, `.jpg`, `.png`, etc. no `vercel.json`
- [x] Integração Supabase completa: cliente, tipos, migration SQL rodada
- [x] Login em `/login` com Supabase Auth — sessão persiste no localStorage (não pede login toda vez)
- [x] Painel `/admin` completo com guard `beforeLoad`
- [x] Supabase Storage: bucket `post-images` criado com políticas de upload (autenticado) e leitura (público)

### Home page — seções redesenhadas
- [x] **HeroSection** — imagem de fundo desktop/mobile, headline, sem G decorativo
- [x] **MarqueeStrip** — faixa dourada infinita com termos previdenciários
- [x] **AuthoritySection** — grid com foto Renan + stats + foto escritório
- [x] **HowItWorksSection** — accordion expansível ao hover/click
- [x] **TeamSection** — cards expansíveis + avatares equipe de apoio
- [x] **TestimonialsSection** — card rotativo com autoplay
- [x] **FAQSection** — layout 2 colunas com accordion
- [x] **BlogPreviewSection** — 3 cards com imagem real (Unsplash)
- [x] **FinalCTASection** — card navy com G decorativo

### Páginas internas
- [x] **sobre.tsx**, **equipe.tsx**, **servicos.tsx**, **contato.tsx**, **blog** — G decorativo removido dos heroes, Framer Motion adicionado
- [x] **areas-de-atuacao.tsx** — G removido, motion adicionado
- [x] **quero-me-aposentar.tsx** — G removido, motion adicionado, foto real do Renan substituiu placeholder circular
- [x] **G decorativo** adicionado em todos os cards CTA navy de todas as páginas (8 cards no total)

### Blog
- [x] Roteamento corrigido: `blog.tsx` → layout, `blog.index.tsx` → lista, `blog.$slug.tsx` → artigo
- [x] Posts migrados para Supabase (8 artigos publicados com imagens do Unsplash)
- [x] Campo `image` adicionado na tabela `posts` e no tipo `database.types.ts`
- [x] `mapRow` atualizado em `blog.index.tsx` e `blog.$slug.tsx` para incluir `image`
- [x] Página do artigo redesenhada: imagem de capa em destaque, excerpt com borda gold, artigos relacionados com thumbnail
- [x] **Editor de texto rico (Tiptap)** no admin — toolbar com negrito, itálico, sublinhado, tachado, código, H2/H3, listas, blockquote, linha divisória, link, remover formatação, contador de palavras/caracteres
- [x] Upload de imagem de capa no admin: clique, drag & drop ou colar (Ctrl+V) — envia para Supabase Storage
- [x] Conteúdo dos artigos renderizado como HTML na página pública com estilos `.article-body` em `styles.css`

### Imagens disponíveis em `public/`
| Arquivo | Uso |
|---------|-----|
| `hero-bg.webp` | Hero desktop |
| `hero-bg-mobile.webp` | Hero mobile |
| `about-renan.webp` | Foto perfil Renan (usada em 4 lugares) |
| `about-office.jpg` | Foto escritório (AuthoritySection) |
| `renan-recorte.webp` | Não usada atualmente |
| `renan-sf.png` | Não usada atualmente |

---

## 4. Estado atual

### O que funciona
- Site completo na Vercel: `https://escrit-rio-gon-alves.vercel.app/`
- Home page com todas as seções animadas e imagens carregando
- Blog com 8 artigos publicados, filtro por categoria, sidebar com mais recentes
- Página individual de artigo com imagem de capa, conteúdo HTML, artigos relacionados
- Admin panel: login persistente, CRUD de posts com editor rico e upload de imagem
- Formulário de contato salva no Supabase
- Deploy automático na Vercel ao fazer push para `main`

### O que está pendente / não testado
- **Editor Tiptap no admin de edição** (`admin.blog.$id.tsx`) — o `PostForm` foi atualizado para usar o `RichTextEditor`, mas posts antigos têm conteúdo em texto plano. Verificar se o editor carrega bem conteúdo HTML existente vs texto plano
- **Fotos da equipe** — Letícia, Wesley e equipe de apoio ainda sem fotos reais (placeholders)
- **OAB/RO** — está como `00.000` aguardando número real
- **Áudio nos artigos** — usuário pediu mas aguarda decisão sobre API (OpenAI TTS recomendada)
- Páginas `areas-de-atuacao.tsx` e `quero-me-aposentar.tsx` revisadas mas não testadas no deploy

---

## 5. Próximos passos

1. **Verificar editor Tiptap na edição de posts existentes** — abrir um post antigo no admin, verificar se o conteúdo carrega corretamente no editor. Posts antigos têm texto plano (ex: parágrafos separados por `\n\n`), o Tiptap pode precisar de conversão prévia para HTML.

2. **Áudio nos artigos** — implementar com OpenAI TTS:
   - Requer `OPENAI_API_KEY` na Vercel
   - Adicionar coluna `audio_url` na tabela `posts` do Supabase
   - Criar server function do TanStack Start que chama OpenAI TTS, salva no Supabase Storage e atualiza `audio_url`
   - Adicionar player de áudio na página do artigo quando `audio_url` existir
   - Botão "Gerar áudio" no admin ao publicar

3. **Fotos da equipe** — quando o usuário enviar fotos de Letícia, Wesley e equipe de apoio, substituir placeholders em `TeamSection.tsx` e `equipe.tsx`

4. **Corrigir OAB/RO** — atualizar `oab` em `src/lib/site.ts` com número real quando fornecido

5. **SEO** — verificar metatags, adicionar sitemap, robots.txt

6. **Configurar Supabase no projeto local** — adicionar `.env.local` com as vars para desenvolvimento local funcionar com Supabase (hoje só funciona na Vercel)

---

## 6. Perguntas em aberto

- Qual o número real da OAB/RO do Dr. Renan? (está como `00.000`)
- O usuário tem chave da OpenAI para implementar o áudio automático nos artigos?
- Quais são os cargos reais dos membros da equipe de apoio? (inventados atualmente)
- O editor Tiptap está funcionando corretamente na edição de posts existentes (conteúdo em texto plano)?
- Faz sentido criar uma página de "Resultados/Cases" para a home?
- A página `/quero-me-aposentar` tem 354 linhas — o conteúdo está aprovado?

---

## 7. Artefatos relevantes

### Repositório
```
GitHub: https://github.com/Nielpsd/escrit-rio-gon-alves
Branch: main
Deploy: https://escrit-rio-gon-alves.vercel.app/
Admin: https://escrit-rio-gon-alves.vercel.app/login
```

### Arquivos-chave
```
src/lib/site.ts                              — dados globais (OAB pendente)
src/lib/supabase.ts                          — cliente Supabase
src/lib/database.types.ts                    — tipos das tabelas (posts tem campo image)
src/lib/posts.ts                             — posts hardcoded (fallback + imagens Unsplash)
src/styles.css                               — CSS vars + estilos Tiptap + estilos .article-body
src/routes/__root.tsx                        — layout global, WhatsApp FAB
src/routes/blog.tsx                          — layout do blog (só <Outlet />)
src/routes/blog.index.tsx                    — lista de posts com filtro e sidebar
src/routes/blog.$slug.tsx                    — página individual do artigo
src/routes/admin.tsx                         — guard beforeLoad + layout admin
src/routes/admin.blog.new.tsx                — novo post (PostForm + ImageUpload + RichTextEditor)
src/routes/admin.blog.$id.tsx                — edição de post
src/components/admin/RichTextEditor.tsx      — editor Tiptap com toolbar completa
src/components/home/FinalCTASection.tsx      — referência do G decorativo nas CTAs
src/components/home/BlogPreviewSection.tsx   — cards do blog na home
api/server.js                                — adapter Vercel Node.js ↔ H3
vercel.json                                  — config deploy + rotas de arquivos estáticos
supabase/migrations/001_initial.sql          — schema inicial (posts, messages, site_content)
```

### SQL para adicionar coluna de áudio (quando implementar)
```sql
ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS audio_url text default '';
```

### SQL de referência — políticas do Storage
```sql
-- Já rodado, mas para referência:
CREATE POLICY "admin pode fazer upload"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'post-images');

CREATE POLICY "leitura publica"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'post-images');
```

### Comandos úteis
```bash
npm run dev    # dev local (http://localhost:8080)
npm run build  # build de verificação
git log --oneline -10
```

---

## 8. Instruções para a próxima sessão

**Tom:** O usuário é o designer/responsável pelo projeto. Aprecia respostas curtas e diretas. Não gosta de explicações longas. Prefere ver o resultado rápido e ajustar iterativamente.

**Ritmo:** Cada pedido → editar arquivo → commit → push. O usuário vê na Vercel e pede ajustes. Não acumular mudanças sem commit.

**Padrão de código:**
- Animações sempre com Framer Motion (`motion.div`, `whileInView`, `viewport={{ once: true }}`)
- Cores via CSS vars (`var(--navy)`, `var(--gold)`) — nunca hardcoded
- Cards brancos: `rounded-2xl border border-[var(--border)] bg-white`
- Cards CTA navy: sempre `relative overflow-hidden` + G decorativo + `<div className="relative">` no conteúdo
- Sem comentários no código
- Sem G decorativo nos heroes das páginas (só nos cards CTA)

**Armadilhas a evitar:**
- NÃO adicionar plugins ao `vite.config.ts`
- NÃO usar `next/image` — é React puro
- NÃO usar `motion/react` — usar `framer-motion`
- NÃO usar `bun` no terminal — usar `npm`
- Ao usar `Write`, sempre fazer `Read` primeiro no mesmo arquivo
- `blog.tsx` é só layout com `<Outlet />` — o conteúdo da lista fica em `blog.index.tsx`
- Conteúdo dos posts é **HTML** (Tiptap) — não texto plano
- O guard do admin tem `if (typeof window === 'undefined') return` — não remover
- O Supabase client exporta `supabaseConfigured` — sempre checar antes de queries

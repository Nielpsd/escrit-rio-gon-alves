# Handoff: Componentes globais, orientação previdenciária e ajustes de conteúdo

**Data:** 2026-05-14
**Status:** Em andamento

---

## 1. Objetivo

Site institucional para o Escritório Gonçalves (advocacia previdenciária, Rondônia). As sessões anteriores entregaram a homepage completa e todas as páginas secundárias. Esta sessão focou em adicionar componentes globais de conversão (urgência, LGPD, leitura, topo), uma rota de orientação previdenciária interativa (`/voce-tem-direito`), substituição do ícone do WhatsApp pelo logo oficial em todo o site, e acerto de conteúdo (terminologia, números, escritórios).

---

## 2. Contexto essencial

### Stack técnica
- **Framework:** TanStack Start v1 (React 19 + Vite 7 + TypeScript)
- **Roteamento:** TanStack Router — file-based, rotas em `src/routes/`
- **Styling:** Tailwind CSS v4 + CSS vars customizadas (`--navy`, `--gold`, etc.)
- **Animações:** Framer Motion (`motion.div`, `whileInView`, `viewport={{ once: true }}`)
- **Editor rico (admin):** Tiptap — conteúdo dos posts salvo como **HTML**
- **Package manager:** npm (usar `node_modules/.bin/vite`)
- **Backend:** Supabase — tabelas: `posts`, `messages`, `site_content`
- **Deploy:** Vercel (`vercel.json` configurado com adapter Node.js → H3 via `api/server.js`)
- **Ícones:** `lucide-react` + `WhatsAppIcon` customizado em `src/components/site/WhatsAppIcon.tsx`

### Localização do projeto
```
/Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves/
```
> ⚠️ O repo tem pasta duplicada no nome. O projeto real está no **subdiretório**, não na raiz.

### Como rodar localmente
```bash
cd /Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves
node_modules/.bin/vite dev --port 3000
```

### Supabase
- **Project ID:** `pkjiruofjzbhiasamowd`
- **URL:** `https://pkjiruofjzbhiasamowd.supabase.co`
- **Storage bucket:** `post-images` (público)
- **`.env.local` não existe localmente** — só existe `.env.local.example`
- Na Vercel as env vars já estão configuradas e funcionando

### Referências de deploy
```
GitHub:  https://github.com/Nielpsd/escrit-rio-gon-alves
Branch:  main
Site:    https://escrit-rio-gon-alves.vercel.app/
Admin:   https://escrit-rio-gon-alves.vercel.app/login
```

### Convenções visuais — não mudar
- `<Eyebrow>` para labels de seção
- `<WaveButton variant="wpp">` para CTAs de WhatsApp — **sempre WaveButton, nunca `<button>` ou `<a>` customizado**
- `on-navy` nas sections com fundo navy
- `<em className="hl">` para highlight dourado no texto
- Cards brancos: `rounded-2xl border border-[var(--border)] bg-white`
- Cards CTA navy: `relative overflow-hidden` + G decorativo + `<div className="relative">` no conteúdo
- Framer Motion em todas as animações — nunca CSS puro
- **Sem botão CTA na hero das páginas secundárias**
- Ícone WhatsApp: sempre `<WhatsAppIcon size={16} />` — **nunca `MessageCircle` do lucide**

### Padrão de hero das páginas secundárias
```tsx
<section className="on-navy relative overflow-hidden bg-[var(--navy)] text-white">
  <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24 text-center">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
      <Eyebrow className="mx-auto justify-center">Label</Eyebrow>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
        Título com <em className="hl">destaque</em>.
      </h1>
      <p className="mt-6 text-base text-white/65 leading-relaxed max-w-2xl mx-auto">Subtítulo.</p>
    </motion.div>
  </div>
</section>
```

### WhatsApp do escritório
- Número: `5569992621298`
- URL base: `https://api.whatsapp.com/send?phone=5569992621298&text=...`

---

## 3. O que já foi feito

### Sessões anteriores (até 2026-05-11)
- Homepage completa com todos os componentes extraídos para `src/components/home/`
- Blog integrado com Supabase: artigos publicados, filtro por categoria, sidebar
- Editor rico Tiptap no admin com upload de imagem de capa
- Login persistente com Supabase Auth
- Deploy funcionando na Vercel com SSR
- 6 páginas secundárias completas: `/sobre`, `/servicos`, `/areas-de-atuacao`, `/equipe`, `/contato`, `/quero-me-aposentar`
- `FaqAccordion` reutilizável em `src/components/site/FaqAccordion.tsx`

### Esta sessão (2026-05-14)

#### Novos componentes globais
- ✅ `src/components/site/UrgencyBar.tsx` — faixa âmbar no topo "Benefício negado? Você tem 30 dias". Dismissível via `localStorage("urgency-bar-dismissed")`. Montado em `Layout.tsx`.
- ✅ `src/components/site/CookieBanner.tsx` — banner LGPD slide-up, aceite salvo em `localStorage("cookies-accepted")`. Montado em `__root.tsx`.
- ✅ `src/components/site/ReadingProgress.tsx` — barra dourada de progresso no topo. Montado em `Layout.tsx` (cobre todas as páginas do site).
- ✅ `src/components/site/BackToTop.tsx` — botão voltar ao topo com AnimatePresence, aparece após 600px de scroll, posicionado bottom-left. Montado em `__root.tsx`.
- ✅ `src/components/site/WhatsAppIcon.tsx` — SVG oficial do WhatsApp, substitui `MessageCircle` em todos os 15 arquivos que usavam o ícone. Props: `size?: number`.

#### Novos componentes da homepage
- ✅ `src/components/home/StatsSection.tsx` — contadores animados count-up com `useInView`. Stats: 143+ avaliações, 10+ anos, 3 escritórios, 100% foco. Inserido entre `MarqueeStrip` e `DiscoverRightsSection`.
- ✅ `src/components/home/DiscoverRightsSection.tsx` — seção de conversão que redireciona para `/voce-tem-direito`. Layout dois colunas: copy à esquerda + 3 cards de gatilho clicáveis à direita. CTA usa `WaveButton variant="primary"`.

#### Nova rota
- ✅ `src/routes/voce-tem-direito.tsx` — orientação previdenciária em 3 perguntas (situação, tempo de contribuição, faixa etária). 7 resultados possíveis com CTA WhatsApp pré-preenchido. Adicionada no **footer** (coluna Institucional). **Removida da navbar** — acesso via homepage e footer. Componente nomeado `OrientacaoPage` (nunca "Calculadora").

#### Ajustes de conteúdo
- ✅ "Recurso negado" → **"Benefício negado"** em toda comunicação com o cliente (UrgencyBar, FAQs, voce-tem-direito). "Recurso administrativo" **mantido** onde é termo jurídico preciso.
- ✅ Experiência: +15 anos → **+10 anos** (AuthoritySection e StatsSection)
- ✅ Escritórios: 2 unidades → **3 escritórios em RO** (StatsSection, /sobre, /contato, meta tags, Footer, index.tsx title)
- ✅ 3ª unidade adicionada no `/contato` como placeholder — **aguarda cidade/endereço real**
- ✅ Timeline de `/sobre` recebeu novo marco "Terceiro escritório"
- ✅ FAB WhatsApp: `size={16}`, padding `px-5 py-3.5` (ajustado para proporção correta com o logo SVG)

#### Descartado
- **Termo "calculadora"** — banido em todo o projeto. Usar "orientação" ou "verificação".
- **Link da calculadora no nav** — removido. Acesso só via `DiscoverRightsSection` na home e footer.
- Lógica com referência à "Revisão da Vida Toda" — removida (tese derrubada pelo STF em 2022).

---

## 4. Estado atual

### O que funciona
- Todas as páginas completas e padronizadas
- 5 novos componentes globais ativos
- Rota `/voce-tem-direito` funcional com lógica juridicamente revisada
- Logo oficial WhatsApp em 100% dos botões
- Deploy na Vercel com SSR funcionando
- Dev server local na porta 3000
- Último commit: `6466419` (branch main)

### O que está pendente / incompleto
- **3ª unidade no `/contato`** — cidade e endereço real não fornecidos. Está como `"3ª Unidade — RO"` com link de Maps genérico em `src/routes/contato.tsx` (linha ~50)
- **OAB do Dr. Renan** — ainda `"OAB/RO 00.000"` em `src/lib/site.ts`
- **Fotos da equipe** — membros com avatares de inicial em `src/routes/equipe.tsx`
- **`.env.local` ausente localmente** — formulário de contato não persiste no banco local
- **Timeline `/sobre`** — texto do 3º marco genérico, precisa cidade real

---

## 5. Próximos passos

1. **Completar 3ª unidade** — cliente deve fornecer cidade + endereço. Atualizar:
   - `src/routes/contato.tsx` → `UNIDADES[2]`: campos `cidade`, `endereco`, `maps`
   - `src/lib/site.ts` → campo `cities`
   - `src/routes/sobre.tsx` → `DIFERENCIAIS[1]` e `TIMELINE[2].desc`

2. **Corrigir OAB** — atualizar `oab` em `src/lib/site.ts` com número real

3. **Fotos da equipe** — quando chegarem, substituir avatares em `src/routes/equipe.tsx` (array `EQUIPE`, campo `foto`) por `<img className="object-cover">`

4. **SEO** — revisar meta `title` e `description` de cada página secundária

5. **Áudio nos artigos (OpenAI TTS)** — requer:
   - `OPENAI_API_KEY` na Vercel
   - `ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS audio_url text default '';`
   - Server function + player na página do artigo

6. **Performance mobile** — verificar animações nas páginas longas (`/quero-me-aposentar`, `/areas-de-atuacao`)

7. **Revisão jurídica dos FAQs** — validar prazos e afirmações com o cliente

---

## 6. Perguntas em aberto

- **Qual é a cidade e endereço da 3ª unidade?** (bloqueia contato.tsx, site.ts e sobre.tsx)
- **Qual o número real da OAB/RO do Dr. Renan?** (está como `00.000`)
- **Quando chegam as fotos reais da equipe?**
- **O cliente quer áudio nos artigos do blog (OpenAI TTS)?** Se sim, tem chave da OpenAI?
- **O cliente quer vídeos do YouTube incorporados na `/sobre`?**
- **Os endereços exatos das unidades** para gerar links de Maps precisos

---

## 7. Artefatos relevantes

### Estrutura de arquivos — modificados nesta sessão
```
src/
├── components/
│   ├── home/
│   │   ├── StatsSection.tsx          ← NOVO
│   │   ├── DiscoverRightsSection.tsx ← NOVO
│   │   └── AuthoritySection.tsx      ← modificado (+10 anos)
│   └── site/
│       ├── UrgencyBar.tsx            ← NOVO
│       ├── CookieBanner.tsx          ← NOVO
│       ├── ReadingProgress.tsx       ← NOVO
│       ├── BackToTop.tsx             ← NOVO
│       ├── WhatsAppIcon.tsx          ← NOVO
│       ├── Layout.tsx                ← modificado (UrgencyBar + ReadingProgress)
│       ├── Header.tsx                ← modificado (WhatsAppIcon, sem link calculadora)
│       └── Footer.tsx                ← modificado (voce-tem-direito + 3 escritórios)
├── routes/
│   ├── voce-tem-direito.tsx          ← NOVO
│   ├── index.tsx                     ← modificado (StatsSection + DiscoverRightsSection)
│   ├── __root.tsx                    ← modificado (CookieBanner + BackToTop)
│   ├── sobre.tsx                     ← modificado (3 escritórios, timeline)
│   ├── contato.tsx                   ← modificado (3ª unidade placeholder)
│   └── quero-me-aposentar.tsx        ← modificado (terminologia)
└── lib/
    └── site.ts                       ← modificado (cities)
```

### Arquivos intocados (prontos — não mexer sem necessidade)
```
src/routes/blog*.tsx
src/routes/admin*.tsx
src/routes/login.tsx
src/routes/servicos.tsx
src/routes/equipe.tsx         ← aguarda fotos
src/routes/areas-de-atuacao.tsx
src/routes/politica-de-privacidade.tsx
src/routes/termos-de-uso.tsx
api/server.js
vercel.json
```

### Componentes globais e onde são montados
| Componente | Montado em | Comportamento |
|---|---|---|
| `UrgencyBar` | `Layout.tsx` | Dismissível via localStorage |
| `ReadingProgress` | `Layout.tsx` | Todas as páginas |
| `CookieBanner` | `__root.tsx` | Slide-up, aceite via localStorage |
| `BackToTop` | `__root.tsx` | Aparece após 600px, bottom-left |
| `WhatsAppFab` | `__root.tsx` | Aparece após 400px, bottom-right, size={16}, px-5 py-3.5 |

### Uso dos componentes novos
```tsx
// WhatsAppIcon
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
<WhatsAppIcon size={16} />

// FaqAccordion
import { FaqAccordion } from "@/components/site/FaqAccordion";
<FaqAccordion items={[{ q: "Pergunta?", a: "Resposta." }]} />
```

### Lógica da orientação previdenciária (`/voce-tem-direito`)
- 3 perguntas: `situacao` → `tempo` → `idade`
- Prioridade dos resultados: `negado` → `afastado` → `aposentado` → tempo+idade → fallback
- Aposentadoria por idade: **65 anos (homem) / 62 anos (mulher)** — EC 103/2019
- Auxílio-doença: acidente dispensa carência; doença comum exige 12 contribuições
- Sem referência a teses de revisão derrubadas pelo STF

### SQL para áudio (quando implementar)
```sql
ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS audio_url text default '';
```

### Comandos úteis
```bash
# Dev local
node_modules/.bin/vite dev --port 3000

# Type check
node_modules/.bin/tsc --noEmit
# (ignorar erro do vite.config.ts sobre 'spa' — pré-existente)

# Configurar Supabase local
cp .env.local.example .env.local
```

---

## 8. Instruções para a próxima sessão

**Tom e ritmo:**
- Respostas curtas e diretas. Sem sumários longos no final.
- Sem comentários no código.
- Não adicionar funcionalidades além do que for pedido.

**Padrão de código obrigatório:**
- Animações: Framer Motion — nunca CSS puro
- Cores: CSS vars — nunca hardcoded
- Ícone WhatsApp: `<WhatsAppIcon size={16} />` — nunca `MessageCircle`
- Botões CTA: sempre `<WaveButton>` — nunca `<button>` ou `<a>` com classes customizadas
- Cards brancos: `rounded-2xl border border-[var(--border)] bg-white`
- Cards CTA navy: `relative overflow-hidden` + G decorativo + `<div className="relative">` no conteúdo
- Sem botão CTA na hero de páginas secundárias

**Terminologia — regras fixas:**
- Nunca usar "calculadora" — usar "orientação" ou "verificação"
- "Benefício negado" para comunicação com o cliente — nunca "recurso negado"
- "Recurso administrativo" é termo jurídico correto — manter onde precisar
- 3 escritórios em RO (não "2 unidades")
- +10 anos de experiência (não +15)

**Armadilhas a evitar:**
- Não confundir a raiz do repo com o subdiretório (nome duplicado na pasta)
- Não usar `bun` — usar `node_modules/.bin/vite`
- Não modificar `src/routes/index.tsx` sem necessidade (homepage aprovada)
- Não alterar `api/server.js` ou `vercel.json`
- Não duplicar perguntas de FAQ entre páginas
- Ao usar `Write`, sempre fazer `Read` primeiro no mesmo arquivo
- `blog.tsx` é layout com `<Outlet />` — conteúdo da lista está em `blog.index.tsx`
- Conteúdo dos posts é **HTML** (Tiptap) — não texto plano
- O guard do admin tem `if (typeof window === 'undefined') return` — não remover
- O erro `'spa' does not exist in type 'LovableViteTanstackOptions'` em `vite.config.ts` é pré-existente — ignorar
- **Ao fazer substituições em massa com `sed`**: verificar com `tsc --noEmit` imediatamente — sed pode danificar imports em arquivos com multi-line imports ou quando a primeira linha coincide com outra. Preferir Python ou edições manuais para substituições em múltiplos arquivos.

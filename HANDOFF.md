# Handoff: Páginas internas e padronização — Escritório Gonçalves

**Data:** 2026-05-11
**Status:** Em andamento

---

## 1. Objetivo

Site institucional para o Escritório Gonçalves (advocacia previdenciária, Rondônia). Homepage e blog estavam prontos desde a sessão anterior. Esta sessão focou em enriquecer, padronizar e completar todas as páginas internas (secundárias) do site — tornando-as mais persuasivas e consistentes com a qualidade da home.

---

## 2. Contexto essencial

### Stack técnica
- **Framework:** TanStack Start v1 (React 19 + Vite 7 + TypeScript)
- **Roteamento:** TanStack Router — file-based, rotas em `src/routes/`
- **Styling:** Tailwind CSS v4 + CSS vars customizadas (`--navy`, `--gold`, etc.)
- **Animações:** Framer Motion (`motion.div`, `whileInView`, `viewport={{ once: true }}`)
- **Editor rico (admin):** Tiptap — conteúdo dos posts salvo como **HTML**
- **Package manager:** npm (bun pode não estar no PATH — usar `node_modules/.bin/vite`)
- **Backend:** Supabase — tabelas: `posts`, `messages`, `site_content`
- **Deploy:** Vercel (`vercel.json` configurado com adapter Node.js → H3 via `api/server.js`)
- **Ícones:** `lucide-react`

### Localização do projeto
```
/Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves/
```
> ⚠️ O repo tem pasta duplicada no nome. O projeto real está no **subdiretório**, não na raiz.

### Como rodar localmente
```bash
cd /Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves
node_modules/.bin/vite dev --port 3000
# porta 5173 normalmente está ocupada por outro processo
```

### Supabase
- **Project ID:** `pkjiruofjzbhiasamowd`
- **URL:** `https://pkjiruofjzbhiasamowd.supabase.co`
- **Storage bucket:** `post-images` (público)
- **`.env.local` não existe localmente** — só existe `.env.local.example`
- Para rodar com Supabase local: `cp .env.local.example .env.local` e preencher com dados do painel (Settings → API)
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
- `<WaveButton variant="wpp">` para CTAs de WhatsApp
- `on-navy` nas sections com fundo navy
- `<em className="hl">` para highlight dourado no texto
- Cards brancos: `rounded-2xl border border-[var(--border)] bg-white`
- Cards CTA navy: `relative overflow-hidden` + G decorativo + `<div className="relative">` no conteúdo
- Framer Motion em todas as animações — nunca CSS puro

### Padrão de hero das páginas secundárias (definido nesta sessão)
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
Regras: `max-w-4xl`, centralizado, **sem botão CTA**, **sem imagem/grid**.

---

## 3. O que já foi feito

### Sessão anterior (até 2026-04-27)
- Homepage completa com todos os componentes extraídos para `src/components/home/`
- Blog integrado com Supabase: 8 artigos publicados, filtro por categoria, sidebar
- Editor rico Tiptap no admin com upload de imagem de capa
- Login persistente com Supabase Auth
- Deploy funcionando na Vercel com SSR

### Esta sessão (2026-05-11)

#### Novo componente criado
- ✅ `src/components/site/FaqAccordion.tsx` — componente reutilizável de FAQ com accordion animado (Framer Motion + AnimatePresence). Recebe `items: { q: string; a: string }[]` e gerencia estado interno.

#### `/sobre` — `src/routes/sobre.tsx`
- ✅ Hero padronizado (max-w-4xl, centralizado, sem botão, sem foto)
- ✅ Barra de estatísticas: 143+ avaliações, 10+ profissionais, 2 unidades, 100% foco
- ✅ Linha do tempo visual em 4 marcos (saída do INSS → fundação → expansão → hoje)
- ✅ CTA intermediário (botão WhatsApp) na seção História
- ✅ Seção de depoimentos com 3 cards e 5 estrelas
- ✅ FAQ com 5 perguntas sobre identidade e diferenciais do escritório (não logística)

#### `/servicos` — `src/routes/servicos.tsx`
- ✅ Hero padronizado, copy mais forte: "Seu direito existe. A gente ajuda a provar."
- ✅ Seção "Como funciona o atendimento" — 3 passos antes dos cards de serviço
- ✅ Tag "perfil ideal" em cada card de serviço
- ✅ Seção de urgência em âmbar: "Prazo de 30 dias para recorrer"
- ✅ FAQ com 5 perguntas específicas sobre os 6 serviços da página
- ✅ Migrado para `FaqAccordion` (removidos `useState`, `AnimatePresence`, `ChevronDown` inline)

#### `/areas-de-atuacao` — `src/routes/areas-de-atuacao.tsx`
- ✅ Hero padronizado, copy reformulado: "Você se encaixa em algum desses perfis?"
- ✅ Perfis expandidos de 6 para 12 (novos: pedido negado, atividade especial, professor, autônomo, salário-maternidade por natimorto, cônjuge separado)
- ✅ Campo "resultado possível" em cada card com ícone `TrendingUp`
- ✅ FAQ com 5 perguntas sobre elegibilidade e perfis de cliente

#### `/equipe` — `src/routes/equipe.tsx`
- ✅ Hero padronizado
- ✅ Seção "O que une a nossa equipe" — 4 valores culturais com ícones (Star, Heart, Shield, Users)
- ✅ FAQ com 5 perguntas específicas sobre a equipe e como funciona o atendimento
- ⚠️ Fotos dos membros ainda são iniciais — aguarda material do cliente

#### `/contato` — `src/routes/contato.tsx`
- ✅ Hero padronizado
- ✅ Botões de WhatsApp segmentados por assunto (6 tópicos, mensagem pré-preenchida)
- ✅ FAQ posicionado por **último** na página (acima apenas do rodapé)
- ✅ FAQ com largura `max-w-7xl` (igual às demais seções)
- ✅ Seção "O que acontece depois que você envia?" — 3 passos inline no formulário
- ✅ Links "Ver no Google Maps" para cada unidade
- ✅ Horário expandido (inclui sáb/dom fechado)
- ✅ Migrado para `FaqAccordion`

#### `/quero-me-aposentar` — `src/routes/quero-me-aposentar.tsx`
- ✅ Hero padronizado (removido botão CTA, mantida linha de disclaimer)
- ✅ Seção "Erros comuns" — 6 erros com ícone X vermelho e consequência real
- ✅ Depoimentos expandidos de 3 para 6 cards
- ✅ FAQ com 6 perguntas específicas sobre aposentadoria

#### Padronização transversal
- ✅ Heroes de todas as páginas secundárias no mesmo padrão visual
- ✅ FAQ adicionado a todas as 6 páginas secundárias, posicionado **acima do CTA final**
- ✅ Perguntas revisadas e corrigidas: cada FAQ é exclusivo da temática da página

#### O que foi descartado / não implementado
- **Calculadora de elegibilidade** — requer definição de lógica de produto; não implementada
- **Comparativo de regras** (tabela antes/depois da Reforma) — requer validação jurídica
- **Mapas embutidos (iframe)** — optou-se por links Google Maps para evitar API key e impacto de performance
- **Vídeos do YouTube** na `/sobre` — não solicitado nesta sessão
- **Áudio nos artigos** (OpenAI TTS) — planejado na sessão anterior, ainda pendente

---

## 4. Estado atual

### O que funciona
- Todas as 6 páginas secundárias completas e padronizadas
- Homepage e blog intactos e funcionando
- Dev server na porta 3000
- Deploy na Vercel com SSR funcionando
- Admin panel com CRUD de posts e upload de imagem

### O que está pendente
- **`.env.local` ausente localmente** → Supabase desconectado no dev local → formulário de contato não persiste no banco (abre WhatsApp normalmente, mas não salva)
- **Fotos da equipe** — membros com avatares de inicial; aguarda material do escritório
- **OAB do Dr. Renan** — está como `"OAB/RO 00.000"` em `src/lib/site.ts`
- **Editor Tiptap na edição de posts existentes** — posts antigos têm texto plano; verificar se o editor carrega corretamente

---

## 5. Próximos passos

1. **Configurar `.env.local`** — copiar `.env.local.example`, preencher `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com dados do painel Supabase (Settings → API)

2. **Fotos da equipe** — quando o cliente enviar, substituir avatares de inicial por `<img className="object-cover">` em `src/routes/equipe.tsx` (array `EQUIPE`)

3. **Corrigir OAB** — atualizar campo `oab` em `src/lib/site.ts` com número real

4. **Revisar copy com o cliente** — validar textos dos FAQs com afirmações jurídicas (especialmente prazos em `/servicos` e `/quero-me-aposentar`)

5. **Verificar editor Tiptap** na edição de posts antigos — abrir post existente no admin e confirmar que o conteúdo em texto plano carrega corretamente no editor rico

6. **Áudio nos artigos (OpenAI TTS)** — requer `OPENAI_API_KEY` na Vercel + coluna `audio_url` na tabela `posts` + server function + player na página do artigo

7. **SEO** — revisar meta tags de cada página; algumas ainda têm titles/descriptions genéricos

8. **Performance mobile** — checar se animações Framer Motion nas páginas longas (especialmente `/quero-me-aposentar`) ficam fluidas

---

## 6. Perguntas em aberto

- Qual o número real da OAB/RO do Dr. Renan? (está como `00.000`)
- Quando chegam as fotos reais dos membros da equipe?
- O cliente quer a calculadora de elegibilidade? Se sim, qual lógica?
- O cliente tem chave da OpenAI para o recurso de áudio nos artigos?
- Os endereços exatos das unidades (Jaru e Alta Floresta D'Oeste) para gerar links de Maps precisos?
- O cliente quer vídeos do YouTube incorporados na `/sobre`?

---

## 7. Artefatos relevantes

### Estrutura de arquivos — o que foi modificado nesta sessão
```
src/
├── components/site/
│   └── FaqAccordion.tsx          ← NOVO
├── routes/
│   ├── sobre.tsx                 ← modificado
│   ├── servicos.tsx              ← modificado
│   ├── areas-de-atuacao.tsx      ← modificado
│   ├── equipe.tsx                ← modificado
│   ├── contato.tsx               ← modificado
│   └── quero-me-aposentar.tsx    ← modificado
```

### Arquivos intocados (prontos)
```
src/routes/index.tsx              — homepage, não mexer
src/routes/blog*.tsx              — blog completo
src/routes/admin*.tsx             — painel admin
src/routes/login.tsx              — login
src/routes/politica-de-privacidade.tsx
src/routes/termos-de-uso.tsx
src/lib/site.ts                   — dados globais (oab pendente)
src/lib/supabase.ts
src/lib/posts.ts                  — fallback hardcoded do blog
api/server.js                     — adapter Vercel
vercel.json
```

### Uso do FaqAccordion
```tsx
import { FaqAccordion } from "@/components/site/FaqAccordion";

const MEUS_FAQS = [
  { q: "Pergunta?", a: "Resposta." },
];

// Na JSX:
<FaqAccordion items={MEUS_FAQS} />
```

### Estrutura padrão da seção FAQ nas páginas
```tsx
<section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
  <div className="max-w-3xl mb-10">
    <Eyebrow>Dúvidas frequentes</Eyebrow>
    <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy)]">
      Perguntas que a gente mais <em className="hl">recebe</em>
    </h2>
  </div>
  <FaqAccordion items={FAQ_DA_PAGINA} />
</section>
```
> Posicionamento: **sempre acima do CTA final**, que fica na última section da página.

### WhatsApp do escritório
- Número: `5569992621298`
- URL base: `https://api.whatsapp.com/send?phone=5569992621298&text=...`

### SQL para áudio (quando implementar)
```sql
ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS audio_url text default '';
```

### Comandos úteis
```bash
# Dev local
node_modules/.bin/vite dev --port 3000

# Verificar portas em uso
lsof -i :5173 -i :3000 | grep LISTEN

# Configurar Supabase local
cp .env.local.example .env.local
# Editar .env.local com VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY
```

---

## 8. Instruções para a próxima sessão

**Tom e ritmo:**
- Respostas curtas e diretas. Sem sumários longos no final das respostas.
- Sem comentários no código.
- Não adicionar funcionalidades além do que for pedido.

**Padrão de código obrigatório:**
- Animações: Framer Motion — nunca CSS puro
- Cores: CSS vars — nunca hardcoded
- Cards brancos: `rounded-2xl border border-[var(--border)] bg-white`
- Cards CTA navy: sempre `relative overflow-hidden` + G decorativo + `<div className="relative">` no conteúdo
- Sem botão CTA na hero das páginas secundárias

**Armadilhas a evitar:**
- Não confundir a raiz do repo com o subdiretório do projeto (nome duplicado)
- Não usar `bun` sem verificar PATH — usar `node_modules/.bin/vite`
- Não modificar `src/routes/index.tsx` (homepage aprovada)
- Não alterar `api/server.js` ou `vercel.json` sem muito cuidado
- Não colocar botão CTA na hero de páginas secundárias — esse padrão foi definido e aprovado
- Não duplicar perguntas de FAQ entre páginas — cada página tem FAQ exclusivo da sua temática
- Ao usar `Write`, sempre fazer `Read` primeiro no mesmo arquivo
- `blog.tsx` é só layout com `<Outlet />` — conteúdo da lista fica em `blog.index.tsx`
- Conteúdo dos posts é **HTML** (Tiptap) — não texto plano
- O guard do admin tem `if (typeof window === 'undefined') return` — não remover
- O cliente Supabase exporta `supabaseConfigured` — sempre checar antes de queries

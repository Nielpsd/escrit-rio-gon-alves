# Handoff: Novas landing pages de conversão — bpc-loas, trabalhador-rural e melhorias de design

**Data:** 2026-05-14
**Status:** Em andamento

---

## 1. Objetivo

Site institucional do Escritório Gonçalves (advocacia previdenciária, Rondônia). As sessões anteriores entregaram homepage, páginas secundárias e `/beneficios-negados`. Esta sessão focou em redesenhar `/bpc-loas`, criar `/trabalhador-rural` e evoluir o design system com novos padrões reutilizáveis.

---

## 2. Contexto essencial

### Stack técnica
- **Framework:** TanStack Start v1 (React 19 + Vite 7 + TypeScript)
- **Roteamento:** TanStack Router — file-based, rotas em `src/routes/`
- **Styling:** Tailwind CSS v4 + CSS vars customizadas (`--navy`, `--gold`, etc.)
- **Animações:** Framer Motion (`motion.div`, `whileInView`, `viewport={{ once: true }}`)
- **Package manager:** npm (usar `node_modules/.bin/vite`)
- **Backend:** Supabase — tabelas: `posts`, `messages`, `site_content`
- **Deploy:** Vercel (`vercel.json` configurado com adapter Node.js → H3 via `api/server.js`)
- **Ícones:** `lucide-react` + `WhatsAppIcon` customizado em `src/components/site/WhatsAppIcon.tsx`

### Localização do projeto
```
/Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves/
```
> ⚠️ O repo tem pasta duplicada no nome. O projeto real está no **subdiretório**.

### Como rodar localmente
```bash
cd /Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves
node_modules/.bin/vite dev --port 3000
```

### Supabase
- **Project ID:** `pkjiruofjzbhiasamowd`
- **`.env.local` não existe localmente** — só existe `.env.local.example`
- Na Vercel as env vars já estão configuradas

### Deploy
```
GitHub:  https://github.com/Nielpsd/escrit-rio-gon-alves
Branch:  main
Site:    https://escrit-rio-gon-alves.vercel.app/
Admin:   https://escrit-rio-gon-alves.vercel.app/login
```

### Convenções visuais — não mudar
- `<Eyebrow>` para labels de seção
- `<WaveButton variant="wpp">` para CTAs de WhatsApp em fundos claros
- `<WaveButton variant="white">` para CTAs em fundos coloridos (novo, criado nesta sessão)
- `on-navy` nas sections com fundo escuro/colorido (navy ou cor temática)
- `<em className="hl">` para highlight dourado no texto
- Cards brancos: `rounded-2xl border border-[var(--border)] bg-white`
- Cards CTA coloridos: `relative overflow-hidden` + letra decorativa gigante + `<div className="relative">` no conteúdo
- Framer Motion em todas as animações — nunca CSS puro
- Ícone WhatsApp: sempre `<WhatsAppIcon size={16} />` — **nunca `MessageCircle` do lucide**
- `text-balance` em todos os `h1` e `h2`
- Sticky em colunas longas: `lg:sticky lg:top-28`

### WhatsApp do escritório
- Número: `5569992621298`
- URL base: `https://api.whatsapp.com/send?phone=5569992621298&text=...`

### Padrão de hero das landing pages (criado nesta sessão)
- Fundo branco com acento da cor temática da página
- Grid `lg:grid-cols-[1fr_460px]`
- Onda SVG na base com `fill` na cor temática → transição visual para a seção seguinte
- Primeira seção de conteúdo com fundo na cor temática
- Badge RO via `ipapi.co` no hero (ver padrão abaixo)
- SVGs flutuantes decorativos animados (apenas em páginas com público mais amplo/infantil — **não usar em páginas sérias como trabalhador-rural**)
- Mockup à direita específico para o tema da página (não reutilizar o mesmo entre páginas)

### Padrão de badge RO
```tsx
const [isRO, setIsRO] = useState(false);
useEffect(() => {
  fetch("https://ipapi.co/json/")
    .then((r) => r.json())
    .then((d) => { if (d.region_code === "RO") setIsRO(true); })
    .catch(() => {});
}, []);
// No JSX: AnimatePresence + motion.div com badge azul/verde conforme cor da página
```

### Padrão de seção de vídeo
```tsx
// Sempre antes do Dr. Renan
// Layout: mx-auto max-w-7xl px-6 py-24 lg:py-32 (sem bg, usa o branco da página)
// Grid: lg:grid-cols-[1fr_1.5fr]
// Esquerda: Eyebrow + h2 + p + WaveButton
// Direita: aspect-video rounded-2xl overflow-hidden border + iframe do YouTube
```

### WaveButton — variants disponíveis
- `primary` — navy (padrão)
- `wpp` — verde WhatsApp (usar em fundos brancos/claros)
- `white` — branco pill, texto verde-700, hover verde suave (usar em fundos coloridos/verdes)
- `gold`, `outline`, `outline-gold`, `outline-light`, `ghost`, `ghost-light`

---

## 3. O que já foi feito

### Sessões anteriores
- Homepage completa, blog, admin, login, deploy Vercel com SSR
- 6 páginas secundárias: `/sobre`, `/servicos`, `/areas-de-atuacao`, `/equipe`, `/contato`, `/quero-me-aposentar`
- `/beneficios-negados` — landing page completa com vídeo YouTube (`9458BMstnxQ`)
- `/voce-tem-direito` — orientação previdenciária em 3 perguntas
- Componentes globais: `UrgencyBar`, `CookieBanner`, `ReadingProgress`, `BackToTop`, `WhatsAppIcon`, `FaqAccordion`

### Esta sessão

#### `/bpc-loas` — REDESENHADA E FUNCIONAL
**Mudanças do design original:**
- Hero redesenhado: fundo **branco** (era azul), blue-600 como acento
- Primeira seção de conteúdo recebe `bg-blue-600` (inversão do hero)
- Onda SVG na base do hero em `rgb(37,99,235)` (blue-600)
- Mockup hero: card de perfil infantil "Pedro, 7 anos · TEA" + bolha de mensagem Dr. Renan (substituiu cards de jornada genéricos)
- SVGs flutuantes decorativos em azul na hero e no CTA (mantidos — público inclui pais de crianças)
- Salário atualizado: R$ 1.620 (salário mínimo 2025)
- `on-navy` adicionado em todas as seções `bg-blue-600` para o Eyebrow ficar correto
- `text-balance` em todos os headings
- CTA final redesenhado: card `bg-blue-600` dentro de `bg-white`, duas colunas com lista "O que você recebe"
- Seção "Para todas as idades": saiu de `bg-yellow-50` para branco limpo
- Passo a passo: cards uniformes, todos azul (era multi-color por card)
- "Por que advogado": vermelho vs azul (era vermelho vs emerald)
- **Vídeo adicionado:** `kQiEiKNlYIo` — antes do Dr. Renan

**Estrutura de seções:**
1. Hero (branco + SVGs flutuantes + mockup Pedro)
2. Quem tem direito (bg-blue-600)
3. Para todas as idades (branco)
4. Passo a passo (surface)
5. Por que advogado (branco)
6. Pague somente se aprovado (surface, card blue-600)
7. Cobertura + Unidades (branco)
8. Vídeo YouTube (sem bg, max-w container)
9. Dr. Renan (surface)
10. FAQ (branco)
11. CTA Final (branco, card blue-600 com lista)

#### `/trabalhador-rural` — CRIADA E FUNCIONAL
**Cor temática:** green-700 (`#15803d`) — verde escuro, sóbrio, adequado para público adulto/rural
**Fonte:** https://escritoriogoncalves.com/trabalhador-rural/ (analisada com WebFetch)

**Decisões de design específicas:**
- Sem SVGs flutuantes (público adulto/sério — descartado por não ser infantil)
- Verde escuro (`green-700`) em vez de `green-600` por pedido do cliente
- `variant="white"` nos botões em fundos verdes (novo variant criado)
- Mockup hero: "Ficha INSS · Segurado Especial" com header verde tipo app gov + dados do trabalhador + status badge + card de aprovação verde abaixo
- Sticky na coluna das pills "Quem se enquadra como segurado especial" (direita) na seção verde
- Sticky na coluna de texto "Como comprovar" (esquerda) na seção branca
- Onda SVG: `rgb(21,128,61)` (green-700)

**Estrutura de seções:**
1. Hero (branco + mockup ficha INSS)
2. Quem tem direito (bg-green-700) — coluna direita (pills) sticky
3. Como comprovar os 15 anos (branco) — coluna esquerda (texto) sticky
4. Benefícios disponíveis + motivos de negativa (surface)
5. Passo a passo (branco)
6. Por que advogado (surface)
7. Pague somente se aprovado (branco, card green-700, botão white)
8. Cobertura + Unidades (surface, card green-700, botão white)
9. Vídeo YouTube (sem bg) — `Adq18gXUP6A`
10. Dr. Renan (branco, badge green-700)
11. FAQ (surface) — 8 perguntas específicas do trabalhador rural
12. CTA Final (branco, card green-700, botão white, lista "O que você precisa saber")

#### Novo variant `WaveButton variant="white"` — criado nesta sessão
- Arquivo CSS: `src/styles.css` (logo após `.btn-wpp`)
- Arquivo TS: `src/components/site/WaveButton.tsx` (adicionado ao union type `Variant`)
- Fundo branco, texto `green-700`, hover com layers `green-100`/`green-200`
- **Uso:** em qualquer card/seção com fundo colorido onde o `wpp` (verde) não contrasta

---

## 4. Estado atual

### O que funciona
- `/bpc-loas` — completa, `tsc --noEmit` limpo
- `/trabalhador-rural` — completa, `tsc --noEmit` limpo
- Todas as páginas anteriores intactas
- Deploy na Vercel com SSR funcionando
- `WaveButton variant="white"` funcionando globalmente

### Pendente de sessões anteriores (ainda não resolvido)
- **3ª unidade** — cidade e endereço real não fornecidos. Placeholder em:
  - `src/routes/contato.tsx` → `UNIDADES[2]`
  - `src/routes/beneficios-negados.tsx` → array inline de unidades
  - `src/routes/bpc-loas.tsx` → array inline de unidades
  - `src/routes/trabalhador-rural.tsx` → array inline de unidades
- **OAB do Dr. Renan** — ainda `"OAB/RO 00.000"` em `src/lib/site.ts`
- **Fotos da equipe** — avatares de inicial em `src/routes/equipe.tsx`
- **`.env.local` ausente localmente** — formulário de contato não persiste no banco local

### Novas páginas não linkadas
`/bpc-loas` e `/trabalhador-rural` existem e funcionam mas **não estão no footer/nav**.

---

## 5. Próximos passos

1. **Linkar as novas páginas** no footer (`src/components/site/Footer.tsx`) — coluna "Serviços":
   - `/beneficios-negados`
   - `/bpc-loas`
   - `/trabalhador-rural`

2. **Criar próximas landing pages** seguindo o mesmo protocolo:
   - `/aposentadoria-por-invalidez` — fonte: `escritoriogoncalves.com/aposentadoria-por-invalidez/`
   - `/auxilio-doenca` — fonte: `escritoriogoncalves.com/auxilio-doenca/`
   - `/revisao-de-beneficio` — fonte: `escritoriogoncalves.com/revisao-de-beneficio/`
   - Cada uma com cor temática diferente, mockup específico, vídeo se disponível

3. **Completar 3ª unidade** — cliente deve fornecer cidade + endereço real. Atualizar 4 arquivos (ver seção 4).

4. **Corrigir OAB** — atualizar `oab` em `src/lib/site.ts` com número real.

5. **Fotos da equipe** — substituir avatares em `src/routes/equipe.tsx`.

6. **SEO** — revisar `title` e `description` de `/bpc-loas` e `/trabalhador-rural`.

---

## 6. Perguntas em aberto

- **Qual é a cidade e endereço da 3ª unidade?** (bloqueia 4 arquivos)
- **Qual o número real da OAB/RO do Dr. Renan?**
- **Quando chegam as fotos reais da equipe?**
- **Quais outras landing pages criar?** (invalidez, auxílio-doença, revisão, pensão por morte?)
- **Linkar as novas páginas onde exatamente?** Footer? Nav principal? Cards na homepage?
- **O `variant="white"` deve ser usado em `/beneficios-negados` também?** (O CTA final lá usa navy — não precisa, mas verificar consistência)
- **Vídeo para `/beneficios-negados`?** Já tem (`9458BMstnxQ`). Para as próximas páginas, o cliente vai fornecer links?

---

## 7. Artefatos relevantes

### Arquivos criados/modificados nesta sessão
```
src/routes/bpc-loas.tsx              ← redesenhada
src/routes/trabalhador-rural.tsx     ← NOVA
src/components/site/WaveButton.tsx   ← novo variant "white"
src/styles.css                       ← .btn-white adicionado
```

### Arquivos intocados (prontos — não mexer sem necessidade)
```
src/routes/beneficios-negados.tsx
src/routes/index.tsx                 ← homepage aprovada
src/routes/blog*.tsx
src/routes/admin*.tsx
api/server.js
vercel.json
```

### Protocolo para criar nova landing page
1. Fazer `WebFetch` na URL correspondente em `escritoriogoncalves.com`
2. Definir cor temática (cada página tem a sua)
3. Criar `src/routes/[nome-da-pagina].tsx` seguindo a estrutura de `/trabalhador-rural`
4. Hero: branco + cor temática como acento + mockup específico ao tema + onda SVG na cor temática
5. Primeira seção de conteúdo: `bg-[cor-temática]` com `on-navy`
6. Botões em fundos coloridos: `variant="white"`
7. Vídeo (se houver): antes do Dr. Renan, layout `[1fr_1.5fr]`
8. CTA final: `bg-white` com card interno na cor temática
9. Rodar `tsc --noEmit` e confirmar limpo

### WPP links por página
```
/bpc-loas:         ...text=Olá!%20Gostaria%20de%20saber%20se%20tenho%20direito%20ao%20BPC%2FLOAS.
/trabalhador-rural: ...text=Olá!%20Sou%20trabalhador%20rural%20e%20gostaria%20de%20saber%20se%20tenho%20direito%20à%20aposentadoria.
/beneficios-negados: ...text=Olá!%20Meu%20benefício%20foi%20negado%20pelo%20INSS%20e%20gostaria%20de%20ajuda.
```

### Vídeos por página
```
/beneficios-negados:  9458BMstnxQ
/bpc-loas:            kQiEiKNlYIo
/trabalhador-rural:   Adq18gXUP6A
```

### Comandos úteis
```bash
# Dev local
cd /Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves
node_modules/.bin/vite dev --port 3000

# Type check
node_modules/.bin/tsc --noEmit
# (ignorar erro do vite.config.ts sobre 'spa' — pré-existente)
```

---

## 8. Instruções pra próxima sessão

**Tom e ritmo:**
- Respostas curtas e diretas. Sem sumários longos no final.
- Sem comentários no código.
- Não adicionar funcionalidades além do que for pedido.

**Padrão de código obrigatório:**
- Animações: Framer Motion — nunca CSS puro
- Cores: CSS vars (`--navy`, `--gold`) no design system global; cores Tailwind hardcoded apenas nas landing pages temáticas
- Ícone WhatsApp: `<WhatsAppIcon size={16} />` — nunca `MessageCircle`
- Botões CTA: `<WaveButton>` — nunca `<button>` ou `<a>` com classes customizadas
- Em fundos coloridos: `variant="white"` — nunca `variant="wpp"` (verde some no verde)
- `on-navy` em toda seção com fundo colorido (navy, blue-600, green-700, etc.)
- `text-balance` em todos os `h1` e `h2`
- Sticky em colunas longas: `lg:sticky lg:top-28`

**Sobre SVGs flutuantes:**
- Usar apenas em páginas com público mais amplo ou infantil (ex: `/bpc-loas`)
- **Não usar** em páginas para público adulto/sério (ex: `/trabalhador-rural`, `/aposentadoria-por-invalidez`)

**Terminologia — regras fixas:**
- Nunca usar "calculadora" — usar "orientação" ou "verificação"
- "Benefício negado" para comunicação com o cliente — nunca "recurso negado"
- "Recurso administrativo" é termo jurídico correto — manter onde precisar
- 3 escritórios em RO (não "2 unidades")
- +10 anos de experiência (não +15)
- Bio do Dr. Renan: "mais de 5 anos como servidor do INSS" (cargo passado específico)
- Salário mínimo atual: **R$ 1.620**

**Armadilhas a evitar:**
- Não confundir a raiz do repo com o subdiretório (nome duplicado na pasta)
- Não usar `bun` — usar `node_modules/.bin/vite`
- Não modificar `src/routes/index.tsx` sem necessidade (homepage aprovada)
- Não alterar `api/server.js` ou `vercel.json`
- Não duplicar perguntas de FAQ entre páginas
- Ao usar `Write`, sempre fazer `Read` primeiro no mesmo arquivo (exceto arquivos novos)
- O erro `'spa' does not exist in type` em `vite.config.ts` é pré-existente — ignorar
- O `ipapi.co` pode retornar erro silencioso — sempre usar `.catch(() => {})` no fetch
- Nas landing pages, as unidades estão **repetidas inline** em cada arquivo — quando o cliente fornecer os dados da 3ª unidade, atualizar os 4 arquivos
- `on-navy` no elemento pai faz o `Eyebrow` herdar cor dourada/branca — se não aplicar, o eyebrow fica laranja (gold) no fundo colorido, difícil de ver

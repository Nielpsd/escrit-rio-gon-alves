# Handoff: Página /links, equipe real, organização de imagens e próximas landing pages

**Data:** 2026-05-14
**Status:** Em andamento

---

## 1. Objetivo

Site institucional do Escritório Gonçalves (advocacia previdenciária, Rondônia). Esta sessão criou a página `/links` (linktree), organizou todas as imagens em pastas, atualizou a equipe com fotos e nomes reais, e fez melhorias visuais nas páginas `/trabalhador-rural`, `/bpc-loas`, `/contato` e no rodapé.

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
- `<WaveButton variant="white">` para CTAs em fundos coloridos
- `on-navy` nas sections com fundo escuro/colorido
- `<em className="hl">` para highlight dourado no texto
- Cards brancos: `rounded-2xl border border-[var(--border)] bg-white`
- Framer Motion em todas as animações — nunca CSS puro
- Ícone WhatsApp: sempre `<WhatsAppIcon size={16} />` — **nunca `MessageCircle` do lucide**
- `text-balance` em todos os `h1` e `h2`
- Sticky em colunas longas: `lg:sticky lg:top-28`

### WhatsApp do escritório
- Número: `5569992621298`
- URL base: `https://api.whatsapp.com/send?phone=5569992621298&text=...`

### Padrão de hero das landing pages
- Fundo branco com acento da cor temática
- Grid `lg:grid-cols-[1fr_460px]`
- Onda SVG na base na cor temática → transição visual para a seção seguinte
- Primeira seção de conteúdo com fundo na cor temática
- Badge RO via `ipapi.co` no hero
- SVGs flutuantes decorativos apenas em páginas infantis/amplas (ex: `/bpc-loas`) — **não usar em páginas sérias**

### WaveButton — variants disponíveis
- `primary` — navy (padrão)
- `wpp` — verde WhatsApp (usar em fundos brancos/claros)
- `white` — branco pill, texto verde-700, hover verde suave (usar em fundos coloridos)
- `gold`, `outline`, `outline-gold`, `outline-light`, `ghost`, `ghost-light`

---

## 3. O que já foi feito

### Sessões anteriores
- Homepage completa, blog, admin, login, deploy Vercel com SSR
- 6 páginas secundárias: `/sobre`, `/servicos`, `/areas-de-atuacao`, `/equipe`, `/contato`, `/quero-me-aposentar`
- `/beneficios-negados` — landing page completa com vídeo YouTube (`9458BMstnxQ`)
- `/voce-tem-direito` — orientação previdenciária em 3 perguntas
- `/bpc-loas` — redesenhada (fundo branco, blue-600, mockup Pedro TEA, vídeo `kQiEiKNlYIo`)
- `/trabalhador-rural` — criada (green-700, mockup INSS, vídeo `Adq18gXUP6A`)
- `WaveButton variant="white"` — criado

### Esta sessão

#### Melhorias visuais
- `/trabalhador-rural` headline: `<br className="hidden lg:block" />` para quebrar "5 anos antes" sem quebrar no mobile
- `/trabalhador-rural` CTA: SVGs flutuantes removidos (público adulto)
- `/bpc-loas` seção "Quem tem direito": coluna de pills com `lg:sticky lg:top-28`
- `/contato`: `pt-16` entre pills e formulário + formulário com `lg:sticky lg:top-28`

#### Rodapé
- BPC/LOAS, Benefício Negado, Trabalhador Rural linkados na coluna Serviços
- `/quero-me-aposentar` linkado na coluna Institucional
- Hover dourado (`--gold-light`) em todos os novos links

#### Página `/links` — CRIADA
- Standalone (sem Navbar/Footer)
- Faixa vermelha no topo: "Benefício negado pelo INSS? Ainda dá tempo de recorrer"
- Header: foto perfil + palavras Fé/Esperança/Direito/Justiça + ícones sociais
- 5 cards usando imagens reais (`public/links/`)
- Carrossel de bio com 10 fotos (auto-play 3s, desliza 1 foto por vez, 3 visíveis)
- Seção de avaliações Google
- Espaçamento `mb-8` após cada botão zap

#### Organização das imagens em pastas
```
public/
  hero-bg.webp          ← usado em HeroSection.tsx (manter na raiz)
  hero-bg-mobile.webp   ← usado em HeroSection.tsx (manter na raiz)
  about-renan.webp      ← não mais referenciado no código (pode apagar)
  about-office.jpg      ← não mais referenciado no código (pode apagar)
  renan-recorte.webp    ← não mais referenciado no código (pode apagar)
  renan-sf.png          ← não mais referenciado no código (pode apagar)
  team/
    renan.webp          ← cópia de bio/04.webp (não usada — equipe usa bio/05.webp)
    wesley.webp
    lucimeiry.webp
    milena.webp
    leticia.webp
    ingrid.webp
    higor.webp
    daniel.webp
    bruna.webp
    ana-paula.webp
    analicy.webp
    aline.webp
  links/
    banner-escritorio.webp
    banner-incapacidade.webp
    banner-laudo.webp
    banner-apl.webp
    banner-marketing.webp
    zap-escritorio.webp
    zap-incapacidade.webp
    zap-laudo.webp
    zap-apl.webp
  bio/
    01.webp ... 10.webp   ← carrossel da /links e seções do site
```

#### Equipe atualizada
- `/equipe`: grid 4 colunas, 12 membros com fotos reais e nomes corretos
- `TeamSection` homepage: nomes dos 3 advogados visíveis abaixo dos cards
- Equipe de apoio na homepage: fotos reais substituindo iniciais
- Anderson Rodrigues: **não incluído** (a pedido do cliente)

#### Distribuição de fotos do Dr. Renan e ambiente
| Local | Foto |
|---|---|
| Dr. Renan em `/equipe` e TeamSection home | `/bio/05.webp` |
| TeamSection — Dr. Wesley | `/team/wesley.webp` |
| TeamSection — Dra. Lucimeiry | `/team/lucimeiry.webp` |
| Homepage AuthoritySection (Dr. Renan) | `/bio/01.webp` |
| Homepage AuthoritySection (escritório) | `/bio/06.webp` |
| HowItWorks passo 1 | `/bio/04.webp` |
| HowItWorks passo 2 | `/bio/03.webp` |
| HowItWorks passo 3 | `/bio/08.webp` |
| HowItWorks passo 4 | `/bio/07.webp` |
| HowItWorks passo 5 | `/bio/09.webp` |
| `/beneficios-negados` Dr. Renan | `/bio/02.webp` |
| `/bpc-loas` Dr. Renan | `/bio/10.webp` |
| `/quero-me-aposentar` Dr. Renan | `/bio/08.webp` |
| `/trabalhador-rural` Dr. Renan | `/bio/09.webp` |

---

## 4. Estado atual

### O que funciona
- Todas as páginas: `tsc --noEmit` limpo
- `/links` — funcional, banners reais, carrossel, faixa vermelha
- `/equipe` — fotos e nomes reais, 12 membros
- `TeamSection` homepage — advogados com nomes, equipe de apoio com fotos
- Rodapé com todas as páginas linkadas
- Deploy na Vercel com SSR funcionando
- Imagens organizadas em `team/`, `links/`, `bio/`

### Pendente de sessões anteriores (ainda não resolvido)
- **3ª unidade** — cidade e endereço real não fornecidos. Placeholder em:
  - `src/routes/contato.tsx` → `UNIDADES[2]`
  - `src/routes/beneficios-negados.tsx` → array inline de unidades
  - `src/routes/bpc-loas.tsx` → array inline de unidades
  - `src/routes/trabalhador-rural.tsx` → array inline de unidades
- **OAB do Dr. Renan** — ainda `"OAB/RO 00.000"` em `src/lib/site.ts`
- **OAB do Dr. Wesley e Dra. Lucimeiry** — números reais não fornecidos (TeamSection mostra `OAB/RO` genérico)

### Links externos pendentes na `/links`
Os `href="#"` precisam de URLs reais:
- `banner-incapacidade` → URL do Guia por Incapacidade
- `zap-incapacidade` → WhatsApp do Guia
- `banner-laudo` → URL da Laudo Certa
- `zap-laudo` → WhatsApp da Laudo Certa
- `banner-apl` → URL da Comunidade APL
- `zap-apl` → WhatsApp da APL
- `banner-marketing` → URL do Gonçalves Marketing

---

## 5. Próximos passos

1. **Completar URLs da `/links`** — cliente deve fornecer links dos produtos externos

2. **Criar próximas landing pages** seguindo o protocolo abaixo:
   - `/aposentadoria-por-invalidez` — cor temática sugerida: purple-700
   - `/auxilio-doenca` — cor temática sugerida: orange-600
   - `/revisao-de-beneficio` — cor temática sugerida: teal-700
   - Cada uma com: `WebFetch` em `escritoriogoncalves.com/[slug]/`, cor única, mockup específico, onda SVG, vídeo se disponível

3. **Completar 3ª unidade** — cliente deve fornecer cidade + endereço (4 arquivos afetados)

4. **Corrigir OABs** — Dr. Renan em `src/lib/site.ts`, Wesley e Lucimeiry em `TeamSection.tsx`

5. **SEO** — revisar `title` e `description` das landing pages criadas

6. **Linkar as landing pages na navbar** — atualmente só estão no rodapé

---

## 6. Perguntas em aberto

- **Qual a cidade e endereço da 3ª unidade?** (bloqueia 4 arquivos)
- **Quais os números reais da OAB** do Dr. Wesley e Dra. Lucimeiry?
- **URLs dos produtos externos** para a `/links` (Guia, Laudo Certa, APL, Marketing)?
- **Quais os WhatsApps de cada produto** (Guia, Laudo Certa, APL)?
- **Quais próximas landing pages criar** e em que ordem?
- **Adicionar landing pages na navbar principal** ou manter só no rodapé?
- **Vídeos para as próximas landing pages** — o cliente vai fornecer?
- **`public/team/renan.webp`** não está sendo usado — pode apagar?
- **`about-renan.webp`, `about-office.jpg`, `renan-recorte.webp`, `renan-sf.png`** na raiz do `public/` também não são mais referenciados — pode limpar?

---

## 7. Artefatos relevantes

### Arquivos criados/modificados nesta sessão
```
src/routes/links.tsx                        ← NOVA
src/routes/trabalhador-rural.tsx            ← melhorias (sticky removido CTA, headline br)
src/routes/bpc-loas.tsx                     ← sticky na coluna de pills
src/routes/contato.tsx                      ← pt-16 + formulário sticky
src/routes/equipe.tsx                       ← 12 membros reais com fotos
src/components/site/Footer.tsx              ← 4 novas páginas linkadas
src/components/home/TeamSection.tsx         ← nomes, fotos equipe apoio, dados reais
src/components/home/AuthoritySection.tsx    ← bio/01.webp e bio/06.webp
src/components/home/HowItWorksSection.tsx   ← bio/03-09.webp
public/team/                                ← 12 fotos da equipe
public/links/                               ← 9 imagens da página /links
public/bio/                                 ← 10 fotos do carrossel
```

### Arquivos intocados (prontos — não mexer sem necessidade)
```
src/routes/index.tsx                 ← homepage aprovada
src/routes/beneficios-negados.tsx
src/routes/blog*.tsx
src/routes/admin*.tsx
api/server.js
vercel.json
src/styles.css
src/components/site/WaveButton.tsx
```

### WPP links por página
```
/bpc-loas:          ...text=Olá!%20Gostaria%20de%20saber%20se%20tenho%20direito%20ao%20BPC%2FLOAS.
/trabalhador-rural: ...text=Olá!%20Sou%20trabalhador%20rural%20e%20gostaria%20de%20saber%20se%20tenho%20direito%20à%20aposentadoria.
/beneficios-negados: ...text=Olá!%20Meu%20benefício%20foi%20negado%20pelo%20INSS%20e%20gostaria%20de%20ajuda.
```

### Vídeos por página
```
/beneficios-negados:  9458BMstnxQ
/bpc-loas:            kQiEiKNlYIo
/trabalhador-rural:   Adq18gXUP6A
```

### Protocolo para criar nova landing page
1. `WebFetch` em `escritoriogoncalves.com/[slug]/`
2. Definir cor temática única (cada página tem a sua)
3. Criar `src/routes/[slug].tsx` seguindo `/trabalhador-rural` como modelo
4. Hero: branco + cor temática como acento + mockup específico + onda SVG
5. Primeira seção de conteúdo: `bg-[cor-temática]` com `on-navy`
6. Botões em fundos coloridos: `variant="white"`
7. Vídeo (se houver): antes do Dr. Renan, layout `[1fr_1.5fr]`
8. CTA final: `bg-white` com card interno na cor temática
9. `tsc --noEmit` limpo antes de commitar

### Comandos úteis
```bash
# Dev local
cd /Users/nielhart/escrit-rio-gon-alves/escrit-rio-gon-alves
node_modules/.bin/vite dev --port 3000

# Type check
node_modules/.bin/tsc --noEmit
# (ignorar erro do vite.config.ts sobre 'spa' — pré-existente)

# Commit e push
git add [arquivos] && git commit -m "mensagem" && git push origin main
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
- Em fundos coloridos: `variant="white"` — nunca `variant="wpp"`
- `on-navy` em toda seção com fundo colorido
- `text-balance` em todos os `h1` e `h2`
- Sticky em colunas longas: `lg:sticky lg:top-28`

**Sobre SVGs flutuantes:**
- Usar apenas em páginas com público infantil/amplo (ex: `/bpc-loas`)
- **Não usar** em páginas para público adulto/sério

**Terminologia — regras fixas:**
- Nunca usar "calculadora" — usar "orientação" ou "verificação"
- "Benefício negado" para comunicação com o cliente
- "Recurso administrativo" é termo jurídico — manter onde precisar
- 3 escritórios em RO
- +10 anos de experiência
- Bio do Dr. Renan: "mais de 5 anos como servidor do INSS"
- Salário mínimo atual: **R$ 1.620**
- Anderson Rodrigues: **não incluir** em nenhuma listagem de equipe

**Armadilhas a evitar:**
- Não confundir a raiz do repo com o subdiretório (nome duplicado na pasta)
- Não usar `bun` — usar `node_modules/.bin/vite`
- Não modificar `src/routes/index.tsx` sem necessidade
- Não alterar `api/server.js` ou `vercel.json`
- Ao usar `Write`, sempre fazer `Read` primeiro no mesmo arquivo
- O erro `'spa' does not exist in type` em `vite.config.ts` é pré-existente — ignorar
- O `ipapi.co` pode retornar erro silencioso — sempre usar `.catch(() => {})`
- `on-navy` no elemento pai faz o `Eyebrow` herdar cor dourada — sem ele o eyebrow fica laranja em fundo colorido
- Nas landing pages, as unidades estão **repetidas inline** em cada arquivo — ao receber dados da 3ª unidade, atualizar os 4 arquivos simultaneamente
- Imagens com espaço no nome precisam de aspas no terminal: `"public/Ana Paula.webp"`
- `public/team/renan.webp` existe mas não é referenciado — não usar; usar `/bio/05.webp` para o Dr. Renan

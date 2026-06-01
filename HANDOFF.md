# Handoff: Laudo Certo — página /laudo-certo em construção + guia finalizado

**Data:** 2026-06-01
**Status:** Em andamento

---

## 1. Objetivo

Construir a landing page `/laudo-certo` para o serviço de laudos médico-jurídicos do Dr. Renan Gonçalves, fiel ao design do Figma. Simultaneamente, a página `/guia-do-beneficio-por-incapacidade` foi desenvolvida e está praticamente finalizada (apenas pequenos polish pendentes).

---

## 2. Contexto essencial

**Stack:**
- React + TypeScript + TanStack Router (file-based routing em `src/routes/`)
- Tailwind CSS (sem CSS Modules)
- Framer Motion para animações
- Vite + Bun
- Deploy no Vercel via push no GitHub (`main` → auto-deploy)
- Repositório: `https://github.com/Nielpsd/escrit-rio-gon-alves`
- Working directory: `/Users/nielhart/escrit-rio-gon-alves`

**Decisões já tomadas:**
- Laudo Certo usa fonte **DM Sans** (Google Fonts, carregada via `head()` da rota)
- Background principal: `#f5fdff` (ciano claro)
- Gradiente azul: `from-[#5389ff] to-[#295ccc]`
- Cor de texto escuro: `#1a2238`
- WhatsApp = `SITE.whatsapp` de `@/lib/site`
- Assets locais em `/public/laudo-certo/`
- Guia: fonte Space Grotesk, roxo `#cf88ff → #c56eff`, fundo `#131313`
- Guia usa `BUY_URL = "https://pay.hotmart.com/H102618864G?bid=1780335970489"` para checkout

**Restrições:**
- NÃO instalar dependências novas sem necessidade
- Animações com `ease: number[]` não compilam no framer-motion v12 — usar strings nomeadas (`"easeOut"`) ou omitir `ease`
- Assets do Figma expiram em 7 dias — baixar localmente

---

## 3. O que já foi feito

### Guia (`/guia-do-beneficio-por-incapacidade`)
- Página completa com 9 seções (hero, faixa, features, instrutor, módulos, para quem é, comparação, preço, depoimentos, FAQ, garantia)
- Animações completas: fadeUp, slideLeft/slideRight, stagger, hover em cards e módulos
- Badge circular de garantia com texto SVG rotativo (`animateTransform`)
- Depoimentos: CSS marquee puro (`@keyframes tLeft/tRight`) — substituiu scroll-JS travado
- Módulos: `loading="eager"` e `?v=2` cache-bust para forçar CDN a servir imagens novas
- Links de compra: `#comprar` como âncora → seção de preço; `BUY_URL` (Hotmart) nos botões "Quero meu acesso"
- Glows decorativos em 6 pontos (instrutor, iPad, comparação, preço, depoimentos, garantia)
- Botão back-to-top com cores roxas apenas na página guia (via `body.classList` + CSS scoped)
- Mobile totalmente auditado e ajustado

### Laudo Certo (`/laudo-certo`)
- Página criada em `src/routes/laudo-certo.tsx`
- Assets baixados em `/public/laudo-certo/`: `icon.webp`, `logo-text.webp`, `dep1-3.webp`, `macbook.webp`, `iphone.webp`
- Usa `/guia/renan03.webp` para foto do Dr. Renan
- 9 seções implementadas: Header, Hero, Como Funciona, Para Advogados, O que vai receber, Também para leigos, Quem está por trás, Depoimentos, FAQ + Footer
- Curvas hero/footer: funções `WaveBottom` e `WaveTop` em SVG inline (paths assimétricos tipo S)
- Seção S05 "para leigos" é um card arredondado `max-w-[1280px]`, não full-bleed
- S03 grid 3×2: card branco `[0,0]` + 5 dores
- Animações: `fadeUp`, `stagger`, hover nos cards

**Descartados/ajustados:**
- WaveBottom/WaveTop como full-bleed em S05 → causava espaço branco enorme → virou card rounded
- `loading="lazy"` nos módulos → trocado por `eager` pois carousel horizontal não aciona lazy load

---

## 4. Estado atual

### Guia
Funcional e deployado. Pequenos itens de polish pendentes (listados abaixo).

### Laudo Certo
Funcionando mas com vários ajustes visuais pendentes identificados na última revisão:

1. **Hero headline** — precisa de melhor diagramação tipográfica
2. **S02 "Como funciona"** — headline precisa quebra de linha; cards precisam redesign
3. **S03 box azul** — layout diferente do Figma; adaptar para algo mais interessante
4. **S03 ícone de atenção** — emoji `⚠️` pouco visível; trocar por SVG azul
5. **S05/S07 imagens** — têm "box por fora" (shadow no wrapper div); mover shadow direto para `<img>` com `filter: drop-shadow`
6. **Curvas hero/footer** — o usuário confirmou que as curvas do Figma são assimétricas (tipo S com dois pontos de inflexão), não um arco simples. Os assets SVG precisam ser baixados do Figma e colocados em `/public/laudo-certo/hero-bg.svg` e `/public/laudo-certo/wave-bottom.svg`

**Assets a baixar do Figma (baixar como SVG):**
- Hero background + curva: `https://www.figma.com/api/mcp/asset/f6f9c02b-11f1-4e1a-8795-a86eb7596dbd` → salvar como `hero-bg.svg`
- Wave bottom (Subtract): `https://www.figma.com/api/mcp/asset/21eb07fe-5fe7-48b7-961b-fc730e04a7f0` → salvar como `wave-bottom.svg`

---

## 5. Próximos passos

### Laudo Certo (prioridade)

1. **Baixar** `hero-bg.svg` e `wave-bottom.svg` (URLs acima) → `/public/laudo-certo/`

2. **Curvas hero/footer**: substituir funções `WaveBottom`/`WaveTop` inline por `<img>` posicionadas absolutamente com as imagens SVG reais

3. **Hero headline**: melhorar diagramação — "segurança" já tem fundo branco com texto gradiente; revisar quebras de linha e tamanhos

4. **S02 cards**: redesenhar — atualmente cards simples com border; explorar cards com ícone maior e numeração mais destacada

5. **S02 headline**: adicionar quebra de linha explícita em "simples, direto e / 100% digital"

6. **S03 box azul**: redesenhar o grid interno com layout mais criativo e visual

7. **S03 aviso**: trocar `⚠️` por SVG inline em azul

8. **S05 e S07 imagens**: remover wrapper `<div>` com shadow, aplicar `filter: drop-shadow(...)` diretamente na `<img>`

9. **Definir link de compra** para a página laudo-certo (ainda sem BUY_URL)

10. **Subir tudo no GitHub** ao final

### Guia (baixa prioridade)
- Testar fluxo de compra: botão "Quero meu acesso" → Hotmart
- Verificar imagens dos módulos no deploy

---

## 6. Perguntas em aberto

- **Laudo Certo link de compra**: ainda não foi definido. Quando disponível, criar `BUY_URL` similar ao guia.
- **Laudo Certo WhatsApp**: os botões usam `SITE.whatsapp`. Confirmar se é o número correto ou se precisa de link específico para o serviço.
- **S07 foto**: atualmente usa `/guia/renan03.webp`. Confirmar se esta é a foto correta para a laudo-certo.

---

## 7. Artefatos relevantes

**Arquivos principais:**
- `src/routes/laudo-certo.tsx` — página laudo-certo (~560 linhas)
- `src/routes/guia-do-beneficio-por-incapacidade.tsx` — página guia (~880 linhas)
- `public/laudo-certo/` — assets da página laudo-certo
- `src/lib/site.ts` — constantes do site (WhatsApp, etc.)

**Figma:**
- URL: `https://www.figma.com/design/X3MlI7GaXPHU2Nkr0IQlnm/Dr.-Renan-Gon%C3%A7alves?node-id=338-717`
- fileKey: `X3MlI7GaXPHU2Nkr0IQlnm`, nodeId: `338:717`

**Constantes laudo-certo.tsx:**
```ts
const F    = "'DM Sans', system-ui, sans-serif";
const BG   = "#f5fdff";
const DARK = "#1a2238";
const WA   = SITE.whatsapp;
// Gradiente azul: from-[#5389ff] to-[#295ccc]
```

**Constantes guia:**
```ts
const BUY_URL  = "https://pay.hotmart.com/H102618864G?bid=1780335970489";
const CTA_URL  = "#comprar"; // âncora para seção de preço
// id="comprar" está na <section> do PREÇO (não no footer)
```

**Comandos úteis:**
```bash
npx tsc --noEmit            # verificar TypeScript
git add -A && git commit -m "msg" && git push
```

---

## 8. Instruções pra próxima sessão

- Responder sempre em **português BR**
- Respostas curtas e diretas — sem resumos ao final
- Sempre `npx tsc --noEmit` antes de commitar
- Commitar e dar push ao final de cada bloco de mudanças
- Usar `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` nos commits
- **NÃO** usar `ease: number[]` no framer-motion — usar `"easeOut"` ou omitir
- Os 29 erros de TypeScript pré-existentes no `laudo-certo.tsx` são conhecidos (transition types) e não bloqueiam o build
- Para referências a arquivos, usar markdown `[arquivo](caminho)` linkável (VSCode extension)
- O projeto tem hook RTK que redireciona comandos shell — não tentar contornar
- Preferência: implementação direta sem perguntar antes de agir em tarefas claras
- Ao trocar assets do Figma por locais, sempre verificar download com `file` command

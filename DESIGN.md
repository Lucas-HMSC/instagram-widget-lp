# Design

Adaptado da arquitetura de design system de `~/repos/app` (mesma família de marca, Lucas
Carvalho / BLBW): tokens semânticos OKLCH, banda escura "coal" para drama, tema escuro
opt-in via `.dark`, tipografia grotesca expressiva + neutra. A diferença é a **cor
committed**: aqui o hue da marca é o **azure/ocean** do próprio produto (`#20ACE2` /
`#003651`), não o âmbar do portfólio.

## Theme

Claro por padrão — superfície branca pura onde a identidade é carregada pelo azul da marca,
tinta near-black levemente fria e a Bricolage Grotesque. Drama vem de bandas **coal**
(navy quase-preto, da família `#003651`) na seção da API e no CTA final, onde o azure
brilhante destaca. Tema **escuro** opt-in (`.dark` no `<html>`, persistido em
`localStorage`, default no `prefers-color-scheme`, aplicado pré-paint sem flash) — escuro
frio, mesma identidade azure; as bandas coal viram painéis levemente elevados.

Estratégia de cor: **Committed** — um único azul saturado carrega a identidade em
preenchimentos, sublinhados, números de passo e bandas; o resto é uma rampa de neutros
frios disciplinada.

## Color

Tudo OKLCH, em `:root` / `.dark` como triplets `L C H` para `oklch(var(--token) / <alpha>)`
(ver [assets/theme.css](assets/theme.css)).

| Token | OKLCH (light) | Papel |
|---|---|---|
| `--bg` | `1 0 0` | Fundo branco puro |
| `--surface` / `--surface-2` | `0.975 …` / `0.945 …` | Bandas e insets frios |
| `--line` | `0.905 0.008 232` | Hairlines |
| `--ink` / `--ink-soft` / `--ink-mute` | `0.23` / `0.45` / `0.585` | Texto (near-black frio → mute) |
| `--brand` | `0.699 0.134 231` | Azure `#20ACE2` — **só** fills/grafismos/sublinhados |
| `--brand-strong` | `0.64 0.14 233` | Hover do azure |
| `--ocean` | `0.45 0.103 240` | Azul de **texto/links** sobre branco (`#005a87`, ~7:1) |
| `--coal` / `--coal-2` | `0.255 …` / `0.32 …` | Banda escura + superfície elevada |
| `--ink-rev` | `0.965 0.006 232` | Texto sobre coal |
| `--on-brand` | `0.20 0.02 240` | Texto escuro sobre fill azure |

**Regra dura:** o azure (`--brand`) nunca é texto sobre branco (~2.6:1). Botão primário =
fill azure + texto escuro (`--on-brand`, ~5.6:1), espelhando o botão âmbar+ink do app. Texto
azul usa `--ocean`. Sobre coal, o azure pode ser texto (~6:1).

## Typography

- **Display / headings:** **Bricolage Grotesque** (variável). Tracking `-0.025em`,
  `text-wrap: balance`, clamp de hero ≤ ~4.25rem.
- **Corpo / UI:** **Hanken Grotesk** (variável). Corpo capado em ~68ch.
- **Mono (literal):** **JetBrains Mono** — endpoints, payloads, tags de microcopy. Só onde
  há código/dado de verdade.

## Motion

CSS + IntersectionObserver (sem framework). Entrada de hero coreografada (linhas em stagger
+ sublinhado azure que "desenha"). Reveals de seção realçam conteúdo já visível — o estado
oculto só se aplica sob `html.js` e há failsafe que revela tudo, então sem-JS e renderers
headless sempre veem o conteúdo. Hover lifts nos cards de feed. Todo efeito tem caminho
`prefers-reduced-motion: reduce`. Easing ease-out-expo, sem bounce.

## Layout

- Largura máx ~1200px (`--container`), padding de seção fluido.
- Lattice de features com bordas compartilhadas (grade engenheirada), não 6 cards pastel
  idênticos. Passos numerados só porque são uma **sequência real** (3 passos).
- `min-w-0` em filhos de grid que contêm `<pre>` rolável, para o código não estourar a
  largura no mobile.
- IDs de seção preservados (`#api #como-funciona #demo #recursos #precos`).

## Components

Header fino sticky com blur + toggle de tema · wordmark (logo.svg) · pill azure · botões
primário (fill azure + ink) / ghost / ghost-on-coal · janela de código coal com chrome ·
grid de feed ao vivo (fetch real + placeholders skeleton + aviso de auth) · lattice de
features · painel de preço · campos de formulário (LGPD) · linhas de prose para páginas
legais. Tudo extraído em [assets/theme.css](assets/theme.css) +
[assets/tailwind.config.js](assets/tailwind.config.js) + [assets/app.js](assets/app.js),
compartilhado por todas as páginas.

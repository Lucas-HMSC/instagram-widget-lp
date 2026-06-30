# Product

## Register

brand

## Users

Desenvolvedores e pequenas agências/freelancers (PT-BR) que constroem ou mantêm sites
para clientes — padarias, clínicas, academias, restaurantes — e precisam exibir o feed do
Instagram desses clientes. São técnicos, céticos com "widgets de terceiros" e cansados de
SDKs pesados, iframes e layouts impostos. Chegam perguntando: *"Isso me dá os dados e me
deixa em paz, ou me prende num layout?"*

## Product Purpose

**Instagram Widget by Luck** (luck.app.br) é uma API multi-tenant que entrega o feed do
Instagram da conta conectada em **JSON puro**, via uma única chamada `fetch()`. A landing
page tem um trabalho: convencer um desenvolvedor de que a infraestrutura chata (OAuth,
cache, renovação de tokens, CORS por domínio) já está resolvida e que ele recebe só os
dados — montando o HTML como quiser. Sucesso = o visitante fala com a equipe ou contrata.

## Brand Personality

Infraestrutura confiável, sem firula. Três palavras: **preciso, infraestrutural, sem
amarras.** A voz fala de engenheiro para engenheiro: "um endpoint, um JSON, zero lock-in".
Mono (JetBrains) é literal aqui — são endpoints e payloads reais, não fantasia de
"developer". Português-primeiro.

## Anti-references

- O widget SaaS genérico com gradiente azul→ciano, cards de ícone pastel idênticos e
  pricing-hero com número gigante. Era exatamente o que esta página era.
- Glassmorphism decorativo, eyebrows minúsculos em maiúsculas sobre cada seção.
- Mono usado como fantasia "tech" onde não há código de verdade.

## Design Principles

1. **Mostre o payload, não adjetivos.** O JSON real e o `fetch()` real provam mais que
   qualquer "poderoso e simples".
2. **A cor azul carrega a identidade, não a superfície.** Branco limpo + azul-âmbar... azure
   committed + bandas coal escuras para drama; nada de fundo tingido.
3. **Ganhe cada elemento.** Números só onde há sequência real (os 3 passos). Nenhum card
   idêntico por reflexo.
4. **A própria página é a prova.** Sendo a vitrine de um produto para devs, o craft (tipo,
   espaçamento, motion, a11y) é parte do argumento.

## Accessibility & Inclusion

WCAG 2.1 AA. Corpo de texto ≥ 4.5:1; o azure claro (`--brand`) é reservado a
preenchimentos/grafismos e nunca usado como texto sobre branco (usa-se `--ocean`). Foco
visível, operável por teclado. Toda animação tem fallback `prefers-reduced-motion`. Tema
claro (padrão) e escuro opt-in, ambos auditados.

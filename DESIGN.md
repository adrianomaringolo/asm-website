---
name: ASM Marketing Digital
description: Marca estratégica, clara, segura e elegante de posicionamento e presença digital
colors:
  terracota: "#C47750"
  cafe: "#52382A"
  areia: "#EBD4A3"
  off-white: "#F4F4F2"
  dourado: "#DCA552"
  white: "#FFFFFF"
  cafe-deep: "#3A2A21"
  cafe-muted: "#6B574C"
  hairline: "rgba(82, 56, 42, 0.15)"
  terracota-wash: "rgba(196, 119, 80, 0.12)"
typography:
  display:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "3.5rem"
    fontWeight: 400
    lineHeight: 1.05
  headline:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.1
  lead:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.375
  quote:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  2xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.cafe}"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: "20px 24px"
    width: "370px"
  button-primary-hover:
    backgroundColor: "{colors.cafe-deep}"
    textColor: "{colors.white}"
  link-secondary:
    textColor: "{colors.cafe}"
    typography: "{typography.title}"
  link-secondary-hover:
    textColor: "{colors.cafe-deep}"
  stat:
    textColor: "{colors.cafe}"
    typography: "{typography.headline}"
  icon-badge:
    backgroundColor: "{colors.terracota-wash}"
    textColor: "{colors.terracota}"
    rounded: "{rounded.full}"
    size: "44px"
---

<!--
Autoridade: "ASM - Marketing Digital: DNA de marca" (Identidade Visual 2026, @moisesorigo).
O documento de marca prevalece sobre qualquer valor definido hoje no código. Onde o documento é
silencioso (espaçamento, raios, sombras, componentes de interface), as regras abaixo são decisões
do site, marcadas como tal, e devem ser coerentes com a marca.
As cores seguem os blocos desenhados no documento; os códigos escritos nele têm erros
(ex.: "#778730" sob o bloco terracota e o mesmo RGB repetido nas quatro cores). O dourado foi
medido na paleta da página 14.
-->

# Design System: ASM Marketing Digital

## Overview

**Creative North Star: "O Ateliê Editorial"**

A ASM é **estratégica, clara, segura e elegante**, e existe para simplificar o marketing para empreendedores, transformando comunicação em percepção de valor. O site se comporta como uma revista de estilo feita à mão: luz natural quente, papel, café, tons de terra e muito respiro. A Cormorant Garamond dá a voz dos títulos com contraste fino e refinado; a Manrope sustenta a informação com clareza. Terracota e dourado pontuam, o café dá peso, a areia e o off-white acalmam.

A densidade é baixa e editorial. O conteúdo se organiza em texto corrido, linhas finas e listas, não em pilhas de cartões. O monograma ASM é a rubrica da marca, e o logotipo com a tagline "MARKETING DIGITAL" é a assinatura por extenso. Os dois aparecem com parcimônia, como selo.

**Key Characteristics:**
- Cinco cores de marca: terracota, café, areia, off-white e dourado.
- Cormorant Garamond nos títulos; Manrope Regular e SemiBold nos textos.
- Todo texto é tingido de café; nenhum cinza frio.
- Cores chapadas; nenhum degradê decorativo.
- Estrutura por proximidade e traços finos, ecoando a construção do monograma.
- Fotografia editorial com luz natural quente e objetos do cotidiano (café, papel, relógio, óculos).

## Colors

Paleta terrosa e acolhedora: dois tons fortes (terracota e café), dois tons de papel (areia e off-white) e um acento metálico (dourado).

### Primary
- **Terracota** (terracota): a cor-assinatura. Logotipo sobre fundo claro, ícones, títulos grandes em destaque, traços finos decorativos e o pattern do logotipo sobre areia. Como tem contraste de 3,4:1 sobre branco, só aparece em texto a partir de 24px (ou 19px SemiBold) e nunca como fundo de texto branco pequeno.

### Secondary
- **Café** (cafe): a cor da tinta e do peso. Títulos, texto corrido, números, botões de ação e fundos escuros de seções de impacto e do pattern do monograma.
- **Café Profundo** (cafe-deep): estado de hover e pressionado dos elementos em café. Derivado do café, não é cor de marca.
- **Café Suave** (cafe-muted): legendas, descrições curtas, rótulos de números e texto secundário. Derivado do café, com contraste de 6,2:1 sobre off-white e 4,7:1 sobre areia.

### Tertiary
- **Areia** (areia): o papel quente. Fundos de seções editoriais, fundo do pattern do logotipo e detalhes sobre o café.
- **Dourado** (dourado): o acento metálico. Logotipo e símbolo sobre café ou sobre fotografia escura, traços finos e ornamentos sobre fundos escuros. Na tela é usado chapado; o brilho metálico (hot stamping) é exclusivo de impressos.

### Neutral
- **Off-white** (off-white): o fundo padrão das páginas.
- **Branco** (white): superfícies elevadas sobre off-white e o texto sobre café.
- **Linha Fina** (hairline): divisórias e bordas de listas, o café a 15%.
- **Véu de Terracota** (terracota-wash): fundo de selos de ícone.

### Named Rules
**The Five Colors Rule.** A marca tem cinco cores: terracota, café, areia, off-white e dourado. Tons derivados do café e transparências existem para legibilidade, não como novas cores. Nenhum outro matiz (azul, roxo, verde, cinza frio) entra na interface institucional.

**The Coffee Ink Rule.** Todo texto sobre fundo claro é café ou café suave. Cinzas neutros não fazem parte da marca.

**The Flat Color Rule.** Cores são aplicadas chapadas. Nada de texto em degradê, botões em degradê ou manchas desfocadas coloridas como decoração.

**The Gold After Dark Rule.** O dourado só aparece sobre café ou sobre fotografia escura. Sobre fundo claro ele perde contraste (2:1) e vira amarelo.

## Typography

**Display Font:** Cormorant Garamond (com serif)
**Body Font:** Manrope (com sans-serif)

**Character:** uma garamond de alto contraste, fina e elegante, nos títulos, contra uma grotesca geométrica clara e segura nos textos. O documento define: "Cormorant Garamond, ideal para títulos"; "Manrope Regular e Manrope SemiBold, ideais para textos".

### Hierarchy
- **Display** (Cormorant 400, 40px no celular / 56px no desktop, entrelinha 1.05): o título do hero. Um por página.
- **Headline** (Cormorant 400, 36px / 48px, entrelinha 1.1): títulos de seção (h2) e números de destaque.
- **Lead** (Cormorant 400, 24px / 30px, entrelinha 1.375): a frase de abertura em primeira pessoa; nomes próprios em Cormorant 600.
- **Quote** (Cormorant itálico 400, 30px / 44px, entrelinha 1.2): citações e declarações de propósito.
- **Title** (Manrope SemiBold 600, 16px): títulos de itens de lista e texto de botão.
- **Body** (Manrope Regular 400, 18px, entrelinha 1.625): texto corrido, com medida máxima de 65 caracteres. Destaques em Manrope SemiBold.
- **Label** (Manrope SemiBold 600, 14px, caixa-alta, espaçamento 0.12em, café suave): rótulos de subseção e a assinatura abaixo de citações.

### Named Rules
**The Two Families Rule.** Só existem duas famílias: Cormorant Garamond e Manrope. Nenhuma outra fonte (monoespaçada, do sistema, Arial, Helvetica) entra no site, nos e-mails ou em páginas estáticas. Números tabulares usam `tabular-nums` da Manrope; números em Cormorant usam algarismos alinhados (`lining-nums`).

**The Serif Titles Rule.** Títulos são Cormorant. A Manrope existe só em Regular (400) e SemiBold (600).

**The Serif Never Operates Rule.** A Cormorant não é usada em botões, rótulos, navegação ou formulários. Controles falam em Manrope.

## Layout

*Decisão do site; o documento de marca não define layout.*

Container central de 1152px com margens laterais de 24px no celular e 48px a partir de 768px. As seções editoriais respiram com 80px de padding vertical no celular e 112px no desktop. As seções alternam fundos da marca para marcar as passagens sem bordas, nesta ordem: hero em off-white, Somos a ASM em café, Serviços em café profundo, Diagnóstico em areia, Instagram em branco, Quem sou eu em off-white, Perguntas frequentes em branco, Conteúdos em café e rodapé em café profundo.

O ritmo alterna espaços apertados dentro de um grupo (12px entre rótulo e parágrafo) com espaços generosos entre grupos (40–48px). Seções biográficas usam uma grade de 12 colunas: retrato em 5 colunas, fixo na tela durante a rolagem, e narrativa em 7. No celular tudo empilha na ordem de leitura, com o retrato limitado a cerca de 260px de largura.

O hero ocupa a altura da tela e centraliza o conteúdo verticalmente, em duas colunas: texto à esquerda (no máximo 576px) e, à direita, o retrato recortado da Anelita sobre um painel café com o pattern do monograma, com a cabeça ultrapassando o topo do painel.

## Elevation & Depth

*Decisão do site, coerente com a marca "clara e elegante".*

O sistema é plano. A profundidade vem da alternância de superfícies (off-white, branco, areia e café) e de traços finos.

### Shadow Vocabulary
- **Retrato** (`box-shadow: 0 20px 40px -20px rgba(82, 56, 42, 0.45)`): sombra longa e quente em café sob fotografias de destaque.
- **Flutuante** (`box-shadow: 0 10px 30px -10px rgba(82, 56, 42, 0.25)`): elementos que passam por cima do conteúdo.

### Named Rules
**The Earned Shadow Rule.** Sombra só em fotografia e em elementos flutuantes. Botões, listas, números e blocos de texto ficam planos.

## Shapes

Cantos suavemente arredondados, ecoando a moldura do monograma: 12px em botões, 16px em fotografias e cartões de destaque, 8px em elementos menores e círculo completo em selos de ícone. Traços finos (1px) são a linguagem de linha da marca, como nas linhas de construção do monograma: divisórias, molduras deslocadas atrás de fotos e contornos decorativos em terracota ou dourado.

## Components

*Os componentes de interface são decisões do site; logotipo, símbolo, pattern e fotografia vêm do documento de marca.*

### Buttons
- **Shape:** cantos arredondados (12px), largura máxima de 370px.
- **Primary:** fundo café chapado, texto branco em Manrope SemiBold, ícone lucide à esquerda e padding de 20px por 24px.
- **Hover / Focus:** o fundo escurece para café profundo; o foco mostra um anel de 2px em terracota com afastamento de 2px.
- **Secondary (link):** texto em café, sublinhado com afastamento, seta à direita; no hover vira café profundo.

### Stats
- **Style:** linha de três colunas entre dois traços finos, separadas por divisórias verticais. Número em Cormorant café com algarismos alinhados; rótulo em Manrope café suave abaixo. Sem caixas nem sombras.

### Lists / Expertise
- **Style:** grade de duas colunas (uma no celular) com traço fino entre itens. Cada item tem um selo circular de 44px em véu de terracota com ícone lucide de 20px (traço 1.75) em terracota, título em Manrope SemiBold café e descrição curta em café suave.

### Services
- **Style:** sobre café profundo, lista editorial de duas colunas separada por traços finos dourados a 25%. Cada serviço tem ícone lucide dourado (traço 1.25), título em Cormorant branco e descrição em branco a 75%. Os números de destaque ficam em Cormorant dourado, entre divisórias finas, e a chamada final vive num quadro de traço fino dourado com o botão claro.

### FAQ
- **Style:** título da seção em Cormorant à esquerda (4 colunas) e lista à direita (8 colunas), com traços finos em café a 15% entre as perguntas. Cada pergunta é um `details`/`summary` nativo: pergunta em Manrope SemiBold café profundo e um "+" terracota que gira 45° ao abrir; resposta em café, até 65 caracteres por linha. O conteúdo vem de `src/content/faq.ts`, a mesma fonte do JSON-LD `FAQPage`.

### Buttons on dark
- **Style:** sobre café, o botão de ação inverte: fundo areia, texto café profundo; no hover, fundo branco.

### Icons
- **Style:** exclusivamente lucide-react, em traço fino e consistente, na cor terracota ou herdando o café do texto. Nenhum emoji ou glifo unicode no lugar de ícone.

### Logotipo
- **Composição:** "ASM" em serifa de alto contraste com a tagline "MARKETING DIGITAL".
- **Versões:** vertical (ASM sobre a tagline), horizontal (ASM com a tagline empilhada à direita) e horizontal com o símbolo à esquerda.
- **Cores:** terracota ou cinza-grafite sobre fundo claro; dourado ou branco sobre café e sobre fotografia escura.

### Símbolo
- O monograma ASM dentro de uma moldura arredondada, a rubrica da marca. Usado sozinho em espaços pequenos ou quadrados: favicon, avatar e marca-d'água. No favicon, as letras ficam em branco sobre fundo café. Como marca-d'água, aparece em dourado a 15% de opacidade sobre café, parcialmente cortado pela borda da seção.

### Pattern
- Duas estampas oficiais: o logotipo horizontal repetido em terracota sobre areia, e o monograma ampliado em traços finos terracota sobre café. Servem de fundo de seções de impacto e materiais, nunca atrás de texto corrido. No site: o monograma no painel do retrato do hero (`public/brand/pattern-monograma.webp`, terracota transparente sobre café) e o logotipo como faixa no topo do rodapé (`public/brand/pattern-logotipo.webp`). Os arquivos foram extraídos do próprio documento de marca e não emendam em mosaico: usar esticados ou em faixa horizontal.

### Fotografia
- Luz natural quente, sombras suaves, paleta bege e marrom, objetos do cotidiano de trabalho (café, papel, caneta-tinteiro, relógio, óculos) e retratos da Anelita em fundo marrom ou escuro, com roupa clara. Nada de banco de imagens frio ou saturado.

## Do's and Don'ts

### Do:
- **Do** tratar o documento "DNA de marca" como autoridade: ele prevalece sobre qualquer valor existente no código.
- **Do** usar apenas Cormorant Garamond (títulos) e Manrope Regular/SemiBold (textos), inclusive em e-mails e páginas estáticas.
- **Do** limitar a paleta a terracota, café, areia, off-white e dourado, com os tons derivados do café para texto.
- **Do** aplicar cores chapadas.
- **Do** usar o dourado só sobre café ou fotografia escura.
- **Do** manter o texto corrido em até 65 caracteres por linha.
- **Do** usar fotografia com luz natural quente e tons terrosos.

### Don't:
- **Don't** usar degradês: nem em texto, nem em botões, nem como manchas desfocadas de fundo.
- **Don't** usar cinzas frios, azul, roxo ou verde na interface institucional.
- **Don't** usar texto branco pequeno sobre terracota nem texto terracota abaixo de 24px sobre fundo claro.
- **Don't** usar Manrope em pesos diferentes de 400 e 600, nem em títulos de seção.
- **Don't** empilhar cartões com ícone, título e texto como estrutura de seção.
- **Don't** usar emojis como ícones.
- **Don't** usar borda lateral colorida grossa em blocos de texto ou citações.

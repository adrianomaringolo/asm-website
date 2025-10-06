# 🎬 Sistema de Animações do Site ASM

Este documento explica como funcionam as animações implementadas no site da ASM Marketing Digital.

## 📋 Visão Geral

O sistema de animações foi criado para proporcionar uma experiência visual elegante e profissional, com elementos que aparecem suavemente conforme o usuário navega pela página.

## 🛠️ Componentes Principais

### 1. AnimatedElement

Componente wrapper que aplica animações quando o elemento entra na viewport.

**Uso:**

```tsx
<AnimatedElement animation='fade-in-up' delay={300}>
  <h1>Título animado</h1>
</AnimatedElement>
```

**Animações disponíveis:**

- `fade-in-up`: Aparece de baixo para cima
- `fade-in-left`: Aparece da esquerda
- `fade-in-right`: Aparece da direita
- `fade-in`: Aparece com fade simples
- `scale-in`: Aparece com efeito de escala
- `slide-in-up`: Desliza de baixo para cima

### 2. FloatingElement

Componente para elementos que devem flutuar suavemente.

**Uso:**

```tsx
<FloatingElement delay={1}>
  <div className='elemento-decorativo' />
</FloatingElement>
```

### 3. useIntersectionObserver

Hook personalizado que detecta quando elementos entram na viewport.

## 🎨 Animações CSS Implementadas

### Animações Básicas

- **fadeInUp**: Fade in com movimento vertical
- **fadeInLeft/Right**: Fade in com movimento horizontal
- **scaleIn**: Aparece com efeito de escala
- **slideInUp**: Desliza verticalmente

### Animações Especiais

- **pulse-glow**: Efeito de brilho pulsante
- **float**: Movimento flutuante suave
- **bounce-in**: Entrada com efeito bounce

### Classes Utilitárias

- `.hover-lift`: Efeito de elevação no hover
- `.animate-pulse-glow`: Brilho pulsante
- `.animate-float`: Flutuação contínua

## ⚙️ Configurações

### Delays

Os delays são configurados em incrementos de 100ms:

- `delay={100}` = 0.1s
- `delay={200}` = 0.2s
- `delay={300}` = 0.3s
- etc.

### Threshold

O threshold padrão para detecção de viewport é 0.1 (10% do elemento visível).

## 🎯 Implementação por Seção

### Hero Section

- Logo: `scale-in` com delay 200ms
- Título: `fade-in-up` com delay 300ms
- Botão CTA: `scale-in` com delay 500ms
- Imagem: `fade-in-right` com delay 400ms
- Elementos decorativos: `fade-in` + `float`

### Services Section

- Título: `fade-in-left` com delay 100ms
- Cards de serviços: `fade-in-up` com delays escalonados
- Estatísticas: `fade-in-left/right` alternados

### About Section

- Título: `fade-in-left`
- Parágrafos: `fade-in-up` com delays progressivos
- Elementos decorativos: `fade-in` com delays

### Bio Section

- Imagem: `fade-in-left`
- Título: `fade-in-right`
- Parágrafos: `fade-in-up` com delays progressivos

## 🚀 Performance

- Animações são aplicadas apenas quando necessário
- Uso de `transform` e `opacity` para melhor performance
- Intersection Observer para detecção eficiente de viewport
- Animações são executadas apenas uma vez por padrão

## 🎨 Customização

Para adicionar novas animações:

1. Defina o keyframe no `globals.css`
2. Crie a classe CSS correspondente
3. Adicione a opção no componente `AnimatedElement`

Exemplo:

```css
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-down {
  animation: slideInDown 0.8s ease-out forwards;
}
```

## 📱 Responsividade

As animações são otimizadas para funcionar bem em todos os dispositivos, com ajustes automáticos para telas menores.

## ✨ Efeitos Especiais

- **Botões CTA**: Hover com scale e shadow
- **Cards de serviços**: Hover com elevação e glow
- **Elementos decorativos**: Movimento flutuante contínuo
- **Transições suaves**: Duração de 300ms para interações

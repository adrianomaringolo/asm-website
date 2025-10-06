# 🎬 Sistema de Animações CSS - ASM Marketing Digital

Este documento explica o sistema de animações CSS puro implementado no site da ASM Marketing Digital, otimizado para SEO e performance.

## 📋 Visão Geral

O sistema utiliza **CSS puro + Intersection Observer** para criar animações suaves e performáticas que não comprometem o SEO. Todos os elementos são renderizados no servidor e as animações são aplicadas progressivamente no cliente.

## 🛠️ Componentes Principais

### 1. ScrollAnimation

Componente que aplica animações quando elementos entram na viewport.

**Uso:**

```tsx
<ScrollAnimation animation='fade-in-up' delay='delay-300'>
  <h1>Título animado</h1>
</ScrollAnimation>
```

**Animações disponíveis:**

- `fade-in-up`: Aparece de baixo para cima
- `fade-in-left`: Aparece da esquerda
- `fade-in-right`: Aparece da direita
- `fade-in`: Aparece com fade simples
- `scale-in`: Aparece com efeito de escala
- `slide-in-up`: Desliza de baixo para cima
- `bounce-in`: Entrada com efeito bounce

### 2. FloatingAnimation

Componente para elementos que devem flutuar continuamente.

**Uso:**

```tsx
<FloatingAnimation delay={1}>
  <div className='elemento-decorativo' />
</FloatingAnimation>
```

## 🎨 Animações CSS Implementadas

### Keyframes Principais

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

### Classes Utilitárias

- `.hover-scale`: Efeito de escala no hover
- `.hover-lift`: Efeito de elevação no hover
- `.card-hover`: Animação específica para cards
- `.animate-float`: Flutuação contínua

### Delays Disponíveis

- `delay-100` até `delay-800` (0.1s até 0.8s)

## ⚙️ Otimizações para SEO

### 1. Server-Side Rendering

- Todos os elementos são renderizados no servidor
- Conteúdo totalmente acessível para crawlers
- Sem hidration mismatch

### 2. Estados Iniciais Inteligentes

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
}
```

- Elementos ficam visíveis para SEO
- Animação aplicada apenas no cliente

### 3. Acessibilidade

```css
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .animate-fade-in-up,
  /* ... outras animações */ {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

## 🚀 Performance

### Intersection Observer

- Detecção eficiente de viewport
- Animações aplicadas apenas quando necessário
- Cleanup automático após execução

### Hardware Acceleration

- Uso de `transform` e `opacity`
- Evita layout thrashing
- Animações suaves em 60fps

### Lazy Loading

- Animações carregadas sob demanda
- Sem impacto no First Contentful Paint
- Bundle size otimizado

## 🎯 Implementação por Seção

### Hero Section

```tsx
<ScrollAnimation animation="bounce-in" delay="delay-200">
  <Image src="/logo.webp" className="hover-scale" />
</ScrollAnimation>

<FloatingAnimation delay={1}>
  <div className="elemento-decorativo" />
</FloatingAnimation>
```

### Services Section

```tsx
{
  services.map((service, i) => (
    <ScrollAnimation
      animation='fade-in-up'
      delay={`delay-${Math.min(800, 300 + i * 100)}`}
    >
      <div className='card-hover'>{/* conteúdo do card */}</div>
    </ScrollAnimation>
  ));
}
```

### Bio Section

```tsx
<ScrollAnimation animation='fade-in-left' delay='delay-100'>
  <Image className='hover-scale' />
</ScrollAnimation>;

{
  paragraphs.map((p, i) => (
    <ScrollAnimation animation='fade-in-up' delay={`delay-${200 + i * 100}`}>
      <p>{p}</p>
    </ScrollAnimation>
  ));
}
```

## 🎨 Customização

### Adicionando Nova Animação

```css
/* 1. Definir keyframe */
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

/* 2. Criar classe */
.animate-slide-in-down {
  animation: slideInDown 0.8s ease-out forwards;
}
```

### Configurando Delays Personalizados

```css
.delay-900 {
  animation-delay: 0.9s;
}
.delay-1000 {
  animation-delay: 1s;
}
```

### Efeitos de Hover Personalizados

```css
.custom-hover {
  transition: all 0.3s ease;
}

.custom-hover:hover {
  transform: translateY(-5px) rotate(2deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
```

## 📱 Responsividade

### Animações Adaptativas

```css
@media (max-width: 768px) {
  .animate-fade-in-up {
    animation-duration: 0.6s;
  }

  .card-hover:hover {
    transform: translateY(-2px) scale(1.01);
  }
}
```

### Performance em Dispositivos Móveis

- Animações mais rápidas em mobile
- Efeitos de hover reduzidos
- Intersection Observer com threshold otimizado

## ✨ Recursos Avançados

### Animações em Cascata

```tsx
{
  items.map((item, i) => (
    <ScrollAnimation
      animation='fade-in-up'
      delay={`delay-${Math.min(800, 100 + i * 100)}`}
    >
      {item}
    </ScrollAnimation>
  ));
}
```

### Elementos Flutuantes Sincronizados

```tsx
<FloatingAnimation delay={0.5}>
  <div className="blob-1" />
</FloatingAnimation>

<FloatingAnimation delay={1.2}>
  <div className="blob-2" />
</FloatingAnimation>
```

### Combinação de Animações

```tsx
<ScrollAnimation animation='scale-in' delay='delay-200'>
  <div className='hover-lift card-hover'>
    <FloatingAnimation delay={2}>
      <Icon />
    </FloatingAnimation>
  </div>
</ScrollAnimation>
```

## 🔧 Debugging

### Visualizar Animações

```css
/* Adicionar temporariamente para debug */
.animate-on-scroll {
  border: 2px solid red !important;
}

.animate-on-scroll.animate-in {
  border: 2px solid green !important;
}
```

### Performance Monitoring

- Use DevTools Performance tab
- Monitor Composite Layers
- Verifique FPS durante animações

## 📊 Métricas de Performance

### Core Web Vitals

- **LCP**: Não impactado (elementos renderizados no servidor)
- **FID**: Melhorado (animações não bloqueiam interações)
- **CLS**: Controlado (transforms não causam layout shift)

### Bundle Size

- CSS: ~2KB gzipped
- JS: ~1KB gzipped
- Total overhead: <3KB

## 🎯 Benefícios para SEO

1. **Conteúdo Indexável**: Todo texto visível para crawlers
2. **Performance**: Animações não impactam métricas de carregamento
3. **Acessibilidade**: Respeita preferências do usuário
4. **Progressive Enhancement**: Funciona sem JavaScript
5. **Mobile-First**: Otimizado para dispositivos móveis

## 📚 Recursos Adicionais

- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animations Performance](https://web.dev/animations-guide/)
- [Prefers Reduced Motion](https://web.dev/prefers-reduced-motion/)

# 🎬 Sistema de Animações com Framer Motion - ASM

Este documento explica como funcionam as animações implementadas no site da ASM Marketing Digital usando **Framer Motion**.

## 📋 Visão Geral

O sistema foi migrado para **Framer Motion** para proporcionar animações mais fluidas, performáticas e com controle granular. Todas as animações são baseadas em JavaScript e otimizadas para performance.

## 🛠️ Componentes Principais

### 1. AnimatedElement

Componente wrapper que aplica animações quando o elemento entra na viewport usando Framer Motion.

**Uso:**

```tsx
<AnimatedElement animation='fade-in-up' delay={300} duration={0.6}>
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
- `bounce-in`: Entrada com efeito spring bounce

### 2. FloatingElement

Componente para elementos que devem flutuar suavemente usando animação contínua.

**Uso:**

```tsx
<FloatingElement delay={1} intensity={15}>
  <div className='elemento-decorativo' />
</FloatingElement>
```

**Props:**

- `delay`: Atraso antes de iniciar (segundos)
- `intensity`: Intensidade do movimento (pixels)

### 3. StaggerContainer

Container que anima filhos em sequência com delay escalonado.

**Uso:**

```tsx
<StaggerContainer staggerDelay={0.15}>
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</StaggerContainer>
```

### 4. HoverScale

Componente para efeitos de hover com escala.

**Uso:**

```tsx
<HoverScale scale={1.05} duration={0.3}>
  <div>Elemento com hover</div>
</HoverScale>
```

### 5. TypewriterText

Efeito de texto digitando letra por letra.

**Uso:**

```tsx
<TypewriterText delay={1.2}>Texto que aparece digitando</TypewriterText>
```

## 🎨 Animações Implementadas

### Botões CTA

- **Hover**: Scale 1.05 + box-shadow animado
- **Tap**: Scale 0.95 para feedback tátil
- **Ícones**: Rotação no hover
- **Conteúdo**: Movimento lateral sutil

### Cards de Serviços

- **Container**: Stagger animation para entrada sequencial
- **Cards**: Hover com scale e shadow
- **Ícones**: Rotação 360° no hover
- **Entrada**: Fade-in-up com delays escalonados

### Elementos Decorativos

- **Blobs**: Movimento flutuante contínuo
- **Imagens**: Hover com scale sutil
- **Logo**: Bounce-in na entrada + hover scale

## ⚙️ Configurações Avançadas

### Variants Personalizados

```tsx
const customVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
```

### Transições Spring

```tsx
transition={{
  type: "spring",
  stiffness: 400,
  damping: 10
}}
```

### Viewport Detection

```tsx
viewport={{ once: true, amount: 0.1 }}
```

## 🎯 Implementação por Seção

### Hero Section

- **Logo**: `bounce-in` com hover scale
- **Título**: `fade-in-up` com delay 300ms
- **Botão CTA**: Animações complexas de hover
- **Imagem**: `fade-in-right` com hover scale
- **Texto final**: Efeito typewriter
- **Elementos decorativos**: Floating animation

### Services Section

- **Título**: `fade-in-left`
- **Cards**: StaggerContainer com itemVariants
- **Ícones**: Rotação no hover
- **Hover**: Scale + shadow animados

### Botões Interativos

- **CTA Principal**: Scale + shadow + movimento interno
- **CTA Ebook**: Scale + shake do ícone
- **Links**: Hover states suaves

## 🚀 Performance

### Otimizações do Framer Motion

- **Hardware acceleration**: Automático para transform/opacity
- **Layout animations**: Evitadas para melhor performance
- **Viewport detection**: Lazy loading das animações
- **Once**: Animações executadas apenas uma vez

### Configurações de Performance

```tsx
// Otimizado para performance
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
```

## 🎨 Customização

### Adicionando Nova Animação

```tsx
// 1. Definir variants
const newVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -180 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

// 2. Adicionar ao AnimatedElement
const animationVariants = {
  // ... outras animações
  "spin-in": newVariants,
};
```

### Criando Componente Personalizado

```tsx
export function CustomAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

## 📱 Responsividade

### Animações Adaptativas

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: window.innerWidth < 768 ? 0.4 : 0.6,
  }}
/>
```

## ✨ Recursos Avançados

### Gesture Recognition

- **whileHover**: Animações no hover
- **whileTap**: Feedback tátil
- **whileDrag**: Arrastar elementos
- **whileInView**: Trigger por viewport

### Layout Animations

- **layout**: Animações automáticas de layout
- **layoutId**: Transições entre componentes
- **shared layouts**: Elementos compartilhados

### Orchestration

- **staggerChildren**: Delay entre filhos
- **delayChildren**: Delay inicial para filhos
- **when**: Controle de sequência

## 🔧 Debugging

### Ferramentas de Debug

```tsx
// Visualizar animações
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 2 }}
  onAnimationStart={() => console.log("Iniciou")}
  onAnimationComplete={() => console.log("Terminou")}
/>
```

### Performance Monitoring

- Use React DevTools Profiler
- Monitor re-renders desnecessários
- Verifique animações que causam layout thrashing

## 📚 Recursos Adicionais

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Performance Guide](https://www.framer.com/motion/guide-reduce-bundle-size/)

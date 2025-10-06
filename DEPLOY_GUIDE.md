# 🚀 Guia de Deploy - ASM Marketing Digital

## Opção 1: Deploy na Vercel (Recomendado - Gratuito)

### Pré-requisitos

- Conta no GitHub
- Conta na Vercel (vercel.com)

### Passos:

1. **Subir código para GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - ASM Website"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/asm-website.git
   git push -u origin main
   ```

2. **Deploy na Vercel:**

   - Acesse vercel.com
   - Clique em "New Project"
   - Conecte seu repositório GitHub
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Clique em "Deploy"

3. **Configurar Domínio (Opcional):**
   - Na dashboard da Vercel, vá em "Domains"
   - Adicione seu domínio personalizado
   - Configure DNS conforme instruções

## Opção 2: Deploy na Netlify (Alternativa Gratuita)

1. **Build do projeto:**

   ```bash
   npm run build
   npm run export  # Se necessário
   ```

2. **Deploy na Netlify:**
   - Acesse netlify.com
   - Arraste a pasta `out` ou `.next` para o deploy
   - Ou conecte com GitHub para deploy automático

## Opção 3: Servidor VPS/Hospedagem

### Para hospedagem tradicional:

1. **Build de produção:**

   ```bash
   npm run build
   npm run start
   ```

2. **Configurar servidor:**
   - Node.js 18+
   - PM2 para gerenciamento de processo
   - Nginx como proxy reverso

## Configurações Importantes

### Environment Variables (se necessário):

```env
NEXT_PUBLIC_SITE_URL=https://seudominio.com
NEXT_PUBLIC_GA_ID=seu-google-analytics-id
```

### Otimizações para Produção:

1. **Comprimir imagens:**

   - Converter para WebP
   - Otimizar tamanhos
   - Usar next/image

2. **Configurar Analytics:**

   - Google Analytics 4
   - Google Search Console
   - Facebook Pixel (se necessário)

3. **SSL/HTTPS:**
   - Vercel/Netlify: Automático
   - Servidor próprio: Let's Encrypt

## Checklist Pré-Deploy

- [ ] Todas as imagens estão otimizadas
- [ ] Links externos funcionam
- [ ] Formulários de contato configurados
- [ ] Meta tags e SEO configurados
- [ ] Sitemap.xml gerado
- [ ] Robots.txt configurado
- [ ] Testes em diferentes dispositivos
- [ ] Performance otimizada (Lighthouse)

## Pós-Deploy

1. **Testar funcionalidades:**

   - Calculadora de ROI
   - Diagnóstico Digital
   - Chatbot
   - Formulários de contato

2. **Configurar monitoramento:**

   - Google Analytics
   - Google Search Console
   - Uptime monitoring

3. **SEO:**
   - Submeter sitemap ao Google
   - Configurar Google My Business
   - Monitorar Core Web Vitals

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Lint
npm run lint

# Verificar build
npm run build && npm run start
```

## Troubleshooting

### Erro de Build:

- Verificar todas as importações
- Checar tipos TypeScript
- Validar sintaxe JSX

### Erro de Runtime:

- Verificar console do navegador
- Checar Network tab
- Validar APIs externas

### Performance:

- Usar Lighthouse
- Otimizar imagens
- Minimizar JavaScript
- Configurar caching

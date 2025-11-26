# Site Empório Modelo

Website institucional desenvolvido para o Empório Modelo - Especializado em Queijos, Vinhos, Grãos e Produtos Importados.

## Sobre o Negócio

**Nome Comercial:** Empório Modelo  
**Localização:** Mercado Municipal de Presidente Prudente - Box 14  
**Contato:** (18) 3223-3916  
**Instagram:** @emporio.modelo  
**Seguidores:** 1.543

## Características Técnicas

### Arquitetura
- Single Page Application (SPA)
- HTML5 Semântico
- CSS3 com Flexbox e Grid Layout
- JavaScript Vanilla (sem dependências)
- Mobile-first responsive design

### Design System
**Paleta de Cores:**
- Primária: #D4AF37 (Dourado)
- Secundária: #000000 (Preto)
- Background: #FFFFFF (Branco)

**Tipografia:**
- Headings: Playfair Display
- Body: Montserrat
- Ícones: Font Awesome

### Estrutura de Páginas

**1. Hero Section**  
Apresentação principal com call-to-actions direcionados

**2. Destaques**  
Showcase de 4 diferenciais competitivos do negócio

**3. Catálogo de Produtos**  
Sistema de filtros por categoria com interface dinâmica

**4. Institucional**  
História, missão e valores da empresa

**5. Galeria**  
Lightbox interativo para visualização de produtos

**6. Contato**  
Informações de localização com Google Maps integrado

### Funcionalidades Implementadas

- Sistema de navegação responsiva para dispositivos móveis
- Filtro dinâmico de produtos por categoria
- Galeria com modal lightbox para ampliação de imagens
- Animações on-scroll com Intersection Observer
- Widget flutuante de WhatsApp Business
- Botão "Scroll to Top" com navegação suave
- Integração Google Maps Embed API
- Links sociais com tracking

## Estrutura do Projeto

```
EMPORIO_MODELO/
├── index.html          # Página principal
├── styles.css          # Estilos globais
├── script.js           # Lógica JavaScript
├── 404.html           # Página de erro personalizada
├── README.md          # Documentação
└── images/
    ├── logo.png
    ├── hero-bg.jpg
    ├── loja.jpg
    ├── produtos/      # Imagens do catálogo
    │   ├── queijos.jpg
    │   ├── vinhos.jpg
    │   ├── massas.jpg
    │   ├── graos.jpg
    │   ├── embutidos.jpg
    │   ├── chocolates.jpg
    │   ├── conservas.jpg
    │   └── azeites.jpg
    └── galeria/       # Imagens da galeria
        ├── img1.jpg
        ├── img2.jpg
        ├── img3.jpg
        ├── img4.jpg
        ├── img5.jpg
        ├── img6.jpg
        ├── img7.jpg
        └── img8.jpg
```

## Guia de Configuração

### 1. Preparação de Assets

**Especificações de Imagens:**
- Logo: PNG transparente, 200x200px (recomendado)
- Hero Background: JPG, 1920x1080px, otimizado
- Galeria: JPG, 1200x800px, comprimidas

**Otimização:**
- Compressão JPEG: 80-85% qualidade
- Uso de WebP quando possível
- Lazy loading implementado

### 2. Personalização de Dados

**Editar em `index.html`:**

```html
<!-- WhatsApp Business -->
<a href="https://wa.me/5518XXXXXXXXX">

<!-- Google Maps -->
<iframe src="https://maps.google.com/maps?q=..."></iframe>

<!-- Redes Sociais -->
<a href="https://instagram.com/emporio.modelo">
```

### 3. Customização de Estilo

**Variáveis CSS em `styles.css`:**

```css
:root {
    --cor-primaria: #D4AF37;
    --cor-secundaria: #000000;
    --cor-fundo: #FFFFFF;
    --espacamento-base: 1rem;
    --border-radius: 8px;
}
```

### 4. Adicionar Produtos

**Template de Card:**

```html
<div class="produto-card" data-category="categoria">
    <div class="produto-image">
        <img src="images/produtos/item.jpg" alt="Descrição do produto">
        <span class="produto-badge">Premium</span>
    </div>
    <div class="produto-info">
        <h3>Nome do Produto</h3>
        <p>Descrição detalhada</p>
        <a href="https://wa.me/..." class="btn-contato">Consultar Preço</a>
    </div>
</div>
```

## Deploy e Hospedagem

### GitHub Pages (Gratuito)

```powershell
# Inicializar repositório
git init
git add .
git commit -m "Initial commit: Site Emporio Modelo"

# Conectar ao GitHub
git branch -M main
git remote add origin https://github.com/USERNAME/emporiomodelo.git
git push -u origin main
```

**Configuração GitHub Pages:**
1. Acessar: Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / root
4. Save

**URL Final:** `https://USERNAME.github.io/emporiomodelo/`

### Alternativas de Hospedagem

**Netlify**
- Drag & drop ou conexão Git
- URL: `*.netlify.app`
- CI/CD automático

**Vercel**
- Import de repositório GitHub
- URL: `*.vercel.app`
- Otimizações automáticas

**Cloudflare Pages**
- Deploy via Git
- URL: `*.pages.dev`
- CDN global incluído

## Stack Tecnológico

**Frontend:**
- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript ES6+ (Modules, Async/Await)

**Dependências Externas:**
- Font Awesome 6.x (Icons)
- Google Fonts API (Typography)
- Google Maps Embed API (Geolocation)

**Ferramentas de Desenvolvimento:**
- VS Code (Editor recomendado)
- Live Server (Development)
- Git (Version control)

## Otimizações SEO

**Meta Tags Implementadas:**
- Title e Description otimizados
- Open Graph Protocol (Facebook)
- Twitter Card markup
- Canonical URL
- Viewport meta tag

**Boas Práticas:**
- Estrutura semântica HTML5
- Hierarquia de headings (H1-H6)
- Alt text descritivo em imagens
- URLs amigáveis (anchors)
- Schema.org ready

**Performance:**
- Minificação de assets (produção)
- Lazy loading de imagens
- Async loading de scripts
- Cache-control headers

## Manutenção

### Atualizar Produtos

1. Adicionar imagem em `images/produtos/`
2. Criar card no HTML
3. Testar responsividade
4. Commit e deploy

### Modificar Conteúdo

```javascript
// Em script.js - Atualizar dados
const produtos = [
    {
        nome: "Produto",
        categoria: "categoria",
        descricao: "Descrição",
        imagem: "path/to/image.jpg"
    }
];
```

## Suporte Técnico

**Desenvolvedor:** Eduardo Bruno  
**Repositório:** github.com/eduardobrunu/emporiomodelo  
**Documentação:** Consulte este README

## Licença

Projeto desenvolvido para uso comercial exclusivo do Empório Modelo.  
Todos os direitos reservados.

---

**Categorias de Produtos:** Queijos | Vinhos | Grãos | Produtos Importados  
**Desenvolvido por:** Eduardo Bruno  
**Ano:** 2024

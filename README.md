# 🧀🍷 Site Empório Modelo

Site institucional desenvolvido para o **Empório Modelo** - Queijos, Vinhos, Grãos e Produtos Importados.

## 📍 Sobre o Negócio

- **Nome:** Empório Modelo
- **Localização:** Mercado Municipal de Presidente Prudente - Box 14
- **Telefone:** (18) 3223-3916
- **Instagram:** [@emporio.modelo](https://instagram.com/emporio.modelo)
- **Seguidores:** 1.543

## 🎨 Características do Site

### Design
- Layout moderno e elegante
- Cores: Dourado (#D4AF37), Preto e Branco
- Tipografia sofisticada (Playfair Display + Montserrat)
- Totalmente responsivo (mobile-first)

### Seções
1. **Hero Section** - Apresentação impactante com call-to-actions
2. **Destaques** - 4 diferenciais do empório
3. **Produtos** - Catálogo com filtros por categoria
4. **Sobre Nós** - História e missão
5. **Galeria** - Fotos dos produtos com lightbox
6. **Contato** - Localização, telefone e mapa integrado

### Funcionalidades
- ✅ Menu responsivo para mobile
- ✅ Filtro de produtos por categoria
- ✅ Galeria com lightbox (clique para ampliar)
- ✅ Animações ao scroll
- ✅ Botão WhatsApp flutuante
- ✅ Botão "Voltar ao topo"
- ✅ Integração com Google Maps
- ✅ Links para redes sociais

## 🚀 Como Usar

### 1. Estrutura de Pastas

Organize seus arquivos assim:

```
EMPORIO_MODELO/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── logo.png (seu logo)
    ├── hero-bg.jpg (imagem de fundo do hero)
    ├── loja.jpg (foto da loja para seção Sobre)
    ├── produtos/
    │   ├── queijos.jpg
    │   ├── vinhos.jpg
    │   ├── massas.jpg
    │   ├── graos.jpg
    │   ├── embutidos.jpg
    │   ├── chocolates.jpg
    │   ├── conservas.jpg
    │   └── azeites.jpg
    └── galeria/
        ├── img1.jpg
        ├── img2.jpg
        ├── img3.jpg
        ├── img4.jpg
        ├── img5.jpg
        ├── img6.jpg
        ├── img7.jpg
        └── img8.jpg
```

### 2. Adicionar Imagens

**Importante:** Crie a pasta `images` e adicione suas fotos:

- **logo.png** - Logo do Empório Modelo (circular, 200x200px recomendado)
- **hero-bg.jpg** - Foto de fundo para o topo (1920x1080px recomendado)
- **loja.jpg** - Foto da loja ou produtos (1200x800px)
- Fotos dos produtos na pasta `images/produtos/`
- Fotos da galeria na pasta `images/galeria/`

### 3. Personalizar Informações

**No arquivo `index.html`, altere:**

- Linha do WhatsApp: substitua `5518996188331` pelo número real
- Links do Instagram
- Horário de funcionamento no footer
- Endereço no Google Maps (iframe)

### 4. Abrir o Site

Basta abrir o arquivo `index.html` no navegador!

### 5. Publicar Gratuitamente (GitHub Pages)

1. Crie um repositório público no GitHub (ex: `emporiomodelo`).
2. No PowerShell na pasta do projeto:
    ```powershell
    git init
    git add .
    git commit -m "Site Emporio Modelo"
    git branch -M main
    git remote add origin https://github.com/SEU_USUARIO/emporiomodelo.git
    git push -u origin main
    ```
3. No GitHub: Settings > Pages > Source: `Deploy from a branch` / Branch: `main` / Save.
4. A URL ficará: `https://SEU_USUARIO.github.io/emporiomodelo/`.
5. (Opcional) Ajuste a tag canonical no `index.html` depois da publicação.
6. Para página de erro já há `404.html` (GitHub Pages usa automaticamente).

### 6. Alternativas Sem GitHub

- Netlify (upload ou conectar repo) → URL: `*.netlify.app`
- Vercel (importar do GitHub) → URL: `*.vercel.app`
- Cloudflare Pages → URL: `*.pages.dev`

Todas gratuitas para uso estático.

## 📱 Customizações

### Cores
Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --cor-primaria: #D4AF37;  /* Dourado */
    --cor-secundaria: #000000; /* Preto */
    --cor-fundo: #FFFFFF;      /* Branco */
}
```

### Adicionar Mais Produtos

No `index.html`, copie um bloco `.produto-card` e edite:

```html
<div class="produto-card" data-category="categoria">
    <div class="produto-image">
        <img src="images/produtos/nome.jpg" alt="Nome do Produto">
        <span class="produto-badge">Premium</span>
    </div>
    <div class="produto-info">
        <h3>Nome do Produto</h3>
        <p>Descrição do produto</p>
        <a href="https://wa.me/5518..." class="btn-contato">Consultar</a>
    </div>
</div>
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox e Grid)
- JavaScript (Vanilla)
- Font Awesome (ícones)
- Google Fonts (Playfair Display, Montserrat)
- Google Maps (integração)

## 📊 SEO

O site já está otimizado para SEO com:
- Meta tags descritivas + Open Graph + Twitter Card
- Títulos hierárquicos (H1, H2, H3)
- Alt text em imagens
- URLs semânticas
- Schema markup ready

## 📞 Suporte

Para dúvidas ou customizações:
- WhatsApp: (18) 3223-3916
- Instagram: @emporio.modelo

---

**Desenvolvido com ❤️ para o Empório Modelo**

🧀 Queijos | 🍷 Vinhos | 🌾 Grãos | 🌍 Produtos Importados

// ========================================
// SISTEMA DE CARRINHO / LISTA DE PRODUTOS
// ========================================

let carrinho = [];

// Elementos do carrinho
const carrinhoFloat = document.getElementById('carrinhoFloat');
const carrinhoToggle = document.getElementById('carrinhoToggle');
const carrinhoContent = document.getElementById('carrinhoContent');
const carrinhoItems = document.getElementById('carrinhoItems');
const carrinhoBadge = document.getElementById('carrinhoBadge');
const btnLimpar = document.getElementById('btnLimpar');
const btnEnviarWhats = document.getElementById('btnEnviarWhats');

// Carregar carrinho do localStorage
function carregarCarrinho() {
    const saved = localStorage.getItem('emporio_carrinho');
    if (saved) {
        carrinho = JSON.parse(saved);
        atualizarCarrinho();
    }
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('emporio_carrinho', JSON.stringify(carrinho));
}

// Adicionar produto ao carrinho
function adicionarProduto(nomeProduto) {
    const existe = carrinho.find(item => item.nome === nomeProduto);
    
    if (existe) {
        existe.quantidade++;
        mostrarNotificacao(`${nomeProduto} atualizado na lista`);
    } else {
        carrinho.push({
            nome: nomeProduto,
            quantidade: 1
        });
        mostrarNotificacao(`${nomeProduto} adicionado à lista`);
    }
    
    salvarCarrinho();
    atualizarCarrinho();
}

// Remover produto do carrinho
function removerProduto(nomeProduto) {
    carrinho = carrinho.filter(item => item.nome !== nomeProduto);
    salvarCarrinho();
    atualizarCarrinho();
}

// Aumentar quantidade
function aumentarQuantidade(nomeProduto) {
    const item = carrinho.find(p => p.nome === nomeProduto);
    if (item) {
        item.quantidade++;
        salvarCarrinho();
        atualizarCarrinho();
    }
}

// Diminuir quantidade
function diminuirQuantidade(nomeProduto) {
    const item = carrinho.find(p => p.nome === nomeProduto);
    if (item) {
        if (item.quantidade > 1) {
            item.quantidade--;
        } else {
            removerProduto(nomeProduto);
            return;
        }
        salvarCarrinho();
        atualizarCarrinho();
    }
}

// Atualizar interface do carrinho
function atualizarCarrinho() {
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    carrinhoBadge.textContent = totalItens;
    
    if (totalItens > 0) {
        carrinhoBadge.style.display = 'flex';
    } else {
        carrinhoBadge.style.display = 'none';
    }
    
    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = '<p class="carrinho-vazio">Nenhum produto adicionado</p>';
        return;
    }
    
    carrinhoItems.innerHTML = carrinho.map(item => `
        <div class="carrinho-item">
            <div class="item-info">
                <span class="item-nome">${item.nome}</span>
                <div class="item-quantidade">
                    <button class="btn-qtd" onclick="diminuirQuantidade('${item.nome}')">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="qtd-numero">${item.quantidade}</span>
                    <button class="btn-qtd" onclick="aumentarQuantidade('${item.nome}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="btn-remover" onclick="removerProduto('${item.nome}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// Limpar carrinho
function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
    mostrarNotificacao('Lista limpa com sucesso!');
    
    // Fechar carrinho automaticamente
    setTimeout(() => {
        carrinhoContent.classList.remove('show');
        const icon = carrinhoToggle.querySelector('i');
        icon.className = 'fas fa-chevron-down';
    }, 800);
}

// Enviar para WhatsApp
function enviarParaWhatsApp() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Adicione produtos à lista primeiro');
        return;
    }
    
    let mensagem = '*Olá, Empório Modelo!*%0A%0A';
    mensagem += 'Gostaria de fazer um orçamento dos seguintes produtos:%0A%0A';
    
    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. *${item.nome}*%0A`;
        mensagem += `Quantidade: ${item.quantidade}%0A%0A`;
    });
    
    mensagem += 'Aguardo retorno!%0A%0A';
    mensagem += '_Enviado através do site_';
    
    const whatsappUrl = `https://wa.me/5518996188331?text=${mensagem}`;
    
    // Feedback visual
    mostrarNotificacao('Abrindo WhatsApp...');
    
    // Fechar carrinho após 1 segundo
    setTimeout(() => {
        carrinhoContent.classList.remove('show');
        const icon = carrinhoToggle.querySelector('i');
        icon.className = 'fas fa-chevron-down';
    }, 1000);
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
}

// Mostrar notificação
function mostrarNotificacao(texto) {
    const notif = document.createElement('div');
    notif.className = 'notificacao';
    notif.innerHTML = texto;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// Toggle carrinho
carrinhoToggle.addEventListener('click', () => {
    carrinhoContent.classList.toggle('show');
    const icon = carrinhoToggle.querySelector('i');
    if (carrinhoContent.classList.contains('show')) {
        icon.className = 'fas fa-chevron-up';
    } else {
        icon.className = 'fas fa-chevron-down';
    }
});

// Event listeners
btnLimpar.addEventListener('click', limparCarrinho);
btnEnviarWhats.addEventListener('click', enviarParaWhatsApp);

// Adicionar event listeners aos botões de produtos
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
    
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
    botoesAdicionar.forEach(btn => {
        btn.addEventListener('click', function() {
            const nomeProduto = this.getAttribute('data-produto');
            adicionarProduto(nomeProduto);
        });
    });
});

// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animar ícone do menu
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================================
// SCROLL SUAVE E HEADER FIXO
// ========================================

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ========================================
// FILTRO DE PRODUTOS
// ========================================

const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.produto-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover classe active de todos os botões
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adicionar classe active ao botão clicado
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        // Filtrar produtos
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'todos' || cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========================================
// ANIMAÇÃO AO SCROLL (FADE IN)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos para animar
const animateElements = document.querySelectorAll('.produto-card, .highlight-item, .galeria-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// LIGHTBOX DA GALERIA
// ========================================

const galeriaItems = document.querySelectorAll('.galeria-item');
let lightboxOpen = false;

galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        openLightbox(img.src, img.alt);
    });
});

function openLightbox(src, alt) {
    if (lightboxOpen) return;
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    lightboxOpen = true;
    
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // Fechar ao clicar no X ou fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.className === 'lightbox-close') {
            closeLightbox(lightbox);
        }
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOpen) {
            closeLightbox(lightbox);
        }
    });
}

function closeLightbox(lightbox) {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.remove();
        document.body.style.overflow = 'auto';
        lightboxOpen = false;
    }, 300);
}

// Adicionar estilos do lightbox dinamicamente
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 8px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        font-size: 40px;
        color: #D4AF37;
        cursor: pointer;
        transition: color 0.3s ease;
    }
    
    .lightbox-close:hover {
        color: #FFFFFF;
    }
`;
document.head.appendChild(lightboxStyles);

// ========================================
// CONTADOR DE ROLAGEM PARA NÚMEROS
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// MENSAGEM DE BOAS-VINDAS (OPCIONAL)
// ========================================

window.addEventListener('load', () => {
    console.log('%c🧀 Bem-vindo ao Empório Modelo! 🍷', 'font-size: 20px; color: #D4AF37; font-weight: bold;');
    console.log('%cSite desenvolvido com ❤️', 'font-size: 14px; color: #666;');
});

// ========================================
// BOTÃO DE VOLTAR AO TOPO
// ========================================

const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
        setTimeout(() => {
            backToTop.style.opacity = '1';
        }, 10);
    } else {
        backToTop.style.opacity = '0';
        setTimeout(() => {
            backToTop.style.display = 'none';
        }, 300);
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Estilos do botão back to top
const backToTopStyles = document.createElement('style');
backToTopStyles.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #D4AF37;
        color: #000000;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    
    .back-to-top:hover {
        background-color: #B8941F;
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
`;
document.head.appendChild(backToTopStyles);

// ========================================
// WHATSAPP FLUTUANTE
// ========================================

const whatsappFloat = document.createElement('a');
whatsappFloat.href = 'https://wa.me/5518996188331';
whatsappFloat.target = '_blank';
whatsappFloat.className = 'whatsapp-float';
whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
document.body.appendChild(whatsappFloat);

const whatsappStyles = document.createElement('style');
whatsappStyles.textContent = `
    .whatsapp-float {
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 60px;
        height: 60px;
        background-color: #25D366;
        color: #FFFFFF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        z-index: 999;
        transition: all 0.3s ease;
        animation: pulse 2s infinite;
    }
    
    .whatsapp-float:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
    }
    
    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }
        50% {
            box-shadow: 0 4px 25px rgba(37, 211, 102, 0.8);
        }
    }
`;
document.head.appendChild(whatsappStyles);

// ========================================
// PRELOADER (OPCIONAL)
// ========================================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

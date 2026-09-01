// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {

    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('opacity-0');
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 1000);
    });

    // Alternador de Menu Mobile
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('.nav');

    navToggler.addEventListener('click', function() {
        asideSectionToggler();
    });

    function asideSectionToggler() {
        aside.classList.toggle('open');
        navToggler.classList.toggle('open');
        document.querySelector('.main-content').classList.toggle('open');
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.toggle('open');
        }
    }

    // Navegação
    nav.addEventListener('click', function(e) {
        if (e.target.hasAttribute('href')) {
            e.preventDefault();
            const targetSection = document.querySelector(e.target.hash);
            
            // Remove classe active de todos os links
            const navLinks = document.querySelectorAll('.nav a');
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Adiciona classe active ao link clicado
            e.target.classList.add('active');
            
            // Oculta todas as seções
            sections.forEach(section => {
                section.classList.remove('active', 'back-section');
            });
            
            // Mostra a seção alvo
            targetSection.classList.add('active');
            
            // Animação de transição
            setTimeout(function() {
                targetSection.classList.remove('back-section');
            }, 800);
            
            // Fecha menu mobile se estiver aberto
            if (window.innerWidth < 1200) {
                asideSectionToggler();
            }
        }
    });

    // Typed Text
    if (document.querySelector('.iTyped')) {
        const strings = ['Desenvolvedor de Software 👨‍💻', 'Pós-graduando em Java 👨‍🎓', 'Apaixonado por Tecnologia ❤️'];
        ityped.init('.iTyped', {
            strings: strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            startDelay: 1000,
            backDelay: 1500
        });
    }

    // Filtro do Portfolio
    const filterButtons = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });

    // Lightbox
    const portfolioItemsInner = document.querySelectorAll('.portfolio-item-inner');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxCaption = lightbox.querySelector('.caption-text');
    const lightboxCounter = lightbox.querySelector('.caption-counter');
    
    let imgIndex = 0;

    portfolioItemsInner.forEach((item, index) => {
        item.addEventListener('click', function() {
            imgIndex = index;
            changeImage();
            toggleLightbox();
        });
    });

    function toggleLightbox() {
        lightbox.classList.toggle('open');
    }

    function changeImage() {
        const imgSrc = portfolioItemsInner[imgIndex].querySelector('img').getAttribute('src');
        const category = portfolioItemsInner[imgIndex].parentElement.getAttribute('data-category');
        
        lightboxImg.src = imgSrc;
        lightboxCaption.innerHTML = category;
        lightboxCounter.innerHTML = (imgIndex + 1) + ' de ' + portfolioItemsInner.length;
    }

    function prevItem() {
        if (imgIndex === 0) {
            imgIndex = portfolioItemsInner.length - 1;
        } else {
            imgIndex--;
        }
        changeImage();
    }

    function nextItem() {
        if (imgIndex === portfolioItemsInner.length - 1) {
            imgIndex = 0;
        } else {
            imgIndex++;
        }
        changeImage();
    }

    // Fecha lightbox
    lightboxClose.addEventListener('click', toggleLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            toggleLightbox();
        }
    });

    // Adiciona as funções globalmente para os botões de navegação
    window.prevItem = prevItem;
    window.nextItem = nextItem;

    // ========================================
    // 📧 Envio de Formulário de Contato (Node)
    // ========================================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const form = e.target;
            const data = {
                nome: form.nome.value,
                email: form.email.value,
                assunto: form.assunto.value,
                mensagem: form.mensagem.value
            };

            try {
                const response = await fetch("http://localhost:3000/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    alert("✅ Mensagem enviada com sucesso!");
                    form.reset();
                } else {
                    alert("❌ Erro ao enviar mensagem. Tente novamente.");
                }
            } catch (error) {
                alert("⚠️ Erro de conexão com o servidor. Verifique se o Node está rodando.");
                console.error(error);
            }
        });
    }
});

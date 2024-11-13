// Pausar a animação ao passar o mouse sobre o carrossel
document.querySelector('.gallery-container').addEventListener('mouseover', () => {
    document.querySelector('.gallery').style.animationPlayState = 'paused';
});
  
// Continuar a animação ao sair com o mouse
document.querySelector('.gallery-container').addEventListener('mouseleave', () => {
    document.querySelector('.gallery').style.animationPlayState = 'running';
});

// Clonando os itens da galeria para criar o efeito de loop
document.addEventListener('DOMContentLoaded', function () {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Função de scroll para a seta esquerda
    function scrollEsquerda(button) {
        const fileira = button.closest('.carrossel-container').querySelector('.fileira');
        fileira.scrollBy({
            left: -1120,
            behavior: 'smooth'
        });
    }

    // Função de scroll para a seta direita
    function scrollDireita(button) {
        const fileira = button.closest('.carrossel-container').querySelector('.fileira');
        fileira.scrollBy({
            left: 1120,
            behavior: 'smooth'
        });
    }

    // Scroll ao arrastar (aplicando para todas as fileiras)
    document.querySelectorAll('.fileira').forEach((fileira) => {
        fileira.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - fileira.offsetLeft;
            scrollLeft = fileira.scrollLeft;
        });

        fileira.addEventListener('mouseleave', () => {
            isDown = false;
        });

        fileira.addEventListener('mouseup', () => {
            isDown = false;
        });

        fileira.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - fileira.offsetLeft;
            const walk = (x - startX) * 2; // Ajuste a velocidade conforme necessário
            fileira.scrollLeft = scrollLeft - walk;
        });
    });

    // Expondo as funções globalmente para os botões de seta
    window.scrollEsquerda = scrollEsquerda;
    window.scrollDireita = scrollDireita;

    // Clonando os itens da galeria
    const gallery = document.querySelector('.gallery');
    const items = gallery.querySelectorAll('.gallery-item');

    // Clonando todos os itens e adicionando ao final
    items.forEach(item => {
        const clone = item.cloneNode(true);
        gallery.appendChild(clone);
    });
});






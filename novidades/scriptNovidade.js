document.addEventListener('DOMContentLoaded', function () {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Função de scroll para a seta esquerda
    function scrollEsquerda(button) {
        const fileira = button.closest('.carrossel-container').querySelector('.fileira');
        fileira.scrollBy({
            left: -800,
            behavior: 'smooth'
        });
    }

    // Função de scroll para a seta direita
    function scrollDireita(button) {
        const fileira = button.closest('.carrossel-container').querySelector('.fileira');
        fileira.scrollBy({
            left: 800,
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
});




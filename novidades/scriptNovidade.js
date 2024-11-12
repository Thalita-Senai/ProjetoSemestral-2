document.addEventListener('DOMContentLoaded', function () {
    const fileira = document.querySelector('.fileira');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Funções de scroll para os botões de setas
    function scrollEsquerda() {
        fileira.scrollBy({
            left: -800,
            behavior: 'smooth'
        });
    }

    function scrollDireita() {
        fileira.scrollBy({
            left: 800,
            behavior: 'smooth'
        });
    }

    // Scroll ao arrastar
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

    // Expondo funções globalmente para os botões de seta
    window.scrollEsquerda = scrollEsquerda;
    window.scrollDireita = scrollDireita;
});


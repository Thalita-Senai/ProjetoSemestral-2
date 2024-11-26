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

    //codigo diferente
    let elemScroll = document.querySelector(".gallery-container");
let elemContainer = elemScroll.querySelector(".gallery");
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach((item) => {
  let elemDuplicado = item.cloneNode(true);
  elemDuplicado.setAttribute("aria-hidden", true);
  elemContainer.appendChild(elemDuplicado);
});

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


//rolando

function scrollToSteam() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("steam");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }

  function scrollToConsole() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("console");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }

  function scrollToEpic() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("epic");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }

  function scrollToPC() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("pc");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }

  function scrollToConsole() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("console");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }

  function scrollToMobile() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("mobile");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }

  function scrollToLancamento() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("lancamento");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }

  function scrollToIndie() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("indie");
    const posicao = elemento.offsetTop; // Posição do topo da seção

    // Rola para a posição, ajustando um pequeno deslocamento acima (ex: 50px)
    window.scrollTo({
      top: posicao - 110,  // Ajuste 50px acima
      behavior: "smooth"  // Animação suave
    });
  }





const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Função que será chamada quando o item for visível
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe de animação quando o item entra na tela
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar o item após a animação
        }
    });
}

// Criando o IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // A animação será ativada quando 50% do item estiver visível
});

// Selecionando todos os itens da grid
const items = document.querySelectorAll('.grid-item');
items.forEach(item => {
    observer.observe(item); // Inicia a observação para cada item
});

window.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, 300 * index); // Atraso para cada item da grade
    });
});

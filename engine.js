const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// efeito box imagem
window.addEventListener('load', () => {
    const imageBox = document.querySelector('.image-box');
    const titleBox = document.querySelector('.title-box');

    setTimeout(() => {
        imageBox.classList.add('active');
        titleBox.classList.add('active');
    }, 500);
});

// Efeito de transição para a title-box ao rolar a página
const titleBox = document.querySelector('.title-box');

window.addEventListener('scroll', () => {
    // Verifica se a title-box está na área visível da tela e se a classe 'visible' não foi adicionada ainda
    if (window.scrollY > titleBox.offsetTop - window.innerHeight) {
        titleBox.classList.add('visible');
    }
});

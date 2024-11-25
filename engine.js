const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// efeito box imagem
document.addEventListener('scroll', () => {
    const titleBox = document.getElementById('title-box');
    const titleBoxPosition = titleBox.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Quando a title-box estiver visível pela primeira vez na tela
    if (titleBoxPosition <= windowHeight) {
        titleBox.classList.add('active');
        // Remove o evento de rolagem após a primeira vez
        window.removeEventListener('scroll', arguments.callee);
    }
});

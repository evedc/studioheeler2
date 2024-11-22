const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// efeito box imagem //

window.addEventListener('load', () => {
    const imageBox = document.querySelector('.image-box');
    const titleBox = document.querySelector('.title-box h1');

    setTimeout(() => {
        imageBox.classList.add('active');
        titleBox.classList.add('active');
    }, 500);
});
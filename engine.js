const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.title-box', { duration: 2000, rotate: { x: 0, y: 80, z: 0 } });
ScrollReveal().reveal('.image-box', { duration: 2000 });
ScrollReveal().reveal('.grid-item', { duration: 2000 });
ScrollReveal().reveal('.title-container', { duration: 2000 });
ScrollReveal().reveal('.funcoes-container', { duration: 2000 });
ScrollReveal().reveal('.grid-item2', { duration: 2000 });
ScrollReveal().reveal('.vendas-container', { duration: 2000 });
ScrollReveal().reveal('.contato-container', { duration: 2000, rotate: { x: 0, y: 80, z: 0 } });
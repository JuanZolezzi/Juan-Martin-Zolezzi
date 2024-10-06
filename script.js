const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle ('active');
}

document.querySelector('.visit-btn').addEventListener('click', function() {
    window.open('https://github.com/JuanZolezzi?tab=repositories', '_blank');
});

document.querySelector('#linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/juan-martin-zolezzi-8b76961b5/', '_blank');
});

document.querySelector('#github').addEventListener('click', function() {
    window.open('https://github.com/JuanZolezzi?tab=repositories', '_blank');
});

document.querySelector('#whatsapp').addEventListener('click', function() {
    window.open('https://wa.me/1164484170', '_blank');
});
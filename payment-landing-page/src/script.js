const drawer = document.querySelector('#drawer');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    drawer.classList.remove('-translate-x-full');
    drawer.classList.add('translate-x-0');
});

closeBtn.addEventListener('click', () => {
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('-translate-x-full');
});
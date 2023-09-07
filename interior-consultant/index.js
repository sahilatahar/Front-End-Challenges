const closeBtn = document.querySelector('.close-icon');
const menuBtn = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav__list');

closeBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});
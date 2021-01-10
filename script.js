const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const navbar = document.querySelector('.navbar');

openBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});
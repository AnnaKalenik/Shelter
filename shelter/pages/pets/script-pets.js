const darkLayer = document.querySelector('.header__dark-layer');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.header__logo-wrapper');
const logoTitle = document.querySelector('.header__logo-title');
const logoSubtitle = document.querySelector('.header__logo-subtitle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav__link');

const changeBodyOverflow = () => {
    document.body.style.overflow === 'hidden' ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden';
}

const addClassOpen = () => {
    hamburger.classList.toggle('hamburger_open');
    nav.classList.toggle('nav_open');
    logo.classList.toggle('header__logo-wrapper_open');
    darkLayer.classList.toggle('header__dark-layer_open');
    logoTitle.classList.toggle('header__logo-title_open');
    logoSubtitle.classList.toggle('header__logo-subtitle_open');
    changeBodyOverflow();
}
hamburger.addEventListener('click', addClassOpen);
darkLayer.addEventListener('click', addClassOpen);

const removeClassOpen = (event) => {
    if (event.target.classList.contains('nav__link')) {
        hamburger.classList.remove('hamburger_open');
        nav.classList.remove('nav_open');
        logo.classList.remove('header__logo-wrapper_open');
        darkLayer.classList.remove('header__dark-layer_open');
        logoTitle.classList.remove('header__logo-title_open');
        logoSubtitle.classList.remove('header__logo-subtitle_open');
        changeBodyOverflow();
    }
}
navLinks.forEach(link => link.addEventListener('click', removeClassOpen));
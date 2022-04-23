export default function adaptiveBurger() {
    const darkLayer = document.querySelector('.header__dark-layer');
    const nav = document.querySelector('.nav');
    const logo = document.querySelector('.header__logo-wrapper');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav__link');

    const toogleClassOpen = () => {
        hamburger.classList.toggle('hamburger_open');
        nav.classList.toggle('nav_open');
        logo.classList.toggle('header__logo-wrapper_open');
        darkLayer.classList.toggle('header__dark-layer_open');
    }

    const changeBodyOverflow = () => {
        document.body.style.overflow === 'hidden' ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden';
    }

    const addClassOpen = () => {
        toogleClassOpen();
        changeBodyOverflow();
    }

    hamburger.addEventListener('click', addClassOpen);
    darkLayer.addEventListener('click', addClassOpen);

    const removeClassOpen = (event) => {
        if (event.target.classList.contains('nav__link')) {
            toogleClassOpen();
            changeBodyOverflow();
        }
    }

    navLinks.forEach(link => link.addEventListener('click', removeClassOpen));
}

adaptiveBurger();
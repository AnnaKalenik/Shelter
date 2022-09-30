import pets from '../../assets/js/pets.js';

export default function popup() {
    const POPUP = document.querySelector('#popup');
    const BTN_CLOSE = document.querySelector('#btn-close');
    const DARK_LAYER = document.querySelector('#dark-layer');
    const IMG_POPUP = document.querySelector('#img');
    const NAME_POPUP = document.querySelector('#name');
    const TYPE_POPUP = document.querySelector('#type');
    const BREED_POPUP = document.querySelector('#breed');
    const DESCRIPTION_POPUP = document.querySelector('#description');
    const AGE_POPUP = document.querySelector('#age');
    const INOCULATIONS_POPUP = document.querySelector('#inoculations');
    const DISEASES_POPUP = document.querySelector('#diseases');
    const PARASITES_POPUP = document.querySelector('#parasites');
    const CARD = document.querySelectorAll('.wrapper__item');

    const changeBodyOverflow = () => {
        document.body.style.overflow === 'hidden' ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden';
    }

    const addClassOpen = (event) => {
        POPUP.classList.add('popup_open');
        event.preventDefault();
        changeBodyOverflow();

        let pet;

        pets.forEach(item => {
            if (item.name === event.currentTarget.querySelector('.wrapper__subtitle').innerHTML) {
                pet = item;
            }
            return pet;
        })

        IMG_POPUP.src = pet.img;
        NAME_POPUP.innerHTML = pet.name;
        TYPE_POPUP.innerHTML = pet.type;
        BREED_POPUP.innerHTML = pet.breed;
        DESCRIPTION_POPUP.innerHTML = pet.description;
        AGE_POPUP.innerHTML = pet.age;
        INOCULATIONS_POPUP.innerHTML = pet.inoculations;
        DISEASES_POPUP.innerHTML = pet.diseases;
        PARASITES_POPUP.innerHTML = pet.parasites;
    }
    CARD.forEach(item => {item.addEventListener('click', addClassOpen)});

    const removeClassOpen = () => {
        POPUP.classList.remove('popup_open');
        changeBodyOverflow();
    }
    BTN_CLOSE.addEventListener('click', removeClassOpen);
    DARK_LAYER.addEventListener('click', removeClassOpen);
}
popup();
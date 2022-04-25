import pets from '../../assets/js/pets.js';

console.log(pets);

const randomNumber = () => {
    let min = 0;
    let max = 7;
    let rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}
randomNumber();

export default function carousel() {
    const BTN_LEFT = document.querySelector('#btn-left');
    const BTN_RIGHT = document.querySelector('#btn-right');
    const CAROUSEL = document.querySelector('#carousel');
    const SLIDE_LEFT = document.querySelector('#slide-left');
    const SLIDE_ACTIVE = document.querySelector('#slide-active');
    const SLIDE_RIGHT = document.querySelector('#slide-right');

    let arrCardsActive = [];
    let arrCardsNew = [];
    let arrFilter = [];

    const removeEventsClickButtons = () => {
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);
    }

    const addEventEventsClickButtons = () => {
        BTN_LEFT.addEventListener('click', moveLeft);
        BTN_RIGHT.addEventListener('click', moveRight);
    }

    const moveLeft = () => {
        CAROUSEL.classList.add('wrapper_transition-left');
        removeEventsClickButtons();
    }

    const moveRight = () => {
        CAROUSEL.classList.add('wrapper_transition-right');
        removeEventsClickButtons();
    }

    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);

    const getCardsActive = () => {
        const subtitles = SLIDE_ACTIVE.querySelectorAll('.wrapper__subtitle');

        arrCardsActive = [];

        subtitles.forEach(title => {
            pets.forEach( (pet, index) => {
                if (pet.name === title.innerHTML) {
                    arrCardsActive.push(index);
                }
            });
        });
        console.log('Active:', arrCardsActive);
    }
    // getCardsActive();
        
    const getSortArr = () => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7];
        arrFilter = [];

       
        arr.forEach(item => {
            if (item !== arrCardsActive[0] && item !== arrCardsActive[1] && item !== arrCardsActive[2]) {
                arrFilter.push(item);
            }
        })
        
        console.log('Sort:', arrFilter);
        return arrFilter;
    }

    // const randomArr = (randomNum) => {
    //     getNewCards();
    //     const arrDubl = [];

    //     if (arrCardsNew.length === 3) {
    //         arrDubl = [];
    //         console.log(arrCardsNew);
    //         return arrCardsNew;
    //     } else {
    //         arrFilter.forEach()
    //     }
 
    // }
    // randomArr(randomNumber());

    CAROUSEL.addEventListener('animationend', (event) => {
        let changeItem;
        getCardsActive();
        getSortArr();
        
        if (event.animationName === 'move-left') {
            CAROUSEL.classList.remove('wrapper_transition-left');
            changeItem = SLIDE_LEFT;
            SLIDE_ACTIVE.innerHTML = SLIDE_LEFT.innerHTML;
            getCardsActive();
        } else {
            CAROUSEL.classList.remove('wrapper_transition-right');
            changeItem = SLIDE_RIGHT;
            SLIDE_ACTIVE.innerHTML = SLIDE_RIGHT.innerHTML;
            getCardsActive();
        }

        getSortArr();

        if (event.animationName === 'move-left') {
            arrCardsNew = [arrFilter[3], arrFilter[1], arrFilter[4]];
            console.log('New:', arrCardsNew);
        } else {
            arrCardsNew = [arrFilter[2], arrFilter[0], arrFilter[3]];
            console.log('New:', arrCardsNew);
        }

        changeItem.innerHTML = '';

        for (let i = 0; i < 3; i++) {
            let item = document.createElement('div');
            item.className = `wrapper__item wrapper__item_item${i+1}`;

            item.innerHTML = `
                <img src="${pets[arrCardsNew[i]].img}" alt="${pets[arrCardsNew[i]].name}" class="wrapper__img">
                <div class="wrapper__subtitle title">${pets[arrCardsNew[i]].name}</div>
                <button class="wrapper__btn btn">Learn more</button>`;

            changeItem.append(item);
        }
        console.log('-------------------------------------');
    
        addEventEventsClickButtons();
    })
}
carousel();


// [3, 1, 6]
// [4, 0, 2]
// [6, 7, 5]
import pets from '../../assets/js/pets.js';

export default function pagination() {
    const WRAPPER_PAGINATION = document.querySelector('.pets__wrapper');
    const PAGINATION = document.querySelector('.wrapper__pagination');
    const LAST_LEFT_BTN = document.querySelector('.pets__btn-dir_left-steps');
    const LEFT_BTN = document.querySelector('.pets__btn-dir_left');
    const CURRENT_PAGE = document.querySelector('.pets__btn-dir_current');
    const RIGHT_BTN = document.querySelector('.pets__btn-dir_right');
    const RIGHT_LEFT_BTN = document.querySelector('.pets__btn-dir_right-steps');

    const getRandomPets_48 = () => {
        let arr_48 = [];
        let clonePets = pets;

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < clonePets.length; j++) {
                let randomIndex = Math.floor(Math.random() * j);
                const randomItem = clonePets.splice(randomIndex, 1)[0];

                clonePets.push(randomItem);
            }
            arr_48 = [...arr_48, ...clonePets]
        }
        return arr_48;
    }
    getRandomPets_48();
    let pets_48 = getRandomPets_48();

    const generationCardPets = (pets_48) => {
        console.log(pets_48);
        let str = '';
        for (let i = 0; i < pets_48.length; i++) {
            str += `<div class="wrapper__item wrapper__item_item8">
            <img src="${pets_48[i].img}" alt="${pets_48[i].name}" class="wrapper__img">
            <div class="wrapper__subtitle title">${pets_48[i].name}</div>
            <button class="wrapper__btn btn">Learn more</button>
        </div>`;
        }
        return str;
    }
    generationCardPets(pets_48);
    let strPets = generationCardPets(pets_48);

    const createCardPets = (strPets) => {
        PAGINATION.innerHTML = strPets;
    }

    createCardPets(strPets);

    // const sortFunc = (list) => {
    //     let list_8 = [];

    //     for (let j = 0; j < (list.lengh / 8); j++) {
    //         const stepList_8 = [];
    //         for (let j = 0; j < list.lengh; j++) {
    //             if (stepList_8.lengh >=8) {
    //                 break;
    //             }
    //             const isSingle = !stepList_8.some((item) => {
    //                 return item.id === list[j].id;
    //             });

    //             if (isSingle) {
    //                 stepList_8.push(list[j]);
    //                 list.splice(j, 1);
    //                 j--;
    //             }
    //         }
    //         stepList_8 = [...list_8, stepList_8];
    //     }

    //     console.log(stepList_8);

        // list = stepList_8;
        // sortFunc6(list);
        // return list;
    // }

   
    // pets_48 = sortFunc(pets_48);
    // sortFunc(pets_48);


    // const sortFunc6 = (list) => {
    //     for (let i = 0; i < stepList_8.length; i++) {
    //         const list6 = list.slice(i * 6, (i * 6) + 6);

    //         for (let j = 0; j < 6; j++) {
    //             const duplicateItem = list6.find((item, index) => {
    //                 return item.id === list6[j].id && (index !== j);
    //             })

    //             if (duplicateItem !== undefined) {
    //                 const index = (i + 6) + j;
    //                 const chose8Item = Math.trunc(index / 8);

    //                 stepList_8.splice(chose8Item * 8, 0, list.splice(index, 1)[0]);

    //                 sortFunc6(list);
    //             }
    //         }
    //     }
    //     return list;
    // }
}
pagination();
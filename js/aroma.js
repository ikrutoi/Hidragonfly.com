import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";
// import { addButtonAroma } from "./aroma-create-button-aroma.js";

export function createAroma() {
    const aromaBlock = document.querySelector('.aroma-block');   
    
    // newElemHTML(
    //     blockAroma, 
    //     'beforeend', 
    //     '<ul class="aroma-block-list"></ul>'); 

    // const aromaBlockList = document.querySelector('.aroma-block-list');

    const nameAroma = [
        {make: '', name: ''},
        {make: 'Yves Saint Laurent', name: 'Opium'}, 
        {make: 'Serge Lutens', name: 'Un Bois Vanille'},
        {make: 'Montale', name: 'Rose Elixir'},
        {make: 'Chanel', name: 'Coco Mademoiselle'},
        {make: 'Bvlgari', name: 'Jasmin Noir'},
        {make: 'Giorgio Armani', name: 'Si Eau de Parfum Intense'},
        {make: 'Elizabeth Arden', name: '5th Avenue'},
        {make: 'Christian Dior', name: 'Poison'},
        {make: 'Carolina Herrera', name: '212'}
    ];
    const key = 'name';
    const sortNameAroma = nameAroma.sort((nameAroma1, nameAroma2) => nameAroma1[key] > nameAroma2[key] ? 1 : -1);

    // console.log('sortName: ', sortNameAroma);
    
    let numberRow = 0;

    aromaBlock.classList.add('active');
    
    for (let i = 0; i < sortNameAroma.length; i++) {
        function addElementAroma(aromaRow) {

            // if (i == 0) {
            //     newElemHTML(
            //         aromaRow, 
            //         'beforeend', 
            //         `<div class="aroma-element"><span class="aroma-name">None</span></div>`
            //     ); 
            // } else {  
            //     newElemHTML(
            //         aromaRow, 
            //         'beforeend', 
            //         `<div class="aroma-element" data-number-aroma="${i}"><p class="aroma-name">${sortNameAroma[i].name}</p><p class="aroma-make">${sortNameAroma[i].make}<p></div>`
            //     );
            // }
            if (i == 0) {
                newElemHTML(
                    aromaRow, 
                    'beforeend', 
                    `<li class="aroma-button aroma-button-${i}"><span class="aroma-name">None</span></li>`
                ); 
            } else {  
                newElemHTML(
                    aromaRow, 
                    'beforeend', 
                    `<li class="aroma-button aroma-button-${i}" data-number-aroma="${i}">
                    <span class="aroma-logo aroma-logo-${i}"></span>
                    <span class="aroma-text aroma-name">${sortNameAroma[i].name}</span>
                    <span class="aroma-text aroma-make">${sortNameAroma[i].make}<span>
                    </li>`
                );
            }
        }

        if (!(i % 2)) {
            numberRow = ++numberRow;

            newElem(aromaBlock, 'ul', ['aroma-block-row', `aroma-row-${numberRow}`]);  

            const aromaRow = document.querySelector(`.aroma-row-${numberRow}`);

            addElementAroma(aromaRow);

        } else {
            const aromaRow = document.querySelector(`.aroma-row-${numberRow}`);
            addElementAroma(aromaRow);
        }
    }

    const elemNameAroma = document.querySelectorAll('.aroma-button');

    function changeAroma() {
        elemNameAroma.forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        const mainNavMenuAroma = document.querySelector('.main-nav-menu--aroma');
        mainNavMenuAroma.classList.add('active');
        mainNavMenuAroma.classList.add('selected');

        const mainNavButtonAromaText = document.querySelector('.main-nav--button-text');
        mainNavButtonAromaText.textContent = `${sortNameAroma[this.dataset.numberAroma].name}. ${sortNameAroma[this.dataset.numberAroma].make}`
        // console.log('**--*-*', this);
    }

    elemNameAroma.forEach(el => {
        el.addEventListener('pointerdown', changeAroma);
    });
}


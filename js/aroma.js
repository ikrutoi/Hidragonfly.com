import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";
import { addButtonAroma } from "./aroma-create-button-aroma.js";

export function createAroma() {
    const blockAroma = document.querySelector('.aroma-block');    
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
    
    let numberRow = 0;

    blockAroma.classList.add('active');
    
    for (let i = 0; i < sortNameAroma.length; i++) {
        
        function addElementAroma(aromaRow) {
            if (i == 0) {
                newElemHTML(
                    aromaRow, 
                    'beforeend', 
                    `<div class="aroma-element"><p class="aroma-name">None</p></div>`
                ); 
            } else {  
                newElemHTML(
                    aromaRow, 
                    'beforeend', 
                    `<div class="aroma-element"><p class="aroma-name">${sortNameAroma[i].name}</p><p class="aroma-make">${sortNameAroma[i].make}<p></div>`
                );
            }
        }

        if (!(i % 2)) {
            numberRow = ++numberRow;

            newElem(blockAroma, 'div', ['aroma-block-row', `aroma-row-${numberRow}`]);         
            
            const aromaRow = document.querySelector(`.aroma-row-${numberRow}`);

            addElementAroma(aromaRow);
        } else {
            const aromaRow = document.querySelector(`.aroma-row-${numberRow}`);

            addElementAroma(aromaRow);
        }
    }
 
    const elemNameAroma = document.querySelectorAll('.aroma-element');
    
    elemNameAroma.forEach(el => {
        function startCreateButtonAroma() {
            const memoryAroma = [`${el.innerText.split('\n\n')[0]}`, `${el.innerText.split('\n\n')[1]}`];

            addButtonAroma(memoryAroma);
        }

        el.addEventListener('pointerdown', startCreateButtonAroma);
        el.addEventListener('pointerdown', () => startPressActivation(el));
    });
}


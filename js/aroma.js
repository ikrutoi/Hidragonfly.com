import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";

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
                    `<div class="aroma-element"><p class="name-aroma">None</p></div>`
                ); 
            } else {  
                newElemHTML(
                    aromaRow, 
                    'beforeend', 
                    `<div class="aroma-element"><p class="aroma-name">${sortNameAroma[i].name}</p><p class="aroma-make">${sortNameAroma[i].make}</p></div>`
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

    let memoryAroma;
    const elemButtonAroma = document.querySelector('.button-aroma');
    
    if (elemButtonAroma.classList.contains('allowed')) {
        addButtonAroma(memoryAroma);
    }
    
    const elemNameAroma = document.querySelectorAll('.aroma-element');
    
    elemNameAroma.forEach(el => {
        const elemNavAdditionalAroma = document.querySelector('.nav-additional-aroma');
        
        function addButtonAroma(memoryAroma) {
            if (elemNavAdditionalAroma.classList.contains('active')) {
                const aromaName = document.querySelector('.additional-aroma-name');
                const aromaMake = document.querySelector('.additional-aroma-make');
                
                aromaName.textContent = el.innerText.split('\n\n')[0];
                aromaMake.textContent = el.innerText.split('\n\n')[1];
            } else {   
                elemNavAdditionalAroma.classList.add('active');
                elemButtonAroma.classList.add('allowed');
                
                newElem(elemNavAdditionalAroma, 'div', ['nav-additional-aroma-multi']);
                const elemNavAdditionalAromaMulti = document.querySelector('.nav-additional-aroma-multi');
                
                if (!memoryAroma) {
                    newElemHTML(
                        elemNavAdditionalAromaMulti, 
                        'beforeend', 
                        `<p class="additional-aroma-name"><span>${el.innerText.split('\n\n')[0]}</span></p>
                        <p class="additional-aroma-make"><span>${el.innerText.split('\n\n')[1]}</span></p>`
                    );
                } else {
                    newElemHTML(
                        elemNavAdditionalAromaMulti, 
                        'beforeend', 
                        `<p class="additional-aroma-name"><span>${memoryAroma[0]}</span></p>
                        <p class="additional-aroma-make"><span>${memoryAroma[1]}</span></p>`
                    ); 
                }
            }

            memoryAroma = [`${el.innerText.split('\n\n')[0]}`, `${el.innerText.split('\n\n')[1]}`];
        }

        function addClassActive() {
            el.classList.add('active')
        }

        function delClassActive() {
            el.classList.remove('active')
        }

        el.addEventListener('pointerdown', () => addButtonAroma(memoryAroma));
        el.addEventListener('pointerdown', addClassActive);
        el.addEventListener('pointerup', delClassActive);
    });
}

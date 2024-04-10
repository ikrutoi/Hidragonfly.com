import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";

export function createAroma() {
    const blockAroma = document.querySelector('.aroma-block');
    const nameAroma = [
        'Aurum / Ajmal', 
        'Un Bois Vanille / Serge Lutens',
        'Rose Elixir / Montale',
        'Coco Mademoiselle / Chanel',
        'Jasmin Noir / Bvlgari',
        'Si Eau de Parfum Intense / Giorgio Armani',
        '5th Avenue / Elizabeth Arden'
    ];

    for (let i = 0; i <= nameAroma.length; i++) { 

            newElem(blockAroma, 'div', ['aroma-block-row']);         
            const aromaBlockRow = document.querySelector('.aroma-block-row');
            
            newElemHTML(aromaBlockRow, 'beforeend', `<div class="aroma-element"><p>${nameAroma[i]}</p></div>`);
    }    
}

const even = n => !(n % 2);

console.info(even(5));
console.info(even(4));
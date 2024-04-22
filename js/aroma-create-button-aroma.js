import { newElemHTML } from "./new-element.js";

const elemNavAdditionalButtonAroma = document.querySelector('.nav-additional-button-aroma');

export function addButtonAroma(memoryAroma) {
    const elemNavAdditionalAroma = document.querySelector('.nav-additional-aroma');
    elemNavAdditionalAroma.classList.add('active');
    
    const aromaName = document.querySelector('.additional-aroma-name');
    const aromaMake = document.querySelector('.additional-aroma-make');

    if (aromaName) {
        aromaName.remove();
        if (aromaMake) {
            aromaMake.remove();
        }
    }
    
    if (memoryAroma[1] == 'undefined' || memoryAroma[1] == null) {
        newElemHTML(
            elemNavAdditionalButtonAroma, 
            'beforeend', 
            `<p class="additional-aroma-name"><nobr>${memoryAroma[0]}</nobr></p>`
        )
    } else {
        newElemHTML(
            elemNavAdditionalButtonAroma, 
            'beforeend', 
            `<p class="additional-aroma-name"><nobr>${memoryAroma[0]}</nobr><span>.&nbsp</span></p>
            <p class="additional-aroma-make"><nobr>${memoryAroma[1]}</nobr></p>`
        );
    }

    sessionStorage.setItem('aroma--name', `${memoryAroma[0]}`);
    sessionStorage.setItem('aroma--make', `${memoryAroma[1]}`);

    if (sessionStorage.getItem('aroma--name')) {
        const elemButtonAroma = document.querySelector('.button-aroma');
        elemButtonAroma.classList.add('value-in-memory');
    }
}
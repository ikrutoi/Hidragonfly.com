import { newElemHTML } from "./new-element.js";

const elemNavAdditionalButtonAroma = document.querySelector('.nav-additional-button-aroma');

export function addButtonAroma(memoryAroma) {
        const aromaName = document.querySelector('.additional-aroma-name');
        const aromaMake = document.querySelector('.additional-aroma-make');

        if (aromaName) {
            aromaName.remove();
            if (aromaMake) {
                aromaMake.remove();
            }
        }
        
        if (memoryAroma[1]) {
            newElemHTML(
                elemNavAdditionalButtonAroma, 
                'beforeend', 
                `<p class="additional-aroma-name"><nobr>${memoryAroma[0]}</nobr><span>.&nbsp</span></p>
                <p class="additional-aroma-make"><nobr>${memoryAroma[1]}</nobr></p>`
            );
        } else {
            newElemHTML(
                elemNavAdditionalButtonAroma, 
                'beforeend', 
                `<p class="additional-aroma-name"><nobr>${memoryAroma[0]}</nobr></p>`
            )
        }

        localStorage.setItem('aroma--name', `${memoryAroma[0]}`);
        localStorage.setItem('aroma--make', `${memoryAroma[1]}`);
}
import { newElem } from "./new-element.js";

export function formationLetterArea() {
    function takeSize() {
        const areaText = document.querySelector('.card-letter-area');
        const areaTextHeight = areaText.getBoundingClientRect().height;
        const startRows = 17;
        let areaRowsHeight = areaTextHeight / startRows + 2; 

        function creationAreaTextRows(startRows) {
            for (let i = 0; i < startRows - 2; i++) {
                newElem(areaText, 'div', [], `border: solid 1px green; height: ${areaRowsHeight}px;`);
            }
        }
        
        setTimeout(creationAreaTextRows(startRows), 10000);
    }

    setTimeout(takeSize, 400);
}
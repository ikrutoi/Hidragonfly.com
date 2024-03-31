import { newElem } from "./new-element.js";

export function formationLetterArea() {
    function takeSize() {
        const areaText = document.querySelector('.card-letter-area');
        const areaTextHeight = areaText.getBoundingClientRect().height;
        const areaTextWidth = areaText.getBoundingClientRect().width;
        areaText.style.maxWidth = areaTextWidth + 'px'; 
        areaText.style.maxHeight = areaTextHeight + 'px'; 
        const startRows = 15;
        let areaRowsHeight = (areaTextHeight - startRows * 2) / startRows; 

        function creationAreaTextRows(startRows) {
            for (let i = 0; i < startRows; i++) {
                newElem(areaText, 'div', [], `height: ${areaRowsHeight}px;`);
            }
        }
        
        creationAreaTextRows(startRows);
    }

    setTimeout(takeSize, 400);
}
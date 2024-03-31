import { newElem } from "./new-element.js";

export function formationLetterArea() {
    function takeSize() {
        const areaText = document.querySelector('.card-letter-area');
        const areaTextHeight = areaText.getBoundingClientRect().height;
        const startRows = 17;
        let areaRowsHeight = (areaTextHeight - startRows * 2) / startRows; 

        function creationAreaTextRows(startRows) {
            for (let i = 0; i < startRows; i++) {
                newElem(
                    areaText, 
                    'div', 
                    [], 
                    `border-bottom: dotted 2px rgba(0, 0, 0, 0.1); height: ${areaRowsHeight}px;`
                );
            }
        }
        
        creationAreaTextRows(startRows);
    }

    setTimeout(takeSize, 400);
}
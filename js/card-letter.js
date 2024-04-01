import { newElem } from "./new-element.js";

export function formationLetterArea() {
    
    function takeSize(startRows) {
        console.log('+-+-+-+-+-', startRows);
        const areaText = document.querySelector('.card-letter-area');
        const areaTextHeight = areaText.getBoundingClientRect().height;
        const areaTextWidth = areaText.getBoundingClientRect().width;
        areaText.style.maxWidth = areaTextWidth + 'px'; 
        areaText.style.maxHeight = areaTextHeight + 'px'; 
        let areaRowsHeight = (areaTextHeight - startRows * 2) / startRows; 
        console.log(areaRowsHeight);
        
        function creationAreaTextRows(startRows) {
            for (let i = 0; i < startRows; i++) {
                newElem(areaText, 'div', ['cardtext-size-row'], `height: ${areaRowsHeight}px;`);
            }
        }
        
        creationAreaTextRows(startRows);
    }
    
    let startRows = 15;
    const buttonSizeMinus = document.querySelector('.nav-addit-size-minus');       
    const buttonSizePlus = document.querySelector('.nav-addit-size-plus');  
    
    function startSize() {
        takeSize(startRows);
    }

    function removeRows() {
        const areaTextRows = document.querySelectorAll('.cardtext-size-row');

        areaTextRows.forEach((el) => {
            el.remove();
        })
    }
    
    function minusSize() {
        startRows = startRows + 1;
        
        if(startRows <= 20) {
            removeRows();
            takeSize(startRows);
        }
    }
    
    function plusSize() {
        startRows = startRows - 1;
        
        if(startRows >= 5) {
            removeRows();
            takeSize(startRows);
        }
    }
    
    setTimeout(startSize, 400);
    
    buttonSizeMinus.addEventListener('pointerdown', minusSize);
    buttonSizePlus.addEventListener('pointerdown', plusSize);
}
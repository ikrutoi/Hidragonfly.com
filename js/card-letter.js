import { newElem } from "./new-element.js";

export function formationLetterArea() {
    
    function takeSize(startRows) {
        const areaText = document.querySelector('.card-letter-area');
        const areaTextHeight = areaText.getBoundingClientRect().height;
        const areaTextWidth = areaText.getBoundingClientRect().width;
        areaText.style.maxWidth = areaTextWidth + 'px'; 
        areaText.style.maxHeight = areaTextHeight + 'px'; 
        let areaRowsHeight = (areaTextHeight - startRows * 2) / startRows; 
        
        function creationAreaTextRows(startRows) {
            for (let i = 0; i < startRows; i++) {
                newElem(
                    areaText, 
                    'div', 
                    ['cardtext-size-row'], 
                    [['style', `height: ${areaRowsHeight}px;`]]
                );
            } 
        }
        
        creationAreaTextRows(startRows);
    }
       
    function recordNewValueFontSize(operator) { 
        const stylesheet = document.styleSheets[0];
        
        for (const value of stylesheet.cssRules) {
            const textArea = document.querySelector('.card-letter-textarea');
            const textAreaGet = getComputedStyle(textArea);
            let fontSizeTextArea = textAreaGet.fontSize;
            
            if(value.selectorText === '.card-letter-textarea') {
                switch (operator) {
                    case 'minus':
                        fontSizeTextArea = parseFloat(fontSizeTextArea) / 1.08;
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        break;
                    case 'plus':
                        fontSizeTextArea = parseFloat(fontSizeTextArea) * 1.08;
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        break;
                }
            }
        }
    }

    let startNumberRows = 15;
    const maxNumberRows = 18;
    const minNumberRows = 5;
    const buttonSizeMinus = document.querySelector('.nav-addit-size-minus');       
    const buttonSizePlus = document.querySelector('.nav-addit-size-plus');  

    function startSize() {
        if(!document.querySelector('.cardtext-size-row')) {
            takeSize(startNumberRows);
        }
    }

    function removeRows() {
        const areaTextRows = document.querySelectorAll('.cardtext-size-row');

        areaTextRows.forEach((el) => {
            el.remove();
        })
    }

    function minusSize() {
        startNumberRows = startNumberRows + 1;
        
        if(startNumberRows <= maxNumberRows && startNumberRows >= minNumberRows) {
            removeRows();
            takeSize(startNumberRows);
            recordNewValueFontSize('minus');
        } else startNumberRows = startNumberRows - 1;
    }
    
    function plusSize() {
        startNumberRows = startNumberRows - 1;
        
        if(startNumberRows <= maxNumberRows && startNumberRows >= minNumberRows) {
            removeRows();
            takeSize(startNumberRows);
            recordNewValueFontSize('plus');
        } else startNumberRows = startNumberRows + 1;
    }
    
    setTimeout(startSize, 400);
    
    buttonSizeMinus.addEventListener('pointerdown', minusSize);
    buttonSizePlus.addEventListener('pointerdown', plusSize);
}
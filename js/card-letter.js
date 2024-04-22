import { newElem } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    function addRows(numberRows) {
        const elemLetterArea = document.querySelector('.card-letter-area');
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);
        const lineHeightRow = (areaTextHeight / numberRows).toFixed(2);

        for (let i = 0; i < numberRows; i++) {
            newElem(
                elemLetterArea, 
                'div', 
                ['text-area-row'], 
                [['style', `height: ${heightRow}px;`]]
            );
        }

        elemTextArea.classList.add('created');

        return lineHeightRow;
    }

    function delRows() {
        elemTextArea.classList.remove('created');

        const rowTextArea = document.querySelectorAll('.text-area-row');

        rowTextArea.forEach((el) => {
            el.remove();
        })
    }
    
    let numberRows;
    let lineHeightRow; 
    let fontSizeTextArea;
    
    const elemTextArea = document.querySelector('.card-letter-textarea');
    elemTextArea.addEventListener('change', () => {sessionStorage.setItem('card-letter--text', `${elemTextArea.value}`)});
    
    function recordNewValueFontSize(operator, lineHeightRow) { 
        const stylesheet = document.styleSheets[0];
        for (const value of stylesheet.cssRules) {
            if(value.selectorText === '.card-letter-textarea') {
                switch (operator) {
                    case 'start':   
                        fontSizeTextArea = (lineHeightRow * 0.8).toFixed(2);
                        value.style.setProperty('line-height', `${lineHeightRow}px`);
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
                        sessionStorage.setItem('card-letter--rows', `${numberRows}`);
                        break;
                    case 'restart':
                        fontSizeTextArea = sessionStorage.getItem('card-letter--font-size');
                        value.style.setProperty('line-height', `${lineHeightRow}px`);
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        elemTextArea.value = sessionStorage.getItem('card-letter--text');
                        break;
                }
            }         
        }
    }

    if (!elemTextArea.classList.contains('created') && !sessionStorage.getItem('card-letter--text')) {
        function startRows() {
            numberRows = 10;
            lineHeightRow = addRows(numberRows);
            recordNewValueFontSize('start', lineHeightRow);
        }

        setTimeout(startRows, 300);
    } else {
        numberRows = Number(sessionStorage.getItem('card-letter--rows'));
        delRows();
        setTimeout(() => lineHeightRow = addRows(numberRows), 300);
        recordNewValueFontSize('restart', lineHeightRow);
    }
    
    function rowsMinus() {
        numberRows = --numberRows;
        
        if (numberRows > 6) {
            startPressActivation(buttonSizePlus);
            delRows();
            lineHeightRow = addRows(numberRows);
            recordNewValueFontSize('start', lineHeightRow);
        }
    }
    
    function rowsPlus() {
        numberRows = ++numberRows;
        
        if (numberRows < 19) {
            startPressActivation(buttonSizeMinus);
            delRows();
            lineHeightRow = addRows(numberRows);
            recordNewValueFontSize('start', lineHeightRow);
        }
    }
    
    const buttonSizePlus = document.querySelector('.nav-additional-size-plus');  
    buttonSizePlus.addEventListener('pointerdown', rowsMinus);
    
    const buttonSizeMinus = document.querySelector('.nav-additional-size-minus');       
    buttonSizeMinus.addEventListener('pointerdown', rowsPlus);
};
          
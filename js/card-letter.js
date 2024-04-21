import { newElem } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    const elemTextArea = document.querySelector('.card-letter-textarea');
    let fontSizeTextArea;

    function addRows(numberRows) {
        const elemLetterArea = document.querySelector('.card-letter-area');
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);

        for (let i = 0; i < numberRows; i++) {
            newElem(
                elemLetterArea, 
                'div', 
                ['text-area-row'], 
                [['style', `height: ${heightRow}px;`]]
            );
        }

        elemTextArea.classList.add('created');
    }

    function delRows() {
        elemTextArea.classList.remove('created');

        const rowTextArea = document.querySelectorAll('.text-area-row');

        rowTextArea.forEach((el) => {
            el.remove();
        })
    }

    function recordNewValueFontSize(operator) { 
        const stylesheet = document.styleSheets[0];
    
        for (const value of stylesheet.cssRules) {
            if(value.selectorText === '.card-letter-textarea') {
                switch (operator) {
                    case 'restart':
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        break;
                    case 'minus':
                        fontSizeTextArea = (parseFloat(fontSizeTextArea) / 1.08).toFixed(2);
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
                        break;
                    case 'plus':
                        fontSizeTextArea = (parseFloat(fontSizeTextArea) * 1.08).toFixed(2);
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
                        break;
                }
            }         
        }
    }

    elemTextArea.addEventListener('change', () => {sessionStorage.setItem('card-letter--text', `${elemTextArea.value}`)});
    
    let numberRows;
    
    if (sessionStorage.getItem('card-letter--text')) {
        elemTextArea.value = sessionStorage.getItem('card-letter--text');
        elemTextArea.fontSize = sessionStorage.getItem('card-letter--font-size');
    }

    if (!sessionStorage.getItem('card-letter--font-size')) {
        fontSizeTextArea = parseFloat(getComputedStyle(elemTextArea).fontSize);
    } else {
        numberRows = sessionStorage.getItem('card-letter--number-rows');

        delRows();
        setTimeout(() => addRows(Number(numberRows)), 300);
        recordNewValueFontSize('restart')
    }
    
    
    function startRows() {
        numberRows = 15;

        addRows(numberRows);
    }

    if (!elemTextArea.classList.contains('created') && !sessionStorage.getItem('card-letter--number-rows')) {
        setTimeout(startRows, 300);
    } 
    
    function rowsMinus() {
        numberRows = --numberRows;
        
        if (numberRows > 6) {
            startPressActivation(buttonSizePlus);
            delRows();
            addRows(numberRows);
            recordNewValueFontSize('plus');
            sessionStorage.setItem('card-letter--number-rows', `${numberRows}`);
        }
    }
    
    function rowsPlus() {
        numberRows = ++numberRows;
        
        if (numberRows < 19) {
            startPressActivation(buttonSizeMinus);
            delRows();
            addRows(numberRows);
            recordNewValueFontSize('minus');
            sessionStorage.setItem('card-letter--number-rows', `${numberRows}`);
        }
    }
    
    const buttonSizePlus = document.querySelector('.nav-additional-size-plus');  
    buttonSizePlus.addEventListener('pointerdown', rowsMinus);
    
    const buttonSizeMinus = document.querySelector('.nav-additional-size-minus');       
    buttonSizeMinus.addEventListener('pointerdown', rowsPlus);
};
          
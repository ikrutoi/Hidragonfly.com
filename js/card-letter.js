import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    const elemTextArea = document.querySelector('.card-letter-textarea');
    let numberRows;
    let lineHeightRow; 
    let fontSizeTextArea;

    function showMaxLength(numberRows) {      
        const sampleMaxLengthRow = [22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55];
        const valueRow = numberRows - 7;
        const maxLength = numberRows * sampleMaxLengthRow[valueRow];
        const lengthText = sessionStorage.getItem('card-letter--text').length;
        const elemCardLetterLegend = document.querySelector('.card-letter-legend');

        console.log(maxLength);

        if (!document.querySelector('.card-letter-counter')) {   
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-counter">${lengthText}</span>`);
            newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-maxlength">${maxLength}</span>`);
        }
            
        const elemTextAreaCounter = document.querySelector('.card-letter-counter');
        const elemTextAreaMaxLength = document.querySelector('.card-letter-maxlength');

        elemTextAreaMaxLength.textContent = maxLength;
            
        function onInput(event) {
            const lengthText = event.target.value.length;
            elemTextAreaCounter.textContent = lengthText;
        }
        
        elemTextArea.addEventListener('input', onInput);
    }
    
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
        elemTextArea.setAttribute('rows', `${numberRows}`);

        showMaxLength(numberRows);

        return lineHeightRow;
    }

    function delRows() {
        elemTextArea.classList.remove('created');

        const rowTextArea = document.querySelectorAll('.text-area-row');

        rowTextArea.forEach((el) => {
            el.remove();
        })
    }
    
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
            // showMaxLength(numberRows);
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
            // showMaxLength(numberRows);
        } else numberRows = ++numberRows;
    }
    
    function rowsPlus() {
        numberRows = ++numberRows;
        
        if (numberRows < 19) {
            startPressActivation(buttonSizeMinus);
            delRows();
            lineHeightRow = addRows(numberRows);
            recordNewValueFontSize('start', lineHeightRow);
            // showMaxLength(numberRows);
        } else numberRows = --numberRows;
    }
    
    const buttonSizePlus = document.querySelector('.nav-additional-size-plus');  
    buttonSizePlus.addEventListener('pointerdown', rowsMinus);
    
    const buttonSizeMinus = document.querySelector('.nav-additional-size-minus');       
    buttonSizeMinus.addEventListener('pointerdown', rowsPlus);
};
          
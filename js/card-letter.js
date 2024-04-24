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
        let lengthText;
        
        if (sessionStorage.getItem('card-letter--text')) {
            lengthText = sessionStorage.getItem('card-letter--text').length;
        } else lengthText = 0;

        let letterRow = 0;
        
        
        
        const elemCardLetterLegend = document.querySelector('.card-letter-legend');
        
        if (!document.querySelector('.card-letter-counter')) {   
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-counter">${lengthText}</span>`);
            newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-maxlength">${maxLength}</span>`);
            newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-counter-row">${letterRow}</span>`);
        }
        
        const elemTextAreaCounter = document.querySelector('.card-letter-counter');
        const elemTextAreaMaxLength = document.querySelector('.card-letter-maxlength');
        
        elemTextAreaMaxLength.textContent = maxLength;
        
        //** Block row *

        function goKey(event, el) {
            const elemNumberRow = Number(el.getAttribute('data-row'));
            const elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);
            // let elemCardLetterRowFocus;

            if (event.code === 'Enter' || event.keyCode === 13 || event.code === 'ArrowDown' || event.keyCode === 40) {
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                // elemCardLetterRowFocus.setAttribute('style', 'background-color: #ececec;');
                elemCardLetterRowFocus.classList.add('row-focus');
                elemCardLetterRowFocus.setAttribute('maxlength', '25');
                elemCardLetterRowFocus.focus();
                
                // elemCardLetterRowBlur.setAttribute('style', 'background-color: #ffffff;');
                elemCardLetterRowBlur.classList.remove('row-focus');
            }
            
            if (event.code === 'ArrowUp' || event.keyCode === 38) {
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                // elemCardLetterRowFocus.setAttribute('style', 'background-color: #ececec;');
                elemCardLetterRowFocus.classList.add('row-focus');
                elemCardLetterRowFocus.setAttribute('maxlength', '25');
                elemCardLetterRowFocus.focus();
                
                // elemCardLetterRowBlur.setAttribute('style', 'background-color: #ffffff;');
                elemCardLetterRowBlur.classList.remove('row-focus');
            }
        }

        function goInput() {
            console.log('*****');
        }

        // const elemCardLetterRow5 = document.querySelector('.letter-row-5');
        // elemCardLetterRow5.focus();
        // elemCardLetterRow5.setAttribute('style', 'background: yellow;');
        
        const elemCardLetterRow = document.querySelectorAll('.card-letter-row');  
        elemCardLetterRow.forEach(el => {
            if (el.classList.contains('letter-row-0')) {
                el.focus();
                el.classList.add('row-focus');
            }
            el.addEventListener('keydown', (event) => goKey(event, el));
            el.addEventListener('change', goInput);
        })

        //** */

        function onInput(event) {
            const lengthText = event.target.value.length;  
            console.log(lengthText); 
            elemTextAreaCounter.textContent = lengthText;
            sessionStorage.setItem('card-letter--text', `${elemTextArea.value}`)
        }
            
        // elemTextArea.addEventListener('input', onInput);
    }

    //** ----- */
    
    function addRows(numberRows) {
        const elemLetterArea = document.querySelector('.card-letter-area');
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);
        const lineHeightRow = (areaTextHeight / numberRows).toFixed(2);

        for (let i = 0; i < numberRows; i++) {
            // newElem(
            //     elemLetterArea, 
            //     'input', 
            //     [`card-letter-row letter-row-${i}`], 
            //     [['style', `height: ${heightRow}px;`], ['type', 'text'], ['maxlength', '30']]
            // );
            newElemHTML(
                elemLetterArea, 
                'beforeend', 
                `<input class="card-letter-row letter-row-${i}" type="text" data-row="${i}" maxlength="30" style="height: ${heightRow}px;">`
            );
        }

        // elemTextArea.classList.add('created');
        // elemTextArea.setAttribute('rows', `${numberRows}`);

        return lineHeightRow;
    }

    function delRows() {
        elemTextArea.classList.remove('created');

        const rowTextArea = document.querySelectorAll('.text-area-row');

        rowTextArea.forEach((el) => {
            el.remove();
        })
    }

    // function goKey() {
    //     console.log('---------');
    // }

    // const elemCardLetterRow = document.querySelectorAll('.card-letter-row');

    // elemCardLetterRow.forEach(el => {
    //     console.log('++++++++');
    //     el.addEventListener('keyup', goKey);
    // })
    
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
                        sessionStorage.setItem('card-letter--line-height', `${lineHeightRow}`);
                        break;
                    case 'restart':
                        console.log(lineHeightRow);
                        fontSizeTextArea = sessionStorage.getItem('card-letter--font-size');
                        value.style.setProperty('line-height', `${lineHeightRow}px`);
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        elemTextArea.value = sessionStorage.getItem('card-letter--text');
                        break;
                }
            }         
        }
    }

    // if (!elemTextArea.classList.contains('created') && !sessionStorage.getItem('card-letter--text')) {
        function startRows() {
            numberRows = 10;
            lineHeightRow = addRows(numberRows);
            recordNewValueFontSize('start', lineHeightRow);
            showMaxLength(numberRows);
        }

        setTimeout(startRows, 300);
    // } else {
    //     console.log('restart');
    //     console.log(numberRows);
    //     numberRows = Number(sessionStorage.getItem('card-letter--rows'));
    //     lineHeightRow = Number(sessionStorage.getItem('card-letter--line-height'));
    //     delRows();
    //     setTimeout(() => addRows(numberRows), 300);
    //     recordNewValueFontSize('restart', lineHeightRow);
    //     showMaxLength(numberRows);
    // }
    
    // function rowsMinus() {
    //     numberRows = --numberRows;
        
    //     if (numberRows > 6) {
    //         startPressActivation(buttonSizePlus);
    //         delRows();
    //         lineHeightRow = addRows(numberRows);
    //         recordNewValueFontSize('start', lineHeightRow);
    //         showMaxLength(numberRows);
    //     } else numberRows = ++numberRows;
    // }
    
    // function rowsPlus() {
    //     numberRows = ++numberRows;
        
    //     if (numberRows < 19) {
    //         startPressActivation(buttonSizeMinus);
    //         delRows();
    //         lineHeightRow = addRows(numberRows);
    //         recordNewValueFontSize('start', lineHeightRow);
    //         showMaxLength(numberRows);
    //     } else numberRows = --numberRows;
    // }
    
    // const buttonSizePlus = document.querySelector('.nav-additional-size-plus');  
    // buttonSizePlus.addEventListener('pointerdown', rowsMinus);
    
    // const buttonSizeMinus = document.querySelector('.nav-additional-size-minus');       
    // buttonSizeMinus.addEventListener('pointerdown', rowsPlus);
};
          
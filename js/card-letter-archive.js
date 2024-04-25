import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    const elemLetterArea = document.querySelector('.card-letter-area');
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
        const elemCardLetterRow = document.querySelectorAll('.card-letter-row');  
        
        function goKey(event, el) {
            const elemNumberRow = Number(el.getAttribute('data-row'));
            const elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);
            const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`)

            const lengthText = event.target.value.length;  
            elemTextAreaCounter.textContent = lengthText;
            let cutArray;
            let restArray;

            if (event.code === 'Enter' || event.keyCode === 13) {
                // console.log(event.target);
                // console.log('Enter!', event.target.selectionStart, event.target.selectionEnd, event.target.value.length);
                // el.setSelectionRange(event.target.selectionStart, event.target.value.length);
                // el.selectionStart = event.target.selectionStart;
                // el.selectionEnd = event.target.value.length;
                // let range = new Range();

                el.setSelectionRange(event.target.selectionStart, event.target.value.length);
                // console.log(range);
                // console.log(document.getSelection().addRange(range));
                cutArray = event.target.value.slice(event.target.selectionStart, event.target.value.length);
                restArray = event.target.value.slice(0, event.target.selectionStart);
                console.log(event.target.value, restArray, cutArray);
                event.target.value = restArray;

                elemCardLetterRowFocus.value = cutArray;
                elemCardLetterRowFocus.focus();
                // el.setSelectionRange(event.target.selectionStart, event.target.value.length);
                // el.setSelectionRange(event.target.selectionStart, event.target.value.length) = '';
                // console.log(el.setSelectionRange(event.target.selectionStart, event.target.value.length));

                // setTimeout(() => )
                // console.log(event.target.value);
                // input.setSelectionRange(start, end, [direction])






            }



            if (event.code === 'KeyQ' || event.keyCode === 81) {
                // console.log(event.target);
                console.log('KeyQ!', event.target.selectionStart, event.target.selectionEnd, event.target.value.length);
                // el.setSelectionRange(event.target.selectionStart, event.target.value.length);
                // console.log(typeof(event.target.selectionStart));
                // const numberStart = event.target.selectionStart;
                // const numberEnd = event.target.value.length;
                el.selectionStart = event.target.selectionStart;
                el.selectionEnd = event.target.value.length;
                // input.setSelectionRange(start, end, [direction])
            }

            // if (event.code === 'Enter' || event.keyCode === 13 || event.code === 'ArrowDown' || event.keyCode === 40) {
            //     const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
            //     elemCardLetterRowFocus.classList.add('row-focus');
            //     // elemCardLetterRowFocus.setAttribute('maxlength', '25');
            //     elemCardLetterRowFocus.focus();

            //     elemCardLetterRowBlur.classList.remove('row-focus');
            // }
            
            if (event.code === 'ArrowUp' || event.keyCode === 38) {
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                elemCardLetterRowFocus.setAttribute('maxlength', '23');
                elemCardLetterRowFocus.focus();

                elemCardLetterRowBlur.classList.remove('row-focus');
            }
        }

        function goSelection(el) {
            el.selectionStart = 3;
            el.selectionEnd = 6;
        }

        function goRowFocus(el) {
            elemCardLetterRow.forEach(el => {
                if (el.classList.contains('row-focus')) el.classList.remove('row-focus');
            })

            const numberRowPointerDown = Number(el.getAttribute('data-row'));
            const elemNumberRowPointerDown = document.querySelector(`.letter-row-${numberRowPointerDown}`);

            elemNumberRowPointerDown.classList.add('row-focus');
        }

        function goInput(event, el) {
            const lengthText = event.target.value.length;  
            elemTextAreaCounter.textContent = lengthText;

            const numberRow = Number(el.getAttribute('data-row'));
            // const elemNumberRowPointerDown = document.querySelector(`.letter-row-${numberRowPointerDown}`);
            sessionStorage.setItem(`card-letter-row-${numberRow}-text`, `${el.value}`)
        }

        // function goSelection() {
        //     console.log(window.getSelection());
        // }
       
        elemCardLetterRow.forEach(el => {
            if (el.classList.contains('letter-row-0')) {
                el.focus();
                el.classList.add('row-focus');
            }

            el.addEventListener('keydown', (event) => goKey(event, el));
            el.addEventListener('pointerdown', () => goRowFocus(el));
            // el.addEventListener('pointerup', () => goSelection(el));
            // el.addEventListener('pointerdown', () => goSelection());
            // el.addEventListener('input', (event) => goInput(event, el));
        })
    }

    //** ---------- */

    // function getTextWidth(text, font) {
    //     let span = document.createElement('span');
    //     span.style.cssText = `font: ${font}; visibility: hidden; white-space: nowrap;`;
    //     span.textContent = text;
    //     document.body.appendChild(span);
    //     let width = span.offsetWidth;
    //     document.body.removeChild(span);
    //     return width;
    // }
    
    // // Применение функции:
    // let width = getTextWidth(' ', '2.2rem Calibri');
    // console.log(width); // Выведет ширину текста в пикселях

    // //** Canvas */

    // function measureTextCanvas(text, font) {
    //     let canvas = document.createElement('canvas');
    //     let context = canvas.getContext('2d');
    //     context.font = font;
    //     return context.measureText(text).width;
    // }
    
    // // Пример применения:
    // let canvasWidth = measureTextCanvas('i', '2.2rem Calibri');
    // console.log(canvasWidth); // Выведет ширину строки

    //** ----------- */
    
    function addRows(numberRows) {
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);
        // const lineHeightRow = (areaTextHeight / numberRows).toFixed(2);

        for (let i = 0; i < numberRows; i++) {
            newElemHTML(
                elemLetterArea, 
                'beforeend', 
                `<input class="card-letter-row letter-row-${i}" type="text" data-row="${i}" maxlength="25" style="height: ${heightRow}px;">`
            );
        }

        elemLetterArea.classList.add('created');
    }

    function delRows() {
        elemLetterArea.classList.remove('created');

        const elemCardLetterRow = document.querySelectorAll('.card-letter-row');

        elemCardLetterRow.forEach((el) => {
            el.remove();
        })
    }

    function startRows() {
        // console.log('start');
        if (elemLetterArea.classList.contains('created')) {
            console.log('restart');
        } else {
            console.log('start');
            numberRows = 10;
            addRows(numberRows);
            recordNewValueFontSize();
            showMaxLength(numberRows);
        }
    }

    // startRows();
    setTimeout(startRows, 200);

    // function goKey() {
    //     console.log('---------');
    // }

    // const elemCardLetterRow = document.querySelectorAll('.card-letter-row');

    // elemCardLetterRow.forEach(el => {
    //     console.log('++++++++');
    //     el.addEventListener('keyup', goKey);
    // })
    
    function recordNewValueFontSize() { 
        const stylesheet = document.styleSheets[0];
        for (const value of stylesheet.cssRules) {
            if(value.selectorText === '.card-letter-area') {
                // switch (operator) {
                    // case 'start':   
                        // fontSizeTextArea = (lineHeightRow * 0.8).toFixed(2);
                        // value.style.setProperty('line-height', `${lineHeightRow}px`);
                        // value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        // sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
                        sessionStorage.setItem('card-letter--rows', `${numberRows}`);
                        // sessionStorage.setItem('card-letter--line-height', `${lineHeightRow}`);
                        // break;
                    // case 'restart':
                        // fontSizeTextArea = sessionStorage.getItem('card-letter--font-size');
                        // console.log('+-+-+-+-');

                        // console.log()

                        // elemCardLetterRow = document.querySelectorAll('.card-letter-row');
                        // let i = 0;

                        // console.log(elemCardLetterRow);

                        // elemCardLetterRow.forEach((el) => {
                        //     console.log(i);
                        //     // el.value = sessionStorage.getItem(`card-letter-row-${i}-text`);
                        //     i = ++i;
                        // })

                        // value.style.setProperty('line-height', `${lineHeightRow}px`);
                        // value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        // elemLetterArea.value = sessionStorage.getItem('card-letter--text');
                        // break;
                // }
            }         
        }



    // if (!elemLetterArea.classList.contains('created')) {
        // function startRows() {
        //     // console.log('start');
        //     if 
        //     numberRows = 10;
        //     addRows(numberRows);
        //     recordNewValueFontSize('start');
        //     showMaxLength(numberRows);
        // }

        // // startRows();
        // setTimeout(startRows, 200);
    // } else {
        // console.log('restart');
        // numberRows = Number(sessionStorage.getItem('card-letter--rows'));
        // // lineHeightRow = Number(sessionStorage.getItem('card-letter--line-height'));
        // delRows();
        // // setTimeout(() => addRows(numberRows), 300);
        // addRows(numberRows);
        // setTimeout(() => recordNewValueFontSize('restart'), 100);
        // // recordNewValueFontSize('restart');
        // showMaxLength(numberRows);
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
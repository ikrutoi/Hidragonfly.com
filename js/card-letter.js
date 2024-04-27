// import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    const elemLetterArea = document.querySelector('.card-letter-area');
    let numberRows;

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
        
        const elemFirstCardLetterRow = document.querySelector('.card-letter-row');
        const maxLengthRow = elemFirstCardLetterRow.getAttribute('maxlength');
        const elemCardLetterRow = document.querySelectorAll('.card-letter-row');  
        
        function validationKey(event, el) {
            const elemNumberRow = Number(el.getAttribute('data-row'));
            let elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);
            const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`)

            const lengthText = event.target.value.length;  
            elemTextAreaCounter.textContent = lengthText;
            let cutText;
            let restText;

            // console.log(event.target.value);

            if (event.code === 'Enter' || event.keyCode === 13) {
                el.setSelectionRange(event.target.selectionStart, event.target.value.length);
                cutText = event.target.value.slice(event.target.selectionStart, event.target.value.length);
                restText = event.target.value.slice(0, event.target.selectionStart);
                event.target.value = restText;
                elemCardLetterRowBlur.classList.remove('row-focus');
                // sessionStorage.setItem(`card-letter-row-${elemNumberRow}-text`, `${restText}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                
                // deleteFromDocument() – удалить содержимое выделения из документа.

                elemCardLetterRowFocus.value = cutText;
                sessionStorage.setItem(`card-letter-row-${elemNumberRow + 1}-text`, `${cutText}`);
                elemCardLetterRowFocus.setSelectionRange(0, 0);
                elemCardLetterRowFocus.focus();
            }

            if (event.target.value.length == maxLengthRow) {  
                let transitionLetter;
                let startFocus = event.target.selectionStart;
                let elemRowNext = document.querySelector(`.letter-row-${elemNumberRow + 1}`);

                if (event.target.selectionStart < maxLengthRow) {
                    transitionLetter = event.target.value[maxLengthRow - 1];
                    console.log(event.target.value.slice(0, maxLengthRow - 1));
                    event.target.value = event.target.value.slice(0, maxLengthRow - 1);
                    event.target.selectionStart = startFocus;
                    event.target.selectionEnd = startFocus;
                    elemRowNext.value = transitionLetter + elemRowNext.value;
                } else if (event.target.selectionStart = maxLengthRow) {
                    elemRowNext.setSelectionRange(0, 0);
                    elemRowNext.focus();
                }

                // elemRowNext.value = transitionLetter + elemRowNext.value;


                // console.log(event.target.value[5]);
                
                // for (let i = elemNumberRow; i < numberRows; i++) {
                //     // let transitionLetter;
                //     let elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                //     let elemRowNext = document.querySelector(`.letter-row-${i + 1}`);
                //     // const transitionLetterCurrent = elemRowCurrent.value[maxLengthRow - 1];
                //     // console.log(transitionLetterCurrent);
                //     elemRowCurrent.value = elemRowCurrent.value.slice(0, maxLengthRow - 1);
                //     elemRowNext.value = transitionLetter + elemRowNext.value;
                //     break;
                    // console.log(event.target.selectionStart);

                    // if (event.target.selectionStart < maxLengthRow) {
                    //     // transitionLetter = elemRowCurrent.value[maxLengthRow - 1];
                    //     if (elemRowCurrent.value[maxLengthRow - 1] + elemRowNext < maxLengthRow) {
                    //         elemRowNext = elemRowCurrent.value[maxLengthRow - 1] + elemRowNext;
                    //     } else continue
                    // }


                    // console.log(elemRowNext.value.length);
                    // if (!(elemRowNext.value.length == maxLengthRow)) {
                    //     // elemRowNext.value = transitionLetterCurrent + elemRowNext.value; 
                    //     elemRowNext.setSelectionRange(0, 0);
                    //     elemRowNext.focus();
                    //     break;
                    // } else continue;
                // }
            }

            if (event.code === 'ArrowDown' || event.keyCode === 40) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                elemCardLetterRowFocus.focus();
                // setTimeout(() => elemCardLetterRowFocus.focus(), 0);
            }
            
            if (event.code === 'ArrowUp' || event.keyCode === 38) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                elemCardLetterRowFocus.focus();
            }

            if (event.code === 'Backspace' || event.keyCode === 8) {
                if (event.target.selectionStart == 0) {
                    elemCardLetterRowBlur.classList.remove('row-focus');
                    restText = event.target.value.slice(0, event.target.selectionStart);
                    const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                    elemCardLetterRowFocus.classList.add('row-focus');
                    const numberFocus = elemCardLetterRowFocus.value.length;
                    const freePlaceRowFocus = maxLengthRow - elemCardLetterRowFocus.value.length;
                    console.log(freePlaceRowFocus);

                    let foundNumberPos;
                    let pos = 0;
                    
                    while (true) {
                        if (elemCardLetterRowBlur.value.length > freePlaceRowFocus && elemCardLetterRowBlur.value.indexOf(' ') == -1) break;  
                        let temporaryFoundNumberPos = elemCardLetterRowBlur.value.indexOf(' ', pos);
                        if (temporaryFoundNumberPos >= freePlaceRowFocus) break;  
                        console.log('1', foundNumberPos);
                        foundNumberPos = temporaryFoundNumberPos;   
                        if (temporaryFoundNumberPos == -1) break;
                        console.log('2', foundNumberPos);
                        pos = temporaryFoundNumberPos + 1;
                    }
                    
                    console.log('3', foundNumberPos);
                    let textToWrap;
                    let textRemaining;

                    if (foundNumberPos === undefined) {
                        textToWrap = '';
                        textRemaining = elemCardLetterRowBlur.value;
                    }

                    if (foundNumberPos == -1) {       
                        textToWrap = elemCardLetterRowBlur.value;
                        textRemaining = '';
                    } else if (foundNumberPos === undefined) {
                            textToWrap = '';
                            textRemaining = elemCardLetterRowBlur.value;
                        } else {     
                            textToWrap = elemCardLetterRowBlur.value.slice(0, foundNumberPos + 1);
                            textRemaining = elemCardLetterRowBlur.value.slice(foundNumberPos, elemCardLetterRowBlur.value.length);
                        }

                    elemCardLetterRowFocus.value = elemCardLetterRowFocus.value + textToWrap;
                    elemCardLetterRowBlur.value = textRemaining;
                    elemCardLetterRowFocus.selectionStart = numberFocus;
                    elemCardLetterRowFocus.selectionEnd = numberFocus;
                    setTimeout(() => elemCardLetterRowFocus.focus(), 0);
                }
            }
            
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
            // const elemNumberRow = Number(el.getAttribute('data-row'));
            // const elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);
            // const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`)

            // if (event.target.value == maxLengthRow) {
            //     elemCardLetterRowBlur.classList.remove('row-focus');
            //     const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
            //     elemCardLetterRowFocus.classList.add('row-focus');
            //     elemCardLetterRowFocus.focus();
            // }

            // console.log(event.target.value);
            const lengthText = event.target.value.length;  
            elemTextAreaCounter.textContent = lengthText;

            const numberRow = Number(el.getAttribute('data-row'));
            // sessionStorage.setItem(`card-letter-row-${numberRow}-text`, `${el.value}`);
            // const elemNumberRowPointerDown = document.querySelector(`.letter-row-${numberRowPointerDown}`);
        }
       
        elemCardLetterRow.forEach(el => {
            if (el.classList.contains('letter-row-0')) {
                el.focus();
                el.classList.add('row-focus');
            }

            el.addEventListener('keydown', (event) => validationKey(event, el));
            el.addEventListener('pointerdown', () => goRowFocus(el));
            el.addEventListener('input', (event) => goInput(event, el));
        })
    }
    
    function addRows(numberRows) {
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);
        // const lineHeightRow = (areaTextHeight / numberRows).toFixed(2);

        for (let i = 1; i <= numberRows; i++) {
            newElemHTML(
                elemLetterArea, 
                'beforeend', 
                `<input class="card-letter-row letter-row-${i}" type="text" data-row="${i}" maxlength="10" style="height: ${heightRow}px;">`
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

    setTimeout(startRows, 200);
    
    function recordNewValueFontSize() { 
        const stylesheet = document.styleSheets[0];
        for (const value of stylesheet.cssRules) {
            if(value.selectorText === '.card-letter-area') {
                sessionStorage.setItem('card-letter--rows', `${numberRows}`);
            }         
        }
    }
}
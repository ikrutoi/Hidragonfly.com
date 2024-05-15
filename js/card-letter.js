import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    const elemLetterArea = document.querySelector('.card-letter-area');
    let numberRows;
    let fontSize;
    let maxLength;
    let maxLengthFull;

    function showMaxLength(numberRows) {  
        const elemFirstCardLetterRow = document.querySelector('.card-letter-row');
        const maxLengthRow = elemFirstCardLetterRow.getAttribute('maxlength');
        // const sampleMaxLengthRow = [22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55];
        // const valueRow = numberRows - 10;
        maxLengthFull = numberRows * maxLengthRow;
        let lengthText;
        
        if (sessionStorage.getItem('card-letter--text')) {
            lengthText = sessionStorage.getItem('card-letter--text').length;
        } else lengthText = 0;
        
        const elemCardLetterLegend = document.querySelector('.card-letter-legend');
        
        if (!document.querySelector('.card-letter-counter')) {   
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-counter">${lengthText}</span>`);
            newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-maxlength">${maxLengthRow}</span>`);
            newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-maxlengthfull">${maxLengthFull}</span>`);
        }
        
        const elemTextAreaCounter = document.querySelector('.card-letter-counter');
        const elemTextAreaMaxLength = document.querySelector('.card-letter-maxlength');
        elemTextAreaMaxLength.textContent = maxLengthRow;
        
        const elemCardLetterRow = document.querySelectorAll('.card-letter-row');  
        let numberRowFocus;
        
        function goRowFocus(el) {
            elemCardLetterRow.forEach(el => {
                if (el.classList.contains('row-focus')) el.classList.remove('row-focus');
            })

            numberRowFocus = Number(el.getAttribute('data-row'));
            const elemNumberRowFocus = document.querySelector(`.letter-row-${numberRowFocus}`);

            elemNumberRowFocus.classList.add('row-focus');
        }

        let arrayLetterText = [];

        function optimizationText(startRow) {

            for (let i = startRow; i <= numberRows; i++) {
                let temporaryText;              
                if (i > 1) {
                    const elemRowPrevious = document.querySelector(`.letter-row-${i - 1}`);
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                    const arrayRowCurrent = elemRowCurrent.value.split(' ');
                    for (let index = 0; index < arrayRowCurrent.length; index++) {
                        if (arrayRowCurrent[index].length <= maxLengthRow - elemRowPrevious.value.length - 1) {
                            if (index == 0) {
                                if (index == arrayRowCurrent.length - 1) {
                                    if (elemRowPrevious.value == '') {
                                        elemRowPrevious.value = arrayRowCurrent[index];
                                    } else {
                                        if (arrayRowCurrent[index] == '') {
                                            break;
                                        } else {
                                            elemRowPrevious.value = elemRowPrevious.value + ' ' + arrayRowCurrent[index];
                                        }
                                    }
                                    elemRowCurrent.value = '';
                                    temporaryText = null;
                                } else {
                                    temporaryText = arrayRowCurrent[index];
                                }
                            } else {
                                if (index == arrayRowCurrent.length - 1) {
                                    temporaryText = temporaryText + ' ' + arrayRowCurrent[index]; 
                                    if (elemRowPrevious.value == '') {
                                        elemRowPrevious.value = temporaryText;
                                    } else {
                                        elemRowPrevious.value = elemRowPrevious.value + ' ' + temporaryText;
                                    }
                                    elemRowCurrent.value = '';
                                    temporaryText = null;
                                } else {
                                    temporaryText = temporaryText + ' ' + arrayRowCurrent[index]; 
                                }
                            }
                        } else {
                            if (elemRowPrevious.value == '') {
                                if (temporaryText) {
                                    elemRowPrevious.value = temporaryText;
                                } else {
                                    break;
                                }
                            } else {
                                if (temporaryText) {
                                    elemRowPrevious.value = elemRowPrevious.value + ' ' + temporaryText;
                                } else {
                                    break;
                                }
                            }
                            elemRowCurrent.value = arrayRowCurrent.slice(index).join(' ');
                            temporaryText = null;
                            break;
                        }
                    }
                }
            }
        }

        function validationKey(event, el) {
            let elemNumberRow = Number(event.target.getAttribute('data-row'));
            let elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);
            const lengthText = event.target.value.length;  
            elemTextAreaCounter.textContent = lengthText;

            if (event.code === 'Escape' || event.keyCode === 27) {
                console.log('optimization!');
                optimizationText();
            }
            
            if (
                elemNumberRow == numberRows && 
                event.target.selectionStart == maxLengthRow && 
                !(
                    event.code === 'Backspace' || event.keyCode === 8 ||
                    event.code === 'ArrowLeft' || event.keyCode === 37 ||
                    event.code === 'ArrowUp' || event.keyCode === 38 || 
                    event.code === 'ArrowRight' || event.keyCode === 39 || 
                    event.code === 'ArrowDown' || event.keyCode === 40 ||
                    event.code === 'Tab' || event.keyCode === 9
                )
            ) {
                for (let i = 1; i <= numberRows; i++) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                    arrayLetterText.push(elemRowCurrent.value);
                }
                console.log('new row!');
                delRows();
                // numberRows = ++numberRows;
                fontSize = fontSize*0.92;
                maxLength = parseInt(maxLength*1.2);
                setTimeout(() => startRows(++numberRows, fontSize.toFixed(2), maxLength), 0);
                setTimeout(() => addText(arrayLetterText, event.key), 0);
                // const elemCounterMaxLengthFull = document.querySelector('.card-letter-maxlengthfull');
                const maxLengthFull1 = numberRows * maxLength;
                console.log('***', maxLengthFull1);
                document.querySelector('.card-letter-maxlengthfull').textContent = `${maxLengthFull}`;
                // console.dir(elemCounterMaxLengthFull);
                // console.log(elemCounterMaxLengthFull.value);
                // elemCounterMaxLengthFull.value = 11;
                // setTimeout(() => optimizationText(1), 0);
            }

            if (event.target.value.length == maxLengthRow &&
                elemNumberRow < numberRows &&
                (event.code === 'Space' || event.keyCode === 32)
            ) {
                const elemRowNext = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                elemRowNext.selectionStart = 0;
                elemRowNext.selectionEnd = 0;
                setTimeout(() => elemRowNext.focus(), 0);
            }

            if (event.target.value.length == maxLengthRow &&
                elemNumberRow < numberRows &&
                !(
                    event.code === 'Backspace' || event.keyCode === 8 ||
                    event.code === 'ArrowLeft' || event.keyCode === 37 ||
                    event.code === 'ArrowUp' || event.keyCode === 38 || 
                    event.code === 'ArrowRight' || event.keyCode === 39 || 
                    event.code === 'ArrowDown' || event.keyCode === 40 ||
                    event.code === 'Tab' || event.keyCode === 9 ||
                    event.code === 'Space' || event.keyCode === 32
                )
            ) { 
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                const elemRowNext = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                const arrayRowCurrent = elemRowCurrent.value.split(' ');
                let temporaryText;
                if (arrayRowCurrent.length > 1) {
                    temporaryText = arrayRowCurrent.pop();
                    elemRowCurrent.value = arrayRowCurrent.join(' ');
                    if (temporaryText.length < maxLengthRow - elemRowNext.value.length) {
                        if (elemRowNext.value == '') {
                            elemRowNext.value = temporaryText;
                        } else {
                            elemRowNext.value = temporaryText + ' ' + elemRowNext.value;
                        }
                        elemRowNext.selectionStart = temporaryText.length;
                        elemRowNext.selectionEnd = temporaryText.length;
                    }
                }
                elemRowNext.focus(); 
            }

            if (event.code === 'ArrowDown' || event.keyCode === 40) {
                if (!(elemNumberRow == numberRows)) {
                    elemCardLetterRowBlur.classList.remove('row-focus');
                    const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                    elemCardLetterRowFocus.classList.add('row-focus');
                    elemCardLetterRowFocus.selectionStart = event.target.selectionStart;
                    elemCardLetterRowFocus.selectionEnd = event.target.selectionStart;
                    setTimeout(() => elemCardLetterRowFocus.focus(), 0);
                }
            }
            
            if (event.code === 'ArrowUp' || event.keyCode === 38) {
                if (!(elemNumberRow == 1)) {
                    elemCardLetterRowBlur.classList.remove('row-focus');
                    const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                    elemCardLetterRowFocus.classList.add('row-focus');
                    elemCardLetterRowFocus.selectionStart = event.target.selectionStart;
                    elemCardLetterRowFocus.selectionEnd = event.target.selectionStart;
                    setTimeout(() => elemCardLetterRowFocus.focus(), 0);
                }
            }

            if (event.code === 'ArrowLeft' || event.keyCode === 37) {
                if (event.target.selectionStart == 0 && !(elemNumberRow == 1)) {
                    elemCardLetterRowBlur.classList.remove('row-focus');
                    const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                    elemCardLetterRowFocus.classList.add('row-focus');
                    elemCardLetterRowFocus.selectionStart = elemCardLetterRowFocus.value.length;
                    elemCardLetterRowFocus.selectionEnd = elemCardLetterRowFocus.value.length;
                    setTimeout(() => elemCardLetterRowFocus.focus(), 0);
                }
            }

            if (event.code === 'ArrowRight' || event.keyCode === 39) {
                if (event.target.selectionEnd == elemCardLetterRowBlur.value.length && !(elemNumberRow == numberRows)) {
                    elemCardLetterRowBlur.classList.remove('row-focus');
                    const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                    elemCardLetterRowFocus.classList.add('row-focus');
                    elemCardLetterRowFocus.selectionStart = 0;
                    elemCardLetterRowFocus.selectionEnd = 0;
                    setTimeout(() => elemCardLetterRowFocus.focus(), 0);
                }
            }

            if (event.code === 'Enter' || event.keyCode === 13) {
                const pointFocus = event.target.selectionStart; 
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                const elemRowNext = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                const valueRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`).value;
                elemRowCurrent.classList.remove('row-focus');

                for (let i = numberRows; i >= elemNumberRow; i--) { 
                    if (i == numberRows && Boolean(document.querySelector(`.letter-row-${i}`).value)) {
                        elemRowCurrent.classList.add('row-focus');
                        break;
                    } else {
                        if (i == elemNumberRow + 1) {
                            document.querySelector(`.letter-row-${i}`).value = valueRowCurrent.slice(pointFocus);   
                        }
                        
                        if (i == elemNumberRow) {
                            document.querySelector(`.letter-row-${elemNumberRow}`).value = valueRowCurrent.slice(0, pointFocus);           
                        }
                        
                        if (i > elemNumberRow + 1) {
                            document.querySelector(`.letter-row-${i}`).value = document.querySelector(`.letter-row-${i - 1}`).value;  
                        }
                        elemRowNext.selectionStart = 0;
                        elemRowNext.selectionEnd = 0;
                        elemRowNext.classList.add('row-focus');
                        elemRowNext.focus();
                    }
                }
            }

            function addText(arrayLetterText, eventKey) {   
                for (let index = 1; index < numberRows; index++) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${index}`); 
                    if (index == arrayLetterText.length) {
                        elemRowCurrent.value = arrayLetterText[index - 1] + eventKey;
                        elemRowCurrent.selectionStart = arrayLetterText[index - 1].length + 1;
                        elemRowCurrent.selectionEnd = arrayLetterText[index - 1].length + 1;
                        elemRowCurrent.classList.add('row-focus');
                        elemRowCurrent.focus();
                    } else {
                        elemRowCurrent.value = arrayLetterText[index - 1];
                    }
                }
            }

            if ((event.code === 'Backspace' || event.keyCode === 8) && event.target.selectionStart == 0) {
                const elemRowPrevious = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                for (let i = elemNumberRow; i <= numberRows; i++) {
                    const arrayRowCurrent = elemRowCurrent.value.split(' ');
                    const newPointFocus = elemRowPrevious.value.length;
                    let temporaryText;
                    if (i == elemNumberRow) {
                        for (let index = 0; index < arrayRowCurrent.length; index++) {
                            if (index == 0) {
                                if (arrayRowCurrent[index].length <= maxLengthRow - elemRowPrevious.value.length) {
                                    if (index == arrayRowCurrent.length - 1) {
                                        elemRowPrevious.value = elemRowPrevious.value + arrayRowCurrent[index];
                                        elemRowCurrent.value = '';
                                    } else {
                                        temporaryText = arrayRowCurrent[index];
                                    }
                                } else {
                                    break;
                                }
                            } else {
                                if (temporaryText.length + arrayRowCurrent[index].length < maxLengthRow - elemRowPrevious.value.length) {
                                    if (index == arrayRowCurrent.length - 1) {
                                        elemRowPrevious.value = elemRowPrevious.value + elemRowCurrent.value;
                                        elemRowCurrent.value = '';
                                        temporaryText = null;
                                    } else {
                                        temporaryText = temporaryText + ' ' + arrayRowCurrent[index];
                                    }
                                } else { 
                                    if (temporaryText) {
                                        elemRowPrevious.value = elemRowPrevious.value + temporaryText;
                                        elemRowCurrent.value = arrayRowCurrent.slice(index).join(' ');
                                        temporaryText = null;
                                        break;
                                    } else {
                                        break;
                                    }
                                } 
                            }
                        }
                        elemRowPrevious.selectionStart = newPointFocus;
                        elemRowPrevious.selectionEnd = newPointFocus;
                        setTimeout(() => elemRowPrevious.focus(), 0);
                    }
                }
                if (elemRowCurrent.value == '') {
                    optimizationText(elemNumberRow);
                }
            }

            if (
                (event.code === 'NumpadDecimal' || event.keyCode === 46) &&
                event.target.selectionStart == event.target.value.length
                ) {
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                const elemRowNext = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                for (let i = elemNumberRow; i < numberRows; i++) {                    
                    const arrayRowNext = elemRowNext.value.split(' ');
                    const newPointFocus = elemRowCurrent.value.length;
                    if (i == elemNumberRow) {
                        let temporaryText;
                        for (let index = 0; index < arrayRowNext.length; index++) {
                            if (index == 0) {
                                console.log('*');
                                if (maxLengthRow - newPointFocus >= arrayRowNext[index].length) {
                                    if (index == arrayRowNext.length - 1) {
                                        elemRowCurrent.value = elemRowCurrent.value + ' ' + elemRowNext.value;
                                        elemRowNext.value = '';
                                    } else {
                                        console.log('*-*');
                                        temporaryText = arrayRowNext[index];
                                    }
                                } else {
                                    console.log('*break*');
                                    break;
                                }
                            } else {
                                console.log('**-**');
                                if (maxLengthRow - newPointFocus > temporaryText.length + arrayRowNext[index].length) {
                                    console.log('**');
                                    if (index == arrayRowNext.length - 1) {
                                        console.log('***');
                                        elemRowCurrent.value = elemRowCurrent.value + ' ' + elemRowNext.value;
                                        elemRowNext.value = '';
                                        temporaryText = null;
                                    } else {
                                        temporaryText = temporaryText + ' ' + arrayRowNext[index];
                                    }
                                } else { 
                                    if (temporaryText) {
                                        elemRowCurrent.value = elemRowCurrent.value + ' ' + temporaryText;
                                        elemRowNext.value = arrayRowNext.slice(index).join(' ');
                                        temporaryText = null;
                                        break;
                                    } else {
                                        break;
                                    }
                                } 
                            }
                        }
                        elemRowCurrent.selectionStart = newPointFocus;
                        elemRowCurrent.selectionEnd = newPointFocus;
                        elemRowCurrent.focus();
                    } 
                }
                if (elemRowNext.value == '') {
                    optimizationText(elemNumberRow + 1);
                }
            }
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
            // el.addEventListener('pointerdown', () => goRowFocus(el));
            el.addEventListener('focus', () => goRowFocus(el));
            el.addEventListener('input', (event) => goInput(event, el));
            // el.addEventListener('focus', (el) => goFocus(el));
        })
    }
    
    function addRows(numberRows, fontSize, maxLength) {
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);

        for (let i = 1; i <= numberRows; i++) {
            newElemHTML(
                elemLetterArea, 
                'beforeend', 
                `<input class="card-letter-row letter-row-${i}" type="text" data-row="${i}" maxlength="${maxLength}" style="height: ${heightRow}px; font-size: ${fontSize}rem;">`
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

    function startRows(rows, size, max) {
        if (elemLetterArea.classList.contains('created')) {
            console.log('restart');
        } else {
            console.log('start');
            maxLength = max;
            numberRows = rows;
            fontSize = size;
            addRows(numberRows, fontSize, maxLength);
            showMaxLength(numberRows);
        }
    }

    setTimeout(() => startRows(10, 2.2, 22), 200);
}
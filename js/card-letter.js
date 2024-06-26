import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    const elemLetterArea = document.querySelector('.card-letter-area');
    let numberRows;
    let fontSize;
    let maxLengthFull;
    let maxLengthRow;

    function showMaxLength(numberRows) {  
        // const elemFirstCardLetterRow = document.querySelector('.card-letter-row');
        // const maxLengthRow = elemFirstCardLetterRow.getAttribute('maxlength');
        // const sampleMaxLengthRow = [22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55];
        // const valueRow = numberRows - 10;
        maxLengthFull = numberRows * maxLengthRow;
        // let lengthText;
        
        // if (sessionStorage.getItem('card-letter--text')) {
        //     lengthText = sessionStorage.getItem('card-letter--text').length;
        // } else lengthText = 0;
        
        const elemCardLetterLegend = document.querySelector('.card-letter-legend');
        elemCardLetterLegend.onmousedown = elemCardLetterLegend.onselectstart = function() {
            return false;
        };
        
        if (!document.querySelector('.card-letter-counter')) {   
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-counter">0</span>`);
            newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-maxlength">${maxLengthRow}</span>`);
            newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-maxlengthfull">${maxLengthFull}</span>`);
        }
        
        const elemTextAreaCounter = document.querySelector('.card-letter-counter');
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

        function onFocus(row, numberFocus, setTime) {
            row.selectionStart = numberFocus;
            row.selectionEnd = numberFocus;
            if (setTime) {
                row.focus();
            } else {
                setTimeout(() => row.focus(), 0);
            }
        }

        function memoryLetter(eventKey, rowFocus, pointFocus) {
            const elemRowFocus = document.querySelector(`.letter-row-${rowFocus}`);
            const leftText = elemRowFocus.value.slice(0, pointFocus);
            const rightText = elemRowFocus.value.slice(pointFocus);
            elemRowFocus.value = leftText + eventKey + rightText;
            let arrayLetterText = [];
            for (let i = 1; i <= numberRows; i++) {
                const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                arrayLetterText.push(elemRowCurrent.value);
            }
            return arrayLetterText;
        }

        function memoryLetterKeyEnter(transferText) {
            let arrayLetterText = [];
            for (let i = 1; i <= numberRows + 1; i++) {
                const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                if (i == numberRows + 1) {
                    arrayLetterText.push(transferText);
                } else {
                    arrayLetterText.push(elemRowCurrent.value);
                }
            }
            return arrayLetterText;
        }

        function newLetter(arrayLetterText, rowFocus, pointFocus) {
        // function newLetter(arrayLetterText, eventKey, rowFocus, pointFocus) {
            delRows();
            numberRows = ++numberRows;
            fontSize = fontSize*0.92;
            maxLengthRow = parseInt(maxLengthRow*1.2);
            startRows(numberRows, fontSize.toFixed(2), maxLengthRow);
            addText(arrayLetterText);
            optimizationLetter(1);
            const elemRowCurrent = document.querySelector(`.letter-row-${rowFocus}`);
            elemRowCurrent.classList.add('row-focus');
            onFocus(elemRowCurrent, pointFocus, false);
            document.querySelector('.card-letter-maxlength').textContent = String(maxLengthRow);
            document.querySelector('.card-letter-maxlengthfull').textContent = String(maxLengthFull);
        }

        function delRows() {
            elemLetterArea.classList.remove('created');
            const elemCardLetterRow = document.querySelectorAll('.card-letter-row');
            elemCardLetterRow.forEach((el) => {
                el.remove();
            })
        }

        function addText(arrayLetterText) {   
            for (let i = 1; i < numberRows; i++) {
                const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                elemRowCurrent.value = arrayLetterText[i - 1];
            }
        }

        function optimizationLetter(startRow) {
            for (let i = startRow; i <= numberRows; i++) {           
                function optimizationRow(startRow) {
                    let temporaryRow;
                    for (let i = startRow; i <= numberRows; i++) {
                        const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                        if (elemRowCurrent.value == '') {
                            temporaryRow = '';
                            continue;
                        }
                        
                        if (temporaryRow == '') {
                            continue;
                        }
                        
                        if (i == startRow) {
                            temporaryRow = elemRowCurrent.value;
                        } else {
                            const elemRowPrevious = document.querySelector(`.letter-row-${i - 1}`);
                            const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                            const arrayRowCurrent = elemRowCurrent.value.split(' ');
                            let temporaryText;
                            let counterSpace;
                            for (let index = 0; index < arrayRowCurrent.length; index++) {
                                if (index == 0) {
                                    if (arrayRowCurrent[index].length < maxLengthRow - temporaryRow.length) {
                                        if (index == arrayRowCurrent.length - 1) {
                                            if (elemRowPrevious.value == '') {
                                                elemRowPrevious.value = elemRowCurrent.value;
                                            } else {
                                                elemRowPrevious.value = elemRowPrevious.value + ' ' + elemRowCurrent.value;
                                            }
                                            elemRowCurrent.value = '';
                                            temporaryRow = elemRowCurrent.value;
                                        } else {
                                            temporaryText = arrayRowCurrent[index];
                                            counterSpace = 1;
                                        }
                                    } else {
                                        temporaryRow = elemRowCurrent.value;
                                        break;
                                    }
                                } else {
                                    if (temporaryText.length + arrayRowCurrent[index].length + counterSpace < maxLengthRow - temporaryRow.length) {
                                        if (index == arrayRowCurrent.length - 1) {
                                            if (elemRowPrevious.value == '') {
                                                elemRowPrevious.value = elemRowCurrent.value;
                                            } else {
                                                elemRowPrevious.value = elemRowPrevious.value + ' ' + elemRowCurrent.value;
                                            }
                                            elemRowCurrent.value = '';
                                        } else {
                                            temporaryText = temporaryText + ' ' + arrayRowCurrent[index];
                                            counterSpace = counterSpace++;
                                        } 
                                    } else {
                                        if (elemRowPrevious.value == '') {
                                            elemRowPrevious.value = temporaryText;
                                        } else {
                                            elemRowPrevious.value = elemRowPrevious.value + ' ' + temporaryText;
                                        }
                                        elemRowCurrent.value = arrayRowCurrent.slice(index).join(' ');
                                        temporaryRow = elemRowCurrent.value;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }  
                optimizationRow(i);
            }          
        }

        function optimizationLetterIncrease(startRow, rightText) {
            for (let i = startRow; i <= numberRows; i++) {
                const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                if (rightText.length < maxLengthRow - elemRowCurrent.value.length) {
                    elemRowCurrent.value = rightText + ' ' + elemRowCurrent.value;
                    elemRowCurrent.classList.add('row-focus');
                    onFocus(elemRowCurrent, 0);
                    break;
                } else {
                    const arrayRowCurrent = elemRowCurrent.value.split(' ');
                    for (let index = 0; index < arrayRowCurrent.length; i++) {
                    }
                }
            }
        }

        function updateCounter() {   
            elemCardLetterRow.forEach((el) => {
                if (el.classList.contains('row-focus')) {
                    setTimeout(() => elemTextAreaCounter.textContent = el.value.length, 0)
                }
            })
        }

        function validationKey(event) {
            console.log('validation!');
            let elemNumberRow = Number(event.target.getAttribute('data-row'));
            let elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);

            if (event.code === 'Backspace' || event.keyCode === 8) {
                const elemRowPrevious = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                const pointFocusPrevious = elemRowPrevious.value.length;
                const pointFocusCurrent = event.target.selectionStart;
                let verificEmptyLine;     
                    
                if (
                    event.target.selectionStart ==  0 && 
                    elemRowPrevious.value == '' &&
                    elemNumberRow > 1
                ) {
                    verificEmptyLine = true;
                    let transferRow;
                    let temporaryRow;
                    for (let i = numberRows; i >= elemNumberRow - 1; i--) {
                        const elemRowCurrent = document.querySelector(`.letter-row-${i}`)
                        if (i == numberRows) {
                            transferRow = elemRowCurrent.value;
                            elemRowCurrent.value = '';
                        } else {
                            temporaryRow = elemRowCurrent.value;
                            elemRowCurrent.value = transferRow;
                            transferRow = temporaryRow;
                        }
                    }
                    onFocus(elemRowPrevious, pointFocusPrevious, false);
                }
                
                if (
                    event.target.selectionStart == 0 && 
                    elemNumberRow > 1 && 
                    !Boolean(verificEmptyLine)
                ) {   
                    optimizationLetter(elemNumberRow - 1);
                    onFocus(elemRowPrevious, pointFocusPrevious + 1, false);   
                } 
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

            function insertText(transferText, startRow) {
                const elemRowCurrent = document.querySelector(`.letter-row-${startRow}`);
                if (transferText.length < maxLengthRow - elemRowCurrent.value.length) {
                    elemRowCurrent.value = transferText + ' ' + elemRowCurrent.value;
                } else {
                    for (let i = startRow; i <= numberRows; i++) {
                        const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                        const arrayRowCurrent = elemRowCurrent.value.split(' ');
                        let temporaryText;
                        if (elemRowCurrent.value == '') {
                            elemRowCurrent.value = transferText;
                            transferText = '';
                            continue;
                        }
                        if (transferText == '') {
                            temporaryText = elemRowCurrent.value;
                            elemRowCurrent.value = transferText;
                            transferText = temporaryText;
                            continue;
                        }
                        if ((i == numberRows && elemRowCurrent.value == '') || i < numberRows) {
                            for (let index = arrayRowCurrent.length - 1; index >= 0; index--) {
                                if (index == arrayRowCurrent.length - 1) {
                                    if (transferText.length < maxLengthRow - (elemRowCurrent.value.length - arrayRowCurrent[index].length)) {
                                        temporaryText = arrayRowCurrent.pop();
                                        elemRowCurrent.value = transferText + ' ' + arrayRowCurrent.join(' ');
                                        transferText = temporaryText;
                                        break;
                                    } else {
                                        if (index == 0) {
                                            temporaryText = elemRowCurrent.value;
                                            elemRowCurrent.value = transferText;
                                            transferText = temporaryText;
                                        } else {
                                            temporaryText = arrayRowCurrent[index];
                                        }
                                    }
                                } else {
                                    if (transferText.length < maxLengthRow - (elemRowCurrent.value.length - temporaryText.length - arrayRowCurrent[index].length)) {
                                        temporaryText = temporaryText + ' ' + arrayRowCurrent[index];
                                        elemRowCurrent.value = transferText + ' ' + arrayRowCurrent.slice(0, index).join(' ');
                                        transferText = temporaryText;
                                        break;
                                    } else {
                                        if (index == 0) {
                                            temporaryText = elemRowCurrent.value;
                                            elemRowCurrent.value = transferText;
                                            transferText = temporaryText;
                                        } else {
                                            temporaryText = temporaryText + ' ' + arrayRowCurrent[index];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 

            if (event.target.value.length == maxLengthRow &&
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
                const elemRowLast = document.querySelector(`.letter-row-${numberRows}`);
                if (elemRowLast.value != '') {
                    const pointFocus = event.target.selectionStart;
                    const arrayLetterText = memoryLetter(event.key, elemNumberRow, pointFocus);
                    newLetter(arrayLetterText, elemNumberRow, pointFocus + 1);
                }
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
                console.log('**');
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                const elemRowNext = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                const elemRowLast = document.querySelector(`.letter-row-${numberRows}`);
                const arrayRowCurrent = elemRowCurrent.value.split(' ');
                const pointFocus = event.target.selectionStart;
                let transferText;
                let newPointFocus;
                let transferRow;
                let temporaryRow;
                if (arrayRowCurrent.length > 1) {
                    if (pointFocus == maxLengthRow) {
                        transferText = arrayRowCurrent.pop();
                        elemRowCurrent.value = arrayRowCurrent.join(' ');
                        newPointFocus = transferText.length;
                    } else {
                        transferText = arrayRowCurrent.pop();
                        elemRowCurrent.value = arrayRowCurrent.join(' ');
                        newPointFocus = pointFocus - elemRowCurrent.value.length - 1;
                    }
                    insertText(transferText, elemNumberRow + 1);
                    if (pointFocus > elemRowCurrent.value.length) {
                        onFocus(elemRowNext, newPointFocus, true);
                    } else {
                        onFocus(elemRowCurrent, pointFocus);
                    }
                } else {
                    for (let i = elemNumberRow; i <= numberRows; i++) {
                        const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                        if (event.target.selectionStart == maxLengthRow) {
                            if (i == elemNumberRow) {
                                if (elemNumberRow != numberRows) {
                                    elemRowCurrent.classList.remove('row-focus');
                                } else {
                                    newLetter();
                                }
                            } else {
                                if (i == elemNumberRow + 1) {
                                    temporaryRow = elemRowCurrent.value;
                                    elemRowCurrent.value = event.key;
                                    transferRow = temporaryRow;
                                    onFocus(elemRowCurrent, 1, false);
                                } else {
                                    temporaryRow = elemRowCurrent.value;
                                    elemRowCurrent.value = transferRow;
                                    transferRow = temporaryRow;
                                }
                                if (i == numberRows) {
                                    if (temporaryRow != '') {
                                        newLetter();
                                    }
                                }
                            }
                        } else {
                            let temporaryLetter;
                            if (elemNumberRow == numberRows || elemRowLast.value != '') {
                                newLetter();
                            } else {
                                if (i == elemNumberRow) {
                                    transferRow = elemRowCurrent.value[maxLengthRow - 1];
                                    temporaryLetter = true;
                                    elemRowCurrent.value = elemRowCurrent.value.slice(0, maxLengthRow - 1);
                                    onFocus(elemRowCurrent, pointFocus);
                                } else {
                                    temporaryRow = elemRowCurrent.value;
                                    elemRowCurrent.value = transferRow;
                                    transferRow = temporaryRow;
                                }
                            }
                        }

                    }
                }
            }

            if ((event.code === 'ArrowDown' || event.keyCode === 40) &&
                elemNumberRow != numberRows
            ) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                onFocus(elemCardLetterRowFocus, event.target.selectionStart, false);
            }
            
            if ((event.code === 'ArrowUp' || event.keyCode === 38) && 
                elemNumberRow != 1
            ) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                onFocus(elemCardLetterRowFocus, event.target.selectionStart, false);
            }

            if (
                (event.code === 'ArrowLeft' || event.keyCode === 37) &&
                event.target.selectionStart == 0 &&
                elemNumberRow != 1
            ) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                onFocus(elemCardLetterRowFocus, elemCardLetterRowFocus.value.length, false);
            }

            if (
                (event.code === 'ArrowRight' || event.keyCode === 39) &&
                event.target.selectionStart == event.target.value.length &&
                elemNumberRow != numberRows
            ) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                onFocus(elemCardLetterRowFocus, 0, false);
            }

            if (event.code === 'Enter' || event.keyCode === 13) {
                const pointFocus = event.target.selectionStart; 
                let transferRow;
                let temporaryRow;

                for (let i = elemNumberRow; i <= numberRows; i++) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                    if (i == elemNumberRow) {
                        elemRowCurrent.classList.remove('row-focus');
                        transferRow = elemRowCurrent.value.slice(pointFocus);
                        elemRowCurrent.value = elemRowCurrent.value.slice(0, pointFocus);
                        if (i == numberRows) {
                            const arrayLetterText = memoryLetterKeyEnter(transferRow);
                            newLetter(arrayLetterText, numberRows + 1, 0);
                        }
                    } else {
                        temporaryRow = elemRowCurrent.value;
                        elemRowCurrent.value = transferRow;
                        transferRow = temporaryRow;
                        if (i == numberRows && transferRow != '') {
                            const arrayLetterText = memoryLetterKeyEnter(transferRow);
                            newLetter(arrayLetterText, elemNumberRow + 1, 0);
                        }
                    }
                    if (i == elemNumberRow + 1) {
                        onFocus(elemRowCurrent, 0, false);
                    }
                }
            }

            if (
                (elemNumberRow == numberRows && 
                event.target.selectionStart == maxLengthRow && 
                !(
                    event.code === 'Backspace' || event.keyCode === 8 ||
                    event.code === 'ArrowLeft' || event.keyCode === 37 ||
                    event.code === 'ArrowUp' || event.keyCode === 38 || 
                    event.code === 'ArrowRight' || event.keyCode === 39 || 
                    event.code === 'ArrowDown' || event.keyCode === 40 ||
                    event.code === 'Tab' || event.keyCode === 9
                )) || 
                ((event.code === 'Enter' || event.keyCode === 13) && 
                elemNumberRow == numberRows &&
                !(
                    event.code === 'Backspace' || event.keyCode === 8 ||
                    event.code === 'ArrowLeft' || event.keyCode === 37 ||
                    event.code === 'ArrowUp' || event.keyCode === 38 || 
                    event.code === 'ArrowRight' || event.keyCode === 39 || 
                    event.code === 'ArrowDown' || event.keyCode === 40 ||
                    event.code === 'Tab' || event.keyCode === 9
                ))
            ) {
                const arrayLetterText = memoryLetter();
                newLetter(arrayLetterText, event.key, numberRows + 1, 0);
            }

            function overkillRows() {
                let transferRow;
                let temporaryRow;
                for (let i = numberRows; i > elemNumberRow; i--) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                    if (i == numberRows) {
                        transferRow = elemRowCurrent.value;
                        elemRowCurrent.value = '';
                    } else {
                        temporaryRow = elemRowCurrent.value;
                        elemRowCurrent.value = transferRow;
                        transferRow = temporaryRow;
                    }
                }
            }

            if (
                (event.code === 'NumpadDecimal' || event.keyCode === 46) && 
                elemNumberRow < numberRows && 
                event.target.selectionStart == event.target.value.length
            ) {
                const pointFocus = event.target.selectionStart;
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                const elemRowNext = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                const arrayRowNext = elemRowNext.value.split(' ');
                let temporaryText;

                for (let index = 0; index < arrayRowNext.length; index++) {
                    if (index == 0) {
                        if (arrayRowNext[index].length <= maxLengthRow - elemRowCurrent.value.length) {
                            if (index == arrayRowNext.length - 1) {
                                elemRowCurrent.value = elemRowCurrent.value + ' ' + arrayRowNext[index];
                                onFocus(elemRowCurrent, pointFocus, false);
                                overkillRows();
                            } else {
                                temporaryText = arrayRowNext[index];
                            }
                        } else {
                            break;
                        }
                    } else {
                        if (temporaryText.length + arrayRowNext[index].length < maxLengthRow - elemRowCurrent.value.length) {
                            if (index == arrayRowNext.length - 1) {
                                elemRowCurrent.value = elemRowCurrent.value + ' ' + elemRowNext.value;
                                onFocus(elemRowCurrent, pointFocus, false);
                                overkillRows();
                            } else {
                                temporaryText = temporaryText + ' ' + arrayRowNext[index];
                            }
                        } else {
                            elemRowCurrent.value = elemRowCurrent.value + ' ' + temporaryText;
                            elemRowNext.value = arrayRowNext.slice(index).join(' ');
                            onFocus(elemRowCurrent, pointFocus, false);
                        }
                    }
                }
            }
        }
       
        elemCardLetterRow.forEach(el => {
            if (el.classList.contains('letter-row-0')) {
                el.focus();
                el.classList.add('row-focus');
            }

            el.addEventListener('keydown', (event) => validationKey(event));
            el.addEventListener('mouseup', updateCounter);
            el.addEventListener('keydown', updateCounter);
            el.addEventListener('focus', () => goRowFocus(el));
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

    function startRows(rows, size, max) {
        if (elemLetterArea.classList.contains('created')) {
            console.log('restart');
        } else {
            maxLengthRow = max;
            numberRows = rows;
            fontSize = size;
            addRows(numberRows, fontSize, maxLengthRow);
            showMaxLength(numberRows);
        }
    }
    setTimeout(() => startRows(10, 2.2, 22), 200);
}
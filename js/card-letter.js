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
            // newElemHTML(elemCardLetterLegend, 'beforeend','<span>&nbsp/&nbsp</span>');
            // newElemHTML(elemCardLetterLegend, 'beforeend', `<span class="card-letter-maxlengthfull">${maxLengthFull}</span>`);
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

        function onFocus(row, numberFocus) {
            row.selectionStart = numberFocus;
            row.selectionEnd = numberFocus;
            setTimeout(() => row.focus(), 0);
        }

        function memoryLetter() {
            let arrayLetterText = [];
            for (let i = 1; i <= numberRows; i++) {
                const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                arrayLetterText.push(elemRowCurrent.value);
            }
            return arrayLetterText;
        }

        function newLetter(arrayLetterText, eventKey, rowFocus, pointFocus) {
            delRows();
            numberRows = ++numberRows;
            fontSize = fontSize*0.92;
            maxLengthRow = parseInt(maxLengthRow*1.2);
            startRows(numberRows, fontSize.toFixed(2), maxLengthRow);
            addText(arrayLetterText, eventKey);
            optimizationLetter(1, pointFocus);
            const elemRowCurrent = document.querySelector(`.letter-row-${rowFocus}`);
            elemRowCurrent.classList.add('row-focus');
            onFocus(elemRowCurrent, pointFocus);
            document.querySelector('.card-letter-maxlength').textContent = String(maxLengthRow);
        }

        function delRows() {
            elemLetterArea.classList.remove('created');
            const elemCardLetterRow = document.querySelectorAll('.card-letter-row');
            elemCardLetterRow.forEach((el) => {
                el.remove();
            })
        }

        function addText(arrayLetterText, eventKey) {   
            for (let i = 1; i < numberRows; i++) {
                const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                if (i == arrayLetterText.length) {
                    elemRowCurrent.value = arrayLetterText[i - 1] + eventKey;
                    // elemRowCurrent.classList.add('row-focus');
                    // onFocus(elemRowCurrent, arrayLetterText[i - 1].length + 1)
                } else {
                    elemRowCurrent.value = arrayLetterText[i - 1];
                }
            }
        }

        function optimizationLetter(startRow, pointFocus) {
            console.log('pointFocus: ', pointFocus);
            const firstStartRow = startRow;

            for (let i = startRow; i <= numberRows; i++) {             
                function optimizationRow(startRow, pointFocus) {
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
                            if (elemRowCurrent.value != '' && elemRowCurrent.value[elemRowCurrent.value.length - 1] != ' ') {
                                elemRowCurrent.value = elemRowCurrent.value + ' ';
                                temporaryRow = elemRowCurrent.value;
                            } else {
                                temporaryRow = elemRowCurrent.value;
                            }
                            if (i == firstStartRow) {
                                onFocus(elemRowCurrent, pointFocus);
                            }
                        } else {
                            const elemRowPrevious = document.querySelector(`.letter-row-${i - 1}`);
                            const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                            const arrayRowCurrent = elemRowCurrent.value.split(' ');
                            let temporaryText;
                            for (let index = 0; index < arrayRowCurrent.length; index++) {
                                if (index == 0) {
                                    if (arrayRowCurrent[index].length <= maxLengthRow - temporaryRow.length) {
                                        if (index == arrayRowCurrent.length - 1) {
                                            elemRowPrevious.value = elemRowPrevious.value + elemRowCurrent.value;
                                            onFocus(elemRowPrevious, pointFocus);
                                            elemRowCurrent.value = '';
                                            temporaryRow = elemRowCurrent.value;
                                        } else {
                                            temporaryText = arrayRowCurrent[index];
                                        }
                                    } else {
                                        temporaryRow = elemRowCurrent.value;
                                        break;
                                    }
                                } else {
                                    if (temporaryText.length + arrayRowCurrent[index].length < maxLengthRow - temporaryRow.length) {
                                        if (index == arrayRowCurrent.length - 1) {
                                            elemRowPrevious.value = elemRowPrevious.value + elemRowCurrent.value;
                                            onFocus(elemRowPrevious, pointFocus);
                                            elemRowCurrent.value = '';
                                        } else {
                                            temporaryText = temporaryText + ' ' + arrayRowCurrent[index];
                                        } 
                                    } else {
                                        elemRowPrevious.value = elemRowPrevious.value + temporaryText;
                                        onFocus(elemRowPrevious, pointFocus);
                                        elemRowCurrent.value = arrayRowCurrent.slice(index).join(' ');
                                        temporaryRow = elemRowCurrent.value;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }  
                optimizationRow(i, pointFocus);
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

        function validationKey(event, el) {
            let elemNumberRow = Number(event.target.getAttribute('data-row'));
            let elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);

            if (event.code === 'Backspace' || event.keyCode === 8) {
                const elemRowPrevious = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                const elemRowCurrent = document.querySelector(`.letter-row-${elemNumberRow}`);
                const pointFocusPrevious = elemRowPrevious.value.length;
                const pointFocusCurrent = event.target.selectionStart;

                if (
                    event.target.selectionStart ==  0 && 
                    elemRowPrevious.value == '' &&
                    elemNumberRow > 1
                ) {
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
                    onFocus(elemRowPrevious, pointFocusPrevious);
                }
    
                if (event.target.selectionStart == 0 && elemNumberRow > 1) {                  
                    optimizationLetter(elemNumberRow - 1, pointFocusPrevious);
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
                console.log('full stack!')
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

            if ((event.code === 'ArrowDown' || event.keyCode === 40) &&
                elemNumberRow != numberRows
            ) {
                let lastFullRow;
                for (let i = numberRows; i > elemNumberRow; i--) {
                    if (document.querySelector(`.letter-row-${i}`).value != '') {
                        lastFullRow = i;
                    }
                }

                if (elemNumberRow <= lastFullRow) {
                    elemCardLetterRowBlur.classList.remove('row-focus');
                    const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                    elemCardLetterRowFocus.classList.add('row-focus');
                    onFocus(elemCardLetterRowFocus, event.target.selectionStart);
                }
            }
            
            if ((event.code === 'ArrowUp' || event.keyCode === 38) && 
                elemNumberRow != 1
            ) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                onFocus(elemCardLetterRowFocus, event.target.selectionStart);
            }

            if (
                (event.code === 'ArrowLeft' || event.keyCode === 37) &&
                event.target.selectionStart == 0 &&
                elemNumberRow != 1
            ) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow - 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                onFocus(elemCardLetterRowFocus, elemCardLetterRowFocus.value.length);
            }

            if (
                (event.code === 'ArrowRight' || event.keyCode === 39) &&
                event.target.selectionStart == event.target.value.length &&
                elemNumberRow != numberRows
            ) {
                elemCardLetterRowBlur.classList.remove('row-focus');
                const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`);
                elemCardLetterRowFocus.classList.add('row-focus');
                onFocus(elemCardLetterRowFocus, 0);
            }

            if (event.code === 'Enter' || event.keyCode === 13) {
                const pointFocus = event.target.selectionStart; 
                let transferRow;
                let temporaryRow;

                for (let i = elemNumberRow; i <= numberRows; i++) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`)
                    if (i == elemNumberRow) {
                        if (elemNumberRow != numberRows) {
                            elemRowCurrent.classList.remove('row-focus');
                            transferRow = elemRowCurrent.value.slice(pointFocus);
                            elemRowCurrent.value = elemRowCurrent.value.slice(0, pointFocus);
                        } else {
                            newLetter()
                        }
                    } else {
                        temporaryRow = elemRowCurrent.value;
                        elemRowCurrent.value = transferRow;
                        transferRow = temporaryRow;
                    }
                    if (i == elemNumberRow + 1) {
                        onFocus(elemRowCurrent, 0);
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
                // let arrayLetterText = [];
                // for (let i = 1; i <= numberRows; i++) {
                //     const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                //     arrayLetterText.push(elemRowCurrent.value);
                // }
                newLetter(arrayLetterText, event.key, numberRows + 1, 0);
            }

            if (event.code === 'NumpadDecimal' || event.keyCode === 46) {
                const pointFocus = event.target.selectionStart;
                if (event.target.selectionStart == event.target.value.length) {
                    if (
                        document.querySelector(`.letter-row-${elemNumberRow}`).value == '' ||
                        document.querySelector(`.letter-row-${elemNumberRow + 1}`).value == ''
                    ) {
                        let transferRow;
                        let temporaryRow;
                        for (let i = numberRows; i >= elemNumberRow; i--) {
                            const elemRowCurrent = document.querySelector(`.letter-row-${i}`)
                            if (i == numberRows) {
                                transferRow = elemRowCurrent.value;
                                elemRowCurrent.value = '';
                            } else {
                                temporaryRow = elemRowCurrent.value;
                                elemRowCurrent.value = transferRow;
                                transferRow = temporaryRow;
                            }
                            if (i == elemNumberRow) {
                                elemRowCurrent.value = ' ' + elemRowCurrent.value;
                                onFocus(elemRowCurrent, pointFocus);
                            }
                        }
                    } else {
                        optimizationLetter(elemNumberRow, pointFocus);
                    }
                }
            }
        }
       
        elemCardLetterRow.forEach(el => {
            if (el.classList.contains('letter-row-0')) {
                el.focus();
                el.classList.add('row-focus');
            }

            let pointerDown;
            let elemMouseDown; 
            let numberRowMouseDown;  
            let numberRowMouseNext;
            
            function onMouseMove(event, eventMouse) {
                // console.log('onmousemove: ', document.elementFromPoint(event.clientX, event.clientY));
                // const elemRow = document.elementFromPoint(event.clientX, event.clientY);
                // event.preventDefault();
                // function cancelMove() {
                // }
                // setTimeout(cancelMove, 300);
                if (eventMouse) {
                    // console.log('preventdefault!!');
                    event.preventDefault();
                }
                // if (!elemRow) return;               
                // console.log(elemRow);    
            }
            
            function onMouseDown(event) {
                elemMouseDown = event.target;
                numberRowMouseDown = event.target.getAttribute('data-row');
                // console.log('mouseDown event: ', event);
                // console.log('elemMouseDown2: ', elemMouseDown);
                // console.log('selectionStart: ', event.target.selectionStart);
                // console.log(pointerDown);
                // const numberRow = event.target.getAttribute('data-row');
                // console.log('onmousedown: ', document.elementFromPoint(event.clientX, event.clientY));
                // const elemRowLast = document.querySelector(`.letter-row-${numberRow - 1}`);
                document.elementFromPoint(event.clientX, event.clientY);
            }
            
            function onMouseUp(event) {
                elemMouseDown = null;
                // console.log('elemMouseDown3: ', elemMouseDown);
                // console.log('onmouseup: ', document.elementFromPoint(event.clientX, event.clientY));
                // console.log('onmouseup-selectionend: ', event.target.selectionEnd);
                // const elemRow = document.elementFromPoint(event.clientX, event.clientY);
                // if (!elemRow) return;               
                // console.log(elemRow);    
            }
            
            let textLeft;
            let textRight;
            
            if (elemMouseDown) {
                // console.log('elemMouseDown: ', elemMouseDown);
            }

            function onMouseOver(event) {
                // console.log('elemMouseDown4: ', elemMouseDown);

                // console.log('onmouseover: ', document.elementFromPoint(event.clientX, event.clientY));

                const elemRowNext = document.elementFromPoint(event.clientX, event.clientY);
                numberRowMouseNext = event.target.getAttribute('data-row');
                elemRowNext.focus();
                // textLeft = event.target.value.slice(0, )
                // if (!elemRow) return;               
                // console.log(elemRow);    
            }
            
            function onMouseOut(event) {
                // console.log('onmouseout: ', document.elementFromPoint(event.clientX, event.clientY));
                // onMouseDown(event, true);
                // onMouseMove(event);
                // if ()
                // el.setSelectionRange(pointerDown, el.value.length);
                // const elemRow = document.elementFromPoint(event.clientX, event.clientY);
                // if (!elemRow) return;               
                // console.log(elemRow);    
            }
            
            function onSelect(event) {
                // console.log('select event: ', event);
                pointerDown = event.target.selectionStart;
                // console.log('start: ', event.target.selectionStart);
                // console.log('end: ', event.target.selectionEnd);
            }

            if (numberRowMouseDown) {
                // console.log('654dcfsdf564');
                // if (numberRowMouseNext > numberRowMouseDown) {
                //     elemMouseDown.setSelectionRange(pointerDown, el.value.length);
                // } else {
                //     elemMouseDown.setSelectionRange(0, pointerDown);
                // }
            }

            // el.addEventListener('mousemove', onMouseMove);
            // el.addEventListener('mousedown', onMouseDown, true);
            // el.addEventListener('mouseup', onMouseUp);
            // el.addEventListener('mouseover', onMouseOver);           
            // el.addEventListener('mouseout', onMouseOut);
            // el.addEventListener('select', onSelect);

            el.addEventListener('keydown', (event) => validationKey(event, el));
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
            console.log('start');
            maxLengthRow = max;
            numberRows = rows;
            fontSize = size;
            addRows(numberRows, fontSize, maxLengthRow);
            showMaxLength(numberRows);
        }
    }
    setTimeout(() => startRows(10, 2.2, 22), 200);
}
import { newElemHTML } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";

export function formationLetterArea() {
    const elemLetterArea = document.querySelector('.card-letter-area');
    let numberRows;
    let fontSize;

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
        let numberRowFocus;
        
        function goRowFocus(el) {
            elemCardLetterRow.forEach(el => {
                if (el.classList.contains('row-focus')) el.classList.remove('row-focus');
            })

            numberRowFocus = Number(el.getAttribute('data-row'));
            const elemNumberRowFocus = document.querySelector(`.letter-row-${numberRowFocus}`);

            elemNumberRowFocus.classList.add('row-focus');
        }

        function optimizationText() {
            let sizeFree;

            for (let i = 1; i < numberRows; i++) {
                const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                const elemRowNext = document.querySelector(`.letter-row-${i + 1}`);
                const arrayRowNext = elemRowNext.value.split(' ');
                sizeFree = maxLengthRow - elemRowCurrent.value.length - 1;
                let temporaryText;
                console.log('row: ', i);
                console.log('0 arrayRowNext: ', arrayRowNext);
                
                for (let index = 0; index < arrayRowNext.length; index++) {
                    console.log('*', arrayRowNext[index].length, ':', sizeFree);
                    if (arrayRowNext[index].length <= sizeFree) {
                        console.log('**');
                        if (index == 0) {
                            if (index == arrayRowNext.length - 1) {
                                console.log('***');
                                console.log('1. temporaryText: ', temporaryText);
                                if (elemRowCurrent.value == '') {
                                    elemRowCurrent.value = arrayRowNext[index];
                                } else {
                                    elemRowCurrent.value = elemRowCurrent.value + ' ' + arrayRowNext[index];
                                }
                                elemRowNext.value = '';
                                temporaryText = null;
                            } else {
                                console.log('****');
                                temporaryText = arrayRowNext[index];
                                console.log('2. temporaryText: ', temporaryText);
                            }
                        } else {
                            if (index == arrayRowNext.length - 1) {
                                console.log('*****');
                                console.log('3. temporaryText: ', temporaryText);
                                elemRowCurrent.value = elemRowCurrent.value + ' ' + temporaryText;
                                elemRowNext.value = '';
                                temporaryText = null;
                            } else {
                                console.log('******');
                                console.log('4. temporaryText: ', temporaryText);
                                temporaryText = temporaryText + ' ' + arrayRowNext[index]; 
                            }
                        }
                    } else {
                        console.log('*******');
                        elemRowCurrent.value = elemRowCurrent.value + ' ' + temporaryText;
                        elemRowNext.value = arrayRowNext.slice(index).join(' ');
                        temporaryText = null;
                        break;
                    }
                }

            }
        }

        function validationKey(event, el) {
            const elemNumberRow = numberRowFocus;
            let elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);
            const lengthText = event.target.value.length;  
            elemTextAreaCounter.textContent = lengthText;

            if (event.code === 'Escape' || event.keyCode === 27) {
                console.log('escape!');
                optimizationText();
            }

            if (event.target.value.length >= maxLengthRow && 
                !(
                    event.code === 'Backspace' || event.keyCode === 8 ||
                    event.code === 'ArrowLeft' || event.keyCode === 37 ||
                    event.code === 'ArrowUp' || event.keyCode === 38 || 
                    event.code === 'ArrowRight' || event.keyCode === 39 || 
                    event.code === 'ArrowDown' || event.keyCode === 40 ||
                    event.code === 'Tab' || event.keyCode === 9
                )) { 

                let temporaryPointFocus;
                let transitionTextCut;
                let arrayRowCurrent;
                let interimText;
                let interimLetter;
                let changeFocus;

                if (event.target.classList.contains('transfer-one-letter')) {
                    interimLetter = 1;
                }
                
                for (let i = elemNumberRow; i < numberRows; i++) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                    arrayRowCurrent = elemRowCurrent.value.split(' ');
                    let interimWord;
                    
                    if (transitionTextCut) {
                        
                        if (transitionTextCut.length == 1) {
                            if (interimLetter == 1) {
                                interimText = transitionTextCut + elemRowCurrent.value;
                            } else {
                                interimText = transitionTextCut + ' ' + elemRowCurrent.value;
                                interimLetter = 1;
                            }
                        } else {
                            interimText = transitionTextCut + ' ' + elemRowCurrent.value;
                        }
                        
                        if (interimText.length > maxLengthRow) {
                            const arrayIterimText = interimText.split(' ');
                            
                            for (let i = arrayIterimText.length; i > 0; i--) {  
                                
                                if (!interimWord) {
                                    interimWord = arrayIterimText.pop();
                                } else {
                                    interimWord = arrayIterimText.pop() + ' ' + interimWord;
                                }

                                if (arrayIterimText.join(' ').length > maxLengthRow) {
                                    continue;
                                } else {
                                    elemRowCurrent.value = arrayIterimText.join(' ');
                                    transitionTextCut = interimWord;
                                    interimWord = null;
                                    break;
                                }
                            }
                            
                        } else {
                            elemRowCurrent.value = interimText;
                            transitionTextCut = null;
                        }
                    }

                    if (event.target.value.length >= maxLengthRow && event.target.getAttribute('data-row') == i) {    
                        for (let ind = arrayRowCurrent.length; ind > 0; ind--) { 
                            transitionTextCut = arrayRowCurrent.pop();

                            if (arrayRowCurrent.length == 0) {
                                temporaryPointFocus = event.target.selectionStart;
                                transitionTextCut = elemRowCurrent.value.at(-1);
                                elemRowCurrent.value = elemRowCurrent.value.slice(0, maxLengthRow - 1);
                                changeFocus = i;
                                elemRowCurrent.classList.add('transfer-one-letter');
                                break;
                            }
                            
                            if (event.target.selectionStart <= arrayRowCurrent.join(' ').length) {
                                temporaryPointFocus = event.target.selectionStart;
                                changeFocus = i;
                            } else {
                                changeFocus = i + 1;
                                
                                if (event.target.selectionStart == maxLengthRow) {
                                    temporaryPointFocus = transitionTextCut.length;
                                } else {
                                    temporaryPointFocus = event.target.selectionStart - arrayRowCurrent.join(' ').length - 1;
                                }
                            }

                            elemRowCurrent.value = arrayRowCurrent.join(' ');
                            break;
                        }
                    } 

                    if (i == changeFocus) {
                        elemRowCurrent.selectionStart = temporaryPointFocus;
                        elemRowCurrent.selectionEnd = temporaryPointFocus;
                        elemRowCurrent.focus();
                        changeFocus = null;
                        temporaryPointFocus = null;
                    }
                }    
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

            function addText(arrayLetterText) {   
                for (let i = 1; 1 <= numberRows; i++) {
                    console.log('numberRows: ', numberRows);
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                    if (i == numberRows) {
                        elemRowCurrent.selectionStart = 0;
                        elemRowCurrent.selectionEnd = 0;
                        elemRowCurrent.classList.add('row-focus');
                        elemRowCurrent.focus();
                        break;
                    } else {
                        elemRowCurrent.value = arrayLetterText[i - 1];
                    }
                }
            }

            if (Number(el.getAttribute('data-row')) == numberRows && event.target.selectionStart == maxLengthRow) {
                console.log('last row!!');
                let arrayLetterText = [];

                for (let i = 1; i <= numberRows; i++) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`); 
                    arrayLetterText.push(elemRowCurrent.value);
                }
                
                const elemRow = document.querySelector('.card-letter-row');
                delRows();
                numberRows = ++numberRows;
                console.log('font-size: ', elemRow.getAttribute("style"));
                fontSize = fontSize*0.92;
                setTimeout(() => startRows(numberRows, fontSize.toFixed(2)), 0);
                setTimeout(() => addText(arrayLetterText), 0);
            }

            if (event.code === 'Backspace' || event.keyCode === 8) {
                const pointFocus = event.target.selectionStart; 
                    
                for (let i = elemNumberRow; i <= numberRows; i++) {
                    const elemRowPrevious = document.querySelector(`.letter-row-${i - 1}`);
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                    
                    if (i == elemNumberRow && pointFocus == 0 && elemNumberRow > 1) {
                        elemRowCurrent.classList.remove('row-focus');
                        
                        if (elemRowPrevious.value != '') {
                            if (elemRowCurrent.value != '') {
                                const arrayRowCurrent = elemRowCurrent.value.split(' '); 
                                let elemRowPreviousFocus = document.querySelector(`.letter-row-${i - 1}`).value.length;
                                for (let index = 0; index < arrayRowCurrent.length; index++) {
                                    if (arrayRowCurrent[index].length <= maxLengthRow - document.querySelector(`.letter-row-${i - 1}`).value.length) {
                                        document.querySelector(`.letter-row-${i - 1}`).value = document.querySelector(`.letter-row-${i - 1}`).value + ' ' + arrayRowCurrent[index];
                                        elemRowPrevious.selectionStart = elemRowPreviousFocus + 1;
                                        elemRowPrevious.selectionEnd = elemRowPreviousFocus + 1;
                                        document.querySelector(`.letter-row-${i}`).value = arrayRowCurrent.slice(index + 1, arrayRowCurrent.length).join(' ');
                                        if (index == arrayRowCurrent.length - 1) {
                                            for (let i = elemNumberRow; i < numberRows; i++) {                                
                                                document.querySelector(`.letter-row-${i}`).value = document.querySelector(`.letter-row-${i + 1}`).value;
                                            }   
                                        }
                                    } else {
                                        document.querySelector(`.letter-row-${i - 1}`).value = document.querySelector(`.letter-row-${i - 1}`).value + ' ';
                                    }
                                }                                  
                            } else {
                                for (let i = elemNumberRow; i <= numberRows; i++) {   
                                    if (i == elemNumberRow) {
                                        document.querySelector(`.letter-row-${i - 1}`).value = document.querySelector(`.letter-row-${i - 1}`).value + ' ';
                                    } else {
                                        document.querySelector(`.letter-row-${i - 1}`).value = document.querySelector(`.letter-row-${i}`).value;
                                    }                           
                                }
                            }
                            
                        }
                        
                        if (elemRowPrevious.value == '') {
                            for (let i = elemNumberRow; i <= numberRows; i++) {      
                                document.querySelector(`.letter-row-${i - 1}`).value = document.querySelector(`.letter-row-${i}`).value;
                                if (i == numberRows) {
                                    document.querySelector(`.letter-row-${i}`).value = '';
                                }                          
                            }                          
                            elemRowPrevious.selectionStart = 0;
                            elemRowPrevious.selectionEnd = 0;
                        }
                        
                        elemRowPrevious.classList.add('row-focus');
                        elemRowPrevious.focus();
                    }
                }
            }

            if (
                event.code === 'NumpadDecimal' || 
                event.keyCode === 46 &&
                event.target.selectionStart == event.target.value.length
                ) {
                const pointFocus = event.target.selectionStart;

                for (let i = elemNumberRow; i < numberRows; i++) {                    
                    if (i == elemNumberRow) {
                        const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                        const elemRowNext = document.querySelector(`.letter-row-${i + 1}`);
                        const arrayRowNext = elemRowNext.value.split(' ');
                        let textCut;

                        for (let index = 0; index < arrayRowNext.length; index++) {

                            if (index == 0) {
                                if (maxLengthRow >= pointFocus + arrayRowNext[index].length) {
                                    if (arrayRowNext.length == 1) {
                                        elemRowCurrent.value = elemRowCurrent.value + ' ' + arrayRowNext[index];
                                    } else {
                                        textCut = arrayRowNext[index];
                                    }
                                } else {
                                    elemRowCurrent.value = elemRowCurrent.value + ' ' + arrayRowNext[index][0];
                                    elemRowNext.value = elemRowNext.value.slice(1); 
                                    break;
                                }
                            } else {
                                if (maxLengthRow >= pointFocus + ' ' + textCut.length + ' ' + arrayRowNext[index].length) {
                                    textCut = textCut + ' ' + arrayRowNext[index];
                                } else {
                                    elemRowCurrent.value = elemRowCurrent.value + ' ' + textCut;
                                    elemRowNext.value = elemRowNext.value.slice(index); 
                                    break; 
                                }
                            }

                        }

                        elemRowCurrent.selectionStart = pointFocus;
                        elemRowCurrent.selectionEnd = pointFocus;
                        elemRowCurrent.focus();
                    } else {
                        document.querySelector(`.letter-row-${i}`).value = document.querySelector(`.letter-row-${i + 1}`).value;
                        if (i == numberRows - 1) {
                            document.querySelector(`.letter-row-${i + 1}`).value = '';
                        } 
                    }
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
    
    function addRows(numberRows, fontSize) {
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);

        for (let i = 1; i <= numberRows; i++) {
            newElemHTML(
                elemLetterArea, 
                'beforeend', 
                `<input class="card-letter-row letter-row-${i}" type="text" data-row="${i}" maxlength="20" style="height: ${heightRow}px; font-size: ${fontSize}rem;">`
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

    function startRows(rows, size) {
        if (elemLetterArea.classList.contains('created')) {
            console.log('restart');
        } else {
            console.log('start');
            numberRows = rows;
            fontSize = size;
            addRows(numberRows, fontSize);
            showMaxLength(numberRows);
        }
    }

    setTimeout(() => startRows(10, 2.2), 200);
}
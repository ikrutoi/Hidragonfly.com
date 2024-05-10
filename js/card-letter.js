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
        let numberRowFocus;
        
        function goRowFocus(el) {
            elemCardLetterRow.forEach(el => {
                if (el.classList.contains('row-focus')) el.classList.remove('row-focus');
            })

            numberRowFocus = Number(el.getAttribute('data-row'));
            const elemNumberRowFocus = document.querySelector(`.letter-row-${numberRowFocus}`);

            elemNumberRowFocus.classList.add('row-focus');
        }

        function validationKey(event, el) {
            const elemNumberRow = numberRowFocus;
            let elemCardLetterRowBlur = document.querySelector(`.letter-row-${elemNumberRow}`);
            const elemCardLetterRowFocus = document.querySelector(`.letter-row-${elemNumberRow + 1}`)

            const lengthText = event.target.value.length;  
            elemTextAreaCounter.textContent = lengthText;

            if (
                event.code === 'NumpadDecimal' || event.keyCode === 46 
            ) {
                const pointFocus = event.target.selectionStart;
                let arrayRowCurrent;
                let arrayRowNext;
                let transitionTextCut;
                let restText;
                let tailRow;

                for (let i = elemNumberRow; i < numberRows; i++) {
                    const elemRowCurrent = document.querySelector(`.letter-row-${i}`);
                    const elemRowNext = document.querySelector(`.letter-row-${i + 1}`);
                    
                    arrayRowCurrent = elemRowCurrent.value.split(' ');
                    arrayRowNext = elemRowNext.value.split(' ');
                    tailRow = maxLengthRow - elemRowCurrent.value.length;
                    
                    if (!(elemRowNext.value == 0)) {
                        for (let i = 0; i < arrayRowNext.length; i++) {
                            if (!transitionTextCut) {
                                transitionTextCut = arrayRowNext[i];
                                restText = arrayRowNext.slice(i + 1, arrayRowNext.length);    
                                if (transitionTextCut.length <= tailRow) {
                                    continue;
                                } else break;
                            } else {
                                transitionTextCut = transitionTextCut + ' ' + arrayRowNext[i];
                                if (transitionTextCut.length <= tailRow) {
                                    restText = arrayRowNext.slice(i + 1, arrayRowNext.length);
                                    continue;
                                } else {
                                    let temporaryTransitionTextCut = transitionTextCut.split(' ');
                                    temporaryTransitionTextCut = temporaryTransitionTextCut.slice(0, temporaryTransitionTextCut.length - 1);
                                    transitionTextCut = temporaryTransitionTextCut.join(' ');
                                    restText = arrayRowNext.slice(i, arrayRowNext.length);
                                    temporaryTransitionTextCut = null;
                                    break;
                                };
                            }
                        }
                        
                        if (transitionTextCut && i == elemNumberRow) {
                            elemRowCurrent.value = elemRowCurrent.value + ' ' + transitionTextCut;
                            elemRowNext.value = restText.join(' ');
                            elemRowCurrent.selectionStart = pointFocus;
                            elemRowCurrent.selectionEnd = pointFocus;
                            elemRowCurrent.focus();
                        } else {
                            elemRowCurrent.value = elemRowCurrent.value + ' ' + transitionTextCut;
                            elemRowNext.value = restText.join(' ');
                        }

                        transitionTextCut = null;
                        restText = null;
                    } else continue;
                }
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
                    console.log('row: ', i)
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
        }

        // function goRowFocus(el) {
        //     elemCardLetterRow.forEach(el => {
        //         if (el.classList.contains('row-focus')) el.classList.remove('row-focus');
        //     })

        //     numberRowFocus = Number(el.getAttribute('data-row'));
        //     // console.log('focus!!:', numberRowFocus);
        //     const elemNumberRowFocus = document.querySelector(`.letter-row-${numberRowFocus}`);

        //     elemNumberRowFocus.classList.add('row-focus');
        // }

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
    
    function addRows(numberRows) {
        const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
        const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);
        // const lineHeightRow = (areaTextHeight / numberRows).toFixed(2);

        for (let i = 1; i <= numberRows; i++) {
            newElemHTML(
                elemLetterArea, 
                'beforeend', 
                `<input class="card-letter-row letter-row-${i}" type="text" data-row="${i}" maxlength="20" style="height: ${heightRow}px;">`
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
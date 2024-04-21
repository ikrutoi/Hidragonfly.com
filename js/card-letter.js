import { newElem } from "./new-element.js";
import { startPressActivation } from "./start-press-activation.js";
// import { addRows } from "./card-letter-add-rows.js";
// import { delRows } from "./card-letter-add-rows.js";
// import { recordNewValueFontSize } from "./card-letter-add-rows.js";

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
                        fontSizeTextArea = sessionStorage.getItem('card-letter--font-size');
                        console.log('restart', fontSizeTextArea);
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        break;
                    case 'minus':
                        fontSizeTextArea = (parseFloat(fontSizeTextArea) / 1.08).toFixed(2);
                        console.log('minus', fontSizeTextArea);
                        value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
                        break;
                    case 'plus':
                        fontSizeTextArea = (parseFloat(fontSizeTextArea) * 1.08).toFixed(2);
                        console.log('plus', fontSizeTextArea);
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
          














    // function delRows() {
    //     elemTextArea.classList.remove('created');

    //     const rowTextArea = document.querySelectorAll('.text-area-row');
        
    //     rowTextArea.forEach((el) => {
    //         el.remove();
    //     })
    // }
        
    // function addRows(numberRows) {
    //     const elemLetterArea = document.querySelector('.card-letter-area');
    //     const areaTextHeight = elemLetterArea.getBoundingClientRect().height;
    //     const heightRow = ((areaTextHeight - numberRows * 2) / numberRows).toFixed(2);
        
    //     for (let i = 0; i < numberRows; i++) {
    //         console.log(heightRow);
    //         newElem(
    //             elemLetterArea, 
    //             'div', 
    //             ['text-area-row'], 
    //             [['style', `height: ${heightRow}px;`]]
    //         );
    //     }

    //     elemTextArea.classList.add('created');
    // }

    // function recordNewValueFontSize(operator) { 
    //     const stylesheet = document.styleSheets[0];
    
    //     for (const value of stylesheet.cssRules) {
    //         if(value.selectorText === '.card-letter-textarea') {
    //             switch (operator) {
    //                 case 'minus':
    //                     fontSizeTextArea = (parseFloat(fontSizeTextArea) / 1.08).toFixed(2);
    //                     value.style.setProperty('font-size', `${fontSizeTextArea}px`);
    //                     sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}px`);
    //                     break;
    //                 case 'plus':
    //                     fontSizeTextArea = (parseFloat(fontSizeTextArea) * 1.08).toFixed(2);
    //                     value.style.setProperty('font-size', `${fontSizeTextArea}px`);
    //                     sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}px`);
    //                     break;
    //             }
    //         }         
    //     }
    // }

    // console.log(getComputedStyle(textArea));

        // function getNumberRows(operator) {
        //     let numberRows;

        //     switch (operator) {
        //         case 'start':
        //             numberRows = 15;
        //             break;
        //         case 'plus':
        //             numberRows = numberRows + 1;
        //             break;
        //     }

        //     return numberRows;
        // }

        // function getRows(oper) {
        //     let numberRows;

        //     if (oper == 'start') {
        //         numberRows = 15;
        //     }

        //     if (oper == 'plus') {
        //         numberRows = ++numberRows;
        //     }

        //     return numberRows;
        // }
        
        // function startRow(numberRows) {
        //     numberRows = 15;
        //     addRows(numberRows)
        // }
        
        // function plusRow() {
            
            // }
            
            // function minusRow() {
                
                // }
                
                
                
                // switch (operator) {
                //     case 'start': 
                //     console.log('start');
                //     numberRows = 15;
                //     console.log('getNumberRows', numberRows);
                //     // numberRows = getNumberRows(15)
                //     addRows(numberRows);
                //     break;
                //     case 'plus':
                //         console.log('plus');
                //         numberRows = --numberRows;
                //         console.log('numberRows', numberRows);
                //         // fontSizeTextArea = (fontSizeTextArea * 1.08).toFixed(2);
                //         // lineHeightTextArea = (lineHeightTextArea * 1.08).toFixed(2);
                        
                //         delRows();
                //         addRows(numberRows);
                //         break;
                //     }
                    
                    
                    
                    
                // }
                
                
                // createRows('start');
                
                // console.log('font', fontSizeTextArea, 'line-height', lineHeightTextArea, 'areaHeight', areaTextHeight);
                
                
                // for (let i = 0; i < numberRowsInArea; i++) {
                    //     newElem(
                        //         elemLetterArea, 
                        //         'div', 
                        //         ['text-area-row'], 
                        //         [['style', `height: ${lineHeightTextArea}px;`]]
                        //     );
                        // } 
                        
        // function recordNewValueFontSize(operator) { 
        //     const stylesheet = document.styleSheets[0];
        
        //     for (const value of stylesheet.cssRules) {
            
        //         if(value.selectorText === '.card-letter-textarea') {
        //             switch (operator) {
        //                 case 'start':
        //                     fontSizeTextArea = parseFloat(fontSizeTextArea);
        //                     sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
        //                     break;
        //                 case 'minus':
        //                     fontSizeTextArea = parseFloat(fontSizeTextArea) / 1.08;
        //                     value.style.setProperty('font-size', `${fontSizeTextArea}px`);
        //                     sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
        //                     break;
        //                 case 'plus':
        //                     fontSizeTextArea = parseFloat(fontSizeTextArea) * 1.08;
        //                     value.style.setProperty('font-size', `${fontSizeTextArea}px`);
        //                     sessionStorage.setItem('card-letter--font-size', `${fontSizeTextArea}`);
        //                     break;
        //             }
        //         }         
        //     }
        // }
                
                // const maxNumberRows = 18;
                // const minNumberRows = 5;
                
                // function startCreateRows() {
                    //     if(!elemLetterArea.classList.contains('create-rows')) {
                        //         createRows(lineHeightTextArea);
                        //     }
                        // }
                        
                        // function removeRows() {
        //     elemLetterArea.classList.remove('create-rows');
        //     const rowTextArea = document.querySelectorAll('.text-area-row');
        
        //     rowTextArea.forEach((el) => {
            //         el.remove();
            //     })
            // }
            
            // function plusRowSize() {
                //     startPressActivation(buttonSizePlus);
                
                //     // console.log('font1', fontSizeTextArea, 'line-height', lineHeightTextArea)
                
                //     fontSizeTextArea = (fontSizeTextArea * 1.08).toFixed(2);
                //     lineHeightTextArea = (lineHeightTextArea * 1.08).toFixed(2);
                
                //     const numberRowsInArea = Math.floor(areaTextHeight / lineHeightTextArea);
                
                //     createRows(fontSizeTextArea, lineHeightTextArea)
                
                // console.log('font2', fontSizeTextArea, 'line-height', lineHeightTextArea);
                // const stylesheet = document.styleSheets[0];
                
                // for (const value of stylesheet.cssRules) {
                    //     if(value.selectorText === '.card-letter-textarea') {
                        //         value.style.setProperty('font-size', `${fontSizeTextArea}px`);
                        //     }
                        
                        // }
                        
                        // console.log('font2', fontSizeTextArea, 'line-height', lineHeightTextArea);
                        
                        // startNumberRows = startNumberRows - 1;
                        
                        // if(startNumberRows <= maxNumberRows && startNumberRows >= minNumberRows) {
                            //     removeRows();
                            //     takeSize(startNumberRows);
                            //     recordNewValueFontSize('plus');
                            // } else startNumberRows = startNumberRows + 1;
                            // }
                            
                            // function minusRowSize() {
                                //     startPressActivation(buttonSizeMinus);
                                
                                //     startNumberRows = startNumberRows + 1;
                                
                                //     if(startNumberRows <= maxNumberRows && startNumberRows >= minNumberRows) {
                                    //         removeRows();
                                    //         takeSize(startNumberRows);
                                    //         recordNewValueFontSize('minus');
                                    //     } else startNumberRows = startNumberRows - 1;
                                    // }
                                    
        
//     elemTextArea.addEventListener('change', () => {sessionStorage.setItem('card-letter--text', `${elemTextArea.value}`)});
    
//     if (sessionStorage.getItem('card-letter--text')) {
//         elemTextArea.value = sessionStorage.getItem('card-letter--text');
//         elemTextArea.fontSize = sessionStorage.getItem('card-letter--font-size');


//     }
    
//     let numberRows;
    
//     function startRows() {
//         numberRows = 15;

//         addRows(numberRows);
//     }

//     if (!elemTextArea.classList.contains('created')) {
//         setTimeout(startRows, 300);
//     } 
    
//     function rowsMinus() {
//         numberRows = --numberRows;
        
//         if (numberRows > 6) {
//             startPressActivation(buttonSizePlus);
//             delRows();
//             addRows(numberRows);
//             recordNewValueFontSize('plus');
//             sessionStorage.setItem('card-letter--number-rows', `${numberRows}`);
//         }
//     }
    
//     function rowsPlus() {
//         numberRows = ++numberRows;
        
//         if (numberRows < 19) {
//             startPressActivation(buttonSizeMinus);
//             delRows();
//             addRows(numberRows);
//             recordNewValueFontSize('minus');
//             sessionStorage.setItem('card-letter--number-rows', `${numberRows}`);
//         }
//     }
    
//     const buttonSizePlus = document.querySelector('.nav-additional-size-plus');  
//     buttonSizePlus.addEventListener('pointerdown', rowsMinus);
    
//     const buttonSizeMinus = document.querySelector('.nav-additional-size-minus');       
//     buttonSizeMinus.addEventListener('pointerdown', rowsPlus);
// };
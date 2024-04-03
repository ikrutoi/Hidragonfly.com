import { newElem } from "./new-element.js";

export function formationLetterArea() {
    
    function takeSize(startRows) {
        const areaText = document.querySelector('.card-letter-area');
        const areaTextHeight = areaText.getBoundingClientRect().height;
        const areaTextWidth = areaText.getBoundingClientRect().width;
        areaText.style.maxWidth = areaTextWidth + 'px'; 
        areaText.style.maxHeight = areaTextHeight + 'px'; 
        let areaRowsHeight = (areaTextHeight - startRows * 2) / startRows; 
        
        function creationAreaTextRows(startRows) {
            for (let i = 0; i < startRows; i++) {
                newElem(
                    areaText, 
                    'div', 
                    ['cardtext-size-row'], 
                    [['style', `height: ${areaRowsHeight}px;`]]
                );
            } 
        }
        
        creationAreaTextRows(startRows);

        //************** */

        console.log('-+-+-+-+-+-');

        // let myRules = document.styleSheets[0].cssRules;
        // console.log(myRules);

        // const textArea = document.querySelector('.card-letter-textarea');

        const stylesheetAreaText = [...document.styleSheets[0].cssRules];

        // stylesheetAreaText.find(el => {

        // })

        stylesheetAreaText.forEach(el => {
            console.log(el.cssText);

            let elemArray = el.cssText.split(' ');

            for (const value of elemArray) {
                if (value == '.card-letter-textarea') {
                    console.log(elemArray);
                }
            }
        })

        // for (let elem of stylesheetAreaText) {
        //     console.log(elem)
        // }


        // console.log(stylesheetAreaText);

        // const stylesheetArea = [...stylesheet.cssRules].find((el) => {el.selectorText === '.card-letter-textarea'});

        // console.log(stylesheetArea);
        // textArea.addEventListener('mouseover', () => {
        //     stylesheetArea.style.setProperty('background-color', 'tomato');
        //   });
    }
    
    
    function changeFontSizePlus(fontSize) {
        // console.log(fontSize);
        fontSize = parseFloat(fontSize) * 1.1;
        // console.log(fontSize);

        textArea.setAttribute('style', `${fontSize}px;`);
        textArea.style.fontSize = fontSize + 'px';
        // console.log(fontSizeTextArea);
    }
    
    function changeFontSizeMinus(fontSize) {
        // console.log(fontSize);
        fontSize = parseFloat(fontSize) / 1.1;
        // console.log(fontSize);
        
        textArea.setAttribute('style', `${fontSize}px;`);
        textArea.style.fontSize = fontSize + 'px';
        // console.log(fontSizeTextArea);
    }
    
    let startNumberRows = 15;
    const maxNumberRows = 18;
    const minNumberRows = 5;
    const buttonSizeMinus = document.querySelector('.nav-addit-size-minus');       
    const buttonSizePlus = document.querySelector('.nav-addit-size-plus');  

    function startSize() {
        takeSize(startNumberRows);
    }

    function removeRows() {
        const areaTextRows = document.querySelectorAll('.cardtext-size-row');

        areaTextRows.forEach((el) => {
            el.remove();
        })
    }
    
    function minusSize() {
        startNumberRows = startNumberRows + 1;
        
        if(startNumberRows <= maxNumberRows && startNumberRows >= minNumberRows) {
            removeRows();
            takeSize(startNumberRows);
            changeFontSizeMinus(fontSizeTextArea);
        } else startNumberRows = startNumberRows - 1;
    }
    
    function plusSize() {
        startNumberRows = startNumberRows - 1;
        
        if(startNumberRows <= maxNumberRows && startNumberRows >= minNumberRows) {
            removeRows();
            takeSize(startNumberRows);
            changeFontSizePlus(fontSizeTextArea);
        } else startNumberRows = startNumberRows + 1;
    }
    
    setTimeout(startSize, 400);
    
    buttonSizeMinus.addEventListener('pointerdown', minusSize);
    buttonSizePlus.addEventListener('pointerdown', plusSize);
}
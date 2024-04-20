import { dragNDrop } from "./dnd.js";
import { keepCirclesInCorners } from "./dnd-keep-circles-in-corners.js";
import { formationLetterArea } from "./card-letter.js";
import { createAroma } from "./aroma.js";
import { createCalendar } from "./date.js";
import { startPressActivation } from "./start-press-activation.js";
import { addButtonDate } from "./date-create-button-date.js";
import { addButtonAroma } from "./aroma-create-button-aroma.js";
import { readEnvelope } from "./envelope.js";

export function clickButtonActive(el) {
            
        function removeClassActive(el) {
            el.classList.remove('active');
        };
        
        const buttonHeaderNav = document.querySelectorAll('.nav-button');

        buttonHeaderNav.forEach((el) => {
            removeClassActive(el);
        });
        
        const block = document.querySelectorAll('.block');
        
        block.forEach((el) => {
            removeClassActive(el);
        });
          
        document.querySelector('.new-area').classList.remove('active');
        
        function showButtonTimer() {
            el.classList.add('active');
        }
        
        setTimeout(showButtonTimer, 200);
        
        const blockDataSetMenuNav = document.querySelectorAll(`.${el.dataset.menuNav}`);
        
        function showBlockTimer() {
            blockDataSetMenuNav.forEach((el) => {
                el.classList.add('active');
            })    
        } 
      
        const blockNavAddition = document.querySelectorAll('.nav-additional-block');
        const blockDataSetAddit = el.dataset.blockAddit;
        
        blockNavAddition.forEach((el) => {
            removeClassActive(el);
        })
        
        blockNavAddition.forEach((el) => {
            if(el.classList.contains(blockDataSetAddit)) {
                el.classList.add('active');
            }
        })

//** Block Envelope */

        if (el.classList.contains('button-envelope')) {
            readEnvelope();
        }

//** Block Text */

        if(el.classList.contains('button-cardtext')) {
            formationLetterArea();
        }

//** Block Aroma */

        if (el.classList.contains('button-aroma')) {
            const blockAroma = document.querySelector('.aroma-block');

            if (!blockAroma.classList.contains('active')) {
                createAroma();
            }
        }

        if (el.classList.contains('button-aroma') && sessionStorage.getItem('aroma--name')) {         
            setTimeout(() => addButtonAroma(
                [sessionStorage.getItem('aroma--name'),
                sessionStorage.getItem('aroma--make')]
            ), 150);
        }

//** Block Date */

        if (el.classList.contains('button-date') && !el.classList.contains('created')) {

            if (sessionStorage.getItem('date--year')) {
                createCalendar(
                    +sessionStorage.getItem('date--year'), 
                    +sessionStorage.getItem('date--month'),
                    +sessionStorage.getItem('date--day')
                );  
            } else {
                createCalendar(
                    new Date().getFullYear(), 
                    new Date().getMonth(), 
                    new Date().getDate()
                );
            }
        }   
            
        if (el.classList.contains('button-date') && sessionStorage.getItem('date--year')) {
            const elemNavAdditionalDate = document.querySelector('.nav-additional-date');
            elemNavAdditionalDate.classList.add('active');

            setTimeout(() => addButtonDate(
                +sessionStorage.getItem('date--year'),
                +sessionStorage.getItem('date--month'),
                +sessionStorage.getItem('date--day')
            ), 150);
        }

//** ---------- */

        setTimeout(showBlockTimer, 150);

        const buttonNavAdditional = document.querySelectorAll('.nav-additional-button');
        
        buttonNavAdditional.forEach((el) => {
            removeClassActive(el);
            
            function startClassActive() {

                buttonNavAdditional.forEach((el) => {
                    el.classList.remove('active');
                })
                
                el.classList.add('active');
                
                if(el.classList.contains('nav-addit-cardphoto-add')) {
                    document.querySelector('.cardphoto-anchor').classList.remove('active');
                    document.querySelector('.block-new-img').classList.add('active');
                    document.querySelector('.new-area').classList.add('active');

                    dragNDrop();

                    el.onpointerup = function() {
                        el.classList.remove('active');
                    }
                }

                const navAdditionalMulti = document.querySelectorAll('.nav-additional-multi');
                const navAdditionalMultiTitle = document.querySelector('.nav-additional-multi-title');
                
                navAdditionalMulti.forEach((el) => {
                    el.classList.remove('appearance');
                })

                navAdditionalMultiTitle.classList.remove('active');

                if(el.classList.contains('nav-addit-cardtext-size')) {
                    navAdditionalMultiTitle.classList.add('active');
                    navAdditionalMulti.forEach((el) => {
                        el.classList.add('appearance');
                    })
                }  
            }
                            
            function startToCenter() {
                const blockNewImg = document.querySelector('.new-img');
                const newArea = document.querySelector('.new-area');
                const startImgLeft = blockNewImg.getBoundingClientRect().left;
                const startImgTop = blockNewImg.getBoundingClientRect().top;
                const startImgWidth = blockNewImg.getBoundingClientRect().width;
                const startImgHeight = blockNewImg.getBoundingClientRect().height;
                
                newArea.setAttribute('style', `left: ${startImgLeft}; top: ${startImgTop}; width: ${startImgWidth}; height: ${startImgHeight};`)
                
                keepCirclesInCorners(startImgLeft, startImgTop, startImgWidth, startImgHeight);
            }

            el.addEventListener('pointerdown', () => startPressActivation(el));
            
            if(el.classList.contains('nav-addit-cardphoto-center')) {
                el.addEventListener('pointerdown', startToCenter);
                el.onpointerup = function() {
                    el.classList.remove('active');
                };
            }
            
            el.addEventListener('pointerdown', startClassActive);
        })
    };

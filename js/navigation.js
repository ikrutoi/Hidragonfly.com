import { keepCirclesInCorners } from "./dnd-keep-circles-in-corners.js";
import { formationLetterArea } from "./card-letter.js";
import { createAroma } from "./aroma.js";
import { createCalendar } from "./date.js";
import { startPressActivation } from "./start-press-activation.js";
import { addButtonDate } from "./date-create-button-date.js";
import { readEnvelope } from "./envelope.js";
import { formationCardPhoto } from "./cardphoto.js";
import { changeMainNavMenu, createMainNav } from "./main-nav.js";
import { validationValueSessionStorage } from './envelope-valid-ses-stor.js';

export function navigationHeaderMenu() {
    const headerNavButton = document.querySelectorAll('.header-nav--button');

    headerNavButton.forEach((el) => {
        
        function startClassActive() {
            const mainNav = document.querySelector('.main-nav');
            mainNav.classList.remove('border-bottom');

            if (!el.classList.contains('active')) {
                // startPressActivation(el);
                clickButtonActive(el);
                createMainNav(el.dataset.menuNav);
            }      
        }
    
        validationValueSessionStorage();
    
        el.addEventListener('pointerdown', startClassActive);
    });
}

export function clickButtonActive(el) {

    const datasetElement = el.dataset.menuNav;

        changeMainNavMenu(el);
            
        function removeClassActive(el) {
            el.classList.remove('active');
        };
        
        const buttonHeaderNav = document.querySelectorAll('.header-nav--button');

        buttonHeaderNav.forEach((el) => {
            removeClassActive(el);
        });
        
        const block = document.querySelectorAll('.block');
        
        block.forEach((el) => {
            removeClassActive(el);
        });

        const mainNavMenu = document.querySelectorAll('.main-nav-menu');
        
        mainNavMenu.forEach((el) => {
            removeClassActive(el);
        });

        el.classList.add('active');
        
        function showButton() {
            const selectedElem = document.querySelector(`.main-nav-menu--${datasetElement}`);

            if ((datasetElement == 'aroma' || datasetElement == 'date') && selectedElem.classList.contains('selected')) {
                selectedElem.classList.add('active');
            } 

            if (datasetElement == 'cardphoto') {
                selectedElem.classList.add('active');
            } 
        }
        
        setTimeout(showButton, 75);
        
        
        function showBlockTimer() {
            const blockDataSetMenuNav = document.querySelector(`.${el.dataset.menuNav}`);
            blockDataSetMenuNav.classList.add('active')
        } 

//** Block Card Photo */

        if (el.classList.contains('header-nav--button-cardphoto')) {
            const mainNav = document.querySelector('.main-nav');
            mainNav.classList.add('border-bottom');

            if (mainNav.classList.contains('created-cardphoto')) {
                document.querySelector('.main-nav-menu--cardphoto').classList.add('active');
            }

            // createMainNav(el.dataset.menuNav);
            formationCardPhoto();
        }


//** Block Envelope */

        if (el.classList.contains('header-nav--button-envelope')) {
            readEnvelope();
        }

//** Block Card Text */

        if (el.classList.contains('header-nav--button-cardtext')) {
            formationLetterArea();
        }

//** Block Aroma */

        if (el.classList.contains('header-nav--button-aroma')) {
            const aromaBlock = document.querySelector('.aroma-block');
            const mainNavMenuAroma = document.querySelector('.main-nav-menu--aroma');
            
            if (mainNavMenuAroma && mainNavMenuAroma.classList.contains('selected')) {
                const mainNav = document.querySelector('.main-nav');
                mainNav.classList.add('border-bottom');
            }
                        
            if (!aromaBlock.classList.contains('created')) {
                createAroma();
            }
        }

//** Block Date */

        if (el.classList.contains('header-nav--button-date') && !el.classList.contains('created-calendar')) {
            createCalendar(
                new Date().getFullYear(), 
                new Date().getMonth(), 
                new Date().getDate(),
                false
            );
        }   

//** ---------- */

        setTimeout(showBlockTimer, 75);

        const buttonNavAdditional = document.querySelectorAll('.nav-additional-button');
        
        buttonNavAdditional.forEach((el) => {
            removeClassActive(el);
            
            function startClassActive() {

                buttonNavAdditional.forEach((el) => {
                    el.classList.remove('active');
                })
                
                el.classList.add('active');

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

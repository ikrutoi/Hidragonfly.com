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
    const buttonMenuNav = document.querySelectorAll('.header-nav--button');

    buttonMenuNav.forEach((el) => {

        function startClassActive() {
            if (!el.classList.contains('active')) {
                startPressActivation(el);
                clickButtonActive(el);
                createMainNav(el);
            }      
        }
    
        validationValueSessionStorage();
    
        if (el.classList.contains('header-nav--button-aroma') && sessionStorage.getItem('aroma--name')) {
            el.classList.add('value-in-memory');
        }
        
        if (el.classList.contains('header-nav--button-date') && sessionStorage.getItem('date--year')) {      
            el.classList.add('value-in-memory');
        }
    
        el.addEventListener('pointerdown', startClassActive);
    });
}

export function clickButtonActive(el) {

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
        
        function showButtonTimer() {
            el.classList.add('active');
        }
        
        setTimeout(showButtonTimer, 75);

        console.log('***2', document.querySelector(`.${el.dataset.menuNav}`) )
        
        const blockDataSetMenuNav = document.querySelector(`.${el.dataset.menuNav}`);
        
        function showBlockTimer() {
            blockDataSetMenuNav.classList.add('active')

            const selectedElem = document.querySelector(`.main-nav-menu--${el.dataset.menuNav}`);

            if (selectedElem.classList.contains('selected') || el.dataset.menuNav == 'cardphoto') {
                selectedElem.classList.add('active');
            } 
        } 

//** Block Card Photo */

        if (el.classList.contains('header-nav--button-cardphoto')) {
            const mainNav = document.querySelector('.main-nav');

            if (mainNav.classList.contains('created-cardphoto')) {
                document.querySelector('.main-nav-menu--cardphoto').classList.add('active');
            }

            createMainNav(el.dataset.menuNav);
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
            const mainNav = document.querySelector('.main-nav');
            const blockAroma = document.querySelector('.aroma-block');

            if (mainNav.classList.contains('created-aroma')) {
                const mainNavMenuAroma = document.querySelector('.main-nav-menu--aroma');
                mainNavMenuAroma.classList.add('active');
            }

            if (!blockAroma.classList.contains('active')) {
                createMainNav('aroma');
                createAroma();
            }
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
                createMainNav('date');
                createCalendar(
                    new Date().getFullYear(), 
                    new Date().getMonth(), 
                    new Date().getDate(),
                    false
                );
            }

        }   

        // if (mainNav.dataset.navDate )
            
        if (el.classList.contains('button-date') && sessionStorage.getItem('date--year')) {
            const elemNavAdditionalDate = document.querySelector('.nav-additional-date');
            elemNavAdditionalDate.classList.add('active');

            setTimeout(() => addButtonDate(
                +sessionStorage.getItem('date--year'),
                +sessionStorage.getItem('date--month'),
                +sessionStorage.getItem('date--day')
            ), 75);
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

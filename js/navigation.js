import { keepCirclesInCorners } from "./dnd-keep-circles-in-corners.js";
import { formationLetterArea } from "./card-letter.js";
import { createAroma } from "./aroma.js";
import { createCalendar } from "./date.js";
import { startPressActivation } from "./start-press-activation.js";
import { addButtonDate } from "./date-create-button-date.js";
import { readEnvelope } from "./envelope.js";
import { formationCardPhoto } from "./cardphoto.js";
import { createMainNavMenu } from "./main-nav.js";
// import { validationValueSessionStorage } from './envelope-valid-ses-stor.js';

export function navigationHeaderMenu() {
    const headerNavButton = document.querySelectorAll('.header-nav--button');
    
    headerNavButton.forEach((el) => {
        const datasetElement = el.dataset.menuNav;
        const block = document.querySelectorAll('.block');
        
        function removeClassActive() {
            headerNavButton.forEach(el => el.classList.remove('active'));
            block.forEach(el => el.classList.remove('active'));

            const mainNavMenu = document.querySelectorAll('.main-nav-menu');
            mainNavMenu.forEach(el => el.classList.remove('active'));
        };

        function createMainNav() {
            el.classList.add('active');
            createMainNavMenu(el.dataset.menuNav);    
        }

        function showMainNav() {
            const selectedElem = document.querySelector(`.main-nav-menu--${datasetElement}`);
            if ((datasetElement == 'aroma' || datasetElement == 'date') && selectedElem.classList.contains('selected')) {
                selectedElem.classList.add('active');
            } 
            if (datasetElement == 'cardphoto') {
                selectedElem.classList.add('active');
            } 
        }
        
        function addBorderBottom() {
            const mainNav = document.querySelector('.main-nav');
            mainNav.classList.remove('border-bottom');
            const targetMainButton = document.querySelector(`.main-nav-menu--${datasetElement}`);


            if ((targetMainButton && targetMainButton.classList.contains('selected')) || el.classList.contains('header-nav--button-cardphoto')) {
                mainNav.classList.add('border-bottom');
            }
        }
        
        function createMainBlock() {
            const targetBlock = document.querySelector(`.${datasetElement}`);
            targetBlock.classList.add('active');
            
            switch(datasetElement) {
                case 'cardphoto':
                    console.log('cardphoto');
                    formationCardPhoto();
                    break; 
                case 'cardtext':
                    console.log('cardtext');
                    formationLetterArea();
                    break; 
                case 'envelope':
                    console.log('envelope');
                    readEnvelope();
                    break; 
                case 'aroma':
                    if (document.querySelector(`.${datasetElement}-block`).dataset.created != 'true') {
                        createAroma();
                    }
                    break; 
                case 'date':
                    if (document.querySelector(`.${datasetElement}-block`).dataset.created != 'true') {
                        createCalendar(
                            new Date().getFullYear(), 
                            new Date().getMonth(), 
                            new Date().getDate(),
                            false
                        );
                    }
                    break; 
                case 'history':
                    removeImage();
                    break; 
            }
        }
            
        el.addEventListener('pointerdown', removeClassActive);
        el.addEventListener('pointerdown', createMainBlock);  
        el.addEventListener('pointerdown', createMainNav);
        el.addEventListener('pointerdown', showMainNav);
        el.addEventListener('pointerdown', addBorderBottom);
    });
}

export function clickButtonActive(el) {  

    const mainNavCardphotoButton = document.querySelectorAll('.main-nav--cardphoto--button');
    
    mainNavCardphotoButton.forEach((el) => {
        // removeClassActive(el);
        
        function startClassActive() {

            mainNavCardphotoButton.forEach((el) => {
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

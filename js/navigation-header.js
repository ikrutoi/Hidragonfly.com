import { keepCirclesInCorners } from "./dnd-keep-circles-in-corners.js";
import { formationLetterArea } from "./card-letter.js";
import { createAroma } from "./aroma.js";
import { createCalendar } from "./date.js";
import { startPressActivation } from "./start-press-activation.js";
import { addButtonDate } from "./date-create-button-date.js";
import { readEnvelope } from "./envelope.js";
// import { cardphotoChange } from "./cardphoto.js";
import { createMainNavMenu } from "./main-nav.js";
import { navigationMain } from "./navigation-main.js";
// import { changeSizeImageForm } from "./cardphoto.js";
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

            if (
                (datasetElement == 'aroma' || datasetElement == 'date') && selectedElem.classList.contains('selected') || 
                datasetElement == 'cardphoto'
            ) {
                selectedElem.classList.add('active');
            } 

            // if (datasetElement == 'cardphoto') {
            //     selectedElem.classList.add('active');
            // } 

            navigationMain(datasetElement);
            // cardphotoChange(el);
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
                    // cardphotoChange(el);
                    // changeSizeImageForm();
                    // formationCardphoto();
                    // navigationMain(datasetElement);
                    // console.log('*-*-*-*', el)
                    // console.log('*-*-*-*', document.querySelector('.cardphoto'));
                    // const card = document.querySelector('.cardphoto');
                    // console.log('*-*-*-', getComputedStyle(card));
                    break; 
                case 'cardtext':
                    formationLetterArea();
                    break; 
                case 'envelope':
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
        el.addEventListener('pointerdown', createMainNav);
        el.addEventListener('pointerdown', showMainNav);
        el.addEventListener('pointerdown', addBorderBottom);
        el.addEventListener('pointerdown', createMainBlock);  
    });
}

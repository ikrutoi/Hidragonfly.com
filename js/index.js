import { newElem } from './new-element.js'
import { dragNDrop } from './drag-n-drop.js';

const buttonMenuNav = document.querySelectorAll('.nav-menu-button');

buttonMenuNav.forEach((e) => {
    
    function clickButtonActive() {
        function removeClassActive(e) {
            e.classList.remove('active');
        }

        (() => {
            buttonMenuNav.forEach((e) => {
                removeClassActive(e);
            })
        })();

        const block = document.querySelectorAll('.block');
        const navMenuAddit = document.querySelectorAll('.nav-menu-addit');
        
        block.forEach((e) => {
            removeClassActive(e);
        })
        
        navMenuAddit.forEach((e) => {
            removeClassActive(e);
        })

        e.classList.add('active');
        
        const blockActive = document.querySelectorAll(`.${e.dataset.menuNav}`);
        
        function showBlockTimer() {
            blockActive.forEach((e) => {
                e.classList.add('active');
            })    
        }      
       
        setTimeout(showBlockTimer, 100);
    }

    e.addEventListener('click', clickButtonActive);   
});

const blockNewImg = document.querySelector('.block-new-img');
const styleSpanCircle = 'background-color: #008aed; position: absolute; width: 9px; height: 9px; border-radius: 10px; border: solid 1px #ffffff; ';

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tl'], styleSpanCircle + 'top: -50px; left: 0px');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tr'], styleSpanCircle + 'top: 0px; right: 0px');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-br'], styleSpanCircle + 'bottom: 0px; right: 0px');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-bl'], styleSpanCircle + 'bottom: 0px; left: 0px');

// dragNDrop();

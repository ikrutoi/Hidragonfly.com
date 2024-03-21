import { newElem } from './new-element.js'
import { dragNDrop, increaseCropCircle } from './drag-n-drop.js';

const buttonMenuNav = document.querySelectorAll('.nav-menu-button');

buttonMenuNav.forEach((el) => {
    
    function clickButtonActive() {
        function removeClassActive(el) {
            el.classList.remove('active');
        }

        (() => {
            buttonMenuNav.forEach((el) => {
                removeClassActive(el);
            })
        })();

        const block = document.querySelectorAll('.block');
        const navMenuAddit = document.querySelectorAll('.nav-menu-addit');
        
        block.forEach((el) => {
            removeClassActive(el);
        })
        
        navMenuAddit.forEach((el) => {
            removeClassActive(el);
        })

        el.classList.add('active');
        
        const blockActive = document.querySelectorAll(`.${el.dataset.menuNav}`);
        
        function showBlockTimer() {
            blockActive.forEach((el) => {
                el.classList.add('active');
            })    
        }      
       
        setTimeout(showBlockTimer, 100);
    }

    el.addEventListener('click', clickButtonActive);   
});

const blockNewImg = document.querySelector('.block-new-img');
const styleSpanCircle = 'background-color: #008aed; position: absolute; width: 9px; height: 9px; border-radius: 10px; border: solid 1px #ffffff; ';

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tl'], styleSpanCircle + 'top: 0px; left: 0px');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tr'], styleSpanCircle + 'top: 0px; right: 0px');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-br'], styleSpanCircle + 'bottom: 0px; right: 0px');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-bl'], styleSpanCircle + 'bottom: 0px; left: 0px');

const spanCropCircle = document.querySelectorAll('.crop-circle');

spanCropCircle.forEach((el) => {
    // const styleCropCircleShadow = 'position: absolute; width: 20px; height: 20px; background-color: #008aed; opacity: 0.3; border-radius: 40px; '
    newElem(el, 'span', ['crop-circle-shadow'], );
})

dragNDrop();
increaseCropCircle();

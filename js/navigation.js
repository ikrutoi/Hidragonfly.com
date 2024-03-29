import { dragNDrop } from "./d-n-d/d-n-d.js";
import { newElem } from "./new-element.js";

export function navButtonMenu() {  
    const buttonMenuNav = document.querySelectorAll('.nav-button');
    
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
            // const navMenuAddit = document.querySelectorAll('.nav-menu-addit');
            
            block.forEach((el) => {
                removeClassActive(el);
            })

            // const blockNavAdditional = document.querySelectorAll('.nav-additional-block');

            // blockNavAdditional.forEach((el) => {
                // blockNavAdditional.removeEventListener('click', )
            // })

            
            // navMenuAddit.forEach((el) => {
            //     removeClassActive(el);
            // })
            
            el.classList.add('active');
            
            const blockDataSetMenuNav = document.querySelectorAll(`.${el.dataset.menuNav}`);
            
            function showBlockTimer() {
                blockDataSetMenuNav.forEach((el) => {
                    el.classList.add('active');
                })    
            } 
            
            const blockNavAddition = document.querySelectorAll('.nav-additional-block');
            const blockDataSetAddit = el.dataset.blockAddit;

            blockNavAddition.forEach((el) => {
                el.classList.remove('active');
            })

            blockNavAddition.forEach((el) => {
                if(el.classList.contains(blockDataSetAddit)) {
                    el.classList.add('active');
                }
            })
            
            setTimeout(showBlockTimer, 100);
        }
        
        el.addEventListener('click', clickButtonActive);   
    });
};

function onClickAdd() {
    dragNDrop();
}

const mainNavButton = document.querySelectorAll('.nav-button');

mainNavButton.forEach((el) => {
    el.onpointerdown = function() {
        const datasetBlockAddit = el.dataset.blockAddit;
        const elemBlockAddit = document.querySelector(`.${datasetBlockAddit}`);
        
        if (elemBlockAddit.classList.contains('active')) {
            elemBlockAddit.classList.remove('active');
        }        

        el.onclick = function() {
            elemBlockAddit.classList.add('active');
        }
    }
})

const buttonAdd = document.querySelector('.nav-addit-cardphoto-add');
buttonAdd.addEventListener('click', onClickAdd);

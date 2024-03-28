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
    const datasetBlockAddit = el.dataset.blockAddit;
    const elemBlockAddit = document.querySelector(`${datasetBlockAddit}`);

    el.onpointerup = function() {
        elemBlockAddit.classList.remove('active')
    }

    el.onclick = function() {
        elemBlockAddit.classList.add('active');
    }
    
    // el.removeEventListener('click', addBlockAdditional);
    // el.addEventListener('click', addBlockAdditional);

    // function addBlockAdditional() {
    //     switch(datasetBlockAddit) {
    //         case 'nav-additional-envelope': {

    //         }
    //         break;
    //         case 'nav-additional-cardphoto': {
    //             addBlockCardphoto();
    //         }
    //         break;
    //         case 'nav-additional-cardtext': {
    //             addBlockCardtext();
    //         }
    //         break;
    //     }
    // }
});

function addBlockCardphoto() {

    newElem(document.querySelector('.nav-additional-cardphoto'), 'div', ['nav-additional-button', 'nav-additional-add']);
    newElem(document.querySelector('.nav-additional-add'), 'p', ['nav-additional-add-text']);
    document.querySelector('.nav-additional-add-text').textContent = 'Add';

    newElem(document.querySelector('.nav-additional-cardphoto'), 'div', ['nav-additional-button', 'nav-additional-edit']);
    newElem(document.querySelector('.nav-additional-edit'), 'p', ['nav-additional-add-edit']);
    document.querySelector('.nav-additional-add-edit').textContent = 'Edit';

    newElem(document.querySelector('.nav-additional-cardphoto'), 'div', ['nav-additional-button', 'nav-additional-del']);
    newElem(document.querySelector('.nav-additional-del'), 'p', ['nav-additional-add-del']);
    document.querySelector('.nav-additional-add-del').textContent = 'Delete';

    const buttonAdd = document.querySelector('.nav-additional-add');
    buttonAdd.addEventListener('click', onClickAdd);
}

function addBlockCardtext() {
    
    newElem(document.querySelector('.nav-additional-cardtext'), 'div', ['nav-additional-button', 'nav-additional-size']);
    newElem(document.querySelector('.nav-additional-size'), 'p', ['nav-additional-size-text']);
    document.querySelector('.nav-additional-size-text').textContent = 'Size';

    newElem(document.querySelector('.nav-additional-cardtext'), 'div', ['nav-additional-button', 'nav-additional-color']);
    newElem(document.querySelector('.nav-additional-color'), 'p', ['nav-additional-color-text']);
    document.querySelector('.nav-additional-color-text').textContent = 'Color';

    newElem(document.querySelector('.nav-additional-cardtext'), 'div', ['nav-additional-button', 'nav-additional-font']);
    newElem(document.querySelector('.nav-additional-font'), 'p', ['nav-additional-font-text']);
    document.querySelector('.nav-additional-font-text').textContent = 'Font';
}

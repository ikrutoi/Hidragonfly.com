import { dragNDrop } from "./drag-n-drop.js";

export function navButtonMenu() {  
    const buttonMenuNav = document.querySelectorAll('.nav-menu-button');
    const blockMain = document.querySelector('.main');
    
    buttonMenuNav.forEach((el) => {
        
        function clickButtonActive() {
            blockMain.classList.remove('img-active');
            
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
};


export function addNewImg() {
    const buttonAdd = document.querySelector('.nav-cardphoto-add');
    // const blockNewImg = document.querySelector('.block-shadow');
    // const blockMain = document.querySelector('.main-full');

    function clickButtonActive() {
        // blockNewImg.classList.add('active');
        // blockMain.classList.add('img-active');
    }

    buttonAdd.addEventListener('click', clickButtonActive);
}

const buttonAdd = document.querySelector('.nav-cardphoto-add');
buttonAdd.addEventListener('click', dragNDrop);
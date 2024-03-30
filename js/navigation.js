import { dragNDrop } from "./d-n-d/d-n-d.js";
     
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
        
        const buttonNavAdditional = document.querySelectorAll('.nav-additional-button');
        
        buttonNavAdditional.forEach((el) => {
            removeClassActive(el);
        })
        
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
            
        setTimeout(showBlockTimer, 200);
        
        // const buttonNavAdditional = document.querySelectorAll('.nav-additional-button');
        
        buttonNavAdditional.forEach((el) => {
            
            function startClassActive() {

                buttonNavAdditional.forEach((el) => {
                    el.classList.remove('active');
                })
                
                el.classList.add('active');
                
                if(el.classList.contains('nav-addit-cardphoto-add')) {
                    document.querySelector('.cardphoto-anchor').classList.remove('active');
                    document.querySelector('.block-new-img').classList.add('active');
                    document.querySelector('.new-area').classList.add('active');
                    console.log('-pdc d-cd-c ');
                    dragNDrop();
                }
            }
            
            el.addEventListener('pointerdown', startClassActive);
        })
    };
        
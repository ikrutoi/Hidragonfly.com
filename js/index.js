import { newElem } from './crop.js'

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
        
        function showBlockTimer() {
            blockActive.forEach((e) => {
                e.classList.add('active');
            })
        }
                
        const blockActive = document.querySelectorAll(`.${e.dataset.menuNav}`);
       
        setTimeout(showBlockTimer, 100);
    }

    e.addEventListener('click', clickButtonActive);   
});

newElem();
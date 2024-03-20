import { newElem } from './new-element.js'

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

const circle = document.querySelectorAll('.crop-circle');

circle.forEach((el) => {
    el.onmousedown = function(e) {
        let shiftX = e.clientX - el.getBoundingClientRect().left;
        let shiftY = e.clientY - el.getBoundingClientRect().top;

        moveAt(e.pageX, e.pageY);
    
        function moveAt(pageX, pageY) {
            el.style.left = pageX - shiftX + 'px';
            el.style.top = pageY - shiftY + 'px';
        } 
    
        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY)
        }
    
        document.addEventListener('mousemove', onMouseMove);
    
        el.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
        }
    };
})

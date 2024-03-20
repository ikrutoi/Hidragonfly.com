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
            
            const circleTL = document.querySelector('.crop-circle-tl');
            const circleTR = document.querySelector('.crop-circle-tr');
            const circleBL = document.querySelector('.crop-circle-bl');

            // console.log('circleTL', circleTL.getBoundingClientRect());
            console.log('circleTL', circleTL.getBoundingClientRect().left);
            console.log('circleTR', circleTL.getBoundingClientRect());
            console.log('circleTL', circleTL.getBoundingClientRect());

            const widthBlockImg = circleTR.getBoundingClientRect().left - circleTL.getBoundingClientRect().left;
            const heightBlockImg = circleBL.getBoundingClientRect().top - circleTL.getBoundingClientRect().top;

            addBlockImg(
                circleTL.getBoundingClientRect().left, 
                circleTL.getBoundingClientRect().top, 
                heightBlockImg, 
                widthBlockImg
            );

            // const fullBlockImg = document.querySelector('.full-block-img');
            // console.log(fullBlockImg.getBoundingClientRect());

        }
                
        const blockActive = document.querySelectorAll(`.${e.dataset.menuNav}`);
       
        setTimeout(showBlockTimer, 100);
    }

    e.addEventListener('click', clickButtonActive);   
});

newElem();

const circle = document.querySelectorAll('.crop-circle');

circle.forEach((elem) => {

    elem.ondragstart = function() {
        return false;
    }

    elem.onmousedown = function(event) {
        const heightHeader = document.querySelector('.header').clientHeight;
        const heightNav = document.querySelector('.nav').clientHeight;

        const shiftX = event.clientX - elem.getBoundingClientRect().left;
        const shiftY = event.clientY - elem.getBoundingClientRect().top;

        moveAt(event.clientX, event.clientY);
    
        function moveAt(pageX, pageY) {
            elem.style.left = pageX - shiftX + 'px';
            elem.style.top = pageY - shiftY - heightHeader - heightNav - 9 + 'px';
            // console.log(elem.style.top, elem.getBoundingClientRect().top);
        } 
    
        function onMouseMove(event) {
            moveAt(event.clientX, event.clientY)
        }
    
        document.addEventListener('mousemove', onMouseMove);
    
        elem.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            elem.onmouseup = null;
        }
    };
})

function addBlockImg(pageX, pageY, height, width) {
    const fullBlockImg = document.querySelector('.full-block-img');
    fullBlockImg.setAttribute('style', `left: ${pageX}px; top: ${pageY}px; heingth: ${height}px; width: ${width}px;`);

    console.log(fullBlockImg.getBoundingClientRect());
}


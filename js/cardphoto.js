import { startPressActivation } from "./start-press-activation.js";
import { addClassHover } from "./start-press-activation.js";
import { delClassHover } from "./start-press-activation.js";
import { newElem } from "./new-element.js";
// import { dragNDrop } from "./dnd.js";
import { newElemHTML } from "./new-element.js";

const main = document.querySelector('.main');
const mainBlock = document.querySelector('.main-block');
const cardphoto = document.querySelector('.cardphoto');
const cardphotoForm = document.querySelector('.cardphoto-form');
const cardphotoImage = document.querySelector('.cardphoto-image');

let heightCardphotoImageStart;
let widthNewImageStart;
let heightNewImageStart;
let positionImage;

function setSizeCardphotoForm() {
    
    const valueWidth = cardphotoImage.getBoundingClientRect().width;
    const valueHeight = cardphotoImage.getBoundingClientRect().height;

    cardphotoForm.style.width = valueWidth + 'px';
    cardphotoForm.style.height = valueHeight + 'px';

    cardphoto.style.width = valueWidth + 'px';
    cardphoto.style.height = valueHeight + 'px';
}

export function changeCardphoto(elem) {  

    const mainNavMenuCardphoto = document.querySelector('.main-nav-menu--cardphoto');
    const mainNavCardphotoButton = document.querySelectorAll('.main-nav--cardphoto--button');
    const cardphotoInput = document.querySelector('.cardphoto-input');
    
    function addActive() {
        this.classList.add('active');

        // setTimeout(() => {
        //         newElemHTML(cardphoto, 'beforeend', '<div class="cardphoto-newimg"></div>');  
        //     }, 1000);
        }
        
    function checkImgSelection(event) {
        // cardphotoImageStart.classList.add('deactivation');
        cardphotoImage.classList.add('active');
        const newImageFile = document.querySelector('.cardphoto-input').files[0];
        const imageURL = URL.createObjectURL(newImageFile);
        cardphotoImage.src = imageURL;
        cardphotoImage.onload = () => URL.revokeObjectURL(imageURL);
        event.value = null;

        // fetch('/upload', {method: 'POST', body: new FormData().append('image', newImageFile)})
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
        // console.log('*++*', event.target.files.length);
        // console.log('**', event.target);
    }

    // function removeImage() {
    //     cardphotoImage.classList.remove('active');
    //     cardphotoImageStart.classList.remove('deactivation');
    //     cardphotoImage.src = '';
    // }

    // function addClassActive () {
    //     mainNavMenuCardphoto.classList.add('active');
    //     // cardphotoImageNavButton.forEach(el => el.classList.add('wait-start'));
    //     // setTimeout(() => cardphotoImageNavButton.forEach(el => el.classList.add('wait')), 150);
    // }
    
    // function delClassActive () {
    //     // cardphotoImageNavButton.forEach(el => el.classList.remove('wait'));
    //     setTimeout(() => {
    //         mainNavMenuCardphoto.classList.remove('active');
    //         // cardphotoImageNavButton.forEach(el => el.classList.remove('wait-start'));
    //     }, 150);
    // }



    function createCircles() {
        setSizeCardphotoForm();

        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle circle-1" data-dnd="circle-1"></span>');  
        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle-start circle-1-start" data-dnd-start="circle-1"></span>');  
        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle circle-2" data-dnd="circle-2"></span>');  
        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle-start circle-2-start" data-dnd-start="circle-2"></span>');  
        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle circle-3" data-dnd="circle-3"></span>');  
        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle-start circle-3-start" data-dnd-start="circle-3"></span>');  
        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle circle-4" data-dnd="circle-4"></span>');  
        newElemHTML(cardphotoForm, 'beforeend', '<span class="circle-start circle-4-start" data-dnd-start="circle-4"></span>'); 
        newElemHTML(cardphotoForm, 'beforeend', '<div class="background-image background-image-up" data-bkg-image="bkg-image-up"></div>');  
        newElemHTML(cardphotoForm, 'beforeend', '<div class="background-image background-image-right" data-bkg-image="bkg-image-right"></div>');  
        newElemHTML(cardphotoForm, 'beforeend', '<div class="background-image background-image-buttom" data-bkg-image="bkg-image-buttom"></div>');  
        newElemHTML(cardphotoForm, 'beforeend', '<div class="background-image background-image-left" data-bkg-image="bkg-image-left"></div>');  
        newElemHTML(cardphotoForm, 'beforeend', '<div class="new-image"></div>');  
        
        cardphotoForm.classList.add('created');
    }

    if (!cardphotoForm.classList.contains('created')) {
        createCircles();
    }

    const circles = document.querySelectorAll('.circle');
    const circlesStart = document.querySelectorAll('.circle-start');
    const circle1 = document.querySelector('.circle-1');
    const circleStart1 = document.querySelector('.circle-1-start');
    const circle2 = document.querySelector('.circle-2');
    const circleStart2 = document.querySelector('.circle-2-start');
    const circle3 = document.querySelector('.circle-3');
    const circleStart3 = document.querySelector('.circle-3-start');
    const circle4 = document.querySelector('.circle-4');
    const circleStart4 = document.querySelector('.circle-4-start');
    const newImage = document.querySelector('.new-image');

    const elemBkgUp = document.querySelector('.background-image-up');
    const elemBkgRight = document.querySelector('.background-image-right');
    const elemBkgButtom = document.querySelector('.background-image-buttom');
    const elemBkgLeft = document.querySelector('.background-image-left');

    let widthNewImageStart;
    let heightNewImageStart;
    let deltaXNewImage;
    let deltaYNewImage;
    
    function setSizeNewImage() {
        const widthCardphotoImageStart = cardphotoImage.getBoundingClientRect().width;
        const heightCardphotoImageStart = cardphotoImage.getBoundingClientRect().height;
        widthNewImageStart = newImage.getBoundingClientRect().width;
        heightNewImageStart = newImage.getBoundingClientRect().height;
        deltaXNewImage = (widthCardphotoImageStart - heightNewImageStart) / 2;
        deltaYNewImage = (heightCardphotoImageStart - widthNewImageStart) / 2;
    }

    function positiononigNewImage(valueLeft, valueTop) {
        const deltaLeft = parseFloat(valueLeft);
        const deltaRight = cardphotoForm.getBoundingClientRect().height - newImage.getBoundingClientRect().width - deltaLeft;
        const coefficientLeftRight = deltaLeft / (deltaLeft + deltaRight);

        const deltaTop = parseFloat(valueTop);
        const deltaButtom = cardphotoForm.getBoundingClientRect().width - newImage.getBoundingClientRect().height - deltaTop;
        const coefficientTopButtom = deltaTop / (deltaTop + deltaButtom);

        const newDeltaFullX = cardphotoForm.getBoundingClientRect().width - newImage.getBoundingClientRect().width;
        const newDeltaFullY = cardphotoForm.getBoundingClientRect().height - newImage.getBoundingClientRect().height;

        newImage.style.left = newDeltaFullX * coefficientLeftRight + 'px';
        newImage.style.top = newDeltaFullY * coefficientTopButtom + 'px';

        return [newImage.style.left, newImage.style.top];
    }

    let deltaCircle;

    switch(elem.dataset.menuNav) {
        case 'add':
            cardphotoInput.addEventListener('change', checkImgSelection);
            break; 
        case 'change':
            elem.classList.toggle('active');
            cardphotoForm.classList.toggle('active');
            
            if (elem.classList.contains('active')) {
                deltaCircle = circle1.offsetWidth / 2;
                const valueX1 = 0;
                const valueY1 = 0;
                const valueX2 = valueX1 + cardphotoImage.getBoundingClientRect().width;
                const valueY3 = valueY1 + cardphotoImage.getBoundingClientRect().height;
        
                setCoordinatesCircles(valueX1, valueY1, valueX2, valueY3, deltaCircle);
                
                formationNewImage();
            } 
            break; 
        case 'cut':
            console.log('cut2');
            break; 
        case 'max':
            console.log('max2');
            break; 
        case 'torn':
            console.log('torn2');
            cardphotoTorn();
            break; 
        case 'del':
            console.log('del2');
            break; 
    }
    
    function setCoordinatesCircles(x1, y1, x2, y3, deltaCircle) {

        circle1.style.top = y1 - deltaCircle + 'px';
        circle1.style.left = x1 - deltaCircle + 'px';
        circleStart1.style.top = y1 + 'px';
        circleStart1.style.left = x1 + 'px';
        circle2.style.top = y1 - deltaCircle + 'px';
        circle2.style.left = x2 - deltaCircle + 'px';
        circleStart2.style.top = y1 + 'px';
        circleStart2.style.left = x2 + 'px';
        circle3.style.top = y3 - deltaCircle + 'px';
        circle3.style.left = x2 - deltaCircle + 'px';
        circleStart3.style.top = y3 + 'px';
        circleStart3.style.left = x2 + 'px';
        circle4.style.top = y3 - deltaCircle + 'px';
        circle4.style.left = x1 - deltaCircle + 'px';
        circleStart4.style.top = y3 + 'px';
        circleStart4.style.left = x1 + 'px';
    }

    function resizeBackground() {
        elemBkgLeft.style.top = '0px';
        elemBkgLeft.style.left = '0px';
        elemBkgLeft.style.width = 
            circleStart1.getBoundingClientRect().left -
            cardphotoForm.getBoundingClientRect().left + 'px';
        elemBkgLeft.style.height = 
            cardphotoForm.getBoundingClientRect().height + 'px';

        elemBkgUp.style.top = '0px';
        elemBkgUp.style.left = 
            circleStart1.getBoundingClientRect().left -
            cardphotoForm.getBoundingClientRect().left + 'px';
        elemBkgUp.style.width = 
            circleStart2.getBoundingClientRect().left -
            circleStart1.getBoundingClientRect().left + 'px';
        elemBkgUp.style.height = circleStart1.style.top;

        elemBkgRight.style.top = '0px';
        elemBkgRight.style.left = circleStart2.style.left;
        elemBkgRight.style.width =         
            cardphotoForm.getBoundingClientRect().width -
            parseFloat(circleStart2.style.left) + 'px';
        elemBkgRight.style.height = cardphotoForm.getBoundingClientRect().height + 'px';

        elemBkgButtom.style.bottom = '0px';
        elemBkgButtom.style.left = 
            circleStart4.getBoundingClientRect().left -
            cardphotoForm.getBoundingClientRect().left + 'px';
        elemBkgButtom.style.width = 
            circleStart3.getBoundingClientRect().left -
            circleStart4.getBoundingClientRect().left + 'px'
        elemBkgButtom.style.height =
            cardphotoForm.getBoundingClientRect().height -
            parseFloat(circleStart4.style.top) + 'px';
    }

    function changeBackgroud() {

        elemBkgLeft.style.top = '0px';
        elemBkgLeft.style.left = '0px';
        elemBkgLeft.style.width = newImage.style.left;
        elemBkgLeft.style.height = cardphotoForm.style.height;

        elemBkgUp.style.top = '0px';
        elemBkgUp.style.left = newImage.style.left;
        elemBkgUp.style.width = newImage.style.width;
        elemBkgUp.style.height = newImage.style.top;

        elemBkgRight.style.top = '0px';
        elemBkgRight.style.left = parseFloat(newImage.style.left) + parseFloat(newImage.style.width) + 'px';
        elemBkgRight.style.width = cardphotoForm.getBoundingClientRect().width - parseFloat(newImage.style.left) - newImage.getBoundingClientRect().width + 'px';
        elemBkgRight.style.height = cardphotoForm.style.height;

        elemBkgButtom.style.top = parseFloat(newImage.style.top) + newImage.getBoundingClientRect().height + 'px';
        elemBkgButtom.style.left = newImage.style.left;
        elemBkgButtom.style.width = newImage.style.width;
        elemBkgButtom.style.height = cardphotoForm.getBoundingClientRect().height - parseFloat(newImage.style.top) - newImage.getBoundingClientRect().height + 'px';

        // console.log('bkg-buttom: ', cardphotoForm.getBoundingClientRect().height - parseFloat(elemBkgButtom.style.top) - elemBkgButtom.getBoundingClientRect().height)
    }

    function checkActiveMoveNewImage() {
        newImage.removeEventListener('mousemove', moveNewImage);
    }

    let startNewImageY;
    let startNewImageX;

    function startMoveNewImage(event) {
        startNewImageY = event.pageY;
        startNewImageX = event.pageX;
    }

    // let pageOutX;
    // let pageOutY;
  
    let temporaryDeltaMoveImageX;
    let temporaryDeltaMoveImageY;
    let valueCircleX;
    let valueCircleY;
    let moveX;
    let moveY;

    let moveNewImageLeft;
    let moveNewImageTop;
    let moveNewImageRight;
    let moveNewImageButtom;

    function moveCardphotoForm(event) {
        // console.log('cardphotoForm event: ', event.pageX, event.pageY);

        if (
            event.pageX < newImage.getBoundingClientRect().left ||
            event.pageX > newImage.getBoundingClientRect().left + newImage.getBoundingClientRect().width ||
            event.pageY < newImage.getBoundingClientRect().top ||
            event.pageY > newImage.getBoundingClientRect().top + newImage.getBoundingClientRect().height
        ) {
            console.log('out image');
        }
    }

    // let temporaryMoveX;
    // let temporaryMoveY;

    // function moveMainBlock(event) {
    //     // pageOutX = event.pageX;
    //     // pageOutY = event.pageY;

    //     // if (
    //     //     event.pageX < newImage.getBoundingClientRect().left ||
    //     //     event.pageY < newImage.getBoundingClientRect().top || 
    //     //     event.pageX > newImage.getBoundingClientRect().left + newImage.getBoundingClientRect().width ||
    //     //     event.pageY > newImage.getBoundingClientRect().top + cardphotoForm.getBoundingClientRect().height
    //     // ) {

    //         if (temporaryMoveX || temporaryMoveY) {

    //             if (event.pageX < newImage.getBoundingClientRect().left) {
                    
    //                 if (event.pageX <= temporaryMoveX) {
    //                     moveInsideNewImage('left', event.pageY - startNewImageY);
    //                     console.log('left')
    //                 } else {
    //                     newImage.style.left = '0px'; 
    //                     console.log('BACK LEFT');
    //                     temporaryMoveX = null;
    //                     temporaryMoveY = null;

    //                 }
    //             }

    //             if (event.pageY < newImage.getBoundingClientRect().top) {
                    
    //                 if (event.pageY <= temporaryMoveY) {
    //                     moveNewImage(event);
    //                     console.log('top')
    //                 } else {
    //                     newImage.style.left = '0px'; 
    //                     console.log('BACK TOP');
    //                     temporaryMoveX = null;
    //                     temporaryMoveY = null;

    //                 }
    //             }


    //             // if (event.pageX < newImage.getBoundingClientRect().left && event.pageX > temporaryMoveX) {
    //             // }
    
    //             if (event.pageY < newImage.getBoundingClientRect().top && event.pageY > temporaryMoveY) {
    //                 console.log('BACK TOP');
    //                 temporaryMoveX = null;
    //                 temporaryMoveY = null;
    //             }

    //         }
    
    //         temporaryMoveX = event.pageX;
    //         temporaryMoveY = event.pageY;
    //     // }
    // }

    function moveInsideNewImage(moveX, moveY) {

        if (moveX == 'left' || moveX == 'right' || moveY == 'top' || moveY == 'buttom') {
  
            switch (moveX) {
                case 'left':
                    newImage.style.left = '0px'; 
                    newImage.style.top = parseFloat(circleStart1.style.top) + moveY + 'px'
                    
                    moveX = -parseFloat(circleStart1.style.left);
                    break;
                case 'right':
                    newImage.style.left = cardphotoForm.getBoundingClientRect().width - newImage.getBoundingClientRect().width + 'px';
                    newImage.style.top = parseFloat(circleStart1.style.top) + moveY + 'px';

                    moveX = cardphotoForm.getBoundingClientRect().width - newImage.getBoundingClientRect().width - parseFloat(circleStart1.style.left);
                    break;
            }
                    
            switch (moveY) {
                case 'top':
                    newImage.style.left = parseFloat(circleStart1.style.left) + moveX + 'px'; 
                    newImage.style.top = '0px'; 

                    moveY = -parseFloat(circleStart1.style.top);
                    break;
                case 'buttom':
                    newImage.style.left = parseFloat(circleStart1.style.left) + moveX + 'px'; 
                    newImage.top = cardphotoForm.getBoundingClientRect().height - newImage.getBoundingClientRect().height + 'px';

                    moveY = cardphotoForm.getBoundingClientRect().height - newImage.getBoundingClientRect().height - parseFloat(circleStart1.style.top);
                    break;
            }
        } else {   
            newImage.style.left = parseFloat(circleStart1.style.left) + moveX + 'px'; 
            newImage.style.top = parseFloat(circleStart1.style.top) + moveY + 'px';
        }

        circles.forEach(el => {

            valueCircleX = 
                document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left + 
                moveX;

            valueCircleY = 
                document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top + 
                moveY;

            el.style.top = 
                valueCircleY - 
                cardphotoForm.getBoundingClientRect().top -
                deltaCircle + 'px';
            el.style.left = 
                valueCircleX - 
                cardphotoForm.getBoundingClientRect().left -
                deltaCircle + 'px';
        })        
    }
        
    function moveNewImage(event) {

        // console.log('image event: ', event.pageX, event.pageY);

        moveY = event.pageY - startNewImageY;
        moveX = event.pageX - startNewImageX;

        moveNewImageLeft = parseFloat(circleStart1.style.left) + moveX;
        moveNewImageTop = parseFloat(circleStart1.style.top) + moveY;
        moveNewImageRight = parseFloat(circleStart1.style.left) + newImage.getBoundingClientRect().width + moveX;
        moveNewImageButtom = parseFloat(circleStart1.style.top) + newImage.getBoundingClientRect().height + moveY;

        if (
            moveNewImageLeft > 0 && 
            moveNewImageTop > 0 && 
            moveNewImageRight < cardphotoForm.getBoundingClientRect().width &&
            moveNewImageButtom < cardphotoForm.getBoundingClientRect().height
        ) {

            moveInsideNewImage(moveX, moveY);
            changeBackgroud();

        } else {

            if (temporaryDeltaMoveImageX || temporaryDeltaMoveImageY) {

                if (moveNewImageLeft <= 0 && moveNewImageTop <=0) {

                    if (moveNewImageLeft > temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX + moveNewImageLeft;
                    }   
                    
                    if (moveNewImageTop > temporaryDeltaMoveImageY) { 
                        startNewImageY = startNewImageY + moveNewImageTop ;
                    }
                }

                if (moveNewImageTop <=0 && moveNewImageRight >= cardphotoForm.getBoundingClientRect().width) {

                    if (moveNewImageLeft < temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX + (moveNewImageRight - cardphotoForm.getBoundingClientRect().width);
                    }   
                    
                    if (moveNewImageTop > temporaryDeltaMoveImageY ) { 
                        startNewImageY = startNewImageY + moveNewImageTop ;
                    }
                }

                if (moveNewImageRight >= cardphotoForm.getBoundingClientRect().width && moveNewImageButtom >= cardphotoForm.getBoundingClientRect().height) {

                    if (moveNewImageLeft < temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX + (moveNewImageRight - cardphotoForm.getBoundingClientRect().width);
                    }   
                    
                    if (moveNewImageTop < temporaryDeltaMoveImageY ) { 
                        startNewImageY = startNewImageY + (moveNewImageButtom - cardphotoForm.getBoundingClientRect().height);
                    }
                }

                if (moveNewImageButtom >= cardphotoForm.getBoundingClientRect().height && moveNewImageLeft <= 0) {

                    if (moveNewImageLeft < temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX + moveNewImageLeft;
                    }   
                    
                    if (moveNewImageTop < temporaryDeltaMoveImageY ) { 
                        startNewImageY = startNewImageY + (moveNewImageButtom - cardphotoForm.getBoundingClientRect().height);
                    }
                }
                
                if (
                    moveNewImageLeft <= 0 && 
                    moveNewImageTop > 0 &&
                    moveNewImageButtom < cardphotoForm.getBoundingClientRect().height
                ) {

                    if (
                        moveNewImageTop > 0 &&
                        moveNewImageButtom < cardphotoForm.getBoundingClientRect().height
                    ) {

                        moveInsideNewImage('left', moveY);
                        changeBackgroud();
                    }

                    if (moveNewImageLeft > temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX + moveNewImageLeft;
                    }     
                }

                if (
                    moveNewImageTop <= 0 && 
                    moveNewImageLeft > 0 && 
                    moveNewImageRight < cardphotoForm.getBoundingClientRect().width
                ) {

                    if (
                        moveNewImageLeft > 0 &&
                        moveNewImageRight < cardphotoForm.getBoundingClientRect().width
                    ) {            

                        moveInsideNewImage(moveX, 'top');
                        changeBackgroud();
                    }

                    if (moveNewImageTop > temporaryDeltaMoveImageY) { 
                        startNewImageY = startNewImageY + moveNewImageTop ;
                    }
                }

                if (
                    moveNewImageRight >= cardphotoForm.getBoundingClientRect().width &&
                    moveNewImageTop > 0 &&
                    moveNewImageButtom < cardphotoForm.getBoundingClientRect().height
                    ) {

                    if (
                        moveNewImageTop > 0 &&
                        moveNewImageButtom < cardphotoForm.getBoundingClientRect().height
                    ) {
                        
                        moveInsideNewImage('right', moveY);
                        changeBackgroud();
                    }

                    if (moveNewImageLeft < temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX + (moveNewImageRight - cardphotoForm.getBoundingClientRect().width);
                    }
                }

                if (
                    moveNewImageButtom >= cardphotoForm.getBoundingClientRect().height &&
                    moveNewImageRight < cardphotoForm.getBoundingClientRect().width &&
                    moveNewImageLeft > 0
                    ) {

                    if (
                        moveNewImageLeft >= 0 &&
                        moveNewImageRight <= cardphotoForm.getBoundingClientRect().width
                    ) {
                        
                        moveInsideNewImage(moveX, 'buttom');
                        changeBackgroud();
                    }

                    if (moveNewImageTop < temporaryDeltaMoveImageY) { 
                        startNewImageY = startNewImageY + (moveNewImageButtom - cardphotoForm.getBoundingClientRect().height);
                    }
                }
            } 
            
            temporaryDeltaMoveImageX = moveNewImageLeft;
            temporaryDeltaMoveImageY = moveNewImageTop;
        }
    };

    function resizeNewImage() {
        newImage.style.top = circleStart1.style.top;
        newImage.style.left = circleStart1.style.left;
        newImage.style.width = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left + 'px';
        newImage.style.height = circle4.getBoundingClientRect().top - circle1.getBoundingClientRect().top + 'px';
    }

    function reRecordCircleStart() {
        circlesStart.forEach(el => {
            switch (el.dataset.dndStart) {
                case 'circle-1':
                    el.style.top = 
                        circle1.getBoundingClientRect().top -
                        cardphotoForm.getBoundingClientRect().top + deltaCircle + 'px';
                    el.style.left = circle1.getBoundingClientRect().left - 
                        cardphotoForm.getBoundingClientRect().left + 
                        deltaCircle + 'px';  
                    break;
                case 'circle-2':
                    el.style.top = 
                        circle2.getBoundingClientRect().top -
                        cardphotoForm.getBoundingClientRect().top + deltaCircle + 'px';
                    el.style.left = circle2.getBoundingClientRect().left - 
                        cardphotoForm.getBoundingClientRect().left + 
                        deltaCircle + 'px';
                    break;
                case 'circle-3':
                    el.style.top = 
                        circle3.getBoundingClientRect().top -
                        cardphotoForm.getBoundingClientRect().top + deltaCircle + 'px';
                    el.style.left = circle3.getBoundingClientRect().left - 
                        cardphotoForm.getBoundingClientRect().left + 
                        deltaCircle + 'px';
                    break;
                case 'circle-4':
                    el.style.top = 
                        circle4.getBoundingClientRect().top -
                        cardphotoForm.getBoundingClientRect().top + deltaCircle + 'px';
                    el.style.left = circle4.getBoundingClientRect().left - 
                        cardphotoForm.getBoundingClientRect().left + 
                        deltaCircle + 'px';
                    break;
            }
        });

        resizeNewImage();
    }

    function formationNewImage() {

        let movieY;

        circles.forEach(el => {

            function circleMouseMove(event) { 

                movieY = 
                    event.pageY - 
                    document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top;

                const valueY =  
                    document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top - 
                    cardphotoForm.getBoundingClientRect().top +
                    movieY - deltaCircle;

                switch (el.dataset.dnd) {
                    case 'circle-1':
                        const valueX1 = 
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoForm.getBoundingClientRect().top < cardphoto.getBoundingClientRect().top - deltaCircle ||
                            valueX1 < 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoForm.getBoundingClientRect().left - 
                                deltaCircle
                        ) { break }

                        el.style.top = valueY + 'px';
                        el.style.left = valueX1 + 'px';

                        circle2.style.top = valueY + 'px';
                        circle4.style.left = valueX1 + 'px';

                        elemBkgLeft.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgLeft.style.left =
                            cardphoto.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 'px';
                        elemBkgLeft.style.width = 
                            circleStart1.getBoundingClientRect().left -
                            cardphoto.getBoundingClientRect().left + 
                            movieY * 1.42 + 'px';
                        elemBkgLeft.style.height = 
                            cardphoto.getBoundingClientRect().height + 'px';

                        elemBkgUp.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top + 
                            movieY + 'px';

                        elemBkgButtom.style.bottom = 
                            cardphotoForm.getBoundingClientRect().height +
                            cardphotoForm.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            cardphoto.getBoundingClientRect().top +
                            cardphoto.getBoundingClientRect().height -
                            circleStart4.getBoundingClientRect().top + 'px';


                        newImage.style.left = circleStart1.getBoundingClientRect().left -
                            cardphoto.getBoundingClientRect().left + 
                            movieY * 1.42 + 'px';
                        newImage.style.top = circleStart1.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top + 
                            movieY + 'px';
                        newImage.style.width = circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        newImage.style.height = circleStart4.getBoundingClientRect().top -
                            circleStart1.getBoundingClientRect().top -
                            movieY + 'px';

                        break;
                    case 'circle-2':
                        const valueX2 = 
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left -
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoForm.getBoundingClientRect().top < cardphoto.getBoundingClientRect().top - deltaCircle ||
                            valueX2 > 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoForm.getBoundingClientRect().left + 
                                cardphoto.getBoundingClientRect().width - 
                                deltaCircle
                        ) { break }

                        // if (!deltaBkgY2) {deltaBkgY2 = 0};

                        el.style.top = valueY + 'px';
                        el.style.left = valueX2 + 'px';

                        circle1.style.top = valueY + 'px';
                        circle3.style.left = valueX2 + 'px';

                        elemBkgUp.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top + 
                            movieY + 'px';

                        elemBkgRight.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgRight.style.left = 
                            circleStart2.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.width = 
                            cardphoto.getBoundingClientRect().left + 
                            cardphoto.getBoundingClientRect().width -
                            circleStart2.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.height = cardphoto.getBoundingClientRect().height + 'px';

                        elemBkgButtom.style.bottom = 
                            cardphotoForm.getBoundingClientRect().height +
                            cardphotoForm.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            cardphoto.getBoundingClientRect().top +
                            cardphoto.getBoundingClientRect().height -
                            circleStart3.getBoundingClientRect().top + 'px';

                        newImage.style.top = circleStart1.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top + 
                            movieY + 'px';
                        newImage.style.width = circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        newImage.style.height = circleStart4.getBoundingClientRect().top -
                            circleStart1.getBoundingClientRect().top -
                            movieY + 'px';

                        break;

                    case 'circle-3':
                        const valueX3 =
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left +
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoForm.getBoundingClientRect().top > 
                                cardphoto.getBoundingClientRect().top + 
                                cardphoto.getBoundingClientRect().height - 
                                deltaCircle ||
                            valueX3 > 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoForm.getBoundingClientRect().left + 
                                cardphoto.getBoundingClientRect().width - 
                                deltaCircle
                        ) { break }

                        // if (!deltaBkgY3) {deltaBkgY3 = 0};

                        el.style.top = valueY + 'px';
                        el.style.left = valueX3 + 'px';

                        circle4.style.top = valueY + 'px';
                        circle2.style.left = valueX3 + 'px';
                        
                        elemBkgRight.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgRight.style.left = 
                            circleStart2.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.width = 
                            cardphoto.getBoundingClientRect().left + 
                            cardphoto.getBoundingClientRect().width -
                            circleStart2.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.height = cardphoto.getBoundingClientRect().height + 'px';
                        
                        elemBkgButtom.style.top = 
                            parseFloat(circleStart4.style.top) + movieY + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            cardphoto.getBoundingClientRect().top +
                            cardphoto.getBoundingClientRect().height -
                            circleStart3.getBoundingClientRect().top -
                            movieY + 'px';

                        elemBkgUp.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top + 'px';

                        newImage.style.width = circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        newImage.style.height = circleStart4.getBoundingClientRect().top -
                            circleStart1.getBoundingClientRect().top +
                            movieY + 'px';

                        break;
                    case 'circle-4':
                        const valueX4 = 
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left - 
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoForm.getBoundingClientRect().top > cardphoto.getBoundingClientRect().top + cardphoto.getBoundingClientRect().height - deltaCircle ||
                            valueX4 < 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoForm.getBoundingClientRect().left - 
                                deltaCircle
                        ) { break }

                        // if (!deltaBkgY4) {deltaBkgY4 = 0};

                        el.style.top = valueY + 'px';
                        el.style.left = valueX4 + 'px';

                        circle3.style.top = valueY + 'px';
                        circle1.style.left = valueX4 + 'px';

                        elemBkgButtom.style.top = 
                            parseFloat(circleStart4.style.top) + movieY + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            cardphoto.getBoundingClientRect().top +
                            cardphoto.getBoundingClientRect().height -
                            circleStart4.getBoundingClientRect().top -
                            movieY + 'px';

                        elemBkgLeft.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgLeft.style.left = 
                            cardphoto.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left + 'px';
                        elemBkgLeft.style.width = 
                            circleStart4.getBoundingClientRect().left -
                            cardphoto.getBoundingClientRect().left - 
                            movieY * 1.42 + 'px';
                        elemBkgLeft.style.height = cardphoto.getBoundingClientRect().height + 'px';

                        elemBkgUp.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoForm.getBoundingClientRect().left - 
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top + 'px';

                        newImage.style.left = circleStart1.getBoundingClientRect().left -
                            cardphoto.getBoundingClientRect().left - 
                            movieY * 1.42 + 'px';
                        newImage.style.width = circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        newImage.style.height = circleStart4.getBoundingClientRect().top -
                            circleStart1.getBoundingClientRect().top +
                            movieY + 'px';

                        break;
                }


            }

            el.onmousedown = function() {
                // el.onmousemove = function() {
                //     console.log('111');
                //     // el.addEventListener('mousemove', reRecordCircleStart);
                //     // el.addEventListener('mousemove', resizeNewImage);
                // }
                // el.addEventListener('mousemove', moveCircles);
                newImage.removeEventListener('mouseenter', addClassHover);
                mainBlock.addEventListener('mousemove', circleMouseMove);
                // newImage.addEventListener('mousemove', moveNewImage);
                // resizeNewImage();
                mainBlock.onmouseup = function() {
                    mainBlock.removeEventListener('mousemove', circleMouseMove);
                    newImage.addEventListener('mouseenter', addClassHover);
                    // newImage.removeEventListener('mousemove', moveNewImage);
                    // reRecordCircleStart();
                    mainBlock.onmouseup = null;
                    el.onmouseup = null;
                }
            }
        }); 

        document.ondragstart = function() {
            return false;
        }

        newImage.addEventListener('mouseenter', checkActiveMoveNewImage);
        newImage.addEventListener('mouseenter', addClassHover);
        // newImage.addEventListener('mouseenter', clearTemporaryValue);
        newImage.addEventListener('mouseleave', delClassHover);
        newImage.addEventListener('pointerdown', startMoveNewImage);
        newImage.onmousedown = function() {
            newImage.addEventListener('mousemove', moveNewImage);
            cardphotoForm.addEventListener('mousemove', moveCardphotoForm);
            // mainBlock.addEventListener('mousemove', checkDirectionMoveEvent);
            // mainBlock.addEventListener('mousemove', moveMainBlock);
            newImage.onmouseup = function() {
                newImage.removeEventListener('mousemove', moveNewImage);
                cardphotoForm.removeEventListener('mousemove', moveCardphotoForm);
                // reRecordCircleStart();
                newImage.onmouseup = null;
            }
            // mainBlock.onmouseup = function() {
            //     // mainBlock.removeEventListener('mousemove', checkDirectionMoveEvent);
            //     mainBlock.removeEventListener('mousemove', moveMainBlock);
            // }
        }
        

        // mainBlock.onmouseup = function() {
        //     // mainBlock.removeEventListener('mousemove', circleMouseMove);
        //     // newImage.addEventListener('mouseenter', addClassHover);
        //     // newImage.removeEventListener('mousemove', moveNewImage);
        //     reRecordCircleStart();
        //     console.log('mouseUp')
        //     // mainBlock.onmouseup = null;
        //     // el.onmouseup = null;
        // }
    }

    mainBlock.addEventListener('pointerup', reRecordCircleStart);

    //** torn */

    function cardphotoTorn() {

        // setSizeNewImage();
        // setSizeCardphotoForm();

        // const total = 2129;

        // for (let i = total; i > 1800; i--) {

        //     const etalon = '294872';

        //     const fullNumber = (i / 78).toFixed(6).split('');

        //     const fractionMumber = fullNumber[3] + fullNumber[4] + fullNumber[5] + fullNumber[6] + fullNumber[7] + fullNumber[8];

        //     // console.log('fraction: ', fractionMumber)

        //     if (fractionMumber == etalon) {
        //         console.log('number: ', i)
        //     }
        // }

        const cardphotoImage = document.querySelector('.cardphoto-image');
        const deltaCircle = circle1.offsetWidth / 2;

        let leftX;
        const leftY = newImage.style.top;

        if (newImage.getBoundingClientRect().width < cardphotoForm.getBoundingClientRect().height) {
            console.log('0');
            leftX = newImage.style.left;

        } else {
            console.log('1');
            newImage.style.width = cardphotoForm.getBoundingClientRect().height + 'px';
            newImage.style.height = newImage.getBoundingClientRect().width / 1.42 + 'px';
            leftX = 0;
        }

        switch (getComputedStyle(cardphotoImage).transform) {
            case 'none':
                cardphotoImage.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';
                break;
            case 'matrix(1, 0, 0, 1, 0, 0)':
                cardphotoImage.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';
                break;
            case 'matrix(0, 1, -1, 0, 0, 0)':
                cardphotoImage.style.transform = 'matrix(-1, 0, 0, -1, 0, 0)';
                break;
            case 'matrix(-1, 0, 0, -1, 0, 0)':
                cardphotoImage.style.transform = 'matrix(0, -1, 1, 0, 0, 0)';
                break;
            case 'matrix(0, -1, 1, 0, 0, 0)':
                cardphotoImage.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                break;
        }

        setSizeCardphotoForm()
        const newCoordinates = positiononigNewImage(leftX, leftY);
        setCoordinatesCircles(
            parseFloat(newCoordinates[0]), 
            parseFloat(newCoordinates[1]), 
            parseFloat(newCoordinates[0]) + newImage.getBoundingClientRect().width,
            parseFloat(newCoordinates[1]) + newImage.getBoundingClientRect().height,
            deltaCircle
        );

        resizeNewImage();
        resizeBackground();
    }
} 

// export function changeSizeImageForm() {
    
//     cardphotoForm.style.left = cardphoto.getBoundingClientRect().left - mainBlock.getBoundingClientRect().left + 'px';
//     cardphotoForm.style.width = cardphoto.getBoundingClientRect().width + 'px';
//     cardphotoForm.style.height = cardphoto.getBoundingClientRect().height + 'px';
// }

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

    function changeBackgroud(moveY, moveX) {

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

        elemBkgButtom.style.bottom = '0px';
        elemBkgButtom.style.left = newImage.style.left;
        elemBkgButtom.style.width = newImage.style.width;
        elemBkgButtom.style.height = cardphotoForm.getBoundingClientRect().height - parseFloat(newImage.style.top) - parseFloat(newImage.style.height) + 'px';
    }
    
    // function changeBackgroud(moveY, moveX) {

    //     elemBkgLeft.style.top = 
    //         cardphoto.getBoundingClientRect().top - 
    //         cardphotoForm.getBoundingClientRect().top + 'px';
    //     elemBkgLeft.style.left =
    //         cardphoto.getBoundingClientRect().left - 
    //         cardphotoForm.getBoundingClientRect().left + 'px';
    //     elemBkgLeft.style.width = 
    //         circleStart1.getBoundingClientRect().left -
    //         cardphoto.getBoundingClientRect().left +
    //         moveX + 'px';
    //     elemBkgLeft.style.height = 
    //         cardphoto.getBoundingClientRect().height + 'px';

    //     elemBkgUp.style.top = 
    //         cardphoto.getBoundingClientRect().top - 
    //         cardphotoForm.getBoundingClientRect().top + 'px';
    //     elemBkgUp.style.left = 
    //         circleStart1.getBoundingClientRect().left - 
    //         cardphotoForm.getBoundingClientRect().left +
    //         moveX + 'px';
    //     elemBkgUp.style.width = 
    //         circleStart2.getBoundingClientRect().left -
    //         circleStart1.getBoundingClientRect().left + 'px';
    //     elemBkgUp.style.height = 
    //         circleStart1.getBoundingClientRect().top -
    //         cardphoto.getBoundingClientRect().top +
    //         moveY + 'px';

    //     elemBkgRight.style.top = 
    //         cardphoto.getBoundingClientRect().top - 
    //         cardphotoForm.getBoundingClientRect().top + 'px';
    //     elemBkgRight.style.left = 
    //         circleStart2.getBoundingClientRect().left - 
    //         cardphotoForm.getBoundingClientRect().left +
    //         moveX + 'px';
    //     elemBkgRight.style.width = 
    //         cardphoto.getBoundingClientRect().left + 
    //         cardphoto.getBoundingClientRect().width -
    //         circleStart2.getBoundingClientRect().left - 
    //         moveX + 'px';
    //     elemBkgRight.style.height = cardphoto.getBoundingClientRect().height + 'px';

    //     elemBkgButtom.style.bottom = 
    //         cardphotoForm.getBoundingClientRect().height +
    //         cardphotoForm.getBoundingClientRect().top -
    //         cardphoto.getBoundingClientRect().top -
    //         cardphoto.getBoundingClientRect().height + 'px';
    //     elemBkgButtom.style.left = 
    //         circleStart4.getBoundingClientRect().left - 
    //         cardphotoForm.getBoundingClientRect().left +
    //         moveX + 'px';
    //     elemBkgButtom.style.width = 
    //         circleStart3.getBoundingClientRect().left -
    //         circleStart4.getBoundingClientRect().left + 'px'
    //     elemBkgButtom.style.height =
    //         cardphoto.getBoundingClientRect().top +
    //         cardphoto.getBoundingClientRect().height -
    //         circleStart4.getBoundingClientRect().top -
    //         moveY + 'px';
    // }

    let startNewImageY;
    let startNewImageX;

    function startMoveNewImage(event) {
        startNewImageY = event.pageY;
        startNewImageX = event.pageX;
    }

    let pauseNewImageX;
    let pauseNewImageY;
    let deltaMoveImageX;
    let deltaMoveImageY;
    let temporaryDeltaMoveImageX;
    let temporaryDeltaMoveImageY;
    // let stopMoveImage;
    let moveX;
    let moveY;
        
    function moveNewImage(event) {

        moveY = event.pageY - startNewImageY;
        moveX = event.pageX - startNewImageX;

        const borderMoveLeft = parseFloat(circleStart1.style.left) + moveX;
        const borderMoveTop = parseFloat(circleStart1.style.top) + moveY;
        const borderMoveRight = parseFloat(circleStart1.style.left) + newImage.getBoundingClientRect().width + moveX;
        const borderMoveButtom = parseFloat(circleStart1.style.top) + newImage.getBoundingClientRect().height + moveY;

        console.log('borderLeft: ', borderMoveLeft);
        console.log('borderTop: ', borderMoveTop);
        console.log('borderRight: ', borderMoveRight);
        console.log('borderButtom: ', borderMoveButtom);

        if (
            borderMoveLeft >= 0 && 
            borderMoveTop >= 0 && 
            borderMoveRight <= cardphotoForm.getBoundingClientRect().width &&
            borderMoveButtom <= cardphotoForm.getBoundingClientRect().height
        ) {

            changeBackgroud(moveY, moveX);
            
            newImage.style.left = parseFloat(circleStart1.style.left) + moveX + 'px'; 
            newImage.style.top = parseFloat(circleStart1.style.top) + moveY + 'px';

            circles.forEach(el => {

                const valueCircleX = 
                    document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left + 
                    moveX;

                const valueCircleY = 
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

            if (pauseNewImageX || pauseNewImageY) {
                pauseNewImageX = null;
                pauseNewImageY = null;
            }

            if (deltaMoveImageX || deltaMoveImageY) {
                deltaMoveImageX = null;
                deltaMoveImageY = null;
            }

        } else {

            if (!pauseNewImageX || !pauseNewImageY) {
                pauseNewImageX = event.pageX;
                pauseNewImageY = event.pageY;

                // stopMoveImage = true;
            }

            deltaMoveImageX = pauseNewImageX - event.pageX;
            deltaMoveImageY = pauseNewImageY - event.pageY;

            if (temporaryDeltaMoveImageX || temporaryDeltaMoveImageY) {

                if (borderMoveLeft <= 0) {

                    if (
                        borderMoveTop >= 0 &&
                        borderMoveButtom <= cardphotoForm.getBoundingClientRect().height
                    ) {
                        // newImage.style.top = parseFloat(circleStart1.style.top) + moveY + 'px';

                        // changeBackgroud(moveY, 0);

                        console.log('vertical')
                    }

                    if (deltaMoveImageX < temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX - deltaMoveImageX ;
                        startNewImageY = startNewImageY - deltaMoveImageY ;
    
                        deltaMoveImageX = null;
                        deltaMoveImageY = null;
                        // stopMoveImage = null;
                    }
                }

                if (borderMoveTop <= 0) {
                    if (deltaMoveImageY < temporaryDeltaMoveImageY) { 
                        startNewImageX = startNewImageX - deltaMoveImageX ;
                        startNewImageY = startNewImageY - deltaMoveImageY ;
                        
                        deltaMoveImageX = null;
                        deltaMoveImageY = null;
                        // stopMoveImage = null;
                    }
                }

                if (borderMoveRight >= cardphotoForm.getBoundingClientRect().width) {
                    if (deltaMoveImageX > temporaryDeltaMoveImageX) { 
                        startNewImageX = startNewImageX - deltaMoveImageX ;
                        startNewImageY = startNewImageY - deltaMoveImageY ;
    
                        deltaMoveImageX = null;
                        deltaMoveImageY = null;
                        // stopMoveImage = null;
                    }
                }

                if (borderMoveButtom >= cardphotoForm.getBoundingClientRect().height) {
                    if (deltaMoveImageY > temporaryDeltaMoveImageY) { 
                        startNewImageX = startNewImageX - deltaMoveImageX ;
                        startNewImageY = startNewImageY - deltaMoveImageY ;
    
                        deltaMoveImageX = null;
                        deltaMoveImageY = null;
                        // stopMoveImage = null;
                    }
                }
            } 
            
            temporaryDeltaMoveImageX = deltaMoveImageX;
            temporaryDeltaMoveImageY = deltaMoveImageY;
        }
    };

    function resizeNewImage() {
        newImage.style.top = circleStart1.style.top;
        newImage.style.left = circleStart1.style.left;
        newImage.style.width = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left + 'px';
        newImage.style.height = circle4.getBoundingClientRect().top - circle1.getBoundingClientRect().top + 'px';

        // if (conditionWidth) {

        // } else {
        //     newImage.style.top = circleStart1.style.top;
        //     newImage.style.left = circleStart1.style.left;
        //     newImage.style.width = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left + 'px';
        //     newImage.style.height = circle4.getBoundingClientRect().top - circle1.getBoundingClientRect().top + 'px';
        // }
    }

    function formationNewImage() {

        let movieY;

        circles.forEach(el => {

            function circleMouseMove(event) { 

                // console.log('move event: ', event)

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

                        elemBkgButtom.style.bottom = 
                            cardphotoForm.getBoundingClientRect().height +
                            cardphotoForm.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().height + 'px';
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
                        break;
                }
            }

            el.onmousedown = function() {
                newImage.removeEventListener('mouseenter', addClassHover);
                mainBlock.addEventListener('mousemove', circleMouseMove);
                mainBlock.onmouseup = function() {
                    mainBlock.removeEventListener('mousemove', circleMouseMove);
                    newImage.addEventListener('mouseenter', addClassHover);
                    reRecordCircleStart();
                    mainBlock.onmouseup = null;
                    el.onmouseup = null;
                }
            }
        }); 
        
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

        document.ondragstart = function() {
            return false;
        }

        newImage.addEventListener('mouseenter', addClassHover);
        newImage.addEventListener('mouseleave', delClassHover);
        newImage.addEventListener('pointerdown', startMoveNewImage);
        newImage.onmousedown = function() {
            newImage.addEventListener('mousemove', moveNewImage);
            newImage.onmouseup = function() {
                newImage.removeEventListener('mousemove', moveNewImage);
                reRecordCircleStart();
                newImage.onmouseup = null;
            }
        }
    }

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

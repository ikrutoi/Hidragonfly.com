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
    // const valueX1 = cardphotoImage.getBoundingClientRect().left;
    // const valueY1 = cardphotoImage.getBoundingClientRect().top;
    const valueWidth = cardphotoImage.getBoundingClientRect().width;
    const valueHeight = cardphotoImage.getBoundingClientRect().height;

    // cardphotoForm.style.left = valueX1 + 'px';
    // cardphotoForm.style.top = valueX1 + 'px';

    cardphotoForm.style.width = valueWidth + 'px';
    cardphotoForm.style.height = valueHeight + 'px';
}

// function getCoordinatesCircle() {
//     const valueX = circle1.getBoundingClientRect().left;
//     const valueY = circle1.getBoundingClientRect().top;
//     const coordinatesCircle1 = [valueX, valueY];

//     return coordinatesCircle1;
// }

export function changeCardphoto(elem) {  

    // const blockCardphotoChange = document.querySelector('.block-new-image');

    // newElemHTML(mainBlock, 'beforeend', '<div class="block-cardphoto-change"></div>'); 

    const mainNavMenuCardphoto = document.querySelector('.main-nav-menu--cardphoto');
    const mainNavCardphotoButton = document.querySelectorAll('.main-nav--cardphoto--button');
    const cardphotoInput = document.querySelector('.cardphoto-input');
    // const cardphotoImageStart = document.querySelector('.cardphoto-image-start');
    // const blockCardphotoChange = document.querySelector('.block-cardphoto-change');
    // const cardphotoCircles = document.querySelector('.cardphoto-circles');
    
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
        
        // firstStart = true;
    }

    // let firstStart;

    if (!cardphotoForm.classList.contains('created')) {
        createCircles();
    }



    // console.log('111firstStart: ', firstStart);

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

    const widthCardphotoImageStart = cardphotoImage.getBoundingClientRect().width;
    const heightCardphotoImageStart = cardphotoImage.getBoundingClientRect().height;
    let widthNewImageStart;
    let heightNewImageStart;
    let deltaXNewImage = (widthCardphotoImageStart - heightNewImageStart) / 2;
    let deltaYNewImage = (heightCardphotoImageStart - widthNewImageStart) / 2;

    function setSizeNewImage() {
        widthNewImageStart = newImage.getBoundingClientRect().width;
        heightNewImageStart = newImage.getBoundingClientRect().height;
        deltaXNewImage = (widthCardphotoImageStart - heightNewImageStart) / 2;
        deltaYNewImage = (heightCardphotoImageStart - widthNewImageStart) / 2;
    }

    let deltaCircle;
    let rotateImage;

    switch(elem.dataset.menuNav) {
        case 'add':
            cardphotoInput.addEventListener('change', checkImgSelection);
            break; 
        case 'change':
            elem.classList.toggle('active');
            cardphotoForm.classList.toggle('active');

            
            if (elem.classList.contains('active')) {
                // if (!blockCardphotoChange.classList.contains('created')) {
                //     console.log('createCircles!')
                //     createCircles();
                //     setStartCircles();
                // }

                // console.log('firstStart0', firstStart);

                // if (firstStart) {

                    // console.log('firstStart-->>')
                    deltaCircle = circle1.offsetWidth / 2;
                    const valueX1 = 0;
                    const valueY1 = 0;
                    const valueX2 = valueX1 + cardphotoImage.getBoundingClientRect().width;
                    const valueY3 = valueY1 + cardphotoImage.getBoundingClientRect().height;
                    // const valueX1 = 0;
                    // const valueY1 = 0;
                    // const valueX2 = valueX1 + cardphotoForm.getBoundingClientRect().width;
                    // const valueY3 = valueY1 + cardphotoForm.getBoundingClientRect().height;
            
                    setCoordinatesCircles(valueX1, valueY1, valueX2, valueY3, deltaCircle);
                // }
                
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
            // removeImage();
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

    function changeBackgroud(moveY, moveX) {

        elemBkgLeft.style.top = 
            cardphoto.getBoundingClientRect().top - 
            cardphotoForm.getBoundingClientRect().top + 'px';
        elemBkgLeft.style.left =
            cardphoto.getBoundingClientRect().left - 
            cardphotoForm.getBoundingClientRect().left + 'px';
        elemBkgLeft.style.width = 
            circleStart1.getBoundingClientRect().left -
            cardphoto.getBoundingClientRect().left +
            moveX + 'px';
        elemBkgLeft.style.height = 
            cardphoto.getBoundingClientRect().height + 'px';

        elemBkgUp.style.top = 
            cardphoto.getBoundingClientRect().top - 
            cardphotoForm.getBoundingClientRect().top + 'px';
        elemBkgUp.style.left = 
            circleStart1.getBoundingClientRect().left - 
            cardphotoForm.getBoundingClientRect().left +
            moveX + 'px';
        elemBkgUp.style.width = 
            circleStart2.getBoundingClientRect().left -
            circleStart1.getBoundingClientRect().left + 'px';
        elemBkgUp.style.height = 
            circleStart1.getBoundingClientRect().top -
            cardphoto.getBoundingClientRect().top +
            moveY + 'px';

        elemBkgRight.style.top = 
            cardphoto.getBoundingClientRect().top - 
            cardphotoForm.getBoundingClientRect().top + 'px';
        elemBkgRight.style.left = 
            circleStart2.getBoundingClientRect().left - 
            cardphotoForm.getBoundingClientRect().left +
            moveX + 'px';
        elemBkgRight.style.width = 
            cardphoto.getBoundingClientRect().left + 
            cardphoto.getBoundingClientRect().width -
            circleStart2.getBoundingClientRect().left - 
            moveX + 'px';
        elemBkgRight.style.height = cardphoto.getBoundingClientRect().height + 'px';

        elemBkgButtom.style.bottom = 
            cardphotoForm.getBoundingClientRect().height +
            cardphotoForm.getBoundingClientRect().top -
            cardphoto.getBoundingClientRect().top -
            cardphoto.getBoundingClientRect().height + 'px';
        elemBkgButtom.style.left = 
            circleStart4.getBoundingClientRect().left - 
            cardphotoForm.getBoundingClientRect().left +
            moveX + 'px';
        elemBkgButtom.style.width = 
            circleStart3.getBoundingClientRect().left -
            circleStart4.getBoundingClientRect().left + 'px'
        elemBkgButtom.style.height =
            cardphoto.getBoundingClientRect().top +
            cardphoto.getBoundingClientRect().height -
            circleStart4.getBoundingClientRect().top -
            moveY + 'px';
    }

    function changeBackgroudFromTorn(deltaX1, deltaY1, newImageWidth, newImageHeight, imageWidth, imageHeight, unit) {

        function unit13() {
            elemBkgLeft.style.top = '0px';
            elemBkgLeft.style.left = '0px';
            elemBkgLeft.style.width = deltaX1 + 'px';
            elemBkgLeft.style.height = imageHeight + 'px';
        
            elemBkgUp.style.top = '0px';
            elemBkgUp.style.left = deltaX1 + 'px';
            elemBkgUp.style.width = newImageHeight + 'px';
            elemBkgUp.style.height = deltaY1 + 'px';
        
            elemBkgRight.style.top = '0px';
            elemBkgRight.style.left = deltaX1 + newImageHeight + 'px';
            elemBkgRight.style.width = deltaX1 + 'px';
            elemBkgRight.style.height = imageHeight + 'px';
        
            elemBkgButtom.style.bottom = '0px';
            elemBkgButtom.style.left = deltaX1 + 'px';
            elemBkgButtom.style.width = newImageHeight + 'px'
            elemBkgButtom.style.height = deltaY1  + 'px';
        }

        function unit24() {
            elemBkgLeft.style.top = '0px';
            elemBkgLeft.style.left = '0px';
            elemBkgLeft.style.width = deltaY1 + 'px';
            elemBkgLeft.style.height = imageWidth + 'px';
        
            elemBkgUp.style.top = '0px';
            elemBkgUp.style.left = deltaY1 + 'px';
            elemBkgUp.style.width = newImageWidth + 'px';
            elemBkgUp.style.height = deltaX1 + 'px';
        
            elemBkgRight.style.top = '0px';
            elemBkgRight.style.left = deltaY1 + newImageWidth + 'px';
            elemBkgRight.style.width = deltaY1 + 'px';
            elemBkgRight.style.height = imageWidth + 'px';
        
            elemBkgButtom.style.bottom = '0px';
            elemBkgButtom.style.left = deltaY1 + 'px';
            elemBkgButtom.style.width = newImageWidth + 'px'
            elemBkgButtom.style.height = deltaX1  + 'px';
        }

        switch (unit) {
            case 'matrix(0, 1, -1, 0, 0, 0)': 
                unit13();
                break;
            case 'matrix(-1, 0, 0, -1, 0, 0)': 
                unit24();
                break;
            case 'matrix(0, -1, 1, 0, 0, 0)': 
                unit13();
                break;
            case 'matrix(1, 0, 0, 1, 0, 0)': 
                unit24()
                break; 
        }
    }

    let startNewImageY;
    let startNewImageX;

    function startMoveNewImage(event) {
        startNewImageY = event.pageY;
        startNewImageX = event.pageX;
    }

    let stopMoveNewImageCircle1;
    let stopMoveNewImageCircle2;
    let stopMoveNewImageCircle3;
    let stopMoveNewImageCircle4;

    let pauseNewImageX;
    let pauseNewImageY;
    let eventPageTemporaryX;
    let eventPageTemporaryY;
    let deltaMoveImageX;
    let deltaMoveImageY;

    let moveX;
    let moveY;
        
    function moveNewImage(event) {
        // if (positionImage == 'matrix(0, 1, -1, 0, 0, 0)') {
        //     console.log('matr-90')
        //     moveX = event.pageY - startNewImageY;
        //     moveY = event.pageX - startNewImageX;
        // } else {
        //     console.log('matr-0')
        //     moveY = event.pageY - startNewImageY;
        //     moveX = event.pageX - startNewImageX;
        // }
        moveY = event.pageY - startNewImageY;
        moveX = event.pageX - startNewImageX;

        if (!stopMoveNewImageCircle1 &&
            !stopMoveNewImageCircle2 && 
            !stopMoveNewImageCircle3 &&
            !stopMoveNewImageCircle4  
        ) {
            if (pauseNewImageX || pauseNewImageY) {
                pauseNewImageX = false;
                pauseNewImageY = false;
            }
        } else {
            if (pauseNewImageX || pauseNewImageY) {
                if (!deltaMoveImageX && !deltaMoveImageY) {

                    function changeStartNewImage() {
                        deltaMoveImageX = event.pageX - pauseNewImageX;
                        deltaMoveImageY = event.pageY - pauseNewImageY;
                        startNewImageX = startNewImageX + deltaMoveImageX;
                        startNewImageY = startNewImageY + deltaMoveImageY;
                        pauseNewImageX = null;
                        deltaMoveImageX = null;
                        pauseNewImageY = null;
                        deltaMoveImageY = null;
                    }

                    if (stopMoveNewImageCircle1 && stopMoveNewImageCircle4 || stopMoveNewImageCircle1 && stopMoveNewImageCircle2) {
                        if (eventPageTemporaryX < event.pageX || eventPageTemporaryY < event.pageY) {
                            changeStartNewImage();
                        }
                    }
                    if (stopMoveNewImageCircle2 && stopMoveNewImageCircle3 || stopMoveNewImageCircle3 && stopMoveNewImageCircle4) {
                        if (eventPageTemporaryX > event.pageX || eventPageTemporaryY > event.pageY) {
                            changeStartNewImage();
                        }
                    }
                }
            } else {
                pauseNewImageX = event.pageX;
                pauseNewImageY = event.pageY;
            }                
            eventPageTemporaryX = event.pageX;
            eventPageTemporaryY = event.pageY;
        }

        circles.forEach(el => {

            const valueCircleY = 
                document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top + 
                moveY;
            const valueCircleX = 
                document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left + 
                moveX;
            
            switch (el.dataset.dnd) {
                case 'circle-1':
                    if (
                        valueCircleY < cardphotoForm.getBoundingClientRect().top ||
                        valueCircleX < cardphotoForm.getBoundingClientRect().left
                    ) 
                    { 
                        stopMoveNewImageCircle1 = true;
                    } else {
                        stopMoveNewImageCircle1 = false;
                    };
                    
                    if (!stopMoveNewImageCircle1 &&
                        !stopMoveNewImageCircle2 && 
                        !stopMoveNewImageCircle3 &&
                        !stopMoveNewImageCircle4
                    ) {
                        moveCircles(el);
                    };
                    break;
                case 'circle-2':
                    if (
                        valueCircleY < cardphotoForm.getBoundingClientRect().top ||
                        valueCircleX > cardphotoForm.getBoundingClientRect().left + cardphotoForm.getBoundingClientRect().width
                    ) { 
                        stopMoveNewImageCircle2 = true;
                    } else {
                        stopMoveNewImageCircle2 = false;
                    }
                    
                    if (!stopMoveNewImageCircle1 &&
                        !stopMoveNewImageCircle2 && 
                        !stopMoveNewImageCircle3 &&
                        !stopMoveNewImageCircle4
                    ) {
                        moveCircles(el);
                    };
                    break;
                case 'circle-3':
                    if (
                        valueCircleY > cardphotoForm.getBoundingClientRect().top + cardphotoForm.getBoundingClientRect().height ||
                        valueCircleX > cardphotoForm.getBoundingClientRect().left + cardphotoForm.getBoundingClientRect().width
                    ) { 
                        stopMoveNewImageCircle3 = true;
                    } else {
                        stopMoveNewImageCircle3 = false;
                    }
                    
                    if (!stopMoveNewImageCircle1 &&
                        !stopMoveNewImageCircle2 && 
                        !stopMoveNewImageCircle3 &&
                        !stopMoveNewImageCircle4
                    ) {
                        moveCircles(el);
                    };
                    break;
                case 'circle-4':
                    if (
                        valueCircleY > cardphotoForm.getBoundingClientRect().top + cardphotoForm.getBoundingClientRect().height ||
                        valueCircleX < cardphotoForm.getBoundingClientRect().left
                    ) { 
                        stopMoveNewImageCircle4 = true;
                    } else {
                        stopMoveNewImageCircle4 = false;
                    }
                    
                    if (!stopMoveNewImageCircle1 &&
                        !stopMoveNewImageCircle2 && 
                        !stopMoveNewImageCircle3 &&
                        !stopMoveNewImageCircle4
                    ) {
                        moveCircles(el);
                    };
                    break;
            }

            function moveCircles(el) {

                if (positionImage == 'matrix(0, 1, -1, 0, 0, 0)') {
                    el.style.top = 
                      document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left - cardphotoImage.getBoundingClientRect().left -
                moveX + deltaCircle + 'px';
    
                    el.style.left = 
                document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top - cardphotoImage.getBoundingClientRect().top + 
                moveY - deltaCircle + 'px';

                } else {
                    el.style.top = 
                    valueCircleY - 
                    cardphotoForm.getBoundingClientRect().top -
                    deltaCircle + 'px';

                el.style.left = 
                    valueCircleX - 
                    cardphotoForm.getBoundingClientRect().left -
                    deltaCircle + 'px';

                }

                // el.style.top = 
                //     valueCircleY - 
                //     cardphotoForm.getBoundingClientRect().top -
                //     deltaCircle + 'px';

                // el.style.left = 
                //     valueCircleX - 
                //     cardphotoForm.getBoundingClientRect().left -
                //     deltaCircle + 'px';
            }
        })

        if (!stopMoveNewImageCircle1 &&
            !stopMoveNewImageCircle2 && 
            !stopMoveNewImageCircle3 &&
            !stopMoveNewImageCircle4
        ) {
            changeBackgroud(moveY, moveX);


            if (positionImage == 'matrix(0, 1, -1, 0, 0, 0)') {
                 setSizeNewImage();
                newImage.style.top = deltaYNewImage - moveX + 'px';
                newImage.style.left = deltaXNewImage + moveY + 'px';

            } else {
                newImage.style.top = circleStart1.getBoundingClientRect().top - cardphotoForm.getBoundingClientRect().top + moveY + 'px';
                newImage.style.left = circleStart1.getBoundingClientRect().left - cardphotoForm.getBoundingClientRect().left + moveX + 'px';

            }
        } 
        console.log('222', newImage.style.top, '/ ', newImage.style.left)
    };

    function formationNewImage() {

        function resizeNewImage() {
            newImage.style.top = circleStart1.style.top;
            newImage.style.left = circleStart1.style.left;
            newImage.style.width = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left - deltaCircle / 2 + 'px';
            newImage.style.height = circle4.getBoundingClientRect().top - circle1.getBoundingClientRect().top - deltaCircle / 2 + 'px';
        }

        // const elemBkgUp = document.querySelector('.background-image-up');
        // const elemBkgRight = document.querySelector('.background-image-right');
        // const elemBkgButtom = document.querySelector('.background-image-buttom');
        // const elemBkgLeft = document.querySelector('.background-image-left');

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
                        if (positionImage == 'matrix(0, 1, -1, 0, 0, 0)') {
                            // el.style.top = 
                            //     circle1.getBoundingClientRect().left -
                            //     cardphotoForm.getBoundingClientRect().left + deltaCircle + 'px';
                            // el.style.left = circle1.getBoundingClientRect().top - 
                            //     cardphotoForm.getBoundingClientRect().top + 
                            //     deltaCircle + 'px'; 
                        } else {
                            el.style.top = 
                                circle1.getBoundingClientRect().top -
                                cardphotoForm.getBoundingClientRect().top + deltaCircle + 'px';
                            el.style.left = circle1.getBoundingClientRect().left - 
                                cardphotoForm.getBoundingClientRect().left + 
                                deltaCircle + 'px';  
                        }
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
            // creationBackgrondImage(el)
            newImage.addEventListener('mousemove', moveNewImage);
            newImage.onmouseup = function() {
                console.log('333', newImage.style.top, '/ ', newImage.style.left)
                newImage.removeEventListener('mousemove', moveNewImage);
                console.log('444', newImage.style.top, '/ ', newImage.style.left)
                reRecordCircleStart();
                console.log('555', newImage.style.top, '/ ', newImage.style.left)
                newImage.onmouseup = null;
                console.log('666', newImage.style.top, '/ ', newImage.style.left)
            }
        }
    }

    //** torn */

    function cardphotoTorn() {

    setSizeNewImage();

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

        // const widthCardphotoImageStart = cardphotoImage.getBoundingClientRect().width;
        // const heightCardphotoImageStart = cardphotoImage.getBoundingClientRect().height;
        // const widthNewImageStart = newImage.getBoundingClientRect().width;
        // const heightNewImageStart = newImage.getBoundingClientRect().height;
        // const deltaXNewImage = (widthCardphotoImageStart - heightNewImageStart) / 2;
        // const deltaYNewImage = (heightCardphotoImageStart - widthNewImageStart) / 2;
        const deltaCircle = circle1.offsetWidth / 2;

        let coordinatesCircles;

        if (widthNewImageStart < heightCardphotoImageStart) {
            console.log('0');

        } else {
            console.log('1');
        }

        console.log('matr-90-1', heightCardphotoImageStart, heightNewImageStart)

        const startWidth = newImage.getBoundingClientRect().width;
        const startHeight = newImage.getBoundingClientRect().height;

        switch (getComputedStyle(cardphotoImage).transform) {
            case 'none':
                cardphotoImage.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';
                cardphotoForm.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';

                newImage.style.left = deltaXNewImage + 'px';
                newImage.style.top = deltaYNewImage + 'px';
                newImage.style.width = startHeight + 'px';
                newImage.style.height = startWidth + 'px';

                setCoordinatesCircles(deltaXNewImage, deltaYNewImage, deltaXNewImage + startHeight, deltaYNewImage + startWidth, deltaCircle);
                // changeBackgroudFromTorn(deltaXNewImage, deltaYNewImage, widthNewImageStart, heightNewImageStart, widthCardphotoImageStart, heightCardphotoImageStart, deltaCircle);

                break;
            case 'matrix(1, 0, 0, 1, 0, 0)':
                cardphotoImage.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';
                cardphotoForm.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';

                newImage.style.left = deltaXNewImage + 'px';
                newImage.style.top = deltaYNewImage + 'px';
                newImage.style.width = startHeight + 'px';
                newImage.style.height = startWidth + 'px';

                setCoordinatesCircles(deltaXNewImage, deltaYNewImage, deltaXNewImage + startHeight, deltaYNewImage + startWidth, deltaCircle);
                // changeBackgroudFromTorn(0, 0, deltaXNewImage, heightCardphotoImageStart, deltaCircle);

                break;
            case 'matrix(0, 1, -1, 0, 0, 0)':
                cardphotoImage.style.transform = 'matrix(-1, 0, 0, -1, 0, 0)';
                cardphotoForm.style.transform = 'matrix(-1, 0, 0, -1, 0, 0)';

                newImage.style.left = deltaYNewImage + 'px';
                newImage.style.top = deltaXNewImage + 'px';
                newImage.style.width = startWidth + 'px';
                newImage.style.height = startHeight + 'px';

                setCoordinatesCircles(deltaYNewImage, deltaXNewImage, deltaYNewImage + startWidth, deltaXNewImage + startHeight, deltaCircle);

                break;
            case 'matrix(-1, 0, 0, -1, 0, 0)':
                cardphotoImage.style.transform = 'matrix(0, -1, 1, 0, 0, 0)';
                cardphotoForm.style.transform = 'matrix(0, -1, 1, 0, 0, 0)';

                newImage.style.left = deltaXNewImage + 'px';
                newImage.style.top = deltaYNewImage + 'px';
                newImage.style.width = startHeight + 'px';
                newImage.style.height = startWidth + 'px';

                setCoordinatesCircles(deltaXNewImage, deltaYNewImage, deltaXNewImage + startHeight, deltaYNewImage + startWidth, deltaCircle);

                break;
            case 'matrix(0, -1, 1, 0, 0, 0)':
                cardphotoImage.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                cardphotoForm.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';

                newImage.style.left = deltaYNewImage + 'px';
                newImage.style.top = deltaXNewImage + 'px';
                newImage.style.width = startWidth + 'px';
                newImage.style.height = startHeight + 'px';

                setCoordinatesCircles(deltaYNewImage, deltaXNewImage, deltaYNewImage + startWidth, deltaXNewImage + startHeight, deltaCircle);

                break;
        }

        positionImage = getComputedStyle(cardphotoImage).transform;

        changeBackgroudFromTorn(deltaXNewImage, deltaYNewImage, widthNewImageStart, heightNewImageStart, widthCardphotoImageStart, heightCardphotoImageStart, getComputedStyle(cardphotoImage).transform);
        // startMoveNewImage();
        // moveNewImage()

    }
} 

// export function changeSizeImageForm() {
    
//     cardphotoForm.style.left = cardphoto.getBoundingClientRect().left - mainBlock.getBoundingClientRect().left + 'px';
//     cardphotoForm.style.width = cardphoto.getBoundingClientRect().width + 'px';
//     cardphotoForm.style.height = cardphoto.getBoundingClientRect().height + 'px';
// }

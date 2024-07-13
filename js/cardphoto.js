import { startPressActivation } from "./start-press-activation.js";
import { addClassHover } from "./start-press-activation.js";
import { delClassHover } from "./start-press-activation.js";
import { newElem } from "./new-element.js";
// import { dragNDrop } from "./dnd.js";
import { newElemHTML } from "./new-element.js";

const mainBlock = document.querySelector('.main-block');
const cardphoto = document.querySelector('.cardphoto');
const cardphotoImageForm = document.querySelector('.cardphoto-image-form');

export function cardphotoChange(elem) {   


    // const blockCardphotoChange = document.querySelector('.block-new-image');

    // newElemHTML(mainBlock, 'beforeend', '<div class="block-cardphoto-change"></div>'); 

    const mainNavMenuCardphoto = document.querySelector('.main-nav-menu--cardphoto');
    const mainNavCardphotoButton = document.querySelectorAll('.main-nav--cardphoto--button');
    const cardphotoInput = document.querySelector('.cardphoto-input');
    // const cardphotoImageStart = document.querySelector('.cardphoto-image-start');
    const cardphotoImage = document.querySelector('.cardphoto-image');
    const blockCardphotoChange = document.querySelector('.block-cardphoto-change');
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
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle circle-1" data-dnd="circle-1"></span>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle-start circle-1-start" data-dnd-start="circle-1"></span>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle circle-2" data-dnd="circle-2"></span>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle-start circle-2-start" data-dnd-start="circle-2"></span>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle circle-3" data-dnd="circle-3"></span>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle-start circle-3-start" data-dnd-start="circle-3"></span>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle circle-4" data-dnd="circle-4"></span>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<span class="circle-start circle-4-start" data-dnd-start="circle-4"></span>'); 
        newElemHTML(cardphotoImageForm, 'beforeend', '<div class="background-image background-image-up" data-bkg-image="bkg-image-up"></div>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<div class="background-image background-image-right" data-bkg-image="bkg-image-right"></div>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<div class="background-image background-image-buttom" data-bkg-image="bkg-image-buttom"></div>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<div class="background-image background-image-left" data-bkg-image="bkg-image-left"></div>');  
        newElemHTML(cardphotoImageForm, 'beforeend', '<div class="new-image"></div>');  
        
        blockCardphotoChange.classList.add('created');
        
        firstStart = true;
    }

    let firstStart;

    if (!blockCardphotoChange.classList.contains('created')) {
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

    switch(elem.dataset.menuNav) {
        case 'add':
            console.log('add2');
            cardphotoInput.addEventListener('change', checkImgSelection);
            break; 
        case 'change':
            elem.classList.toggle('active');
            blockCardphotoChange.classList.toggle('active');

            if (elem.classList.contains('active')) {
                // if (!blockCardphotoChange.classList.contains('created')) {
                //     console.log('createCircles!')
                //     createCircles();
                //     setStartCircles();
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
    
    const deltaCircle = circle1.offsetWidth / 2;
    const valueY1 = 0;
    const valueX1 = 0;
    const valueX2 = valueX1 + cardphotoImageForm.getBoundingClientRect().width;
    const valueY3 = valueY1 + cardphotoImageForm.getBoundingClientRect().height;
    
    function setStartCircles() {
        circle1.style.top = valueY1 - deltaCircle + 'px';
        circle1.style.left = valueX1 - deltaCircle + 'px';
        circleStart1.style.top = valueY1 + 'px';
        circleStart1.style.left = valueX1 + 'px';
        circle2.style.top = valueY1 - deltaCircle + 'px';
        circle2.style.left = valueX2 - deltaCircle + 'px';
        circleStart2.style.top = valueY1 + 'px';
        circleStart2.style.left = valueX2 + 'px';
        circle3.style.top = valueY3 - deltaCircle + 'px';
        circle3.style.left = valueX2 - deltaCircle + 'px';
        circleStart3.style.top = valueY3 + 'px';
        circleStart3.style.left = valueX2 + 'px';
        circle4.style.top = valueY3 - deltaCircle + 'px';
        circle4.style.left = valueX1 - deltaCircle + 'px';
        circleStart4.style.top = valueY3 + 'px';
        circleStart4.style.left = valueX1 + 'px';
    }

    if (firstStart) {
        setStartCircles();
    }

    function formationNewImage() {

        function resizeNewImage() {
            newImage.style.top = circleStart1.style.top;
            newImage.style.left = circleStart1.style.left;
            newImage.style.width = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left + 'px';
            newImage.style.height = circle4.getBoundingClientRect().top - circle1.getBoundingClientRect().top + 'px';
        }

        const elemBkgUp = document.querySelector('.background-image-up');
        const elemBkgRight = document.querySelector('.background-image-right');
        const elemBkgButtom = document.querySelector('.background-image-buttom');
        const elemBkgLeft = document.querySelector('.background-image-left');

        let movieY;

        circles.forEach(el => {

            function circleMouseMove(event) { 

                movieY = 
                    event.pageY - 
                    document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top;

                const valueY =  
                    document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top - 
                    cardphotoImageForm.getBoundingClientRect().top +
                    movieY - deltaCircle;

                switch (el.dataset.dnd) {
                    case 'circle-1':
                        const valueX1 = 
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoImageForm.getBoundingClientRect().top < cardphoto.getBoundingClientRect().top - deltaCircle ||
                            valueX1 < 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoImageForm.getBoundingClientRect().left - 
                                deltaCircle
                        ) { break }

                        el.style.top = valueY + 'px';
                        el.style.left = valueX1 + 'px';

                        circle2.style.top = valueY + 'px';
                        circle4.style.left = valueX1 + 'px';

                        elemBkgLeft.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgLeft.style.left =
                            cardphoto.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 'px';
                        elemBkgLeft.style.width = 
                            circleStart1.getBoundingClientRect().left -
                            cardphoto.getBoundingClientRect().left + 
                            movieY * 1.42 + 'px';
                        elemBkgLeft.style.height = 
                            cardphoto.getBoundingClientRect().height + 'px';

                        elemBkgUp.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 
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
                            cardphotoImageForm.getBoundingClientRect().height +
                            cardphotoImageForm.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left +
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
                            cardphotoImageForm.getBoundingClientRect().left -
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoImageForm.getBoundingClientRect().top < cardphoto.getBoundingClientRect().top - deltaCircle ||
                            valueX2 > 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoImageForm.getBoundingClientRect().left + 
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
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 'px';
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
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgRight.style.left = 
                            circleStart2.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.width = 
                            cardphoto.getBoundingClientRect().left + 
                            cardphoto.getBoundingClientRect().width -
                            circleStart2.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.height = cardphoto.getBoundingClientRect().height + 'px';

                        elemBkgButtom.style.bottom = 
                            cardphotoImageForm.getBoundingClientRect().height +
                            cardphotoImageForm.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 'px';
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
                            cardphotoImageForm.getBoundingClientRect().left +
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoImageForm.getBoundingClientRect().top > 
                                cardphoto.getBoundingClientRect().top + 
                                cardphoto.getBoundingClientRect().height - 
                                deltaCircle ||
                            valueX3 > 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoImageForm.getBoundingClientRect().left + 
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
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgRight.style.left = 
                            circleStart2.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.width = 
                            cardphoto.getBoundingClientRect().left + 
                            cardphoto.getBoundingClientRect().width -
                            circleStart2.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.height = cardphoto.getBoundingClientRect().height + 'px';
                        
                        elemBkgButtom.style.bottom = 
                            cardphotoImageForm.getBoundingClientRect().height +
                            cardphotoImageForm.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 'px';
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
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 'px';
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
                            cardphotoImageForm.getBoundingClientRect().left - 
                            movieY * 1.42 -
                            deltaCircle;

                        if (
                            valueY + cardphotoImageForm.getBoundingClientRect().top > cardphoto.getBoundingClientRect().top + cardphoto.getBoundingClientRect().height - deltaCircle ||
                            valueX4 < 
                                cardphoto.getBoundingClientRect().left - 
                                cardphotoImageForm.getBoundingClientRect().left - 
                                deltaCircle
                        ) { break }

                        // if (!deltaBkgY4) {deltaBkgY4 = 0};

                        el.style.top = valueY + 'px';
                        el.style.left = valueX4 + 'px';

                        circle3.style.top = valueY + 'px';
                        circle1.style.left = valueX4 + 'px';

                        elemBkgButtom.style.bottom = 
                            cardphotoImageForm.getBoundingClientRect().height +
                            cardphotoImageForm.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().top -
                            cardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left -
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
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgLeft.style.left = 
                            cardphoto.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 'px';
                        elemBkgLeft.style.width = 
                            circleStart4.getBoundingClientRect().left -
                            cardphoto.getBoundingClientRect().left - 
                            movieY * 1.42 + 'px';
                        elemBkgLeft.style.height = cardphoto.getBoundingClientRect().height + 'px';

                        elemBkgUp.style.top = 
                            cardphoto.getBoundingClientRect().top - 
                            cardphotoImageForm.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left - 
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
                            cardphotoImageForm.getBoundingClientRect().top + deltaCircle + 'px';
                        el.style.left = circle1.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 
                            deltaCircle + 'px';  
                        break;
                    case 'circle-2':
                        el.style.top = 
                            circle2.getBoundingClientRect().top -
                            cardphotoImageForm.getBoundingClientRect().top + deltaCircle + 'px';
                        el.style.left = circle2.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 
                            deltaCircle + 'px';
                        break;
                    case 'circle-3':
                        el.style.top = 
                            circle3.getBoundingClientRect().top -
                            cardphotoImageForm.getBoundingClientRect().top + deltaCircle + 'px';
                        el.style.left = circle3.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 
                            deltaCircle + 'px';
                        break;
                    case 'circle-4':
                        el.style.top = 
                            circle4.getBoundingClientRect().top -
                            cardphotoImageForm.getBoundingClientRect().top + deltaCircle + 'px';
                        el.style.left = circle4.getBoundingClientRect().left - 
                            cardphotoImageForm.getBoundingClientRect().left + 
                            deltaCircle + 'px';
                        break;
                }
            });

            resizeNewImage();
        }

        document.ondragstart = function() {
            return false;
        }

        let startNewImageY;
        let startNewImageX;

        function startMoveNewImage(event) {
            startNewImageY = event.pageY;
            startNewImageX = event.pageX;
        }

        function changeBackgroud(moveY, moveX) {

            elemBkgLeft.style.top = 
                cardphoto.getBoundingClientRect().top - 
                cardphotoImageForm.getBoundingClientRect().top + 'px';
            elemBkgLeft.style.left =
                cardphoto.getBoundingClientRect().left - 
                cardphotoImageForm.getBoundingClientRect().left + 'px';
            elemBkgLeft.style.width = 
                circleStart1.getBoundingClientRect().left -
                cardphoto.getBoundingClientRect().left +
                moveX + 'px';
            elemBkgLeft.style.height = 
                cardphoto.getBoundingClientRect().height + 'px';

            elemBkgUp.style.top = 
                cardphoto.getBoundingClientRect().top - 
                cardphotoImageForm.getBoundingClientRect().top + 'px';
            elemBkgUp.style.left = 
                circleStart1.getBoundingClientRect().left - 
                cardphotoImageForm.getBoundingClientRect().left +
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
                cardphotoImageForm.getBoundingClientRect().top + 'px';
            elemBkgRight.style.left = 
                circleStart2.getBoundingClientRect().left - 
                cardphotoImageForm.getBoundingClientRect().left +
                moveX + 'px';
            elemBkgRight.style.width = 
                cardphoto.getBoundingClientRect().left + 
                cardphoto.getBoundingClientRect().width -
                circleStart2.getBoundingClientRect().left - 
                moveX + 'px';
            elemBkgRight.style.height = cardphoto.getBoundingClientRect().height + 'px';

            elemBkgButtom.style.bottom = 
                cardphotoImageForm.getBoundingClientRect().height +
                cardphotoImageForm.getBoundingClientRect().top -
                cardphoto.getBoundingClientRect().top -
                cardphoto.getBoundingClientRect().height + 'px';
            elemBkgButtom.style.left = 
                circleStart4.getBoundingClientRect().left - 
                cardphotoImageForm.getBoundingClientRect().left +
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
            
        function moveNewImage(event) {
            const moveY = event.pageY - startNewImageY;
            const moveX = event.pageX - startNewImageX;

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
                            valueCircleY < cardphotoImageForm.getBoundingClientRect().top ||
                            valueCircleX < cardphotoImageForm.getBoundingClientRect().left
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
                            valueCircleY < cardphotoImageForm.getBoundingClientRect().top ||
                            valueCircleX > cardphotoImageForm.getBoundingClientRect().left + cardphotoImageForm.getBoundingClientRect().width
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
                            valueCircleY > cardphotoImageForm.getBoundingClientRect().top + cardphotoImageForm.getBoundingClientRect().height ||
                            valueCircleX > cardphotoImageForm.getBoundingClientRect().left + cardphotoImageForm.getBoundingClientRect().width
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
                            valueCircleY > cardphotoImageForm.getBoundingClientRect().top + cardphotoImageForm.getBoundingClientRect().height ||
                            valueCircleX < cardphotoImageForm.getBoundingClientRect().left
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
                    el.style.top = 
                        valueCircleY - 
                        cardphotoImageForm.getBoundingClientRect().top -
                        deltaCircle + 'px';

                    el.style.left = 
                        valueCircleX - 
                        cardphotoImageForm.getBoundingClientRect().left -
                        deltaCircle + 'px';
                }
            })

            if (!stopMoveNewImageCircle1 &&
                !stopMoveNewImageCircle2 && 
                !stopMoveNewImageCircle3 &&
                !stopMoveNewImageCircle4
            ) {
                changeBackgroud(moveY, moveX);

                console.log('newImage.left: ', newImage.getBoundingClientRect().left)
                console.log('newImage.top: ', newImage.getBoundingClientRect().top)

                console.log('newImage.left2: ', newImage.getBoundingClientRect().left + moveX)
                console.log('newImage.top2: ', newImage.getBoundingClientRect().top + moveY)

                newImage.style.top = circleStart1.getBoundingClientRect().top - cardphotoImageForm.getBoundingClientRect().top + moveY + 'px';
                newImage.style.left = circleStart1.getBoundingClientRect().left - cardphotoImageForm.getBoundingClientRect().left + moveX + 'px';
            } 
        };

        newImage.addEventListener('mouseenter', addClassHover);
        newImage.addEventListener('mouseleave', delClassHover);
        newImage.addEventListener('pointerdown', startMoveNewImage);
        newImage.onmousedown = function() {
            // creationBackgrondImage(el)
            newImage.addEventListener('mousemove', moveNewImage);
            newImage.onmouseup = function() {
                newImage.removeEventListener('mousemove', moveNewImage);
                reRecordCircleStart();
                newImage.onmouseup = null;
            }
        }

    }

    //** cardphoto torn */
    
    function cardphotoTorn() {

        switch (getComputedStyle(cardphoto).transform) {
            case 'matrix(1, 0, 0, 1, 0, 0)':
                cardphoto.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';
                break;
            case 'matrix(0, 1, -1, 0, 0, 0)':
                cardphoto.style.transform = 'matrix(-1, 0, 0, -1, 0, 0)';
                break;
            case 'matrix(-1, 0, 0, -1, 0, 0)':
                cardphoto.style.transform = 'matrix(0, -1, 1, 0, 0, 0)';
                break;
            case 'matrix(0, -1, 1, 0, 0, 0)':
                cardphoto.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                break;

        }

        changeSizeImageForm();
    }
} 

export function changeSizeImageForm() {
    cardphotoImageForm.style.left = cardphoto.getBoundingClientRect().left - mainBlock.getBoundingClientRect().left + 'px';
    cardphotoImageForm.style.width = cardphoto.getBoundingClientRect().width + 'px';
    cardphotoImageForm.style.height = cardphoto.getBoundingClientRect().width / 1.42 + 'px';
}

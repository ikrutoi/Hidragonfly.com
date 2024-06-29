import { startPressActivation } from "./start-press-activation.js";
import { addClassHover } from "./start-press-activation.js";
import { delClassHover } from "./start-press-activation.js";
import { newElem } from "./new-element.js";
// import { dragNDrop } from "./dnd.js";
import { newElemHTML } from "./new-element.js";

export function formationCardPhoto() {   
    const elemMain = document.querySelector('.main');
    const elemCardphoto = document.querySelector('.cardphoto');
    const elemCardphotoImageNav = document.querySelector('.cardphoto-img-nav');
    const elemCardphotoImageNavButton = document.querySelectorAll('.cardphoto-img-nav-button');
    const elemCardphotoInput = document.querySelector('.cardphoto-input');
    const elemCardphotoImageStart = document.querySelector('.cardphoto-img-start');
    const elemCardphotoImage = document.querySelector('.cardphoto-img');
    const blockNewImg = document.querySelector('.block-new-img');
    const cardphotoCircles = document.querySelector('.cardphoto-circles');
    
    function addActive() {
        this.classList.add('active');

        // setTimeout(() => {
        //         newElemHTML(elemCardphoto, 'beforeend', '<div class="cardphoto-newimg"></div>');  
        //     }, 1000);
        }
        
    function checkImgSelection(event) {
        console.log('this.value1: ', this.value);
        elemCardphotoImageStart.classList.add('deactivation');
        elemCardphotoImage.classList.add('active');
        const newImageFile = document.querySelector('.cardphoto-input').files[0];
        const imageURL = URL.createObjectURL(newImageFile);
        elemCardphotoImage.src = imageURL;
        elemCardphotoImage.onload = () => URL.revokeObjectURL(imageURL);
        event.value = null;

        // fetch('/upload', {method: 'POST', body: new FormData().append('image', newImageFile)})
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
        // console.log('*++*', event.target.files.length);
        // console.log('**', event.target);
    }

    function removeImage() {
        elemCardphotoImage.classList.remove('active');
        elemCardphotoImageStart.classList.remove('deactivation');
        elemCardphotoImage.src = '';
    }

    function addClassActive () {
        elemCardphotoImageNav.classList.add('active');
        // elemCardphotoImageNavButton.forEach(el => el.classList.add('wait-start'));
        // setTimeout(() => elemCardphotoImageNavButton.forEach(el => el.classList.add('wait')), 150);
    }
    
    function delClassActive () {
        // elemCardphotoImageNavButton.forEach(el => el.classList.remove('wait'));
        setTimeout(() => {
            elemCardphotoImageNav.classList.remove('active');
            // elemCardphotoImageNavButton.forEach(el => el.classList.remove('wait-start'));
        }, 150);
    }

    function creationCircle() {
        // newElem(elemMain, 'span', ['circle', 'circle-1']);
        newElemHTML(elemMain, 'beforeend', '<span class="circle circle-1" data-dnd="circle-1"></span>');  
        newElemHTML(elemMain, 'beforeend', '<span class="circle-start circle-1-start" data-dnd-start="circle-1"></span>');  
        // newElem(elemMain, 'span', ['circle-start', 'circle-start-1']);
        // newElem(elemMain, 'span', ['circle', 'circle-2']);
        newElemHTML(elemMain, 'beforeend', '<span class="circle circle-2" data-dnd="circle-2"></span>');  
        newElemHTML(elemMain, 'beforeend', '<span class="circle-start circle-2-start" data-dnd-start="circle-2"></span>');  
        // newElem(elemMain, 'span', ['circle-start', 'circle-start-2'], [['style', `top: ${valueY1}px; left: ${valueX2}px;`]]);
        // newElem(elemMain, 'span', ['circle', 'circle-3']);
        newElemHTML(elemMain, 'beforeend', '<span class="circle circle-3" data-dnd="circle-3"></span>');  
        newElemHTML(elemMain, 'beforeend', '<span class="circle-start circle-3-start" data-dnd-start="circle-3"></span>');  
        // newElem(elemMain, 'span', ['circle-start', 'circle-start-3'], [['style', `top: ${valueY3}px; left: ${valueX2}px;`]]);
        // newElem(elemMain, 'span', ['circle', 'circle-4']);
        newElemHTML(elemMain, 'beforeend', '<span class="circle circle-4" data-dnd="circle-4"></span>');  
        newElemHTML(elemMain, 'beforeend', '<span class="circle-start circle-4-start" data-dnd-start="circle-4"></span>');  
        // newElem(elemMain, 'span', ['circle-start', 'circle-start-4'], [['style', `top: ${valueY3}px; left: ${valueX1}px;`]]);
        newElemHTML(elemMain, 'beforeend', '<div class="background-image background-image-up" data-bkg-image="bkg-image-up"></div>');  
        newElemHTML(elemMain, 'beforeend', '<div class="background-image background-image-right" data-bkg-image="bkg-image-right"></div>');  
        newElemHTML(elemMain, 'beforeend', '<div class="background-image background-image-buttom" data-bkg-image="bkg-image-buttom"></div>');  
        newElemHTML(elemMain, 'beforeend', '<div class="background-image background-image-left" data-bkg-image="bkg-image-left"></div>');  
        
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
        const deltaCircle = circle1.offsetWidth / 2;
        const valueY1 = elemCardphoto.getBoundingClientRect().top - elemMain.getBoundingClientRect().top;
        const valueX1 = elemCardphoto.getBoundingClientRect().left;
        const valueX2 = valueX1 + elemCardphoto.getBoundingClientRect().width;
        const valueY3 = valueY1 + elemCardphoto.getBoundingClientRect().height;
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

        let deltaMouveY;
        let deltaBkgY1;
        let deltaBkgY2;
        let deltaBkgY3;
        let deltaBkgY4;

        circles.forEach(el => {
            let movieY;

            function circleMouseMove(event) {     
                    
                const elemBkgUp = document.querySelector('.background-image-up');
                const elemBkgRight = document.querySelector('.background-image-right');
                const elemBkgButtom = document.querySelector('.background-image-buttom');
                const elemBkgLeft = document.querySelector('.background-image-left');

                movieY = 
                    event.pageY - 
                    document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top;

                const valueY =  
                    document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().top - 
                    elemMain.getBoundingClientRect().top +
                    movieY - deltaCircle;

                el.style.top = valueY + 'px';

                switch (el.dataset.dnd) {
                    case 'circle-1':
                        if (!deltaBkgY1) {deltaBkgY1 = 0};

                        const valueX1 = 
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left + 
                            movieY * 1.42 -
                            deltaCircle;
                        el.style.left = valueX1 + 'px';
                        circle2.style.top = valueY + 'px';
                        circle4.style.left = valueX1 + 'px';

                        elemBkgLeft.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgLeft.style.left =
                            elemCardphoto.getBoundingClientRect().left + 'px';
                        elemBkgLeft.style.width = 
                            circleStart1.getBoundingClientRect().left -
                            elemCardphoto.getBoundingClientRect().left + 
                            movieY * 1.42 + 'px';
                        elemBkgLeft.style.height = 
                            elemCardphoto.getBoundingClientRect().height + 'px';

                        elemBkgUp.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left + 
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top + 
                            movieY + 'px';

                        elemBkgButtom.style.bottom = 
                            elemMain.getBoundingClientRect().height +
                            elemMain.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            elemCardphoto.getBoundingClientRect().top +
                            elemCardphoto.getBoundingClientRect().height -
                            circleStart4.getBoundingClientRect().top + 'px';
                        break;
                    case 'circle-2':
                        if (!deltaBkgY2) {deltaBkgY2 = 0};

                        const valueX2 = 
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left -
                            movieY * 1.42 -
                            deltaCircle;
                        el.style.left = valueX2 + 'px';
                        circle1.style.top = valueY + 'px';
                        circle3.style.left = valueX2 + 'px';

                        elemBkgUp.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top + 
                            movieY + 'px';

                        elemBkgRight.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgRight.style.left = 
                            circleStart2.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.width = 
                            elemCardphoto.getBoundingClientRect().left + 
                            elemCardphoto.getBoundingClientRect().width -
                            circleStart2.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.height = elemCardphoto.getBoundingClientRect().height + 'px';

                        elemBkgButtom.style.bottom = 
                            elemMain.getBoundingClientRect().height +
                            elemMain.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            elemCardphoto.getBoundingClientRect().top +
                            elemCardphoto.getBoundingClientRect().height -
                            circleStart3.getBoundingClientRect().top + 'px';
                        break;
                    case 'circle-3':
                        if (!deltaBkgY3) {deltaBkgY3 = 0};

                        const valueX3 =
                            circleStart2.getBoundingClientRect().left +
                            movieY * 1.42 -
                            deltaCircle;
                        el.style.left = valueX3 + 'px';
                        circle4.style.top = valueY + 'px';
                        circle2.style.left = valueX3 + 'px';
                        
                        elemBkgRight.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgRight.style.left = 
                            circleStart2.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.width = 
                            elemCardphoto.getBoundingClientRect().left + 
                            elemCardphoto.getBoundingClientRect().width -
                            circleStart2.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgRight.style.height = elemCardphoto.getBoundingClientRect().height + 'px';
                        
                        elemBkgButtom.style.bottom = 
                            elemMain.getBoundingClientRect().height +
                            elemMain.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            elemCardphoto.getBoundingClientRect().top +
                            elemCardphoto.getBoundingClientRect().height -
                            circleStart3.getBoundingClientRect().top -
                            movieY + 'px';

                        elemBkgUp.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top + 'px';
                        break;
                    case 'circle-4':
                        if (!deltaBkgY4) {deltaBkgY4 = 0};

                        const valueX4 = 
                            document.querySelector(`.${el.dataset.dnd}-start`).getBoundingClientRect().left - 
                            movieY * 1.42 -
                            deltaCircle;
                        el.style.left = valueX4 + 'px';
                        circle3.style.top = valueY + 'px';
                        circle1.style.left = valueX4 + 'px';

                        elemBkgButtom.style.bottom = 
                            elemMain.getBoundingClientRect().height +
                            elemMain.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().height + 'px';
                        elemBkgButtom.style.left = 
                            circleStart4.getBoundingClientRect().left -
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.width = 
                            circleStart3.getBoundingClientRect().left -
                            circleStart4.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgButtom.style.height =
                            elemCardphoto.getBoundingClientRect().top +
                            elemCardphoto.getBoundingClientRect().height -
                            circleStart4.getBoundingClientRect().top -
                            movieY + 'px';

                        elemBkgLeft.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgLeft.style.left = 
                            elemCardphoto.getBoundingClientRect().left + 'px';
                        elemBkgLeft.style.width = 
                            circleStart4.getBoundingClientRect().left -
                            elemCardphoto.getBoundingClientRect().left - 
                            movieY * 1.42 + 'px';
                        elemBkgLeft.style.height = elemCardphoto.getBoundingClientRect().height + 'px';

                        elemBkgUp.style.top = 
                            elemCardphoto.getBoundingClientRect().top - 
                            elemMain.getBoundingClientRect().top + 'px';
                        elemBkgUp.style.left = 
                            circleStart1.getBoundingClientRect().left - 
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.width = 
                            circleStart2.getBoundingClientRect().left -
                            circleStart1.getBoundingClientRect().left +
                            movieY * 1.42 + 'px';
                        elemBkgUp.style.height = 
                            circleStart1.getBoundingClientRect().top -
                            elemCardphoto.getBoundingClientRect().top + 'px';
                        break;
                }
            }

            function reRecordCircleStart(elem) {
                circlesStart.forEach(el => {
                    switch (el.dataset.dndStart) {
                        case 'circle-1':
                            el.style.top = 
                                circle1.getBoundingClientRect().top -
                                elemMain.getBoundingClientRect().top + deltaCircle + 'px';
                            el.style.left = circle1.getBoundingClientRect().left + deltaCircle + 'px';  
                            break;
                        case 'circle-2':
                            el.style.top = 
                                circle2.getBoundingClientRect().top -
                                elemMain.getBoundingClientRect().top + deltaCircle + 'px';
                            el.style.left = circle2.getBoundingClientRect().left + deltaCircle + 'px';
                            break;
                        case 'circle-3':
                            el.style.top = 
                                circle3.getBoundingClientRect().top -
                                elemMain.getBoundingClientRect().top + deltaCircle + 'px';
                            el.style.left = circle3.getBoundingClientRect().left + deltaCircle + 'px';
                            break;
                        case 'circle-4':
                            el.style.top = 
                                circle4.getBoundingClientRect().top -
                                elemMain.getBoundingClientRect().top + deltaCircle + 'px';
                            el.style.left = circle4.getBoundingClientRect().left + deltaCircle + 'px';
                            break;
                    }
                });

                switch (elem.dataset.dnd) {
                    case 'circle-1':
                        deltaBkgY1 = deltaBkgY1 + movieY;                       
                        break;
                    case 'circle-2':
                        deltaBkgY2 = deltaBkgY2 + movieY;
                        break;
                    case 'circle-3':
                        deltaBkgY3 = deltaBkgY3 - movieY;
                        break;
                    case 'circle-4':
                        deltaBkgY4 = deltaBkgY4 - movieY;
                        break;
                };
            }

            el.onmousedown = function() {
                // creationBackgrondImage(el)
                elemMain.addEventListener('mousemove', circleMouseMove);
                elemMain.onmouseup = function() {
                    elemMain.removeEventListener('mousemove', circleMouseMove);
                    reRecordCircleStart(el);
                    elemMain.onmouseup = null;
                    el.onmouseup = null;
                }
            }
            
            document.ondragstart = function() {
                return false;
            }
        })

    }

    function changeSizeImage() {
        creationCircle();
        // dragNDrop();
        // elemCardphotoImageStart.classList.add('deactivation');
        blockNewImg.classList.add('active');
    }

    function validationImageNavButton() {
        switch(this.dataset.cardphotoNav) {
            case 'add':
                elemCardphotoInput.addEventListener('change', checkImgSelection);
                break; 
            case 'chng':
                changeSizeImage();
                break; 
            case 'cut':
                console.log('cut');
                break; 
            case 'cntr':
                console.log('cntr');
                break; 
            case 'torn':
                console.log('torn');
                break; 
            case 'del':
                removeImage();
                break; 
        }
    }

    function validationMouseenter() {
        if (!elemCardphotoImageNav.classList.contains('active')) {
            addClassActive();
        }
    }

    
    elemCardphoto.addEventListener('mouseenter', addClassHover);
    elemCardphoto.addEventListener('mouseenter', addClassActive);
    elemCardphoto.addEventListener('mouseleave', delClassHover);
    elemCardphoto.addEventListener('mouseleave', delClassActive);
    elemCardphoto.addEventListener('pointerdown', addActive); 
    elemCardphoto.addEventListener('mousemove', validationMouseenter); 
    
    elemCardphotoImageNavButton.forEach(el => {
        el.addEventListener('mouseenter', addClassHover);
        el.addEventListener('mouseleave', delClassHover);
        el.addEventListener('pointerdown', () => startPressActivation(el));
        el.addEventListener('pointerdown', validationImageNavButton);
    })
}
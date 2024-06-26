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
        const valueY1 = elemCardphoto.getBoundingClientRect().top - elemMain.getBoundingClientRect().top - deltaCircle;
        const valueX1 = elemCardphoto.getBoundingClientRect().left - deltaCircle;
        const valueX2 = valueX1 + elemCardphoto.getBoundingClientRect().width;
        const valueY3 = valueY1 + elemCardphoto.getBoundingClientRect().height;
        circle1.style.top = valueY1 + 'px';
        circle1.style.left = valueX1 + 'px';
        circleStart1.style.top = valueY1 + 'px';
        circleStart1.style.left = valueX1 + 'px';
        circle2.style.top = valueY1 + 'px';
        circle2.style.left = valueX2 + 'px';
        circleStart2.style.top = valueY1 + 'px';
        circleStart2.style.left = valueX2 + 'px';
        circle3.style.top = valueY3 + 'px';
        circle3.style.left = valueX2 + 'px';
        circleStart3.style.top = valueY3 + 'px';
        circleStart3.style.left = valueX2 + 'px';
        circle4.style.top = valueY3 + 'px';
        circle4.style.left = valueX1 + 'px';
        circleStart4.style.top = valueY3 + 'px';
        circleStart4.style.left = valueX1 + 'px';

        circles.forEach(el => {

            function circleMouseMove(event) {
                // console.log('coordinate circle-start: ', document.querySelector(`.${el.dataset.dnd}-start`).style.left);
                const valueY = event.pageY - elemMain.getBoundingClientRect().top - deltaCircle + 'px';
                const deltaMouveY = (parseFloat(valueY) - parseFloat(document.querySelector(`.${el.dataset.dnd}-start`).style.top)).toFixed(2);
                const valueX = parseFloat(document.querySelector(`.${el.dataset.dnd}-start`).style.left) + parseFloat(deltaMouveY) * 1.42 + 'px';
                // const valueX = event.pageX - deltaCircle + 'px';
                el.style.top = valueY;
                el.style.left = valueX;

                switch (el.dataset.dnd) {
                    case 'circle-1':
                        circle2.style.top = valueY;
                        circle4.style.left = valueX;
                        break;
                    case 'circle-2':
                        circle1.style.top = valueY;
                        circle3.style.left = valueX;
                        break;
                    case 'circle-3':
                        circle4.style.top = valueY;
                        circle2.style.left = valueX;
                        break;
                    case 'circle-4':
                        circle3.style.top = valueY;
                        circle1.style.left = valueX;
                        break;
                }
            }

            function reRecordCircleStart() {
                circlesStart.forEach(el => {
                    switch (el.dataset.dndStart) {
                        case 'circle-1':
                            el.style.top = circle1.style.top;
                            el.style.left = circle1.style.left;
                            break;
                        case 'circle-2':
                            el.style.top = circle2.style.top;
                            el.style.left = circle2.style.left;
                            break;
                        case 'circle-3':
                            el.style.top = circle3.style.top;
                            el.style.left = circle3.style.left;
                            break;
                        case 'circle-4':
                            el.style.top = circle4.style.top;
                            el.style.left = circle4.style.left;
                            break;
                    }
                })
            }

            el.onmousedown = function() {
                elemMain.addEventListener('mousemove', circleMouseMove);
                elemMain.onmouseup = function() {
                    elemMain.removeEventListener('mousemove', circleMouseMove);
                    // el.removeEventListener('mousemove', circleMouseMove);
                    reRecordCircleStart();
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
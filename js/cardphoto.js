import { startPressActivation } from "./start-press-activation.js";
import { addClassHover } from "./start-press-activation.js";
import { delClassHover } from "./start-press-activation.js";
import { newElem } from "./new-element.js";
// import { dragNDrop } from "./dnd.js";
import { newElemHTML } from "./new-element.js";

export function formationCardPhoto() {   
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
        newElem(cardphotoCircles, 'span', ['circle', 'circle-1'], [['style', 'top: -5px; left: -5px;']]);
        newElem(cardphotoCircles, 'span', ['circle-start', 'circle-start-1'], [['style', 'top: -5px; left: -5px;']]);
        newElem(cardphotoCircles, 'span', ['circle', 'circle-2'], [['style', 'top: -5px; right: -5px;']]);
        newElem(cardphotoCircles, 'span', ['circle-start', 'circle-start-2'], [['style', 'top: -5px; right: -5px;']]);
        newElem(cardphotoCircles, 'span', ['circle', 'circle-3'], [['style', 'bottom: -5px; right: -5px;']]);
        newElem(cardphotoCircles, 'span', ['circle-start', 'circle-start-3'], [['style', 'bottom: -5px; right: -5px;']]);
        newElem(cardphotoCircles, 'span', ['circle', 'circle-4'], [['style', 'bottom: -5px; left: -5px;']]);
        newElem(cardphotoCircles, 'span', ['circle-start', 'circle-start-4'], [['style', 'bottom: -5px; left: -5px;']]);
        // newElem(cardphotoDrops, 'div', ['new-area']);

        const circle = document.querySelectorAll('.circle');
        const circle1 = document.querySelector('.circle-1');
        const circle1start = document.querySelector('.circle-start-1');
        const circle2 = document.querySelector('.circle-2');
        const circle2start = document.querySelector('.circle-start-2');
        const circle3 = document.querySelector('.circle-3');
        const circle3start = document.querySelector('.circle-start-3');
        const circle4 = document.querySelector('.circle-4');
        const circle4start = document.querySelector('.circle-start-4');
        // const areaCut = document.querySelector('.new-area');
        const deltaCircle = 5.5;
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
                console.log('chng');
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
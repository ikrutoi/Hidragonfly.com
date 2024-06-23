import { startPressActivation } from "./start-press-activation.js";
import { addClassHover } from "./start-press-activation.js";
import { delClassHover } from "./start-press-activation.js";
import { newElemHTML } from "./new-element.js";

export function formationCardPhoto() {   
    const elemCardphoto = document.querySelector('.cardphoto');
    const elemCardphotoImageNav = document.querySelector('.cardphoto-img-nav');
    const elemCardphotoImageNavButton = document.querySelectorAll('.cardphoto-img-nav-button');
    const elemCardphotoInput = document.querySelector('.cardphoto-input');
    const elemCardphotoImageStart = document.querySelector('.cardphoto-img-start');
    const elemCardphotoImage = document.querySelector('.cardphoto-img');
    
    function addActive() {
        this.classList.add('active');

        // setTimeout(() => {
        //         newElemHTML(elemCardphoto, 'beforeend', '<div class="cardphoto-newimg"></div>');  
        //     }, 1000);
        }
        
    function checkImgSelection(event) {
        console.log('this.value: ', this.value);
        elemCardphotoImageStart.classList.add('deactivation');
        elemCardphotoImage.classList.add('active');
        const newImageFile = document.querySelector('.cardphoto-input').files[0];
        const imageURL = URL.createObjectURL(newImageFile);
        elemCardphotoImage.src = imageURL;
        event.value = null;
        elemCardphotoImage.onload = () => URL.revokeObjectURL(imageURL);

        // fetch('/upload', {method: 'POST', body: new FormData().append('image', newImageFile)})
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
        // console.log('*++*', event.target.files.length);
        // console.log('**', event.target);
    }

    function addClassActive () {
        elemCardphotoImageNav.classList.add('active');
        elemCardphotoImageNavButton.forEach(el => el.classList.add('wait-start'));
        setTimeout(() => elemCardphotoImageNavButton.forEach(el => el.classList.add('wait')), 150);
    }
    
    function delClassActive () {
        elemCardphotoImageNavButton.forEach(el => el.classList.remove('wait'));
        setTimeout(() => {
            elemCardphotoImageNav.classList.remove('active');
            elemCardphotoImageNavButton.forEach(el => el.classList.remove('wait-start'));
        }, 150);
    }

    function validationImageNavButton() {
        switch(this.dataset.cardphotoNav) {
            case 'add':
                elemCardphotoInput.addEventListener('change', checkImgSelection);
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
                console.log('del');
                break; 
        }
    }
    
    elemCardphoto.addEventListener('mouseenter', addClassHover);
    elemCardphoto.addEventListener('mouseenter', addClassActive);
    elemCardphoto.addEventListener('mouseleave', delClassHover);
    elemCardphoto.addEventListener('mouseleave', delClassActive);
    elemCardphoto.addEventListener('pointerdown', addActive); 
    
    elemCardphotoImageNavButton.forEach(el => {
        el.addEventListener('mouseenter', addClassHover);
        el.addEventListener('mouseleave', delClassHover);
        el.addEventListener('pointerdown', () => startPressActivation(el));
        el.addEventListener('pointerdown', validationImageNavButton);
    })
}
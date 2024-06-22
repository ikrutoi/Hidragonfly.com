import { addClassHover } from "./start-press-activation.js";
import { delClassHover } from "./start-press-activation.js";
import { newElemHTML } from "./new-element.js";

export function formationCardPhoto() {   
    const elemCardphoto = document.querySelector('.cardphoto');
    const elemCardphotoInput = document.querySelector('.cardphoto-input');
    
    function addActive() {
        this.classList.add('active');
        setTimeout(() => {
                newElemHTML(elemCardphoto, 'beforeend', '<div class="cardphoto-newimg"></div>');  
            }, 1000);
        }
        
    function checkImgSelection(event) {
        console.log('this.value: ', this.value);
        const newImageFile = document.querySelector('.cardphoto-input').files[0];
        fetch('/upload', {method: 'POST', body: new FormData().append('image', newImageFile)})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        console.log('*++*', event.target.files.length);
        console.log('**', event.target);
    }
    
    elemCardphoto.addEventListener('mouseenter', addClassHover);
    elemCardphoto.addEventListener('mouseleave', delClassHover);
    elemCardphoto.addEventListener('pointerdown', addActive);
    
    elemCardphotoInput.addEventListener('change', checkImgSelection);

    elemCardphotoInput.addEventListener('change', (event) => {
        console.log('-*-*-*-*--*');
        if (!event.target.files.length) {
          console.log('Выбор файла отменён. Или что-то другое произошло?');
        }
    });
}
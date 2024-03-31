import { clickButtonActive } from './navigation.js';

const buttonMenuNav = document.querySelectorAll('.nav-button');

buttonMenuNav.forEach((el) => {
    el.addEventListener('pointerdown', startClassActive);
    
    function startClassActive() {
        if(!el.classList.contains('active')) {
            clickButtonActive(el);
        }
    }
});

const textArea = document.querySelector('.card-letter-area');
console.log(getComputedStyle(textArea));

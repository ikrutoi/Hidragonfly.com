import { clickButtonActive } from './navigation.js';

const buttonMenuNav = document.querySelectorAll('.nav-button');

buttonMenuNav.forEach((el) => {
    el.addEventListener('pointerdown', startClassActive);
    
    function startClassActive() {
        clickButtonActive(el);
    }
});

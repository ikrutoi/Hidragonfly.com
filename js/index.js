import { clickButtonActive } from './navigation.js';
import { startPressActivation } from "./start-press-activation.js";

const buttonMenuNav = document.querySelectorAll('.nav-button');

buttonMenuNav.forEach((el) => {
    function startClassActive() {
        if (!el.classList.contains('active')) {
            startPressActivation(el);
            clickButtonActive(el);
        }        
    }

    el.addEventListener('pointerdown', startClassActive);
});


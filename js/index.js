import { clickButtonActive } from './navigation.js';
import { addPressActivation } from "./add-del-press-activation.js";
import { delPressActivation } from "./add-del-press-activation.js";

const buttonMenuNav = document.querySelectorAll('.nav-button');

buttonMenuNav.forEach((el) => {
    function startClassActive() {
        if (!el.classList.contains('active')) {
            addPressActivation(el);
            clickButtonActive(el);
        }        
    }

    el.addEventListener('pointerdown', startClassActive);
    el.addEventListener('pointerup', () => delPressActivation(el));
});


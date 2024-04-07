import { clickButtonActive } from './navigation.js';
import { createCalendar} from './date.js';

const buttonMenuNav = document.querySelectorAll('.nav-button');

buttonMenuNav.forEach((el) => {
    el.addEventListener('pointerdown', startClassActive);
    
    function startClassActive() {
        if (!el.classList.contains('active')) {
            clickButtonActive(el);
        }        
    }
});


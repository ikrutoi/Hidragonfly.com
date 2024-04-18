import { clickButtonActive } from './navigation.js';
import { startPressActivation } from "./start-press-activation.js";

const buttonMenuNav = document.querySelectorAll('.nav-button');
const memorySelectedDate = [
    +localStorage.getItem('date--year'), 
    +localStorage.getItem('date--month'), 
    localStorage.getItem('date--day')
];

buttonMenuNav.forEach((el) => {
    function startClassActive() {
        if (!el.classList.contains('active')) {
            startPressActivation(el);
            clickButtonActive(el);
        }        
    }

    if (el.classList.contains('button-date') && memorySelectedDate) {      
        el.setAttribute('style', 'color: #008aed');
    }

    el.addEventListener('pointerdown', startClassActive);
});


import { clickButtonActive } from './navigation.js';
import { startPressActivation } from "./start-press-activation.js";

const buttonMenuNav = document.querySelectorAll('.nav-button');
const memorySelectedDate = [
    +localStorage.getItem('date--year'), 
    +localStorage.getItem('date--month'), 
    localStorage.getItem('date--day')
];
const memoryAroma = [
    localStorage.getItem('aroma--name'), 
    localStorage.getItem('aroma--make') 
];

buttonMenuNav.forEach((el) => {
    function startClassActive() {
        if (!el.classList.contains('active')) {
            startPressActivation(el);
            clickButtonActive(el);
        }        
    }

    if (el.classList.contains('button-aroma') && memoryAroma) {
        el.classList.add('value-in-memory');
    }
    
    if (el.classList.contains('button-date') && memorySelectedDate) {      
        el.classList.add('value-in-memory');
    }

    el.addEventListener('pointerdown', startClassActive);
});


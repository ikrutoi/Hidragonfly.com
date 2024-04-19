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

    if (el.classList.contains('button-aroma') && localStorage.getItem('aroma--name')) {
        el.classList.add('value-in-memory');
    }
    
    if (el.classList.contains('button-date') && memorySelectedDate) {      
        el.classList.add('value-in-memory');
    }

    el.addEventListener('pointerdown', startClassActive);
});

function clearLocalStarage() {
    localStorage.clear();  
    buttonMenuNav.forEach(el => el.classList.remove('value-in-memory'));

    const navAdditionalBlockAroma = document.querySelector('.nav-additional-aroma');
    navAdditionalBlockAroma.classList.remove('active');
    
    const navAdditionalBlockDate = document.querySelector('.nav-additional-date');
    navAdditionalBlockDate.classList.remove('active');
}

setTimeout(clearLocalStarage, 20000);

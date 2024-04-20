import { clickButtonActive } from './navigation.js';
import { startPressActivation } from "./start-press-activation.js";
import { clearLocalStarage } from './clear-local-storage.js';
import { validationValueSessionStorage } from './envelope-valid-ses-stor.js';

const buttonMenuNav = document.querySelectorAll('.nav-button');

buttonMenuNav.forEach((el) => {
    function startClassActive() {
        if (!el.classList.contains('active')) {
            startPressActivation(el);
            clickButtonActive(el);
        }        
    }

    validationValueSessionStorage();

    if (el.classList.contains('button-aroma') && sessionStorage.getItem('aroma--name')) {
        el.classList.add('value-in-memory');
    }
    
    if (el.classList.contains('button-date') && sessionStorage.getItem('date--year')) {      
        el.classList.add('value-in-memory');
    }

    el.addEventListener('pointerdown', startClassActive);
});

// setTimeout(clearLocalStarage, 10000);

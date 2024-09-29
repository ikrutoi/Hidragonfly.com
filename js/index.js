import { createHeaderNav } from './header-nav.js';
import { addStartImage } from './cardphoto-add-start-image.js';
// import { clickButtonActive } from './navigation.js';
import { startPressActivation } from './start-press-activation.js';
import { clearSessionStarage } from './clear-session-storage.js';
import { validationValueSessionStorage } from './envelope-valid-ses-stor.js';

// const buttonMenuNav = document.querySelectorAll('.header-nav--button');

createHeaderNav();

addStartImage();

// buttonMenuNav.forEach((el) => {

//     console.log('gooo')
//     function startClassActive() {
//         if (!el.classList.contains('active')) {
//             startPressActivation(el);
//             clickButtonActive(el);
//         }
//     }

//     validationValueSessionStorage();

//     if (el.classList.contains('header-nav--button-aroma') && sessionStorage.getItem('aroma--name')) {
//         el.classList.add('value-in-memory');
//     }

//     if (el.classList.contains('header-nav--button-date') && sessionStorage.getItem('date--year')) {
//         el.classList.add('value-in-memory');
//     }

//     el.addEventListener('pointerdown', startClassActive);
// });

// console.log('+++++++++++++++')

// const elemLogoImg = document.querySelector('.logo-img');
// elemLogoImg.addEventListener('pointerdown', clearSessionStarage);

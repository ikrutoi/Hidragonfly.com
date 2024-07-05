import { newElemHTML } from "./new-element.js";

export function createNavAddit() {
    const mainAddition = document.querySelector('.main-addition');

    newElemHTML(mainAddition, 'beforeend', '<div class="main-nav"></div>'); 
    const mainNav = document.querySelector('.main-nav');

    newElemHTML(mainNav, 'beforeend', '<ul class="main-nav-menu"></ul>'); 
    const mainNavMenu = document.querySelector('.main-nav-menu');

    newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button1"></li>'); 
    const menuAdditionButton1 = document.querySelector('.main-nav--button1');
    newElemHTML(menuAdditionButton1, 'beforeend', '<span class="main-nav--button-text">Button2</span>');

    newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button2"></li>'); 
    const menuAdditionButton2 = document.querySelector('.main-nav--button2');
    newElemHTML(menuAdditionButton2, 'beforeend', '<span class="main-nav--button-text">Button2</span>'); 

    newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button3"></li>'); 
    const menuAdditionButton3 = document.querySelector('.main-nav--button3');
    newElemHTML(menuAdditionButton3, 'beforeend', '<span class="main-nav--button-text">Button3</span>'); 

    newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button4"></li>'); 
    const menuAdditionButton4 = document.querySelector('.main-nav--button4');
    newElemHTML(menuAdditionButton4, 'beforeend', '<span class="main-nav--button-text">Button4</span>'); 
}
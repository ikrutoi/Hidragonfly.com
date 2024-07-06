import { newElemHTML } from "./new-element.js";

export function createNavAddit(unit) {

    switch(unit) {
        case 'cardphoto':
            const mainNav = document.querySelector('.main-nav');

            if (!mainNav.classList.contains(`created-${unit}`)) {                
                mainNav.classList.add(`created-${unit}`);
                
                newElemHTML(mainNav, 'beforeend', '<ul class="main-nav-menu main-nav-menu--cardphoto active"></ul>'); 
                const mainNavMenu = document.querySelector('.main-nav-menu');
                
                newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button-add" data-cardphoto-nav="add"></li>'); 
                const menuAdditionButton1 = document.querySelector('.main-nav--button-add');
                newElemHTML(menuAdditionButton1, 'beforeend', '<span class="main-nav--button-logo">.</span>');
                newElemHTML(menuAdditionButton1, 'beforeend', '<span class="main-nav--button-text">Add</span>');
                
                newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button-change" data-cardphoto-nav="chng"></li>'); 
                const menuAdditionButton2 = document.querySelector('.main-nav--button-change');
                newElemHTML(menuAdditionButton2, 'beforeend', '<span class="main-nav--button-logo">.</span>');
                newElemHTML(menuAdditionButton2, 'beforeend', '<span class="main-nav--button-text">Change</span>'); 
                
                newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button-cut" data-cardphoto-nav="cut"></li>'); 
                const menuAdditionButton3 = document.querySelector('.main-nav--button-cut');
                newElemHTML(menuAdditionButton3, 'beforeend', '<span class="main-nav--button-logo">.</span>');
                newElemHTML(menuAdditionButton3, 'beforeend', '<span class="main-nav--button-text">Cut</span>'); 
                
                newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button-max" data-cardphoto-nav="max"></li>'); 
                const menuAdditionButton4 = document.querySelector('.main-nav--button-max');
                newElemHTML(menuAdditionButton4, 'beforeend', '<span class="main-nav--button-logo">.</span>');
                newElemHTML(menuAdditionButton4, 'beforeend', '<span class="main-nav--button-text">Max</span>'); 

                newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button-torn" data-cardphoto-nav="torn"></li>'); 
                const menuAdditionButton5 = document.querySelector('.main-nav--button-torn');
                newElemHTML(menuAdditionButton5, 'beforeend', '<span class="main-nav--button-logo">.</span>');
                newElemHTML(menuAdditionButton5, 'beforeend', '<span class="main-nav--button-text">Torn</span>'); 

                newElemHTML(mainNavMenu, 'beforeend', '<li class="main-nav--button main-nav--button-del" data-cardphoto-nav="del"></li>'); 
                const menuAdditionButton6 = document.querySelector('.main-nav--button-del');
                newElemHTML(menuAdditionButton6, 'beforeend', '<span class="main-nav--button-logo">.</span>');
                newElemHTML(menuAdditionButton6, 'beforeend', '<span class="main-nav--button-text">Delete</span>'); 
            }
            break;
        }
}
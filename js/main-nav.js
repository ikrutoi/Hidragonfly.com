import { newElemHTML } from "./new-element.js";

export function createMainNav(unit) {
    const mainNav = document.querySelector('.main-nav');

    switch(unit) {
        case 'cardphoto':

            if (mainNav.dataset.navPhoto != 'created') {           
                mainNav.dataset.navPhoto = 'created';
                
                newElemHTML(mainNav, 'beforeend', '<ul class="main-nav-menu main-nav-menu--cardphoto active"></ul>'); 
                const mainNavMenuCardphoto = document.querySelector('.main-nav-menu--cardphoto');
                
                newElemHTML(
                    mainNavMenuCardphoto, 
                    'beforeend', 
                    '<li class="main-nav--button main-nav--cardphoto--button-add" data-cardphoto-nav="add"></li>'
                ); 
                const mainNavCardphotoButton1 = document.querySelector('.main-nav--cardphoto--button-add');
                newElemHTML(mainNavCardphotoButton1, 'beforeend', '<span class="nav--button-logo main-nav--cardphoto--button-logo">.</span>');
                newElemHTML(mainNavCardphotoButton1, 'beforeend', '<span class="nav--button-text main-nav--cardphoto--button-text">Add</span>');
                
                newElemHTML(
                    mainNavMenuCardphoto, 
                    'beforeend', 
                    '<li class="main-nav--button main-nav--cardphoto--button-change" data-cardphoto-nav="chng"></li>'
                ); 
                const mainNavCardphotoButton2 = document.querySelector('.main-nav--cardphoto--button-change');
                newElemHTML(mainNavCardphotoButton2, 'beforeend', '<span class="nav--button-logo main-nav--cardphoto--button-logo">.</span>');
                newElemHTML(mainNavCardphotoButton2, 'beforeend', '<span class="nav--button-text main-nav--cardphoto--button-text">Change</span>'); 
                
                newElemHTML(
                    mainNavMenuCardphoto, 
                    'beforeend', 
                    '<li class="main-nav--button main-nav--cardphoto--button-cut" data-cardphoto-nav="cut"></li>'
                ); 
                const mainNavCardphotoButton3 = document.querySelector('.main-nav--cardphoto--button-cut');
                newElemHTML(mainNavCardphotoButton3, 'beforeend', '<span class="nav--button-logo main-nav--cardphoto--button-logo">.</span>');
                newElemHTML(mainNavCardphotoButton3, 'beforeend', '<span class="nav--button-text main-nav--cardphoto--button-text">Cut</span>'); 
                
                newElemHTML(
                    mainNavMenuCardphoto, 
                    'beforeend', 
                    '<li class="main-nav--button main-nav--cardphoto--button-max" data-cardphoto-nav="max"></li>'
                ); 
                const mainNavCardphotoButton4 = document.querySelector('.main-nav--cardphoto--button-max');
                newElemHTML(mainNavCardphotoButton4, 'beforeend', '<span class="nav--button-logo main-nav--cardphoto--button-logo">.</span>');
                newElemHTML(mainNavCardphotoButton4, 'beforeend', '<span class="nav--button-text main-nav--cardphoto--button-text">Max</span>'); 

                newElemHTML(
                    mainNavMenuCardphoto, 
                    'beforeend', 
                    '<li class="main-nav--button main-nav--cardphoto--button-torn" data-cardphoto-nav="torn"></li>'
                ); 
                const mainNavCardphotoButton5 = document.querySelector('.main-nav--cardphoto--button-torn');
                newElemHTML(mainNavCardphotoButton5, 'beforeend', '<span class="nav--button-logo main-nav--cardphoto--button-logo">.</span>');
                newElemHTML(mainNavCardphotoButton5, 'beforeend', '<span class="nav--button-text main-nav--cardphoto--button-text">Torn</span>'); 

                newElemHTML(
                    mainNavMenuCardphoto, 
                    'beforeend', 
                    '<li class="main-nav--button main-nav--cardphoto--button-del" data-cardphoto-nav="del"></li>'
                ); 
                const mainNavCardphotoButton6 = document.querySelector('.main-nav--cardphoto--button-del');
                newElemHTML(mainNavCardphotoButton6, 'beforeend', '<span class="nav--button-logo main-nav--cardphoto--button-logo">.</span>');
                newElemHTML(mainNavCardphotoButton6, 'beforeend', '<span class="nav--button-text main-nav--cardphoto--button-text">Delete</span>'); 
            }
            break;

        case 'aroma':         
        
            if (mainNav.dataset.navAroma != 'created') {           
                mainNav.dataset.navAroma = 'created';

                newElemHTML(mainNav, 'beforeend', '<ul class="main-nav-menu main-nav-menu--aroma"></ul>'); 
                const mainNavMenuAroma = document.querySelector('.main-nav-menu--aroma');
                
                newElemHTML(mainNavMenuAroma, 'beforeend', '<li class="main-nav--button main-nav--aroma--button-selected"></li>'); 
                const mainNavAromaButton1 = document.querySelector('.main-nav--aroma--button-selected');
                newElemHTML(mainNavAromaButton1, 'beforeend', '<span class="nav--button-logo main-nav--aroma--button-logo">.</span>');
                newElemHTML(mainNavAromaButton1, 'beforeend', '<span class="nav--button-text main-nav--aroma--button-text"></span>');
            }
            break;

        case 'date': {   
            
            if (mainNav.dataset.navDate != 'created') {           
                mainNav.dataset.navDate = 'created';

                newElemHTML(mainNav, 'beforeend', '<ul class="main-nav-menu main-nav-menu--date"></ul>'); 
                const mainNavMenuDate = document.querySelector('.main-nav-menu--date');
                
                newElemHTML(mainNavMenuDate, 'beforeend', '<li class="main-nav--button main-nav--date--button"></li>'); 
                const mainNavDateButton1 = document.querySelector('.main-nav--date--button');
                newElemHTML(mainNavDateButton1, 'beforeend', '<span class="nav--button-logo main-nav--date--button-logo">.</span>');
                newElemHTML(mainNavDateButton1, 'beforeend', '<span class="nav--button-text main-nav--date--button-text"></span>');
            }
            break;
        }
    }
}

export function changeMainNavMenu(elem) {
    const mainNavMenu = document.querySelectorAll('.main-nav-menu');

    mainNavMenu.forEach(el => el.classList.remove('active'));
}
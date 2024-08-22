import { newElemHTML } from "./new-element.js";
import { createNavList } from "./new-nav.js";

export function createMainNavMenu(unit) {
    const mainNav = document.querySelector('.main-nav');
    let listMenuMain;

    switch(unit) {
        case 'cardphoto':
            listMenuMain = [
                {codename: 'add', title: 'Add'},
                {codename: 'change', title: 'Change'},
                {codename: 'cut', title: 'Cut'},
                {codename: 'max', title: 'Max'},
                {codename: 'torn-image', title: 'Torn image'},
                {codename: 'torn-card', title: 'Torn card'},
                {codename: 'del', title: 'Delete'}
            ];
            break;
        case 'cardtext':
            listMenuMain = [
                {codename: 'add', title: 'Add'},
                {codename: 'change', title: 'Change'},
                {codename: 'cut', title: 'Cut'},
                {codename: 'max', title: 'Max'},
                {codename: 'torn', title: 'Torn'},
                {codename: 'del', title: 'Delete'}
            ];
            break;
        case 'aroma':         
            listMenuMain = [
                {codename: 'aroma', title: ''}
            ];
            break;

        case 'date': { 
            listMenuMain = [
                {codename: 'date', title: ''}
            ];  
            break;
        }
    }

    const headerNavItem = document.querySelector(`.header-nav--button-${unit}`);
    
    if (!headerNavItem.classList.contains('created-main-nav') && (unit == 'cardphoto' || unit == 'aroma' || unit == 'date')) {   
        for (let i = 0; i < listMenuMain.length; i++) { 

            createNavList(i, mainNav, 'main', listMenuMain[i].codename, listMenuMain[i].title, unit);
        }

        headerNavItem.classList.add('created-main-nav');
    }
}

// export function changeMainNavMenu(elem) {
//     const mainNavMenu = document.querySelectorAll('.main-nav-menu');

//     mainNavMenu.forEach(el => el.classList.remove('active'));
// }
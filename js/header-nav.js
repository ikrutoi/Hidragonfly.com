import { createNavList } from "./new-nav-list.js";
import { navigationHeaderMenu } from "./navigation.js";
import { newElemHTML } from "./new-element.js";

export function createHeaderNav() {
    const headerNav = document.querySelector('.header-nav');

    newElemHTML(headerNav, 'beforeend', '<ul class="header-nav-menu"></ul>'); 
    
    const headerNavMenu = document.querySelector('.header-nav-menu');

    const listMenuHeader = [
        {codename: 'cardphoto', title: 'Cardphoto'},
        {codename: 'cardtext', title: 'Cardtext'},
        {codename: 'envelope', title: 'Envelope'},
        {codename: 'aroma', title: 'Aroma'},
        {codename: 'date', title: 'Date'},
        {codename: 'history', title: 'History'},
    ];
  
    for (let i = 0; i < listMenuHeader.length; i++) { 
        createNavList(headerNavMenu, listMenuHeader[i].codename, listMenuHeader[i].title);
    }

    navigationHeaderMenu();
}
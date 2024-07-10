import { createNavList } from "./new-nav.js";
import { navigationHeaderMenu } from "./navigation-header.js";
import { newElemHTML } from "./new-element.js";

export function createHeaderNav() {

    const headerNav = document.querySelector('.header-nav');

    const listMenuHeader = [
        {codename: 'cardphoto', title: 'Cardphoto'},
        {codename: 'cardtext', title: 'Cardtext'},
        {codename: 'envelope', title: 'Envelope'},
        {codename: 'aroma', title: 'Aroma'},
        {codename: 'date', title: 'Date'},
        {codename: 'history', title: 'History'},
    ];
  
    for (let i = 0; i < listMenuHeader.length; i++) { 
        createNavList(i, headerNav, 'header', listMenuHeader[i].codename, listMenuHeader[i].title, 'header');
    }

    navigationHeaderMenu();
}
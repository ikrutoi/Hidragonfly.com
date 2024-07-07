import { newElemHTML } from "./new-element.js";

export function createNavList(toTag, codeName, titleName) {
    newElemHTML(
        toTag, 
        'beforeend', 
        `<li class="header-nav--button header-nav--button-${codeName}" data-menu-nav="${codeName}"></li>`
    ); 

    const headerNavButtonCardphoto = document.querySelector(`.header-nav--button-${codeName}`);

    newElemHTML(headerNavButtonCardphoto, 'beforeend', `<span class="nav--button-logo header-nav--${codeName}--button-logo">.</span>`);
    newElemHTML(headerNavButtonCardphoto, 'beforeend', `<span class="nav--button-text header-nav--${codeName}--button-text">${titleName}</span>`);
}
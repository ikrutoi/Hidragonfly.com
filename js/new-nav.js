import { newElemHTML } from "./new-element.js";

export function createNavList(i, toTag, toBlock, codeName, titleName, unit) {
    
    if (i == 0) {
        newElemHTML(toTag, 'beforeend', `<ul class="${toBlock}-nav-menu ${toBlock}-nav-menu--${unit}"></ul>`); 
    }
    
    const newUl = document.querySelector(`.${toBlock}-nav-menu--${unit}`);

    if (unit == 'cardphoto' || unit == 'cardtext' || unit == 'envelope') {
        newUl.classList.add('active');
    }

    newElemHTML(
        newUl, 
        'beforeend', 
        `<li class="${toBlock}-nav--button ${toBlock}-nav--button-${codeName}" data-menu-nav="${codeName}"></li>`
    ); 

    const newLi = document.querySelector(`.${toBlock}-nav--button-${codeName}`);

    newElemHTML(newLi, 'beforeend', `<span class="nav--button-logo ${toBlock}-nav--${codeName}--button-logo">.</span>`);
    newElemHTML(newLi, 'beforeend', `<span class="nav--button-text ${toBlock}-nav--${codeName}--button-text">${titleName}</span>`);
}
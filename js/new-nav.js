import { newElemHTML } from './new-element.js';

export function createNavList(i, toTag, toBlock, codeName, titleName, unit) {
    if (i == 0) {
        newElemHTML(
            toTag,
            'beforeend',
            `<ul class="${toBlock}-nav-menu ${toBlock}-nav-menu--${unit}"></ul>`
        );
    }

    const newUl = document.querySelector(`.${toBlock}-nav-menu--${unit}`);
    // const cardphotoList = document.querySelector('.cardphoto-list');

    if (unit == 'cardphoto' || unit == 'cardtext' || unit == 'envelope') {
        newUl.classList.add('active');
    }

    // if (unit === 'cardphoto') {
    //     newElemHTML(
    //         cardphotoList, 'beforeend',
    //     );
    // }

    if (codeName === 'add') {
        newElemHTML(
            newUl,
            'beforeend',
            `<li class="${toBlock}-nav--button ${toBlock}-nav--${unit}--button ${toBlock}-nav--button-${codeName}" data-menu-nav="${codeName}"><label class="cardphoto-${codeName}-label" for="cardphoto-input-${codeName}"></label></li>`
        );

        const mainNavButton = document.querySelector(
            `.${toBlock}-nav--button-${codeName}`
        );

        newElemHTML(
            mainNavButton,
            'beforeend',
            `<input id="cardphoto-input-${codeName}" class="cardphoto-input cardphoto-input-${codeName}" type="file" accept="image/*"/>`
        );

        const label = document.querySelector(`.cardphoto-${codeName}-label`);

        newElemHTML(
            label,
            'beforeend',
            `<span class="nav--button-logo ${toBlock}-nav--${codeName}--button-logo">.</span>`
        );
        newElemHTML(
            label,
            'beforeend',
            `<span class="nav--button-text ${toBlock}-nav--${codeName}--button-text">${titleName}</span>`
        );
    } else {
        newElemHTML(
            newUl,
            'beforeend',
            `<li class="${toBlock}-nav--button ${toBlock}-nav--${unit}--button ${toBlock}-nav--button-${codeName}" data-menu-nav="${codeName}"></li>`
        );

        const newLi = document.querySelector(
            `.${toBlock}-nav--button-${codeName}`
        );

        newElemHTML(
            newLi,
            'beforeend',
            `<span class="nav--button-logo ${toBlock}-nav--${codeName}--button-logo">.</span>`
        );
        newElemHTML(
            newLi,
            'beforeend',
            `<span class="nav--button-text ${toBlock}-nav--${codeName}--button-text">${titleName}</span>`
        );
    }
}

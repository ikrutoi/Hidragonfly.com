import { newElemHTML } from "./new-element.js";

export function createAroma() {
    console.log('aroma+');
    const aromaBlock = document.querySelector('.aroma-block');   
    
    newElemHTML(
        aromaBlock, 
        'beforeend', 
        '<ul class="aroma-block-list"></ul>'); 

    const aromaBlockList = document.querySelector('.aroma-block-list');

    const nameAroma = [
        {make: '', name: ''},
        {make: 'Yves Saint Laurent', name: 'Opium'}, 
        {make: 'Serge Lutens', name: 'Un Bois Vanille'},
        {make: 'Montale', name: 'Rose Elixir'},
        {make: 'Chanel', name: 'Coco Mademoiselle'},
        {make: 'Bvlgari', name: 'Jasmin Noir'},
        {make: 'Giorgio Armani', name: 'Si Eau de Parfum Intense'},
        {make: 'Elizabeth Arden', name: '5th Avenue'},
        {make: 'Christian Dior', name: 'Poison'},
        {make: 'Carolina Herrera', name: '212'}
    ];
    const keyName = 'name';
    const sortNameAroma = nameAroma.sort((nameAroma1, nameAroma2) => nameAroma1[keyName] > nameAroma2[keyName] ? 1 : -1);
    const keyMake = 'make';
    const sortMakeAroma = nameAroma.sort((nameAroma1, nameAroma2) => nameAroma1[keyMake] > nameAroma2[keyMake] ? 1 : -1);
    
    for (let i = 0; i < sortMakeAroma.length; i++) {
        if (i == 0) {
            newElemHTML(
                aromaBlockList, 
                'beforeend', 
                `<li class="aroma-button aroma-button-${i}">
                <span class="aroma-logo aroma-logo-${i}"></span>
                <span class="aroma-text aroma-name">None</span>
                </li>`
            ); 
        } else {  
            newElemHTML(
                aromaBlockList, 
                'beforeend', 
                `<li class="aroma-button aroma-button-${i}" data-number-aroma="${i}">
                <span class="aroma-logo aroma-logo-${i}"></span>
                <span class="aroma-text aroma-name">${sortMakeAroma[i].name}.</span>
                <span class="aroma-text aroma-make">${sortMakeAroma[i].make}<span>
                </li>`
            );
        }
    }

    aromaBlock.dataset.created = 'true';

    const aromaButton = document.querySelectorAll('.aroma-button');

    function changeAroma() {
        aromaButton.forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        const mainNavMenuAroma = document.querySelector('.main-nav-menu--aroma');
        mainNavMenuAroma.classList.add('active');
        mainNavMenuAroma.classList.add('selected');

        const mainNavMenuAromaLogo = document.querySelector('.main-nav--aroma--button-logo');
        mainNavMenuAromaLogo.classList.add('active');

        const headerNavMenuAromaLogo = document.querySelector('.header-nav--aroma--button-logo');
        headerNavMenuAromaLogo.classList.add('active');

        const mainNavButtonAromaText = document.querySelector('.main-nav--aroma--button-text');
        mainNavButtonAromaText.textContent = `${sortNameAroma[this.dataset.numberAroma].name}. ${sortNameAroma[this.dataset.numberAroma].make}`;

        const mainNav = document.querySelector('.main-nav');
        mainNav.classList.add('border-bottom');
    }

    aromaButton.forEach(el => {
        el.addEventListener('pointerdown', changeAroma);
    });
}


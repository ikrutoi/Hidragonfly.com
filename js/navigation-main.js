import { cardphotoChange } from "./cardphoto.js";

export function navigationMain(unit) {
    const buttonsMainNavMenu = document.querySelectorAll(`.main-nav--${unit}--button`);


    // console.log('---', unit)

    // if (unit == 'cardphoto') {

        // if (cardphoto.getBoundingClientRect().width > cardphoto.getBoundingClientRect().height) {
        //     console.log('-----');
        // } else {
        //     console.log('|||||');
        //     cardphotoImageForm.style.left = cardphoto.getBoundingClientRect().left - mainBlock.getBoundingClientRect().left + 'px';
        //     cardphotoImageForm.style.width = cardphoto.getBoundingClientRect().width + 'px';
        //     cardphotoImageForm.style.height = cardphoto.getBoundingClientRect().width / 1.42 + 'px';
        // }
    // }

    function changeFromButton() {
        // const targetButton = document.querySelector(`.main-nav--${unit}--button-${this.dataset.menuNav}`);

        switch (this.dataset.menuNav) {
            case 'add':
                console.log('add');
                break;
            case 'change':
                console.log('change', this.dataset.menuNav);
                cardphotoChange(this);
                break;
            case 'cut':
                console.log('cut');
                break;
            case 'max':
                console.log('max');
                break;
            case 'torn':
                console.log('torn');
                cardphotoChange(this);
                break;
            case 'delete':
                console.log('delete');
                break;
        }
    }

    buttonsMainNavMenu.forEach(el => {
        el.addEventListener('pointerdown', changeFromButton);
    });
}
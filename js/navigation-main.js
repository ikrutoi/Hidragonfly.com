import { cardphotoTorn } from "./cardphoto-torn.js";
import { cardphotoChange } from "./cardphoto.js";
// import { cardphotoTorn } from "./cardphoto-torn.js";

export function navigationMain(unit) {

    const buttonMainNavMenu = document.querySelectorAll(`.main-nav--${unit}--button`);

    function changeFromButton() {
        // const targetButton = document.querySelector(`.main-nav--${unit}--button-${this.dataset.menuNav}`);

        switch (this.dataset.menuNav) {
            case 'add':
                console.log('add');
                break;
            case 'change':
                // console.log('change', this.dataset.menuNav);
                cardphotoChange(this);
                break;
            case 'cut':
                console.log('cut');
                break;
            case 'max':
                console.log('max');
                break;
            case 'torn':
                // console.log('torn');
                // cardphotoChange(this);
                cardphotoTorn();
                break;
            case 'delete':
                console.log('delete');
                break;
        }
    }

    buttonMainNavMenu.forEach(el => {
        el.addEventListener('pointerdown', changeFromButton);
    });
}
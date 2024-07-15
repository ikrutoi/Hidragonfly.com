import { changeCardphoto } from "./cardphoto.js";

export function navigationMain(unit) {

    const buttonMainNavMenu = document.querySelectorAll(`.main-nav--${unit}--button`);

    function changeFromButton() {

        switch (unit) {
            case 'cardphoto':
                changeCardphoto(this);
                break;
        }
    }

    buttonMainNavMenu.forEach(el => {
        el.addEventListener('pointerdown', changeFromButton);
    });
}
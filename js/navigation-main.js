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




    // const buttonAdd = document.querySelector('.cardphoto-add-label');
    // // const buttonAdd = document.querySelector('.main-nav--button-add');

    // function startAdd() {
    //     // const cardphotoImageAdd = document.querySelector('.cardphoto-image-add');
    //     //     cardphotoImageStart.classList.add('deactivation');
    //     //     cardphotoImageLoad.classList.add('active');
    //     //     const newImageFile = document.querySelector('.cardphoto-input').files;
    //     //     console.log('newImageFile: ', newImageFile);
    //     //     const imageURL = URL.createObjectURL(newImageFile);
    //     //     cardphotoImageAdd.src = imageURL;
    //     //     cardphotoImageAdd.onload = () => URL.revokeObjectURL(imageURL);
    //     //     // event.value = null;
    //     //     elem.value = null;
    // }

    // buttonAdd.addEventListener('pointerdown', startAdd);

    buttonMainNavMenu.forEach(el => {
        el.addEventListener('pointerdown', changeFromButton);
    });
}
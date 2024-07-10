export function navigationMain(unit) {
    const buttonsMainNavMenu = document.querySelectorAll(`.main-nav--${unit}--button`);

    function changeFromButton() {
        const targetButton = document.querySelector(`.main-nav--${unit}--button-${this.dataset.menuNav}`);

        switch (this.dataset.menuNav) {
            case 'add':
                console.log('add');
                break;
            case 'change':
                console.log('change');
                break;
            case 'cut':
                console.log('cut');
                break;
            case 'max':
                console.log('max');
                break;
            case 'torn':
                console.log('torn');
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
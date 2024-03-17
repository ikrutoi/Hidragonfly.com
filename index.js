const buttonMenuNav = document.querySelectorAll('.nav-menu-button');

buttonMenuNav.forEach((e) => {
    
    function clickButtonActive() {
        (() => {
            buttonMenuNav.forEach((e) => {
                e.classList.remove('active');
            })
        })();
        
        e.classList.add('active');

        const block = document.querySelectorAll('.block');

        block.forEach((e) => {
            e.setAttribute('style', 'display: none');
        })
        
        const blockActive = document.querySelector(`.${e.dataset.menuNav}`);
        blockActive.setAttribute('style', 'display: grid');
    }

    e.addEventListener('click', clickButtonActive);
});

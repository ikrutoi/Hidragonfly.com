const buttonMenuNav = document.querySelectorAll('.nav-menu-button');

buttonMenuNav.forEach((e) => {
    // console.log(e.dataset.menuNav);

    function clickButtonActive() {
        (() => {
            buttonMenuNav.forEach((e) => {
                e.classList.remove('active');
            })
        })();

        e.classList.add('active');
    }

    e.addEventListener('click', clickButtonActive);
});
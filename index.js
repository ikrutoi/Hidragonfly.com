const buttonMenuNav = document.querySelectorAll('.nav-menu-button');

buttonMenuNav.forEach((e) => {
    
    function clickButtonActive() {
        (() => {
            buttonMenuNav.forEach((e) => {
                e.classList.remove('active');
            })
        })();
              
        e.classList.add('active');
        
        function showBlockTimer() {
            blockActive.setAttribute('style', 'display: grid');
        }
        
        const block = document.querySelectorAll('.block');
        
        block.forEach((e) => {
            e.setAttribute('style', 'display: none');
        })
        
        const blockActive = document.querySelector(`.${e.dataset.menuNav}`);
        
        setTimeout(showBlockTimer, 100);
        
        const menuNavBlock = document.querySelectorAll('.menu-nav-block');
        
        menuNavBlock.forEach((e) => {
            e.setAttribute('style', 'display: none');
        })

        const menuNavBlockActive = document.querySelector(`.${e.dataset.menuNavBlock}`);
        menuNavBlockActive.setAttribute('style', 'display: block');

        // const cardLetterCursorBlock = document.querySelector('.card-letter-cursor-block');
        
        // setInterval(() => {
        //     cardLetterCursorBlock.setAttribute('style', 'opacity: 0.2');
        // }, 500);

    }

    e.addEventListener('click', clickButtonActive);
    
});


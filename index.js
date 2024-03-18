const buttonMenuNav = document.querySelectorAll('.nav-menu-button');

buttonMenuNav.forEach((e) => {
    
    function clickButtonActive() {
        (() => {
            buttonMenuNav.forEach((e) => {
                e.classList.remove('active');
            })
        })();
              
        // e.classList.add('active');
        
        // function showBlockTimer() {
        //     blockActive.setAttribute('style', 'display: grid');
        // }
        
        // const block = document.querySelectorAll('.block');
        
        // block.forEach((e) => {
        //     e.setAttribute('style', 'display: none');
        // })
        
        // const blockActive = document.querySelector(`.${e.dataset.menuNav}`);
        
        // setTimeout(showBlockTimer, 100);

        e.classList.add('active');
        
        function showBlockTimer() {
            blockActive.forEach((e) => {
                e.classList.add('active');
            })
        }
        
        const block = document.querySelectorAll('.block');
        const navMenuAddit = document.querySelectorAll('.nav-menu-addit');
        
        block.forEach((e) => {
            e.classList.remove('active');
        })
        
        navMenuAddit.forEach((e) => {
            e.classList.remove('active');
        })
        
        const blockActive = document.querySelectorAll(`.${e.dataset.menuNav}`);
       
        setTimeout(showBlockTimer, 100);





        
        
        // const menuNavBlock = document.querySelectorAll('.menu-nav-block');
        
        // menuNavBlock.forEach((e) => {
        //     e.setAttribute('style', 'display: none');
        // })

        // const menuNavBlockActive = document.querySelector(`.${e.dataset.menuNavBlock}`);
        // menuNavBlockActive.setAttribute('style', 'display: block');

    }

    e.addEventListener('click', clickButtonActive);
    
});


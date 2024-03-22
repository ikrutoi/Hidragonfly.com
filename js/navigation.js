
export function navButtonMenu() {  
    const buttonMenuNav = document.querySelectorAll('.nav-menu-button');
    
    buttonMenuNav.forEach((el) => {
        
        function clickButtonActive() {
            function removeClassActive(el) {
                el.classList.remove('active');
            }
            
            (() => {
                buttonMenuNav.forEach((el) => {
                    removeClassActive(el);
                })
            })();
            
            const block = document.querySelectorAll('.block');
            const navMenuAddit = document.querySelectorAll('.nav-menu-addit');
            
            block.forEach((el) => {
                removeClassActive(el);
            })
            
            navMenuAddit.forEach((el) => {
                removeClassActive(el);
            })
            
            el.classList.add('active');
            
            const blockActive = document.querySelectorAll(`.${el.dataset.menuNav}`);
            
            function showBlockTimer() {
                blockActive.forEach((el) => {
                    el.classList.add('active');
                })    
            }      
            
            setTimeout(showBlockTimer, 100);
        }
        
        el.addEventListener('click', clickButtonActive);   
    });
};

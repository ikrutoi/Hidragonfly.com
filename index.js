let menuIcon = document.querySelector('.menu_icon');
let cardsBodyNav = document.querySelector('.cards_body_nav');
if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
        menuIcon.classList.toggle('_active');
        cardsBodyNav.classList.toggle('_active');
    });
}

let yourcardHeaderTabYourcard = document.querySelector('.yourcard_header_tab_yourcard');
let yourcardMenu = document.querySelector('.yourcard_menu');
let yourcardSubMenu = document.querySelector('.yourcard_submenu');
if (yourcardHeaderTabYourcard) {
    yourcardHeaderTabYourcard.addEventListener('click', function() {
        yourcardHeaderTabYourcard.classList.toggle('_yourcard_active');
        yourcardMenu.classList.toggle('_yourcard_active');
        yourcardSubMenu.classList.toggle('_yourcard_active');

        let yourcardMenuLink = document.querySelectorAll('.yourcard_menu_link');
        let yourcardSubmenuBlock = document.querySelectorAll('.yourcard_submenu_block');
        let yourcardCenterScreen = document.querySelector('.yourcard_center_screen');
        let yourcardMenuActive = document.querySelector('.yourcard_menu._yourcard_active');
        let yourcardBlocksActive = document.querySelectorAll('.yourcard_blocks.active');
        let tabMenu
        if (yourcardMenuActive) {
            yourcardMenuLink.forEach(item=> {
                item.addEventListener('click', selectYourcardMenuLink);
            })
            function selectYourcardMenuLink () {
                yourcardCenterScreen.classList.toggle('active');
                yourcardMenuLink.forEach(item=> {
                    item.classList.contains(tabMenu)?
                    item.classList.toggle('active'):
                    item.classList.remove('active');
                })             
                this.classList.toggle('active');
                tabMenu = this.getAttribute('data-tab-name');
                selectYourcardBlocks(tabMenu);                
            }
            function selectYourcardBlocks(tabMenu) {
                yourcardSubmenuBlock.forEach(item=> {
                    item.classList.contains(tabMenu)?
                    item.classList.toggle('active'):
                    item.classList.remove('active');
                })
            }
        }
        // let tab = function() {
        //     let yourcardMenuLink = document.querySelectorAll('.yourcard_menu_link');
        //     const yourcardBlocks = document.querySelectorAll('.yourcard_blocks');
        //     const yourcardCenterScreen = document.querySelector('.yourcard_center_screen');
        //     let tabName;
        //     if (yourcardMenuActive) {
        //         yourcardMenuLink.forEach(item=> {
        //             item.addEventListener('click', selectYourcardMenuLink);
        //         })
        //         function selectYourcardMenuLink() {
        //             yourcardCenterScreen.classList.toggle('_active_menu');           
        //             yourcardMenuLink.forEach(item=>{
        //                 item.classList.remove('is-act');
        //             })
        //             this.classList.toggle('is-act');
        //             tabName = this.getAttribute('data-tab-name');
        //             selectYourcardBlocks(tabName);
        //         }
        //         function selectYourcardBlocks(tabName) {
        //             yourcardBlocks.forEach(item=> {
        //                 item.classList.contains(tabName)? 
        //                 item.classList.toggle('is-act') :
        //                 item.classList.remove('is-act');
        //             })
        //         }
        //     }
        // }
        
        // tab();
        
    });
}

let yourcardHeaderTabCards = document.querySelector('.yourcard_header_tab_cards');
if (yourcardHeaderTabCards) {
    yourcardHeaderTabCards.addEventListener("click", function() {
        yourcardHeaderTabCards.classList.toggle('_active_header');
    })
}

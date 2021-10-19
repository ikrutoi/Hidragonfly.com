const menuIcon = document.querySelector('.menu_icon');
const cardsBodyNav = document.querySelector('.cards_body_nav');
if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
        menuIcon.classList.toggle('_active');
        cardsBodyNav.classList.toggle('_active');
    });
}

const yourcardHeaderTabYourcard = document.querySelector('.yourcard_header_tab_yourcard');
const yourcardMenu = document.querySelector('.yourcard_menu');
const yourcardSubmenu = document.querySelector('.yourcard_submenu');
if (yourcardHeaderTabYourcard) {
    yourcardHeaderTabYourcard.addEventListener('click', function() {
        yourcardHeaderTabYourcard.classList.toggle('_yourcard_active');
        yourcardMenu.classList.toggle('_yourcard_active');
        yourcardSubmenu.classList.toggle('_yourcard_active');
        // yourcardCenterScreen.classList.toggle('_active_header');
    });
}

// const yourcardMenuLink = document.querySelector('.yourcard_menu_link');
// const yourcardBlocks = document.querySelector('yourcard_blocks');

// if (yourcardMenuLink) {
//     yourcardMenuLink.addEventListener('click', function() {
//     yourcardMenuLink.classList.toggle('_yourcard_menu_active');
//     yourcardBlocks.classList.toggle('._yourcard_menu_active');  
//     });
// }

// function selectYourcardMenuLink() {

// }


const yourcardHeaderTabCards = document.querySelector('.yourcard_header_tab_cards');
if (yourcardHeaderTabCards) {
    yourcardHeaderTabCards.addEventListener("click", function() {
        yourcardHeaderTabCards.classList.toggle('_active_header');
    })
}


// const yourcardMenuBlock = document.querySelector('.yourcard_menu_block');
// // const yourcardBlocksScreen = document.querySelector('.yourcard_blocks_screen');
// const yourcardBlocksList = document.querySelector('.yourcard_blocks_list');
// if (yourcardMenuBlock) {
    //     yourcardMenuBlock.addEventListener('click', function() {
        //         // yourcardBlocksScreen.classList.toggle('_active_menu');
        //         yourcardBlocksList.classList.toggle('_active_menu');
        //     });
        // }
        
        // let yourcardMenuLink = document.querySelectorAll('yourcard_menu_link');
        // let yourcardBlocks = document.querySelectorAll('yourcard_blocks');
        // for (let index = 0; index < array.length; index++) {
            //     const element = array[index];
            //     yourcardMenuLink[index].addEventListener('click', function() {
                //         yourcardBlocks.classList.toggle('active')
                //     }); 
                // }
                            
    let tab = function() {
    let yourcardMenuLink = document.querySelectorAll('.yourcard_menu_link');
    const yourcardBlocks = document.querySelectorAll('.yourcard_blocks');
    const yourcardCenterScreen = document.querySelector('.yourcard_center_screen');
    let tabName;
    yourcardMenuLink.forEach(item=> {
        item.addEventListener('click', selectYourcardMenuLink);
    })
    function selectYourcardMenuLink() {
        yourcardCenterScreen.classList.toggle('_active_menu');

        yourcardMenuLink.forEach(item=>{
            item.classList.remove('is-act');
        })
        this.classList.toggle('is-act');
        tabName = this.getAttribute('data-tab-name');
        selectYourcardBlocks(tabName);
    }
    function selectYourcardBlocks(tabName) {
        yourcardBlocks.forEach(item=> {
            item.classList.contains(tabName)? 
            item.classList.toggle('is-act') :
            item.classList.remove('is-act');
        })
    }
}

tab();

// const yourcardMenuShift = document.querySelector('.yourcard_menu_shift');
// document.getElementsByClassName('_active_header')[0].onclick =  setTimeout(() => removeEventListener, 1000);


// document.getElementById('yourcard_screen_pause').onclick = setTimeout(1000);

// const yourcard_ActiveMenu = document.querySelector('._active_menu');
// if (yourcard_ActiveMenu) {
    //     yourcard_ActiveMenu.addEventListener('click', setTimeout(yourcard_ActiveMenu, 1000);
    // }
    
    // const yourcardHeaderTabYourcard = document.querySelector('.yourcard_header_tab_yourcard');
// const yourcardMenu = document.querySelector('.yourcard_menu');
// const yourcardCenterScreen = document.querySelector('.yourcard_center_screen');
// const yourcardMenuScreen = document.querySelector('.yourcard_menu_screen');
// if (yourcardMenuLink) {
//     yourcardMenuLink.addEventListener("click", function() {
//         yourcardCenterScreen.classList.toggle('_active_menu');
//         // yourcardMenu.classList.toggle('_active_header');
//         // yourcardCenterScreen.classList.toggle('_active_header');
//         // yourcardMenuScreen.classList.toggle('_active_header');
//     });
// }
// let yourcardMenuBlock = document.querySelectorAll('.yourcard_menu_block');
// yourcardMenuBlock.forEach(item=> {
//     item.classList.addEventListener('click')
// })
// if (yourcardMenuBlock) {
//     yourcardMenuBlock.addEventListener("click", function() {
//         yourcardMenuBlock.classList.toggle('_menu_active');
//     });
// }

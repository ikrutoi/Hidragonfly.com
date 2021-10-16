const menuIcon = document.querySelector('.menu_icon');
const cardsBodyNav = document.querySelector('.cards_body_nav');
if (menuIcon) {
    menuIcon.addEventListener("click", function(e) {
        menuIcon.classList.toggle('_active');
        cardsBodyNav.classList.toggle('_active');
    });
}

// const cardYN = document.querySelector('.addres_click');
// const cardBody = document.querySelector('.card_body');
// if (cardYN) {
//     cardYN.addEventListener("click", function(e) {
//         cardBody.classList.toggle('_addres');
//     });
// }

const yourcardHeaderTabYourcard = document.querySelector('.yourcard_header_tab_yourcard');
const yourcardMenu = document.querySelector('.yourcard_menu');
const yourcardCenterScreen = document.querySelector('.yourcard_center_screen');
// const yourcardMenuScreen = document.querySelector('.yourcard_menu_screen');
if (yourcardHeaderTabYourcard) {
    yourcardHeaderTabYourcard.addEventListener("click", function() {
        yourcardHeaderTabYourcard.classList.toggle('_active_header');
        yourcardMenu.classList.toggle('_active_header');
        yourcardCenterScreen.classList.toggle('_active_header');
        // yourcardMenuScreen.classList.toggle('_active_header');
    });
}

const yourcardHeaderTabCards = document.querySelector('.yourcard_header_tab_cards');
// const cardsBodyNav = document.querySelector('.cards_body_nav');
if (yourcardHeaderTabCards) {
    yourcardHeaderTabCards.addEventListener("click", function() {
        yourcardHeaderTabCards.classList.toggle('_active_header');
        // cardsBodyNav.classList.toggle('_active');
    });
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

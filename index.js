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
// const yourcardMenuScreen = document.querySelector('.yourcard_menu_screen');
if (yourcardHeaderTabYourcard) {
    yourcardHeaderTabYourcard.addEventListener("click", function() {
        yourcardHeaderTabYourcard.classList.toggle('_active_header');
        yourcardMenu.classList.toggle('_active_header');
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

const yourcardMenuBlock = document.querySelector('.yourcard_menu_block');
// const yourcardBlocksScreen = document.querySelector('.yourcard_blocks_screen');
const yourcardBlocksList = document.querySelector('.yourcard_blocks_list');
if (yourcardMenuBlock) {
    yourcardMenuBlock.addEventListener('click', function() {
        // yourcardBlocksScreen.classList.toggle('_active_menu');
        yourcardBlocksList.classList.toggle('_active_menu');
    });
}


// let tab = function() {
//     let yourcardMenuBlock1 = document.querySelectorAll('.yourcard_menu_block1');
//     const yourcardBlock = document.querySelectorAll('.yourcard_block');
//      let tabName;
//     yourcardMenuBlock1.forEach(item=> {
//         item.addEventListener('click', selectYourcardMenuBlock1)
//     })
//     function selectYourcardMenuBlock1() {
//         yourcardMenuBlock1.forEach(item=>{
//             item.classList.remove('is-act');
//         })
//         this.classList.toggle('is-act');
//         tabName = this.getAttribute('data-tab-name');
//         selectYourcardBlock(tabName);
//     }
//     function selectYourcardBlock(tabName) {
//         yourcardBlock.forEach(item=> {
//             item.classList.contains(tabName)? 
//             item.classList.toggle('is-act') :
//             item.classList.remove('is-act');
//         })
//     }
// }

// tab();

// let yourcardMenuBlock = document.querySelectorAll('.yourcard_menu_block');
// yourcardMenuBlock.forEach(item=> {
//     item.classList.addEventListener('click')
// })
// if (yourcardMenuBlock) {
//     yourcardMenuBlock.addEventListener("click", function() {
//         yourcardMenuBlock.classList.toggle('_menu_active');
//     });
// }

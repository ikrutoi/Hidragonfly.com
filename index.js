let menuIcon = document.querySelector('.menu_icon');
let cardsBodyNav = document.querySelector('.cards_body_nav');
if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
        menuIcon.classList.toggle('_active');
        cardsBodyNav.classList.toggle('_active');
    });
}

// let yourcardHeaderTabYourcard = document.querySelector('.yourcard_header_tab_yourcard');
// let yourcardMenu = document.querySelector('.yourcard_menu');
// let yourcardEnvelope = document.querySelector('.yourcard_envelope');
// let background = document.querySelector('.background');
// let footer = document.querySelector('.footer');
// if (yourcardHeaderTabYourcard) {
//     yourcardHeaderTabYourcard.addEventListener('click', function() {
//         yourcardHeaderTabYourcard.classList.toggle('_yourcard_active');
//         yourcardMenu.classList.toggle('_yourcard_active');
//         yourcardEnvelope.classList.toggle('active');
//         footer.classList.toggle('active');
//         let yourcardMenuLink = document.querySelectorAll('yourcard_menu_link');
//         let yourcardSubmenu = document.querySelectorAll('yourcard_submenu');
//         let yourcardMenuActive = document.querySelector('yourcard_menu._yourcard_active');
//         let tabMenu
//         if (yourcardMenuActive) {
//             yourcardMenuLink.forEach(item=> {
//                 item.addEventListener('click', selectYourcardMenuLink);
//             })
//             function selectYourcardMenuLink () {
//                 yourcardMenuLink.forEach(item=> {
//                     item.classList.contains(tabMenu)?
//                     item.classList.toggle('active'):
//                     item.classList.remove('active');
//                 })             
//                 this.classList.toggle('active');
//                 tabMenu = this.getAttribute('data-tab-name');
//                 selectYourcardBlocks(tabMenu);                
//             }
//             function selectYourcardBlocks(tabMenu) {
//                 yourcardSubmenu.forEach(item=> {
//                     item.classList.contains(tabMenu)?
//                     item.classList.toggle('active'):
//                     item.classList.remove('active');
//                 })
//             }
//         }
//     });
// }

// let yourcardHeaderTabCards = document.querySelector('.yourcard_header_tab_cards');
// if (yourcardHeaderTabCards) {
//     yourcardHeaderTabCards.addEventListener("click", function() {
//         yourcardHeaderTabCards.classList.toggle('_active_header');
//     })
// }

// let addres = document.querySelector('.addres');
// let yourcardAddres = document.querySelector('.yourcard_addres');
// let yourcardPhoto = document.querySelector('.yourcard_photo');
// if (addres) {
//     addres.addEventListener('click', function() {
//         yourcardAddres.classList.toggle('active');     
//         yourcardPhoto.classList.toggle('active');
//     });
// }

const headerTabYourcard = document.querySelector('.header_tab_yourcard');
const yourcardMenu = document.querySelector('.yourcard_menu');
const yourcardMenuTab = document.querySelectorAll('.yourcard_menu_tab');
const yourcardEnvelope = document.querySelector('.yourcard_envelope');
const yourcardSubmenuTab = document.querySelectorAll('.yourcard_submenu_tab');

headerTabYourcard.addEventListener('click', function() {
    headerTabYourcard.classList.toggle('active');
    yourcardMenu.classList.toggle('active');
    yourcardEnvelope.classList.toggle('active');
    
    const rain = document.querySelectorAll('.rain');
    
    rain.forEach(function(item) {
        item.classList.toggle('active');
    })
    
    if (headerTabYourcard.classList.contains('active')) {
        yourcardMenuTab.forEach(function(item) {
            item.addEventListener('click', function() {
                let currentTab = item;
                let tabId = currentTab.getAttribute('data-tab');
                let currentMenuTab = document.querySelector(tabId);

                if (!currentTab.classList.contains('active')) {
                    yourcardMenuTab.forEach(function(item) {
                        item.classList.remove('active');
                    })
                    
                    yourcardSubmenuTab.forEach(function(item) {
                        item.classList.remove('active');
                    })
                    
                    currentTab.classList.add('active');
                    currentMenuTab.classList.add('active');
                }
            })
        })
    }

    else yourcardMenuTab.forEach(function(item) {
        item.classList.remove('active');   
    })
    
    yourcardSubmenuTab.forEach(function(item) {
        item.classList.remove('active');   
    })
})





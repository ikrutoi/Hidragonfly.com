let menuIcon = document.querySelector('.menu_icon');
let cardsBodyNav = document.querySelector('.cards_body_nav');
if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
        menuIcon.classList.toggle('_active');
        cardsBodyNav.classList.toggle('_active');
    });
}

const headerTabYourcard = document.querySelector('.header_tab_yourcard');
const yourcardMenu = document.querySelector('.yourcard_menu');
const yourcardMenuTab = document.querySelectorAll('.yourcard_menu_tab');
const yourcardEnvelope = document.querySelector('.yourcard_envelope');
const yourcardSubmenuTab = document.querySelectorAll('.yourcard_submenu_tab');
const rain = document.querySelectorAll('.rain');
// const address = document.querySelector('.address');
const youcardText = document.querySelector('.yourcard_text');
const youcardAddress = document.querySelector('.yourcard_address');
const footer = document.querySelector('.footer');

headerTabYourcard.addEventListener('click', function() {
    headerTabYourcard.classList.toggle('active');
    yourcardMenu.classList.toggle('active');
    yourcardEnvelope.classList.toggle('active');
    footer.classList.toggle('active');
    
    rain.forEach(function(item) {
        item.classList.toggle('active');
    })   
    
    yourcardMenuTab.forEach(function(item) {
        item.addEventListener('click', function() {
            let currentTab = item;
            let tabId = currentTab.getAttribute('data-tab');
            let currentMenuTab = document.querySelector(tabId);  
                
            if (currentTab.classList.contains('active')) {
                currentTab.classList.remove('active');
                currentMenuTab.classList.remove('active');
                youcardAddress.classList.remove('active');
                youcardText.classList.remove('active');
            }
            
            else {
                yourcardMenuTab.forEach(function(item) {
                    item.classList.remove('active');
                })
                
                yourcardSubmenuTab.forEach(function(item) {
                    item.classList.remove('active');
                })

                youcardAddress.classList.remove('active');
                youcardText.classList.remove('active');
             
                currentTab.classList.add('active');
                currentMenuTab.classList.add('active');

                if (address.classList.contains('active')) {
                    youcardAddress.classList.add('active');
                }

                if (text.classList.contains('active')) {
                    youcardText.classList.add('active');
                }
            }
        })
    })
    
    yourcardMenuTab.forEach(function(item) {
        item.classList.remove('active');   
    })
    
    yourcardSubmenuTab.forEach(function(item) {
        item.classList.remove('active');   
    })

    youcardAddress.classList.remove('active');
    youcardText.classList.remove('active');
})

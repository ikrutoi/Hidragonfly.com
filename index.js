const menuIcon = document.querySelector('.menu_icon');
const cardsBodyNav = document.querySelector('.cards_body_nav');
if (menuIcon) {
    menuIcon.addEventListener("click", function(e) {
        menuIcon.classList.toggle('_active');
        cardsBodyNav.classList.toggle('_active');
    });
}

const cardYN = document.querySelector('.addres_click');
const cardBody = document.querySelector('.card_body');
if (cardYN) {
    cardYN.addEventListener("click", function(e) {
        cardBody.classList.toggle('_addres');
    });
}

let tab = function() {
    let tabItem = document.querySelectorAll('.tab_item'),
    tabContent = document.querySelectorAll('.tab_blocks'),
    tabName;
    tabItem.forEach(item=> {
        item.addEventListener('click', selectTabItem)
    })
    function selectTabItem() {
        tabItem.forEach(item=>{
            item.classList.remove('is-act');
        })
        this.classList.toggle('is-act');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item=> {
            item.classList.contains(tabName)? 
            item.classList.toggle('is-act') :
            item.classList.remove('is-act');
        })
    }
}

tab();

screen.lockOrientation('landscape');

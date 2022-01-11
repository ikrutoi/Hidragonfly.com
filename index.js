// import { header } from './JS/header.js';
// import { croppic } from './сroppic/croppic.js';
// import { login } from './JS/login.js';

// login;
// header;

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

document.querySelectorAll('.new_line').forEach(newLine => {
    newLine.addEventListener('keydown', myBrHandler)
})

function myBrHandler(e) {
    if (e.ctrlKey || e.keyCode == 13) {
        let brNode = document.createElement('br');
        
        let range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(brNode);
        range.collapse();
    }
}

const headerTabLogin = document.querySelector('.header_tab_login');
const rainCenter = document.querySelector('.rain_center');
const loginBlock = document.querySelector('.login_block');

headerTabLogin.addEventListener('click', function() {
    headerTabLogin.classList.toggle('active');
    yourcardEnvelope.classList.toggle('active');
    rainCenter.classList.toggle('active');
    loginBlock.classList.toggle('active');
});

function show() {
    let pas = document.querySelector('.pas_add');
    pas.setAttribute('type', 'text');
}

function hide() {
    let pas = document.querySelector('.pas_add');
    pas.setAttribute('type', 'password');
}

let passwordShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (passwordShown == 0) {
        passwordShown = 1;
        show();
    } else {
        passwordShown = 0;
        hide();
    }
});

const loginEye = document.querySelector('.login_eye');

loginEye.addEventListener('click', function () {
    loginEye.classList.toggle('active');
});

const loginField = document.querySelectorAll('.login_field');

loginField.forEach(function (item) {
    item.addEventListener('focus', () => item.classList.add('focused'),true);
    item.addEventListener('blur', () => item.classList.remove('focused'),true);
});
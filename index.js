// import { header } from './JS/header.js';
// import { croppic } from './сroppic/croppic.js';
// import { login } from './JS/login.js';

// login;
// header;

import { root, myCreateElement } from "./JS/func_create_element.js";

let menuIcon = document.querySelector('.menu_icon');
let cardsBodyNav = document.querySelector('.cards_body_nav');
if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
        menuIcon.classList.toggle('_active');
        cardsBodyNav.classList.toggle('_active');
    });
}

// const main = document.querySelector('.main');
const textHi = document.querySelector('.text_hi');
const headerTabYourcard = document.querySelector('.header_tab_yourcard');
const yourcardMenu = document.querySelector('.yourcard_menu');
const yourcardMenuTab = document.querySelectorAll('.yourcard_menu_tab');
const yourcardEnvelope = document.querySelector('.yourcard_envelope');
const yourcardSubmenuTab = document.querySelectorAll('.yourcard_submenu_tab');
const rain = document.querySelectorAll('.rain');

const youcardText = document.querySelector('.yourcard_text');
const youcardAddress = document.querySelector('.yourcard_address');
const footer = document.querySelector('.footer');

// root.addEventListener('click', () => textHi.classList.add('active'));

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


/* SIGN UP ------------------------------------------*/

const divLoginBlock = document.querySelector('.login_block');
const divSignupBlocks = myCreateElement('div', ['signup_blocks']);
const form = myCreateElement('form', [['action', 'form.php'], ['method', 'POST']]);
const inputSignEmail = myCreateElement('input', ['input_area'],
[['type', 'email'],
['placeholder', 'Enter your email'],
['name', 'email'],
/*['required']*/]
);
const divEnterEmail = myCreateElement('div', ['block_input_other']);
const pText = myCreateElement('p');
const spanText = myCreateElement ('span');
const divLoginSign = myCreateElement('div', ['block_button']);
const spanText1 = myCreateElement('span');
const pText1 = myCreateElement('p');
const buttonLogin = myCreateElement('button', ['tab_button', 'tab_button_login']);

pText.append(document.createTextNode('Continue'));
spanText.append(pText);
divEnterEmail.append(inputSignEmail, spanText);

pText1.append(document.createTextNode('Already have an account?'));
spanText1.append(pText1);
buttonLogin.append(document.createTextNode('LOG IN'));
divLoginSign.append(spanText1, buttonLogin);

const iEye2 = myCreateElement('i', ['img_eye'], [['id', 'eye2'], ['data-tab', 'pass2']]);
const spanI2 = myCreateElement ('span');
const inputPasAdd2 = myCreateElement ('input',
    ['input_area'],
    [['id', 'pass2'],
    ['type', 'password'],
    ['placeholder', 'Create a password'],
    ['name', 'password'],
    ['data-tab', 'eye2']
    /*['required']*/]
);
const divEnterPas2 = myCreateElement('div', ['block_input', 'block_input_other'], [['data-tab', 'eye2']]);

spanI2.append(iEye2);
divEnterPas2.append(inputPasAdd2, spanI2);

const iEye3 = myCreateElement('i', ['img_eye'], [['id', 'eye3'], ['data-tab', 'pass3']]);
const spanI3 = myCreateElement ('span');
const inputPasAdd3 = myCreateElement ('input',
    ['input_area'],
    [['id', 'pass3'],
    ['type', 'password'],
    ['placeholder', 'Repeat create a password'],
    ['name', 'password'],
    ['data-tab', 'eye3']
    /*['required']*/]
);
const divEnterPas3 = myCreateElement('div', ['block_input', 'block_input_other'], [['data-tab', 'eye3']]);

spanI3.append(iEye3);
divEnterPas3.append(inputPasAdd3, spanI3);

const inputUserName = myCreateElement ('input',
    ['input_area'],
    [['type', 'text'],
    ['placeholder', 'Enter a username'],
    ['name', 'userName'],
    ['maxlength', '20']
]);
const divEnterUserName = myCreateElement('div', ['block_input_other']);

divEnterUserName.append(inputUserName);

const divBlockButton2 = myCreateElement('div', ['block_button']);
const buttonSignUp = myCreateElement('button', ['tab_button', 'tab_button_submit']);

buttonSignUp.append(document.createTextNode('SIGN UP'));
divBlockButton2.append(buttonSignUp);

form.append(divEnterEmail, divEnterPas2, divEnterPas3, divEnterUserName, divBlockButton2);
divSignupBlocks.append(form, divLoginSign);
divLoginBlock.append(divSignupBlocks);

const headerTabLogin = document.querySelector('.header_tab_login');
const rainCenter = document.querySelector('.rain_center');
const loginBlock = document.querySelector('.login_block');

headerTabLogin.addEventListener('click', function() {
    headerTabLogin.classList.toggle('active');
    yourcardEnvelope.classList.toggle('active');
    rainCenter.classList.toggle('active');
    loginBlock.classList.toggle('active');
});

const tabSignup = document.querySelector('.tab_button_signup');

tabSignup.addEventListener('click', function () {
    document.querySelector('.signup_blocks').setAttribute('style', 'visibility: visible');
    document.querySelector('.logins_blocks').setAttribute('style', 'visibility: hidden');
    document.querySelector('.login_greeting').setAttribute('style', 'visibility: hidden');
})

const tabLogin = document.querySelector('.tab_button_login');

tabLogin.addEventListener('click', function () {
    document.querySelector('.signup_blocks').setAttribute('style', 'visibility: hidden');
    document.querySelector('.logins_blocks').setAttribute('style', 'visibility: visible');
    document.querySelector('.login_greeting').setAttribute('style', 'visibility: visible');
})

const blockInput = document.querySelectorAll('.block_input');
const imgEye = document.querySelectorAll('.img_eye');

let passwordShown = 0;

imgEye.forEach(function (item) {
    item.addEventListener('click', function () {
        const currentTab = item;
        const idDataTab = currentTab.getAttribute('data-tab');
        const elemDataTab = document.getElementById(idDataTab);

        elemDataTab.focus();
        item.classList.toggle('active');
        
        if (passwordShown == 0) {
            passwordShown = 1;
            show(elemDataTab);
        } else {
            passwordShown = 0;
            hide(elemDataTab);
        }
    })
});

blockInput.forEach(function (item) {
    item.addEventListener('focus', function () {
        console.log('Hello');
        addVisib(item); 
    }, true)
});

blockInput.forEach(function (item) {
    item.addEventListener('blur', function () {
       console.log('Bye');
       delVisib(item);
    }, true)
});

function show(elem) {
    elem.setAttribute('type', 'text');
};

function hide(elem) {
    elem.setAttribute('type', 'password');
};

function addVisib(elem) {
    const currentTab = elem;
    const idDataTab = currentTab.getAttribute('data-tab');
    const elemDataTab = document.getElementById(idDataTab);
    
    elemDataTab.setAttribute('style', 'visibility: visible');
    elemDataTab.classList.add('visible');
};

function delVisib(elem) {
    const currentTab = elem;
    const idDataTab = currentTab.getAttribute('data-tab');
    const elemDataTab = document.getElementById(idDataTab);

    elemDataTab.setAttribute('style', 'visibility: hidden');
};

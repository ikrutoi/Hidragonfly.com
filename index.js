// import { header } from './JS/header.js';
// import { croppic } from './сroppic/croppic.js';
// import { login } from './JS/login.js';

// login;
// header;

import { myCreateElement } from "./JS/func_create_element.js";

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


/* SIGN UP ------------------------------------------*/

const divLoginBlock = document.querySelector('.login_block');
const formSignupForm = myCreateElement('form', ['signup_form']);
const divSignupBlock = myCreateElement('div', ['signup_form_block']);
const divSignup1 = myCreateElement('div');
const inputSignEmail = myCreateElement('input', ['email_add', 'login_tab'],
[['type', 'email'],
['placeholder', 'Enter your email'],
['name', 'email'],
['required']]
);
const divEnterEmail = myCreateElement('div', ['enter_email', 'login_field', 'signup_field']);
const pText = myCreateElement('p');
const spanText = myCreateElement ('span');
const divLoginSign = myCreateElement('div', ['login_sign']);
const spanText1 = myCreateElement('span');
const pText1 = myCreateElement('p');
const buttonLogin = myCreateElement('button', ['login_submit', 'login_tab']);

pText.append(document.createTextNode('Continue'));
spanText.append(pText);
divEnterEmail.append(inputSignEmail, spanText);

pText1.append(document.createTextNode('Already have an account?'));
spanText1.append(pText1);
buttonLogin.append(document.createTextNode('LOG IN'));
divLoginSign.append(spanText1, buttonLogin);

const iEye1 = myCreateElement('i', ['login_eye'], [['id', 'eye']]);
const spanI1 = myCreateElement ('span');
const inputPasAdd = myCreateElement ('input',
    ['pas_add', 'login_tab'],
    [['id', 'login_pas_input'],
    ['type', 'password'],
    ['placeholder', 'Create a password'],
    ['name', 'password'],
    ['required']]
);
const divEnterPas1 = myCreateElement('div', ['enter_pas', 'login_field', 'signup_field']);

spanI1.append(iEye1);
divEnterPas1.append(inputPasAdd, spanI1);

const iEye2 = myCreateElement('i', ['login_eye'], [['id', 'eye']]);
const spanI2 = myCreateElement ('span');
const inputPasAdd2 = myCreateElement ('input',
    ['pas_add', 'login_tab'],
    [['id', 'login_pas_input'],
    ['type', 'password'],
    ['placeholder', 'Repeat create a password'],
    ['name', 'password'],
    ['required']]
);
const divEnterPas2 = myCreateElement('div', ['enter_pas2', 'login_field', 'signup_field']);

spanI2.append(iEye2);
divEnterPas2.append(inputPasAdd2, spanI2);

const inputUserName = myCreateElement ('input',
    ['login_add', 'login_tab'],
    [['type', 'text'],
    ['placeholder', 'Enter a username'],
    ['name', 'userName'],
    ['maxlength', '20']
]);
const divEnterUserName = myCreateElement('div', ['enter_user_name', 'login_field', 'signup_field']);

divEnterUserName.append(inputUserName);

divSignup1.append(divEnterEmail, divEnterPas1, divEnterPas2, divEnterUserName);
divSignupBlock.append(divSignup1, divLoginSign);
formSignupForm.append(divSignupBlock);
divLoginBlock.append(formSignupForm);

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

const signupForm = document.querySelector('.signup_form');

signupForm.classList.add('active');

const signUpTab = document.querySelector('.login_signup_tab');
const loginForm = document.querySelector('.login_form');
const signupField = document.querySelectorAll('.signup_field');
const loginGreeting = document.querySelector('.login_greeting');

signUpTab.addEventListener('click', function () {
    loginGreeting.classList.add('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');

    const signupFormBlock = document.querySelector('.signup_form_block');
    const signupFieldOne = document.querySelector('.signup_field');

    signupFormBlock.setAttribute('display', 'flex');
   
    signupFieldOne.classList.remove('active');
});

// signupField.forEach(function (item) {
//     item.classList.add('active');
// });




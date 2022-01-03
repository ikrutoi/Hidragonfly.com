import { root, myCreateElement } from "./func_create_element.js";

const header = myCreateElement('header', ['header']);
const divLogoHi = myCreateElement('div', ['logo_hi']);
const divYoucardHeaderLogo = myCreateElement('div', ['yourcard_header_logo']);
const divScreenHeader = myCreateElement('div', ['screen_header']);
const divLogoHidragonfly = myCreateElement('div', ['logo_hidragonfly']);
const a1 = myCreateElement('a', [], [['href', 'index.html']]);
const a2 = myCreateElement(
    'a',
    ['header_tab', 'header_tab_yourcard', 'yourcard_header_tab_yourcard'],
    [['href', '#']]
);
const a2Text = document.createTextNode('Your Card');
const navHeaderMenu = myCreateElement('nav', ['header_menu']);
const divHeaderBurger = myCreateElement('div', ['header_burger']);
const divYourcardHeaderYoucard = myCreateElement('div', ['yourcard_header_yourcard']);
const li1 = myCreateElement('li');
const li2 = myCreateElement('li');
const li3 = myCreateElement('li');
const ul1 = myCreateElement('ul');
const ul2 = myCreateElement('ul');
const navHeaderLogin = myCreateElement('nav', ['header_login']);
const divYourcardHeaderLogin = myCreateElement('div', ['yourcard_header_login']);
const divYourcardHeaderCart = myCreateElement('div', ['yourcard_header_cart']);
const a3 = myCreateElement(
    'a',
    ['header_tab', 'menu_it'],
    [['data-tab-name', ''], ['href', '#']]
);
const a3Text = document.createTextNode('Login');
const a4 = myCreateElement(
    'a',
    ['header_tab', 'menu_it'],
    [['data-tab-name', ''], ['href', '#']]
); 
const a4Text = document.createTextNode('Cart');

divLogoHi.append(
    myCreateElement('span'),
    myCreateElement('span'),
    myCreateElement('span')
);
a1.append(
    myCreateElement(
        'img',
        [], 
        [['src', '/logo/header_logo_22x152.png'], ['alt', 'header_logo']]
    )
);
divHeaderBurger.append(
    myCreateElement('span')
);
a2.append(a2Text);
divYourcardHeaderYoucard.append(a2);
li1.append(divYourcardHeaderYoucard);
ul1.append(li1);
navHeaderMenu.append(divHeaderBurger, ul1);
a3.append(a3Text);
divYourcardHeaderLogin.append(a3);
li2.append(divYourcardHeaderLogin);
a4.append(a4Text);
divYourcardHeaderCart.append(a4);
li3.append(divYourcardHeaderCart);
ul2.append(li2, li3);
navHeaderLogin.append(ul2);
divLogoHidragonfly.append(a1);
divYoucardHeaderLogo.append(divLogoHi, divLogoHidragonfly);
header.append(divScreenHeader, divYoucardHeaderLogo, navHeaderMenu, navHeaderLogin);
root.append(header);

export { header };
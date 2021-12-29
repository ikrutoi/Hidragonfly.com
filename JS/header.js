import { root, myCreateElement } from "./func_create_element.js";

const fragmentHeader = document.createDocumentFragment();
const newHeader = myCreateElement('header', 'header');

newHeader.append(
        myCreateElement('div', 'screen_header'),
        myCreateElement('div', 'yourcard_header_logo'),
        myCreateElement('nav', 'header_menu'),
        myCreateElement('nav', 'header_login')
    );

myCreateElement('div', 'logo_hi')
    .append(
        myCreateElement('span'),
        myCreateElement('span'),
        myCreateElement('span')
    );

fragmentHeader.append(newHeader);
root.append(fragmentHeader);

export { fragmentHeader };
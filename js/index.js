import { navButtonMenu, addNewImg } from './navigation.js';
import { newElem } from './new-element.js'
import { dragNDrop } from './drag-n-drop.js';

navButtonMenu();

const blockNewImg = document.querySelector('.new-img');

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tl'], 'top: -5px; left: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tr'], 'top: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-br'], 'bottom: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-bl'], 'bottom: -5px; left: -5px;');

dragNDrop();
addNewImg();

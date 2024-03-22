import { navButtonMenu, addNewImg } from './navigation.js';
import { newElem } from './new-element.js'
import { dragNDrop } from './drag-n-drop.js';

navButtonMenu();

const blockNewImg = document.querySelector('.new-img');

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-1'], 'top: -5px; left: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-2'], 'top: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-3'], 'bottom: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-4'], 'bottom: -5px; left: -5px;');

dragNDrop();
addNewImg();

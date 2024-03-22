import { navButtonMenu } from './navigation.js';
import { newElem } from './new-element.js'
import { dragNDrop } from './drag-n-drop.js';

navButtonMenu();

const blockNewImg = document.querySelector('.block-new-img');

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tl'], 'top: 0px; left: 0px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-tr'], 'top: 0px; right: 0px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-br'], 'bottom: 0px; right: 0px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-bl'], 'bottom: 0px; left: 0px;');

dragNDrop();

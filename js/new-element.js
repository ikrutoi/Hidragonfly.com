function newElement(tag, newClass, newStyle,) {
    const blockNewImg = document.querySelector('.full-block-img');
    const newTag = document.createElement(tag);

    for (const el of newClass) {
        newTag.classList.add(el);
    }

    newTag.setAttribute('style', `background-color: #008aed; position: absolute; width: 8px; height: 8px; border-radius: 10px; border: solid 1px #ffffff; ${newStyle}`);
    blockNewImg.append(newTag);
}

export function newElem() {
    newElement('span', ['crop-circle', 'crop-circle-tl'], 'top: -100px; left: -100px');
    newElement('span', ['crop-circle', 'crop-circle-tr'], 'top: -100px; right: -100px');
    newElement('span', ['crop-circle', 'crop-circle-br'], 'bottom: -100px; right: -100px');
    newElement('span', ['crop-circle', 'crop-circle-bl'], 'bottom: -100px; left: -100px');
};
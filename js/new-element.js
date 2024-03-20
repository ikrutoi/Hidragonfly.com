const cardPhotoImg = document.querySelector('.card-photo');

function newElement(tag, newClass, newStyle,) {
    const newTag = document.createElement(tag);

    for (let el of newClass) {
        newTag.classList.add(el);
    }

    newTag.setAttribute('style', `background-color: #008aed; position: absolute; width: 8px; height: 8px; border-radius: 10px; border: solid 1px #ffffff; ${newStyle}`);
    const ttt = document.querySelector('.full-block-img');
    ttt.append(newTag);
}

export function newElem() {
    newElement('span', ['crop-circle', 'crop-circle-tl'], 'top: 0px; left: 0px');
    newElement('span', ['crop-circle', 'crop-circle-tr'], 'top: 0px; right: 0px');
    newElement('span', ['crop-circle', 'crop-circle-br'], 'bottom: 0px; right: 0px');
    newElement('span', ['crop-circle', 'crop-circle-bl'], 'bottom: 0px; left: 0px');
};
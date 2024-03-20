// const cardPhotoImg = document.querySelector('.card-photo');

function newElement(tag, newClass, newStyle,) {
    const main = document.querySelector('.main');
    const newTag = document.createElement(tag);

    for (const el of newClass) {
        newTag.classList.add(el);
    }

    newTag.setAttribute('style', `background-color: #008aed; position: absolute; width: 8px; height: 8px; border-radius: 10px; border: solid 1px #ffffff; ${newStyle}`);
    main.append(newTag);
}

export function newElem() {
    newElement('span', ['crop-circle', 'crop-circle-tl'], 'top: 50px; left: 50px');
    newElement('span', ['crop-circle', 'crop-circle-tr'], 'top: 50px; right: 50px');
    newElement('span', ['crop-circle', 'crop-circle-br'], 'bottom: 50px; right: 50px');
    newElement('span', ['crop-circle', 'crop-circle-bl'], 'bottom: 50px; left: 50px');
};
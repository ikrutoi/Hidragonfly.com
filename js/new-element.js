function crop() {
    // const cardPhotoImg = document.querySelector('.card-photo');
    // cropCircle.classList.add('crop-circle');
    
    // function creatCircle(a, b) {
    //     cropCircle.setAttribute(
    //         'style', 
    //         `content: '.';
    //         background-color: #008aed; 
    //         position: absolute; 
    //         width: 8px; 
    //         height: 8px; 
    //         border-radius: 10px; 
    //         border: solid 1px #ffffff;
    //         ${a};
    //         ${b};`
    //     );        
    // }
        
    // const cropCircleTL = document.createElement('span::before');
    // creatCircle('top: -4px', 'left: -4px');
    // cropCircle.classList.add('crop-circle-tl');
    // cardPhotoImg.append(cropCircle); 
    
    // const cropCircle = document.createElement('span::before');
    // creatCircle('top: -4px', 'right: -4px');
    // cropCircle.classList.add('crop-circle-tr');
    // cardPhotoImg.append(cropCircle); 
    
    // const cropCircle = document.createElement('span::before');
    // creatCircle('bottom: -4px', 'right: -4px');
    // cropCircle.classList.add('crop-circle-br');
    // cardPhotoImg.append(cropCircle); 
    
    // const cropCircle = document.createElement('span::before');
    // creatCircle('bottom: -4px', 'left: -4px');
    // cropCircle.classList.add('crop-circle-bl');
    // cardPhotoImg.append(cropCircle); 
};


const cardPhotoImg = document.querySelector('.card-photo');

function newElement(tag, newClass, newStyle,) {
    const newTag = document.createElement(tag);

    for (let el of newClass) {
        newTag.classList.add(el);
    }

    newTag.setAttribute('style', `content: '.'; background-color: #008aed; position: absolute; width: 8px; height: 8px; border-radius: 10px; border: solid 1px #ffffff; ${newStyle}`);
    cardPhotoImg.append(newTag);
    // return newTag;
}

export function newElem() {
    newElement('span', ['crop-circle', 'crop-circle-tl'], 'top: -4px; left: -4px');
    newElement('span', ['crop-circle', 'crop-circle-tr'], 'top: -4px; right: -4px');
    newElement('span', ['crop-circle', 'crop-circle-br'], 'bottom: -4px; right: -4px');
    newElement('span', ['crop-circle', 'crop-circle-bl'], 'bottom: -4px; left: -4px');
};
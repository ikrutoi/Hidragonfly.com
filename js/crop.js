export function crop() {
    const cropCircle = document.createElement('span::before');
    const cardPhotoImg = document.querySelector('.card-photo');
    cropCircle.classList.add('crop-circle');
    
    function creatCircle(a, b) {
        cropCircle.setAttribute(
            'style', 
            `content: '.';
            background-color: #008aed; 
            position: absolute; 
            width: 8px; 
            height: 8px; 
            border-radius: 10px; 
            border: solid 1px #ffffff;
            ${a};
            ${b};`
        );        
    }
    
    creatCircle('top: -4px', 'left: -4px');
    cardPhotoImg.append(cropCircle);
   
};
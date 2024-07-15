export function cardphotoTorn() {

    const cardphotoImage = document.querySelector('.cardphoto-image');
    
    switch (getComputedStyle(cardphotoImage).transform) {
        case 'none':
            cardphotoImage.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';
            break;
        case 'matrix(1, 0, 0, 1, 0, 0)':
            cardphotoImage.style.transform = 'matrix(0, 1, -1, 0, 0, 0)';
            break;
        case 'matrix(0, 1, -1, 0, 0, 0)':
            cardphotoImage.style.transform = 'matrix(-1, 0, 0, -1, 0, 0)';
            break;
        case 'matrix(-1, 0, 0, -1, 0, 0)':
            cardphotoImage.style.transform = 'matrix(0, -1, 1, 0, 0, 0)';
            break;
        case 'matrix(0, -1, 1, 0, 0, 0)':
            cardphotoImage.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
            break;
    }
}
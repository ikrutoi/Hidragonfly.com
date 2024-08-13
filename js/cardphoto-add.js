export function addImage() {
    const cardphotoImage = document.querySelector('.cardphoto-image');

    const cardHeight = document.documentElement.clientHeight * 0.50;
    const cardWidth = cardHeight * 1.42;

    const imageAddTemporary = document.createElement('img');
    imageAddTemporary.src = '/image/card-photo-bw.jpg'; 
    imageAddTemporary.onload = () => {

        if (imageAddTemporary.width > imageAddTemporary.height) {
            console.log('image horozontal');
        } else {
            console.log('image vertical');
        }

        if (imageAddTemporary.width / imageAddTemporary.height >= 1.42) {
        } else {
            cardphotoImage.style.width = cardWidth + 'px'; 
        }  
    }

    cardphotoImage.src = '/image/card-photo-bw.jpg';



}
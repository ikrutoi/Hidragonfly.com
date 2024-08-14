export function addImage() {
    const cardphotoImage = document.querySelector('.cardphoto-image');

    const cardHeight = document.documentElement.clientHeight * 0.50;
    const cardWidth = cardHeight * 1.42;

    const imageAddTemporary = document.createElement('img');
    imageAddTemporary.src = '/image/card-photo-bw.jpg'; 
    imageAddTemporary.onload = () => {

        // if (imageAddTemporary.width > imageAddTemporary.height) {
        //     console.log('image horozontal');
        // } else {
        //     console.log('image vertical');
        // }

        // console.log('/', imageAddTemporary.width / imageAddTemporary.height)
        if (imageAddTemporary.width / imageAddTemporary.height >= 1.42) {
            cardphotoImage.style.height = cardWidth + 'px'; 

        } else {
            cardphotoImage.style.width = cardWidth + 'px'; 
        }  
    }

    cardphotoImage.src = '/image/card-photo-bw.jpg';
}

export function setSizeCardphotoBorder() {
    const cardphoto = document.querySelector('.cardphoto');
    const cardphotoImage = document.querySelector('.cardphoto-image');
    // const cardphotoBorder = document.querySelector('.cardphoto-border');
    const cardphotoForm = document.querySelector('.cardphoto-form');

    const imageWidth = cardphotoImage.getBoundingClientRect().width;
    const imageHeight = cardphotoImage.getBoundingClientRect().height;
    const cardHeight = document.documentElement.clientHeight * 0.50;
    const cardWidth = cardHeight * 1.42;

    // if (imageWidth > imageHeight) {
    //     console.log('image horizontal');

    //     cardphotoBorder.style.width = cardWidth + 'px';
    //     cardphotoBorder.style.height = cardHeight + 'px';
        
    // } else {
    //     console.log('image vertical');

    //     cardphotoBorder.style.width = cardHeight + 'px';
    //     cardphotoBorder.style.height = cardWidth + 'px';
    // }

    cardphotoForm.style.width = cardphotoBorder.style.width;
    cardphotoForm.style.height = cardphotoBorder.style.height;

    cardphoto.style.width = cardphotoBorder.style.width;
    cardphoto.style.height = cardphotoBorder.style.height;
}
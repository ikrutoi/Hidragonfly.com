export function addStartImage() {
    const cardphotoCard = document.querySelector('.cardphoto-card');
    const cardphotoImage = document.querySelector('.cardphoto-image');

    const cardWidth = document.documentElement.clientHeight * 0.5 * 1.42;
    const cardHeight = document.documentElement.clientHeight * 0.5;

    const imageAddTemporary = document.createElement('img');
    imageAddTemporary.src = '/image/card-photo-bw.jpg';
    imageAddTemporary.onload = () => {
        // if (imageAddTemporary.width > imageAddTemporary.height) {
        //     console.log('image horozontal');
        // } else {
        //     console.log('image vertical');
        // }

        // console.log(
        //     'width / height',
        //     imageAddTemporary.width,
        //     imageAddTemporary.height
        // );
        if (imageAddTemporary.width / imageAddTemporary.height >= 1.42) {
            cardphotoImage.style.height = cardHeight + 'px';
        } else {
            cardphotoImage.style.width = cardWidth + 'px';
        }
    };

    cardphotoCard.style.width = cardWidth + 'px';
    cardphotoCard.style.height = cardHeight + 'px';

    cardphotoImage.src = '/image/card-photo-bw.jpg';
}

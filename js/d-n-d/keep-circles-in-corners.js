export function keepCirclesInCorners(myX, myY, widthArea, heightArea) {
  
    let circle1 = document.querySelector('.crop-circle-1');
    let circle1start = document.querySelector('.crop-circle-1start');
    let circle2 = document.querySelector('.crop-circle-2');
    let circle2start = document.querySelector('.crop-circle-2start');
    let circle3 = document.querySelector('.crop-circle-3');
    let circle3start = document.querySelector('.crop-circle-3start');
    let circle4 = document.querySelector('.crop-circle-4');
    let circle4start = document.querySelector('.crop-circle-4start');
    const rubberBlockImgLeft = document.querySelector('.new-img-rubber').getBoundingClientRect().left;
    const rubberBlockImgTop = document.querySelector('.new-img-rubber').getBoundingClientRect().top;
    const deltaCircle = 5.5;

    circle1.style.backgroundColor = 'red';
    circle1.style.left = myX - rubberBlockImgLeft - deltaCircle + 'px';
    circle1.style.top = myY - rubberBlockImgTop - deltaCircle + 'px';
    circle1start.style.left = myX - deltaCircle - rubberBlockImgLeft + 'px';
    circle1start.style.top = myY - deltaCircle - rubberBlockImgTop + 'px';
    
    circle2.style.backgroundColor = 'green';
    circle2.style.left = myX - rubberBlockImgLeft - deltaCircle + widthArea + 'px';
    circle2.style.top = myY - rubberBlockImgTop - deltaCircle + 'px';
    circle2start.style.left = myX - deltaCircle - rubberBlockImgLeft + widthArea +'px';
    circle2start.style.top = myY - deltaCircle - rubberBlockImgTop + 'px';

    circle3.style.backgroundColor = 'orange';
    circle3.style.left = myX - rubberBlockImgLeft - deltaCircle + widthArea + 'px';
    circle3.style.top = myY - rubberBlockImgTop - deltaCircle + heightArea + 'px';
    circle3start.style.left = myX - deltaCircle - rubberBlockImgLeft + widthArea + 'px';
    circle3start.style.top = myY - deltaCircle - rubberBlockImgTop + heightArea + 'px';

    circle4.style.backgroundColor = 'purple';
    circle4.style.left = myX - rubberBlockImgLeft - deltaCircle + 'px';
    circle4.style.top = myY - rubberBlockImgTop - deltaCircle + heightArea + 'px';
    circle4start.style.left = myX - deltaCircle - rubberBlockImgLeft + 'px';
    circle4start.style.top = myY - deltaCircle - rubberBlockImgTop + heightArea + 'px';
};

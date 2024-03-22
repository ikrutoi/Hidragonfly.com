import { newElem } from "./new-element.js";

const blockNewImg = document.querySelector('.new-img-rubber');

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-1'], 'top: -5px; left: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-2'], 'top: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-3'], 'bottom: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-4'], 'bottom: -5px; left: -5px;');
newElem(blockNewImg, 'div', ['new-img-new-area']);

export function dragNDrop() { 
    const circle = document.querySelectorAll('.crop-circle');
    const circle1 = document.querySelector('.crop-circle-1');
    const circle2 = document.querySelector('.crop-circle-2');
    const circle3 = document.querySelector('.crop-circle-3');
    const circle4 = document.querySelector('.crop-circle-4');
    const newArea = document.querySelector('.new-img-new-area');

    circle.forEach((el) => {            
        el.ondragstart = function() {
            return false;
        };
        
        el.onmousedown = function(ev) {
            // console.log(el.getBoundingClientRect());
            const retreatBlockImgLeft = document.querySelector('.new-img-rubber').getBoundingClientRect().left;
            const retreatBlockImgTop = document.querySelector('.new-img-rubber').getBoundingClientRect().top;
            
            moveAt(ev.clientX, ev.clientY);
            
            function moveAt(pageX, pageY) {
                const elLeft = pageX  - retreatBlockImgLeft - el.getBoundingClientRect().width / 2 + 'px';
                const elTop = pageY - retreatBlockImgTop - el.getBoundingClientRect().height / 2 + 'px';

                el.style.left = elLeft;
                el.style.top = elTop;

                el.className.split(' ').forEach((nameClass) => {
                    if(
                        nameClass == 'crop-circle-1' || 
                        nameClass == 'crop-circle-2' || 
                        nameClass == 'crop-circle-3' || 
                        nameClass == 'crop-circle-4') {
                            recordStyleTopLeft(nameClass);
                        } 
                })
                
                function recordStyleTopLeft(nameClass) {
                    switch (nameClass) {
                        case 'crop-circle-1': 
                        circle2.style.top = elTop;
                        circle4.style.left = elLeft;
                        break;
                        case 'crop-circle-2': 
                        circle1.style.top = elTop;
                        circle3.style.left = elLeft;
                        break;
                        case 'crop-circle-3': 
                        circle4.style.top = elTop;
                        circle2.style.left = elLeft;
                        break;
                        case 'crop-circle-4': 
                        circle3.style.top = elTop;
                        circle1.style.left = elLeft;
                        break;       
                    }
                }

                console.log(circle1.getBoundingClientRect());
                const elWidth = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left;
                const elHeight = circle3.getBoundingClientRect().top - circle2.getBoundingClientRect().top;
                // console.log('w1: ', elWidth, 'h1: ', elHeight);
                // const pp = circle1.getBoundingClientRect().left;
                // console.log('elTop: ', elTop);
                // console.log('elLeft: ', elLeft);
                // console.log(ev);
                const styleNewImgRubber = `
                    left: ${circle1.getBoundingClientRect().left}px; 
                    top: ${circle1.getBoundingClientRect().top}px;
                    width: ${elWidth}px;
                    height: ${elHeight}px;`;
                // newArea.setAttribute('style', `${styleNewImgRubber}`);
                console.log(newArea.getBoundingClientRect());
                // console.log('w2: ', newArea.style.width, 'h2: ', newArea.style.top);
            } 
        
            function onMouseMove(ev) {
                moveAt(ev.clientX, ev.clientY)
            }

            document.addEventListener('mousemove', onMouseMove);

            el.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                el.onmouseup = null;
            }
        };
    });
};

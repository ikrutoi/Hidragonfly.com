import { newElem } from "./new-element.js";

const blockNewImg = document.querySelector('.new-img-rubber');

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-1'], 'top: -5px; left: -5px; background-color: blue;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-1start'], 'top: -5px; left: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-2'], 'top: -5px; right: -5px; background-color: red;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-2start'], 'top: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-3'], 'bottom: -5px; right: -5px; background-color: green;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-3start'], 'bottom: -5px; right: -5px;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-4'], 'bottom: -5px; left: -5px; background-color: pink;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-4start'], 'bottom: -5px; left: -5px;');
newElem(blockNewImg, 'div', ['new-img-new-area']);

export function dragNDrop() { 
    const circle = document.querySelectorAll('.crop-circle');
    const circle1 = document.querySelector('.crop-circle-1');
    const circle1start = document.querySelector('.crop-circle-1start');
    const circle2 = document.querySelector('.crop-circle-2');
    const circle2start = document.querySelector('.crop-circle-2start');
    const circle3 = document.querySelector('.crop-circle-3');
    const circle3start = document.querySelector('.crop-circle-3start');
    const circle4 = document.querySelector('.crop-circle-4');
    const circle4start = document.querySelector('.crop-circle-4start');
    const newArea = document.querySelector('.new-img-new-area');

    circle.forEach((el) => {            
        el.ondragstart = function() {
            return false;
        };
        
        el.onmousedown = function(ev) {
            const retreatBlockImgTop = document.querySelector('.new-img-rubber').getBoundingClientRect().top;
            const retreatBlockImgLeft = document.querySelector('.new-img-rubber').getBoundingClientRect().left;
            const blockNewImgTop = document.querySelector('.new-img-rubber').getBoundingClientRect().top;
            
            moveAt(ev.clientX, ev.clientY);
            
            function moveAt(pageX, pageY) {
                const elTop = pageY - retreatBlockImgTop - el.getBoundingClientRect().height / 2 + 'px';
                const elLeft = pageX  - retreatBlockImgLeft - el.getBoundingClientRect().width / 2 + 'px';

                el.style.top = elTop;
                el.style.left = elLeft;

                el.className.split(' ').forEach((nameClass) => {
                    if(
                        nameClass == 'crop-circle-1' || 
                        nameClass == 'crop-circle-2' || 
                        nameClass == 'crop-circle-3' || 
                        nameClass == 'crop-circle-4') {
                            keepProportions(nameClass);
                        } 
                })
                
                function keepProportions(nameClass) {

                    switch (nameClass) {
                        case 'crop-circle-1': {
                            const c1Left = circle1start.getBoundingClientRect().left;
                            const delta1 = (circle1.getBoundingClientRect().left - c1Left) / 1.42;
                            
                            circle1.style.top = delta1 +'px';
                            circle2.style.top = circle1.style.top;
                            circle4.style.left = circle1.style.left;
                        }
                        break;
                        case 'crop-circle-2': {
                            const c2Left = circle2start.getBoundingClientRect().left;
                            const delta2 = (c2Left - circle2.getBoundingClientRect().left) / 1.42;
                            
                            circle2.style.top = delta2 +'px';
                            circle1.style.top = circle2.style.top;
                            circle3.style.left = circle2.style.left;
                        }
                        break;
                        case 'crop-circle-3': {    
                            const c3Left = circle3start.getBoundingClientRect().left;
                            const delta3 = (c3Left - circle3.getBoundingClientRect().left) / 1.42;
                            
                            circle3.style.top = circle3start.getBoundingClientRect().top - blockNewImgTop - delta3 + 'px';
                            circle4.style.top = circle3.style.top;
                            circle2.style.left = circle3.style.left;
                        }
                        break;
                        case 'crop-circle-4': {
                            const c4Left = circle4start.getBoundingClientRect().left;
                            const delta4 = (circle4.getBoundingClientRect().left - c4Left) / 1.42;
                            
                            circle4.style.top = circle4start.getBoundingClientRect().top - blockNewImgTop - delta4 + 'px';
                            circle3.style.top = circle4.style.top;
                            circle1.style.left = circle4.style.left;
                        }
                        break;       
                    }
                }

                const elWidth = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left;
                const elHeight = circle3.getBoundingClientRect().top - circle2.getBoundingClientRect().top;
                const styleNewImgRubber = `
                    width: ${elWidth}px;
                    height: ${elHeight}px;`;
                newArea.setAttribute('style', `${styleNewImgRubber}`);
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

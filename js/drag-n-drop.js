import { newElem } from "./new-element.js";

const blockNewImg = document.querySelector('.new-img-rubber');
const blockMain = document.querySelector('.main-full');

newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-1'], 'top: -5px; left: -5px; background-color: blue;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-1start'], 'top: -5px; left: -5px; background-color: orange;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-2'], 'top: -5px; right: -5px; background-color: red;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-2start'], 'top: -5px; right: -5px; background-color: orange;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-3'], 'bottom: -5px; right: -5px; background-color: green;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-3start'], 'bottom: -5px; right: -5px; background-color: orange;');
newElem(blockNewImg, 'span', ['crop-circle', 'crop-circle-4'], 'bottom: -5px; left: -5px; background-color: pink;');
newElem(blockNewImg, 'span', ['crop-circle-start', 'crop-circle-4start'], 'bottom: -5px; left: -5px; background-color: orange;');
newElem(blockMain, 'div', ['new-img-new-area']);

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
        
        el.onpointerdown = function(ev) {
            el.setPointerCapture(ev.pointerId);
            
            const rubberBlockImgTop = document.querySelector('.new-img-rubber').getBoundingClientRect().top;
            const rubberBlockImgLeft = document.querySelector('.new-img-rubber').getBoundingClientRect().left;
            
            moveAt(ev.clientX, ev.clientY);
            
            function moveAt(pageX, pageY) {
                let elTop = pageY - rubberBlockImgTop - el.getBoundingClientRect().height / 2 + 'px';
                let elLeft = pageX  - rubberBlockImgLeft - el.getBoundingClientRect().width / 2 + 'px';
                el.style.top = elTop;
                el.style.left = elLeft;

                // console.log(`
                // 'ev.pageX', ${pageX}, 
                // 'ev.pageY', ${pageY}, 
                // 'rubber.left', ${rubberBlockImgLeft}, 
                // 'rubbertop', ${rubberBlockImgTop},
                // 'el.st.left', ${el.style.left}, 
                // 'el.st.top', ${el.style.top},
                // 'el.get.left', ${el.getBoundingClientRect().left},
                // 'el.get.top', ${el.getBoundingClientRect().top}
                // `
                // );

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
                            let c1Left = circle1start.getBoundingClientRect().left;
                            let c1Top = circle1start.getBoundingClientRect().top - rubberBlockImgTop;
                            let delta1 = (circle1.getBoundingClientRect().left - c1Left) / 1.42;
                              
                            circle1.style.top = c1Top + delta1 +'px';
                            circle2.style.top = circle1.style.top;
                            circle4.style.left = circle1.style.left;
                        }
                        break;
                        case 'crop-circle-2': {
                            let c2Left = circle2start.getBoundingClientRect().left;
                            let c2Top = circle2start.getBoundingClientRect().top - rubberBlockImgTop;
                            let delta2 = (c2Left - circle2.getBoundingClientRect().left) / 1.42;
                            
                            circle2.style.top = c2Top + delta2 +'px';
                            circle1.style.top = circle2.style.top;
                            circle3.style.left = circle2.style.left;
                        }
                        break;
                        case 'crop-circle-3': {    
                            let c3Left = circle3start.getBoundingClientRect().left;
                            // let c2Top = circle3start.getBoundingClientRect().top - rubberBlockImgTop;
                            let delta3 = (c3Left - circle3.getBoundingClientRect().left) / 1.42;
                            
                            circle3.style.top = circle3start.getBoundingClientRect().top - rubberBlockImgTop - delta3 + 'px';
                            circle4.style.top = circle3.style.top;
                            circle2.style.left = circle3.style.left;
                        }
                        break;
                        case 'crop-circle-4': {
                            let c4Left = circle4start.getBoundingClientRect().left;
                            let delta4 = (circle4.getBoundingClientRect().left - c4Left) / 1.42;
                            
                            circle4.style.top = circle4start.getBoundingClientRect().top - rubberBlockImgTop - delta4 + 'px';
                            circle3.style.top = circle4.style.top;
                            circle1.style.left = circle4.style.left;
                        }
                        break;       
                    }
                }

            let elNewWidth = circle2.getBoundingClientRect().left - circle1.getBoundingClientRect().left;
            let elNewHeight = circle3.getBoundingClientRect().top - circle2.getBoundingClientRect().top;
            let elNewLeft = el.getBoundingClientRect().left - blockMain.getBoundingClientRect().left;
            let elNewTop = circle1.getBoundingClientRect().top;

            newArea.setAttribute('style', `width: ${elNewWidth}px; height: ${elNewHeight}px; left: ${elNewLeft}px; top: ${elNewTop}`);

            } 
    
            function onPointerMove(ev) {
                moveAt(ev.clientX, ev.clientY)
            }

            document.addEventListener('pointermove', onPointerMove);

            el.onpointerup = function() {
                
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
                            circle1start.style.left = el.style.left;
                            circle1start.style.top = el.style.top;
                            circle2start.style.top = el.style.top;
                            circle4start.style.left = el.style.left;
                        }
                        break;
                        case 'crop-circle-2': {
                            circle2start.style.left = el.style.left;
                            circle2start.style.top = el.style.top;
                            circle1start.style.top = el.style.top;
                            circle3start.style.left = el.style.left;
                        }
                        break;
                        case 'crop-circle-3': {    
                            circle3start.style.left = el.style.left;
                            circle3start.style.top = el.style.top;
                            circle2start.style.left = el.style.left;
                            circle4start.style.top = el.style.top;
                        }
                        break;
                        case 'crop-circle-4': {
                            circle4start.style.left = el.style.left;
                            circle4start.style.top = el.style.top;
                            circle1start.style.left = el.style.left;
                            circle3start.style.top = el.style.top;
                        }
                        break;       
                    }
                }

                document.removeEventListener('pointermove', onPointerMove);

                el.onpointermove = null;
                el.onpointerup = null;
            }
        };
    });
};
